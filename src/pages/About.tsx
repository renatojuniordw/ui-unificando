
import React from 'react';

import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      <SEO
        title="Sobre o Unificando | Nossa Missão e Postura"
        description="Somos contra o 'digital bagunçado'. Conheça a missão do Unificando de levar maturidade digital real para pequenos negócios."
        canonical="/sobre"
      />
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Unificado Digital</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Nossa Postura.</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-left">
          <p className="text-xl md:text-2xl text-slate-500 mb-20 leading-relaxed font-medium">
            Nascemos para ser o porto seguro de quem vende no digital. Em um mercado de promessas mágicas, escolhemos a <strong className="font-black text-slate-900 tracking-tight">clareza e o longo prazo.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
              <h3 className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-widest">O que somos</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Especialistas em processos. Acreditamos que a tecnologia deve servir ao negócio, e não o contrário. Trabalhamos com métricas reais e organização impecável.
              </p>
            </div>
            <div className="p-10 bg-slate-900 text-white rounded-[3rem] border border-slate-800">
              <h3 className="text-[10px] font-black text-indigo-400 mb-6 uppercase tracking-widest">O que NÃO somos</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Não somos gurus, não prometemos milagres e não vendemos robôs que trabalham sozinhos. Fugimos do hype vazio e focamos em resolver sua dor.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {[
              { id: "01", t: "Continuidade", d: "Soluções feitas para durar e escalar com segurança." },
              { id: "02", t: "Transparência", d: "Você sabe exatamente o que está pagando e por quê." },
              { id: "03", t: "Suporte Real", d: "Problemas acontecem. Estaremos aqui para resolver, sem tickets infinitos." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <span className="text-indigo-600 font-black text-4xl opacity-20">{item.id}</span>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-2">{item.t}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
