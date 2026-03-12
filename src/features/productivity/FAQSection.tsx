import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqItems = [
        { question: "A IA substitui meus atendentes?", answer: "Não. A IA reduz tarefas repetitivas e escala o atendimento. Pessoas continuam essenciais." },
        { question: "Consigo treinar a IA com meus dados?", answer: "Sim. A IA aprende com seus manuais, perguntas frequentes e processos." },
        { question: "Funciona sem o atendimento tradicional?", answer: "Sim. A IA pode atuar sozinha ou integrada ao painel de atendimento." }
    ];

    return (
        <section className="py-24 bg-white border-b-4 border-slate-950">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center mb-16 uppercase tracking-tighter leading-[0.9]">
                    DÚVIDAS FREQUENTES
                </h2>
                <div className="space-y-6 text-left">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-[#ccff00] transition-colors group">
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                aria-expanded={activeFaq === idx}
                                aria-controls={`productivity-faq-${idx}`}
                                className="w-full flex justify-between items-center p-8 text-left"
                            >
                                <span className="font-black text-lg text-slate-950 uppercase tracking-widest">{item.question}</span>
                                <div className={`w-10 h-10 border-2 border-slate-950 bg-white flex items-center justify-center text-slate-950 transition-all shadow-[2px_2px_0px_#000] group-hover:bg-slate-950 group-hover:text-[#ccff00] ${activeFaq === idx ? 'rotate-180 bg-slate-950 text-[#ccff00]' : ''} `}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            {activeFaq === idx && (
                                <div
                                    id={`productivity-faq-${idx}`}
                                    role="region"
                                    className="px-8 pb-8 text-slate-950 text-base leading-relaxed font-mono font-bold"
                                >
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
