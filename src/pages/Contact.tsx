import React, { useEffect, useState } from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";

import { Turnstile } from "@marsidev/react-turnstile";

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [planSelection, setPlanSelection] = useState<any>(null);
  const [challenge, setChallenge] = useState("perda_mensagens");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

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

  useEffect(() => {
    const savedSelection = localStorage.getItem("unificando_plan_selection");
    if (savedSelection) {
      try {
        const parsed = JSON.parse(savedSelection);
        setPlanSelection(parsed);
      } catch (error) {
        console.error("Error parsing plan selection:", error);
      }
    }

    console.log(
      "import.meta.env.VITE_N8N_WEBHOOK_URL:",
      import.meta.env.VITE_TURNSTILE_SITE_KEY
    );
  }, []);

  const [company, setCompany] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }

    setWhatsapp(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Honeypot check
    if (company) {
      return;
    }

    if (!name.trim() || !whatsapp.trim() || !challenge) {
      alert("Por favor, preencha todos os campos obrigatórios.");
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
      JSON.stringify(submissionData)
    );

    try {
      const webhookUrl = `${import.meta.env.VITE_N8N_WEBHOOK_URL}/api/contact`;

      console.log("Webhook URL:", webhookUrl);

      if (!webhookUrl) {
        throw new Error("Webhook URL not configured");
      }

      const idem = crypto.randomUUID();
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idem,
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.status}`);
      }

      // Success
      setSubmitted(true);
      localStorage.removeItem("unificando_plan_selection");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Fale Conosco | Diagnóstico Gratuito Unificando"
        description="Agende uma conversa com nossos especialistas. Diagnóstico real do seu negócio sem custo e sem compromisso."
        canonical="/contato"
      />
      <section className="py-24 bg-slate-50 min-h-[80vh] flex items-center text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">
              Vamos Conversar
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
              Entenda o próximo passo{" "}
              <span className="text-indigo-600">certo.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
              Oferecemos um diagnóstico gratuito para identificar em que fase do
              ecossistema seu negócio está e o que realmente faz sentido
              implementar agora.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Diagnóstico real",
                  description:
                    "Análise do seu atendimento, processos e presença digital, sem custo.",
                },
                {
                  title: "Postura consultiva",
                  description:
                    "Foco no seu cenário atual, sem pressão, sem promessa vazia.",
                },
                {
                  title: "Resposta ágil",
                  description:
                    "Retorno em até 2 horas úteis, em horário comercial.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm"
                >
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {planSelection && (
              <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-[2rem]">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2 block">
                  Seleção Prévia:
                </span>
                <p className="text-indigo-900 font-bold text-sm">
                  Plano Personalizado (R$ {planSelection.totals?.monthly}/mês)
                </p>
                <p className="text-indigo-400 text-xs font-medium mt-1">
                  Seus dados de simulação já estão anexados ao contato.
                </p>
              </div>
            )}
          </div>

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
                  <input
                    required
                    type="tel"
                    value={whatsapp}
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all"
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
                    ? "AGENDAR CONVERSA"
                    : "AGUARDANDO VERIFICAÇÃO..."}
                </button>
                <p className="text-center text-[8px] font-black text-slate-600 mt-6 uppercase tracking-[0.3em]">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
    /**
     * @note Data Saving Logic
     * The form data is saved to localStorage under 'unificando_contact_data'.
     * This allows external scripts or a future implementation to pick up this data and send it to a webhook.
     */
  );
};
