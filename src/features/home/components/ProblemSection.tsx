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

type ProblemSectionProps = {
  selectedSegment: string | null;
  onSelectSegment: (segment: string) => void;
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  selectedSegment,
  onSelectSegment,
}) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            O Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
            O digital não deveria ser um caos.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Perda de mensagens, demora no atendimento e ausência no Google não
            são falta de esforço — são falta de estrutura. O método Unificando
            resolve a base do seu negócio.
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
              title: "Desorganização",
              description:
                "Mensagens espalhadas, histórico perdido e ninguém sabe quem respondeu o quê.",
              icon: "✕",
            },
            {
              title: "Esforço Repetitivo",
              description:
                "Sua equipe gastando tempo com tarefas que poderiam ser automatizadas com segurança.",
              icon: "↻",
            },
            {
              title: "Invisibilidade",
              description:
                "Enquanto seu concorrente aparece no Google, seu negócio não tem presença própria.",
              icon: "∅",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm group hover:border-indigo-400 transition-all text-left"
            >
              <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl transition-colors">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-slate-200 text-center"
        >
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-8">
            Soluções Validadas Para:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Imobiliárias",
              "Clínicas & Saúde",
              "Serviços de Tecnologia",
              "E-commerce",
              "Educação",
              "Consultorias",
            ].map((niche) => (
              <button
                key={niche}
                type="button"
                onClick={() => onSelectSegment(niche)}
                aria-pressed={selectedSegment === niche}
                className={[
                  "px-5 py-2.5 rounded-xl border text-xs font-bold shadow-sm transition-colors",
                  selectedSegment === niche
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-indigo-200",
                ].join(" ")}
              >
                {niche}
              </button>
            ))}
          </div>
          {selectedSegment ? (
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Mostrando aplicação para:{" "}
              <span className="text-slate-600">{selectedSegment}</span> (clique
              novamente para limpar)
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};
