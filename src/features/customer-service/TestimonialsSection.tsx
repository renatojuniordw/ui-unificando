import React from 'react';
import { motion } from 'framer-motion';

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-yellow-400"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

export const TestimonialsSection = () => {
    const listTestimonials = [
        {
            name: "Dayse Santana",
            company: "Yoko Brazil Store",
            text: "Antes eu esquecia mensagens no direct. Agora respondo tudo no mesmo painel."
        },
        {
            name: "Maria Clara Santos",
            company: "Advogada Previdenciária",
            text: "Antes era uma bagunça responder clientes em vários números. Com a Unificando, o atendimento ficou rápido e organizado."
        },
        {
            name: "Lucas Andrade",
            company: "Auto Peças Andrade",
            text: "WhatsApp da loja, Instagram e vendas tudo no mesmo lugar. Hoje ninguém mais perde mensagem."
        },
        {
            name: "Carlos Henrique",
            company: "CH Elétrica",
            text: "Atendimento ficou profissional de verdade. Até meus clientes comentaram a diferença."
        },
        {
            name: "Rafael Nogueira",
            company: "RN Telecom",
            text: "Equipe inteira usando, histórico salvo e zero confusão. Foi um divisor de águas."
        },
        {
            name: "Eduardo Farias",
            company: "Oficina Farias",
            text: "Centralizou tudo que a gente precisava. Simples, prático e funciona."
        },
    ];

    return (
        <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter text-center">Parceiros que confiam</h2>
                <div className="relative w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">

                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        }}
                    >    {[...listTestimonials, ...listTestimonials].map((testimonial, index) => (
                        <div key={index} className="w-[350px] md:w-[450px] bg-slate-800/50 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm flex-shrink-0">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} />)}
                            </div>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">"{testimonial.text}"</p>
                            <div>
                                <div className="font-bold text-white uppercase tracking-wider text-xs">{testimonial.name}</div>
                                <div className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-1">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
