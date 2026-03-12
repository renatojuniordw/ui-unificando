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
    <section className="py-24 md:py-32 bg-slate-100 text-slate-950 border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 justify-between items-start"
        >
          <div className="max-w-xl">
            <span className="inline-block border border-slate-950 px-3 py-1 text-[10px] font-mono tracking-[0.3em] uppercase mb-6 bg-[#ccff00]">
              O Problema Atual
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              O digital não<br />
              deveria ser<br />
              um caos.
            </h2>
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg font-medium leading-relaxed border-l-4 border-slate-950 pl-6">
            Perda de mensagens, demora no atendimento e ausência no Google não
            são falta de esforço. <strong>São falta de estrutura. O método Unificando resolve a base.</strong>
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-0 border-2 border-slate-950"
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
              title: "Esforço Repetido",
              description:
                "Sua equipe gastando tempo com tarefas que poderiam ser automatizadas.",
              icon: "↻",
            },
            {
              title: "Invisibilidade",
              description:
                "Enquanto seu concorrente aparece no Google, seu negócio não tem presença.",
              icon: "∅",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 md:p-12 bg-white ${index !== 2 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-slate-950 hover:bg-slate-950 hover:text-white transition-colors duration-300 group`}
            >
              <div className="text-4xl font-black mb-8 text-slate-300 group-hover:text-[#ccff00] transition-colors">{item.icon}</div>
              <h3 className="font-black mb-4 text-sm uppercase tracking-[0.2em]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-mono opacity-80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="font-bold uppercase tracking-[0.2em] text-[11px] mb-6 border-b-2 border-slate-950 inline-block pb-2">
            Soluções Validadas Para:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Imobiliárias",
              "Clínicas & Saúde",
              "Serviços TIC",
              "E-commerce",
              "Educação",
              "Consultoria",
            ].map((niche) => (
              <button
                key={niche}
                type="button"
                onClick={() => onSelectSegment(niche)}
                aria-pressed={selectedSegment === niche}
                className={[
                  "px-5 py-3 border-2 text-xs font-black uppercase tracking-widest transition-all",
                  selectedSegment === niche
                    ? "bg-slate-950 border-slate-950 text-[#ccff00] shadow-[4px_4px_0px_#ccff00]"
                    : "bg-white border-slate-950 text-slate-950 shadow-[4px_4px_0px_transparent] hover:shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:-translate-x-1",
                ].join(" ")}
              >
                {niche}
              </button>
            ))}
          </div>
          {selectedSegment ? (
            <p className="mt-8 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-white inline-block px-4 py-2 border border-slate-300">
              Foco visual para: <span className="text-slate-950">{selectedSegment}</span> <span className="text-slate-400 font-normal">(clique p/ resetar)</span>
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};
