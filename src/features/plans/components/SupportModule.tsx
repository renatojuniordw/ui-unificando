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
        Atendimento
      </h3>
      <p className="text-xs text-slate-500 font-medium mb-8">
        Painel multicanal para sua equipe.
      </p>

      {includeSupport && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
              <span>Caixas de Entrada (Canais)</span>
              <span>{inboxes}</span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumInboxes}
              max="10"
              value={inboxes}
              onChange={(event) => setInboxes(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              WhatsApp, Instagram, Site, Telegram...
            </p>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
              <span>Atendentes (Usuários)</span>
              <span>{attendants}</span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumAttendants}
              max="20"
              value={attendants}
              onChange={(event) => setAttendants(parseInt(event.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          <div className="mt-6 p-6 bg-white rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span className="text-[10px] uppercase font-black tracking-wider">
                O que conta como caixa de entrada?
              </span>
            </div>
            <div className="text-[10px] text-slate-500 leading-relaxed">
              <p className="mb-2">
                <strong className="text-slate-900">
                  Cada conexão = 1 Caixa de entrada.
                </strong>
              </p>
              <ul className="space-y-1 list-disc list-inside mb-3 marker:text-indigo-400">
                <li>WhatsApp / Instagram / Telegram</li>
                <li>Chat do Site</li>
              </ul>
              <p className="text-slate-400 italic">
                Ex: WhatsApp + Instagram = <strong>2 caixas</strong>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
