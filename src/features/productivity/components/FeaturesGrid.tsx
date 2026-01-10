import React from 'react';

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O que muda com Agentes Inteligentes</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Por que usar IA no atendimento?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { t: "Atendimento Multicanal 24/7", d: "A IA responde WhatsApp, Instagram e site em tempo real. Nenhuma conversa fica sem resposta.", i: "🌐" },
                        { t: "Entendimento de Áudio", d: "Seu cliente fala. A IA escuta, transcreve, entende e responde corretamente.", i: "🎙️" },
                        { t: "Atendimento Hiper-personalizado", d: "A IA considera histórico, perfil, localização e contexto para responder como um atendente experiente.", i: "👤" },
                        { t: "Escalonamento Inteligente", d: "Quando necessário, a conversa vai para um humano com resumo completo. Sem perda de contexto.", i: "⚡" },
                        { t: "Dados que Viram Decisão", d: "A IA analisa conversas e revela padrões, dúvidas frequentes e oportunidades reais.", i: "📊" },
                        { t: "Automação Sob Medida", d: "Nada engessado. Os fluxos são criados conforme o seu negócio, sua marca e sua operação.", i: "🛠️" }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] hover:border-indigo-400 transition-all text-left group">
                            <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black transition-colors text-xl">{item.i}</div>
                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">{item.t}</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
