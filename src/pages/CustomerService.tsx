import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

interface CustomerServiceProps {
  onNavigate: (page: Page) => void;
}

const DashboardSimulation = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como funciona o serviço?", side: 'left' },
    { id: 2, text: "Gostaria de um orçamento.", side: 'left' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => {
        if (prev.length > 3) return [{ id: 1, text: "Olá! Como funciona o serviço?", side: 'left' }, { id: 2, text: "Gostaria de um orçamento.", side: 'left' }];
        return [...prev, { id: Date.now(), text: "Claro! Vamos organizar seu fluxo com o Unificando.", side: 'right' }];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 rounded-[3.5rem] h-[450px] md:h-[550px] overflow-hidden flex shadow-2xl border border-slate-800 text-[10px] text-left">
      {/* Sidebar 1 */}
      <div className="w-12 bg-slate-950 flex flex-col items-center py-6 gap-6">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black">U</div>
        <div className="w-5 h-5 bg-white/5 rounded-full"></div>
        <div className="w-5 h-5 bg-white/5 rounded-full"></div>
        <div className="mt-auto mb-6 w-5 h-5 bg-white/5 rounded-full"></div>
      </div>

      {/* Sidebar 2 */}
      <div className="w-32 md:w-56 bg-slate-900 border-r border-white/5 flex flex-col">
        <div className="p-4 border-b border-white/5">
          <div className="h-3 bg-white/10 rounded-full w-full mb-2"></div>
          <div className="h-2 bg-indigo-500/30 rounded-full w-1/2"></div>
        </div>
        <div className="p-3 bg-white/5 border-l-2 border-indigo-500">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center font-bold text-indigo-400">RB</div>
            <div className="flex flex-col gap-1 overflow-hidden">
              <div className="h-2 bg-white rounded-full w-20"></div>
              <div className="h-2 bg-slate-600 rounded-full w-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 bg-slate-950/50 flex flex-col">
        <div className="h-12 bg-slate-900 border-b border-white/5 flex items-center px-6 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
            <div className="font-bold text-white uppercase tracking-tighter">Renato Bezerra</div>
          </div>
          <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded text-[8px] font-black uppercase tracking-widest">Online</div>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
          <AnimatePresence>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[75%] p-4 rounded-[1.5rem] font-medium ${m.side === 'left' ? 'bg-white/5 text-slate-300 self-start border border-white/5' : 'bg-indigo-600 text-white self-end shadow-lg'} `}
              >
                {m.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="p-4 bg-slate-900 border-t border-white/5">
          <div className="h-12 bg-white/5 rounded-2xl flex items-center px-5 border border-white/5">
            <span className="text-slate-600 font-medium">Escreva sua resposta...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CustomerService: React.FC<CustomerServiceProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Atendimento Centralizado WhatsApp e Instagram | Unificando"
        description="Centralize seus canais de atendimento em uma única caixa de entrada profissional. Múltiplos atendentes, histórico salvo e organização total."
        canonical="/atendimento"
      />
      {/* Hero */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">Fase 01 - Organização</div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Atendimento <span className="text-slate-500 font-normal">Sem Bagunça.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Centralize WhatsApp e Instagram em uma única caixa de entrada profissional com o Unificando. Tenha controle total e sincronia com sua equipe.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(Page.Contact)}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black shadow-xl uppercase tracking-[0.2em]"
            >
              Organizar meu negócio
            </motion.button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <DashboardSimulation />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 uppercase tracking-tighter">O Unificando resolve isso.</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Foco total no atendimento humano",
              "Histórico salvo e disponível sempre",
              "Múltiplos agentes no mesmo número",
              "Notas internas e etiquetas de status"
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] flex items-center gap-6 group hover:border-indigo-400 transition-all">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-[10px] font-black shrink-0">✓</div>
                <span className="font-black text-slate-800 uppercase text-[11px] tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Restored */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm">
              <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Mensalidade Unificando</span>
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Fase 01</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-slate-400 font-bold text-lg uppercase">R$</span>
                <span className="text-6xl font-black text-slate-900 tracking-tighter">149</span>
                <span className="text-slate-400 font-bold uppercase text-xs">/mês</span>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-widest mb-8">Acesso completo à plataforma de unificação de canais.</p>
              <button onClick={() => onNavigate(Page.Contact)} className="w-full bg-slate-900 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest">Contratar Agora</button>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[60px]"></div>
              <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Taxa de Setup</span>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Implementação</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-slate-500 font-bold text-lg uppercase">R$</span>
                <span className="text-6xl font-black text-white tracking-tighter">300</span>
                <span className="text-slate-500 font-bold uppercase text-xs">Taxa Única</span>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed uppercase tracking-widest">Integração técnica, treinamento básico e entrega da ferramenta pronta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Posture Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter">O que <span className="text-slate-500">NÃO</span> somos.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Não é robô", d: "Priorizamos o contato humano real acima de menus infinitos que frustram o cliente." },
              { t: "Não é automático", d: "Fugimos de respostas frias. Tecnologia serve para agilizar, não esfriar o contato." },
              { t: "Não é IA cega", d: "Nossa tecnologia apoia seu time, garantindo que nenhum lead seja esquecido." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 border border-slate-200 rounded-[3.5rem] text-left group hover:border-indigo-400 transition-all">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 font-black text-xl">✕</div>
                <h4 className="font-black text-slate-900 mb-4 uppercase tracking-[0.2em] text-[10px]">{item.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
