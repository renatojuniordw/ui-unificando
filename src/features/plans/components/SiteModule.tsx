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
      className={`p-8 border-4 border-slate-950 transition-all ${
        siteEnabled
          ? "bg-[#ccff00] shadow-[8px_8px_0px_#000]"
          : "bg-white opacity-90 shadow-none border-dashed"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] border-2 border-slate-950">
          🌐
        </div>
        <button
          onClick={() => setSiteEnabled(!siteEnabled)}
          className={`w-14 h-8 border-2 border-slate-950 transition-all relative ${
            siteEnabled ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 border-2 border-slate-950 transition-all ${
              siteEnabled ? "right-1 bg-[#ccff00]" : "left-1 bg-slate-300"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-950 mb-2 leading-none">
        SITES & <br/> PRESENÇA ON
      </h3>
      <p className="text-sm font-mono font-bold text-slate-950 mb-8 uppercase">
        Sua propriedade e vitrine na internet.
      </p>

      {siteEnabled && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-950 mb-4 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Total de Páginas</span>
              <span className="text-xl text-slate-950 leading-none">
                {sitePages}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={sitePages}
              onChange={(event) => setSitePages(parseInt(event.target.value))}
              className="w-full h-4 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
            <p className="text-[10px] text-slate-950 mt-3 font-black uppercase tracking-widest leading-relaxed bg-white/50 p-2 border-2 border-slate-950">
              1 = Landing Page única focada em conversão. <br />
              2+ = Múltiplas páginas para sites institucionais.
            </p>
          </div>

          <div className="p-6 bg-white border-4 border-slate-950 shadow-[4px_4px_0px_#000] space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-950 text-[#ccff00] inline-block px-2 py-1 border-2 border-slate-950 w-max shadow-[2px_2px_0px_#ccff00]">
                SETUP INICIAL
              </span>
              <div className="flex justify-between items-start gap-4 mt-2">
                <span className="text-xs font-black uppercase text-slate-950 leading-tight flex-1">
                  Design e <br /> Implementação
                </span>
                <span className="text-xl md:text-2xl font-black text-slate-950 tracking-tighter whitespace-nowrap bg-[#ccff00] px-2 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
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

            <div className="pt-4 border-t-4 border-slate-950 flex justify-between items-center mt-4">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                MENSALIDADE
              </span>
              <span className="text-lg font-black text-slate-400 tracking-tighter line-through">
                R$ 0,00
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
