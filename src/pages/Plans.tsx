import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { usePlanCalculator } from "../features/plans/hooks/usePlanCalculator";
import { PlansHeader } from "../features/plans/components/PlansHeader";
import { InvestmentSummary } from "../features/plans/components/InvestmentSummary";
import { SupportModule } from "../features/plans/components/SupportModule";
import { AiModule } from "../features/plans/components/AiModule";
import { SiteModule } from "../features/plans/components/SiteModule";
import { ServiceBreakdown } from "../features/plans/components/ServiceBreakdown";
import { PlanFooterInfo } from "../features/plans/components/PlanFooterInfo";

interface PlansProps {}

export const Plans: React.FC<PlansProps> = () => {
  const navigate = useNavigate();
  const {
    // State
    includeSupport,
    setIncludeSupport,
    inboxes,
    setInboxes,
    attendants,
    setAttendants,
    siteEnabled,
    setSiteEnabled,
    sitePages,
    setSitePages,
    aiChannels,
    setAiChannels,
    aiAddons,
    setAiAddons,

    // Derived
    aiEnabled,
    setup,
    monthly,
  } = usePlanCalculator();

  const handleContractClick = () => {
    const selection = {
      includeSupport,
      inboxes: includeSupport ? inboxes : 0,
      attendants: includeSupport ? attendants : 0,
      aiChannels: aiEnabled ? aiChannels : null,
      aiAddons: aiEnabled ? aiAddons : null,
      siteEnabled,
      sitePages: siteEnabled ? sitePages : null,
      totals: {
        setup,
        monthly,
      },
    };

    localStorage.setItem(
      "unificando_plan_selection",
      JSON.stringify(selection)
    );
    navigate(ROUTES.CONTACT);
  };

  return (
    <PageTransition className="bg-white">
      <SEO
        title="Planos e Preços | Unificando"
        description="Monte a solução ideal para o seu negócio. Atendimento Digital, Inteligência Artificial e Sites."
        canonical="/planos"
      />

      <PlansHeader />

      <InvestmentSummary
        setup={setup}
        monthly={monthly}
        onContract={handleContractClick}
      />

      {/* CONFIGURATOR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <SupportModule
            includeSupport={includeSupport}
            setIncludeSupport={setIncludeSupport}
            inboxes={inboxes}
            setInboxes={setInboxes}
            attendants={attendants}
            setAttendants={setAttendants}
          />

          <AiModule
            aiEnabled={aiEnabled}
            aiChannels={aiChannels}
            setAiChannels={setAiChannels}
            aiAddons={aiAddons}
            setAiAddons={setAiAddons}
          />

          <SiteModule
            siteEnabled={siteEnabled}
            setSiteEnabled={setSiteEnabled}
            sitePages={sitePages}
            setSitePages={setSitePages}
          />
        </div>
      </section>

      <ServiceBreakdown />
      <PlanFooterInfo />
    </PageTransition>
  );
};
