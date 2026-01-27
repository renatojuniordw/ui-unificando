import React from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { ContractData } from "@/types/contract";

interface ReviewStepProps {
  data: ContractData;
  pricing: { setup: number; monthly: number };
  setTurnstileToken: (token: string) => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  data,
  pricing,
  setTurnstileToken,
}) => {
  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full"></div>

        <h2 className="text-xl font-bold text-white mb-6 text-center">
          Resumo do Investimento
        </h2>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
              Configuração e Implementação (Único)
            </div>
            <div className="text-2xl md:text-3xl font-black text-indigo-400">
              {pricing.setup.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">
              Mensalidade
            </div>
            <div className="text-2xl md:text-3xl font-black text-white">
              {pricing.monthly.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-400 border-t border-white/10 pt-4">
          <div className="flex justify-between">
            <span>Cliente</span>
            <span className="text-white">{data.personalData.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Documento</span>
            <span className="text-white">{data.personalData.document}</span>
          </div>
          <div className="flex justify-between">
            <span>Endereço</span>
            <span className="text-white text-right max-w-[200px] leading-tight">
              {data.addressData.street}, {data.addressData.number}
              {data.addressData.complement &&
                ` - ${data.addressData.complement}`}
              <br />
              {data.addressData.neighborhood} - {data.addressData.city}/
              {data.addressData.state}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Serviços</span>
            <span className="text-white">
              {[
                data.personalData.services.atendimento && "Atendimento",
                data.personalData.services.ia && "IA",
                data.personalData.services.site && "Site",
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Pagamento Setup</span>
            <span className="text-white">
              {data.billingData.billingSetupMethod === "credit_card"
                ? "Cartão de Crédito"
                : "PIX (À Vista)"}
            </span>
          </div>
          <div className="flex justify-between border-t border-white/5 pt-2 mt-2">
            <span>Vencimento Mensal</span>
            <span className="text-white">
              Dia {data.billingData.billingDueDay}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Pagamento Mensal</span>
            <span className="text-white">
              {data.billingData.billingMethod === "credit_card"
                ? "Cartão de Crédito"
                : data.billingData.billingMethod === "boleto"
                  ? "Boleto"
                  : "PIX Automático"}
            </span>
          </div>
        </div>
      </div>

      <div className="border border-yellow-100 bg-yellow-50 p-4 rounded-xl flex gap-3 items-start">
        <span className="text-yellow-600 mt-1">⚠️</span>
        <p className="text-sm text-yellow-800">
          Por favor, revise todos os dados com atenção. Estas informações serão
          utilizadas para a <strong>geração automática do seu contrato</strong>{" "}
          de prestação de serviços.
        </p>
      </div>

      <div className="flex justify-center">
        <Turnstile
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          options={{ theme: "light" }}
        />
      </div>
    </div>
  );
};
