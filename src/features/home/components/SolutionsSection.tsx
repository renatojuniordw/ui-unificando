import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { PartnerTech } from "./PartnerTech";

type SolutionsSectionProps = {
  selectedSegment: string | null;
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedSegment,
}) => {
  const navigate = useNavigate();

  return (
    <section
      id="solutions"
      className="py-24 bg-white scroll-mt-24 border-b-2 border-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            CAPACIDADES
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
            O Que Sabemos
            <br />
            Fazer
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            Cada produto no ar é uma demonstração prática do que o laboratório
            sustenta de ponta a ponta.
          </p>
        </div>

        {selectedSegment ? (
          <div className="flex mb-10">
            <div className="inline-flex items-center gap-3 bg-[#ccff00] border-2 border-slate-950 text-slate-950 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_#000]">
              Segmento em Foco: <span>{selectedSegment}</span>
            </div>
          </div>
        ) : null}

        {/* 2x2 Brutalist Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-t-2 border-l-2 border-slate-950 bg-slate-950">
          {/* Module 1: IA */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                01 • Inteligência
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                IA Aplicada
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Agentes, RAG e embeddings locais resolvendo problemas reais —
                com privacidade por design e custo sob controle.
              </p>
            </div>

            <button
              onClick={() => navigate(ROUTES.LAB)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Conhecer <span>→</span>
            </button>
          </motion.div>

          {/* Module 2: Produtos */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                02 • Produto
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                Utilitários & Sistemas
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Ferramentas rápidas e gratuitas que resolvem dores específicas —
                de PDFs a buscas semânticas em dados públicos.
              </p>
            </div>

            <button
              onClick={() => navigate(ROUTES.LAB)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Conhecer <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
