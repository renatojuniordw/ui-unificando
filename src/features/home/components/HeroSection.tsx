import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8">
            RESULTADOS REAIS COM INTELIGÊNCIA ARTIFICIAL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 uppercase tracking-tighter">
            Transforme seu WhatsApp em um{" "}
            <span className="block text-indigo-600 italic mt-2">
              Ativo de Escala.
            </span>{" "}
            <span className="block text-slate-400 mt-2">Sem caos, sem falhas.</span>
          </h1>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 mx-auto max-w-xl">
            Atendimento via WhatsApp, IA e Presença Digital para pequenas e
            médias empresas
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Centralizamos seu atendimento, automatizamos com IA e construímos
            sua presença no Google — tudo integrado, sem bagunça.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "home_hero_primary",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="bg-slate-900 text-white px-8 lg:px-10 py-5 rounded-2xl text-xs font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-[0.15em]"
            >
              {CTA.primary.label}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                trackCtaClick({
                  label: CTA.solutions.label,
                  location: "home_hero_secondary",
                  to: CTA.solutions.to,
                });
                navigate(CTA.solutions.to);
              }}
              className="bg-white text-slate-900 border border-slate-200 px-8 lg:px-10 py-5 rounded-2xl text-xs font-black hover:bg-slate-50 transition-all uppercase tracking-[0.15em] shadow-sm"
            >
              {CTA.solutions.label}
            </motion.button>
          </div>

          <div className="text-sm border-t border-slate-100 pt-8 mt-12">
            <span className="opacity-80 font-medium text-slate-500">
              Já é cliente?{" "}
              <a
                href="https://painel.unificando.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-bold hover:underline"
              >
                Acesse o portal de atendimento
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
