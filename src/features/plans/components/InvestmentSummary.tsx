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
    <section className="pt-24 pb-8 bg-white sticky top-0 z-30 border-b-4 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#ccff00] text-slate-950 border-4 border-slate-950 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_#000] relative">

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto text-center md:text-left">
            <span className="bg-slate-950 text-white font-black uppercase tracking-widest text-[10px] px-2 py-1 border-2 border-slate-950 shrink-0 shadow-[2px_2px_0px_#fff]">
              ESTIMATIVA
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
              <div className="bg-white p-4 border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
                <span className="block text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-1">
                  CONFIGURAÇÃO (SETUP)
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                  R$ {setup.toLocaleString("pt-BR")}
                </span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-950/20"></div>
              <div className="bg-slate-950 text-white p-4 border-4 border-slate-950 shadow-[4px_4px_0px_#fff]">
                <span className="block text-[#ccff00] text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-1">
                  MENSALIDADE
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                  R$ {monthly.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-auto shrink-0 mt-4 lg:mt-0">
            <button
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "plans_sticky_summary",
                  to: CTA.primary.to,
                });
                onContract();
              }}
              className="w-full md:w-auto bg-slate-950 text-[#ccff00] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#ccff00] hover:text-slate-950 transition-colors border-4 border-slate-950 shadow-[6px_6px_0px_#000]"
            >
              FECHAR PACOTE AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
