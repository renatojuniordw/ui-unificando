import React, { useState } from 'react';
import { Page } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingCalculator = ({ onNavigate }: { onNavigate: (page: Page) => void }) => {
    const [inboxes, setInboxes] = useState(1);
    const [attendants, setAttendants] = useState(1);
    const [isInboxInfoOpen, setIsInboxInfoOpen] = useState(false);

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
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            {/* Controls */}
            <div className="p-8 md:p-12 flex-1 space-y-10">

                {/* Sliders */}
                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="font-bold text-slate-900 uppercase tracking-wide text-xs">Caixas de Entrada</label>
                            <span className="font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded text-xs">{inboxes}</span>
                        </div>
                        <input
                            type="range" min="1" max="10" value={inboxes}
                            onChange={(e) => setInboxes(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />

                        {/* Inbox Explanation - Always Visible */}
                        <div className="mt-6">
                            <div className="flex items-center gap-2 mb-3 text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                <span className="text-[10px] uppercase font-black tracking-wider">O que conta como caixa de entrada?</span>
                            </div>
                            <div className="text-[10px] text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">
                                <p className="mb-2"><strong className="text-slate-900">Cada conexão = 1 Caixa de entrada.</strong></p>
                                <ul className="space-y-1 list-disc list-inside mb-3 marker:text-indigo-400">
                                    <li>WhatsApp</li>
                                    <li>Instagram</li>
                                    <li>Telegram</li>
                                    <li>Chat do Site</li>
                                </ul>
                                <p className="text-slate-400 italic">Exemplo: Se usar WhatsApp + Instagram, você usará <strong>2 caixas de entrada</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-4">
                            <label className="font-bold text-slate-900 uppercase tracking-wide text-xs">Atendentes</label>
                            <span className="font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded text-xs">{attendants}</span>
                        </div>
                        <input
                            type="range" min="1" max="20" value={attendants}
                            onChange={(e) => setAttendants(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                </div>

            </div>

            {/* Results */}
            <div className="bg-slate-900 p-8 md:p-12 md:w-[400px] text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 blur-[80px] opacity-40 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Seu Plano Personalizado</div>

                    <div className="space-y-6 mb-10 pt-6">
                        <div className="flex justify-between items-end">
                            <span className="text-slate-400 text-xs font-bold uppercase">Mensalidade</span>
                            <div className="text-right">
                                <span className="text-5xl font-black text-white">R$ {monthly}</span>
                                <span className="text-slate-500 text-[10px]">/mês</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end border-t border-white/10 pt-6">
                            <span className="text-slate-400 text-xs font-bold uppercase">Setup Único</span>
                            <div className="text-right">
                                <span className="text-xl font-bold text-white">R$ {setup}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => onNavigate(Page.Contact)}
                        className="w-full py-5 bg-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/50"
                    >
                        Contratar Agora
                    </button>
                    <p className="mt-4 text-[10px] text-slate-500 text-center">Fale com um especialista para fechar.</p>
                </div>
            </div>
        </div>
    );
};
