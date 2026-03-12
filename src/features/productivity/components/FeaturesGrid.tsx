import React from 'react';

export const FeaturesGrid: React.FC = () => {
    return (
        <section className="py-24 bg-white border-b-4 border-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
                        O QUE MUDA COM IA?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
                        POR QUE USAR <br/>IA NO ATENDIMENTO?
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Atendimento Multicanal 24/7", description: "A IA responde WhatsApp, Instagram e site em tempo real. Nenhuma conversa fica sem resposta.", icon: "🌐" },
                        { title: "Entendimento de Áudio", description: "Seu cliente fala. A IA escuta, transcreve, entende e responde corretamente.", icon: "🎙️" },
                        { title: "Atendimento Personalizado", description: "A IA considera histórico, perfil, localização e contexto para responder como um atendente experiente.", icon: "👤" },
                        { title: "Escalonamento Inteligente", description: "Quando necessário, a conversa vai para um humano com resumo completo. Sem perda de contexto.", icon: "⚡" },
                        { title: "Dados que Viram Decisão", description: "A IA analisa conversas e revela padrões, dúvidas frequentes e oportunidades reais.", icon: "📊" },
                        { title: "Automação Sob Medida", description: "Nada engessado. Os fluxos são criados conforme o seu negócio, sua marca e sua operação.", icon: "🛠️" }
                    ].map((feature, index) => (
                        <div key={index} className="p-10 bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-[#ccff00] transition-colors text-left group">
                            <div className="w-16 h-16 bg-slate-950 text-white flex items-center justify-center mb-8 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00] group-hover:shadow-[4px_4px_0px_#fff] font-black transition-colors text-2xl">{feature.icon}</div>
                            <h4 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-4">{feature.title}</h4>
                            <p className="text-sm text-slate-950 font-mono font-bold leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
