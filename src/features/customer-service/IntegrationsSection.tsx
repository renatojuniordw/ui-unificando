import React from 'react';
import { motion } from 'framer-motion';

export const IntegrationsSection = () => {
    return (
        <section className="py-24 bg-white border-b-4 border-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                        EXPANDA SUA <br/> CONEXÃO.
                    </h2>
                    <p className="text-slate-950 font-mono font-bold text-lg">
                        Além do WhatsApp e Instagram, integre outros canais essenciais.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Site Widget */}
                    <div className="p-8 bg-slate-950 border-4 border-slate-950 shadow-[12px_12px_0px_#ccff00] flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:bg-white hover:text-slate-950 transition-colors group">
                        <div className="w-16 h-16 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center text-slate-950 shrink-0 shadow-[4px_4px_0px_#fff] group-hover:shadow-[4px_4px_0px_#000]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-black text-white group-hover:text-slate-950 uppercase tracking-wide text-xl mb-2">Chat no Site</h3>
                            <p className="text-slate-300 group-hover:text-slate-950 text-sm leading-relaxed font-mono font-bold">Instale nosso widget de chat ao vivo e atenda os visitantes do seu site diretamente no painel.</p>
                        </div>
                    </div>

                    {/* Telegram */}
                    <div className="p-8 bg-[#ccff00] border-4 border-slate-950 shadow-[12px_12px_0px_#000] flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:bg-slate-950 group transition-colors">
                        <div className="w-16 h-16 bg-white border-2 border-slate-950 flex items-center justify-center text-slate-950 shrink-0 shadow-[4px_4px_0px_#000] group-hover:shadow-[4px_4px_0px_#ccff00]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                        <div>
                            <h3 className="font-black text-slate-950 group-hover:text-[#ccff00] uppercase tracking-wide text-xl mb-2">Telegram</h3>
                            <p className="text-slate-950 group-hover:text-white text-sm leading-relaxed font-mono font-bold">Configure seu bot do Telegram e centralize mais esse canal de atendimento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
