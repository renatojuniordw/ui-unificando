import React from "react";
import { motion } from "framer-motion";
import { MARKET_INSIGHTS } from "../../../constants/market-data";

export const MarketInsights: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Dados de Mercado & Autoridade
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            Por que sua empresa <br />{" "}
            <span className="text-indigo-600">precisa dessa estrutura?</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Não é sobre nós, é sobre o que o mercado exige hoje. Decisões
            baseadas em dados de instituições que lideram o comércio global.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {MARKET_INSIGHTS.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative group hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-100 transition-all duration-300"
            >
              <div className="text-indigo-600 font-black uppercase tracking-[0.15em] text-[10px] mb-6 block opacity-60">
                Pilar: {insight.pilar}
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter group-hover:text-indigo-600 transition-colors">
                  {insight.stat}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-tight leading-tight">
                {insight.title}
              </h3>

              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                {insight.description}
              </p>

              <div className="pt-6 border-t border-slate-100 mt-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Fonte: {insight.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          <div className="relative z-10">
            <h4 className="text-xl md:text-3xl font-black mb-6 uppercase tracking-tighter leading-tight">
              O ecossistema Unificando foi <br /> construído para aplicar esses
              resultados.
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Atendimento Instantâneo",
                "Estrutura Profissional",
                "Escala Sem Sobrecarga",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                  <span className="text-xs font-black uppercase tracking-widest text-white/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
