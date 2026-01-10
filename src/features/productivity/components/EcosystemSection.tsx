import React from 'react';

export const EcosystemSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Duas soluções. <span className="text-indigo-600">Um único ecossistema.</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Você escolhe usar separado ou integrado. Nós montamos do jeito que o seu negócio precisa.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-indigo-200 transition-all shadow-sm">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8">🖥️</div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-slate-900">Atendimento Digital</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">Organize conversas, equipe e canais em um só lugar.</p>
                    </div>
                    <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl">🤖</div>
                        <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-8 relative z-10">🧠</div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 relative z-10">IA para Negócios</h3>
                        <p className="text-indigo-100 font-medium leading-relaxed relative z-10">Agentes inteligentes que atendem, agendam e vendem 24/7, adaptados à sua marca e ao seu processo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
