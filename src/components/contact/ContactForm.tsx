import React, { useState } from "react";
import { Modal } from "../common/Modal";
import { WhatsAppIcon } from "../common/icons/WhatsAppIcon";
import { useContactValidation } from "../../hooks/useContactValidation";
import { ModalType } from "../../types/ui";
import { pushDataLayer } from "../../utils/analytics";
import { SOCIAL_LINKS } from "../../constants/social";

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [company, setCompany] = useState(""); // Honeypot

  const { validateForm } = useContactValidation();

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (company) return; // Honeypot

    const validation = validateForm({ name, whatsapp, challenge: "projeto" });

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
      selected_services: "projeto",
    });

    try {
      const message = encodeURIComponent(
        `Olá! Me chamo ${name}${whatsapp ? `, WhatsApp ${whatsapp}` : ""}.\n\nGostaria de conversar sobre um projeto.`
      );
      const url = `${SOCIAL_LINKS.whatsapp}?text=${message}`;

      const win = window.open(url, "_blank");
      if (win) {
        // Remove a referência de opener (equivalente a noopener) sem perder a
        // detecção de popup bloqueado — com a feature "noopener" o retorno é sempre null.
        win.opener = null;
      } else {
        pushDataLayer({
          event: "lead_submit_error",
          lead_method: "whatsapp_redirect",
          lead_source: "contact_form",
        });
        showModal(
          "ERRO NO REDIRECIONAMENTO",
          "O NAVEGADOR BLOQUEOU A ABERTURA DO WHATSAPP. PERMITA POP-UPS E TENTE NOVAMENTE.",
          "error",
        );
        return;
      }

      pushDataLayer({
        event: "lead_submit_success",
        lead_method: "whatsapp_redirect",
        lead_source: "contact_form",
      });

      showModal(
        "REDIRECIONANDO",
        "ESTAMOS ABRINDO O WHATSAPP PARA CONTINUARMOS.",
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

  return (
    <div className="bg-white p-8 md:p-12 border-4 border-slate-950 shadow-[12px_12px_0px_#000] text-left relative z-10 mx-auto w-full max-w-lg">
      <div className="absolute top-0 right-0 bg-slate-950 text-white font-black px-4 py-2 border-l-4 border-b-4 border-slate-950">
        //
      </div>
      <form onSubmit={handleSubmit} className="space-y-8 mt-6">
        <div>
          <label htmlFor="contact-name" className="inline-block bg-[#ccff00] text-slate-950 text-[10px] font-black mb-3 uppercase tracking-widest px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
            SEU NOME <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            className="w-full bg-white border-4 border-slate-950 text-slate-950 font-black uppercase tracking-tight px-5 py-4 focus:bg-slate-50 focus:outline-none transition-colors shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-y-[2px] focus:translate-x-[2px]"
            placeholder="COMO DEVEMOS CHAMA-LO?"
          />
        </div>

        <div>
          <label htmlFor="contact-whatsapp" className="inline-block bg-slate-950 text-white text-[10px] font-black mb-3 uppercase tracking-widest px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#ccff00]">
            SEU WHATSAPP
          </label>
          <input
            id="contact-whatsapp"
            type="tel"
            inputMode="numeric"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            disabled={isSubmitting}
            className="w-full bg-white border-4 border-slate-950 text-slate-950 font-black uppercase tracking-tight px-5 py-4 focus:bg-slate-50 focus:outline-none transition-colors shadow-[4px_4px_0px_#000] focus:shadow-[2px_2px_0px_#000] focus:translate-y-[2px] focus:translate-x-[2px]"
            placeholder="(00) 00000-0000"
          />
        </div>

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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-6 border-4 border-slate-950 font-black text-xs md:text-sm transition-all shadow-[6px_6px_0px_#000] uppercase tracking-[0.2em] mt-8 flex items-center justify-center gap-4
              ${
                !isSubmitting
                  ? "bg-[#25D366] text-black hover:bg-[#1ebd5a] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#000]"
                  : "bg-slate-300 text-slate-500 cursor-not-allowed"
              }`}
        >
          {isSubmitting ? (
            "AGUARDE..."
          ) : (
            <>
              <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span>ENVIAR MENSAGEM</span>
            </>
          )}
        </button>
        <div className="flex border-4 border-slate-950 p-3 items-center justify-center shadow-[4px_4px_0px_#000]">
            <p className="text-center text-[10px] font-black text-slate-950 uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-green-500 animate-pulse border border-slate-950"></span>
            RESPOSTA EM ATÉ 24H
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