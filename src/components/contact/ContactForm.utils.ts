import { ServiceSelection } from "../../types/contact";

interface WhatsAppMessageParams {
  name: string;
  selectedServices: ServiceSelection;
  serviceOptions: { id: keyof ServiceSelection; label: string }[];
}

export const buildWhatsAppMessage = ({
  name,
  selectedServices,
  serviceOptions,
}: WhatsAppMessageParams): string => {
  let message = `Olá! Me chamo ${name}.\n\n`;

  const selected = serviceOptions
    .filter((opt) => selectedServices[opt.id])
    .map((opt) => opt.label);

  if (selected.length > 0) {
    message += `Gostaria de saber mais sobre:\n\n`;
    selected.forEach((service) => {
      message += `${service}\n`;
    });
  }

  message += `\n\nPoderiam me explicar melhor como funciona?`;

  return encodeURIComponent(message);
};
