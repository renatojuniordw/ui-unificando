import React, { useState } from "react";
import { PRICING } from "../../../constants/pricing";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`p-6 border-4 border-slate-950 transition-all ${
        includeSupport
          ? "bg-[#ccff00] shadow-[6px_6px_0px_#000]"
          : "bg-white opacity-90 shadow-none border-dashed"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center text-xl shadow-[3px_3px_0px_#000] border-2 border-slate-950">
          💬
        </div>
        <button
          onClick={() => setIncludeSupport(!includeSupport)}
          className={`w-12 h-7 border-2 border-slate-950 transition-all relative ${
            includeSupport ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-0.5 w-5 h-5 border-2 border-slate-950 transition-all ${
              includeSupport ? "right-0.5 bg-[#ccff00]" : "left-0.5 bg-slate-300"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tighter text-slate-950 mb-1 leading-none">
        Atendimento <br />unificado
      </h3>
      <p className="text-[11px] font-bold text-slate-800 mb-6">
        Painel multicanal para sua equipe.
      </p>

      {includeSupport && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
          <div>
            <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest text-slate-950 mb-3 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Canais de Entrada</span>
              <span className="text-lg text-slate-950 leading-none">
                {inboxes}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumInboxes}
              max="15"
              value={inboxes}
              onChange={(event) => setInboxes(parseInt(event.target.value))}
              className="w-full h-3 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
            <div className="flex justify-between mt-1 text-[9px] font-bold text-slate-500 uppercase tracking-tighter px-1">
              <span>{PRICING.calculadora.rules.minimumInboxes} canal</span>
              <span>15 canais</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest text-slate-950 mb-3 bg-white border-2 border-slate-950 px-2 py-1 shadow-[2px_2px_0px_#000]">
              <span>Equipe (Atendentes)</span>
              <span className="text-lg text-slate-950 leading-none">
                {attendants}
              </span>
            </div>
            <input
              type="range"
              min={PRICING.calculadora.rules.minimumAttendants}
              max="30"
              value={attendants}
              onChange={(event) => setAttendants(parseInt(event.target.value))}
              className="w-full h-3 bg-white border-2 border-slate-950 appearance-none cursor-pointer accent-slate-950"
            />
            <div className="flex justify-between mt-1 text-[9px] font-bold text-slate-500 uppercase tracking-tighter px-1">
              <span>{PRICING.calculadora.rules.minimumAttendants} atendente</span>
              <span>30 atendentes</span>
            </div>
          </div>

          {/* Collapsible Details */}
          <div className="pt-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-slate-950 hover:text-slate-800 transition-colors"
            >
              <span className="w-5 h-5 flex items-center justify-center border-2 border-slate-950 bg-white group-hover:bg-slate-50 transition-colors shadow-[2px_2px_0px_#000] rotate-0">
                {showDetails ? "−" : "+"}
              </span>
              <span>{showDetails ? "Ver o que está incluso e regras" : "Ver o que está incluso e regras"}</span>
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-6">
                    <div className="p-4 bg-slate-50 border-[3px] border-slate-950 shadow-[3px_3px_0px_#000]">
                      <div className="flex items-center gap-2 mb-3 text-slate-950">
                        <div className="w-6 h-6 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center font-black text-xs">
                          ?
                        </div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-950">
                          O que conta como canal?
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-950 leading-relaxed font-medium">
                        <p className="mb-2">
                          Cada conexão equivale a 1 caixa de entrada.
                        </p>
                        <ul className="space-y-1.5 list-none mb-3">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-950"></span>
                            WhatsApp / Instagram / Telegram
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slate-950"></span>
                            Chat ao vivo do site
                          </li>
                        </ul>
                        <div className="bg-[#ccff00] p-2 text-slate-950 border-2 border-slate-950 font-bold text-[9px] uppercase text-center shadow-[1px_1px_0px_#000]">
                          Ex: 01 WhatsApp + 01 Instagram = 02 caixas.
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t-2 border-slate-950/30">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-3">O que está incluso:</span>
                      <ul className="space-y-2">
                        {[
                          "Histórico completo e centralizado",
                          "Gestão de equipe e permissões",
                          "Dashboard de métricas em tempo real",
                          "Transferência de chamados entre agentes"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-slate-900 uppercase tracking-tight">
                            <span className="w-4 h-4 bg-slate-950 text-[#ccff00] flex items-center justify-center text-[8px] border border-slate-950 shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-950 text-white p-3 text-[9px] font-bold uppercase tracking-tight">
                      ⚠️ IMPORTANTE: Os canais (números de WhatsApp/contas) são de propriedade do cliente. Não fornecemos números.
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      )}
    </div>



  );
};
