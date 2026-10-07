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
/* A prerendered city directory page holds its whole list of homes. Load that
   city's data before hydrating, so React's first render matches the HTML and
   the page does not jump (Oct 7, 2026; see peekCity in src/data/afh/directory.ts
   and src/lib/cityDataRoute.ts). The page stays on screen meanwhile. Checked
   with a pattern first so other pages never load the directory code. */
const start = async () => {
  if (!rootEl.hasAttribute("data-prerendered")) {
    createRoot(rootEl).render(app);
    return;
  }
  if (/^\/afh-club\/homes\/[a-z0-9-]+(\/[a-z0-9-]+)?\/?$/.test(window.location.pathname)) {
    try {
      const [{ cityDataSlug }, { loadCity }] = await Promise.all([
        import("./lib/cityDataRoute"),
        import("./data/afh/directory"),
      ]);
      const slug = cityDataSlug(window.location.pathname);
      if (slug) await loadCity(slug);
    } catch {
      /* Hydrate anyway; the page loads its data itself. */
    }
  }
  hydrateRoot(rootEl, app);
};
start();
