import React from "react";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { CtaButton } from "../components/common/CtaButton";
import { ROUTES } from "../routes";
import { MethodPhase } from "../features/method/components/MethodPhase";

export const HowItWorks: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Método | Laboratório Unificando"
        description="Metodologia do laboratório: prototipação, validação e deploy de projetos digitais — da ideia ao produto no ar."
        canonical={ROUTES.HOW_IT_WORKS}
        keywords="metodologia desenvolvimento, prototipação, validação, deploy, processo ágil, produtos digitais, laboratório digital"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Método de Trabalho Unificando",
          step: [
            {
              "@type": "HowToStep",
              name: "Fase 1: Prototipação",
              text: "Entendemos o problema, desenhamos a solução e criamos protótipo funcional.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 2: Validação",
              text: "Testamos com usuários reais e iteramos baseado em feedback.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 3: Deploy",
              text: "Colocamos no ar com infraestrutura profissional e monitoramento contínuo.",
            },
          ],
        }}
      />

      <section className="py-32 bg-white border-b-4 border-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="inline-block bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
            A NOSSA FORMA DE ATUAR
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 mb-10 uppercase tracking-tighter leading-[0.9]">
            PROJETOS QUE <br />
            <span className="text-white bg-[#ccff00] text-slate-950 px-2 inline-block rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">RESOLVEM.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-950 font-black uppercase tracking-tight mb-8">
            DA IDEIA AO PRODUTO.
          </p>
          <div className="bg-[#ccff00] border-4 border-slate-950 p-6 shadow-[8px_8px_0px_#000] inline-block mt-4">
            <p className="text-lg md:text-xl text-slate-950 font-mono font-bold max-w-2xl mx-auto uppercase">
              Da ideia ao produto. Cada projeto segue um processo testado e adaptável.
            </p>
          </div>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-slate-950 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-32">
            <MethodPhase
              phase="FASE 01"
              title="PROTOTIPAGEM"
              subtitle="Fase de descoberta e ideação"
              description="Entendemos o problema, desenhamos a solução e criamos um protótipo funcional."
              items={[
                "Mapeamos o problema e o escopo",
                "Desenhamos a arquitetura da solução",
                "Criamos protótipo funcional",
              ]}
              icon="📂"
              side="left"
              variant="lime"
              example="O Radar Unificando começou como um protótipo de busca de vagas — em uma tarde, já era possível consultar o Gupy ao vivo."
            />

            <MethodPhase
              phase="FASE 02"
              title="VALIDAÇÃO"
              subtitle="Fase de teste e iteração"
              description="Testamos com usuários reais, iteramos com base em feedback e ajustamos o escopo."
              items={[
                "Testamos com usuários reais",
                "Coletamos e priorizamos feedback",
                "Ajustamos escopo e funcionalidades",
              ]}
              icon="⚡"
              side="right"
              variant="white"
              example="O Med Unificando foi validado com usuários reais antes de ganhar preços CMED, exportação, sincronização automática e o MCP Server para agentes de IA."
            />

            <MethodPhase
              phase="FASE 03"
              title="DEPLOY"
              subtitle="Fase de produção e entrega"
              description="Colocamos no ar com infraestrutura profissional, monitoramento e iteração contínua."
              items={[
                "Deploy em infraestrutura profissional",
                "Monitoramento e iteração contínua",
                "Documentação e transferência de conhecimento",
              ]}
              icon="🌐"
              side="left"
              variant="lime"
              iconClassName="bg-white text-slate-950 shadow-[8px_8px_0px_#000]"
              example="O PDF Unificando está no ar com processamento efêmero, fila de concorrência e monitoramento contínuo."
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#ccff00] text-slate-950 border-y-4 border-slate-950 relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="inline-block bg-white border-2 border-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_#000]">
            O CICLO NÃO PARA
          </span>
          <h3 className="text-5xl md:text-7xl font-black mb-16 uppercase tracking-tighter leading-[0.9]">
            UMA JORNADA<br/> CONTÍNUA
          </h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 text-left">
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                01. FLEXÍVEL
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Cada projeto começa onde faz sentido. O processo se adapta ao problema — não o contrário.
              </p>
            </div>
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                02. RÁPIDO
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Ciclos curtos e protótipos funcionais cedo. Velocidade sem sacrificar qualidade.
              </p>
            </div>
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                03. AUTORAL
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Cada projeto é autoral e testado de verdade. Nada é imposto, tudo é validado com uso real.
              </p>
            </div>
          </div>

          <p className="text-slate-950 font-bold mb-12 max-w-lg mx-auto text-[11px] uppercase tracking-[0.2em] leading-loose">
            Projetos autorais, produtos utilitários ou sistemas com IA — o processo é o mesmo.
          </p>

          <CtaButton label="Quero falar de uma ideia" />
        </div>
      </section>

      {/* Footer / Transparency */}
      <section className="py-16 bg-white border-b-4 border-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6 p-2 bg-slate-950 text-[#ccff00] border-2 border-slate-950 uppercase tracking-widest font-black text-[10px] shadow-[4px_4px_0px_#000]">
            TRANSPARÊNCIA COMO BASE
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-black text-slate-950 uppercase tracking-wide">
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Foco no Problema</span>
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Apenas o que Resolve</span>
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Sem Promessas Mágicas</span>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};