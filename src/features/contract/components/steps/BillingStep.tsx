import React from "react";
import { BillingData } from "@/types/contract";

type PaymentMethodType = "credit_card" | "pix" | "boleto";

interface BillingStepProps {
  data: BillingData;
  updateData: (updates: Partial<BillingData>) => void;
}

export const BillingStep: React.FC<BillingStepProps> = ({
  data,
  updateData,
}) => {
  const methods: { id: PaymentMethodType; label: string; icon: string; tag: string }[] = [
    { id: "credit_card", label: "Cartão de Crédito", icon: "💳", tag: "RECORRENTE" },
    { id: "pix", label: "Pix à Vista", icon: "⚡", tag: "INSTANTÂNEO" },
    { id: "boleto", label: "Boleto Bancário", icon: "📄", tag: "3_DIAS_ÚTEIS" },
  ];

  const dueDays = ["01", "05", "10", "15", "20", "25"];

  return (
    <div className="space-y-16 animate-in">
      {/* Vencimento Section */}
      <section>
        <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
            VENCIMENTO
            </h2>
            <div className="flex items-center gap-2">
                <div className="bg-slate-950 text-white px-2 py-0.5 text-[10px] font-black uppercase">FALHA_TIMEOUT_LIMIT</div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Dia de fechamento do ciclo mensal.</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-4">
            {dueDays.map((day) => (
                <button
                    key={day}
                    onClick={() => updateData({ billingDueDay: day })}
                    className={`w-16 h-16 border-4 font-black flex items-center justify-center transition-all ${
                        data.billingDueDay === day
                            ? "bg-slate-950 text-[#ccff00] border-slate-950 shadow-[4px_4px_0px_#ccff00] -translate-y-1"
                            : "bg-white text-slate-400 border-slate-200 hover:border-slate-300"
                    }`}
                >
                    {day}
                </button>
            ))}
        </div>
      </section>

      {/* Pagamento Section */}
      <section>
        <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
            MÉTODO DE PAGAMENTO
            </h2>
            <div className="flex items-center gap-2">
                <div className="bg-[#ccff00] text-slate-950 px-2 py-0.5 text-[10px] font-black uppercase border border-slate-950">LIQUIDAÇÃO_GATEWAY</div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">A recorrência será processada via este canal.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((method) => (
            <button
                key={method.id}
                onClick={() => updateData({ billingMethod: method.id })}
                className={`flex flex-col items-center justify-center p-8 border-4 transition-all relative group
                                ${
                                data.billingMethod === method.id
                                    ? "border-slate-950 bg-[#ccff00] shadow-[8px_8px_0px_#000] -translate-y-1"
                                    : "border-slate-950 bg-white hover:bg-slate-50 hover:shadow-[4px_4px_0px_#000]"
                                }`}
            >
                <div className={`text-4xl mb-4 transition-transform ${data.billingMethod === method.id ? "scale-110" : "group-hover:scale-110"}`}>
                {method.icon}
                </div>
                <div className={`font-black uppercase tracking-tight text-sm text-center mb-1 ${data.billingMethod === method.id ? "text-slate-950" : "text-slate-600"}`}>
                {method.label}
                </div>
                <div className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 border border-slate-950 ${data.billingMethod === method.id ? "bg-slate-950 text-white" : "text-slate-400"}`}>
                {method.tag}
                </div>
                
                {data.billingMethod === method.id && (
                <div className="absolute top-2 right-2 bg-slate-950 text-[#ccff00] p-1 border-2 border-slate-950 leading-none">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3"
                    >
                    <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                    />
                    </svg>
                </div>
                )}
            </button>
            ))}
        </div>
      </section>

      <div className="bg-slate-950 p-8 border-l-8 border-[#ccff00] shadow-[8px_8px_0px_#ccff00] mt-12">
        <h3 className="text-[#ccff00] font-black uppercase tracking-tighter mb-4 flex items-center gap-2">
          <span>⚠️</span> AVISO FINANCEIRO
        </h3>
        <p className="text-white text-[10px] font-bold leading-relaxed uppercase opacity-80">
          A UNIFICANDO NÃO ARMAZENA DADOS DE CARTÃO. TODAS AS TRANSAÇÕES SÃO PROCESSADAS VIA GATEWAYS SEGUROS. O ATRASO SUPERIOR A 05 DIAS ACARRETA EM SUSPENSÃO AUTOMÁTICA DOS SERVIÇOS DE IA E ATENDIMENTO.
        </p>
      </div>
    </div>
  );
};
