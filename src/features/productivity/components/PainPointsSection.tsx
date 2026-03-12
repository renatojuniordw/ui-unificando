import React from 'react';

export const PainPointsSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#ccff00] border-b-4 border-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="inline-block bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">O GARGALO OCULTO</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
                        QUANDO SOFTWARE PRONTO <br />
                        <span className="text-white bg-red-600 px-2 inline-block rotate-1 border-2 border-slate-950 shadow-[6px_6px_0px_#000]">NÃO RESOLVE.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white border-4 border-slate-950 hover:bg-slate-950 hover:text-white transition-colors shadow-[8px_8px_0px_#000] group">
                        <div className="w-16 h-16 bg-slate-950 text-white border-2 border-slate-950 flex items-center justify-center text-3xl mb-6 shadow-[4px_4px_0px_#ccff00] group-hover:bg-[#ccff00] group-hover:text-slate-950 transition-colors">🧩</div>
                        <h3 className="font-black text-inherit uppercase tracking-widest text-sm mb-3">Ferramentas Desconectadas</h3>
                        <p className="text-sm font-mono font-bold leading-relaxed text-inherit">WhatsApp, planilhas, agendas e sistemas que não conversam entre si geram retrabalho e perda de informação.</p>
                    </div>
                    <div className="p-8 bg-white border-4 border-slate-950 hover:bg-slate-950 hover:text-white transition-colors shadow-[8px_8px_0px_#000] group">
                        <div className="w-16 h-16 bg-slate-950 text-white border-2 border-slate-950 flex items-center justify-center text-3xl mb-6 shadow-[4px_4px_0px_#ccff00] group-hover:bg-[#ccff00] group-hover:text-slate-950 transition-colors">📉</div>
                        <h3 className="font-black text-inherit uppercase tracking-widest text-sm mb-3">Processos Não Padronizados</h3>
                        <p className="text-sm font-mono font-bold leading-relaxed text-inherit">O atendimento depende de pessoas específicas. Treinar alguém novo vira um problema.</p>
                    </div>
                    <div className="p-8 bg-white border-4 border-slate-950 hover:bg-slate-950 hover:text-white transition-colors shadow-[8px_8px_0px_#000] group">
                        <div className="w-16 h-16 bg-slate-950 text-white border-2 border-slate-950 flex items-center justify-center text-3xl mb-6 shadow-[4px_4px_0px_#ccff00] group-hover:bg-[#ccff00] group-hover:text-slate-950 transition-colors">🔄</div>
                        <h3 className="font-black text-inherit uppercase tracking-widest text-sm mb-3">Tudo Manual e Repetitivo</h3>
                        <p className="text-sm font-mono font-bold leading-relaxed text-inherit">Perguntas, áudios, agendamentos e triagens que poderiam ser resolvidos automaticamente consomem tempo todos os dias.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
