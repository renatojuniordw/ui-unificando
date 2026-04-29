import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const HeroLawSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-slate-950 border-b-8 border-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#ccff00] text-slate-950 px-4 py-2 border-4 border-slate-950 shadow-[4px_4px_0px_#fff] mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
              SISTEMA PARA ESCRITÓRIOS DE ADVOCACIA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            VOCÊ É ADVOGADO, <br/>
            <span className="text-slate-950 bg-[#ccff00] px-3 inline-block -rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">NÃO TELEFONISTA.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-none font-bold uppercase p-6 border-l-8 border-[#ccff00] bg-slate-900/50 max-w-xl">
            Centralize atendimentos, automatize a triagem com IA e pare de perder contratos por demora. 
            <span className="text-[#ccff00] block mt-2">ESTRUTURA JURÍDICA DE ALTA PERFORMANCE.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, translateX: 5 }}
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

          <div className="flex items-center gap-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-none border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-black text-white">
                    {i}
                  </div>
                ))}
             </div>
             <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
               +200 escritórios digitalizados
             </p>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Abstract representation of Organized UI for Law Firms */}
          <div className="relative w-full aspect-square max-w-lg mx-auto p-4 border-8 border-slate-950 bg-[#ccff00] shadow-[16px_16px_0px_#fff]">
            <div className="absolute -top-12 -right-12 bg-white text-slate-950 p-6 border-8 border-slate-950 shadow-[8px_8px_0px_#000] rotate-12 z-20">
              <p className="text-2xl font-black uppercase tracking-tighter leading-none">
                TRIAGEM <br/> COM IA
              </p>
            </div>
            
            <div className="bg-slate-950 w-full h-full p-8 flex flex-col gap-6">
               <div className="h-12 border-4 border-[#ccff00] flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-[#ccff00]"></div>
                    <div className="w-3 h-3 bg-[#ccff00]"></div>
                  </div>
                  <div className="h-2 w-24 bg-[#ccff00]/30"></div>
               </div>

               {[1, 2, 3].map((i) => (
                 <div key={i} className="p-4 border-4 border-[#ccff00]/20 flex gap-4 items-center bg-slate-900 shadow-[4px_4px_0px_#ccff0010]">
                   <div className="w-10 h-10 bg-[#ccff00] border-2 border-slate-950"></div>
                   <div className="flex-1">
                      <div className="h-3 w-24 bg-[#ccff00] mb-2"></div>
                      <div className="h-2 w-48 bg-[#ccff00]/30"></div>
                   </div>
                   <div className="px-3 py-1 bg-white text-slate-950 text-[8px] font-black uppercase border-2 border-slate-950">
                     CASO ATIVO
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
