import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { CTA } from "../../constants/cta";
import { trackCtaClick } from "../../utils/analytics";

const AtendimentoAnimation = () => {
  return (
    <div className="bg-white p-8 aspect-video flex items-center justify-center border-4 border-slate-950 shadow-[12px_12px_0px_#000] relative">
      <div className="z-10 bg-slate-950 w-32 h-32 border-2 border-slate-950 shadow-[8px_8px_0px_#ccff00] flex flex-col items-center justify-center relative">
        <div className="w-12 h-12 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center text-slate-950 font-black text-2xl mb-2 shadow-[4px_4px_0px_#000]">
          U
        </div>
        <div className="h-1.5 w-16 bg-white border border-slate-950"></div>
        <AnimatePresence>
          {[
            {
              id: 1,
              color: "bg-[#ccff00] text-slate-950",
              icon: "W",
              x: -120,
              y: -40,
              delay: 0,
            },
            {
              id: 2,
              color: "bg-white text-slate-950",
              icon: "I",
              x: -120,
              y: 40,
              delay: 1,
            },
            {
              id: 3,
              color: "bg-[#ccff00] text-slate-950",
              icon: "W",
              x: 120,
              y: -40,
              delay: 0.5,
            },
            {
              id: 4,
              color: "bg-white text-slate-950",
              icon: "I",
              x: 120,
              y: 40,
              delay: 1.5,
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              initial={{ x: item.x, y: item.y, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: item.delay,
              }}
              className={`absolute w-10 h-10 ${item.color} border-2 border-slate-950 flex items-center justify-center font-black text-[10px] shadow-[4px_4px_0px_#000]`}
            >
              {item.icon}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

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
        title="Soluções de Atendimento, IA e Sites | Unificando"
        description="Atendimento via WhatsApp e Instagram, automação com IA e presença digital no Google. Soluções modulares para PMEs."
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
              name: "Atendimento Unificado",
              description: "Centralização de WhatsApp e Instagram.",
            },
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
            {
              "@type": "Service",
              name: "Hospedagem Inteligente",
              description: "Deploy e Hospedagem de sites desenvolvidos com IA.",
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
            NOSSAS<br/>SOLUÇÕES.
          </h1>
          <p className="text-xl md:text-2xl text-slate-950 max-w-2xl mx-auto font-mono font-bold mb-12 leading-relaxed">
            Ferramentas brutais para transformar sua operação digital. Use
            uma, combine várias ou monte sua estrutura sob medida.
          </p>
          <button
            onClick={() => {
              trackCtaClick({
                label: CTA.pricing.label,
                location: "solutions_hero_pricing",
                to: CTA.pricing.to,
              });
              window.open(CTA.pricing.to, "_blank");
            }}
            className="bg-slate-950 text-[#ccff00] px-12 py-5 text-sm font-black border-4 border-slate-950 hover:bg-[#ccff00] hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] uppercase tracking-widest inline-block"
          >
            CONSULTAR PREÇOS
          </button>
        </div>
      </section>

      {/* Atendimento Unificado */}
      <section className="py-24 bg-[#ccff00] border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-white text-slate-950 font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              ORGANIZAÇÃO
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
              ATENDIMENTO <br/> UNIFICADO
            </h2>
            <p className="text-xl text-slate-950 mb-8 font-mono font-bold leading-relaxed border-l-4 border-slate-950 pl-4">
              Centralize WhatsApp, Instagram, Telegram e chat do site em um
              único painel profissional. Mais controle, menos confusão e
              atendimento em equipe com histórico completo.
            </p>

            <div className="bg-white p-6 border-4 border-slate-950 mb-10 shadow-[8px_8px_0px_#000]">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4 block border-b-2 border-slate-950 pb-2">
                QUANDO USAR:
              </span>
              <ul className="space-y-4 text-sm font-mono font-bold">
                {[
                  "Muitas mensagens espalhadas",
                  "Mais de uma pessoa atendendo",
                  "Falta de organização no dia a dia",
                ].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-slate-950 text-[#ccff00] flex items-center justify-center border-2 border-slate-950 mt-0.5 text-xs">✓</div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.CUSTOMER_SERVICE)}
              className="bg-white text-slate-950 px-8 py-5 text-xs font-black hover:bg-slate-950 hover:text-[#ccff00] border-4 border-slate-950 shadow-[6px_6px_0px_#000] transition-colors uppercase tracking-[0.2em] inline-block"
            >
              VER DETALHES
            </button>
          </motion.div>
          <AtendimentoAnimation />
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

      {/* Hospedagem Inteligente */}
      <section className="py-24 bg-white border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="order-2 md:order-1">
             <div className="bg-[#ccff00] border-4 border-slate-950 shadow-[12px_12px_0px_#000] p-8 h-full min-h-[400px] relative overflow-hidden flex flex-col justify-center items-center">
                 <div className="relative z-10 w-full max-w-xs bg-white border-4 border-slate-950 p-6 shadow-[8px_8px_0px_#000]">
                     <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-950">
                        <div className="w-12 h-12 bg-slate-950 text-white border-2 border-slate-950 flex items-center justify-center font-black text-xl">{"</>"}</div>
                        <div className="flex gap-2">
                           <div className="w-3 h-3 border border-slate-950 bg-slate-950 animate-pulse"></div>
                           <div className="w-3 h-3 border border-slate-950 bg-[#ccff00] animate-pulse delay-100"></div>
                           <div className="w-3 h-3 border border-slate-950 bg-slate-950 animate-pulse delay-200"></div>
                        </div>
                        <div className="w-12 h-12 bg-[#ccff00] text-slate-950 flex items-center justify-center border-2 border-slate-950 font-black text-xl shadow-[4px_4px_0px_#000]">🌐</div>
                     </div>
                     <div className="bg-white border-2 border-slate-950 p-4 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-950 text-[#ccff00] flex items-center justify-center font-black border-2 border-slate-950 text-xs">✓</div>
                        <div>
                          <p className="text-slate-950 text-xs font-black uppercase">Domínio Conectado</p>
                          <p className="text-[10px] text-slate-500 font-mono font-bold">meu-site.com.br</p>
                        </div>
                     </div>
                     <div className="bg-white border-2 border-slate-950 p-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-950 text-white flex items-center justify-center font-black border-2 border-slate-950 text-xs">🔒</div>
                        <div>
                          <p className="text-slate-950 text-xs font-black uppercase">Certificado SSL</p>
                          <p className="text-[10px] text-slate-500 font-mono font-bold">Ativado automático</p>
                        </div>
                     </div>
                 </div>
             </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-block bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              DEPLOY DAAS
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
              HOSPEDAGEM <br/> INTELIGENTE
            </h2>
            <p className="text-lg text-slate-950 mb-8 font-mono font-bold leading-relaxed border-l-4 border-slate-950 pl-4">
              Desenvolveu um site estático usando Cursor, Lovable ou IA e não sabe como colocar no ar com domínio próprio? Resolva isso sem encostar na infraestrutura.
            </p>

            <div className="bg-white p-6 border-4 border-slate-950 mb-10 shadow-[8px_8px_0px_#000]">
              <span className="text-xs font-black uppercase tracking-widest text-slate-950 mb-4 block border-b-2 border-slate-950 pb-2">
                QUANDO USAR:
              </span>
              <ul className="space-y-4 text-sm font-mono font-bold text-slate-950">
                {[
                  "Gerou o código com IA e travou no Deploy",
                  "Não quer a marca d'água de servidores gratuitos",
                  "Quer repassar uma URL .com.br profissional",
                ].map((useCase, index) => (
                  <li key={index} className="flex items-start gap-4">
                     <div className="w-5 h-5 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center mt-0.5 text-xs text-slate-950">✓</div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.SMART_HOSTING)}
              className="bg-slate-950 text-white px-8 py-5 text-xs font-black border-4 border-slate-950 shadow-[6px_6px_0px_#000] hover:bg-white hover:text-slate-950 transition-colors uppercase tracking-[0.2em] inline-block"
            >
              CONHECER HOSPEDAGEM
            </button>
          </motion.div>
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
              onClick={() => {
                trackCtaClick({
                  label: CTA.pricing.label,
                  location: "solutions_howitworks_pricing",
                  to: CTA.pricing.to,
                });
                window.open(CTA.pricing.to, "_blank");
              }}
              className="bg-slate-950 text-white px-12 py-5 text-sm font-black border-4 border-slate-950 hover:bg-white hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] uppercase tracking-widest inline-block"
            >
              MONTE SEU PLANO
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
