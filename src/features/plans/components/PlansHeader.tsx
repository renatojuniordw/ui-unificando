import React from "react";
import { PRICING } from "../../../constants/pricing";

export const PlansHeader: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
          Planos Unificando
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 uppercase tracking-[0.05em] tracking-tighter leading-[1.05]">
          Monte a solução ideal <br /> para o seu negócio.
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
          Monte o seu ecossistema sob medida. Você escolhe os canais, o tamanho
          da equipe e se deseja usar Inteligência Artificial em cada canal.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm text-left">
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Plano de Entrada
            </span>
            <div className="text-slate-900 text-2xl font-black leading-tight">
              A partir de{" "}
              <span className="text-3xl text-indigo-600">
                R$ {PRICING.atendimento.base.monthly.toLocaleString("pt-BR")}
                /mês
              </span>{" "}
              <br />
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest leading-loose">
                + configuração única de R${" "}
                {PRICING.atendimento.base.setup.toLocaleString("pt-BR")}
              </span>
            </div>
            <p className="mt-6 text-sm text-slate-500 font-medium leading-relaxed">
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

          <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl shadow-indigo-100 text-left text-white">
            <span className="text-white/60 font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Personalização Total
            </span>
            <p className="text-white text-2xl font-black leading-tight">
              Precisa de mais atendentes, canais ou IA?
            </p>
            <p className="mt-6 text-sm text-white/80 font-medium leading-relaxed">
              Montamos seu plano em cima da realidade do seu negócio. <br />
              <span className="block mt-2 font-black text-white italic underline underline-offset-4">
                Tudo modular, sem pacotes engessados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
