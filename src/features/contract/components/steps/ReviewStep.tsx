import React from "react";
import { ContractData } from "@/types/contract";

interface ReviewStepProps {
  data: ContractData;
  pricing: { setup: number; monthly: number };
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const ReviewStep: React.FC<ReviewStepProps> = ({ data, pricing }) => {
  return (
    <div className="space-y-12 animate-in">
      <div className="bg-slate-950 border-8 border-slate-950 shadow-[20px_20px_0px_#ccff00] p-10 md:p-16 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ccff00 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        <div className="relative z-10 mb-12 border-b-4 border-[#ccff00] pb-6 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            DEMONSTRATIVO <br/>
            <span className="text-[#ccff00]">FINANCEIRO.</span>
          </h2>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">ID://GEN_CONTRATO_2026</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="bg-slate-900 p-8 border-4 border-slate-800 shadow-[8px_8px_0px_#000]">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#ccff00] mb-4 border-b border-white/10 pb-2">
              SETUP_INITIAL_DEPLOY (ÚNICO)
            </div>
            <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              {currencyFormatter.format(pricing.setup)}
            </div>
          </div>
          <div className="bg-[#ccff00] p-8 border-4 border-slate-950 shadow-[8px_8px_0px_#000]">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-950 mb-4 border-b border-slate-950/20 pb-2">
              RECURRING_MONTHLY (MENSAL)
            </div>
            <div className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter">
              {currencyFormatter.format(pricing.monthly)}
            </div>
          </div>
        </div>

        {/* Technical Data Sheet */}
        <div className="bg-white/5 border border-white/10 p-8 space-y-4 font-mono">
           <div className="text-[#ccff00] font-black uppercase text-xs mb-6 border-b border-white/10 pb-2">FOLHA_TECNICA_VALIDAÇÃO</div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[11px] uppercase font-bold tracking-tight">
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">ENTIDADE:</span>
               <span className="text-[#ccff00]">{data.personalData.name}</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">DOC_ID:</span>
               <span className="text-white">{data.personalData.document}</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">LOCAL:</span>
               <span className="text-white truncate max-w-[150px]">{data.addressData.city}/{data.addressData.state}</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">MODULOS:</span>
               <span className="text-white">
                 {[
                   data.personalData.services.atendimento && "ATT",
                   data.personalData.services.ia && "IA",
                   data.personalData.services.site && "SITE",
                 ].filter(Boolean).join("++")}
               </span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">METODO:</span>
               <span className="text-white">{data.billingData.billingMethod.toUpperCase()}</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="opacity-50">VENCIMENTO:</span>
               <span className="text-white">DIA_{data.billingData.billingDueDay}</span>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-[#ccff00] p-8 border-4 border-slate-950 shadow-[10px_10px_0px_#000] flex gap-4 items-start">
        <div className="bg-slate-950 text-[#ccff00] rounded-full p-2 text-xl leading-none">⚠️</div>
        <div>
          <h4 className="font-black uppercase tracking-tighter text-slate-950 mb-1">PROTOCOLO DE VERIFICAÇÃO</h4>
          <p className="text-[10px] text-slate-800 font-bold uppercase leading-relaxed max-w-2xl">
            A GERAÇÃO DO CONTRATO É IRREVERSÍVEL APÓS O ENVIO. SEUS DADOS SERÃO UTILIZADOS EXATAMENTE COMO INFORMADOS ACIMA. CASO HAJA ALGUMA DIVERGÊNCIA, VOLTE E CORRIJA ANTES DE PROSSEGUIR.
          </p>
        </div>
      </div>
    </div>
  );
};
