import React from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { HeroSection } from "../features/home/components/HeroSection";
import { StatsSection } from "../features/home/components/StatsSection";
import { ProblemSection } from "../features/home/components/ProblemSection";
import { SolutionsSection } from "../features/home/components/SolutionsSection";
import { JourneySection } from "../features/home/components/JourneySection";
import { CtaSection } from "../features/home/components/CtaSection";

export const Home: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Unificando | Ecossistema de Atendimento e Automação"
        description="Pare de perder vendas. Centralize seu WhatsApp e Instagram, automatize o atendimento com IA e tenha um site profissional. Teste o ecossistema Unificando."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Unificando",
          url: "https://unificando.com.br",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://unificando.com.br/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <SolutionsSection />
      <JourneySection />
      <CtaSection />
    </PageTransition>
  );
};
