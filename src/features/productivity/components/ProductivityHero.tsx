import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { WhatsAppSimulation } from '../WhatsAppSimulation';

export const ProductivityHero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">🤖 Automação com IA</div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                        Comece simples. <br /> <span className="text-indigo-600">Evolua quando fizer sentido.</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                        A automação com IA do Unificando foi pensada pra não complicar. Você começa com o básico funcionando bem e adiciona recursos conforme a necessidade.
                    </p>
                    <div className="flex flex-col gap-4">
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Mais escala.
                            </li>
                            <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Mais produtividade.
                            </li>
                            <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Sem aumentar equipe ou custos fixos.
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate(ROUTES.CONTACT)}
                                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-widest"
                            >
                                Falar com Especialista
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="relative hidden md:block">
                    <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl h-[500px] border border-slate-800">
                        <WhatsAppSimulation />
                    </div>
                </div>
            </div>
        </section>
    );
};
