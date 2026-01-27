import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { PRICING } from "../constants/pricing";
import { useNavigate } from "react-router-dom";
import {
  ContractData,
  INITIAL_CONTRACT_DATA,
  ServiceSelection,
} from "../types/contract";
import { PersonalDataStep } from "../features/contract/components/steps/PersonalDataStep";
import { AtendimentoStep } from "../features/contract/components/steps/AtendimentoStep";
import { IAStep } from "../features/contract/components/steps/IAStep";
import { SiteStep } from "../features/contract/components/steps/SiteStep";
import { ReviewStep } from "../features/contract/components/steps/ReviewStep";
import { Modal, ModalType } from "../components/common/Modal";
import { WebhookService } from "../services/webhook.service";

export const ContractGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContractData>(INITIAL_CONTRACT_DATA);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Determine steps based on selection
  const steps = useMemo(() => {
    const s = [{ id: "personal", title: "Dados & Serviços" }];
    if (data.services.atendimento)
      s.push({ id: "atendimento", title: "Atendimento" });
    if (data.services.ia)
      s.push({ id: "ia", title: "Inteligência Artificial" });
    if (data.services.site) s.push({ id: "site", title: "Site & Presença" });
    s.push({ id: "review", title: "Revisão & Contrato" });
    return s;
  }, [data.services]);

  const currentStepId = steps[step]?.id;

  // Pricing Logic (Replicated/Adapted from usePlanCalculator)
  const pricing = useMemo(() => {
    const clampInt = (value: number, min: number) =>
      Math.max(min, Number.isFinite(value) ? Math.floor(value) : min);

    let setupTotal = 0;
    let monthlyTotal = 0;

    // Atendimento
    if (data.services.atendimento) {
      const normInboxes = clampInt(
        data.inboxes,
        PRICING.calculadora.rules.minimumInboxes,
      );
      const normAttendants = clampInt(
        data.attendants,
        PRICING.calculadora.rules.minimumAttendants,
      );

      setupTotal += PRICING.atendimento.base.setup;
      monthlyTotal += PRICING.atendimento.base.monthly;

      if (normInboxes > 1)
        monthlyTotal +=
          (normInboxes - 1) * PRICING.atendimento.extras.inbox.priceMonthly;
      if (normAttendants > 1)
        monthlyTotal +=
          (normAttendants - 1) *
          PRICING.atendimento.extras.attendant.priceMonthly;
    }

    // IA
    if (data.services.ia) {
      const baseSetup = PRICING.ia.base.setup;
      const baseMonthly = PRICING.ia.base.monthly;

      setupTotal += baseSetup;
      monthlyTotal += baseMonthly;

      const selectedCount = Object.values(data.aiChannels).filter(
        Boolean,
      ).length;
      const extraChannels = Math.max(0, selectedCount - 1);

      if (extraChannels > 0) {
        setupTotal +=
          extraChannels *
          (baseSetup * PRICING.ia.extras.channel.setupPercentage);
        monthlyTotal +=
          extraChannels *
          (baseMonthly * PRICING.ia.extras.channel.monthlyPercentage);
      }

      if (data.aiAddons.audio) {
        setupTotal += baseSetup * PRICING.ia.extras.audio.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.audio.monthlyPercentage;
      }
      if (data.aiAddons.api) {
        setupTotal += baseSetup * PRICING.ia.extras.api.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.api.monthlyPercentage;
      }
      if (data.aiAddons.google) {
        setupTotal += baseSetup * PRICING.ia.extras.google.setupPercentage;
        monthlyTotal +=
          baseMonthly * PRICING.ia.extras.google.monthlyPercentage;
      }
    }

    // Site
    if (data.services.site) {
      const normPages = clampInt(data.sitePages, 1);
      setupTotal += PRICING.site.landing.setup;
      if (normPages > 1) {
        setupTotal +=
          (normPages - 1) *
          (PRICING.site.landing.setup * PRICING.site.extraPage.setupPercentage);
      }
    }

    return { setup: setupTotal, monthly: monthlyTotal };
  }, [data]);

  // Handlers
  const handleInputChange = (field: keyof ContractData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const updateService = (service: keyof ServiceSelection) => {
    setData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: !prev.services[service] },
    }));
  };

  const validateStep = () => {
    const currentId = steps[step].id;

    if (currentId === "personal") {
      if (
        !data.name.trim() ||
        !data.document.trim() ||
        !data.email.trim() ||
        !data.whatsapp.trim()
      )
        return false;
      if (
        !data.services.atendimento &&
        !data.services.ia &&
        !data.services.site
      )
        return false;
    }

    // IA step usually requires at least one channel or description if implied, checking details presence
    if (currentId === "ia") {
      if (
        !data.aiDetails.trim() &&
        Object.values(data.aiChannels).every((v) => !v)
      )
        return false;
    }

    if (currentId === "site") {
      if (!data.siteDetails.trim()) return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
      window.scrollTo(0, 0);
    } else {
      showModal(
        "Atenção",
        "Por favor, preencha todas as informações obrigatórias desta etapa para continuar.",
        "warning",
      );
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    if (!turnstileToken) {
      showModal(
        "Verificação Necessária",
        "Aguarde a verificação de segurança antes de continuar.",
        "warning",
      );
      return;
    }
    setIsSubmitting(true);

    const submissionData = {
      ...data,
      pricing,
      turnstileToken,
      submittedAt: new Date().toISOString(),
      source: "contract_generator_form",
    };

    try {
      await WebhookService.sendData("/api/contract", submissionData);

      showModal(
        "Sucesso!",
        "Seus dados foram enviados com sucesso. Você será redirecionado em instantes.",
        "success",
        () => navigate("/"),
      );
    } catch (e) {
      console.error(e);
      showModal(
        "Erro no Envio",
        "Ocorreu um erro ao processar sua solicitação. Tente novamente ou contate o suporte.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition className="bg-slate-50 min-h-screen pb-20">
      <SEO
        title="Gerar Contrato | Unificando - Automação para Prestadores de Serviço"
        description="Configure e gere seu contrato de prestação de serviços de forma automática e profissional. Ideal para freelancers e agências de marketing."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Gerador de Contrato de Prestação de Serviços",
          provider: {
            "@type": "Organization",
            name: "Unificando",
          },
          description:
            "Ferramenta online gratuita para configurar e gerar contratos de prestação de serviços de marketing, tráfego pago, design e desenvolvimento web.",
          audience: {
            "@type": "Audience",
            audienceType:
              "Freelancers, Agências de Marketing, Gestores de Tráfego",
          },
          serviceType: "Legal Service Automation",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
          },
        }}
      />

      {/* Header */}
      <div className="bg-slate-900 text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 relative z-10">
          Configure seu <span className="text-indigo-400">Contrato</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base relative z-10">
          Preencha as informações abaixo para gerar sua proposta personalizada.
          Todos os dados são protegidos.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Progress Bar */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Etapa {step + 1} de {steps.length}
              </span>
            </div>
            <div className="text-sm font-bold text-slate-800">
              {steps[step].title}
            </div>
          </div>

          <div className="h-1 bg-slate-100 w-full">
            <motion.div
              className="h-full bg-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* STEP 1: Personal Data & Services */}
                {currentStepId === "personal" && (
                  <PersonalDataStep
                    data={data}
                    handleInputChange={handleInputChange}
                    updateService={updateService}
                  />
                )}

                {/* STEP: Atendimento */}
                {currentStepId === "atendimento" && (
                  <AtendimentoStep
                    data={data}
                    handleInputChange={handleInputChange}
                  />
                )}

                {/* STEP: IA */}
                {currentStepId === "ia" && (
                  <IAStep
                    data={data}
                    setData={setData}
                    handleInputChange={handleInputChange}
                  />
                )}

                {/* STEP: Site */}
                {currentStepId === "site" && (
                  <SiteStep data={data} handleInputChange={handleInputChange} />
                )}

                {/* STEP: Review */}
                {currentStepId === "review" && (
                  <ReviewStep
                    data={data}
                    pricing={pricing}
                    setTurnstileToken={setTurnstileToken}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0 || isSubmitting}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all
                            ${step === 0 ? "opacity-0 pointer-events-none" : "text-slate-500 hover:bg-slate-100"}`}
              >
                VOLTAR
              </button>

              {currentStepId === "review" ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!turnstileToken || isSubmitting}
                  className={`px-8 py-3 rounded-xl font-bold text-sm text-white transition-all shadow-lg hover:shadow-indigo-500/25 uppercase tracking-wide
                                ${!turnstileToken || isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-1"}`}
                >
                  {isSubmitting ? "ENVIANDO..." : "CONCLUIR E GERAR CONTRATO"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-lg uppercase tracking-wide"
                >
                  PRÓXIMO
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-4xl mx-auto mt-8 px-4 text-center">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Unificando. Todos os direitos reservados.
        </p>
      </div>

      <style>{`
        .label-text {
            @apply block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide;
        }
        .input-field {
            @apply w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all;
        }
        .step-title {
            @apply text-xl font-bold text-slate-800 mb-1;
        }
      `}</style>
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </PageTransition>
  );
};
