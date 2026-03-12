import React from 'react';

export const EcosystemSection: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b-4 border-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-6 leading-[0.9]">
                        DUAS SOLUÇÕES.<br/> 
                        <span className="text-white bg-slate-950 px-2 inline-block -rotate-1 shadow-[6px_6px_0px_#ccff00]">UM ECOSSISTEMA.</span>
                    </h2>
                    <p className="text-slate-950 max-w-2xl mx-auto text-lg font-mono font-bold">
                        Você escolhe usar separado ou integrado. Nós montamos do jeito que o seu negócio precisa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 border-4 border-slate-950 hover:bg-[#ccff00] transition-colors shadow-[12px_12px_0px_#000] group">
                        <div className="w-16 h-16 bg-slate-950 text-white flex items-center justify-center text-3xl mb-8 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00] group-hover:shadow-[4px_4px_0px_#fff]">🖥️</div>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-slate-950">Atendimento Digital</h3>
                        <p className="text-slate-950 font-mono font-bold leading-relaxed">Organize conversas, equipe e canais em um só lugar.</p>
                    </div>
                    <div className="bg-slate-950 p-12 text-white border-4 border-slate-950 shadow-[12px_12px_0px_#ccff00] relative overflow-hidden group hover:bg-[#ccff00] hover:text-slate-950 transition-colors">
                        <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl group-hover:opacity-20">🤖</div>
                        <div className="w-16 h-16 bg-[#ccff00] text-slate-950 flex items-center justify-center text-3xl mb-8 relative z-10 border-2 border-slate-950 shadow-[4px_4px_0px_#fff] group-hover:shadow-[4px_4px_0px_#000]">🧠</div>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4 relative z-10">IA para Negócios</h3>
                        <p className="text-slate-300 font-mono font-bold leading-relaxed relative z-10 group-hover:text-slate-950">Agentes inteligentes que atendem, agendam e vendem 24/7, adaptados à sua marca e ao seu processo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
