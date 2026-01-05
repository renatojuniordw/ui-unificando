import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

interface AutomationProps {
  onNavigate: (page: Page) => void;
}

const WhatsAppSimulation = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Gostaria de um orçamento.", type: 'user', time: '10:00' },
  ]);

  useEffect(() => {
    const sequence = [
      { id: 2, text: "Olá! Sou o assistente virtual da Unificado. Para agilizar, qual o seu nome?", type: 'bot', time: '10:00', delay: 1500 },
      { id: 3, text: "Sou o Marcos.", type: 'user', time: '10:01', delay: 3500 },
      { id: 4, text: "Perfeito, Marcos! Qual serviço você procura?", type: 'bot', time: '10:01', delay: 5000 },
    ];

    const timeouts = sequence.map(msg =>
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, msg.delay)
    );

    const resetTimeout = setTimeout(() => {
      setMessages([{ id: 1, text: "Olá! Gostaria de um orçamento.", type: 'user', time: '10:00' }]);
    }, 12000);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="bg-slate-50 rounded-[2rem] h-full overflow-hidden flex flex-col shadow-inner relative border border-slate-200">
      <div className="bg-slate-900 p-4 flex items-center gap-3 text-white">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black text-xs">U</div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">Unificado Assistant</span>
          <span className="text-[8px] opacity-60 font-bold uppercase tracking-tight">IA ATIVA</span>
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-100">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`max-w-[85%] p-3 rounded-2xl text-[10px] shadow-sm font-medium ${msg.type === 'user'
                ? 'bg-indigo-600 text-white self-end rounded-tr-none'
                : 'bg-white text-slate-800 self-start rounded-tl-none border border-slate-200'
                } `}
            >
              {msg.text}
              <div className={`text-[8px] mt-1 ${msg.type === 'user' ? 'text-indigo-200' : 'text-slate-400'} `}>{msg.time}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
        <div className="flex-1 bg-slate-50 rounded-full h-8 px-4 flex items-center border border-slate-100">
          <div className="w-px h-3 bg-indigo-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const Automation: React.FC<AutomationProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [channels, setChannels] = useState(1);
  const [useIA, setUseIA] = useState(false);
  const [complexity, setComplexity] = useState(1);

  const calculatePricing = () => {
    const setupBase = 1000;
    const mensalBase = 297;
    const channelCost = 100;
    const iaCost = 200;
    const complexityFactor = complexity === 1 ? 1 : complexity === 2 ? 1.5 : 2.5;

    const setupTotal = (setupBase * complexityFactor) + (channels * 150);
    const mensalTotal = mensalBase + (channels > 1 ? (channels - 1) * channelCost : 0) + (useIA ? iaCost : 0);

    return { setup: setupTotal, mensal: mensalTotal };
  };

  const pricing = calculatePricing();

  const faqItems = [
    { q: "A automação substitui meus atendentes?", a: "Não. Nossa filosofia é 'Human-First'. A automação cuida da triagem e tarefas repetitivas para que seu time foque no fechamento e casos complexos." },
    { q: "Corro risco de banimento no WhatsApp?", a: "Trabalhamos exclusivamente com APIs oficiais e boas práticas do Meta. Não fazemos disparos em massa ou spam." },
    { q: "Como funciona o uso de IA?", a: "A IA é usada para entender o que o cliente escreve (intenção) e transcrever áudios, evitando que o cliente fique preso em menus rígidos de 'digite 1 para tal'." }
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Automação de Atendimento WhatsApp com IA | Unificando"
        description="Automatize a triagem e respostas frequentes do seu WhatsApp com Inteligência Artificial. Ganhe tempo sem perder o toque humano."
        canonical="/automacao"
      />
      {/* Top Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => onNavigate(Page.Home)} className="hover:text-indigo-600 transition-colors">Início</button>
          <span>/</span>
          <span className="text-slate-900">Automação Evolutiva</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Fase 02 - Evolução</div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Ganhe tempo sem perder o <span className="text-slate-500 font-normal">toque humano.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Automação inteligente para filtrar e organizar conversas. Tecnologia invisível que trabalha para sua equipe focar no lucro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate(Page.Contact)}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-widest"
              >
                Evoluir Atendimento
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl h-[500px] border border-slate-800">
              <WhatsAppSimulation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Evolução Modular</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">A automação a serviço de pessoas.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Triagem Eficiente", d: "Saiba o que o cliente quer antes do atendente dar o primeiro 'oi'." },
              { t: "Respostas Instantâneas", d: "FAQs, horários e dúvidas comuns resolvidas 24h por dia, 7 dias por semana." },
              { t: "IA com Propósito", d: "Transcrição de áudios e compreensão de linguagem natural avançada." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] hover:border-indigo-400 transition-all text-left group">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black transition-colors">0{i + 1}</div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">{item.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white" id="calculadora">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-sm overflow-hidden text-left relative">
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Simulação Técnica</h2>
                  <p className="text-sm text-slate-500 font-medium mb-12">Ajuste os parâmetros para planejar seu investimento na Fase 02.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">Número de Canais</label>
                  <input
                    type="range" min="1" max="5" value={channels}
                    onChange={(e) => setChannels(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between mt-4 text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                    <span>1 Canal</span>
                    <span>{channels} Canais Selecionados</span>
                    <span>5+ Canais</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map(v => (
                    <button
                      key={v}
                      onClick={() => setComplexity(v)}
                      className={`p-5 rounded-2xl border transition-all text-left ${complexity === v ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl' : 'bg-white border-slate-200 text-slate-400 hover:border-indigo-400'} `}
                    >
                      <span className="block text-[10px] font-black uppercase tracking-widest mb-1">{v === 1 ? 'Simples' : v === 2 ? 'Médio' : 'Pro'}</span>
                      <span className={`text-[8px] font-bold uppercase tracking-tighter ${complexity === v ? 'text-indigo-200' : 'text-slate-300'} `}>Complexidade</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Ativar Inteligência Artificial</span>
                  <button
                    onClick={() => setUseIA(!useIA)}
                    className={`w-14 h-7 rounded-full transition-all relative ${useIA ? 'bg-indigo-600' : 'bg-slate-300'} `}
                  >
                    <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${useIA ? 'right-1' : 'left-1'} `}></div>
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-between shadow-2xl">
                <div>
                  <h4 className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.2em] mb-12">Investimento Estimado</h4>
                  <div className="space-y-10">
                    <div className="border-b border-white/10 pb-10">
                      <span className="block text-slate-500 text-[10px] uppercase font-black tracking-widest mb-3">Setup Fase 02 (Único)</span>
                      <span className="text-5xl font-black tracking-tighter">R$ {pricing.setup.toLocaleString('pt-BR')}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase font-black tracking-widest mb-3">Mensalidade Unificada</span>
                      <span className="text-5xl font-black tracking-tighter text-indigo-400">R$ {pricing.mensal.toLocaleString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate(Page.Contact)}
                  className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black mt-12 hover:bg-slate-100 transition-all uppercase tracking-widest text-[10px]"
                >
                  Agendar Diagnóstico
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">Dúvidas Técnicas</h2>
          <div className="space-y-4 text-left">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-[11px] text-slate-800 uppercase tracking-widest">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === idx ? 'rotate-180 bg-slate-900 text-white' : ''} `}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter leading-none">Pronto para a <span className="text-indigo-400 font-normal italic">evolução</span>?</h2>
          <button
            onClick={() => onNavigate(Page.Contact)}
            className="bg-indigo-600 text-white px-12 py-5 rounded-2xl text-[10px] font-black hover:bg-indigo-500 transition-all shadow-2xl uppercase tracking-[0.2em]"
          >
            Falar com especialista agora
          </button>
        </div>
      </section>
    </div>
  );
};
