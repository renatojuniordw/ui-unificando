import React from "react";
import { PRICING } from "../../../constants/pricing";

export const PlansHeader: React.FC = () => {
  return (
    <section className="py-8 md:py-20 bg-[#ccff00] border-b-4 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-block bg-white text-slate-950 border-2 border-slate-950 px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 shadow-[3px_3px_0px_#000]">
          Estrutura de Serviços
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-950 mb-4 md:mb-6 uppercase tracking-tighter leading-[0.95]">
          Tudo que construímos <br />
          também está <span className="text-white bg-slate-950 px-2 inline-block rotate-1 border-[3px] md:border-4 border-slate-950 shadow-[4px_4px_0px_#fff] md:shadow-[6px_6px_0px_#fff]">disponível.</span>
        </h1>
        <p className="text-base md:text-xl text-slate-900 font-bold tracking-tight mb-8 md:mb-12 max-w-3xl mx-auto leading-tight">
          Serviços sob consultoria. Tudo que construímos também pode ser aplicado ao seu negócio.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mt-6 md:mt-8">
          {/* Card Entrada */}
          <div className="bg-white p-5 md:p-6 border-[3px] md:border-4 border-slate-950 shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] text-left relative hover:-translate-y-1 transition-transform">
            <span className="bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-[8px] md:text-[9px] px-2 py-0.5 md:py-1 absolute -top-3 left-4 md:left-6 border-2 border-slate-950 shadow-[2px_2px_0px_#ccff00]">
              Plano de Entrada
            </span>
            <div className="text-slate-950 text-xl md:text-2xl font-black leading-[0.9] mt-1 md:mt-2 uppercase tracking-tighter">
              A partir de <br />
              <span className="text-3xl md:text-5xl text-slate-950 mt-1 block tracking-tighter">
                R$ {PRICING.atendimento.base.monthly.toLocaleString("pt-BR")}/mês
              </span>
            </div>
            <div className="mt-3 inline-block bg-[#ccff00] border-2 border-slate-950 px-2 py-0.5 shadow-[2px_2px_0px_#000]">
              <span className="text-slate-950 text-[9px] font-black uppercase tracking-widest">
                + Setup de R$ {PRICING.atendimento.base.setup.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>

          {/* Card Personalizado */}
          <div className="bg-slate-950 p-5 md:p-6 border-[3px] md:border-4 border-slate-950 shadow-[4px_4px_0px_#fff] md:shadow-[6px_6px_0px_#fff] text-left relative group hover:bg-white hover:text-slate-950 transition-colors hover:shadow-[4px_4px_0px_#000]">
            <span className="bg-[#ccff00] text-slate-950 font-black uppercase tracking-widest text-[8px] md:text-[9px] px-2 py-0.5 md:py-1 absolute -top-3 left-4 md:left-6 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
              Personalização Total
            </span>
            <p className="text-white group-hover:text-slate-950 text-2xl md:text-3xl font-black leading-[0.9] mt-1 md:mt-2 uppercase tracking-tighter transition-colors">
              Precisa de mais?
            </p>
            <p className="mt-3 text-[11px] md:text-sm text-slate-400 group-hover:text-slate-900 font-bold leading-tight transition-colors">
              Configuramos tudo conforme a sua realidade. <br />
              <span className="block mt-3 inline-block bg-[#ccff00] text-slate-950 border-2 border-slate-950 px-2 py-0.5 group-hover:bg-slate-950 group-hover:text-[#ccff00] uppercase tracking-widest text-[8px] md:text-[9px] shadow-[2px_2px_0px_#000] font-black">
                MODULAR E ESCALÁVEL.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>


  );
};
