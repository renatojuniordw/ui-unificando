import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { motion } from 'framer-motion';
import { SEO } from '../components/common/SEO';

import { PageTransition } from '../components/common/PageTransition';
import { HeroIllustration } from '../features/home/HeroIllustration';

// Internal staggered animation for content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <SEO
        title="Unificando | Ecossistema de Atendimento e Automação"
        description="Pare de perder vendas. Centralize seu WhatsApp e Instagram, automatize o atendimento com IA e tenha um site profissional. Teste o ecossistema Unificando."
        canonical="/"
      />

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
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Organize o atendimento. <span className="block text-indigo-600">Evolua com responsabilidade.</span> <span className="block text-slate-400">Construa autoridade.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Centralizamos seu atendimento no WhatsApp, instagram e site, automatizamos processos com critério e criamos sua vitrine profissional na web. A estrutura certa para o seu negócio crescer sem bagunça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(ROUTES.PLANS)}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-[0.2em]"
              >
                Simular minha solução
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(ROUTES.SOLUTIONS)}
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-50 transition-all uppercase tracking-[0.2em]"
              >
                Conhecer as soluções
              </motion.button>
            </div>

            <div className="text-sm">
              <span className="opacity-80 font-medium text-slate-500">Já é cliente?  <a href="https://painel.unificando.com.br" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">Acesse o portal de atendimento</a></span>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">Resultados na Prática</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Menos tempo perdido", value: "80%" },
              { label: "Vendas recuperadas", value: "+35%" },
              { label: "Canais organizados", value: "100%" },
              { label: "Satisfação média", value: "9.8" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
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
              O digital não deveria ser um caos.
            </h2>
            <p className="text-lg text-slate-500 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
              Perda de mensagens, demora no atendimento e ausência no Google não são falta de esforço — são falta de estrutura. O método Unificando resolve a base do seu negócio.
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
              { t: "Desorganização", d: "Mensagens espalhadas, histórico perdido e ninguém sabe quem respondeu o quê.", icon: "✕" },
              { t: "Esforço Repetitivo", d: "Sua equipe gastando tempo com tarefas que poderiam ser automatizadas com segurança.", icon: "↻" },
              { t: "Invisibilidade", d: "Enquanto seu concorrente aparece no Google, seu negócio não tem presença própria.", icon: "∅" }
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

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Nossas Soluções</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">O que fazemos</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Contrate de forma modular ou completa. Cada solução funciona sozinha — juntas, formam um ecossistema.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Atendimento */}
            <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
              <div className="absolute -top-3 left-10 bg-indigo-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Atendimento</div>
              <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Organização</h3>
              <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Centralize todos os canais em um único painel profissional. Tenha controle, histórico e atendimento em equipe.</p>
              <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                Simular atendimento
              </button>
            </motion.div>

            {/* Processos */}
            <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
              <div className="absolute -top-3 left-10 bg-indigo-400 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Processos</div>
              <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Evolução</h3>
              <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Automatizamos o que faz sentido e implementamos IA com responsabilidade, sem perder o toque humano.</p>
              <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                Simular com IA
              </button>
            </motion.div>

            {/* Vitrine */}
            <motion.div whileHover={{ y: -10 }} className="relative p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all group text-left">
              <div className="absolute -top-3 left-10 bg-slate-900 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest">Vitrine</div>
              <h3 className="text-3xl font-black mb-4 mt-6 uppercase tracking-tighter text-slate-900">Presença</h3>
              <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">Construímos sua casa própria na internet para que sua empresa seja encontrada, respeitada e lembrada.</p>
              <button onClick={() => navigate(ROUTES.PLANS)} className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[10px] tracking-[0.2em]">
                Simular site
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Uma jornada clara de crescimento</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-indigo-400 font-bold block mb-2">01.</span>
              <p className="text-sm font-medium text-slate-300">Comece organizando o atendimento.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-indigo-400 font-bold block mb-2">02.</span>
              <p className="text-sm font-medium text-slate-300">Evolua com automações e IA.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <span className="text-indigo-400 font-bold block mb-2">03.</span>
              <p className="text-sm font-medium text-slate-300">Fortaleça sua marca com presença digital.</p>
            </div>
          </div>

          <p className="text-slate-400 font-medium mb-12 max-w-lg mx-auto text-sm uppercase tracking-widest">Ou monte tudo de uma vez. O caminho se adapta ao seu momento.</p>

          <button
            onClick={() => navigate(ROUTES.PLANS)}
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-200 transition-all shadow-2xl uppercase tracking-widest"
          >
            Simular minha solução
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
            <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none text-slate-900">Pronto para evoluir <span className="text-indigo-600 italic">sem bagunça?</span></h2>
            <p className="text-lg text-slate-500 mb-12 max-w-xl mx-auto font-medium">Estrutura sólida, preço transparente e soluções sob medida.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(ROUTES.PLANS)}
                className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-[10px] font-black shadow-2xl uppercase tracking-[0.2em] hover:bg-slate-800"
              >
                Simular agora
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(ROUTES.CONTACT)}
                className="bg-white border border-slate-200 text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black shadow-sm uppercase tracking-[0.2em] hover:bg-slate-50"
              >
                Agendar diagnóstico
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
