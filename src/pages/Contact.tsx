
import React from 'react';

import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      <SEO
        title="Fale Conosco | Atendimento Especializado Unificando"
        description="Entre em contato com nossa equipe. Tire dúvidas, peça um orçamento ou agende uma demonstração das nossas soluções."
        canonical="/contato"
      />
      <section className="py-24 bg-slate-50 min-h-[80vh] flex items-center text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">Vamos Conversar</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">Fale com um <span className="text-indigo-600">Especialista.</span></h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
              Oferecemos uma consultoria diagnóstica gratuita para entender qual fase do ecossistema seu negócio precisa agora.
            </p>

            <div className="space-y-6">
              {[
                { t: "Diagnóstico Real", d: "Análise do seu fluxo atual sem custo." },
                { t: "Postura Consultiva", d: "Foco total na sua dor, sem pressão de venda." },
                { t: "Resposta Ágil", d: "Retorno em menos de 2 horas em horário comercial." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs">✓</div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">{item.t}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-800 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px]"></div>
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-indigo-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Mensagem Recebida</h3>
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest">Aguarde nosso contato via WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">Nome Completo</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all" placeholder="Como devemos te chamar?" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">WhatsApp</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">Seu Desafio</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-black text-xs uppercase tracking-widest appearance-none">
                    <option className="bg-slate-900">Atendimento Caótico</option>
                    <option className="bg-slate-900">Preciso Automar</option>
                    <option className="bg-slate-900">Quero um Site</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-[10px] hover:bg-indigo-500 transition-all shadow-xl uppercase tracking-[0.2em] mt-6">
                  Agendar Conversa
                </button>
                <p className="text-center text-[8px] font-black text-slate-600 mt-6 uppercase tracking-[0.3em]">Dados seguros. Sem Spam.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
