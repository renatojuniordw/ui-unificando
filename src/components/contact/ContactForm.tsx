import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Modal, ModalType } from "../common/Modal";
import { WebhookService } from "../../services/webhook.service";

interface ContactFormProps {
  planSelection?: any;
}

export const ContactForm: React.FC<ContactFormProps> = ({ planSelection }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [challenge, setChallenge] = useState("perda_mensagens");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [company, setCompany] = useState(""); // Honeypot

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

  const CHALLENGES = [
    {
      value: "perda_mensagens",
      label: "Perco mensagens e demoro para responder",
    },
    {
      value: "muitas_conversas",
      label: "Tenho muitas conversas e pouco tempo",
    },
    {
      value: "equipe_confusa",
      label: "Minha equipe se confunde no atendimento",
    },
    {
      value: "fora_horario",
      label: "Atendo fora do horário e isso me sobrecarrega",
    },
    {
      value: "perguntas_repetidas",
      label: "Recebo muitas perguntas repetidas",
    },
    {
      value: "qualificacao",
      label: "Preciso qualificar melhor quem entra em contato",
    },
    {
      value: "agendamento_auto",
      label: "Quero agendar atendimentos automaticamente",
    },
    {
      value: "invisibilidade_google",
      label: "Tenho negócio, mas não apareço no Google",
    },
    {
      value: "site_sem_confianca",
      label: "Meu site não passa confiança (ou não tenho site)",
    },
    { value: "escalar_vendas", label: "Quero vender mais sem aumentar equipe" },
    { value: "outro", label: "Outro desafio" },
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Honeypot check
    if (company) {
      return;
    }

    if (!name.trim() || !whatsapp.trim() || !challenge) {
      showModal(
        "Campos Obrigatórios",
        "Por favor, preencha todos os campos obrigatórios.",
        "warning",
      );
      return;
    }

    if (!turnstileToken) {
      console.warn("Turnstile challenge not yet solved.");
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      name,
      whatsapp,
      challenge,
      planSelection,
      turnstileToken,
      submittedAt: new Date().toISOString(),
      source: "web_contact_form",
    };

    // Save to localStorage as a backup
    localStorage.setItem(
      "unificando_contact_data",
      JSON.stringify(submissionData),
    );

    try {
      await WebhookService.sendContact(submissionData);

      // Success
      setSubmitted(true);
      // Clear plan selection from storage as it's been submitted
      localStorage.removeItem("unificando_plan_selection");
    } catch (error) {
      console.error("Error submitting form:", error);
      showModal(
        "Erro no Envio",
        "Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-800 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px]"></div>
      {submitted ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-indigo-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
            Mensagem Recebida
          </h3>
          <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest">
            Aguarde nosso contato via WhatsApp.
          </p>
        </div>
      ) : (
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
          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
              WhatsApp <span className="text-indigo-500">*</span>
            </label>
            <PhoneInput
              defaultCountry="br"
              value={whatsapp}
              onChange={(phone) => setWhatsapp(phone)}
              disabled={isSubmitting}
              inputClassName="!w-full !bg-white/5 !border !border-white/10 !text-white !px-5 !py-4 !rounded-r-2xl !rounded-l-none !focus:ring-2 !focus:ring-indigo-500 !outline-none !font-medium !transition-all"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!bg-white/5 !border !border-white/10 !text-white !px-3 !rounded-l-2xl !border-r-0 !hover:bg-white/10",
                dropdownStyleProps: {
                  className: "!bg-slate-900 !text-white !border-slate-700",
                  listItemClassName: "!hover:bg-slate-800 !text-white",
                },
              }}
              forceDialCode={true}
              placeholder="(00) 90000-0000"
            />
          </div>

          {/* Honeypot Field */}
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

          <div>
            <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
              Qual é o principal desafio hoje?
            </label>
            <div className="relative">
              <select
                required
                value={challenge}
                onChange={(event) => setChallenge(event.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all appearance-none cursor-pointer"
              >
                {CHALLENGES.map((option) => (
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
          {/* Cloudflare Turnstile */}
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
            className={`w-full py-5 rounded-2xl font-black text-[10px] transition-all shadow-xl uppercase tracking-[0.2em] mt-6 
              ${
                turnstileToken && !isSubmitting
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
          >
            {isSubmitting
              ? "ENVIANDO..."
              : turnstileToken
                ? "SAIBA MAIS"
                : "AGUARDANDO VERIFICAÇÃO..."}
          </button>
          <p className="text-center text-[8px] font-black text-slate-600 mt-6 uppercase tracking-[0.3em]">
            Seus dados estão seguros. Não enviamos spam.
          </p>
        </form>
      )}
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
