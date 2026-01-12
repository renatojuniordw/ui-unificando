import { useState, useMemo } from "react";
import { PRICING } from "../../../constants/pricing";

export interface AiChannels {
  whatsapp: boolean;
  instagram_direct: boolean;
  instagram_comments: boolean;
  site_chat: boolean;
}

export interface AiAddons {
  audio: boolean;
  api: boolean;
  google: boolean;
}

export const usePlanCalculator = () => {
  // Support State
  const [includeSupport, setIncludeSupport] = useState(true);
  const [inboxes, setInboxes] = useState(1);
  const [attendants, setAttendants] = useState(1);

  // Site State
  const [siteEnabled, setSiteEnabled] = useState(false);
  const [sitePages, setSitePages] = useState(1);

  // AI State
  const [aiChannels, setAiChannels] = useState<AiChannels>({
    whatsapp: false,
    instagram_direct: false,
    instagram_comments: false,
    site_chat: false,
  });

  const [aiAddons, setAiAddons] = useState<AiAddons>({
    audio: false,
    api: false,
    google: false,
  });

  const aiEnabled = Object.values(aiChannels).some(Boolean);

  const { setup, monthly } = useMemo(() => {
    const clampInt = (value: number, min: number) =>
      Math.max(min, Number.isFinite(value) ? Math.floor(value) : min);

    // Normalized values
    const normInboxes = clampInt(
      inboxes,
      PRICING.calculadora.rules.minimumInboxes
    );
    const normAttendants = clampInt(
      attendants,
      PRICING.calculadora.rules.minimumAttendants
    );
    const normSitePages = clampInt(sitePages, 1);

    let setupTotal = 0;
    let monthlyTotal = 0;

    // Support
    if (includeSupport) {
      setupTotal += PRICING.atendimento.base.setup;
      monthlyTotal += PRICING.atendimento.base.monthly;
      if (normInboxes > 1)
        monthlyTotal +=
          (normInboxes - 1) * PRICING.atendimento.extras.inbox.priceMonthly;
      if (normAttendants > 1)
        monthlyTotal +=
          (normAttendants - 1) *
          PRICING.atendimento.extras.attendant.priceMonthly;
    }

    // AI Logic
    if (aiEnabled) {
      const baseSetup = PRICING.ia.base.setup;
      const baseMonthly = PRICING.ia.base.monthly;

      setupTotal += baseSetup;
      monthlyTotal += baseMonthly;

      const selectedCount = Object.values(aiChannels).filter(Boolean).length;
      const extraChannels = Math.max(0, selectedCount - 1);

      if (extraChannels > 0) {
        setupTotal +=
          extraChannels *
          (baseSetup * PRICING.ia.extras.channel.setupPercentage);
        monthlyTotal +=
          extraChannels *
          (baseMonthly * PRICING.ia.extras.channel.monthlyPercentage);
      }

      if (aiAddons.audio) {
        setupTotal += baseSetup * PRICING.ia.extras.audio.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.audio.monthlyPercentage;
      }
      if (aiAddons.api) {
        setupTotal += baseSetup * PRICING.ia.extras.api.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.api.monthlyPercentage;
      }
      if (aiAddons.google) {
        setupTotal += baseSetup * PRICING.ia.extras.google.setupPercentage;
        monthlyTotal +=
          baseMonthly * PRICING.ia.extras.google.monthlyPercentage;
      }
    }

    // Site
    if (siteEnabled) {
      setupTotal += PRICING.site.landing.setup;
      if (normSitePages > 1) {
        setupTotal +=
          (normSitePages - 1) *
          (PRICING.site.landing.setup * PRICING.site.extraPage.setupPercentage);
      }
    }

    return { setup: setupTotal, monthly: monthlyTotal };
  }, [
    includeSupport,
    inboxes,
    attendants,
    siteEnabled,
    sitePages,
    aiEnabled,
    aiChannels,
    aiAddons,
  ]);

  return {
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
  };
};
