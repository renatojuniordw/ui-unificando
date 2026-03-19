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
      className={`p-6 border-4 border-slate-950 transition-all ${
        siteEnabled
          ? "bg-[#ccff00] shadow-[6px_6px_0px_#000]"
          : "bg-white opacity-90 shadow-none border-dashed"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center text-xl shadow-[3px_3px_0px_#000] border-2 border-slate-950">
          🌐
        </div>
        <button
          onClick={() => setSiteEnabled(!siteEnabled)}
          className={`w-12 h-7 border-2 border-slate-950 transition-all relative ${
            siteEnabled ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-0.5 w-5 h-5 border-2 border-slate-950 transition-all ${
              siteEnabled ? "right-0.5 bg-[#ccff00]" : "left-0.5 bg-slate-300"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tighter text-slate-950 mb-1 leading-none">
        Sites & <br/> presença on
      </h3>
      <p className="text-[11px] font-bold text-slate-800 mb-6">
        Sua propriedade e vitrine na internet.
      </p>

      {!siteEnabled && (
        <div className="mt-4 p-4 bg-slate-50 border-2 border-dashed border-slate-300 text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center">
          Ative este módulo para <br/> configurar seu novo site.
        </div>
      )}

      {siteEnabled && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
          <div>
            <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest text-slate-950 mb-3 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Total de Páginas</span>
              <span className="text-lg text-slate-950 leading-none">
                {sitePages}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={sitePages}
              onChange={(event) => setSitePages(parseInt(event.target.value))}
              className="w-full h-3 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
            <div className="flex justify-between mt-1 text-[9px] font-bold text-slate-500 uppercase tracking-tighter px-1">
              <span>1 página</span>
              <span>15 páginas</span>
            </div>
            <p className="text-[10px] text-slate-950 mt-3 font-medium leading-relaxed bg-white/50 p-2 border-2 border-slate-950">
              1 = Landing Page única focada em conversão. <br />
              2+ = Múltiplas páginas para sites institucionais.
            </p>
          </div>

          <div className="p-4 bg-white border-[3px] border-slate-950 shadow-[3px_3px_0px_#000] space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-slate-950 text-[#ccff00] inline-block px-1.5 py-0.5 border-2 border-slate-950 w-max shadow-[2px_2px_0px_#ccff00]">
                Setup inicial
              </span>
              <div className="flex justify-between items-start gap-4 mt-2">
                <span className="text-[10px] font-bold uppercase text-slate-900 leading-tight flex-1">
                  Design e <br /> Implementação
                </span>
                <span className="text-lg md:text-xl font-black text-slate-950 tracking-tighter whitespace-nowrap bg-[#ccff00] px-2 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">
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

            <div className="pt-3 border-t-2 border-slate-950 flex justify-between items-center mt-2">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                Mensalidade
              </span>
              <span className="text-base font-black text-slate-400 tracking-tighter line-through">
                R$ 0,00
              </span>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-slate-950">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-3">O que está incluso:</span>
            <ul className="space-y-2">
              {[
                "Design moderno focado em conversão",
                "Certificado SSL incluso",
                "Hospedagem de alta performance",
                "Integração nativa com Unificando",
                "Otimização para dispositivos móveis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-tight">
                  <span className="w-4 h-4 bg-slate-950 text-[#ccff00] flex items-center justify-center text-[8px] border border-slate-950 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>


  );
};
