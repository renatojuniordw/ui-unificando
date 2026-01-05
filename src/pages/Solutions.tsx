
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const AtendimentoAnimation = () => {
  return (
    <div className="bg-white rounded-[3rem] p-8 aspect-video flex items-center justify-center shadow-inner border border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-slate-50/50"></div>
      <div className="z-10 bg-slate-900 w-32 h-32 rounded-[2rem] shadow-2xl border border-white/5 flex flex-col items-center justify-center relative">
        <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-2xl mb-2">U</div>
        <div className="h-1.5 w-16 bg-white/20 rounded-full"></div>
        <AnimatePresence>
          {[
            { id: 1, color: 'bg-indigo-400', icon: 'W', x: -120, y: -40, delay: 0 },
            { id: 2, color: 'bg-indigo-600', icon: 'I', x: -120, y: 40, delay: 1 },
            { id: 3, color: 'bg-indigo-400', icon: 'W', x: 120, y: -40, delay: 0.5 },
            { id: 4, color: 'bg-indigo-600', icon: 'I', x: 120, y: 40, delay: 1.5 },
          ].map((item) => (
            <motion.div
              key={item.id}
              initial={{ x: item.x, y: item.y, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, y: 0, opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: item.delay }}
              className={`absolute w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-lg`}
            >
              {item.icon}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AutomacaoAnimation = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setStep((prev) => (prev + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-slate-900 rounded-[3rem] p-8 aspect-video flex flex-col shadow-2xl border border-slate-800 overflow-hidden relative text-left">
      <div className="flex-1 flex flex-col gap-4">
        <motion.div animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -20 }} className="bg-white/10 p-4 rounded-2xl rounded-bl-none max-w-[70%] text-[9px] font-bold text-slate-300 uppercase tracking-tight">Gostaria de um orçamento.</motion.div>
        {step === 1 && <div className="flex gap-1 p-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-75"></div></div>}
        <motion.div animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : 20 }} className="bg-indigo-600 p-4 rounded-2xl rounded-br-none max-w-[70%] self-end text-[9px] font-bold text-white shadow-xl uppercase tracking-tight">Olá! Escolha uma opção...</motion.div>
      </div>
      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest text-center mt-4">IA UNIFICADA ATIVA</div>
    </div>
  );
};

const DigitalAnimation = () => {
  return (
    <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl overflow-hidden relative h-full border border-slate-800">
      <div className="bg-white rounded-[2rem] h-full min-h-[300px] flex flex-col p-8 overflow-hidden">
        <div className="flex justify-between items-center mb-10"><div className="h-4 w-24 bg-slate-200 rounded-full"></div><div className="flex gap-3"><div className="h-3 w-8 bg-slate-100 rounded-full"></div><div className="h-3 w-12 bg-indigo-600 rounded-full"></div></div></div>
        <div className="h-10 w-2/3 bg-slate-900 rounded-2xl mb-4"></div>
        <div className="h-4 w-1/2 bg-slate-200 rounded-full mb-10"></div>
        <div className="mt-auto grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => <div key={i} className="h-24 w-full bg-slate-50 rounded-2xl border border-slate-100"></div>)}
        </div>
      </div>
    </div>
  );
};

export const Solutions: React.FC<{ onNavigate: (p: Page) => void, currentPage: Page }> = ({ onNavigate }) => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 bg-white">
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Ecossistema Completo</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">Nosso Método.</h1>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">Três fases modulares para transformar sua operação digital.</p>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-block bg-indigo-50 text-indigo-700 font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 border border-indigo-100">Fase 01 - Organização</div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Atendimento Unificado</h2>
            <p className="text-lg text-slate-500 mb-10 font-medium">Centralize seus canais em uma única caixa de entrada profissional.</p>
            <button onClick={() => onNavigate(Page.CustomerService)} className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest">Ver Solução →</button>
          </motion.div>
          <AtendimentoAnimation />
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <div className="order-2 md:order-1"><AutomacaoAnimation /></div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
            <div className="inline-block bg-indigo-600 text-white font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6">Fase 02 - Evolução</div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Automação Inteligente</h2>
            <p className="text-lg text-slate-500 mb-10 font-medium">Automatize processos repetitivos e libere sua equipe.</p>
            <button onClick={() => onNavigate(Page.Automation)} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-indigo-700 transition-all uppercase tracking-widest">Ver Solução →</button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-block bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6">Fase 03 - Presença</div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Presença Digital</h2>
            <p className="text-lg text-slate-500 mb-10 font-medium">Construímos sua vitrine profissional com autoridade máxima no Google.</p>
            <button onClick={() => onNavigate(Page.DigitalPresence)} className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest">Ver Solução →</button>
          </motion.div>
          <div className="h-full min-h-[400px]"><DigitalAnimation /></div>
        </div>
      </section>
    </div>
  );
};
