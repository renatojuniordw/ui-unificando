import React from "react";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-950 border-b-2 border-slate-950 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row border-t-2 border-l-2 border-slate-950 bg-white">
          {[
            { label: "Tempo Recuperado", value: "80%" },
            { label: "Vendas Salvas", value: "+35%" },
            { label: "Caos Digital", value: "0%" },
            { label: "Controle Total", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 p-8 md:p-12 border-r-2 border-b-2 border-slate-950 group hover:bg-[#ccff00] transition-colors duration-300">
              <div className="text-5xl md:text-6xl font-black text-slate-950 mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

