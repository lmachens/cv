import Plausible from "plausible-tracker";

let plausible;
export const initPlausible = () => {
  plausible = Plausible({
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
    trackLocalhost: true,
  });
  plausible.enableAutoPageviews();
};

export const trackOutboundLinkClick = (url) => {
  plausible.trackEvent("Outbound Link: Click", { props: { url: url } });
};
