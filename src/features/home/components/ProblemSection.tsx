import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 text-center text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O Problema</span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
                        O digital não deveria ser um caos.
                    </h2>
                    <p className="text-lg text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
                        Perda de mensagens, demora no atendimento e ausência no Google não são falta de esforço — são falta de estrutura. O método Unificando resolve a base do seu negócio.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6 text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { t: "Desorganização", d: "Mensagens espalhadas, histórico perdido e ninguém sabe quem respondeu o quê.", icon: "✕" },
                        { t: "Esforço Repetitivo", d: "Sua equipe gastando tempo com tarefas que poderiam ser automatizadas com segurança.", icon: "↻" },
                        { t: "Invisibilidade", d: "Enquanto seu concorrente aparece no Google, seu negócio não tem presença própria.", icon: "∅" }
                    ].map((item, i) => (
                        <motion.div key={i} variants={itemVariants} className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm group hover:border-indigo-400 transition-all">
                            <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-black text-slate-900 mb-3 text-[10px] uppercase tracking-[0.2em]">{item.t}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.d}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
