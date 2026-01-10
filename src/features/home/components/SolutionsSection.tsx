import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const SolutionsSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Nossas Soluções</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">O que fazemos</h2>
                    <p className="text-slate-500 font-medium max-w-xl mx-auto">Contrate de forma modular ou completa. Cada solução funciona sozinha — juntas, formam um ecossistema.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Atendimento */}
                    <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
                        <div className="absolute -top-3 left-10 bg-indigo-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Atendimento</div>
                        <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Organização</h3>
                        <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Centralize todos os canais em um único painel profissional. Tenha controle, histórico e atendimento em equipe.</p>
                        <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                            Simular atendimento
                        </button>
                    </motion.div>

                    {/* Processos */}
                    <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
                        <div className="absolute -top-3 left-10 bg-indigo-400 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Processos</div>
                        <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Evolução</h3>
                        <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Automatizamos o que faz sentido e implementamos IA com responsabilidade, sem perder o toque humano.</p>
                        <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                            Simular com IA
                        </button>
                    </motion.div>

                    {/* Vitrine */}
                    <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
                        <div className="absolute -top-3 left-10 bg-slate-900 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Vitrine</div>
                        <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Presença</h3>
                        <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Construímos sua casa própria na internet para que sua empresa seja encontrada, respeitada e lembrada.</p>
                        <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                            Simular site
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
