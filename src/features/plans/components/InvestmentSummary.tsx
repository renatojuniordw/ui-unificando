import React from "react";

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
    <section className="pt-20 pb-5 bg-white sticky top-0 z-30 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <span className="text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-2 block">
              Investimento Estimado
            </span>
            <div className="flex items-end gap-6 justify-center md:justify-start">
              <div>
                <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Setup Único
                </span>
                <span className="text-3xl md:text-4xl font-black tracking-tighter">
                  R$ {setup.toLocaleString("pt-BR")}
                </span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  Mensalidade
                </span>
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-indigo-400">
                  R$ {monthly.toLocaleString("pt-BR")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex gap-4 w-full md:w-auto">
            <button
              onClick={onContract}
              className="flex-1 md:flex-none bg-white text-slate-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-50 transition-all"
            >
              Contratar este Plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
