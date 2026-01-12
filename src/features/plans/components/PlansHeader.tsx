import React from "react";

export const PlansHeader: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
          Planos Unificando
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
          Monte a solução ideal <br /> para o seu negócio.
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Você escolhe os canais, o tamanho da equipe e se deseja usar
          Inteligência Artificial.
        </p>
      </div>
    </section>
  );
};
