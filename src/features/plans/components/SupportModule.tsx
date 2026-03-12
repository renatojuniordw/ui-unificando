import React from "react";
import { PRICING } from "../../../constants/pricing";

interface SupportModuleProps {
  includeSupport: boolean;
  setIncludeSupport: (value: boolean) => void;
  inboxes: number;
  setInboxes: (value: number) => void;
  attendants: number;
  setAttendants: (value: number) => void;
}

export const SupportModule: React.FC<SupportModuleProps> = ({
  includeSupport,
  setIncludeSupport,
  inboxes,
  setInboxes,
  attendants,
  setAttendants,
}) => {
  return (
    <div
      className={`p-8 border-4 border-slate-950 transition-all ${
        includeSupport
          ? "bg-[#ccff00] shadow-[8px_8px_0px_#000]"
          : "bg-white opacity-90 shadow-none border-dashed"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] border-2 border-slate-950">
          💬
        </div>
        <button
          onClick={() => setIncludeSupport(!includeSupport)}
          className={`w-14 h-8 border-2 border-slate-950 transition-all relative ${
            includeSupport ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 border-2 border-slate-950 transition-all ${
              includeSupport ? "right-1 bg-[#ccff00]" : "left-1 bg-slate-300"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-950 mb-2 leading-none">
        ATENDIMENTO <br/>UNIFICADO
      </h3>
      <p className="text-sm font-mono font-bold text-slate-950 mb-8 uppercase">
        Painel multicanal para sua equipe.
      </p>

      {includeSupport && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-950 mb-4 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Canais de Entrada</span>
              <span className="text-xl text-slate-950 leading-none">
                {inboxes}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumInboxes}
              max="15"
              value={inboxes}
              onChange={(event) => setInboxes(parseInt(event.target.value))}
              className="w-full h-4 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
            <p className="text-[10px] text-slate-950 mt-3 font-black uppercase tracking-widest leading-relaxed bg-white/50 p-2 border-2 border-slate-950">
              WhatsApp, Instagram, Site, Telegram... <br />
              <span className="text-slate-950 decoration-slate-950 underline underline-offset-2">
                TUDO CENTRALIZADO EM UM SÓ LUGAR.
              </span>
            </p>
          </div>

          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-950 mb-4 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Equipe (Atendentes)</span>
              <span className="text-xl text-slate-950 leading-none">
                {attendants}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumAttendants}
              max="30"
              value={attendants}
              onChange={(event) => setAttendants(parseInt(event.target.value))}
              className="w-full h-4 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
          </div>

          <div className="mt-8 p-6 bg-white border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
            <div className="flex items-center gap-3 mb-4 text-slate-950">
              <div className="w-8 h-8 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center font-black">
                ?
              </div>
              <span className="text-xs uppercase font-black tracking-widest text-slate-950">
                O QUE CONTA COMO CANAL?
              </span>
            </div>
            <div className="text-[11px] text-slate-950 leading-relaxed font-mono font-bold uppercase">
              <p className="mb-3 text-slate-950">
                Cada conexão equivale a 01 Caixa de entrada (canal).
              </p>
              <ul className="space-y-2 list-none mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-950"></span>
                  WhatsApp / Instagram / Telegram
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-slate-950"></span>
                  Chat Ao Vivo do Site
                </li>
              </ul>
              <div className="bg-[#ccff00] p-3 text-slate-950 border-2 border-slate-950 font-black uppercase text-center shadow-[2px_2px_0px_#000]">
                Ex: 01 WhatsApp + 01 Instagram = 02 caixas.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
