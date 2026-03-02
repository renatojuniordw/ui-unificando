import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { motion } from "framer-motion";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";

// Animação de Scroll e Construção de Landing Page
import { LandingPageAnimation } from "../features/digital-presence/LandingPageAnimation";
import { FAQSection } from "../features/digital-presence/FAQSection";

import { PRICING } from "../constants/pricing";

export const DigitalPresence: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <SEO
        title="Sites Profissionais e Presença Digital | Unificando"
        description="Tenha uma casa própria na internet. Sites rápidos, profissionais e otimizados para o Google."
        canonical="/presenca-digital"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Development",
          provider: {
            "@type": "Organization",
            name: "Unificando",
          },
          name: "Sites e Presença Digital",
          description:
            "Desenvolvimento de sites profissionais, landing pages e otimização SEO.",
          offers: {
            "@type": "Offer",
            priceCurrency: "BRL",
            price: PRICING.site.landing.setup.toString(),
            priceValidUntil: "2025-12-31",
          },
        }}
      />

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden text-left border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
              Presença Digital & Autoridade
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Seu negócio precisa de uma{" "}
              <span className="text-indigo-600">casa própria na internet.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Redes sociais são terrenos alugados. O site é a sua vitrine
              oficial, onde sua marca é encontrada no Google, transmite
              confiança e trabalha por você 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => navigate(ROUTES.CONTACT)}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-black hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest"
              >
                Construir minha presença
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <LandingPageAnimation />
          </div>
        </div>
      </section>

      {/* 2. O Que Entregamos */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              O que entregamos
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Criamos sites rápidos, profissionais e focados em resultado — sem
              excesso, sem complicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Landing pages profissionais", icon: "🚀" },
              { title: "Sites institucionais estáticos", icon: "🏢" },
              { title: "Performance e carregamento rápido", icon: "⚡" },
              { title: "Estrutura pensada para SEO (Google)", icon: "🔍" },
              { title: "Visual alinhado à sua marca", icon: "🎨" },
              { title: "Foco em conversão", icon: "🎯" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">
              Ideal Para:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Apresentar sua empresa",
                "Divulgar serviços",
                "Captar contatos",
                "Fortalecer autoridade online",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investimento & Escala CTA */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-24 shadow-3xl overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto">
              <span className="text-indigo-400 font-black uppercase tracking-[0.25em] text-[10px] mb-6 block">
                Investimento Estratégico
              </span>
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
                Sua presença digital <br />{" "}
                <span className="text-indigo-400 italic">
                  sem custos surpresa.
                </span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                Trabalhamos com uma estrutura de investimento modular e
                transparente. Você investe na base profissional e escala novos
                recursos conforme a necessidade real do seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(ROUTES.PLANS)}
                  className="bg-indigo-600 text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-indigo-600/20"
                >
                  Simular Projeto Completo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(ROUTES.CONTACT)}
                  className="bg-transparent border border-white/10 text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                >
                  Solicitar Briefing Gratuito
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integração */}
      <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
            Integração Total
          </h2>
          <p className="text-indigo-100 text-lg font-medium mb-12 max-w-2xl mx-auto">
            Conecte seu site diretamente aos seus canais de atendimento e
            converta mais visitantes.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 transition-all hover:bg-white/20">
              <span className="text-3xl mb-4 block">🔗</span>
              <h3 className="font-black uppercase tracking-wide text-sm mb-3">
                Redes Sociais
              </h3>
              <p className="text-sm text-indigo-100 font-medium leading-relaxed">
                Botões de conversão que levam seu cliente direto para o
                WhatsApp, Instagram ou qualquer outra rede social.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 relative overflow-hidden transition-all hover:bg-white/20">
              <div className="absolute top-0 right-0 bg-white text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">
                Grátis*
              </div>
              <span className="text-3xl mb-4 block">💬</span>
              <h3 className="font-black uppercase tracking-wide text-sm mb-3">
                Chat para Site
              </h3>
              <p className="text-sm text-indigo-100 font-medium leading-relaxed">
                Assinantes do plano{" "}
                <strong className="text-white">Atendimento Digital</strong>{" "}
                ganham nosso widget de chat profissional integrado ao site sem
                custo extra.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WhatsApp",
              "Instagram",
              "Telegram",
              "Atendimento Centralizado",
              "IA no Atendimento",
            ].map((channel, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-wider text-indigo-200"
              >
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
            Pronto para ter sua <br />
            <span className="text-indigo-600">Casa Própria na Web?</span>
          </h2>
          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl text-xs font-black hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 uppercase tracking-widest"
          >
            Solicitar Orçamento de Site
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
