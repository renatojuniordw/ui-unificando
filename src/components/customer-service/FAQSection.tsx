import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{question}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDownIcon className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-500 text-sm leading-relaxed font-medium max-w-2xl">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const FAQSection = () => {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Perguntas Frequentes</h2>
                    <p className="text-slate-500 text-sm font-medium">Tire suas dúvidas antes de começar.</p>
                </div>
                <div className="space-y-2">
                    <FAQItem question="Posso cancelar quando quiser?" answer="Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel, sem burocracia." />
                    <FAQItem question="Preciso de um celular ligado?" answer="Não. Como utilizamos a API oficial (ou conexão em nuvem estável), seu celular não precisa estar conectado à internet o tempo todo." />
                    <FAQItem question="Consigo usar o mesmo número para vários atendentes?" answer="Com certeza! Essa é a principal função do Unificando. Todos os seus atendentes acessam o mesmo número de WhatsApp simultaneamente, cada um no seu computador." />
                    <FAQItem question="O Unificando fornece número de WhatsApp ou conta de Instagram?" answer="Não. Os canais utilizados são sempre do próprio cliente. Nós apenas realizamos a integração e organização do atendimento." />
                    <FAQItem question="O Unificando pode causar banimento ou bloqueio de contas?" answer="Não. Bloqueios e banimentos podem ocorrer por uso indevido das plataformas. O Unificando não se responsabiliza por penalidades aplicadas pelo WhatsApp, Instagram, Telegram ou outros canais." />
                    <FAQItem question="O Unificando envia mensagens automaticamente?" answer="Somente quando o cliente autoriza e configura automações, sempre respeitando as regras das plataformas." />
                    <FAQItem question="O Unificando garante vendas ou resultados?" answer="Não. A plataforma ajuda a organizar e agilizar o atendimento, mas não garante vendas ou faturamento." />
                    <FAQItem question="Meus dados e conversas ficam seguros?" answer="Sim. Cada cliente possui um ambiente isolado e seguro, com acesso restrito aos seus usuários." />
                </div>
            </div>
        </section>
    );
};
