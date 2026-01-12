import React from "react";

export const PlanFooterInfo: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 opacity-40">
            Regras de Negócio
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-400 text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                  Canais e Inboxes
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  Cada canal conectado (WhatsApp, Instagram, Site) conta como 1
                  Inbox.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-400 text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                  Diagnóstico IA
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  Projetos de IA passam por uma etapa de alinhamento técnico
                  para garantir viabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">
            🔎 Importante saber
          </h3>
          <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex gap-3">
                <span className="text-slate-400">⚠️</span>
                <span>
                  Não fornecemos número de WhatsApp ou contas de Instagram. Os
                  canais utilizados são sempre do cliente.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600">✓</span>
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
