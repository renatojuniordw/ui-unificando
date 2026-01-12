import React from "react";
import { motion, Variants } from "framer-motion";
import { PRICING } from "../../../constants/pricing";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const ServiceBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Detalhamento dos Serviços
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Entenda o que está incluso em cada módulo.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* LISTA DE SERVIÇOS (MANTIDA MAS SIMPLIFICADA VISUALMENTE) */}
          <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">
              💬 Atendimento Digital
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium text-slate-600">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span> Atendimento
                em WhatsApp, Instagram, Telegram
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span> Histórico
                completo e centralizado
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span> Gestão de
                equipe e permissões
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">
              🤖 Inteligência Artificial
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                {PRICING.ia.base.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-indigo-600 font-bold">✓</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
