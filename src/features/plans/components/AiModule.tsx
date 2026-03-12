import React, { Dispatch, SetStateAction } from "react";
import { PRICING } from "../../../constants/pricing";
import { AiAddons, AiChannels } from "../types";

interface AiModuleProps {
  aiEnabled: boolean;
  aiChannels: AiChannels;
  setAiChannels: Dispatch<SetStateAction<AiChannels>>;
  aiAddons: AiAddons;
  setAiAddons: Dispatch<SetStateAction<AiAddons>>;
}

export const AiModule: React.FC<AiModuleProps> = ({
  aiEnabled,
  aiChannels,
  setAiChannels,
  aiAddons,
  setAiAddons,
}) => {
  return (
    <div
      className={`p-8 border-4 border-slate-950 transition-all ${
        aiEnabled
          ? "bg-[#ccff00] shadow-[8px_8px_0px_#000]"
          : "bg-white opacity-90 shadow-none border-dashed"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] border-2 border-slate-950">
          🤖
        </div>
        <button
          onClick={() => {
            if (aiEnabled) {
              setAiChannels({
                whatsapp: false,
                instagram_direct: false,
                instagram_comments: false,
                site_chat: false,
              });
            } else {
              setAiChannels((prev) => ({ ...prev, whatsapp: true }));
            }
          }}
          className={`w-14 h-8 border-2 border-slate-950 transition-all relative ${
            aiEnabled ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 border-2 border-slate-950 transition-all ${
              aiEnabled ? "right-1 bg-[#ccff00]" : "left-1 bg-slate-300"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-950 mb-2 leading-none">
        IA NO <br/> ATENDIMENTO
      </h3>
      <p className="text-sm font-mono font-bold text-slate-950 mb-8 uppercase">
        IA treinada com a voz da sua marca e as suas regras de negócio.
        <span className="block mt-2 bg-slate-950 text-white inline-block px-2 py-1 border-2 border-slate-950 font-black shadow-[2px_2px_0px_#000]">
          SEM RESPOSTAS GENÉRICAS.
        </span>
      </p>

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div
          className={`w-full p-6 border-4 border-slate-950 text-left transition-all ${
            aiEnabled
              ? "bg-white shadow-[4px_4px_0px_#000]"
              : "bg-slate-50 opacity-50"
          }`}
        >
          {/* Channels Selection */}
          <p className="text-xs uppercase font-black text-slate-950 mb-4 tracking-[0.15em] bg-[#ccff00] border-2 border-slate-950 inline-block px-2 py-1 shadow-[2px_2px_0px_#000]">
            Canais Automatizados
          </p>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {[
              {
                id: "whatsapp",
                label: "WhatsApp",
                desc: "Responde conversas por texto.",
              },
              {
                id: "instagram_direct",
                label: "Direct",
                desc: "Responde DMs 24h.",
              },
              {
                id: "instagram_comments",
                label: "Comentários",
                desc: "Responde em todos os posts. Sem limites de contatos.",
              },
            ].map((channel) => (
              <label
                key={channel.id}
                className={`flex items-start gap-4 cursor-pointer p-4 border-2 border-slate-950 transition-all ${
                  // @ts-ignore - indexing strictly typed interface
                  (aiChannels as any)[channel.id] && aiEnabled
                    ? "bg-[#ccff00] shadow-[2px_2px_0px_#000]"
                    : "bg-white hover:bg-slate-100"
                }`}
              >
                <div
                  className={`mt-0.5 w-5 h-5 border-2 border-slate-950 flex items-center justify-center transition-colors ${
                    // @ts-ignore
                    (aiChannels as any)[channel.id] && aiEnabled
                      ? "bg-slate-950 text-[#ccff00]"
                      : "bg-white text-transparent"
                  }`}
                >
                  <input
                    type="checkbox"
                    disabled={!aiEnabled}
                    // @ts-ignore
                    checked={(aiChannels as any)[channel.id]}
                    onChange={(e) =>
                      setAiChannels((prev) => ({
                        ...prev,
                        [channel.id]: e.target.checked,
                      }))
                    }
                    className="hidden"
                  />
                  {/* Check icon */}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span
                    className={`block text-sm font-black uppercase tracking-widest leading-none mb-2 ${
                      // @ts-ignore
                      (aiChannels as any)[channel.id] && aiEnabled
                        ? "text-slate-950"
                        : "text-slate-500"
                    }`}
                  >
                    {channel.label}
                  </span>
                  {channel.desc && (
                    <span
                      className={`block text-[10px] leading-tight font-mono font-bold uppercase tracking-tight ${
                        // @ts-ignore
                        (aiChannels as any)[channel.id] && aiEnabled
                          ? "text-slate-950"
                          : "text-slate-400"
                      }`}
                    >
                      {channel.desc}
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>

          <p className="text-xs uppercase font-black text-slate-950 mb-4 tracking-[0.15em] bg-slate-950 text-white border-2 border-slate-950 inline-block px-2 py-1 shadow-[2px_2px_0px_#ccff00]">
            Recursos Extras
          </p>
          <div className="space-y-3 mb-6">
            <label
              className={`flex items-center gap-3 cursor-pointer p-3 border-2 border-slate-950 transition-all ${
                aiAddons.audio && aiEnabled
                  ? "bg-[#ccff00] shadow-[2px_2px_0px_#000]"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              <div
                  className={`w-4 h-4 border-2 border-slate-950 flex items-center justify-center transition-colors ${
                    aiAddons.audio && aiEnabled
                      ? "bg-slate-950 text-[#ccff00]"
                      : "bg-white text-transparent"
                  }`}
                >
              <input
                type="checkbox"
                disabled={!aiEnabled}
                checked={aiAddons.audio}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    audio: e.target.checked,
                  }))
                }
                className="hidden"
              />
               <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              <span
                className={`text-[11px] font-black uppercase tracking-widest ${
                  aiAddons.audio && aiEnabled ? "text-slate-950" : "text-slate-500"
                }`}
              >
                Interpretação de Áudio
              </span>
            </label>
            <label
              className={`flex items-center gap-3 cursor-pointer p-3 border-2 border-slate-950 transition-all ${
                aiAddons.api && aiEnabled
                  ? "bg-[#ccff00] shadow-[2px_2px_0px_#000]"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              <div
                  className={`w-4 h-4 border-2 border-slate-950 flex items-center justify-center transition-colors ${
                    aiAddons.api && aiEnabled
                      ? "bg-slate-950 text-[#ccff00]"
                      : "bg-white text-transparent"
                  }`}
                >
              <input
                type="checkbox"
                disabled={!aiEnabled}
                checked={aiAddons.api}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    api: e.target.checked,
                  }))
                }
                className="hidden"
              />
               <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              <span
                className={`text-[11px] font-black uppercase tracking-widest ${
                  aiAddons.api && aiEnabled ? "text-slate-950" : "text-slate-500"
                }`}
              >
                Integração API Própria
              </span>
            </label>
            <label
              className={`flex items-center gap-3 cursor-pointer p-3 border-2 border-slate-950 transition-all ${
                aiAddons.google && aiEnabled
                  ? "bg-[#ccff00] shadow-[2px_2px_0px_#000]"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
             <div
                  className={`w-4 h-4 border-2 border-slate-950 flex items-center justify-center transition-colors ${
                    aiAddons.google && aiEnabled
                      ? "bg-slate-950 text-[#ccff00]"
                      : "bg-white text-transparent"
                  }`}
                >
              <input
                type="checkbox"
                disabled={!aiEnabled}
                checked={aiAddons.google}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    google: e.target.checked,
                  }))
                }
                className="hidden"
              />
              <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              <span
                className={`text-[11px] font-black uppercase tracking-tighter ${
                  aiAddons.google && aiEnabled ? "text-slate-950" : "text-slate-500"
                }`}
              >
                Google (Sheets, Agenda)
              </span>
            </label>
          </div>

          {aiEnabled && (
            <div className="bg-slate-950 text-white p-4 border-4 border-slate-950 shadow-[4px_4px_0px_#ccff00] mt-8">
              <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-slate-800">
                <span className="font-black text-xs uppercase tracking-[0.15em] text-[#ccff00]">
                  PLANO IA BASE
                </span>
                <span className="text-white font-black text-2xl tracking-tighter bg-slate-800 px-2 border-2 border-slate-700">
                  R$ {PRICING.ia.base.monthly.toLocaleString("pt-BR")}
                  <span className="text-[10px] text-slate-400 font-bold uppercase ml-1">
                    /MÊS
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-1 gap-3 max-h-[1000px] opacity-100 transition-all">
                {PRICING.ia.base.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-center text-[10px] md:text-xs font-mono font-bold uppercase tracking-tight text-white"
                  >
                    <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 font-black w-5 h-5 flex items-center justify-center shrink-0">✓</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
