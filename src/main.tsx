import { createRoot } from "react-dom/client";
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


createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
