import React from 'react';

export const MethodologySection: React.FC = () => {
    return (
        <section className="py-24 bg-indigo-600 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="opacity-60 text-[10px] font-black uppercase tracking-[0.3em] mb-8 block">Metodologia Unificando</span>
                <h2 className="text-3xl md:text-5xl font-black mb-12 max-w-4xl mx-auto tracking-tight">Soluções personalizadas de verdade.</h2>
                <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-16 font-medium">Aqui não existe "pacote mágico". Antes de qualquer implementação, fazemos um diagnóstico para entender seu modelo, fluxo, volume e objetivos.</p>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                        <span className="text-4xl mb-4 block">1.</span>
                        <h3 className="font-black uppercase tracking-widest text-sm mb-4">Atendimento Organizado</h3>
                        <p className="text-indigo-100 text-sm leading-relaxed">Estruturamos seus canais e equipe para operarem com eficiência máxima.</p>
                    </div>
                    <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                        <span className="text-4xl mb-4 block">2.</span>
                        <h3 className="font-black uppercase tracking-widest text-sm mb-4">IA no Nível Certo</h3>
                        <p className="text-indigo-100 text-sm leading-relaxed">Implementamos a inteligência artificial onde ela traz mais retorno, sem exageros.</p>
                    </div>
                    <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                        <span className="text-4xl mb-4 block">3.</span>
                        <h3 className="font-black uppercase tracking-widest text-sm mb-4">Automação que Resolve</h3>
                        <p className="text-indigo-100 text-sm leading-relaxed">Criamos automações que eliminam gargalos e não atrapalham a experiência do cliente.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
