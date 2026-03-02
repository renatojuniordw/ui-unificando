import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const JourneySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">
          Uma jornada clara de crescimento
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 text-left">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors group">
            <span className="text-indigo-400 font-black block mb-4 tracking-widest text-xs">
              01. FUNDAÇÃO
            </span>
            <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed">
              Comece organizando o atendimento e centralizando seus canais.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors group">
            <span className="text-indigo-400 font-black block mb-4 tracking-widest text-xs">
              02. ESCALA
            </span>
            <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed">
              Evolua com automações personalizadas e inteligência artificial.
            </p>
          </div>
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors group">
            <span className="text-indigo-400 font-black block mb-4 tracking-widest text-xs">
              03. AUTORIDADE
            </span>
            <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed">
              Fortaleça sua marca com presença digital e site profissional.
            </p>
          </div>
        </div>

        <p className="text-slate-400 font-bold mb-12 max-w-lg mx-auto text-[11px] uppercase tracking-[0.2em] leading-loose">
          Ou monte tudo de uma vez. O caminho se adapta ao seu momento.
        </p>

        <button
          onClick={() => navigate(ROUTES.PLANS)}
          className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-xs font-black hover:bg-slate-200 transition-all shadow-2xl uppercase tracking-widest"
        >
          Simular minha solução
        </button>
      </div>
    </section>
  );
};
