import React from "react";
import { motion } from "framer-motion";

const StatIcon = () => (
  <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  </div>
);

export const TestimonialsSection = () => {
  const marketInsights = [
    {
      stat: "78%",
      title: "Vantagem do Primeiro Contato",
      text: "Dos consumidores compram da primeira empresa que responde. No digital, velocidade não é luxo, é sobrevivência.",
      source: "Harvard Business Review",
    },
    {
      stat: "62%",
      title: "Abandono por Demora",
      text: "Dos clientes admitem desistir de uma compra se a resposta demorar mais de 10 minutos no WhatsApp ou Instagram.",
      source: "Meta IQ",
    },
    {
      stat: "3.5x",
      title: "Conversão com Centralização",
      text: "Empresas que centralizam canais e usam múltiplos atendentes vendem até 3.5 vezes mais que as que usam celulares isolados.",
      source: "Gartner",
    },
    {
      stat: "90%",
      title: "Expectativa de Histórico",
      text: "Dos consumidores esperam que a empresa saiba quem eles são e o que falaram em atendimentos anteriores, independente do canal.",
      source: "Salesforce",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Por que centralizar?
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            O custo da desorganização
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-sm flex flex-col hover:border-indigo-500/50 transition-colors group"
            >
              <StatIcon />
              <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {insight.stat}
              </div>
              <h3 className="font-black text-slate-200 uppercase tracking-tight text-sm mb-4">
                {insight.title}
              </h3>
              <p className="text-slate-400 mb-8 text-xs leading-relaxed font-medium">
                "{insight.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Fonte: {insight.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium italic">
            * Dados baseados em relatórios globais de comportamento do
            consumidor digital (2023-24).
          </p>
        </div>
      </div>
    </section>
  );
};
