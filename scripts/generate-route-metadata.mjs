import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://realpropertyplanning.com";
const DIST_DIR = path.resolve(process.cwd(), "dist");
const BASE_HTML_PATH = path.join(DIST_DIR, "index.html");

const routeMeta = [
  {
    route: "/",
    title: "Probate & Inherited Property Real Estate | Real Property Planning | Western Washington",
    description:
      "Real Property Planning helps executors, families, and attorneys sell probate, estate, and inherited real estate in King, Snohomish, Pierce, Skagit, and Kitsap Counties.",
  },
  {
    route: "/for-attorneys",
    title: "Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning",
    description:
      "Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, trust-owned homes, valuation insight, and coordinated property guidance throughout Western Washington.",
  },
  {
    route: "/executors",
    title: "Help for Executors Selling Estate Property | Real Property Planning",
    description:
      "Step-by-step guidance for executors and personal representatives selling inherited homes and estate property in Western Washington.",
  },
  {
    route: "/probate-estate-sales",
    title: "Probate & Estate Property Sales | Guidance for Executors & Attorneys",
    description:
      "Support for probate and estate property sales in Western Washington, helping executors, personal representatives, trustees, and attorneys navigate inherited real estate.",
  },
  {
    route: "/why-valuation-matters",
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making in Western Washington.",
  },
  {
    route: "/senior-transitions",
    title: "Senior Housing Transitions & Downsizing | Real Property Planning",
    description:
      "Compassionate real estate support for seniors and families handling downsizing, relocation, and assisted living transitions in Western Washington.",
  },
  {
    route: "/how-the-process-works",
    title: "How the Process Works for Probate & Inherited Property Sales | Real Property Planning",
    description:
      "Learn the step-by-step process Real Property Planning uses to help attorneys, executors, trustees, and families handle probate property and inherited homes in Western Washington.",
  },
  {
    route: "/counties",
    title: "Probate Real Estate & Inherited Property Sales | Western Washington Service Areas",
    description:
      "Real Property Planning provides probate real estate and inherited property sales guidance across King, Snohomish, Pierce, Skagit, and Kitsap Counties in Western Washington.",
  },
  {
    route: "/counties/king",
    title: "Probate Real Estate & Inherited Property Sales in King County | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors, attorneys, and families in King County — Seattle, Bellevue, Kirkland, Redmond, and surrounding communities.",
  },
  {
    route: "/counties/snohomish",
    title: "Probate Real Estate & Inherited Property Sales in Snohomish County | Real Property Planning",
    description:
      "Probate real estate and inherited property sales support for families and fiduciaries in Snohomish County — Everett, Edmonds, Lynnwood, Mukilteo, and surrounding areas.",
  },
  {
    route: "/counties/pierce",
    title: "Probate Real Estate & Inherited Property Sales in Pierce County | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors and families in Pierce County — Tacoma, Puyallup, Gig Harbor, Lakewood, and surrounding communities.",
  },
  {
    route: "/counties/kitsap",
    title: "Probate Real Estate & Inherited Property Sales in Kitsap County | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors and families in Kitsap County — Bainbridge Island, Poulsbo, Bremerton, Silverdale, and surrounding areas.",
  },
  {
    route: "/counties/skagit",
    title: "Probate Real Estate & Inherited Property Sales in Skagit County | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for families and fiduciaries in Skagit County — Mount Vernon, Anacortes, Burlington, and surrounding communities.",
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
