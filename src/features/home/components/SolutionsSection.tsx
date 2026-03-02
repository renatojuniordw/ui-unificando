import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const SolutionsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            O que fazemos
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Contrate de forma modular ou completa. Cada solução funciona sozinha
            — juntas, formam um ecossistema sólido para seu crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Atendimento */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-indigo-600 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Atendimento Unificado
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Organização
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Centralize todos os canais em um único painel profissional. Tenha
              controle total do histórico e escale seu atendimento em equipe.
            </p>
            <button
              onClick={() => navigate(ROUTES.PLANS)}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              Simular atendimento <span>→</span>
            </button>
          </motion.div>

          {/* Processos */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-indigo-400 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              IA no Atendimento
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Evolução
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Automatizamos o que faz sentido e implementamos IA com
              responsabilidade, transformando conversas em dados estratégicos.
            </p>
            <button
              onClick={() => navigate(ROUTES.PLANS)}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              Simular com IA <span>→</span>
            </button>
          </motion.div>

          {/* Vitrine */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-slate-900 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Sites & Presença Online
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Presença
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Construímos sua 'casa própria' na internet para que sua empresa
              seja encontrada no Google, respeitada e lembrada pelos clientes.
            </p>
            <button
              onClick={() => navigate(ROUTES.PLANS)}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              Simular site <span>→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
