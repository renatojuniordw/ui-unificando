import React from "react";
import { motion } from "framer-motion";
import { HOME_CAPABILITIES } from "../../../data/capabilities";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-100 border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block border border-slate-950 px-3 py-1 text-[10px] font-mono tracking-[0.3em] uppercase mb-6 bg-[#ccff00]">
            NOSSO TRABALHO
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
            Transformamos ideias em <span className="text-[#ccff00] bg-slate-950 px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">produtos digitais</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-slate-950">
          {HOME_CAPABILITIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 md:p-12 bg-white ${index !== 2 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''} border-slate-950 hover:bg-slate-950 hover:text-white transition-colors duration-300 group`}
            >
              <div className="text-4xl mb-8">{item.icon}</div>
              <h3 className="font-black mb-4 text-sm uppercase tracking-[0.2em] group-hover:text-[#ccff00] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed font-mono opacity-80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
