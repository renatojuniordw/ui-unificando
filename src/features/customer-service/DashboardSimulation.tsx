import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DashboardSimulation = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Olá! Gostaria de saber mais sobre os planos.", side: 'left' }
    ]);

    useEffect(() => {
        const sequence = [
            { id: 2, text: "Claro! Temos opções ideais para o seu momento.", side: 'right', delay: 2000 },
            { id: 3, text: "Consigo colocar 3 atendentes no mesmo WhatsApp?", side: 'left', delay: 4500 },
            { id: 4, text: "Sim! Com o Unificando, todos atendem juntos.", side: 'right', delay: 7000 }
        ];

        let timeouts: NodeJS.Timeout[] = [];

        sequence.forEach((msg) => {
            const timeout = setTimeout(() => {
                setMessages(prev => {
                    // Keep only last 4 messages to avoid overflow in simulation
                    const newMsgs = [...prev, { id: msg.id, text: msg.text, side: msg.side }];
                    return newMsgs.slice(-4);
                });
            }, msg.delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, []);

    return (
        <div className="bg-slate-900 rounded-[2.5rem] h-[400px] md:h-[500px] overflow-hidden flex shadow-2xl border border-slate-800 text-[10px] text-left relative z-10">
            {/* Sidebar */}
            <div className="w-14 bg-slate-950 flex flex-col items-center py-6 gap-6 border-r border-white/5">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">U</div>
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"></path></svg>
                </div>
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors cursor-pointer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
            </div>

            {/* List */}
            <div className="w-48 bg-slate-900 border-r border-white/5 hidden md:flex flex-col">
                <div className="p-4 border-b border-white/5">
                    <div className="text-white font-bold mb-1">Caixa de Entrada</div>
                    <div className="text-slate-500 text-[9px]">Todas as conversas</div>
                </div>
                <div className="flex-1 p-2 space-y-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`p-3 rounded-xl cursor-pointer ${i === 1 ? 'bg-indigo-500/10 border border-indigo-500/20' : 'hover:bg-white/5 border border-transparent'}`}>
                            <div className="flex justify-between mb-1">
                                <div className="w-16 h-2 bg-slate-700 rounded-full"></div>
                                <div className="w-8 h-2 bg-slate-800 rounded-full"></div>
                            </div>
                            <div className="w-24 h-2 bg-slate-800 rounded-full mb-1"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-slate-950/50 flex flex-col">
                <div className="h-14 bg-slate-900 border-b border-white/5 flex items-center px-6 justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">L</div>
                        <div>
                            <div className="font-bold text-white">Lead Qualificado</div>
                            <div className="text-slate-500 text-[9px]">via WhatsApp</div>
                        </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[8px] font-black uppercase tracking-widest">Aberto</div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto w-full">
                    <AnimatePresence>
                        {messages.map((m) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className={`max-w-[85%] p-3 px-4 rounded-2xl font-medium leading-relaxed ${m.side === 'left' ? 'bg-slate-800 text-slate-200 self-start rounded-tl-sm' : 'bg-indigo-600 text-white self-end rounded-tr-sm shadow-lg shadow-indigo-900/20'} `}
                            >
                                {m.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="p-4 bg-slate-900 border-t border-white/5">
                    <div className="h-10 bg-white/5 rounded-xl flex items-center px-4 justify-between border border-white/5">
                        <span className="text-slate-500">Escreva uma mensagem...</span>
                        <div className="w-6 h-6 bg-indigo-500 rounded hover:bg-indigo-400 cursor-pointer flex items-center justify-center text-white">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
