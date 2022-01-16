import "../styles/globals.css";
import { initPlausible } from "../utils/stats";

if (typeof window !== "undefined") {
  initPlausible();
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
