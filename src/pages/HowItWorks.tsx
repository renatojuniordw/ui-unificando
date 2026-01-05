
import React from 'react';
import { Page } from '../types';
import { SEO } from '../components/SEO';

export const HowItWorks: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <SEO
        title="Como Funciona o Método Unificando | Processo Passo a Passo"
        description="Entenda o método Unificando de evolução digital: Organização, Automação e Presença. Um caminho claro para o crescimento do seu negócio."
        canonical="/como-funciona"
      />
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Processo Unificado</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">O Método.</h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">Simples, direto e focado em maturidade digital.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-24 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block -translate-x-1/2"></div>

            {[
              { id: "01", t: "Organização Total", d: "Arrumamos a casa. Centralizamos suas mensagens para que você retome o controle absoluto do que entra e sai do seu negócio.", color: "bg-slate-900" },
              { id: "02", t: "Evolução Responsável", d: "Identificamos o que pode ser automatizado. Criamos fluxos que agilizam processos sem que o atendimento pareça robótico.", color: "bg-indigo-600" },
              { id: "03", t: "Autoridade de Marca", d: "Construímos sua vitrine profissional. Agora que a operação está sólida, garantimos que sua marca seja encontrada com respeito.", color: "bg-indigo-400" }
            ].map((step, i) => (
              <div key={i} className={`relative grid md:grid-cols-2 gap-12 items-center text-left ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:text-left order-1 md:order-2'}`}>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{step.id}. {step.t}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{step.d}</p>
                </div>
                <div className={`flex justify-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end order-2 md:order-1'}`}>
                  <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center text-xl font-black z-10 shadow-2xl border-4 border-white`}>{i + 1}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 md:p-20 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px]"></div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter relative z-10">Crescer sem <span className="text-indigo-400 italic font-normal">bagunça</span>.</h3>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium relative z-10 uppercase text-[10px] tracking-widest">Essa é a nossa postura em cada configuração que fazemos.</p>
            <button
              onClick={() => onNavigate(Page.Contact)}
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-100 transition-all uppercase tracking-widest relative z-10"
            >
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
