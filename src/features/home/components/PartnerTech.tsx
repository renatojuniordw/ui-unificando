import React from "react";
import { motion } from "framer-motion";

export const PartnerTech: React.FC = () => {
  const techs = [
    { name: "WhatsApp", logo: "💬" },
    { name: "Instagram", logo: "📸" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Google", logo: "🌐" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 text-center mb-10">
          Estrutura Construída com o que Há de Melhor no Mercado
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl">{tech.logo}</span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-600">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
