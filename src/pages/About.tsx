import React from "react";

import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ROUTES } from "../routes";

export const About: React.FC = () => {
  return (
    <PageTransition className="bg-white">
      <SEO
        title="Sobre a Unificando | Laboratório de Projetos Autorais"
        description="Conheça o laboratório: produtos digitais, ferramentas com IA e projetos autorais."
        canonical={ROUTES.ABOUT}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "datePublished": "2024-01-01",
          "dateModified": "2026-03-12",
          "mainEntity": {
            "@id": "https://unificando.com.br/#organization",
            "@type": "Organization",
            "name": "Unificando Digital",
            "foundingDate": "2024",
            "description": "Laboratório de projetos autorais, ferramentas utilitárias e sistemas com inteligência artificial.",
            "url": "https://unificando.com.br",
            "logo": "https://unificando.com.br/assets/img/LOGO_UNIFICANDO.svg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Recife",
              "addressRegion": "PE",
              "addressCountry": "BR"
            },
            "knowsAbout": [
              "Desenvolvimento de Produtos Digitais",
              "Inteligência Artificial Aplicada",
              "Ferramentas Utilitárias Web",
              "Desenvolvimento Web Full-stack",
              "Sistemas de Automação Inteligente"
            ]
          }
        }}
      />

      {/* Header / Manifesto Intro */}
      <section className="py-24 md:py-32 bg-[#ccff00] border-b-8 border-slate-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block bg-white text-slate-950 font-black uppercase tracking-widest text-xs mb-8 px-4 py-2 border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
            UNIFICANDO DIGITAL
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 mb-12 uppercase tracking-tighter leading-[0.9]">
            A NOSSA <br/>
            <span className="text-white bg-slate-950 px-4 inline-block -rotate-2 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">MISSÃO.</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-slate-950 mb-12 leading-none font-black tracking-tight max-w-4xl mx-auto uppercase">
            CONSTRUÍMOS PRODUTOS DIGITAIS QUE RESOLVEM <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950">PROBLEMAS REAIS.</span>
          </p>
          <div className="max-w-3xl mx-auto bg-white p-6 border-4 border-slate-950 shadow-[8px_8px_0px_#000]">
            <p className="text-slate-950 font-mono font-bold text-xl uppercase">
              PROJETOS AUTORAIS, FERRAMENTAS UTILITÁRIAS E SISTEMAS COM IA.
            </p>
          </div>
        </div>
      </section>

      {/* Somos vs Não Somos */}
      <section className="py-24 bg-white border-b-8 border-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* O Que Somos */}
            <div className="bg-[#ccff00] p-8 md:p-12 border-4 border-slate-950 shadow-[8px_8px_0px_#000]">
              <div className="inline-block bg-slate-950 text-white font-black uppercase tracking-widest text-xs px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000] mb-8">
                O QUE SOMOS
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.9]">
                LABORATÓRIO DE <br />
                <span className="block mt-2 bg-white px-2 border-4 border-slate-950 shadow-[4px_4px_0px_#000] w-max">PRODUTOS.</span>
              </h3>

              <div className="space-y-6 text-slate-950 font-mono font-bold uppercase leading-relaxed text-sm">
                <p>
                  Criamos produtos digitais que resolvem problemas reais. Ferramentas utilitárias, sistemas inteligentes e projetos autorais — tudo que construímos nasce de uma necessidade concreta.
                </p>
                <div className="bg-slate-950 text-white p-4 border-2 border-slate-950">
                  <p>
                    A TECNOLOGIA TRABALHA PARA O SEU NEGÓCIO. NUNCA O
                    CONTRÁRIO.
                  </p>
                </div>
              </div>
            </div>

            {/* O Que NÃO Somos */}
            <div className="bg-slate-950 text-white p-8 md:p-12 border-4 border-slate-950 shadow-[8px_8px_0px_#ccff00]">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white font-black uppercase tracking-widest text-xs px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#fff] mb-8">
                <span className="w-3 h-3 bg-white border-2 border-slate-950 flex items-center justify-center text-[8px] text-red-500">X</span>
                O QUE NÃO SOMOS
              </div>

              <ul className="space-y-6 mb-10 text-white font-mono font-bold uppercase text-lg">
                <li className="flex items-start gap-4 border-b-2 border-slate-800 pb-4">
                  <span className="text-red-500 font-black text-2xl leading-none">✕</span>
                  <span>NÃO SOMOS GURUS.</span>
                </li>
                <li className="flex items-start gap-4 border-b-2 border-slate-800 pb-4">
                  <span className="text-red-500 font-black text-2xl leading-none">✕</span>
                  <span>NÃO PROMETEMOS MILAGRES.</span>
                </li>
                <li className="flex items-start gap-4 pb-4">
                  <span className="text-red-500 font-black text-2xl leading-none">✕</span>
                  <span>NÃO VENDEMOS O QUE NÃO CONSTRUÍMOS.</span>
                </li>
              </ul>

              <div className="bg-white text-slate-950 font-black uppercase p-4 border-4 border-slate-950 shadow-[4px_4px_0px_#red-500] mt-auto">
                CADA PROJETO É UMA DEMONSTRAÇÃO DO QUE SABEMOS FAZER. SEM HYPE, SEM PROMESSAS VAZIAS.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="inline-block bg-slate-950 text-white px-6 py-3 border-4 border-slate-950 text-4xl md:text-5xl font-black uppercase tracking-tighter shadow-[8px_8px_0px_#ccff00]">
              NOSSOS PRINCÍPIOS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "CONTINUIDADE",
                description:
                  "Soluções pensadas para durar, crescer e escalar com segurança.",
              },
              {
                id: "02",
                title: "TRANSPARÊNCIA",
                description:
                  "Você sabe exatamente o que está contratando, quanto custa e por quê.",
              },
              {
                id: "03",
                title: "SUPORTE REAL",
                description:
                  "Problemas acontecem. Quando acontecerem, você fala com pessoas, não com filas infinitas.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-[#ccff00] border-4 border-slate-950 shadow-[8px_8px_0px_#000] relative hover:-translate-y-2 transition-transform"
              >
                <span className="absolute -top-6 -right-6 bg-white text-slate-950 text-4xl font-black border-4 border-slate-950 w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_#000]">
                  {principle.id}
                </span>
                <h4 className="font-black text-slate-950 text-2xl uppercase tracking-tighter mb-4 pr-12 leading-none">
                  {principle.title}
                </h4>
                <p className="text-sm text-slate-950 font-mono font-bold leading-relaxed uppercase bg-white p-4 border-2 border-slate-950 mt-auto shadow-[4px_4px_0px_#000]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Constroi */}
      <section className="py-24 bg-slate-950 text-white border-t-8 border-[#ccff00]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-widest text-xs px-3 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#fff] mb-8">
            QUEM CONSTRÓI
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
            Por trás do<br />
            <span className="text-[#ccff00]">laboratório</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            A Unificando é um projeto de <strong className="text-white">Renato Bezerra</strong> — 
            Engenheiro de Software com +7 anos de experiência, especializado em front-end de alta performance, 
            IA generativa e automações inteligentes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-slate-800 text-slate-300 px-4 py-2 border border-slate-700 text-xs font-black uppercase tracking-widest">Front-end & IA</span>
            <span className="bg-slate-800 text-slate-300 px-4 py-2 border border-slate-700 text-xs font-black uppercase tracking-widest">Automações com n8n</span>
            <span className="bg-slate-800 text-slate-300 px-4 py-2 border border-slate-700 text-xs font-black uppercase tracking-widest">Arquitetura de Software</span>
          </div>
          <a
            href="https://renatobezerra.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ccff00] text-slate-950 px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all border-2 border-[#ccff00] shadow-[6px_6px_0px_#fff]"
          >
            CONHECER RENATO →
          </a>
        </div>
      </section>
    </PageTransition>
  );
};
