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
        title="Unificando para Advogados | Atendimento Jurídico Centralizado e IA"
        description="Escritórios de advocacia perdem contratos por demora no WhatsApp. Centralize seu atendimento, automatize a triagem com IA e triplique sua conversão de leads jurídicos."
        canonical={ROUTES.FOR_LAWYERS}
        keywords="advogados, escritório advocacia, atendimento jurídico, WhatsApp advocacia, IA para advogados, automação escritório, leads jurídicos, triagem IA, OAB"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "Legal Automation Software",
              "provider": {
                "@type": "Organization",
                "name": "Unificando",
                "url": "https://unificando.com.br"
              },
              "name": "Unificando para Advogados",
              "description": "Plataforma de centralização de WhatsApp e triagem via Inteligência Artificial para escritórios de advocacia.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "297.00"
              }
            },
            {
              "@type": "LegalService",
              "name": "Unificando Digital - Consultoria em Atendimento Jurídico",
              "description": "Especialistas em digitalizar a operação de atendimento de escritórios de advocacia com foco em OAB Compliance e eficiência.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Recife",
                "addressRegion": "PE",
                "addressCountry": "BR"
              }
            }
          ]
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
