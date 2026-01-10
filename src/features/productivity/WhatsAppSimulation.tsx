import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppSimulation = () => {
    const [messages, setMessages] = useState<Array<{ id: number, text: React.ReactNode, type: 'user' | 'bot' | 'system', time: string }>>([
        { id: 1, text: "Olá! Gostaria de saber mais sobre os planos.", type: 'user', time: '10:00' },
    ]);

    useEffect(() => {
        const sequence = [
            {
                id: 2,
                text: (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div className="h-1 flex-1 bg-indigo-500/20 rounded-full overflow-hidden w-24">
                            <div className="h-full bg-indigo-400 w-2/3 animate-pulse"></div>
                        </div>
                        <span className="text-[9px] opacity-70">0:12</span>
                    </div>
                ),
                type: 'user',
                time: '10:00',
                delay: 1000
            },
            { id: 3, text: <span className="italic opacity-80 text-[9px] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Transcrevendo áudio...</span>, type: 'system', time: '10:00', delay: 2500 },
            { id: 4, text: "Entendi! Você quer detalhes sobre custos e benefícios, certo? Nossos planos começam com...", type: 'bot', time: '10:01', delay: 4500 },
            { id: 5, text: "Exatamente! E vocês atendem domingos?", type: 'user', time: '10:02', delay: 7000 },
            { id: 6, text: "Sim! Nossos Agentes IA trabalham 24/7, inclusive domingos e feriados, sem pausas.", type: 'bot', time: '10:02', delay: 9000 },
        ];

        const timeouts = sequence.map(msg =>
            setTimeout(() => {
                setMessages(prev => {
                    // Remove system message if exists
                    const filtered = prev.filter(m => m.type !== 'system');
                    return [...filtered, msg as any];
                });
            }, msg.delay)
        );

        const resetTimeout = setTimeout(() => {
            setMessages([{ id: 1, text: "Olá! Gostaria de saber mais sobre os planos.", type: 'user', time: '10:00' }]);
        }, 16000);

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(resetTimeout);
        };
    }, []);

    return (
        <div className="bg-slate-50 rounded-[2rem] h-full overflow-hidden flex flex-col shadow-inner relative border border-slate-200">
            <div className="bg-slate-900 p-4 flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black text-xs">U</div>
                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Unificando AI</span>
                    <span className="text-[8px] opacity-60 font-bold uppercase tracking-tight">AUTOMAÇÃO INTELIGENTE</span>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-100">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className={`max-w-[85%] p-3 rounded-2xl text-[10px] shadow-sm font-medium ${msg.type === 'user'
                                ? 'bg-indigo-600 text-white self-end rounded-tr-none'
                                : 'bg-white text-slate-800 self-start rounded-tl-none border border-slate-200'
                                } `}
                        >
                            {msg.text}
                            <div className={`text-[8px] mt-1 ${msg.type === 'user' ? 'text-indigo-200' : 'text-slate-400'} `}>{msg.time}</div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
                <div className="flex-1 bg-slate-50 rounded-full h-8 px-4 flex items-center border border-slate-100">
                    <div className="w-px h-3 bg-indigo-600 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};
