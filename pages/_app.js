import "../styles/globals.css";
import Plausible from "plausible-tracker";

if (typeof window !== "undefined") {
  const plausible = Plausible({
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
    trackLocalhost: true,
  });
  plausible.enableAutoPageviews();
  plausible.enableAutoOutboundTracking();
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
