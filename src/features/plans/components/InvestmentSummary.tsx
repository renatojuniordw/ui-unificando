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

    <>
      {/* Desktop Sticky Bar */}
      <section className="hidden md:block py-2 bg-white sticky top-[68px] z-30 border-b-4 border-slate-950 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#ccff00] text-slate-950 border-[3px] border-slate-950 p-2 md:p-3 flex flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_#000] relative">
            
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar py-1">
              <span className="hidden md:inline-block bg-slate-950 text-white font-black uppercase tracking-widest text-[9px] px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#fff] shrink-0">
                Total
              </span>
              
              <div className="flex items-center gap-4 md:gap-8 whitespace-nowrap">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 leading-none">Setup</span>
                  <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-950">
                    R$ {setup.toLocaleString("pt-BR")}
                  </span>
                </div>
                
                <div className="h-8 w-[2px] bg-slate-950/20"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 leading-none">Mensal</span>
                  <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-950">
                    R$ {monthly.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => {
                  trackCtaClick({
                    label: CTA.primary.label,
                    location: "plans_sticky_summary",
                    to: CTA.primary.to,
                  });
                  onContract();
                }}
                className="bg-slate-950 text-[#ccff00] px-4 md:px-6 py-2.5 md:py-3 font-black uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-slate-800 transition-colors border-2 border-slate-950 shadow-[3px_3px_0px_#000]"
              >
                Fechar Pacote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Bar - Top Position */}
      <div className="md:hidden sticky top-[80px] left-0 right-0 z-[40] p-4 bg-white/80 backdrop-blur-sm border-b-2 border-slate-950/10">
        <div className="bg-[#ccff00] border-[3px] border-slate-950 p-3 shadow-[4px_4px_0px_#000] relative">
          <div className="absolute -top-3 left-4 bg-slate-950 text-white text-[7px] font-black uppercase px-2 py-0.5 tracking-[0.2em] border border-slate-950">
            Total Estimado
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase text-slate-600 leading-none mb-1">Setup</span>
                <span key={`setup-${setup}`} className="text-base font-black tracking-tighter shrink-0 animate-in fade-in zoom-in duration-300">
                  R$ {setup.toLocaleString("pt-BR")}
                </span>
              </div>
              <div className="w-[1.5px] bg-slate-950/20"></div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black uppercase text-slate-600 leading-none mb-1">Mensal</span>
                <span key={`monthly-${monthly}`} className="text-base font-black tracking-tighter shrink-0 animate-in fade-in zoom-in duration-300">
                  R$ {monthly.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
            <button
              onClick={onContract}
              className="bg-slate-950 text-[#ccff00] px-4 py-2 border-2 border-slate-950 font-black uppercase text-[10px] tracking-widest shadow-[2px_2px_0px_#fff]"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>


  );
};
