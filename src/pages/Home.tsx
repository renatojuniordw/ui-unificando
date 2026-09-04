import React from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ROUTES } from "../routes";
import { DEVTOOLS, OPEN_SERVERS } from "../constants/devtools";
import { HeroSection } from "../features/home/components/HeroSection";
import { ProjectsSection } from "../features/home/components/ProjectsSection";
import { DevToolsSection } from "../features/home/components/DevToolsSection";
import { RoadmapSection } from "../features/home/components/RoadmapSection";
import { CapabilitiesSection } from "../features/home/components/CapabilitiesSection";
import { SolutionsSection } from "../features/home/components/SolutionsSection";
import { JourneySection } from "../features/home/components/JourneySection";
import { CtaSection } from "../features/home/components/CtaSection";

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Unificando | Laboratório de Projetos Autorais & IA"
        description="Laboratório de projetos autorais e P&D: ferramentas utilitárias, sistemas com inteligência artificial e produtos digitais — da ideia ao deploy."
        canonical={ROUTES.HOME}
        keywords="Unificando, laboratório digital, projetos autorais, IA aplicada, ferramentas utilitárias, produtos digitais, P&D, inteligência artificial, desenvolvimento de produto, Recife"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://unificando.com.br/#website",
              "name": "Unificando",
              "url": "https://unificando.com.br",
              "datePublished": "2024-01-01",
              "dateModified": "2026-09-02",
              "potentialAction": {
                "@type": "SearchAction",
                target: "https://unificando.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://unificando.com.br/#organization",
              "name": "Unificando",
              "description": "Laboratório de Projetos Autorais & IA — ferramentas utilitárias, sistemas com inteligência artificial e produtos digitais.",
              "url": "https://unificando.com.br",
              "logo": "https://unificando.com.br/assets/img/LOGO_UNIFICANDO.svg",

              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Recife",
                "addressRegion": "PE",
                "addressCountry": "BR",
              },
              "sameAs": ["https://instagram.com/unificando.digital"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55 81 99555-7302",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese",
              },
            },
          ],
        }}
      />

      <HeroSection />
      <ProjectsSection />
      <DevToolsSection
        id="devtools"
        title={
          <>
            FERRAMENTAS <span className="bg-[#ccff00] px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#000]">ABERTAS</span>
          </>
        }
        description="P&D publicado como open source — bibliotecas de engenharia de prompt e um servidor MCP real, abertos e em uso."
        className="py-24 md:py-32 bg-slate-100 border-b-2 border-slate-950"
        items={[...DEVTOOLS, ...OPEN_SERVERS]}
      />
      <RoadmapSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <JourneySection />
      <CtaSection />
    </PageTransition>
  );
};
