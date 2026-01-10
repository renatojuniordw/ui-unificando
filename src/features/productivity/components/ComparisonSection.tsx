import React from 'react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-indigo-600 font-black uppercase tracking-widest text-xs mb-4 block">Entenda a Diferença</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Não é melhor ou pior. <span className="text-indigo-600">É diferente.</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">O Unificando oferece os dois — você escolhe o que faz sentido.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Agentes IA */}
                    <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl leading-none select-none">IA</div>
                        <h3 className="text-3xl font-black uppercase tracking-widest mb-8 text-indigo-400">Agentes IA</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                <p className="text-slate-300 font-medium leading-relaxed">Conversas <strong>naturais e flexíveis</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                <p className="text-slate-300 font-medium leading-relaxed">Aprende com <strong>seus processos</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                <p className="text-slate-300 font-medium leading-relaxed">Atua em <strong>vendas, suporte e agendamento</strong>.</p>
                            </li>
                        </ul>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <span className="block text-[10px] uppercase font-black tracking-widest text-indigo-400 mb-2">Ideal Para:</span>
                            <p className="text-sm font-bold">SDR Virtual, Suporte Nível 1, Vendas Consultivas.</p>
                        </div>
                    </div>

                    {/* Chatbots */}
                    <div className="bg-slate-50 border border-slate-200 p-12 rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-transform">
                        <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-9xl leading-none select-none text-slate-900">BOT</div>
                        <h3 className="text-3xl font-black uppercase tracking-widest mb-8 text-slate-900">Chatbots Tradicionais</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                                <p className="text-slate-600 font-medium leading-relaxed">Fluxos <strong>rígidos e previsíveis</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                                <p className="text-slate-600 font-medium leading-relaxed">Sem <strong>improviso ou contexto</strong>.</p>
                            </li>
                        </ul>
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <span className="block text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Ideal Para:</span>
                            <p className="text-sm font-bold text-slate-700">Coleta de dados, 2ª via de boleto, Rastreio de pedidos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
