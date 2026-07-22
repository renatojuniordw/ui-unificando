import React from "react";

export const PartnerTech: React.FC = () => {
  const techs = [
    { name: "WhatsApp", logo: "💬" },
    { name: "Instagram", logo: "📸" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Google", logo: "🌐" },
  ];

  return (
    <section className="py-6 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-950 text-center mb-10 bg-[#ccff00] inline-block px-3 py-1 mx-auto block w-max border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
          PODER DE FOGO INTEGRADO
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 transition-all duration-500">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl opacity-50 hover:opacity-100 transition-opacity">{tech.logo}</span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-950">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
