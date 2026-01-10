import React, { useState } from 'react';
import { Page } from '../../types';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

export const PricingCalculator = () => {
    const navigate = useNavigate();
    const [inboxes, setInboxes] = useState(1);
    const [attendants, setAttendants] = useState(1);

    // Logic
    const calculatePlan = () => {
        let monthly = 80;
        let setup = 300;

        // Base rules
        if (inboxes > 1) {
            monthly += (inboxes - 1) * 50;
        }

        if (attendants > 1) {
            monthly += (attendants - 1) * 20;
        }

        return { monthly, setup };
    };

    const { monthly, setup } = calculatePlan();

    return (
        <section className="py-24 bg-white" id="calculadora">
            <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden text-left relative">
                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Simulação Personalizada</h2>
                                <p className="text-sm text-slate-500 font-medium mb-12">Ajuste os parâmetros para planejar seu investimento em produtividade.</p>
                            </div>

                            {/* Inboxes */}
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">Número de Caixas de Entrada</label>
                                <input
                                    type="range" min="1" max="10" value={inboxes}
                                    onChange={(e) => setInboxes(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between mt-4 text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                                    <span>1 Caixa</span>
                                    <span>{inboxes} {inboxes === 1 ? 'Caixa' : 'Caixas'}</span>
                                    <span>10 Caixas</span>
                                </div>
                            </div>

                            {/* Attendants */}
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">Número de Atendentes</label>
                                <input
                                    type="range" min="1" max="20" value={attendants}
                                    onChange={(e) => setAttendants(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between mt-4 text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                                    <span>1 Atendente</span>
                                    <span>{attendants} {attendants === 1 ? 'Atendente' : 'Atendentes'}</span>
                                    <span>20 Atendentes</span>
                                </div>
                            </div>

                            {/* Inbox Explanation - Adapted to fit new style */}
                            <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200">
                                <div className="flex items-center gap-2 mb-3 text-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                    <span className="text-[10px] uppercase font-black tracking-wider">O que conta como caixa de entrada?</span>
                                </div>
                                <div className="text-[10px] text-slate-500 leading-relaxed">
                                    <p className="mb-2"><strong className="text-slate-900">Cada conexão = 1 Caixa de entrada.</strong></p>
                                    <ul className="space-y-1 list-disc list-inside mb-3 marker:text-indigo-400">
                                        <li>WhatsApp / Instagram / Telegram</li>
                                        <li>Chat do Site</li>
                                    </ul>
                                    <p className="text-slate-400 italic">Ex: WhatsApp + Instagram = <strong>2 caixas</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-between shadow-2xl">
                            <div>
                                <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.2em] mb-12">Investimento Estimado</h4>
                                <div className="space-y-10">
                                    <div className="border-b border-white/10 pb-10">
                                        <span className="block text-slate-500 text-[10px] uppercase font-black tracking-widest mb-3">Setup Inicial (Único)</span>
                                        <span className="text-5xl font-black tracking-tighter">R$ {setup.toLocaleString('pt-BR')}</span>
                                    </div>
                                    <div>
                                        <span className="block text-slate-500 text-[10px] uppercase font-black tracking-widest mb-3">Mensalidade Unificada</span>
                                        <span className="text-5xl font-black tracking-tighter text-indigo-400">R$ {monthly.toLocaleString('pt-BR')}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.setItem('unificando_config_atendimento', JSON.stringify({
                                        inboxes,
                                        attendants,
                                        monthly,
                                        setup,
                                        date: new Date().toISOString()
                                    }));
                                    navigate(ROUTES[Page.Contact]);
                                }}
                                className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black mt-12 hover:bg-slate-100 transition-all uppercase tracking-widest text-[10px]"
                            >
                                Agendar Diagnóstico
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
