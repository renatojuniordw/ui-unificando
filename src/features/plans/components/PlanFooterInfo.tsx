import React from "react";

export const PlanFooterInfo: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 text-white border-t-8 border-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="inline-block bg-white text-slate-950 px-4 py-1.5 border-2 border-slate-950 text-xl font-black uppercase tracking-tighter mb-6 shadow-[3px_3px_0px_#ccff00]">
            Regras de negócio
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center shrink-0 font-black text-slate-950 text-base shadow-[2px_2px_0px_#fff]">
                1
              </div>
              <div className="bg-slate-900/50 p-4 border border-slate-800 flex-1">
                <h4 className="font-black text-[#ccff00] text-[10px] uppercase tracking-widest mb-1.5">
                  Canais e Inboxes
                </h4>
                <p className="text-[12px] text-slate-300 font-medium">
                  Cada canal conectado (WhatsApp, Instagram, Site) conta como 1 Inbox individual dentro do seu painel.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center shrink-0 font-black text-slate-950 text-base shadow-[2px_2px_0px_#fff]">
                2
              </div>
              <div className="bg-slate-900/50 p-4 border border-slate-800 flex-1">
                <h4 className="font-black text-[#ccff00] text-[10px] uppercase tracking-widest mb-1.5">
                  Diagnóstico IA
                </h4>
                <p className="text-[12px] text-slate-300 font-medium">
                  Os projetos de IA passam por uma etapa de alinhamento técnico para garantir a melhor experiência e viabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="inline-block bg-[#ccff00] text-slate-950 px-4 py-1.5 border-2 border-slate-950 text-xl font-black uppercase tracking-tighter mb-6 shadow-[3px_3px_0px_#fff]">
            🔎 Importante saber
          </h3>
          <div className="bg-white text-slate-950 p-6 border-4 border-slate-950 shadow-[6px_6px_0px_#ccff00]">
            <ul className="space-y-5 text-[12px] font-medium">
              <li className="flex gap-4 items-start pb-4 border-b border-slate-200">
                <span className="text-lg shrink-0">⚠️</span>
                <span>
                  Não fornecemos números de WhatsApp ou contas de Instagram. Os canais utilizados são sempre de propriedade do cliente.
                </span>
              </li>
              <li className="flex gap-4 items-start pt-1">
                <span className="w-5 h-5 bg-slate-950 text-[#ccff00] flex items-center justify-center font-black text-[10px] border border-slate-950 shrink-0">✓</span>
                <span>
                  Nossas automações respeitam rigorosamente as diretrizes e regras de uso das APIs oficiais para garantir a segurança da sua conta.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
};
