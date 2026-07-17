import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950 text-white selection:bg-[#ccff00] selection:text-slate-950">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 border border-slate-800 bg-slate-900/50 px-4 py-2 text-[10px] font-mono tracking-[0.3em] text-slate-400 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]" />
            LABORATÓRIO DE PROJETOS AUTORAIS & IA
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white uppercase mb-8 break-words">
            Construímos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-600 block sm:inline">
              produtos digitais
            </span>
            <br />
            que resolvem
            <br />
            problemas reais.
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light tracking-wide leading-relaxed mb-12">
            Ferramentas utilitárias, sistemas com inteligência artificial e projetos autorais — 
            da ideia ao deploy.
            <strong className="text-white font-medium block mt-2">
              IA • Utilitários • Sistemas Sob Medida
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6 mb-12 border-l-2 pl-4 border-slate-800">
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#ccff00] text-slate-950 px-8 py-5 md:px-10 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-[#b3ff00] transition-colors relative group overflow-hidden"
              style={{ borderRadius: "1px" }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_0.8s_forwards] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              <span className="relative z-10 flex items-center gap-3">
                VER PROJETOS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
              className="border-2 border-white text-white px-8 py-5 md:px-10 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all"
              style={{ borderRadius: "1px" }}
            >
              CONSULTORIA
            </motion.button>

            <div className="flex flex-col">
              <div className="flex -space-x-3 mb-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-bold">★</div>
                ))}
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                1.000+ PDFs processados
              </span>
            </div>
          </div>

          <div className="text-sm border-t border-slate-900 pt-8 max-w-xl">
            <a
              href="#projetos"
              className="text-slate-500 uppercase tracking-widest font-bold text-[10px] hover:text-white transition-colors duration-300 flex items-center gap-2 w-max"
            >
              ↓ Conhecer projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
