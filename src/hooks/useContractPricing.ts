import { useMemo } from "react";
import { ContractData } from "../types/contract";
import { PRICING } from "../constants/pricing";

export const useContractPricing = (data: ContractData) => {
  return useMemo(() => {
    const clampInt = (value: number, min: number) =>
      Math.max(min, Number.isFinite(value) ? Math.floor(value) : min);

    let setupTotal = 0;
    let monthlyTotal = 0;

    // Atendimento
    if (data.personalData.services.atendimento) {
      const normInboxes = clampInt(
        data.serviceDetailsData.inboxes,
        PRICING.calculadora.rules.minimumInboxes,
      );
      const normAttendants = clampInt(
        data.serviceDetailsData.attendants,
        PRICING.calculadora.rules.minimumAttendants,
      );

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

    // IA
    if (data.personalData.services.ia) {
      const baseSetup = PRICING.ia.base.setup;
      const baseMonthly = PRICING.ia.base.monthly;

      setupTotal += baseSetup;
      monthlyTotal += baseMonthly;

      const selectedCount = Object.values(
        data.serviceDetailsData.aiChannels,
      ).filter(Boolean).length;
      const extraChannels = Math.max(0, selectedCount - 1);

      if (extraChannels > 0) {
        setupTotal +=
          extraChannels *
          (baseSetup * PRICING.ia.extras.channel.setupPercentage);
        monthlyTotal +=
          extraChannels *
          (baseMonthly * PRICING.ia.extras.channel.monthlyPercentage);
      }

      if (data.serviceDetailsData.aiAddons.audio) {
        setupTotal += baseSetup * PRICING.ia.extras.audio.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.audio.monthlyPercentage;
      }
      if (data.serviceDetailsData.aiAddons.api) {
        setupTotal += baseSetup * PRICING.ia.extras.api.setupPercentage;
        monthlyTotal += baseMonthly * PRICING.ia.extras.api.monthlyPercentage;
      }
      if (data.serviceDetailsData.aiAddons.google) {
        setupTotal += baseSetup * PRICING.ia.extras.google.setupPercentage;
        monthlyTotal +=
          baseMonthly * PRICING.ia.extras.google.monthlyPercentage;
      }
    }

    // Site
    if (data.personalData.services.site) {
      const normPages = clampInt(data.serviceDetailsData.sitePages, 1);
      setupTotal += PRICING.site.landing.setup;
      if (normPages > 1) {
        setupTotal +=
          (normPages - 1) *
          (PRICING.site.landing.setup * PRICING.site.extraPage.setupPercentage);
      }
    }

    return { setup: setupTotal, monthly: monthlyTotal };
  }, [data]);
};
