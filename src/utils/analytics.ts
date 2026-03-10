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

