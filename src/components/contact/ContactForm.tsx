import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Modal } from "../common/Modal";
import { useContactValidation } from "../../hooks/useContactValidation";
import { CONTACT_INFO } from "../../constants/social";
import { ContactFormProps } from "../../types/contact";
import { ModalType } from "../../types/ui";

export const ContactForm: React.FC<ContactFormProps> = ({ planSelection }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("atendimento");
  const [name, setName] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
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

  const SERVICE_TYPES = [
    { value: "Atendimento Unificado", label: "Atendimento Unificado" },
    { value: "IA no Atendimento", label: "IA no Atendimento" },
    { value: "Sites & Presença Online", label: "Sites & Presença Online" },
  ];

  const buildWhatsAppMessage = () => {
    let message = `Olá! Me chamo *${name}*.\n\n`;

    if (planSelection) {
      message += `Fiz uma simulação no site e gostaria de saber mais sobre:\n\n`;

      const {
        includeSupport,
        inboxes,
        attendants,
        aiChannels,
        aiAddons,
        siteEnabled,
        sitePages,
      } = planSelection;

      if (includeSupport) {
        message += `✅ *Atendimento Unificado*\n   - ${inboxes} Caixa(s) de Entrada\n   - ${attendants} Atendente(s)\n`;
      }

      if (aiChannels) {
        // aiChannels is { whatsapp: true, ... }
        const activeChannels = Object.entries(aiChannels)
          .filter(([_, active]) => active)
          .map(([key]) =>
            key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          ); // Format label

        if (activeChannels.length > 0) {
          message += `✅ *IA no Atendimento*\n   - Canais: ${activeChannels.join(", ")}\n`;
        }
      }

      if (aiAddons) {
        const activeAddons = Object.entries(aiAddons)
          .filter(([_, active]) => active)
          .map(([key]) => key.toUpperCase());

        if (activeAddons.length > 0) {
          message += `   - Add-ons: ${activeAddons.join(", ")}\n`;
        }
      }

      if (siteEnabled) {
        message += `✅ *Sites & Presença Online*\n   - ${sitePages} página(s)\n`;
      }
    } else {
      const typeLabel =
        SERVICE_TYPES.find((s) => s.value === serviceType)?.label ||
        serviceType;
      message += `Gostaria de saber mais sobre: *${typeLabel}*.\n`;
    }

    message += `\n\nPoderiam me explicar melhor como funciona?`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (company) return; // Honeypot

    // Pass 'simulacao' as challenge if planSelection exists, to satisfy validation
    const challengeValue = planSelection ? "simulacao" : serviceType;

    const validation = validateForm({ name, challenge: challengeValue });

    if (!validation.isValid && validation.error) {
      showModal(
        validation.error.title,
        validation.error.message,
        validation.error.type,
      );
      return;
    }

    if (!turnstileToken) {
      console.warn("Turnstile challenge not yet solved.");
      showModal(
        "Verificação Necessária",
        "Por favor, aguarde a verificação de segurança.",
        "warning",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const message = buildWhatsAppMessage();
      const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`;

      window.open(url, "_blank");
      localStorage.removeItem("unificando_plan_selection");

      showModal(
        "Redirecionando",
        "Estamos abrindo seu WhatsApp para tirar suas dúvidas. Se não abrir, verifique o bloqueador de pop-ups.",
        "success",
        () => setIsSubmitting(false),
      );
    } catch (error) {
      console.error("Error redirecting:", error);
      showModal("Erro", "Não foi possível redirecionar.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all print:bg-white print:text-black"
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
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
              Qual tipo de serviço você tem dúvida?
            </label>
            <div className="relative">
              <select
                required
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all appearance-none cursor-pointer"
              >
                {SERVICE_TYPES.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-slate-900 text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">
                Simulação Anexada
              </p>
            </div>
            <p className="text-xs text-indigo-100 font-medium leading-relaxed">
              Os itens que você selecionou serão enviados na mensagem para
              focarmos na sua dúvida.
            </p>
          </div>
        )}

        <div className="overflow-hidden rounded-xl">
          <Turnstile
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            options={{
              theme: "dark",
              size: "flexible",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!turnstileToken || isSubmitting}
          className={`w-full py-5 rounded-2xl font-black text-[10px] transition-all shadow-xl uppercase tracking-[0.2em] mt-6 flex items-center justify-center gap-3
              ${
                turnstileToken && !isSubmitting
                  ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
        >
          {isSubmitting ? (
            "REDIRECIONANDO..."
          ) : (
            <>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>CONTINUAR NO WHATSAPP</span>
            </>
          )}
        </button>
        <p className="text-center text-[8px] font-black text-slate-600 mt-6 uppercase tracking-[0.3em]">
          Você será redirecionado para tirar dúvidas.
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
