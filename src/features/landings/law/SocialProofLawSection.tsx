import React from "react";
import { motion } from "framer-motion";

export const SocialProofLawSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b-8 border-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
            EVIDÊNCIA DE RESULTADOS
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
            QUEM CONFIA NO <br/>
            <span className="bg-slate-950 text-[#ccff00] px-3 inline-block rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#000]">UNIFICANDO.</span>
          </h2>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-white p-8 md:p-14 border-8 border-slate-950 shadow-[20px_20px_0px_#ccff00] relative group"
        >
           {/* Certification Stamp */}
           <div className="absolute top-10 right-10 w-32 h-32 border-8 border-red-600 rounded-full flex items-center justify-center opacity-20 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform">
              <span className="text-red-600 text-xs font-black uppercase text-center leading-none">
                VERIFICADO <br/> PELO <br/> CLIENTE
              </span>
           </div>
           
           <div className="relative z-10 flex flex-col gap-10">
             <div className="flex justify-center md:justify-start gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-8 h-8 bg-slate-950 flex items-center justify-center text-[#ccff00] text-lg font-black border-2 border-slate-950">
                    ★
                  </div>
                ))}
             </div>
             
             <p className="text-2xl md:text-3xl text-slate-950 font-black uppercase leading-[1.1] tracking-tighter mb-10 p-6 border-l-8 border-slate-950 bg-slate-50">
               "A EMPRESA UNIFICANDO ME PRESTOU UM SERVIÇO DE EXCELÊNCIA. ONDE É RESPONSÁVEL PELO SITE E CONSEQUENTEMENTE AUTOMAÇÃO DO MEU ESCRITÓRIO. TODO TRABALHO E SUPORTE OFERTADO PELA EMPRESA É EXCELENTE E <span className="bg-slate-950 text-white px-2">INDICO DE OLHOS FECHADOS.</span>"
             </p>
             
             <div className="flex flex-col md:flex-row items-center justify-between border-t-4 border-slate-950 pt-10 gap-8">
               <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-slate-950 text-[#ccff00] border-4 border-slate-950 flex items-center justify-center font-black text-3xl shadow-[4px_4px_0px_#000]">
                   MC
                 </div>
                 <div className="text-left">
                   <div className="font-black text-3xl text-slate-950 tracking-tighter uppercase leading-none">Maria Clara Santos</div>
                   <div className="text-xs font-black text-slate-500 uppercase tracking-widest mt-2 bg-slate-100 px-3 py-1 border-2 border-slate-200 inline-block">Advogada Previdenciarista</div>
                 </div>
               </div>
               
               <a 
                 href="https://mariaclarasantos.adv.br/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-4 text-xs font-black text-white bg-slate-950 px-8 py-5 border-4 border-slate-950 shadow-[6px_6px_0px_#ccff00] hover:shadow-[10px_10px_0px_#ccff00] transition-all uppercase tracking-widest"
               >
                 <span>ACESSAR CASE HABILITADO</span>
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                   <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
