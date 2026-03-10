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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            O Diagnóstico
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
            Você é Advogado, não Telefonista.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Escritórios de advocacia perdem até 40% das oportunidades porque demoram a responder. Se o seu cliente não recebe suporte rápido, ele vai para o Google procurar outro escritório.
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
              title: "Atendimento Caótico",
              description:
                "Celular do escritório passando de mão em mão. Você nunca sabe se o cliente foi respondido corretamente ou ignorado.",
              icon: "✕",
            },
            {
              title: "Triagem Inexistente",
              description:
                "Advogados especialistas perdendo tempo coletando documentação básica e fazendo perguntas repetitivas.",
              icon: "↻",
            },
            {
              title: "Falta de Posicionamento",
              description:
                "Prospectar clientes corporativos com atendimento amador e sem uma presença digital sólida destrói sua autoridade.",
              icon: "∅",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-sm group hover:border-indigo-400 transition-all text-left"
            >
              <div className="w-12 h-12 bg-white group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl transition-colors shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-black text-slate-900 mb-3 text-xs uppercase tracking-[0.2em]">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
