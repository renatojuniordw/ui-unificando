

import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SEO } from '../components/common/SEO';

import { ProductivityHero } from '../features/productivity/components/ProductivityHero';
import { EcosystemSection } from '../features/productivity/components/EcosystemSection';
import { PainPointsSection } from '../features/productivity/components/PainPointsSection';
import { FeaturesGrid } from '../features/productivity/components/FeaturesGrid';
import { ComparisonSection } from '../features/productivity/components/ComparisonSection';
import { MethodologySection } from '../features/productivity/components/MethodologySection';
import { ProductivityCta } from '../features/productivity/components/ProductivityCta';
import { FAQSection } from '../features/productivity/FAQSection';

export const Productivity: React.FC = () => {
    return (
        <PageTransition>
            <SEO
                title="IA para Negócios | Unificando"
                description="Agentes inteligentes que atendem, vendem e agendam 24/7 no WhatsApp e Instagram."
                canonical="/produtividade"
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
