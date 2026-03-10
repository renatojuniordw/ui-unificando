import React from "react";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs">
            Resultados na Prática
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {[
            { label: "Menos tempo perdido", value: "80%" },
            { label: "Vendas recuperadas", value: "+35%" },
            { label: "Canais organizados", value: "100%" },
            { label: "Satisfação média", value: "9.8" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl lg:text-6xl font-black text-white mb-3 tracking-tighter group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 leading-tight">
                {stat.label}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mt-2">
                Média dos nossos clientes ativos
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
