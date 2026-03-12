import React from "react";

export const PlanFooterInfo: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 text-white border-t-8 border-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="inline-block bg-white text-slate-950 px-4 py-2 border-2 border-slate-950 text-2xl font-black uppercase tracking-tighter mb-8 shadow-[4px_4px_0px_#ccff00]">
            REGRAS DE NEGÓCIO
          </h3>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center shrink-0 font-black text-slate-950 text-lg shadow-[2px_2px_0px_#fff]">
                1
              </div>
              <div className="bg-slate-900 p-4 border-2 border-slate-800">
                <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">
                  Canais e Inboxes
                </h4>
                <p className="text-sm text-slate-400 font-mono font-bold uppercase">
                  Cada canal conectado (WhatsApp, Instagram, Site) conta como 1
                  Inbox.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center shrink-0 font-black text-slate-950 text-lg shadow-[2px_2px_0px_#fff]">
                2
              </div>
              <div className="bg-slate-900 p-4 border-2 border-slate-800">
                <h4 className="font-black text-white text-sm uppercase tracking-widest mb-2">
                  Diagnóstico IA
                </h4>
                <p className="text-sm text-slate-400 font-mono font-bold uppercase">
                  Projetos de IA passam por uma etapa de alinhamento técnico
                  para garantir viabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="inline-block bg-[#ccff00] text-slate-950 px-4 py-2 border-2 border-slate-950 text-2xl font-black uppercase tracking-tighter mb-8 shadow-[4px_4px_0px_#fff]">
            🔎 IMPORTANTE SABER
          </h3>
          <div className="bg-white text-slate-950 p-8 border-4 border-slate-950 shadow-[8px_8px_0px_#ccff00]">
            <ul className="space-y-6 text-sm font-mono font-bold uppercase">
              <li className="flex gap-4 items-start pb-4 border-b-2 border-slate-200">
                <span className="text-xl">⚠️</span>
                <span>
                  Não fornecemos número de WhatsApp ou contas de Instagram. Os
                  canais utilizados são sempre do cliente.
                </span>
              </li>
              <li className="flex gap-4 items-start pt-2">
                <span className="w-6 h-6 bg-slate-950 text-[#ccff00] flex items-center justify-center font-black">✓</span>
                <span>
                  A IA respeita as regras de uso do WhatsApp, Instagram e demais
                  canais para garantir segurança.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
