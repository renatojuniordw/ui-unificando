import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const CtaLawSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 p-12 md:p-24 border-8 border-slate-950 shadow-[24px_24px_0px_#ccff00] relative"
        >
          <div className="relative z-10">
            <div className="inline-block bg-[#ccff00] text-slate-950 px-3 py-1 font-black uppercase text-xs mb-8 border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">
              O PRÓXIMO PASSO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
              SEU ESCRITÓRIO MERECE <br className="hidden md:block"/> UMA OPERAÇÃO DE <br/>
              <span className="text-slate-950 bg-[#ccff00] px-3 inline-block -rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">ALTO NÍVEL.</span>
            </h2>
            
            <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-bold uppercase leading-tight">
              Agende uma demonstração gratuita e veja como organizamos seu WhatsApp e triagem em poucos dias.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackCtaClick({
                  label: "AGENDAR DEMONSTRAÇÃO AGORA",
                  location: "law_cta_footer",
                  to: CTA.primary.to,
                });
                window.open(CTA.primary.to, "_blank");
              }}
              className="bg-white text-slate-950 px-12 py-6 border-4 border-slate-950 text-base font-black uppercase tracking-widest shadow-[8px_8px_0px_#ccff00] hover:shadow-[12px_12px_0px_#ccff00] transition-all"
            >
              AGENDAR DEMONSTRAÇÃO AGORA
            </motion.button>
            
            <p className="text-slate-500 mt-10 text-xs uppercase tracking-[0.3em] font-black italic">
              *SEM COMPROMISSO. ESCALABILIDADE IMEDIATA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
