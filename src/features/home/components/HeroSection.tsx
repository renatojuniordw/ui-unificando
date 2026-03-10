import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HeroIllustration } from "../HeroIllustration";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8">
            RESULTADOS REAIS COM INTELIGÊNCIA ARTIFICIAL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 uppercase tracking-tighter">
            Transforme seu WhatsApp em um{" "}
            <span className="block text-indigo-600 italic">
              Ativo de Escala.
            </span>{" "}
            <span className="block text-slate-400">Sem caos, sem falhas.</span>
          </h1>
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 max-w-xl">
            Atendimento via WhatsApp, IA e Presença Digital para pequenas e
            médias empresas
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
            Centralizamos seu atendimento, automatizamos com IA e construímos
            sua presença no Google — tudo integrado, sem bagunça.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
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

          <div className="text-sm">
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

        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
};
