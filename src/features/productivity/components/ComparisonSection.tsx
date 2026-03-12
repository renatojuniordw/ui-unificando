import React from 'react';

export const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#ccff00] border-b-4 border-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20 bg-white border-4 border-slate-950 shadow-[12px_12px_0px_#000] p-8 max-w-4xl mx-auto">
                    <span className="inline-block bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 shadow-[4px_4px_0px_#000]">
                        ENTENDA A DIFERENÇA
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-6 leading-[0.9]">
                        NÃO É MELHOR OU PIOR.<br/> 
                        <span className="bg-slate-950 text-[#ccff00] px-3 inline-block rotate-1 shadow-[6px_6px_0px_#fff] border-2 border-slate-950 mt-2">É DIFERENTE.</span>
                    </h2>
                    <p className="text-slate-950 font-mono font-bold text-lg">
                        O Unificando oferece os dois — você escolhe o que faz sentido.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Agentes IA */}
                    <div className="bg-slate-950 text-white p-12 border-4 border-slate-950 shadow-[12px_12px_0px_#fff] relative overflow-hidden hover:bg-white hover:text-slate-950 transition-colors group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl leading-none select-none text-[#ccff00] group-hover:text-slate-950">IA</div>
                        <h3 className="text-4xl font-black uppercase tracking-widest mb-8 text-[#ccff00] group-hover:text-slate-950">Agentes IA</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 border-2 border-slate-950 bg-[#ccff00] text-slate-950 flex items-center justify-center shrink-0 mt-1 font-black shadow-[2px_2px_0px_#000]">✓</div>
                                <p className="font-mono font-bold leading-relaxed text-lg">Conversas <strong>naturais e flexíveis</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 border-2 border-slate-950 bg-[#ccff00] text-slate-950 flex items-center justify-center shrink-0 mt-1 font-black shadow-[2px_2px_0px_#000]">✓</div>
                                <p className="font-mono font-bold leading-relaxed text-lg">Aprende com <strong>seus processos</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 border-2 border-slate-950 bg-[#ccff00] text-slate-950 flex items-center justify-center shrink-0 mt-1 font-black shadow-[2px_2px_0px_#000]">✓</div>
                                <p className="font-mono font-bold leading-relaxed text-lg">Atua em <strong>vendas, suporte e agendamento</strong>.</p>
                            </li>
                        </ul>
                        <div className="mt-12 pt-8 border-t-4 border-[#ccff00] group-hover:border-slate-950">
                            <span className="block text-[10px] uppercase font-black tracking-widest mb-2 bg-[#ccff00] text-slate-950 px-2 py-1 max-w-max">IDEAL PARA:</span>
                            <p className="font-black text-xl uppercase">SDR Virtual, Suporte Nível 1, Vendas Consultivas.</p>
                        </div>
                    </div>

                    {/* Chatbots */}
                    <div className="bg-white border-4 border-slate-950 p-12 shadow-[12px_12px_0px_#000] relative overflow-hidden hover:bg-slate-950 hover:text-white transition-colors group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-9xl leading-none select-none text-slate-950 group-hover:text-white">BOT</div>
                        <h3 className="text-4xl font-black uppercase tracking-widest mb-8 text-slate-950 group-hover:text-white">Chatbots Clássicos</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 border-2 border-slate-950 bg-slate-950 text-[#ccff00] group-hover:bg-white group-hover:text-slate-950 flex items-center justify-center shrink-0 mt-1 font-black shadow-[2px_2px_0px_#000] group-hover:shadow-[2px_2px_0px_#ccff00]">✓</div>
                                <p className="font-mono font-bold leading-relaxed text-lg">Fluxos <strong>rígidos e previsíveis</strong>.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 border-2 border-slate-950 bg-slate-950 text-[#ccff00] group-hover:bg-white group-hover:text-slate-950 flex items-center justify-center shrink-0 mt-1 font-black shadow-[2px_2px_0px_#000] group-hover:shadow-[2px_2px_0px_#ccff00]">✓</div>
                                <p className="font-mono font-bold leading-relaxed text-lg">Sem <strong>improviso ou contexto</strong>.</p>
                            </li>
                        </ul>
                        <div className="mt-12 pt-8 border-t-4 border-slate-950 group-hover:border-white">
                            <span className="block text-[10px] uppercase font-black tracking-widest mb-2 bg-slate-950 text-white px-2 py-1 max-w-max group-hover:bg-white group-hover:text-slate-950">IDEAL PARA:</span>
                            <p className="font-black text-xl uppercase">Coleta de dados, 2ª via de boleto, Rastreio de pedidos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
