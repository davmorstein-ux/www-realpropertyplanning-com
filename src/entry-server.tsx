/**
 * Build-time page renderer (Oct 4, 2026).
 *
 * Most AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not run JavaScript, so
 * they read only the static HTML file for each page. That file used to hold the
 * route-metadata summary alone — on many pages little more than the menu and
 * footer. vite.config.ts now bundles this file for Node after the browser build
 * and calls render() for each prerendered route, writing the page's real
 * content into <div id="root" data-prerendered>. The browser hydrates that HTML
 * (main.tsx), so the page is never replaced by a blank screen while it loads;
 * if hydration finds a difference, React re-renders that part on the client.
 *
 * Pages must render without touching window/document during render; read them
 * in effects. A route that throws here keeps its metadata summary instead
 * (the build logs it), so one bad page never breaks the build.
 */
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import "./i18n/config";
import { cityDataSlug } from "./lib/cityDataRoute";
import { loadCity } from "./data/afh/directory";

/** The page body plus any JSON-LD the page adds through react-helmet-async. */
export async function render(url: string): Promise<{ html: string; jsonLd: string[] }> {
  /* City directory pages render their list from the city's data file. Load it
     first, so the HTML holds the whole list (see peekCity in directory.ts). */
  const citySlug = cityDataSlug(url);
  if (citySlug) await loadCity(citySlug);
  return renderPage(url);
}

function renderPage(url: string): Promise<{ html: string; jsonLd: string[] }> {
  const helmetContext: { helmet?: HelmetServerState } = {};
  return new Promise((resolve, reject) => {
    let failed: unknown = null;
    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <App location={url} />
      </HelmetProvider>,
      {
        onAllReady() {
          if (failed) return reject(failed);
          const sink = new PassThrough();
          let html = "";
          sink.on("data", (c) => (html += c));
          sink.on("end", () => {
            const scripts = helmetContext.helmet?.script?.toString() ?? "";
            const jsonLd = [...scripts.matchAll(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/g)].map((m) => m[0]);
            resolve({ html, jsonLd });
          });
          pipe(sink);
        },
        onShellError: reject,
        onError(err) {
          failed = err;
        },
      }
    );
    setTimeout(() => abort(new Error(`render timed out: ${url}`)), 20_000);
  });
}
