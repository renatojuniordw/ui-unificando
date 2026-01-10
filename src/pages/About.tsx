import React from 'react';

import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      <SEO
        title="Sobre o Unificado | Manifesto Digital"
        description="Nossa postura: clareza, responsabilidade e tecnologia como estrutura, não espetáculo."
        canonical="/sobre"
      />

      {/* Header / Manifesto Intro */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">Unificado Digital</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Nossa Postura.</h1>
          <p className="text-xl md:text-3xl text-slate-600 mb-8 leading-tight font-black tracking-tight max-w-3xl mx-auto">
            Nascemos para ser o porto seguro de quem vende no digital.
          </p>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
            <p>
              Em um mercado cheio de promessas fáceis e soluções mágicas, escolhemos a clareza, a responsabilidade e o longo prazo.
            </p>
            <p className="text-slate-900 font-bold">
              Aqui, tecnologia não é espetáculo. É estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Somos vs Não Somos */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative z-10">

            {/* O Que Somos */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-slate-900"></div>
                <span className="text-slate-900 font-black uppercase tracking-widest text-xs">O que somos</span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
                Especialistas em <br /> <span className="text-indigo-600">Processos e Operação.</span>
              </h3>

              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Usamos tecnologia para organizar, escalar e dar previsibilidade ao seu negócio — sempre com métricas reais, decisões conscientes e estrutura bem feita.
                </p>
                <p className="text-slate-900 font-bold border-l-4 border-indigo-600 pl-4 py-1">
                  A tecnologia trabalha para o seu negócio. <br /> Nunca o contrário.
                </p>
              </div>
            </div>

            {/* O Que NÃO Somos */}
            <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-10 right-10 text-6xl opacity-10">🚫</div>
              <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                O que NÃO somos
              </h3>

              <ul className="space-y-4 mb-10 text-slate-300 font-medium">
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Não somos gurus.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Não prometemos milagres.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Não vendemos robôs que “vendem sozinhos”.</span>
                </li>
              </ul>

              <p className="text-sm font-medium text-slate-400 border-t border-white/10 pt-8 mt-auto">
                Fugimos do hype vazio. Nosso foco é resolver problemas reais, com soluções que funcionam no dia a dia.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-tighter">Nossos Princípios</h2>

          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { id: "01", t: "Continuidade", d: "Soluções pensadas para durar, crescer e escalar com segurança." },
              { id: "02", t: "Transparência", d: "Você sabe exatamente o que está contratando, quanto custa e por quê." },
              { id: "03", t: "Suporte real", d: "Problemas acontecem. Quando acontecerem, você fala com pessoas, não com filas infinitas." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl font-black text-indigo-100 self-start">{item.id}</span>
                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{item.t}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
