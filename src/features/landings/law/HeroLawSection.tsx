import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const HeroLawSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-slate-950 border-b-8 border-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#ccff00] text-slate-950 px-4 py-2 border-4 border-slate-950 shadow-[4px_4px_0px_#fff] mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              SISTEMA PARA ESCRITÓRIOS DE ADVOCACIA
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            VOCÊ É ADVOGADO, <br />
            <span className="text-slate-950 bg-[#ccff00] px-3 inline-block -rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">
              NÃO TELEFONISTA.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-none font-bold uppercase p-6 border-4 border-[#ccff00] bg-slate-900/50 max-w-2xl shadow-[8px_8px_0px_#000]">
            Centralize atendimentos, automatize a triagem com IA e pare de
            perder contratos por demora.
            <span className="text-[#ccff00] block mt-4">
              ESTRUTURA JURÍDICA DE ALTA PERFORMANCE.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackCtaClick({
                  label: "AGENDAR DEMONSTRAÇÃO",
                  location: "law_hero_primary",
                  to: CTA.primary.to,
                });
                window.open(CTA.primary.to, "_blank");
              }}
              className="bg-[#ccff00] text-slate-950 px-10 py-6 border-4 border-slate-950 text-base font-black uppercase tracking-widest shadow-[8px_8px_0px_#fff] hover:shadow-[12px_12px_0px_#fff] transition-all"
            >
              AGENDAR DEMONSTRAÇÃO
            </motion.button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-none border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-black text-white z-10 relative"
                  style={{ zIndex: 5 - i }}
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
              +200 escritórios digitalizados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
