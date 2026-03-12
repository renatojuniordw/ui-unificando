import React from "react";
import { motion, Variants } from "framer-motion";
import { PRICING } from "../../../constants/pricing";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const ServiceBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-white relative border-t-8 border-slate-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="inline-block bg-[#ccff00] text-slate-950 px-4 py-2 border-4 border-slate-950 text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 shadow-[8px_8px_0px_#000]">
            DETALHAMENTO <br/>DOS SERVIÇOS
          </h2>
          <p className="text-xl md:text-2xl text-slate-950 font-black uppercase pt-6">
            ENTENDA O QUE ESTÁ INCLUSO EM CADA MÓDULO.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* LISTA DE SERVIÇOS */}
          <div className="bg-slate-950 border-4 border-slate-950 p-8 md:p-12 shadow-[8px_8px_0px_#000]">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#ccff00] mb-8 bg-slate-900 inline-block px-4 py-2 border-2 border-slate-800">
              💬 ATENDIMENTO DIGITAL
            </h3>
            <ul className="grid md:grid-cols-2 gap-6 text-sm font-bold font-mono text-white">
              <li className="flex gap-4 items-start pt-2 border-t border-slate-800">
                <span className="text-slate-950 bg-[#ccff00] w-6 h-6 flex items-center justify-center border-2 border-[#ccff00] shrink-0 font-black">✓</span> 
                Atendimento em WhatsApp, Instagram, Telegram
              </li>
              <li className="flex gap-4 items-start pt-2 border-t border-slate-800">
                <span className="text-slate-950 bg-[#ccff00] w-6 h-6 flex items-center justify-center border-2 border-[#ccff00] shrink-0 font-black">✓</span> 
                Histórico completo e centralizado
              </li>
              <li className="flex gap-4 items-start pt-2 border-t border-slate-800">
                <span className="text-slate-950 bg-[#ccff00] w-6 h-6 flex items-center justify-center border-2 border-[#ccff00] shrink-0 font-black">✓</span> 
                Gestão de equipe e permissões
              </li>
            </ul>
          </div>

          <div className="bg-white border-4 border-slate-950 p-8 md:p-12 shadow-[8px_8px_0px_#000]">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-slate-950 mb-8 bg-[#ccff00] inline-block px-4 py-2 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              🤖 INTELIGÊNCIA ARTIFICIAL
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {PRICING.ia.base.features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start pt-2 border-t-2 border-slate-200">
                    <span className="text-white bg-slate-950 w-6 h-6 flex items-center justify-center border-2 border-slate-950 shrink-0 font-black">✓</span>{" "}
                    <span className="text-sm font-bold font-mono text-slate-900 uppercase">
                      {feature}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
