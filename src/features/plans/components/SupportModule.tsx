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
      className={`rounded-[2.5rem] p-8 border-2 transition-all ${
        includeSupport
          ? "bg-slate-50 border-indigo-600"
          : "bg-white border-slate-200 opacity-60 grayscale"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
          💬
        </div>
        <button
          onClick={() => setIncludeSupport(!includeSupport)}
          className={`w-12 h-7 rounded-full transition-all relative ${
            includeSupport ? "bg-indigo-600" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${
              includeSupport ? "right-1" : "left-1"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">
        Atendimento Unificado
      </h3>
      <p className="text-xs text-slate-500 font-medium mb-8">
        Painel multicanal para sua equipe.
      </p>

      {includeSupport && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-900 mb-4">
              <span>Canais de Entrada</span>
              <span className="text-xl text-indigo-600 leading-none">
                {inboxes}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumInboxes}
              max="15"
              value={inboxes}
              onChange={(event) => setInboxes(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-[11px] text-slate-400 mt-3 font-bold uppercase tracking-wide leading-relaxed">
              WhatsApp, Instagram, Site, Telegram... <br />
              <span className="text-indigo-400">
                Tudo centralizado em um só lugar.
              </span>
            </p>
          </div>

          <div>
            <div className="flex justify-between items-end text-xs font-black uppercase tracking-widest text-slate-900 mb-4">
              <span>Equipe (Atendentes)</span>
              <span className="text-xl text-indigo-600 leading-none">
                {attendants}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumAttendants}
              max="30"
              value={attendants}
              onChange={(event) => setAttendants(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          <div className="mt-6 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-indigo-600">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <span className="text-xs uppercase font-black tracking-widest text-slate-900">
                O que conta como canal?
              </span>
            </div>
            <div className="text-[11px] text-slate-500 leading-relaxed font-bold uppercase tracking-tight">
              <p className="mb-3 text-slate-700">
                Cada conexão equivale a 01 Caixa de entrada (canal).
              </p>
              <ul className="space-y-2 list-none mb-4">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                  WhatsApp / Instagram / Telegram
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                  Chat Ao Vivo do Site
                </li>
              </ul>
              <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200 text-slate-400 italic normal-case font-medium">
                Ex: 01 WhatsApp + 01 Instagram = <strong>02 caixas</strong>.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
