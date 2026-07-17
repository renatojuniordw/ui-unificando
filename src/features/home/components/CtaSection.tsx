import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-[#ccff00] text-slate-950 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="inline-block border border-slate-950 px-4 py-2 text-[10px] font-mono tracking-[0.3em] font-bold mb-8 uppercase">
            Vamos conversar
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">
            Vamos construir<br />
            algo juntos?
          </h2>
          <p className="text-lg md:text-2xl text-slate-800 mb-12 max-w-2xl mx-auto font-medium tracking-wide">
            Produto próprio, ferramenta utilitária ou sistema sob medida. 
            Toda ideia começa com uma conversa.
          </p>

          <div className="flex flex-col gap-6 items-center w-full">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(ROUTES.CONTACT)}
              className="w-full md:w-auto bg-slate-950 text-[#ccff00] px-10 py-6 md:px-14 md:py-8 text-base md:text-xl font-black shadow-[10px_10px_0px_#000] border-2 border-transparent uppercase tracking-[0.1em] hover:bg-slate-900 transition-all font-outfit"
              style={{ borderRadius: "0px" }}
            >
              <span className="flex items-center justify-center gap-4">
                Agendar Consultoria
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
            <span className="text-xs font-mono font-bold tracking-widest text-slate-700 uppercase mt-4">
              SEM COMPROMISSO • RESPOSTA EM ATÉ 24H
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
