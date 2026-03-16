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
    title: "Estate Property Guide for Executors & Trustees | Real Property Planning",
    description:
      "First time managing an estate property? David Stein walks executors and trustees through every step — assessing the home, coordinating preparation, pricing it right, and handling the sale.",
  },
  "/probate-estate-sales": {
    title: "Probate Property Sales & Estate Real Estate | Real Property Planning",
    description:
      "Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned property throughout Western Washington.",
  },
  "/why-valuation-matters": {
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making in Western Washington.",
  },
  "/senior-transitions": {
    title: "Senior Home Sales & Downsizing Support | Real Property Planning",
    description:
      "Real Property Planning provides thoughtful real estate support for downsizing, relocation, assisted living moves, and senior housing transitions throughout Western Washington.",
  },
  "/how-the-process-works": {
    title: "How the Process Works — Estate Property Sales | Real Property Planning",
    description:
      "From initial consultation to closing day — here is exactly how David Stein helps executors, attorneys, and families sell probate, inherited, and trust-owned property in Western Washington.",
  },
  "/how-we-work": {
    title: "How David Stein Works With Attorneys, Executors, Trustees & Families",
    description:
      "Learn how David Stein collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during estate property transitions.",
  },
  "/attorney-referral": {
    title: "Attorney & Professional Referral Resource | Real Property Planning",
    description:
      "David Stein is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters in Western Washington.",
  },
  "/for-cpas": {
    title: "Real Estate Guidance for CPAs | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients across Western Washington.",
  },
  "/for-financial-planners": {
    title: "Real Estate Guidance for Financial Planners | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients in Western Washington.",
  },
  "/for-senior-living-professionals": {
    title: "For Senior Living & Transition Professionals | Real Property Planning",
    description:
      "Real Property Planning works with senior living communities, move managers, downsizing specialists, and estate sale companies when a home is part of a major life transition across Western Washington.",
  },
  "/for-referral-partners": {
    title: "For Professional Referral Partners | Real Property Planning",
    description:
      "Learn how Real Property Planning collaborates with attorneys, CPAs, senior move managers, and other professionals who assist families navigating probate property and estate transitions.",
  },
  "/about": {
    title: "About David Stein — Broker & Certified Appraiser | Real Property Planning",
    description:
      "Meet David Stein — the Washington broker and certified appraiser behind Real Property Planning. Over 20 years of focused experience helping attorneys, executors, and families with estate property.",
  },
  "/faq": {
    title: "Probate Real Estate FAQ | Real Property Planning",
    description:
      "Answers to common questions about probate real estate, inherited homes, estate sales, trust-owned property, valuation, executors, and senior transitions in Washington.",
  },
  "/terminology": {
    title: "Wills, Probate & Real Property Glossary | Real Property Planning",
    description:
      "A clear glossary of wills, probate, inheritance, and real property terms to help attorneys, executors, trustees, and families understand estate-related real estate.",
  },
  "/contact": {
    title: "Contact David Stein | Probate & Estate Real Estate",
    description:
      "Have a property tied to probate, a trust, an inheritance, or a senior transition? Contact David Stein for a confidential consultation. Serving King, Snohomish, Pierce & Kitsap Counties.",
  },
  "/counties": {
    title: "Service Areas for Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation, and senior transition support across King, Snohomish, Pierce, and Kitsap Counties.",
  },
  "/cities-we-serve": {
    title: "Cities We Serve | Real Property Planning",
    description:
      "David Stein serves cities across King, Snohomish, Pierce, and Kitsap Counties for probate real estate, inherited property, trust-owned homes, and estate-related sales.",
  },
  "/counties/king": {
    title: "King County Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in King County, Washington.",
  },
  "/counties/snohomish": {
    title: "Snohomish County Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Snohomish County.",
  },
  "/counties/pierce": {
    title: "Pierce County Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Pierce County.",
  },
  "/counties/kitsap": {
    title: "Kitsap County Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Kitsap County.",
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
    title: "Property Prep Services | Resources | Real Property Planning",
    description:
      "Cleanout, staging, repair, and preparation services for estate and transition properties in Western Washington.",
  },
  "/resources/moving-relocation-services": {
    title: "Moving & Relocation | Resources | Real Property Planning",
    description:
      "Moving companies and relocation specialists experienced with estate and senior transitions in Western Washington.",
  },
  "/how-to-move-elderly-parents": {
    title: "How to Move Elderly Parents | Real Property Planning",
    description:
      "A compassionate step-by-step guide for families navigating senior housing transitions in Washington State — from recognizing when it's time to move through selling the family home.",
  },
  "/transition-resources": {
    title: "Transition Resources for Families | Real Property Planning",
    description:
      "A curated starting point for families and professionals navigating probate, downsizing, inherited property, senior moves, and other major housing transitions in Western Washington.",
  },
  "/services": {
    title: "Services | Real Property Planning",
    description:
      "Explore Real Property Planning's services including probate property sales, senior transitions, executor support, and estate-related real estate guidance in Western Washington.",
  },
  "/testimonials": {
    title: "Testimonials & Reviews | Real Property Planning",
    description:
      "Read client reviews and testimonials about working with Real Property Planning for probate property sales, estate transitions, and senior moves in Western Washington.",
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
