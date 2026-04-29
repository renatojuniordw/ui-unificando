import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const ProblemLawSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b-8 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
            O DIAGNÓSTICO DO CAOS
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.9]">
            O WHATSAPP NÃO PODE <br/>
            <span className="bg-red-600 text-white px-2 inline-block -rotate-1 border-4 border-slate-950">MATAR O SEU ESCRITÓRIO.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-950 max-w-3xl font-mono font-bold uppercase leading-tight">
            Escritórios de advocacia perdem até 40% das oportunidades porque demoram a responder. Se o seu cliente não recebe suporte imediato, ele vai para o Google procurar seu concorrente.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "ATENDIMENTO CAÓTICO",
              description:
                "Celular do escritório passando de mão em mão. Você nunca sabe se o cliente foi respondido corretamente ou totalmente ignorado.",
              icon: "✕",
            },
            {
              title: "TRIAGEM INEXISTENTE",
              description:
                "Sua equipe de especialistas perde tempo coletando documentação básica e fazendo perguntas repetitivas que uma IA já deveria ter resolvido.",
              icon: "↻",
            },
            {
              title: "FALTA DE POSICIONAMENTO",
              description:
                "Tentar prospectar clientes de alto ticket com um atendimento amador via WhatsApp pessoal destrói sua autoridade instantaneamente.",
              icon: "∅",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-[#ccff00] transition-all group flex flex-col"
            >
              <div className="w-16 h-16 bg-slate-950 text-white border-4 border-slate-950 flex items-center justify-center mb-8 font-black text-3xl shadow-[4px_4px_0px_#ccff00] group-hover:shadow-[4px_4px_0px_#000]">
                {item.icon}
              </div>
              <h3 className="font-black text-slate-950 mb-4 text-2xl uppercase tracking-tighter leading-none">
                {item.title}
              </h3>
              <p className="text-slate-950 text-sm leading-relaxed font-mono font-bold uppercase bg-slate-50 p-4 border-2 border-slate-950 group-hover:bg-white transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
