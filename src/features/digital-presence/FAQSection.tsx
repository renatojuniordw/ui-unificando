import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqItems = [
        { q: "O que é uma página estática?", a: "É uma página com conteúdo fixo, sem painel de edição ou sistema interno. Mais rápida, segura e ideal para presença institucional." },
        { q: "O site é meu ou pago aluguel?", a: "O site é seu. Após o primeiro ano, domínio e hospedagem podem ser renovados pelo cliente ou mantidos conosco." },
        { q: "Aparecer no Google demora quanto tempo?", a: "A indexação inicial costuma ocorrer em poucos dias. Resultados orgânicos variam conforme concorrência e conteúdo." },
        { q: "Como funciona a cobrança por página extra?", a: "Cada página adicional soma 10% ao valor base, mantendo o mesmo padrão visual e técnico." }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-black text-slate-900 text-center mb-12 uppercase tracking-tight">Dúvidas Frequentes</h2>
                <div className="space-y-4 text-left">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-7 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-black text-slate-800 text-sm uppercase tracking-wide">{item.q}</span>
                                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === idx ? 'rotate-180 bg-slate-900 text-white' : ''} `}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            {activeFaq === idx && (
                                <div className="px-7 pb-7 text-slate-500 text-sm leading-relaxed font-medium">
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
