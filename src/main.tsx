import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";
import { recoverFromChunkError } from "./lib/chunkRecovery";

/* After a new deploy, an old tab can still reference code files that no longer
   exist. Reload to the fresh build every time this happens (guarded against a
   loop); see src/lib/chunkRecovery.ts. The old version reloaded once per
   session and then silently ignored failures, so menu links stopped working. */
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  recoverFromChunkError();
});


/* Pages prerendered at build time carry the real page in #root (marked
   data-prerendered; see src/entry-server.tsx). Hydrate those so the HTML stays
   on screen while the page's code loads; every other page renders fresh. */
const rootEl = document.getElementById("root")!;
// Build-time copies of the page's JSON-LD are for crawlers that don't run
// JavaScript; in the browser Helmet renders the page's own, so drop these.
document.querySelectorAll("script[data-prerender-ld]").forEach((el) => el.remove());
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
if (rootEl.hasAttribute("data-prerendered")) hydrateRoot(rootEl, app);
else createRoot(rootEl).render(app);
