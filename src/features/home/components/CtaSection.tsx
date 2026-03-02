import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-[1.1] text-slate-900">
            Pronto para evoluir <br />
            <span className="text-indigo-600 italic">sem bagunça?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mb-14 max-w-xl mx-auto font-medium">
            Estrutura sólida, preço transparente e soluções sob medida para sua
            empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.PLANS)}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-xs font-black shadow-2xl shadow-slate-200 uppercase tracking-[0.2em] hover:bg-slate-800 transition-all font-outfit"
            >
              Simular agora
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(ROUTES.CONTACT)}
              className="bg-white border border-slate-200 text-slate-900 px-12 py-5 rounded-2xl text-xs font-black shadow-sm uppercase tracking-[0.2em] hover:bg-slate-50 transition-all"
            >
              Agendar diagnóstico
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
