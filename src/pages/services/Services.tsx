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
    <div className="bg-white rounded-[3rem] p-8 aspect-video flex items-center justify-center shadow-inner border border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-50/50"></div>
      <div className="z-10 bg-slate-900 w-32 h-32 rounded-[2rem] shadow-2xl border border-white/5 flex flex-col items-center justify-center relative">
        <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-2xl mb-2">
          U
        </div>
        <div className="h-1.5 w-16 bg-white/20 rounded-full"></div>
        <AnimatePresence>
          {[
            {
              id: 1,
              color: "bg-indigo-400",
              icon: "W",
              x: -120,
              y: -40,
              delay: 0,
            },
            {
              id: 2,
              color: "bg-indigo-600",
              icon: "I",
              x: -120,
              y: 40,
              delay: 1,
            },
            {
              id: 3,
              color: "bg-indigo-400",
              icon: "W",
              x: 120,
              y: -40,
              delay: 0.5,
            },
            {
              id: 4,
              color: "bg-indigo-600",
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
              className={`absolute w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-lg`}
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
    <div className="bg-slate-900 rounded-[3rem] p-8 aspect-video flex flex-col shadow-2xl border border-slate-800 overflow-hidden relative text-left">
      <div className="flex-1 flex flex-col gap-4">
        <motion.div
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -20 }}
          className="bg-white/10 p-4 rounded-2xl rounded-bl-none max-w-[70%] text-[9px] font-bold text-slate-300 uppercase tracking-tight"
        >
          Gostaria de um orçamento.
        </motion.div>
        {step === 1 && (
          <div className="flex gap-1 p-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-75"></div>
          </div>
        )}
        <motion.div
          animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : 20 }}
          className="bg-indigo-600 p-4 rounded-2xl rounded-br-none max-w-[70%] self-end text-[9px] font-bold text-white shadow-xl uppercase tracking-tight"
        >
          Olá! Escolha uma opção...
        </motion.div>
      </div>
      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest text-center mt-4">
        TRIAGEM INTELIGENTE
      </div>
    </div>
  );
};

const DigitalAnimation = () => {
  return (
    <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl overflow-hidden relative h-full border border-slate-800">
      <div className="bg-white rounded-[2rem] h-full min-h-[300px] flex flex-col p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
          <div className="flex gap-3">
            <div className="h-3 w-8 bg-slate-100 rounded-full"></div>
            <div className="h-3 w-12 bg-indigo-600 rounded-full"></div>
          </div>
        </div>
        <div className="h-10 w-2/3 bg-slate-900 rounded-2xl mb-4"></div>
        <div className="h-4 w-1/2 bg-slate-200 rounded-full mb-10"></div>
        <div className="mt-auto grid grid-cols-3 gap-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="h-24 w-full bg-slate-50 rounded-2xl border border-slate-100"
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
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Estrutura modular
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[1.1]">
            Nossas Soluções.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
            Ferramentas modulares para transformar sua operação digital. Use
            uma, combine várias ou monte sua estrutura sob medida.
          </p>
          <button
            onClick={() => {
              trackCtaClick({
                label: CTA.pricing.label,
                location: "solutions_hero_pricing",
                to: CTA.pricing.to,
              });
              navigate(CTA.pricing.to);
            }}
            className="bg-indigo-600 text-white px-12 py-5 rounded-2xl text-xs font-black hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-100 uppercase tracking-widest"
          >
            {CTA.pricing.label}
          </button>
        </div>
      </section>

      {/* Atendimento Unificado */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-indigo-50 text-indigo-700 font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-6 border border-indigo-100">
              Organização
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Atendimento Unificado
            </h2>
            <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">
              Centralize WhatsApp, Instagram, Telegram e chat do site em um
              único painel profissional. Mais controle, menos confusão e
              atendimento em equipe com histórico completo.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">
                Quando Usar:
              </span>
              <ul className="space-y-2">
                {[
                  "Muitas mensagens espalhadas",
                  "Mais de uma pessoa atendendo",
                  "Falta de organização no dia a dia",
                ].map((useCase, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm font-bold text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.CUSTOMER_SERVICE)}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest"
            >
              Ver detalhes
            </button>
          </motion.div>
          <AtendimentoAnimation />
        </div>
      </section>

      {/* IA no Atendimento */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="order-2 md:order-1">
            <AutomacaoAnimation />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="inline-block bg-indigo-600 text-white font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-indigo-100">
              Produtividade
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              IA no Atendimento
            </h2>
            <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">
              Agentes inteligentes que atendem, qualificam, agendam e escalam
              conversas 24/7, seguindo o tom da sua marca e seus processos
              internos.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-10 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">
                Quando Usar:
              </span>
              <ul className="space-y-2">
                {[
                  "Alto volume de mensagens",
                  "Atendimento fora do horário",
                  "Tarefas repetitivas",
                  "Necessidade de escalar sem contratar",
                ].map((useCase, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm font-bold text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.PRODUCTIVITY)}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-indigo-700 transition-all uppercase tracking-widest"
            >
              Conhecer Inteligência Artificial
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sites & Presença Online */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-slate-100">
              Presença Digital
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Sites & Presença Online
            </h2>
            <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">
              Construímos sua vitrine profissional para que sua empresa seja
              encontrada no Google, transmita autoridade e converta visitantes
              em oportunidades reais.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">
                Quando Usar:
              </span>
              <ul className="space-y-2">
                {[
                  "Seu negócio ainda não tem site",
                  "Precisa passar mais confiança",
                  "Quer integrar site com atendimento e IA",
                ].map((useCase, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm font-bold text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.DIGITAL_PRESENCE)}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest"
            >
              Ver detalhes de Sites
            </button>
          </motion.div>
          <div className="h-full min-h-[400px]">
            <DigitalAnimation />
          </div>
        </div>
      </section>

      {/* Hospedagem Inteligente */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="order-2 md:order-1">
             <div className="bg-slate-900 rounded-[3rem] p-10 h-full min-h-[400px] border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center">
                 <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
                 <div className="relative z-10 w-full max-w-xs">
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center font-black text-slate-400 text-xl">{"</>"}</div>
                        <div className="flex gap-2">
                           <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse"></div>
                           <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse delay-100"></div>
                           <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse delay-200"></div>
                        </div>
                        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 font-black text-white text-xl">🌐</div>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-black">✓</div>
                        <div>
                          <p className="text-white text-xs font-bold">Domínio Conectado</p>
                          <p className="text-[10px] text-slate-400">meu-site.com.br</p>
                        </div>
                     </div>
                     <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-black">🔒</div>
                        <div>
                          <p className="text-white text-xs font-bold">Certificado SSL Seguro</p>
                          <p className="text-[10px] text-slate-400">Ativado automaticamente</p>
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
            <div className="inline-block bg-indigo-100 text-indigo-700 font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-6 border border-indigo-200 shadow-sm">
              Deploy DaaS
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Hospedagem Inteligente
            </h2>
            <p className="text-lg text-slate-500 mb-8 font-medium leading-relaxed">
              Desenvolveu um site estático usando Cursor, Lovable ou IA e não sabe como colocar no ar com domínio próprio? Resolva isso em poucas horas sem encostar na infraestrutura.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-10 shadow-sm">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 block">
                Quando Usar:
              </span>
              <ul className="space-y-2">
                {[
                  "Gerou o código com IA e travou no Deploy",
                  "Não quer a marca d'água de servidores gratuitos",
                  "Quer repassar uma URL .com.br profissional",
                ].map((useCase, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm font-bold text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></div>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate(ROUTES.SMART_HOSTING)}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 uppercase tracking-widest"
            >
              Conhecer Hospedagem (DaaS)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Processo Simples
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-tighter uppercase">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8 text-left">
            {[
              {
                title: "Escolha as soluções",
                description: "Selecione o que faz sentido para o seu momento.",
              },
              {
                title: "Ajuste os detalhes",
                description: "Defina canais, tamanho da equipe, IA e site.",
              },
              {
                title: "Veja o valor na hora",
                description: "Sem pacotes engessados. Sem surpresas no preço.",
              },
              {
                title: "Contrate agora",
                description:
                  "Inicie a implementação ou agende um diagnóstico técnico.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors"
              >
                <span className="text-5xl font-black text-indigo-500/30 mb-6 block">
                  {index + 1}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
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
                navigate(CTA.pricing.to);
              }}
              className="bg-indigo-600 text-white px-12 py-5 rounded-2xl text-xs font-black hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-900/20 uppercase tracking-[0.2em]"
            >
              {CTA.pricing.label}
            </button>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-12">
            🔒 Transparência Total
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Cada canal conta como 1 caixa de entrada",
              "Você usa seus próprios números e contas",
              "IA segue regras da Meta",
              "Você paga apenas pelo que escolher",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 px-6 py-3 rounded-full text-xs font-bold text-slate-600"
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
