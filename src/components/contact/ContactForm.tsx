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
  {
    id: "hospedagem" as keyof ServiceSelection,
    label: "Hospedagem Inteligente",
    emoji: "🚀",
  },
];

export const ContactForm: React.FC<ContactFormProps> = ({ planSelection }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<ServiceSelection>({
    atendimento: false,
    ia: false,
    site: false,
    hospedagem: false,
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
          "SELEÇÃO OBRIGATÓRIA",
          "POR FAVOR, SELECIONE AO MENOS UM SERVIÇO SOBRE O QUAL VOCÊ TEM DÚVIDAS.",
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
        validation.error.title.toUpperCase(),
        validation.error.message.toUpperCase(),
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
        "REDIRECIONANDO",
        "ESTAMOS ABRINDO SEU WHATSAPP PARA INICIAR O DIAGNÓSTICO.",
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
      showModal("ERRO NO REDIRECIONAMENTO", "NÃO FOI POSSÍVEL REDIRECIONAR. TENTE NOVAMENTE.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isButtonDisabled = isSubmitting;

  return (
    <div className="bg-white p-8 md:p-12 border-4 border-slate-950 shadow-[12px_12px_0px_#000] text-left relative z-10 mx-auto w-full max-w-lg">
      <div className="absolute top-0 right-0 bg-slate-950 text-white font-black px-4 py-2 border-l-4 border-b-4 border-slate-950">
        //
      </div>
      <form onSubmit={handleSubmit} className="space-y-8 mt-6">
        <div>
          <label className="inline-block bg-[#ccff00] text-slate-950 text-[10px] font-black mb-3 uppercase tracking-widest px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
            SEU NOME <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="w-full bg-white border-4 border-slate-950 text-slate-950 font-black uppercase tracking-tight px-5 py-4 focus:bg-slate-50 focus:outline-none transition-colors shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-y-[2px] focus:translate-x-[2px]"
            placeholder="COMO DEVEMOS CHAMA-LO?"
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
          <div className="border-4 border-slate-950 p-4 shadow-[4px_4px_0px_#000]">
             <SimulationSummary />
          </div>
        )}

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full py-6 border-4 border-slate-950 font-black text-xs md:text-sm transition-all shadow-[6px_6px_0px_#000] uppercase tracking-[0.2em] mt-8 flex items-center justify-center gap-4
              ${
                !isButtonDisabled
                  ? "bg-[#25D366] text-black hover:bg-[#1ebd5a] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#000]"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
        >
          {isSubmitting ? (
            "AGUARDE..."
          ) : (
            <>
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>INICIAR DIAGNÓSTICO ESTRATÉGICO</span>
            </>
          )}
        </button>
        <div className="flex border-4 border-slate-950 p-3 items-center justify-center shadow-[4px_4px_0px_#000]">
            <p className="text-center text-[10px] font-black text-slate-950 uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-500 animate-pulse border border-slate-950"></span>
            ATENDIMENTO IA • ONLINE 24/7
            </p>
        </div>
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
