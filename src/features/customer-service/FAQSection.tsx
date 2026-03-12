import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const FAQItem = ({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-[#ccff00] transition-colors group mb-6 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
      >
        <span className="text-xl md:text-2xl font-black text-slate-950 uppercase tracking-widest leading-snug pr-4">
          {question}
        </span>
        <div className={`w-12 h-12 shrink-0 border-4 border-slate-950 bg-white flex items-center justify-center transition-all shadow-[4px_4px_0px_#000] group-hover:bg-slate-950 group-hover:text-[#ccff00] ${isOpen ? 'rotate-180 bg-slate-950 text-[#ccff00]' : 'text-slate-950'}`}>
          <ChevronDownIcon />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white group-hover:bg-[#ccff00]"
            id={id}
            role="region"
            aria-labelledby={id}
          >
            <div className="px-8 pb-8 pt-4 border-t-4 border-slate-950 mt-2">
               <p className="text-slate-950 text-lg leading-relaxed font-mono font-bold">
                 {answer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-24 bg-white border-b-4 border-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
            DÚVIDAS FREQUENTES
          </h2>
        </div>
        <div className="space-y-2">
          <FAQItem
            id="faq-cancel"
            question="Posso cancelar quando quiser?"
            answer="Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel, sem burocracia."
          />
          <FAQItem
            id="faq-phone"
            question="Preciso de um celular ligado?"
            answer="Não. Como utilizamos a API (ou conexão em nuvem estável), seu celular não precisa estar conectado à internet o tempo todo."
          />
          <FAQItem
            id="faq-multiple"
            question="Consigo usar o mesmo número para vários atendentes?"
            answer="Com certeza! Essa é a principal função do Unificando. Todos os seus atendentes acessam o mesmo número de WhatsApp simultaneamente, cada um no seu computador."
          />
          <FAQItem
            id="faq-number"
            question="O Unificando fornece número de WhatsApp ou conta de Instagram?"
            answer="Não. Os canais utilizados são sempre do próprio cliente. Nós apenas realizamos a integração e organização do atendimento."
          />
          <FAQItem
            id="faq-ban"
            question="Pode causar banimento ou bloqueio de contas?"
            answer="Não. Bloqueios e banimentos podem ocorrer por uso indevido das plataformas. O Unificando não se responsabiliza por penalidades aplicadas pelo WhatsApp, Instagram, Telegram ou outros canais."
          />
          <FAQItem
            id="faq-auto"
            question="O Unificando envia mensagens automaticamente?"
            answer="Somente quando o cliente autoriza e configura automações, sempre respeitando as regras das plataformas."
          />
          <FAQItem
            id="faq-results"
            question="O Unificando garante vendas ou resultados?"
            answer="Não. A plataforma ajuda a organizar e agilizar o atendimento, mas não garante vendas ou faturamento."
          />
          <FAQItem
            id="faq-security"
            question="Meus dados e conversas ficam seguros?"
            answer="Sim. Cada cliente possui um ambiente isolado e seguro, com acesso restrito aos seus usuários."
          />
        </div>
      </div>
    </section>
  );
};
