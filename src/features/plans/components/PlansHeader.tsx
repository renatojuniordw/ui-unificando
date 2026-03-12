import React from "react";
import { PRICING } from "../../../constants/pricing";

export const PlansHeader: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#ccff00] border-b-4 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-block bg-white text-slate-950 border-2 border-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_#000]">
          PLANOS UNIFICANDO
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.9]">
          A SOLUÇÃO IDEAL <br />
          PARA O SEU <span className="text-white bg-slate-950 px-2 inline-block rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#fff]">NEGÓCIO.</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-950 font-black uppercase tracking-tight mb-16 max-w-4xl mx-auto">
          MONTE O SEU ECOSSISTEMA SOB MEDIDA. ESCOLHA CANAIS, EQUIPES E INTELIGÊNCIA ARTIFICIAL.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          <div className="bg-white p-8 border-4 border-slate-950 shadow-[8px_8px_0px_#000] text-left relative hover:-translate-y-2 transition-transform">
            <span className="bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-[10px] px-2 py-1 absolute -top-4 left-8 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
              PLANO DE ENTRADA
            </span>
            <div className="text-slate-950 text-3xl font-black leading-[0.9] mt-4 uppercase tracking-tighter">
              A PARTIR DE <br />
              <span className="text-5xl md:text-6xl text-slate-950 mt-2 block">
                R$ {PRICING.atendimento.base.monthly.toLocaleString("pt-BR")}/MÊS
              </span>
            </div>
            <div className="mt-4 inline-block bg-[#ccff00] border-2 border-slate-950 px-3 py-1 shadow-[2px_2px_0px_#000]">
              <span className="text-slate-950 text-xs font-black uppercase tracking-widest">
                + SETUP DE R$ {PRICING.atendimento.base.setup.toLocaleString("pt-BR")}
              </span>
            </div>
            <p className="mt-8 text-base text-slate-950 font-mono font-bold leading-relaxed">
              Centralize{" "}
              {PRICING.atendimento.base.includes.inboxes
                .toString()
                .padStart(2, "0")}{" "}
              canal (WhatsApp ou Instagram) e{" "}
              {PRICING.atendimento.base.includes.attendants
                .toString()
                .padStart(2, "0")}{" "}
              atendente no ecossistema Unificando.
            </p>
          </div>

          <div className="bg-slate-950 p-8 border-4 border-slate-950 shadow-[8px_8px_0px_#fff] text-left relative group hover:bg-white hover:text-slate-950 transition-colors hover:shadow-[8px_8px_0px_#000]">
            <span className="bg-[#ccff00] text-slate-950 font-black uppercase tracking-widest text-[10px] px-2 py-1 absolute -top-4 left-8 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              PERSONALIZAÇÃO TOTAL
            </span>
            <p className="text-white group-hover:text-slate-950 text-4xl font-black leading-[0.9] mt-4 uppercase tracking-tighter transition-colors">
              PRECISA DE MAIS ATENDENTES, CANAIS OU IA?
            </p>
            <p className="mt-8 text-base text-slate-300 group-hover:text-slate-900 font-mono font-bold leading-relaxed transition-colors">
              Montamos seu plano em cima da realidade do seu negócio. <br />
              <span className="block mt-6 inline-block bg-[#ccff00] text-slate-950 border-2 border-slate-950 px-2 py-1 group-hover:bg-slate-950 group-hover:text-[#ccff00] uppercase tracking-widest text-[10px] shadow-[2px_2px_0px_#000] font-black">
                MODULAR SEM ENGESSAMENTO.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
