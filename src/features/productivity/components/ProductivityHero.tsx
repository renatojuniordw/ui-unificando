import React from "react";
import { motion } from "framer-motion";
import { WhatsAppSimulation } from "../WhatsAppSimulation";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const ProductivityHero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 shadow-[4px_4px_0px_#ccff00]">
            AUTOMAÇÃO COM IA
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] mb-8 uppercase tracking-tighter">
            ESCALA<br/>REAL.
          </h1>
          <p className="text-xl text-slate-950 mb-10 leading-relaxed font-bold border-l-4 border-[#ccff00] pl-4">
            Atendimento 24/7 sem burnout humano. Fuja das automações genéricas e crie agentes inteligentes baseados no comportamento real da sua marca.
          </p>
          <div className="flex flex-col gap-4">
            <ul className="space-y-4 mb-8 font-mono text-sm font-bold text-slate-950 uppercase tracking-widest">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 border-2 border-slate-950 bg-[#ccff00] flex items-center justify-center text-slate-950 text-xs shadow-[2px_2px_0px_#000]">✓</span>
                Mais escala.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 border-2 border-slate-950 bg-[#ccff00] flex items-center justify-center text-slate-950 text-xs shadow-[2px_2px_0px_#000]">✓</span>
                Mais produtividade.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 border-2 border-slate-950 bg-[#ccff00] flex items-center justify-center text-slate-950 text-xs shadow-[2px_2px_0px_#000]">✓</span>
                Sem aumentar custos fixos.
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={() => {
                  trackCtaClick({
                    label: CTA.primary.label,
                    location: "productivity_hero_primary",
                    to: CTA.primary.to,
                  });
                  window.open(CTA.primary.to, "_blank");
                }}
                className="bg-[#ccff00] text-slate-950 px-8 py-5 text-xs font-black hover:bg-slate-950 hover:text-[#ccff00] transition-colors border-2 border-slate-950 shadow-[6px_6px_0px_#000] uppercase tracking-[0.2em] w-max"
              >
                {CTA.primary.label}
              </button>
            </div>
          </div>
        </motion.div>

        <div className="relative hidden md:block">
          <div className="bg-slate-950 p-6 shadow-[12px_12px_0px_#ccff00] h-[500px] border-4 border-slate-950 overflow-hidden relative">
            <WhatsAppSimulation />
          </div>
        </div>
      </div>
    </section>
  );
};
