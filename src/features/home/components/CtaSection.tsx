import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const CtaSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                    <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none text-slate-900">Pronto para evoluir <span className="text-indigo-600 italic">sem bagunça?</span></h2>
                    <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto font-medium">Estrutura sólida, preço transparente e soluções sob medida.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(ROUTES.PLANS)}
                            className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-[10px] font-black shadow-2xl uppercase tracking-[0.2em] hover:bg-slate-800"
                        >
                            Simular agora
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(ROUTES.CONTACT)}
                            className="bg-white border border-slate-200 text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black shadow-sm uppercase tracking-[0.2em] hover:bg-slate-50"
                        >
                            Agendar diagnóstico
                        </motion.button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
