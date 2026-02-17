import { ServiceSelection } from "../../types/contact";

interface WhatsAppMessageParams {
  name: string;
  selectedServices: ServiceSelection;
  planSelection?: any;
  serviceOptions: { id: keyof ServiceSelection; label: string }[];
}

export const buildWhatsAppMessage = ({
  name,
  selectedServices,
  planSelection,
  serviceOptions,
}: WhatsAppMessageParams): string => {
  let message = `Olá! Me chamo *${name}*.\n\n`;

  if (planSelection) {
    message += `Fiz uma simulação no site e gostaria de saber mais sobre:\n\n`;

    const {
      includeSupport,
      inboxes,
      attendants,
      aiChannels,
      aiAddons,
      siteEnabled,
      sitePages,
    } = planSelection;

    if (includeSupport) {
      message += `✅ *Atendimento Unificado*\n   - ${inboxes} Caixa(s) de Entrada\n   - ${attendants} Atendente(s)\n`;
    }

    if (aiChannels) {
      const activeChannels = Object.entries(aiChannels)
        .filter(([_, active]) => active)
        .map(([key]) =>
          key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        );

      if (activeChannels.length > 0) {
        message += `✅ *IA no Atendimento*\n   - Canais: ${activeChannels.join(", ")}\n`;
      }
    }

    if (aiAddons) {
      const activeAddons = Object.entries(aiAddons)
        .filter(([_, active]) => active)
        .map(([key]) => key.toUpperCase());

      if (activeAddons.length > 0) {
        message += `   - Add-ons: ${activeAddons.join(", ")}\n`;
      }
    }

    if (siteEnabled) {
      message += `✅ *Sites & Presença Online*\n   - ${sitePages} página(s)\n`;
    }
  } else {
    const selected = serviceOptions
      .filter((opt) => selectedServices[opt.id])
      .map((opt) => opt.label);

    if (selected.length > 0) {
      message += `Gostaria de saber mais sobre:\n\n`;
      selected.forEach((service) => {
        message += `✅ *${service}*\n`;
      });
    }
  }

  message += `\n\nPoderiam me explicar melhor como funciona?`;

  return encodeURIComponent(message);
};
