import React from "react";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";

interface InvestmentSummaryProps {
  setup: number;
  monthly: number;
  onContract: () => void;
}

export const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({
  setup,
  monthly,
  onContract,
}) => {
  return (
    <section className="pt-24 pb-8 bg-white sticky top-0 z-30 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left flex-1">
            <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              Investimento Estimado
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
              <div>
                <span className="block text-slate-500 text-[11px] font-black uppercase tracking-widest mb-2">
                  Configuração e Implementação
                </span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  R$ {setup.toLocaleString("pt-BR")}
                </span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10"></div>
              <div>
                <span className="block text-slate-500 text-[11px] font-black uppercase tracking-widest mb-2">
                  Mensalidade Total
                </span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-indigo-400">
                  R$ {monthly.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <button
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "plans_sticky_summary",
                  to: CTA.primary.to,
                });
                onContract();
              }}
              className="w-full md:w-auto bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:bg-slate-100 transition-all shadow-xl"
            >
              {CTA.primary.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
