import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const JourneySection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white text-center relative overflow-hidden border-b-2 border-white/10">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(#ccff00 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <h2 className="text-4xl md:text-6xl font-black mb-20 uppercase tracking-tighter leading-[0.9] text-[#ccff00]">
          DO CONCEITO<br/>AO PRODUTO
        </h2>

        <div className="grid md:grid-cols-3 gap-0 mb-16 text-left border-2 border-white/20">
          <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white/20 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              01 • PROTOTIPAGEM
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Entendemos o problema, desenhamos a solução e criamos um protótipo funcional em ciclos curtos.
            </p>
          </div>
          <div className="p-10 border-b-2 md:border-b-0 md:border-r-2 border-white/20 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              02 • VALIDAÇÃO
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Testamos com usuários reais, iteramos com base em feedback e ajustamos o escopo.
            </p>
          </div>
          <div className="p-10 bg-slate-950 hover:bg-white/5 transition-colors">
            <span className="text-[#ccff00] font-black block mb-6 tracking-widest text-xs border border-[#ccff00] inline-block px-2 py-1">
              03 • DEPLOY
            </span>
            <p className="text-base font-medium text-white leading-relaxed font-mono">
              Colocamos no ar com infraestrutura profissional, monitoramento e suporte contínuo.
            </p>
          </div>
        </div>

        <p className="text-white font-bold mb-12 max-w-lg mx-auto text-[11px] uppercase tracking-[0.2em] leading-loose">
          Projetos autorais, produtos utilitários ou sistemas sob medida — o processo é o mesmo.
        </p>

        <button
          onClick={() => navigate(ROUTES.CONTACT)}
          className="bg-[#ccff00] text-slate-950 px-10 py-5 text-sm md:text-base font-black hover:bg-white transition-all uppercase tracking-[0.2em] shadow-[6px_6px_0px_#fff]"
          style={{ borderRadius: "0px" }}
        >
          Vamos construir algo?
        </button>
      </div>
    </section>
  );
};
