import React from 'react';
import { motion } from 'framer-motion';

export const IntegrationsSection = () => {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Expanda sua Conexão</h2>
                    <p className="text-slate-500 text-lg font-medium">Além do WhatsApp e Instagram, integre outros canais essenciais.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Site Widget */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:scale-[1.02] transition-transform"
                    >
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-black text-slate-900 uppercase tracking-wide text-lg mb-2">Chat no Site</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Instale nosso widget de chat ao vivo e atenda os visitantes do seu site diretamente no painel.</p>
                        </div>
                    </motion.div>

                    {/* Telegram */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-6 text-center md:text-left hover:scale-[1.02] transition-transform"
                    >
                        <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                        <div>
                            <h3 className="font-black text-slate-900 uppercase tracking-wide text-lg mb-2">Telegram</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">Configure seu bot do Telegram e centralize mais esse canal de atendimento.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
