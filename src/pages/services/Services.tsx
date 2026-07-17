import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { motion } from "framer-motion";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";


const AutomacaoAnimation = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-slate-950 border-4 border-slate-950 shadow-[12px_12px_0px_#ccff00] p-8 aspect-video flex flex-col relative text-left">
      <div className="flex-1 flex flex-col gap-4">
        <motion.div
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -20 }}
          className="bg-white border-2 border-slate-950 p-4 max-w-[70%] text-[9px] font-bold text-slate-950 uppercase tracking-tight shadow-[4px_4px_0px_#ccff00]"
        >
          GOSTARIA DE UM ORÇAMENTO.
        </motion.div>
        {step === 1 && (
          <div className="flex gap-1 p-2">
            <div className="w-2 h-2 bg-[#ccff00] border border-slate-950 animate-pulse"></div>
            <div className="w-2 h-2 bg-[#ccff00] border border-slate-950 animate-pulse delay-75"></div>
          </div>
        )}
        <motion.div
          animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : 20 }}
          className="bg-[#ccff00] border-2 border-slate-950 p-4 max-w-[70%] self-end text-[9px] font-black text-slate-950 shadow-[4px_4px_0px_#fff] uppercase tracking-tight"
        >
          OLÁ! ESCOLHA UMA OPÇÃO...
        </motion.div>
      </div>
      <div className="text-[10px] font-black text-white uppercase tracking-widest text-center mt-4 border-t-2 border-slate-800 pt-4">
        TRIAGEM INTELIGENTE
      </div>
    </div>
  );
};

const DigitalAnimation = () => {
  return (
    <div className="bg-slate-950 border-4 border-slate-950 p-4 shadow-[12px_12px_0px_#fff] overflow-hidden relative h-full">
      <div className="bg-white border-2 border-slate-950 h-full min-h-[300px] flex flex-col p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div className="h-4 w-24 bg-slate-950 border border-slate-950"></div>
          <div className="flex gap-3">
            <div className="h-4 w-8 bg-slate-950 border border-slate-950"></div>
            <div className="h-4 w-12 bg-[#ccff00] border border-slate-950 shadow-[2px_2px_0px_#000]"></div>
          </div>
        </div>
        <div className="h-10 w-2/3 bg-slate-950 border border-slate-950 mb-4 shadow-[4px_4px_0px_#ccff00]"></div>
        <div className="h-4 w-1/2 bg-slate-300 border border-slate-950 mb-10"></div>
        <div className="mt-auto grid grid-cols-3 gap-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-24 w-full bg-white border-2 border-slate-950 shadow-[4px_4px_0px_#000]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Solutions: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <SEO
        title="Serviços Sob Consultoria | Unificando"
        description="Tudo que construímos também pode ser aplicado ao seu negócio. Sob medida, sem pressão."
        canonical={ROUTES.SERVICES}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Soluções Unificando",
          description:
            "Ecossistema completo de ferramentas para atendimento, IA e sites.",
          hasPart: [
            {
              "@type": "Service",
              name: "IA no Atendimento",
              description: "Automação inteligente e chatbots.",
            },
            {
              "@type": "Service",
              name: "Sites & Presença Online",
              description: "Desenvolvimento de sites e landing pages.",
            },

          ],
        }}
      />

      {/* Header */}
      <section className="py-24 md:py-32 bg-white border-b-4 border-slate-950 text-center relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#000] mb-8">
            ESTRUTURA MODULAR
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 mb-8 tracking-tighter uppercase leading-[0.9]">
            SERVIÇOS<br/>SOB CONSULTORIA
          </h1>
          <p className="text-xl md:text-2xl text-slate-950 max-w-2xl mx-auto font-mono font-bold mb-12 leading-relaxed">
            Tudo que construímos também pode ser aplicado ao seu negócio. Sob medida, sem pressão.
          </p>
          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="bg-slate-950 text-[#ccff00] px-12 py-5 text-sm font-black border-4 border-slate-950 hover:bg-[#ccff00] hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] uppercase tracking-widest inline-block"
          >
            SOLICITAR PROPOSTA
          </button>
        </div>
      </section>

      {/* IA no Atendimento */}
      <section className="py-24 bg-white border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="order-2 md:order-1">
            <AutomacaoAnimation />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
              PRODUTIVIDADE
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
              IA NO <br/> ATENDIMENTO
            </h2>
            <p className="text-xl text-slate-950 mb-8 font-mono font-bold leading-relaxed border-l-4 border-[#ccff00] pl-4">
              Agentes inteligentes que atendem, qualificam, agendam e escalam
              conversas 24/7, seguindo o tom da sua marca e seus processos
              internos.
            </p>

            <div className="bg-[#ccff00] p-6 border-4 border-slate-950 mb-10 shadow-[8px_8px_0px_#000]">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4 block border-b-2 border-slate-950 pb-2">
                QUANDO USAR:
              </span>
              <ul className="space-y-4 text-sm font-mono font-bold text-slate-950">
                {[
                  "Alto volume de mensagens",
                  "Atendimento fora do horário",
                  "Tarefas repetitivas",
                  "Necessidade de escalar sem contratar",
                ].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-white flex items-center justify-center border-2 border-slate-950 mt-0.5 text-xs text-slate-950">✓</div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.PRODUCTIVITY)}
              className="bg-slate-950 text-white px-8 py-5 text-xs font-black border-4 border-slate-950 shadow-[6px_6px_0px_#000] hover:bg-white hover:text-slate-950 transition-colors uppercase tracking-[0.2em] inline-block"
            >
              CONHECER IA
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sites & Presença Online */}
      <section className="py-24 bg-slate-950 text-white border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 border-2 border-[#ccff00] shadow-[4px_4px_0px_#fff]">
              PRESENÇA DIGITAL
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
              SITES E <br/> PRESENÇA
            </h2>
            <p className="text-xl text-white mb-8 font-mono font-bold leading-relaxed border-l-4 border-[#ccff00] pl-4">
              Construímos sua vitrine profissional para que sua empresa seja
              encontrada no Google, transmita autoridade e converta visitantes
              em oportunidades reais.
            </p>

            <div className="bg-white text-slate-950 p-6 border-4 border-[#ccff00] mb-10 shadow-[8px_8px_0px_#ccff00]">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4 block border-b-2 border-slate-950 pb-2">
                QUANDO USAR:
              </span>
              <ul className="space-y-4 text-sm font-mono font-bold text-slate-950">
                {[
                  "Seu negócio ainda não tem site",
                  "Precisa passar mais confiança",
                  "Quer integrar site com atendimento e IA",
                ].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-[#ccff00] flex items-center justify-center border-2 border-slate-950 mt-0.5 text-xs text-slate-950">✓</div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.DIGITAL_PRESENCE)}
              className="bg-[#ccff00] text-slate-950 px-8 py-5 text-xs font-black border-4 border-transparent shadow-[6px_6px_0px_#fff] hover:bg-white hover:text-slate-950 hover:border-slate-950 transition-colors uppercase tracking-[0.2em] inline-block"
            >
              VER DETALHES
            </button>
          </motion.div>
          <div className="h-full min-h-[400px]">
            <DigitalAnimation />
          </div>
        </div>
      </section>



      {/* Como funciona */}
      <section className="py-24 md:py-32 bg-[#ccff00] text-slate-950 border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="inline-block bg-white text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#000] mb-6">
            PROCESSO SIMPLES
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-20 tracking-tighter uppercase leading-[0.9]">
            COMO FUNCIONA
          </h2>

          <div className="grid lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Escolha",
                description: "Soluções que fazem sentido para o momento.",
              },
              {
                title: "Detalhe",
                description: "Canais, equipe, IA e tamanho do site.",
              },
              {
                title: "Sem Surpresa",
                description: "Valor fixo. Sem pegadinhas.",
              },
              {
                title: "Assuma",
                description: "Inicie o projeto e assuma o controle.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white transition-colors group"
              >
                <div className="w-16 h-16 bg-slate-950 text-[#ccff00] flex items-center justify-center font-black text-2xl border-2 border-slate-950 mb-6 group-hover:bg-[#ccff00] group-hover:text-slate-950 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-mono font-bold leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <button
              onClick={() => navigate(ROUTES.CONTACT)}
              className="bg-slate-950 text-white px-12 py-5 text-sm font-black border-4 border-slate-950 hover:bg-white hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] uppercase tracking-widest inline-block"
            >
              SOLICITAR PROPOSTA
            </button>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">
            TRANSPARÊNCIA TOTAL.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Cada canal conta como 1 caixa",
              "Use seus próprios números",
              "IA segue regras oficiais",
              "Pague só pelo que precisa",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white border-2 border-slate-950 px-6 py-3 font-black uppercase text-xs shadow-[4px_4px_0px_#ccff00]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
