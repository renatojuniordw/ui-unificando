import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { useNavigate, Link } from "react-router-dom";
import {
  ContractData,
  INITIAL_CONTRACT_DATA,
  ServiceSelection,
} from "../types/contract";
import { useContractPricing } from "../hooks/useContractPricing";
import { useContractValidation } from "../hooks/useContractValidation";
import { PersonalDataStep } from "../features/contract/components/steps/PersonalDataStep";
import { AddressStep } from "../features/contract/components/steps/AddressStep";
import { AtendimentoStep } from "../features/contract/components/steps/AtendimentoStep";
import { IAStep } from "../features/contract/components/steps/IAStep";
import { SiteStep } from "../features/contract/components/steps/SiteStep";
import { ReviewStep } from "../features/contract/components/steps/ReviewStep";
import { BillingStep } from "../features/contract/components/steps/BillingStep";
import { Modal } from "../components/common/Modal";
import { ModalType } from "../types";
import { WebhookService } from "../services/webhook.service";
import { ROUTES } from "../routes";

export const ContractGenerator: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContractData>(INITIAL_CONTRACT_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal State
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: ModalType;
    onClose?: () => void;
    confirmText?: string;
    onConfirm?: () => void;
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
    confirmText?: string,
    onConfirm?: () => void,
  ) => {
    setModal({
      isOpen: true,
      title,
      message,
      type,
      onClose,
      confirmText,
      onConfirm,
    });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
    if (modal.onClose) modal.onClose();
  };

  // Determine steps based on selection
  const steps = useMemo(() => {
    const s = [{ id: "personal", title: "DADOS & SERVIÇOS" }];
    s.push({ id: "address", title: "ENDEREÇO" });
    if (data.personalData.services.atendimento)
      s.push({ id: "atendimento", title: "ATENDIMENTO" });
    if (data.personalData.services.ia)
      s.push({ id: "ia", title: "INTELIGÊNCIA ARTIFICIAL" });
    if (data.personalData.services.site)
      s.push({ id: "site", title: "SITE & PRESENÇA" });
    s.push({ id: "billing", title: "COBRANÇA" });
    s.push({ id: "review", title: "REVISÃO & CONTRATO" });
    return s;
  }, [data.personalData.services]);

  const currentStepId = steps[step]?.id;

  // Pricing Logic
  const pricing = useContractPricing(data);

  // Handlers
  const handleInputChange = (
    section: keyof ContractData,
    field: string,
    value: any,
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateService = (service: keyof ServiceSelection) => {
    setData((prev) => ({
      ...prev,
      personalData: {
        ...prev.personalData,
        services: {
          ...prev.personalData.services,
          [service]: !prev.personalData.services[service],
        },
      },
    }));
  };

  // Validation Hook
  const { validateStep } = useContractValidation();

  const handleNext = () => {
    const currentId = steps[step].id;
    const validation = validateStep(currentId, data);

    if (validation.isValid) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
      window.scrollTo(0, 0);
    } else if (validation.error) {
      showModal(
        validation.error.title,
        validation.error.message,
        validation.error.type,
      );
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const submissionData = {
      ...data,
      pricing,
      submittedAt: new Date().toISOString(),
      source: "contract_generator_form",
    };

    try {
      await WebhookService.sendContract(submissionData);

      showModal(
        "Sucesso! Próximo Passo 🚀",
        "Seus dados foram enviados e o contrato gerado. Para iniciarmos o setup, precisamos de alguns detalhes técnicos.",
        "success",
        () => navigate("/"),
        "PREENCHER BRIEFING AGORA",
        () => {
          const briefingUrl = import.meta.env.VITE_BRIEFING_FORM_URL;
          window.open(briefingUrl, "_blank");
          navigate("/");
        },
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
    <PageTransition className="bg-white min-h-screen pb-20">
      <SEO
        title="Gerar Contrato | Unificando Digital - Automação de Serviços"
        description="Configure e formalize sua operação. Gere seu contrato de prestação de serviços de forma automática, profissional e segura."
        canonical={ROUTES.CONTRACT}
        robots="noindex, nofollow"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gerador de Contrato de Prestação de Serviços",
          "provider": {
            "@type": "Organization",
            "name": "Unificando",
            "url": "https://unificando.com.br"
          },
          "description": "Ferramenta online para formalização de contratos de automação, IA e presença digital.",
          "serviceType": "Legal Automation",
          "dateModified": "2026-03-12"
        }}
      />

      {/* Header */}
      <div className="bg-slate-950 text-white py-20 px-6 text-center relative overflow-hidden border-b-8 border-slate-950">
        <Link
          to={ROUTES.HOME}
          className="absolute top-8 left-8 z-20 flex items-center gap-3 text-slate-400 hover:text-[#ccff00] transition-colors text-xs font-black uppercase tracking-widest group bg-slate-900 px-4 py-2 border-2 border-slate-800"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          VOLTAR
        </Link>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#ccff00] text-slate-950 px-3 py-1 font-black uppercase text-[10px] mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">
            AÇÃO NECESSÁRIA
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            FORMALIZE SUA <br/>
            <span className="text-[#ccff00]">OPERAÇÃO.</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base font-black uppercase italic tracking-tight">
            Configure seu contrato personalizado em poucos minutos. <br/>
            Segurança jurídica para quem foca em escala.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white border-8 border-slate-950 shadow-[24px_24px_0px_#ccff00] overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-slate-100 px-8 py-6 border-b-4 border-slate-950 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-slate-950 text-white px-3 py-1 text-xs font-black uppercase italic leading-none">
                PROCESSO 0{step + 1}
              </span>
              <div className="h-4 w-px bg-slate-300 hidden md:block"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                {step + 1} de {steps.length} ETAPAS
              </span>
            </div>
            <div className="text-xl font-black text-slate-950 uppercase tracking-tighter">
              {steps[step].title}
            </div>
          </div>

          <div className="h-4 bg-slate-200 w-full border-b-4 border-slate-950">
            <motion.div
              className="h-full bg-[#ccff00]"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </div>

          <div className="p-8 md:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStepId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* STEP 1: Personal Data & Services */}
                {currentStepId === "personal" && (
                  <PersonalDataStep
                    data={data.personalData}
                    handleInputChange={(field, value) =>
                      handleInputChange("personalData", field as string, value)
                    }
                    updateService={updateService}
                  />
                )}

                {/* STEP: Address */}
                {currentStepId === "address" && (
                  <AddressStep
                    data={data.addressData}
                    handleInputChange={(field, value) =>
                      handleInputChange("addressData", field as string, value)
                    }
                  />
                )}

                {/* STEP: Atendimento */}
                {currentStepId === "atendimento" && (
                  <AtendimentoStep
                    data={data.serviceDetailsData}
                    handleInputChange={(field, value) =>
                      handleInputChange(
                        "serviceDetailsData",
                        field as string,
                        value,
                      )
                    }
                  />
                )}

                {/* STEP: IA */}
                {currentStepId === "ia" && (
                  <IAStep
                    data={data.serviceDetailsData}
                    handleInputChange={(field, value) =>
                      handleInputChange(
                        "serviceDetailsData",
                        field as string,
                        value,
                      )
                    }
                  />
                )}

                {/* STEP: Site */}
                {currentStepId === "site" && (
                  <SiteStep
                    data={data.serviceDetailsData}
                    handleInputChange={(field, value) =>
                      handleInputChange(
                        "serviceDetailsData",
                        field as string,
                        value,
                      )
                    }
                  />
                )}

                {/* STEP: Billing */}
                {currentStepId === "billing" && (
                  <BillingStep
                    data={data.billingData}
                    updateData={(updates) =>
                      setData((prev) => ({
                        ...prev,
                        billingData: { ...prev.billingData, ...updates },
                      }))
                    }
                  />
                )}

                {/* STEP: Review */}
                {currentStepId === "review" && (
                  <ReviewStep data={data} pricing={pricing} />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-16 pt-10 border-t-4 border-slate-950 flex flex-col sm:flex-row justify-between gap-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0 || isSubmitting}
                className={`px-10 py-5 border-4 border-slate-950 font-black text-xs uppercase tracking-widest transition-all
                            ${step === 0 ? "opacity-0 pointer-events-none" : "bg-white text-slate-950 hover:bg-slate-100 shadow-[4px_4px_0px_#000]"}`}
              >
                ← VOLTAR
              </button>

              {currentStepId === "review" ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-12 py-6 border-4 border-slate-950 font-black text-sm text-white bg-slate-950 transition-all shadow-[8px_8px_0px_#ccff00] hover:shadow-[12px_12px_0px_#ccff00] uppercase tracking-[0.2em]
                                ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1"}`}
                >
                  {isSubmitting ? "PROCESSANDO..." : "CONCLUIR E GERAR CONTRATO"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-slate-950 text-white px-12 py-6 border-4 border-slate-950 font-black text-sm hover:bg-slate-900 border-slate-950 hover:-translate-y-1 transition-all shadow-[8px_8px_0px_#ccff00] uppercase tracking-[0.2em]"
                >
                  PRÓXIMO PASSO →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-4xl mx-auto mt-16 px-6 text-center">
        <p className="text-[10px] text-slate-400 font-mono font-black uppercase tracking-widest">
          © {new Date().getFullYear()} UNIFICANDO_DIGITAL // TODOS OS DIREITOS RESERVADOS.
        </p>
      </div>

      <style>{`
        .label-text {
            display: block;
            font-size: 0.75rem;
            font-weight: 900;
            color: #0f172a;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .input-field {
            width: 100%;
            background-color: #ffffff;
            border: 4px solid #0f172a;
            padding: 1rem;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-weight: 700;
            font-size: 0.875rem;
            text-transform: uppercase;
            outline: none;
            transition: all 0.2s;
        }
        .input-field:focus {
            box-shadow: 4px 4px 0px #ccff00;
            transform: translate(-2px, -2px);
        }
        .step-title {
            font-size: 2rem;
            font-weight: 900;
            color: #0f172a;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: -0.05em;
            line-height: 0.9;
        }
      `}</style>
      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        confirmText={modal.confirmText}
        onConfirm={modal.onConfirm}
      />
    </PageTransition>
  );
};
