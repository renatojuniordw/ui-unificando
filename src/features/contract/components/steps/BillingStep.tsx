import React from "react";
import { BillingData } from "@/types/contract";

interface BillingStepProps {
  data: BillingData;
  updateData: (updates: Partial<BillingData>) => void;
}

export const BillingStep: React.FC<BillingStepProps> = ({
  data,
  updateData,
}) => {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">
            $
          </span>
          Dados de Cobrança
        </h2>
        <p className="text-slate-500 text-sm font-medium ml-10">
          Defina como você prefere realizar o pagamento das mensalidades.
        </p>
      </div>

      <div className="grid gap-12 ml-10">
        {/* Setup Payment */}
        <div>
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            Forma de Pagamento - Setup (Implantação)
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => updateData({ billingSetupMethod: "pix" })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                data.billingSetupMethod === "pix"
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-lg shadow-indigo-100"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">💠</div>
              <div className="text-sm font-black uppercase tracking-wide mb-1">
                PIX (À Vista)
              </div>
              <div className="text-[10px] font-medium opacity-70">
                Pagamento único para início
              </div>
            </button>

            <button
              onClick={() => updateData({ billingSetupMethod: "credit_card" })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                data.billingSetupMethod === "credit_card"
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-lg shadow-indigo-100"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">💳</div>
              <div className="text-sm font-black uppercase tracking-wide mb-1">
                Cartão de Crédito
              </div>
              <div className="text-[10px] font-medium opacity-70">
                Até 12x (juros da operadora)
              </div>
            </button>
          </div>
        </div>

        <div className="h-px bg-slate-100 w-full" />

        {/* Monthly Payment */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Forma de Pagamento - Recorrência (Mensalidade)
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Dia de Vencimento
            </label>
            <div className="flex flex-wrap gap-3">
              {["05", "10", "15", "20", "25"].map((day) => (
                <button
                  key={day}
                  onClick={() => updateData({ billingDueDay: day })}
                  className={`flex-1 min-w-[60px] py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                    data.billingDueDay === day
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                      : "bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:text-slate-700"
                  }`}
                >
                  Dia {day}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => updateData({ billingMethod: "pix" })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                data.billingMethod === "pix"
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-lg shadow-indigo-100"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">💠</div>
              <div className="text-sm font-black uppercase tracking-wide mb-1">
                PIX Automático
              </div>
              <div className="text-[10px] font-medium opacity-70">
                Cobrança recorrente
              </div>
            </button>

            <button
              onClick={() => updateData({ billingMethod: "credit_card" })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                data.billingMethod === "credit_card"
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-lg shadow-indigo-100"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">💳</div>
              <div className="text-sm font-black uppercase tracking-wide mb-1">
                Cartão de Crédito
              </div>
              <div className="text-[10px] font-medium opacity-70">
                Recorrência automática
              </div>
            </button>

            <button
              onClick={() => updateData({ billingMethod: "boleto" })}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${
                data.billingMethod === "boleto"
                  ? "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-lg shadow-indigo-100"
                  : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">📄</div>
              <div className="text-sm font-black uppercase tracking-wide mb-1">
                Boleto Bancário
              </div>
              <div className="text-[10px] font-medium opacity-70">
                Compensação 1-3 dias
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
