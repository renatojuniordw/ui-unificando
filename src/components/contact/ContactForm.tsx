import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { useContactValidation } from "../../hooks/useContactValidation";
import { CONTACT_INFO } from "../../constants/social";
import { ContactFormProps, ServiceSelection } from "../../types/contact";
import { ModalType } from "../../types/ui";
import { ServiceSelector } from "./ServiceSelector";
import { SimulationSummary } from "./SimulationSummary";
import { buildWhatsAppMessage } from "./ContactForm.utils";
import { pushDataLayer } from "../../utils/analytics";

const SERVICE_OPTIONS = [
  {
    id: "atendimento" as keyof ServiceSelection,
    label: "Atendimento Unificado",
    emoji: "💬",
  },
  {
    id: "ia" as keyof ServiceSelection,
    label: "IA no Atendimento",
    emoji: "🤖",
  },
  {
    id: "site" as keyof ServiceSelection,
    label: "Sites & Presença Online",
    emoji: "🌐",
  },
];

export const ContactForm: React.FC<ContactFormProps> = ({ planSelection }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<ServiceSelection>({
    atendimento: false,
    ia: false,
    site: false,
  });
  const [name, setName] = useState("");

  const [company, setCompany] = useState(""); // Honeypot

  // Validation Hook
  const { validateForm } = useContactValidation();

  // Modal State
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: ModalType;
    onClose?: () => void;
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "error",
  });

  const showModal = (
    title: string,
    message: string,
    type: ModalType = "error",
    onClose?: () => void,
  ) => {
    setModal({ isOpen: true, title, message, type, onClose });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
    if (modal.onClose) modal.onClose();
  };

  const handleServiceChange = (
    id: keyof ServiceSelection,
    checked: boolean,
  ) => {
    setSelectedServices((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (company) return; // Honeypot

    // Validate at least one service is selected (if no planSelection)
    if (!planSelection) {
      const hasSelection = Object.values(selectedServices).some((v) => v);
      if (!hasSelection) {
        showModal(
          "Seleção Necessária",
          "Por favor, selecione ao menos um serviço sobre o qual você tem dúvidas.",
          "warning",
        );
        return;
      }
    }

    // Pass 'simulacao' as challenge if planSelection exists, to satisfy validation
    const challengeValue = planSelection ? "simulacao" : "servicos";

    const validation = validateForm({ name, challenge: challengeValue });

    if (!validation.isValid && validation.error) {
      showModal(
        validation.error.title,
        validation.error.message,
        validation.error.type,
      );
      return;
    }

    setIsSubmitting(true);
    pushDataLayer({
      event: "lead_submit",
      lead_method: "whatsapp_redirect",
      lead_source: "contact_form",
      has_plan_selection: Boolean(planSelection),
      selected_services: planSelection
        ? "plan_selection"
        : Object.entries(selectedServices)
            .filter(([, v]) => v)
            .map(([k]) => k)
            .join(",") || "none",
    });

    try {
      const message = buildWhatsAppMessage({
        name,
        selectedServices,
        planSelection,
        serviceOptions: SERVICE_OPTIONS,
      });
      const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;

      window.open(url, "_blank");
      localStorage.removeItem("unificando_plan_selection");
      pushDataLayer({
        event: "lead_submit_success",
        lead_method: "whatsapp_redirect",
        lead_source: "contact_form",
      });

      showModal(
        "Redirecionando",
        "Estamos abrindo seu WhatsApp para tirar suas dúvidas.",
        "success",
        () => setIsSubmitting(false),
      );
    } catch (error) {
      console.error("Error redirecting:", error);
      pushDataLayer({
        event: "lead_submit_error",
        lead_method: "whatsapp_redirect",
        lead_source: "contact_form",
      });
      showModal("Erro", "Não foi possível redirecionar.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isButtonDisabled = isSubmitting;

  return (
    <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-800 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px]"></div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
            Nome Completo <span className="text-indigo-500">*</span>
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all"
            placeholder="Como devemos te chamar?"
          />
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {!planSelection ? (
          <ServiceSelector
            options={SERVICE_OPTIONS}
            selectedServices={selectedServices}
            onChange={handleServiceChange}
            disabled={isSubmitting}
          />
        ) : (
          <SimulationSummary />
        )}

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full py-5 rounded-2xl font-black text-[10px] transition-all shadow-xl uppercase tracking-[0.2em] mt-6 flex items-center justify-center gap-3
              ${
                !isButtonDisabled
                  ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
        >
          {isSubmitting ? (
            "REDIRECIONANDO..."
          ) : (
            <>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>CONTINUAR NO WHATSAPP</span>
            </>
          )}
        </button>
        <p className="text-center text-[9px] font-bold text-indigo-400 mt-6 uppercase tracking-[0.15em] flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Atendimento Inteligente Imediato • 24/7
        </p>
      </form>
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
};
