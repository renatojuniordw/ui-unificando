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
        Site & Landing Page
      </h3>
      <p className="text-xs text-slate-500 font-medium mb-8">
        Sua casa própria na internet.
      </p>

      {siteEnabled && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
              <span>Total de Páginas</span>
              <span>{sitePages}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={sitePages}
              onChange={(event) => setSitePages(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              1 = Landing Page única. 2+ = Páginas internas.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-xs uppercase text-slate-700">
                Configuração e Implementação
              </span>
              <span className="font-black text-slate-900">
                R${" "}
                {PRICING.site.landing.setup +
                  (sitePages > 1 ? sitePages - 1 : 0) *
                    (PRICING.site.landing.setup *
                      PRICING.site.extraPage.setupPercentage)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xs uppercase text-slate-400">
                Mensal
              </span>
              <span className="font-black text-slate-400">R$ 0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
