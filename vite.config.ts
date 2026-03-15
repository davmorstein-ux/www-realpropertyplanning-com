import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://realpropertyplanning.com";

const ROUTE_METADATA: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps attorneys, executors, trustees, fiduciaries, and families navigate probate real estate, inherited homes, estate sales, and senior transitions throughout Western Washington.",
  },
  "/for-attorneys": {
    title: "Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning",
    description:
      "Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, trust-owned homes, valuation insight, and coordinated property guidance throughout Western Washington.",
  },
  "/executors": {
    title: "Guidance for Executors, Trustees & Personal Representatives | Real Property Planning",
    description:
      "Real Property Planning helps executors, trustees, personal representatives, and families handle inherited property, estate home sales, and next-step real estate decisions throughout Western Washington.",
  },
  "/probate-estate-sales": {
    title: "Probate Real Estate & Estate Property Sales | Real Property Planning",
    description:
      "Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned property throughout Western Washington.",
  },
  "/why-valuation-matters": {
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making in Western Washington.",
  },
  "/senior-transitions": {
    title: "Senior Transition Real Estate Support | Real Property Planning",
    description:
      "Real Property Planning provides thoughtful real estate support for downsizing, relocation, assisted living moves, and senior housing transitions throughout Western Washington.",
  },
  "/how-the-process-works": {
    title: "How the Process Works for Probate & Inherited Property Sales | Real Property Planning",
    description:
      "Learn the step-by-step process Real Property Planning uses to help attorneys, executors, trustees, and families handle probate property and inherited homes in Western Washington.",
  },
  "/counties": {
    title: "Service Areas for Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation, and senior transition support across King, Snohomish, Pierce, and Kitsap Counties.",
  },
  "/counties/king": {
    title: "King County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in King County, Washington.",
  },
  "/counties/snohomish": {
    title: "Snohomish County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Snohomish County, Washington.",
  },
  "/counties/pierce": {
    title: "Pierce County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Pierce County, Washington.",
  },
  "/counties/kitsap": {
    title: "Kitsap County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Kitsap County, Washington.",
  },
  "/resources": {
    title: "Resources | Real Property Planning",
    description:
      "Trusted professionals and service providers for probate, estate, and senior transition needs in Western Washington.",
  },
  "/resources/senior-move-managers": {
    title: "Senior Move Managers | Resources | Real Property Planning",
    description:
      "Senior move management professionals in Western Washington who coordinate and manage the physical and emotional aspects of relocating seniors.",
  },
  "/resources/estate-sale-companies": {
    title: "Estate Sale Companies | Resources | Real Property Planning",
    description:
      "Estate sale companies in Western Washington that organize, price, and conduct sales of personal property and household contents during probate and estate transitions.",
  },
  "/resources/probate-estate-attorneys": {
    title: "Probate & Estate Attorneys | Resources | Real Property Planning",
    description:
      "Probate and estate attorneys in Western Washington who guide families and fiduciaries through the probate process and estate administration.",
  },
  "/resources/cpas-financial-advisors": {
    title: "CPAs & Financial Advisors | Resources | Real Property Planning",
    description:
      "CPAs and financial advisors in Western Washington who help with estate tax, capital gains, and financial planning related to inherited property.",
  },
  "/resources/senior-living-communities": {
    title: "Senior Living Communities | Resources | Real Property Planning",
    description:
      "Assisted living, independent living, and memory care communities across Western Washington for families navigating senior housing transitions.",
  },
  "/resources/property-preparation-services": {
    title: "Property Preparation Services | Resources | Real Property Planning",
    description:
      "Cleanout, staging, repair, and preparation services for estate and transition properties in Western Washington.",
  },
  "/resources/moving-relocation-services": {
    title: "Moving & Relocation Services | Resources | Real Property Planning",
    description:
      "Moving companies and relocation specialists experienced with estate and senior transitions in Western Washington.",
  },
};

const replaceTag = (html: string, regex: RegExp, replacement: string) =>
  regex.test(html) ? html.replace(regex, replacement) : html;

const applyMetadata = (html: string, route: string, title: string, description: string) => {
  const canonical = route === "/" ? SITE_URL : `${SITE_URL}${route}`;

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = replaceTag(
    out,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );
  out = replaceTag(
    out,
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );
  out = replaceTag(
    out,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`
  );
  out = replaceTag(
    out,
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  out = replaceTag(
    out,
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  out = replaceTag(
    out,
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`
  );
  out = replaceTag(
    out,
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`
  );

  return out;
};

const routeMetadataPlugin = {
  name: "route-metadata-prerender",
  apply: "build" as const,
  async closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    const baseHtmlPath = path.join(distDir, "index.html");
    const baseHtml = await readFile(baseHtmlPath, "utf8");

    await Promise.all(
      Object.entries(ROUTE_METADATA).map(async ([route, metadata]) => {
        const html = applyMetadata(baseHtml, route, metadata.title, metadata.description);
        const routeDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
        await mkdir(routeDir, { recursive: true });
        await writeFile(path.join(routeDir, "index.html"), html, "utf8");
      })
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), routeMetadataPlugin, mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
