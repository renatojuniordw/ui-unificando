import React from 'react';

export const PainPointsSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O Gargalo que Ninguém Fala</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Quando software pronto <br /><span className="text-red-500">não resolve.</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🧩</div>
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Ferramentas Desconectadas</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">WhatsApp, planilhas, agendas e sistemas que não conversam entre si geram retrabalho e perda de informação.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">📉</div>
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Processos Não Padronizados</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">O atendimento depende de pessoas específicas. Treinar alguém novo vira um problema.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🔄</div>
                        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Tudo Manual e Repetitivo</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">Perguntas, áudios, agendamentos e triagens que poderiam ser resolvidos automaticamente consomem tempo todos os dias.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
