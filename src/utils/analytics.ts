type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushDataLayer(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackCtaClick(params: {
  label: string;
  location: string;
  to: string;
}) {
  pushDataLayer({
    event: "cta_click",
    cta_label: params.label,
    cta_location: params.location,
    cta_to: params.to,
  });
}

export function trackWhatsAppClick(location: string = "floating_button") {
  pushDataLayer({
    event: "whatsapp_click",
    location: location,
  });
}

export function trackPlanSimulation(planData: any) {
  pushDataLayer({
    event: "begin_checkout",
    plan_name: planData.name,
    plan_price: planData.price,
    billing_cycle: planData.cycle,
  });
}

