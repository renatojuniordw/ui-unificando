import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

export const CtaLawSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              Seu escritório de advocacia <br className="hidden md:block"/> merece uma operação de alto nível.
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Agende uma demonstração gratuita e veja como organizamos seu Whatsapp, sua triagem e sua presença online em poucos dias.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackCtaClick({
                  label: "AGENDAR DEMONSTRAÇÃO AGORA",
                  location: "law_cta_footer",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.15em] shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all"
            >
              AGENDAR DEMONSTRAÇÃO AGORA
            </motion.button>
            <p className="text-indigo-200 mt-6 text-xs uppercase tracking-widest font-bold">
              Sem compromisso. Fale com um especialista.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
