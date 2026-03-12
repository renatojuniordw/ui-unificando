import React from "react";
import { PageTransition } from "../../components/common/PageTransition";
import { SEO } from "../../components/common/SEO";
import { ROUTES } from "../../routes";

import { ProductivityHero } from "../../features/productivity/components/ProductivityHero";
import { EcosystemSection } from "../../features/productivity/components/EcosystemSection";
import { PainPointsSection } from "../../features/productivity/components/PainPointsSection";
import { FeaturesGrid } from "../../features/productivity/components/FeaturesGrid";
import { ComparisonSection } from "../../features/productivity/components/ComparisonSection";
import { MethodologySection } from "../../features/productivity/components/MethodologySection";
import { ProductivityCta } from "../../features/productivity/components/ProductivityCta";
import { FAQSection } from "../../features/productivity/FAQSection";

export const Productivity: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="IA para Negócios | Unificando"
        description="Agentes inteligentes que atendem, vendem e agendam 24/7 no WhatsApp e Instagram."
        canonical={ROUTES.PRODUCTIVITY}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "AI Automation",
              provider: {
                "@type": "Organization",
                name: "Unificando",
              },
              name: "Inteligência Artificial para Negócios",
              description:
                "Agentes de IA para automação de atendimento, vendas e agendamento.",
              offers: {
                "@type": "Offer",
                priceCurrency: "BRL",
                price: "497.00",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "A IA substitui meus atendentes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. A IA reduz tarefas repetitivas e escala o atendimento. Pessoas continuam essenciais.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Consigo treinar a IA com meus dados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. A IA aprende com seus manuais, perguntas frequentes e processos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Funciona sem o atendimento tradicional?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. A IA pode atuar sozinha ou integrada ao painel de atendimento.",
                  },
                },
              ],
            },
          ],
        }}
      />

      <ProductivityHero />
      <EcosystemSection />
      <PainPointsSection />
      <FeaturesGrid />
      <ComparisonSection />
      <MethodologySection />
      <FAQSection />
      <ProductivityCta />
    </PageTransition>
  );
};
