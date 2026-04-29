import React, { useState } from "react";
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
import { trackPlanSimulation } from "../utils/analytics";

interface PlansProps {}

export const Plans: React.FC<PlansProps> = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"support" | "ai" | "site">("support");
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

    trackPlanSimulation({
      name: `Plano Personalizado`,
      price: monthly,
      cycle: "monthly"
    });

    localStorage.setItem(
      "unificando_plan_selection",
      JSON.stringify(selection),
    );
    navigate(ROUTES.CONTACT);
  };

  return (
    <PageTransition className="bg-white">
      <SEO
        title="Planos e Preços | Unificando"
        description="Monte a solução ideal para o seu negócio. Atendimento Digital, Inteligência Artificial e Sites."
        canonical={ROUTES.PLANS}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Planos Unificando",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Atendimento Unificado",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "IA no Atendimento",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sites & Presença Online",
              },
            },
          ],
        }}
      />

      <PlansHeader />

      <InvestmentSummary
        setup={setup}
        monthly={monthly}
        onContract={handleContractClick}
      />

      {/* CONFIGURATOR */}
      <section className="py-4 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          {/* Mobile Tabs Header */}
          <div className="lg:hidden mb-4">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-3">
              1. Selecione o módulo para configurar:
            </span>
            <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar snap-x snap-mandatory px-0.5">
              {[
                { id: "support", label: "Atendimento", icon: "💬" },
                { id: "ai", label: "Inteligência", icon: "🤖" },
                { id: "site", label: "Web/Sites", icon: "🌐" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex flex-col items-center gap-2 p-4 border-4 transition-all min-w-[120px] snap-center ${
                    activeTab === tab.id
                      ? "bg-[#ccff00] border-slate-950 shadow-[4px_4px_0px_#000] -translate-y-1"
                      : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
                  }`}
                >
                  <span className="text-2xl">{tab.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className={activeTab === "support" ? "block" : "hidden lg:block"}>
              <SupportModule
                includeSupport={includeSupport}
                setIncludeSupport={setIncludeSupport}
                inboxes={inboxes}
                setInboxes={setInboxes}
                attendants={attendants}
                setAttendants={setAttendants}
              />
            </div>

            <div className={activeTab === "ai" ? "block" : "hidden lg:block"}>
              <AiModule
                aiEnabled={aiEnabled}
                aiChannels={aiChannels}
                setAiChannels={setAiChannels}
                aiAddons={aiAddons}
                setAiAddons={setAiAddons}
              />
            </div>

            <div className={activeTab === "site" ? "block" : "hidden lg:block"}>
              <SiteModule
                siteEnabled={siteEnabled}
                setSiteEnabled={setSiteEnabled}
                sitePages={sitePages}
                setSitePages={setSitePages}
              />
            </div>
          </div>
        </div>
      </section>

      <PlanFooterInfo />

    </PageTransition>
  );
};
