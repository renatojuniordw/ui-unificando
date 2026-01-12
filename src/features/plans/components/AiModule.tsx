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
      className={`rounded-[2.5rem] p-8 border-2 transition-all ${
        aiEnabled
          ? "bg-slate-50 border-indigo-600"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
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
          className={`w-12 h-7 rounded-full transition-all relative ${
            aiEnabled ? "bg-indigo-600" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${
              aiEnabled ? "right-1" : "left-1"
            }`}
          ></div>
        </button>
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">
        Inteligência Artificial
      </h3>
      <p className="text-xs text-slate-500 font-medium mb-8">
        Comece simples. Evolua quando fizer sentido.
      </p>

      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div
          className={`w-full p-4 rounded-xl border-2 text-left transition-all shadow-md ${
            aiEnabled
              ? "bg-white border-indigo-600"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          {/* Channels Selection */}
          <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
            Canais Automatizados
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
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
                desc: "Responde em todos os posts. Sem limites de posts ou contatos.",
              },
            ].map((channel) => (
              <label
                key={channel.id}
                className={`flex items-start gap-3 cursor-pointer p-3 rounded-xl border transition-all ${
                  // @ts-ignore - indexing strictly typed interface
                  (aiChannels as any)[channel.id]
                    ? "bg-indigo-50 border-indigo-200"
                    : "hover:bg-slate-50 border-transparent bg-slate-50/50"
                }`}
              >
                <div
                  className={`mt-0.5 p-0.5 rounded text-white flex items-center justify-center transition-colors ${
                    // @ts-ignore
                    (aiChannels as any)[channel.id]
                      ? "bg-indigo-600"
                      : "bg-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
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
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <span
                    className={`block text-xs font-bold leading-none mb-1 ${
                      // @ts-ignore
                      (aiChannels as any)[channel.id]
                        ? "text-indigo-900"
                        : "text-slate-700"
                    }`}
                  >
                    {channel.label}
                  </span>
                  {channel.desc && (
                    <span
                      className={`block text-[10px] leading-tight ${
                        // @ts-ignore
                        (aiChannels as any)[channel.id]
                          ? "text-indigo-700/80"
                          : "text-slate-500"
                      }`}
                    >
                      {channel.desc}
                    </span>
                  )}
                </div>
              </label>
            ))}
          </div>

          <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
            Recursos Extras
          </p>
          <div className="space-y-2 mb-4">
            <label
              className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-all ${
                aiAddons.audio
                  ? "bg-indigo-50 border-indigo-200"
                  : "hover:bg-white border-transparent"
              }`}
            >
              <input
                type="checkbox"
                checked={aiAddons.audio}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    audio: e.target.checked,
                  }))
                }
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
              />
              <span
                className={`text-[10px] font-bold ${
                  aiAddons.audio ? "text-indigo-700" : "text-slate-500"
                }`}
              >
                Interpretação de Áudio
              </span>
            </label>
            <label
              className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-all ${
                aiAddons.api
                  ? "bg-indigo-50 border-indigo-200"
                  : "hover:bg-white border-transparent"
              }`}
            >
              <input
                type="checkbox"
                checked={aiAddons.api}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    api: e.target.checked,
                  }))
                }
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
              />
              <span
                className={`text-[10px] font-bold ${
                  aiAddons.api ? "text-indigo-700" : "text-slate-500"
                }`}
              >
                Integração API
              </span>
            </label>
            <label
              className={`flex items-center gap-2 cursor-pointer p-2 rounded-lg border transition-all ${
                aiAddons.google
                  ? "bg-indigo-50 border-indigo-200"
                  : "hover:bg-white border-transparent"
              }`}
            >
              <input
                type="checkbox"
                checked={aiAddons.google}
                onChange={(e) =>
                  setAiAddons((prev) => ({
                    ...prev,
                    google: e.target.checked,
                  }))
                }
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4"
              />
              <span
                className={`text-[10px] font-bold ${
                  aiAddons.google ? "text-indigo-700" : "text-slate-500"
                }`}
              >
                Integração Google (Sheets, Docs, Agenda)
              </span>
            </label>
          </div>

          {aiEnabled && (
            <>
              <div className="flex justify-between items-center mb-1 pt-4 border-t border-slate-100">
                <span className="font-black text-xs uppercase tracking-wider text-slate-900">
                  Plano IA Base
                </span>
                <span className="text-indigo-600 font-black text-xs">
                  R$ {PRICING.ia.base.monthly}
                  <span className="text-[9px] text-slate-400 font-medium">
                    /mês
                  </span>
                </span>
              </div>
              <ul className="grid grid-cols-2 gap-2 max-h-[1000px] opacity-100 transition-all">
                {PRICING.ia.base.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-1.5 items-center text-[9px] font-bold text-slate-600"
                  >
                    <span className="text-indigo-600">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
