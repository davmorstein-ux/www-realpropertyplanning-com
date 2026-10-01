/**
 * AI-READABLE DATA (owner's request, Oct 1, 2026: "make the site the source AI
 * assistants quote").
 *
 * At build time vite.config.ts calls buildAiData() and writes the result to
 * dist/ai/*.json, plus dist/llms.txt and dist/llms-full.txt. Two consumers:
 *   1. The site's public MCP server (src/lib/mcp), which AI assistants can
 *      connect to. Its tools FETCH these files from the live site, so what an
 *      assistant is told always matches what was last published, and the
 *      generated edge function stays small.
 *   2. AI crawlers, which read llms.txt / llms-full.txt directly.
 *
 * Everything here is built from the same data the pages render, so nothing is
 * written twice. Node-only (vite.config.ts); no React, no "@/" imports.
 *
 * NWMLS: listing DETAILS are deliberately NOT published here. IDX data may be
 * displayed on the broker's own site with the required attribution; handing it
 * to third-party AI tools through a feed is redistribution the IDX rules do not
 * clearly allow. Only counts and links to the listing pages go out. Do not add
 * addresses, prices or photos of MLS listings to these files without the
 * owner first confirming with NWMLS that it is permitted.
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { GLOSSARY_A_TO_Z } from "../data/afhGlossary";
import { PROBATE_GLOSSARY_A_TO_Z } from "../data/probateGlossary";
import { RULE_CHANGES, PENDING_RULES, OUTDATED_ADVICE, RULES_LAST_VERIFIED } from "../data/afhRuleChanges";
import { ARTICLE_RECORDS } from "../data/articleRecords";
import { afhListings } from "../data/afhListings";
import { GUIDE_LIBRARY } from "../data/guideLibrary";
import { dshsReportsUrl } from "../data/afh/inspectionRecord";
/** Pattern for a home's DSHS records link; "{license}" is replaced. The MCP tools use it. */
export const DSHS_RECORDS_URL_PATTERN = dshsReportsUrl("{license}").replace("%7Blicense%7D", "{license}");
import { FEATURED_BROKER, FEATURED_APPRAISER, SAME_PERSON } from "../data/featuredProfessionals";

export const AI_SITE_URL = "https://realpropertyplanning.com";
/** Bump when a file's shape changes in a way a tool must notice. */
export const AI_DATA_VERSION = 1;

/* ------------------------------------------------------------------ */
/* Shapes (the MCP tools in src/lib/mcp/data.ts mirror these)          */
/* ------------------------------------------------------------------ */

export interface AiPage {
  path: string;
  url: string;
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  quickAnswer?: { q: string; a: string };
  sections?: string[];
  faq?: { q: string; a: string }[];
  /** "rpp" = Real Property Planning family side, "afh" = AFH Club. */
  area: "rpp" | "afh";
  reviewed?: string;
  published?: string;
  sources?: { label: string; href?: string }[];
}

export interface AiTerm {
  term: string;
  aka?: string;
  glossary: "probate" | "afh";
  category: string;
  definition: string;
  url: string;
  guide: { label: string; url: string };
  source?: { label: string; href: string };
}

export interface AiHome {
  license: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  county: string;
  beds: number;
  phone?: string;
  specialties: string[];
  contracts: string[];
  medicaid: boolean;
  /** Directory page on this site, when the home's city has pages. */
  url?: string;
}

/** Minimal shape of a ROUTE_METADATA entry that this module needs. */
export interface RouteMetaLike {
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  quickAnswerQ?: string;
  quickAnswerA?: string;
  sections?: string[];
  faq?: Array<{ q: string; a: string }>;
  noIndex?: boolean;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const clean = (s: string | undefined) =>
  s === undefined
    ? undefined
    : s
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&rsquo;|&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, " ")
        .trim();

const abs = (href: string) => (href.startsWith("/") ? AI_SITE_URL + href : href);
const isAfh = (p: string) => p === "/afh-club" || p.startsWith("/afh-club/") || p === "/afh-submit";

/** Human labels for DSHS codes, so an assistant never has to guess. */
export const SPECIALTY_LABELS: Record<string, string> = {
  dementia: "Dementia specialty training",
  mentalHealth: "Mental health specialty training",
  developmentalDisabilities: "Developmental disabilities specialty training",
};
export const CONTRACT_LABELS: Record<string, string> = {
  adultFamilyHome: "DSHS adult family home contract (Medicaid)",
  specializedBehaviorSupport: "Specialized Behavior Support (SBS)",
  expandedCommunityServices: "Expanded Community Services (ECS)",
  privateDutyNursing: "Private duty nursing",
  afhRespite: "Respite",
  waCaresFund: "WA Cares Fund",
  waCaresFundRespite: "WA Cares Fund respite",
  wcfPrivateDutyNursing: "WA Cares Fund private duty nursing",
  ddaSpecialtyPilot: "DDA specialty pilot",
  ddaMeaningfulDay: "DDA meaningful day",
  hcsMeaningfulDay: "HCS meaningful day",
  wcfAfhSow: "WA Cares Fund AFH statement of work",
};

/* ------------------------------------------------------------------ */
/* Builders                                                            */
/* ------------------------------------------------------------------ */

export function buildAiPages(routes: Record<string, RouteMetaLike>): AiPage[] {
  return Object.entries(routes)
    .filter(([p, m]) => !m.noIndex && p !== "*" && !p.includes(":"))
    .map(([p, m]) => {
      const rec = ARTICLE_RECORDS[p];
      const page: AiPage = {
        path: p,
        url: p === "/" ? AI_SITE_URL : AI_SITE_URL + p,
        title: clean(m.title)!,
        description: clean(m.description)!,
        area: isAfh(p) ? "afh" : "rpp",
      };
      if (m.h1) page.h1 = clean(m.h1);
      if (m.intro) page.intro = clean(m.intro);
      if (m.quickAnswerQ && m.quickAnswerA) page.quickAnswer = { q: clean(m.quickAnswerQ)!, a: clean(m.quickAnswerA)! };
      if (m.sections?.length) page.sections = m.sections.map((s) => clean(s)!).filter(Boolean);
      if (m.faq?.length) page.faq = m.faq.map((f) => ({ q: clean(f.q)!, a: clean(f.a)! }));
      if (rec) {
        page.reviewed = rec.reviewed;
        if (rec.published) page.published = rec.published;
        if (rec.sources.length) page.sources = rec.sources;
      }
      return page;
    })
    .sort((a, b) => a.path.localeCompare(b.path));
}

export function buildAiGlossary(): AiTerm[] {
  const probate: AiTerm[] = PROBATE_GLOSSARY_A_TO_Z.map((t) => ({
    term: t.term,
    ...(t.aka ? { aka: t.aka } : {}),
    glossary: "probate",
    category: t.category,
    definition: clean(t.definition)!,
    url: `${AI_SITE_URL}/probate-glossary#${t.id}`,
    guide: { label: t.guide.label, url: abs(t.guide.href) },
    ...(t.source ? { source: t.source } : {}),
  }));
  const afh: AiTerm[] = GLOSSARY_A_TO_Z.map((t) => ({
    term: t.term,
    ...(t.aka ? { aka: t.aka } : {}),
    glossary: "afh",
    category: t.category,
    definition: clean(t.definition)!,
    url: `${AI_SITE_URL}/afh-club/glossary#${t.id}`,
    guide: { label: t.guide.label, url: abs(t.guide.href) },
    ...(t.source ? { source: t.source } : {}),
  }));
  return [...probate, ...afh];
}

export function buildAiRuleChanges() {
  return {
    page: `${AI_SITE_URL}/afh-club/washington-afh-rule-changes`,
    lastVerified: RULES_LAST_VERIFIED,
    note: "Rule changes affecting Washington adult family homes since 2023. 'pending' items are proposals and are NOT law until adopted.",
    changes: RULE_CHANGES.map((r) => ({
      id: r.id,
      topic: r.topic,
      category: r.category,
      kind: r.kind,
      effective: r.effective,
      ...(r.effectiveNote ? { effectiveNote: r.effectiveNote } : {}),
      before: clean(r.before),
      after: clean(r.after),
      affects: clean(r.affects),
      impact: clean(r.impact),
      citation: { label: r.citation.label, url: abs(r.citation.href) },
      filing: { label: r.filing.label, url: abs(r.filing.href) },
      verified: r.verified,
      ...(r.status ? { status: r.status } : {}),
    })),
    pending: PENDING_RULES.map((p) => ({
      id: p.id,
      topic: p.topic,
      stage: p.stage,
      filed: p.filed,
      proposes: p.proposes.map((x) => clean(x)),
      filing: { label: p.filing.label, url: abs(p.filing.href) },
      verified: p.verified,
      notLaw: true,
    })),
    outdatedAdvice: OUTDATED_ADVICE.map((o) => ({ claim: clean(o.claim), now: clean(o.now), ruleId: o.ruleId })),
  };
}

/** Every licensed home statewide, from the per-county files (the city files cover only cities with pages). */
export function buildAiDirectory(dataDir: string): AiHome[] {
  const cityIndex = JSON.parse(readFileSync(path.join(dataDir, "county-index.json"), "utf8")) as { citySlug: string }[];
  const citiesWithPages = new Set(cityIndex.map((c) => c.citySlug));
  const counties = JSON.parse(readFileSync(path.join(dataDir, "counties.json"), "utf8")) as { slug: string }[];
  const out: AiHome[] = [];
  for (const c of counties) {
    let homes: any[] = [];
    try {
      homes = JSON.parse(readFileSync(path.join(dataDir, `${c.slug}-county.json`), "utf8"));
    } catch {
      continue;
    }
    for (const f of homes) {
      out.push({
        license: f.licenseNumber,
        name: f.displayName || f.name,
        street: f.address.street,
        city: f.address.city,
        zip: f.address.zip,
        county: f.address.county,
        beds: f.licensedBeds,
        ...(f.phone ? { phone: f.phone } : {}),
        specialties: f.specialties ?? [],
        contracts: f.contracts ?? [],
        medicaid: !!f.acceptsMedicaid,
        ...(citiesWithPages.has(f.address.citySlug) ? { url: `${AI_SITE_URL}/afh-club/homes/${f.address.citySlug}/${f.slug}` } : {}),
      });
    }
  }
  return out.sort((a, b) => a.city.localeCompare(b.city) || a.name.localeCompare(b.name));
}

export function buildAiStats(dataDir: string) {
  const stats = JSON.parse(readFileSync(path.join(dataDir, "stats.json"), "utf8"));
  return {
    page: `${AI_SITE_URL}/afh-club/washington-afh-data`,
    csv: `${AI_SITE_URL}/data/washington-afh-by-county.csv`,
    source: "DSHS Adult Family Home Locator (public record)",
    contractLabels: CONTRACT_LABELS,
    ...stats,
  };
}

/** Counts and links only. See the NWMLS note at the top of this file. */
export function buildAiListingsOverview(today = new Date().toISOString().slice(0, 10)) {
  const live = afhListings.filter((l) => l.marketStatus === "active" || l.marketStatus === "pending");
  const count = (type: string) => live.filter((l) => l.listingType === type).length;
  const byCity: Record<string, number> = {};
  for (const l of live) byCity[l.city] = (byCity[l.city] ?? 0) + 1;
  return {
    asOf: today,
    pages: {
      all: `${AI_SITE_URL}/afh-club/listings`,
      properties: `${AI_SITE_URL}/afh-club/listings/properties`,
      businesses: `${AI_SITE_URL}/afh-club/listings/businesses`,
      forLease: `${AI_SITE_URL}/afh-club/listings/for-lease`,
      sold: `${AI_SITE_URL}/afh-club/sold`,
      submit: `${AI_SITE_URL}/afh-submit`,
    },
    counts: {
      onMarket: live.length,
      active: live.filter((l) => l.marketStatus === "active").length,
      pending: live.filter((l) => l.marketStatus === "pending").length,
      properties: count("realEstate"),
      businesses: count("business"),
      forLease: count("lease"),
    },
    citiesOnMarket: Object.entries(byCity)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([city, n]) => ({ city, listings: n })),
    note:
      "Listing details (address, price, photos, listing broker) are shown only on the AFH Club listing pages, with the attribution the multiple listing service requires. Send people to those pages for details.",
  };
}

export function buildAiGuideLibrary() {
  return GUIDE_LIBRARY.map((g) => ({
    group: g.label,
    pieces: g.pieces.map((p) => ({ title: p.title, url: abs(p.href) })),
  }));
}

/* ------------------------------------------------------------------ */
/* llms.txt and llms-full.txt                                          */
/* ------------------------------------------------------------------ */

export interface LlmsInput {
  pages: AiPage[];
  glossary: AiTerm[];
  stats: { state: { homes: number; beds: number }; retrievedTo: string };
  listings: ReturnType<typeof buildAiListingsOverview>;
  mcpUrl: string;
}

const KEY_PAGES: Array<[string, string]> = [
  ["/washington-probate-guide", "Start here for probate: authority to sell, deadlines, taxes, and a path for executors, heirs and trustees."],
  ["/probate-glossary", "Probate and estate terms, each with its RCW or agency source."],
  ["/afh-club/washington-adult-family-home-guide", "Start here for adult family homes: licensing, building rules, payment, buying and selling."],
  ["/afh-club/glossary", "Adult family home terms, each with its WAC/RCW or DSHS source."],
  ["/afh-club/washington-afh-rule-changes", "Every AFH rule change since 2023, with citations; pending proposals labeled as not yet law."],
  ["/afh-club/homes", "Directory of every DSHS-licensed adult family home, by city."],
  ["/afh-club/washington-afh-data", "Counts of licensed homes and beds by county, specialty and contract."],
  ["/afh-club/listings", "Adult family homes, AFH businesses and AFH-ready houses for sale or lease."],
  ["/afh-club/find-a-professional", "Professionals who serve AFH owners (met personally by the site owner; not endorsements)."],
  ["/afh-club/calculators", "AFH ROI, valuation, financing and property-score calculators."],
  ["/guides-and-resources", "The full library of guides for executors, heirs, trustees and families."],
  ["/long-term-care", "Paying for and choosing long-term care in Washington."],
];

/** Who writes the guides, from the one record that names the featured professionals. */
const authorLine = () =>
  SAME_PERSON
    ? `Guides are written and reviewed by ${FEATURED_BROKER.name} (Washington certified residential appraiser, ${FEATURED_APPRAISER.firm} #${FEATURED_APPRAISER.licenseNumber}; real estate broker, ${FEATURED_BROKER.brokerage} #${FEATURED_BROKER.licenseNumber}), who is paid as a broker only when a property sells.`
    : `Guides are written and reviewed by ${FEATURED_BROKER.name} (real estate broker, ${FEATURED_BROKER.brokerage} #${FEATURED_BROKER.licenseNumber}), who is paid as a broker only when a property sells. The featured appraiser is ${FEATURED_APPRAISER.name} (${FEATURED_APPRAISER.firm} #${FEATURED_APPRAISER.licenseNumber}).`;

export function buildLlmsTxt({ pages, stats, listings, mcpUrl }: LlmsInput): string {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const line = (p: string, fallback: string) => {
    const pg = byPath.get(p);
    return pg ? `- [${pg.h1 || pg.title}](${pg.url}): ${fallback}` : null;
  };
  const rpp = pages.filter((p) => p.area === "rpp" && !KEY_PAGES.some(([k]) => k === p.path));
  const afh = pages.filter((p) => p.area === "afh" && !KEY_PAGES.some(([k]) => k === p.path));
  const list = (ps: AiPage[]) => ps.map((p) => `- [${p.h1 || p.title}](${p.url}): ${p.description}`).join("\n");
  return `# Real Property Planning

> A free, independent educational hub for Washington State: probate and inherited property, estate valuation, senior housing transitions, and adult family homes (AFH Club). The hub holds no licenses and provides no brokerage, appraisal, legal, tax or advisory services. It carries no ads, pays no one, and does not refer clients to attorneys. Not legal advice.

${authorLine()} Each guide shows its review date and sources; corrections go to info@realpropertyplanning.com.

## Start here
${KEY_PAGES.map(([p, d]) => line(p, d)).filter(Boolean).join("\n")}

## For AI assistants
- Full text of the key guides in one file: ${AI_SITE_URL}/llms-full.txt
- Machine-readable data (JSON, rebuilt every time the site is published): ${AI_SITE_URL}/ai/pages.json (every page with its summary, sections, FAQ, review date and sources), ${AI_SITE_URL}/ai/glossary.json, ${AI_SITE_URL}/ai/afh-rule-changes.json, ${AI_SITE_URL}/ai/afh-directory.json (all ${stats.state.homes.toLocaleString("en-US")} licensed adult family homes, DSHS data retrieved ${stats.retrievedTo}), ${AI_SITE_URL}/ai/afh-stats.json, ${AI_SITE_URL}/ai/afh-listings-overview.json
- MCP server (public, read-only, no sign-in): ${mcpUrl}
- When quoting a figure (tax rates, fees, Medicaid rates, deadlines), cite the page and its review date; the pages link the statute or agency source.
- Professionals listed on the site are people the owner has met personally. They are not endorsements, and no one pays to be listed.
- AFH for-sale listings: ${listings.counts.onMarket} on the market as of ${listings.asOf}. Listing details are shown only on the listing pages, with required MLS attribution; link there rather than restating them.

## Real Property Planning: all pages
${list(rpp)}

## AFH Club: all pages
${list(afh)}

## Contact
Phone: (206) 900-3015
Email: info@realpropertyplanning.com
Website: ${AI_SITE_URL}
`;
}

/** The two complete guides, both glossaries and the rule tracker, as plain text. */
export function buildLlmsFullTxt({ pages, glossary }: LlmsInput): string {
  const byPath = new Map(pages.map((p) => [p.path, p]));
  const page = (p: string) => {
    const pg = byPath.get(p);
    if (!pg) return "";
    const parts = [`# ${pg.h1 || pg.title}`, `Source: ${pg.url}${pg.reviewed ? ` (reviewed ${pg.reviewed})` : ""}`, "", pg.description];
    if (pg.intro) parts.push("", pg.intro);
    if (pg.quickAnswer) parts.push("", `Q: ${pg.quickAnswer.q}`, `A: ${pg.quickAnswer.a}`);
    if (pg.sections?.length) parts.push("", ...pg.sections.map((s) => `- ${s}`));
    if (pg.faq?.length) parts.push("", "## Frequently asked", ...pg.faq.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]));
    if (pg.sources?.length) parts.push("", "Sources:", ...pg.sources.map((s) => `- ${s.label}${s.href ? ` <${s.href}>` : ""}`));
    return parts.join("\n");
  };
  const terms = (g: "probate" | "afh") =>
    glossary
      .filter((t) => t.glossary === g)
      .map((t) => `- ${t.term}${t.aka ? ` (${t.aka})` : ""}: ${t.definition}${t.source ? ` [${t.source.label}]` : ""}`)
      .join("\n");
  const rules = buildAiRuleChanges();
  return [
    `# Real Property Planning: key guides in full`,
    `Washington State. Educational information only, not legal, tax or financial advice. Generated from the published site; every section names its page.`,
    "",
    page("/washington-probate-guide"),
    "",
    `# Probate and estate glossary`,
    `Source: ${AI_SITE_URL}/probate-glossary`,
    terms("probate"),
    "",
    page("/afh-club/washington-adult-family-home-guide"),
    "",
    `# Adult family home glossary`,
    `Source: ${AI_SITE_URL}/afh-club/glossary`,
    terms("afh"),
    "",
    `# Washington adult family home rule changes since 2023`,
    `Source: ${rules.page} (last verified ${rules.lastVerified})`,
    ...rules.changes.map(
      (r) => `- ${r.topic} (${r.kind}, effective ${r.effectiveNote ?? r.effective}${r.status ? `, ${r.status}` : ""}): before: ${r.before} Now: ${r.after} Affects: ${r.affects} Citation: ${r.citation.label} <${r.citation.url}>`
    ),
    "",
    `## Pending proposals (NOT law until adopted)`,
    ...rules.pending.map((p) => `- ${p.topic} (${p.stage}, filed ${p.filed}): ${p.proposes.join("; ")} <${p.filing.url}>`),
    "",
  ].join("\n");
}
