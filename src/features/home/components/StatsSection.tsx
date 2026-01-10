import React from 'react';

export const StatsSection: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">Resultados na Prática</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { label: "Menos tempo perdido", value: "80%" },
                        { label: "Vendas recuperadas", value: "+35%" },
                        { label: "Canais organizados", value: "100%" },
                        { label: "Satisfação média", value: "9.8" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
