import React from "react";
import { PRICING } from "../../../constants/pricing";

interface SiteModuleProps {
  siteEnabled: boolean;
  setSiteEnabled: (value: boolean) => void;
  sitePages: number;
  setSitePages: (value: number) => void;
}

export const SiteModule: React.FC<SiteModuleProps> = ({
  siteEnabled,
  setSiteEnabled,
  sitePages,
  setSitePages,
}) => {
  return (
    <div
      className={`rounded-[2.5rem] p-8 border-2 transition-all ${
        siteEnabled
          ? "bg-slate-50 border-indigo-600"
          : "bg-white border-slate-200 opacity-60 grayscale"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
          🌐
        </div>
        <button
          onClick={() => setSiteEnabled(!siteEnabled)}
          className={`w-12 h-7 rounded-full transition-all relative ${
            siteEnabled ? "bg-indigo-600" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${
              siteEnabled ? "right-1" : "left-1"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">
        Sites & Presença Online
      </h3>
      <p className="text-xs text-slate-500 font-medium mb-8">
        Sua casa própria na internet.
      </p>

      {siteEnabled && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-900 mb-4">
              <span>Total de Páginas</span>
              <span className="text-xl text-indigo-600 leading-none">
                {sitePages}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={sitePages}
              onChange={(event) => setSitePages(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-[11px] text-slate-400 mt-3 font-bold uppercase tracking-wide leading-relaxed">
              1 = Landing Page única. <br />
              2+ = Páginas internas e institucionais.
            </p>
          </div>

          <div className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Configuração inicial
              </span>
              <div className="flex justify-between items-start gap-4">
                <span className="text-xs font-black uppercase text-slate-900 leading-tight flex-1">
                  Design e <br /> Implementação
                </span>
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
                  R${" "}
                  {(
                    PRICING.site.landing.setup +
                    (sitePages > 1 ? sitePages - 1 : 0) *
                      (PRICING.site.landing.setup *
                        PRICING.site.extraPage.setupPercentage)
                  ).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                Mensalidade
              </span>
              <span className="text-sm font-black text-slate-200 tracking-tighter">
                R$ 0,00
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
