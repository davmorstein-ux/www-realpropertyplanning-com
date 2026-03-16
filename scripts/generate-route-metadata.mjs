import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://realpropertyplanning.com";
const DIST_DIR = path.resolve(process.cwd(), "dist");
const BASE_HTML_PATH = path.join(DIST_DIR, "index.html");

const routeMeta = [
  {
    route: "/",
    title: "Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps attorneys, executors, trustees, fiduciaries, and families navigate probate real estate, inherited homes, estate sales, and senior transitions throughout Western Washington.",
  },
  {
    route: "/for-attorneys",
    title: "Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning",
    description:
      "Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, trust-owned homes, valuation insight, and coordinated property guidance throughout Western Washington.",
  },
  {
    route: "/executors",
    title: "Guidance for Executors, Trustees & Personal Representatives | Real Property Planning",
    description:
      "Real Property Planning helps executors, trustees, personal representatives, and families handle inherited property, estate home sales, and next-step real estate decisions throughout Western Washington.",
  },
  {
    route: "/probate-estate-sales",
    title: "Probate Real Estate & Estate Property Sales | Real Property Planning",
    description:
      "Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned property throughout Western Washington.",
  },
  {
    route: "/why-valuation-matters",
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making in Western Washington.",
  },
  {
    route: "/senior-transitions",
    title: "Senior Transition Real Estate Support | Real Property Planning",
    description:
      "Real Property Planning provides thoughtful real estate support for downsizing, relocation, assisted living moves, and senior housing transitions throughout Western Washington.",
  },
  {
    route: "/how-the-process-works",
    title: "How the Process Works for Probate & Inherited Property Sales | Real Property Planning",
    description:
      "Learn the step-by-step process Real Property Planning uses to help attorneys, executors, trustees, and families handle probate property and inherited homes in Western Washington.",
  },
  {
    route: "/counties",
    title: "Service Areas for Probate Real Estate | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation, and senior transition support across King, Snohomish, Pierce, and Kitsap Counties.",
  },
  {
    route: "/counties/king",
    title: "King County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in King County, Washington.",
  },
  {
    route: "/counties/snohomish",
    title: "Snohomish County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Snohomish County, Washington.",
  },
  {
    route: "/counties/pierce",
    title: "Pierce County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Pierce County, Washington.",
  },
  {
    route: "/counties/kitsap",
    title: "Kitsap County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Kitsap County, Washington.",
  },
  {
    route: "/counties/skagit",
    title: "Skagit County Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps clients and referral partners with probate real estate, inherited homes, estate sales, trust-owned property, and senior transitions in Skagit County, Washington.",
  },
];

const replaceMetaTag = (html, regex, replacement) =>
  regex.test(html) ? html.replace(regex, replacement) : html;

const applyMetadata = (html, route, title, description) => {
  const canonical = route === "/" ? SITE_URL : `${SITE_URL}${route}`;

  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = replaceMetaTag(
    out,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );
  out = replaceMetaTag(
    out,
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`
  );
  out = replaceMetaTag(
    out,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`
  );
  out = replaceMetaTag(
    out,
    /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`
  );
  out = replaceMetaTag(
    out,
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`
  );
  out = replaceMetaTag(
    out,
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`
  );
  out = replaceMetaTag(
    out,
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`
  );

  return out;
};

const writeRouteHtml = async () => {
  const baseHtml = await readFile(BASE_HTML_PATH, "utf8");

  await Promise.all(
    routeMeta.map(async ({ route, title, description }) => {
      const finalHtml = applyMetadata(baseHtml, route, title, description);
      const outputPath =
        route === "/"
          ? path.join(DIST_DIR, "index.html")
          : path.join(DIST_DIR, route.slice(1), "index.html");

      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, finalHtml, "utf8");
    })
  );
};

writeRouteHtml().catch((error) => {
  console.error("Failed generating route metadata files:", error);
  process.exit(1);
});
