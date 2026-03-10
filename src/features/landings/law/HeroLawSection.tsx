import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const HeroLawSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            SISTEMA PARA ESCRITÓRIOS DE ADVOCACIA
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 uppercase tracking-tighter">
            O WhatsApp não pode ser um gargalo no seu <span className="text-indigo-500 italic">faturamento.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
            Centralize o atendimento do escritório, faça triagem de clientes com IA e organize sua operação. Pare de perder contratos porque a equipe demorou a responder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                trackCtaClick({
                  label: "AGENDAR DEMONSTRAÇÃO",
                  location: "law_home_hero_primary",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="bg-indigo-600 text-white px-8 lg:px-10 py-5 rounded-2xl text-xs font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/50 uppercase tracking-[0.15em]"
            >
              AGENDAR DEMONSTRAÇÃO
            </motion.button>
          </div>

          <div className="text-sm">
            <span className="opacity-80 font-medium text-slate-500">
              Transformando a gestão de atendimento Jurídico.
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract representation of Organized UI for Law Firms */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] transform -rotate-6 blur-2xl"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-[3rem] border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
              {/* Fake UI Header */}
              <div className="h-16 border-b border-slate-700/50 bg-slate-800/80 flex items-center px-6 gap-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                 </div>
                 <div className="h-4 w-32 bg-slate-700 rounded-full ml-4"></div>
              </div>
              
              {/* Fake UI Body */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                 <div className="flex justify-between items-center mb-4">
                    <div className="h-5 w-48 bg-slate-700 rounded-full"></div>
                    <div className="h-8 w-24 bg-indigo-500/20 rounded-lg"></div>
                 </div>
                 
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="p-4 rounded-xl border border-slate-700/50 bg-slate-700/20 flex gap-4 items-center">
                     <div className="w-10 h-10 rounded-full bg-slate-600 flex-shrink-0"></div>
                     <div className="flex-1">
                        <div className="h-4 w-24 bg-slate-600 rounded-full mb-2"></div>
                        <div className="h-3 w-48 bg-slate-700 rounded-full"></div>
                     </div>
                     <div className="w-16 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <div className="w-8 h-2 bg-indigo-500/50 rounded-full"></div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
