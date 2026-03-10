import React from "react";
import { motion } from "framer-motion";

export const SocialProofLawSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-white -skew-y-2 origin-top-right z-0"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            HISTÓRIA DE SUCESSO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
            Quem confia no <span className="text-indigo-600">Unificando</span>.
          </h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-white p-8 md:p-14 rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden group hover:border-indigo-200 transition-colors"
        >
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-50/50 rounded-tr-full -ml-8 -mb-8 transition-transform group-hover:scale-110"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left">
             <div className="flex-1">
               <div className="text-amber-400 mb-8 flex justify-center md:justify-start gap-1">
                 {[1, 2, 3, 4, 5].map((star) => (
                   <svg key={star} className="w-7 h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                     <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                   </svg>
                 ))}
               </div>
               
               <p className="text-xl md:text-3xl text-slate-700 font-medium leading-[1.6] mb-10 tracking-tight">
                 "A empresa Unificando me prestou um serviço de excelência. Onde é responsável pelo site e consequentemente automação do meu escritório. Todo trabalho e suporte ofertado pela empresa, é excelente e <span className="text-slate-900 font-black italic">indico de olhos fechados.</span>"
               </p>
               
               <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-8 gap-6">
                 <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center font-black text-white text-xl shadow-lg border-2 border-white">
                     MC
                   </div>
                   <div className="text-left">
                     <div className="font-black text-xl text-slate-900 tracking-tight">Maria Clara Santos</div>
                     <div className="text-xs font-black text-indigo-600 uppercase tracking-widest mt-1">Advogada Previdenciarista</div>
                   </div>
                 </div>
                 
                 <a 
                   href="https://mariaclarasantos.adv.br/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 text-sm font-black text-slate-600 hover:text-indigo-600 transition-all bg-white hover:bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 hover:border-indigo-200 shadow-sm hover:shadow-md w-full md:w-auto justify-center"
                 >
                   <span>Acessar Case Habilitado</span>
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </a>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
