
import React from 'react';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Ecossistema Unificando
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Organize o atendimento. <span className="text-slate-500 font-normal">Depois, evolua.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Centralizamos seus canais, automatizamos com responsabilidade e criamos sua vitrine profissional. A estrutura que seu negócio merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(Page.Contact)}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-[0.2em]"
              >
                Falar com especialista
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(Page.Solutions)}
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-50 transition-all uppercase tracking-[0.2em]"
              >
                Conhecer soluções
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-900 rounded-[3.5rem] aspect-square flex items-center justify-center p-12 shadow-2xl relative z-10 overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
              <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] w-full h-full border border-white/10 flex flex-col p-8 text-white text-left">
                <div className="flex justify-between items-center mb-12">
                  <div className="h-4 w-32 bg-white/20 rounded-full"></div>
                  <div className="h-10 w-10 bg-indigo-500 rounded-2xl flex items-center justify-center font-black">U</div>
                </div>
                <div className="space-y-6">
                  <motion.div animate={{ width: ["40%", "85%", "40%"] }} transition={{ repeat: Infinity, duration: 4 }} className="h-12 bg-white/10 rounded-xl"></motion.div>
                  <motion.div animate={{ width: ["75%", "55%", "75%"] }} transition={{ repeat: Infinity, duration: 5 }} className="h-12 bg-white/10 rounded-xl"></motion.div>
                  <motion.div animate={{ width: ["35%", "65%", "35%"] }} transition={{ repeat: Infinity, duration: 3.5 }} className="h-12 bg-indigo-500/30 rounded-xl"></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Tempo economizado", value: "80%" },
            { label: "Vendas recuperadas", value: "+35%" },
            { label: "Canais unificados", value: "100%" },
            { label: "Média Satisfação", value: "9.8" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O Problema</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-tight">
              O digital não deve ser um caos.
            </h2>
            <p className="text-lg text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
              Perda de leads, demora no atendimento e invisibilidade no Google. Resolva a fundação do seu negócio de uma vez por todas com o método Unificando.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { t: "Desorganização", d: "Mensagens perdidas e falta de histórico centralizado.", icon: "✕" },
              { t: "Esforço Repetitivo", d: "Sua equipe presa em respostas que poderiam ser automatizadas.", icon: "↻" },
              { t: "Invisibilidade", d: "Seu concorrente sendo achado no Google, enquanto você não existe.", icon: "∅" }
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm group hover:border-indigo-400 transition-all">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-3 text-[10px] uppercase tracking-[0.2em]">{item.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O Caminho</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">A evolução em fases</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Cada negócio tem seu tempo. Respeitamos sua maturidade digital.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: "FASE 01", title: "Organização", desc: "Centralize tudo em um único painel. Retome o controle.", link: Page.CustomerService, color: "bg-indigo-600" },
              { phase: "FASE 02", title: "Evolução", desc: "Automatize processos repetitivos com inteligência.", link: Page.Automation, color: "bg-indigo-400" },
              { phase: "FASE 03", title: "Presença", desc: "Sua casa própria na web com autoridade máxima.", link: Page.DigitalPresence, color: "bg-slate-900" },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left"
              >
                <div className={`absolute -top-3 left-10 ${p.color} text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest`}>{p.phase}</div>
                <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">{p.title}</h3>
                <p className="text-slate-500 mb-10 font-medium text-sm leading-relaxed">{p.desc}</p>
                <button onClick={() => onNavigate(p.link)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                  Ver solução <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Pronto para a <span className="text-indigo-400 font-normal italic">evolução</span>?</h2>
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto font-medium">Estrutura sólida para crescer sem bagunça. Vamos conversar?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(Page.Contact)}
              className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black shadow-2xl uppercase tracking-[0.2em] hover:bg-slate-100"
            >
              Falar com especialista
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
