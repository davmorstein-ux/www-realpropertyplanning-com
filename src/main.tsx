import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

/* After a new deploy, an old index.html can still reference chunk filenames
   that no longer exist, so lazy route imports fail with
   "Failed to fetch dynamically imported module". Reload once to pick up the
   fresh manifest instead of showing a blank screen. */
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  if (!sessionStorage.getItem("rpp-chunk-reloaded")) {
    sessionStorage.setItem("rpp-chunk-reloaded", "1");
    window.location.reload();
  }
});


createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
