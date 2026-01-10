import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqItems = [
        { q: "A IA substitui meus atendentes?", a: "Não. A IA reduz tarefas repetitivas e escala o atendimento. Pessoas continuam essenciais." },
        { q: "Consigo treinar a IA com meus dados?", a: "Sim. A IA aprende com seus manuais, perguntas frequentes e processos." },
        { q: "Funciona sem o atendimento tradicional?", a: "Sim. A IA pode atuar sozinha ou integrada ao painel de atendimento." }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">Dúvidas Comuns</h2>
                <div className="space-y-4 text-left">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                aria-expanded={activeFaq === idx}
                                aria-controls={`productivity-faq-${idx}`}
                                className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-black text-[11px] text-slate-800 uppercase tracking-widest">{item.q}</span>
                                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === idx ? 'rotate-180 bg-slate-900 text-white' : ''} `}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            {activeFaq === idx && (
                                <div
                                    id={`productivity-faq-${idx}`}
                                    role="region"
                                    className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-medium"
                                >
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
