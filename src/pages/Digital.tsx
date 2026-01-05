
import React, { useState } from 'react';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface DigitalProps {
  onNavigate: (page: Page) => void;
}

// Animação de Scroll e Construção de Landing Page
const LandingPageAnimation = () => {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl overflow-hidden relative border border-slate-800 h-[500px] group">
      <div className="bg-white rounded-[1.8rem] h-full flex flex-col overflow-hidden shadow-inner">
        {/* Browser Bar */}
        <div className="bg-slate-100 h-10 border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
          </div>
          <div className="h-4 w-48 bg-white border border-slate-200 rounded-full"></div>
          <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
        </div>
        
        {/* Animated Landing Page Content */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, -300, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="p-8 space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <div className="h-8 bg-slate-900 rounded-xl w-full"></div>
              <div className="h-3 bg-slate-200 rounded-full w-3/4 mx-auto"></div>
              <div className="h-10 bg-indigo-600 rounded-2xl w-32 mx-auto"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-28 bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col justify-end gap-2">
                   <div className="w-8 h-8 bg-indigo-100 rounded-lg"></div>
                   <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                   <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                </div>
              ))}
            </div>

            {/* Content Section */}
            <div className="space-y-4">
               <div className="h-40 bg-slate-100 rounded-3xl w-full"></div>
               <div className="h-4 bg-slate-200 rounded-full w-full"></div>
               <div className="h-4 bg-slate-200 rounded-full w-5/6"></div>
            </div>

            {/* Final CTA */}
            <div className="p-8 bg-slate-900 rounded-3xl text-center space-y-4">
               <div className="h-6 bg-white/20 rounded-lg w-1/2 mx-auto"></div>
               <div className="h-12 bg-indigo-600 rounded-2xl w-full"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-6 top-1/4 w-24 h-44 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 hidden lg:block"
      >
        <div className="bg-slate-50 h-full w-full rounded-xl p-2 flex flex-col gap-2">
           <div className="h-20 bg-slate-100 rounded-lg"></div>
           <div className="h-1 w-full bg-slate-200 rounded"></div>
           <div className="h-1 w-2/3 bg-slate-200 rounded"></div>
           <div className="mt-auto h-6 bg-indigo-600 rounded-lg"></div>
        </div>
      </motion.div>
    </div>
  );
};

export const Digital: React.FC<DigitalProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "O que é uma página estática?", a: "É um site com conteúdo fixo (textos e imagens) que não requer um painel de gerenciamento complexo ou atualizações diárias. É a solução perfeita para landing pages de vendas e sites institucionais de alta performance." },
    { q: "O site é meu ou eu pago aluguel?", a: "O site é 100% seu. Após o desenvolvimento, você tem total autonomia. O único custo recorrente é a renovação da hospedagem e domínio após o primeiro ano gratuito." },
    { q: "Aparecer no Google demora quanto tempo?", a: "O Google leva algum tempo para indexar novas páginas, mas entregamos o site com as melhores práticas de SEO de base para que você seja encontrado o quanto antes." },
    { q: "Como funciona a cobrança por página extra?", a: "O valor base de R$ 1.300 cobre a estrutura principal (Landing Page). Se você precisar de páginas internas adicionais (ex: 'Sobre', 'Serviços Detalhados'), cada uma adiciona apenas 10% (R$ 130) ao investimento total." }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Top Context Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs font-medium text-slate-500">
          <button onClick={() => onNavigate(Page.Home)} className="hover:text-slate-900 transition-colors font-bold uppercase">Início</button>
          <span>/</span>
          <span className="text-slate-900 font-bold uppercase tracking-tight">Presença Digital</span>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden text-left border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
              Fase 03: Presença e Autoridade
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Seu negócio precisa de uma <span className="text-slate-500 font-normal">casa própria na web.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Redes sociais são terrenos alugados. Construímos sua vitrine profissional para garantir que você seja encontrado por quem busca seu serviço no Google, 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onNavigate(Page.Contact)}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest"
              >
                Construir minha presença
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 text-left">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</div>
                <p className="text-sm font-bold text-slate-700 uppercase">Landing Pages Estáticas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</div>
                <p className="text-sm font-bold text-slate-700 uppercase">Foco em Performance</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <LandingPageAnimation />
          </div>
        </div>
      </section>

      {/* 2. Detalhes de Investimento */}
      <section className="py-24 bg-slate-50 text-left">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Transparência Unificada</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 leading-tight uppercase tracking-tighter">Investimento focado em resultados reais.</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden">
              <h4 className="font-bold text-slate-900 mb-4 text-2xl uppercase tracking-tight">Landing Page Profissional</h4>
              <div className="flex items-baseline gap-2 mb-6">
                 <span className="text-slate-400 font-bold text-sm uppercase">A partir de</span>
                 <span className="text-4xl font-black text-slate-900">R$ 1.300</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8">Páginas de alta conversão para conteúdos estáticos e fixos. Ideal para captar leads e apresentar sua empresa com autoridade.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  Domínio Grátis (1 ano)
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  Hospedagem Grátis (1 ano)
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  Otimização SEO (Google)
                </li>
              </ul>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                   * Valores válidos para conteúdos fixos. Não inclui sistemas complexos ou e-commerce.
                 </p>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 shadow-xl text-white relative flex flex-col justify-center">
              <h4 className="font-bold text-indigo-400 mb-4 text-xl uppercase tracking-widest">Crescimento Modular</h4>
              <p className="text-2xl font-bold leading-tight mb-6 uppercase tracking-tight">Expandindo sua estrutura</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Se o seu negócio precisa de mais do que uma página, nossa estrutura é modular e justa.</p>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-sm font-bold uppercase">Página Adicional</span>
                  <span className="text-xl font-black text-indigo-400">+ 10% <span className="text-xs text-white/50">(R$ 130)</span></span>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed italic">
                  Adicione páginas de blog, galerias de fotos ou descrições detalhadas de serviços mantendo a mesma identidade visual e performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12 uppercase tracking-tight">Dúvidas Frequentes</h2>
          <div className="space-y-4 text-left">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-7 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-extrabold text-slate-800">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === idx ? 'rotate-180 bg-slate-900 text-white' : ''}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                {activeFaq === idx && (
                  <div className="px-7 pb-7 text-slate-500 text-sm leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-slate-100 uppercase tracking-widest"
          >
            Falar com um Especialista
          </button>
        </div>
      </section>
    </div>
  );
};
