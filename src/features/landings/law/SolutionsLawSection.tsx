import React from "react";
import { motion } from "framer-motion";

export const SolutionsLawSection: React.FC = () => {
  const solutions = [
    {
      title: "ATENDIMENTO UNIFICADO",
      description:
        "Toda a sua equipe acessando o mesmo WhatsApp. Histórico centralizado, transferências internas e organização total dos leads do escritório.",
      features: ["Múltiplos Atendentes", "Histórico Perpétuo", "Etiquetas de Status"],
    },
    {
      title: "TRIAGEM COM IA",
      description:
        "Nossa IA faz o primeiro contato, coleta dados do caso e qualifica o lead antes mesmo de chegar ao advogado. Economia de tempo real.",
      features: ["Qualificação 24/7", "Coleta de Dados", "Filtro de Casos"],
    },
    {
      title: "PRESENÇA DIGITAL",
      description:
        "Sites de alta performance focados em conversão jurídica. Posicione seu escritório como autoridade no Google e atraia clientes qualificados.",
      features: ["Landing Pages", "SEO Jurídico", "Alta Performance"],
    },
  ];

  return (
    <section className="py-24 bg-[#ccff00] border-b-8 border-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <div className="inline-block bg-white text-slate-950 px-3 py-1 font-black uppercase text-xs mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
            A SOLUÇÃO DEFINITIVA
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.9]">
            TRANSFORME SEU <br/>
            ESCRITÓRIO EM UMA <br/>
            <span className="bg-slate-950 text-white px-2 inline-block -rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">MÁQUINA.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-4 border-slate-950 p-8 shadow-[12px_12px_0px_#000] flex flex-col hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-3xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-none pr-8">
                {item.title}
              </h3>
              <p className="text-slate-950 font-mono font-bold uppercase text-sm mb-8 leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-auto space-y-4">
                {item.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-slate-950 border-2 border-slate-950 flex items-center justify-center text-[#ccff00] text-[10px] font-black">
                      ✓
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 italic">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
