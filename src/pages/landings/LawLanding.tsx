import React from "react";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { ROUTES } from "../../routes";

// Features
import { HeroLawSection } from "../../features/landings/law/HeroLawSection";
import { ProblemLawSection } from "../../features/landings/law/ProblemLawSection";
import { SolutionsLawSection } from "../../features/landings/law/SolutionsLawSection";
import { SocialProofLawSection } from "../../features/landings/law/SocialProofLawSection";
import { CtaLawSection } from "../../features/landings/law/CtaLawSection";

export const LawLanding: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Unificando para Advogados | O Fim do Caos no WhatsApp do Escritório"
        description="Centralize seu atendimento jurídico, automatize a triagem com IA e pare de perder clientes no WhatsApp. O sistema definitivo para escritórios de advocacia."
        canonical={ROUTES.FOR_LAWYERS}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Unificando para Advogados",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL"
          },
          description: "Sistema de triagem jurídica e atendimento centralizado via WhatsApp."
        }}
      />

      <main className="bg-white">
        <HeroLawSection />
        <ProblemLawSection />
        <SolutionsLawSection />
        <SocialProofLawSection />
        <CtaLawSection />
      </main>
    </PageTransition>
  );
};
