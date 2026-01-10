import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { HeroIllustration } from '../HeroIllustration';

export const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 md:py-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Ecossistema Unificando
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                        Organize o atendimento. <span className="block text-indigo-600">Evolua com responsabilidade.</span> <span className="block text-slate-400">Construa autoridade.</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                        Centralizamos seu atendimento no WhatsApp, instagram e site, automatizamos processos com critério e criamos sua vitrine profissional na web. A estrutura certa para o seu negócio crescer sem bagunça.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(ROUTES.PLANS)}
                            className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-[0.2em]"
                        >
                            Simular minha solução
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(ROUTES.SOLUTIONS)}
                            className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-50 transition-all uppercase tracking-[0.2em]"
                        >
                            Conhecer as soluções
                        </motion.button>
                    </div>

                    <div className="text-sm">
                        <span className="opacity-80 font-medium text-slate-500">Já é cliente?  <a href="https://painel.unificando.com.br" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">Acesse o portal de atendimento</a></span>
                    </div>
                </motion.div>

                <motion.div
                    className="relative hidden md:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <HeroIllustration />
                </motion.div>
            </div>
        </section>
    );
};
