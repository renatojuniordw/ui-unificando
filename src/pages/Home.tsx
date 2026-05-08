import React from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ROUTES } from "../routes";
import { HeroSection } from "../features/home/components/HeroSection";
import { StatsSection } from "../features/home/components/StatsSection";
import { ProblemSection } from "../features/home/components/ProblemSection";
import { SolutionsSection } from "../features/home/components/SolutionsSection";
import { JourneySection } from "../features/home/components/JourneySection";
import { CtaSection } from "../features/home/components/CtaSection";

export const Home: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = React.useState<string | null>(
    null
  );

  const handleSelectSegment = (segment: string) => {
    setSelectedSegment((prev) => (prev === segment ? null : segment));
    window.setTimeout(() => {
      document
        .getElementById("solutions")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <PageTransition>
      <SEO
        title="Unificando | Atendimento via WhatsApp, IA e Presença Digital"
        description="Centralize WhatsApp e Instagram, automatize o atendimento com IA e fortaleça sua presença no Google com site profissional. Ideal para PMEs."
        canonical={ROUTES.HOME}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://unificando.com.br/#website",
              "name": "Unificando",
              "url": "https://unificando.com.br",
              "datePublished": "2024-01-01",
              "dateModified": "2026-03-12",
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
              "url": "https://unificando.com.br",
              "logo": "https://unificando.com.br/assets/img/LOGO_UNIFICANDO.svg",
              "legalName": "64.630.380 MARIA JOSE GOMES DOS SANTOS",
              "taxID": "64.630.380/0001-20",
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
      <StatsSection />
      <ProblemSection
        selectedSegment={selectedSegment}
        onSelectSegment={handleSelectSegment}
      />
      <SolutionsSection selectedSegment={selectedSegment} />
      <JourneySection />
      <CtaSection />
    </PageTransition>
  );
};
