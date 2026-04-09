import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const SITE_URL = "https://www.realpropertyplanning.com";

interface RouteMeta {
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  /** AEO quick-answer block — rendered first in SSG content for crawler extraction */
  quickAnswerQ?: string;
  quickAnswerA?: string;
  sections?: string[];
  cities?: string[];
}

const ROUTE_METADATA: Record<string, RouteMeta> = {
  "/": {
    title: "Probate Real Estate & Inherited Property Guidance | Real Property Planning",
    description:
      "Real Property Planning helps attorneys, executors, trustees, fiduciaries, and families navigate probate real estate, inherited homes, estate sales, and senior transitions throughout Washington State.",
    h1: "Probate, Estate & Senior Transition Real Estate in Washington State",
    quickAnswerQ: "What does Real Property Planning do?",
    quickAnswerA: "Real Property Planning helps executors, trustees, attorneys, and families sell probate, estate, inherited, and senior-transition properties throughout Washington State. David Stein combines 20+ years as a licensed broker and state-certified residential appraiser to provide accurate pricing, hands-on coordination, and clear communication from first conversation through closing.",
    intro:
      "David Stein helps executors, trustees, attorneys, and families navigate property transitions across Washington State — probate sales, inherited homes, senior moves, and trust property — guided by 20+ years as a licensed broker and certified appraiser.",
    sections: [
      "Probate & Estate Property Sales — Experienced guidance for selling inherited homes, trust-owned real estate, and estate property across King, Snohomish, Pierce, Skagit, and Kitsap Counties.",
      "Senior Transitions & Downsizing Support — Thoughtful real estate guidance for families navigating a move from a longtime home to assisted living, independent living, or smaller housing.",
      "Valuation-Informed Strategy — As both a broker and certified appraiser, David provides pricing insight grounded in professional valuation experience.",
    ],
    cities: [
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Mercer Island", "Issaquah",
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek",
      "Tacoma", "University Place", "Gig Harbor", "Puyallup",
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Mount Vernon", "Burlington", "Anacortes",
    ],
  },
  "/for-attorneys": {
    title: "Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning",
    description:
      "Real Property Planning supports attorneys and fiduciaries with probate real estate, inherited property sales, trust-owned homes, valuation insight, and coordinated property guidance throughout Washington State.",
    h1: "A Real Estate Resource for Attorneys and Fiduciaries",
    quickAnswerQ: "How does David Stein support attorneys with estate and probate real estate?",
    quickAnswerA: "David handles the real estate side of estate, probate, and family law matters — property assessment, valuation-informed pricing, preparation coordination, and sale management — so attorneys and their clients can focus on the legal and financial priorities.",
    intro:
      "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, estate transitions, and senior housing moves throughout Washington State.",
  },
  "/executors": {
    title: "Estate Property Guide for Executors & Trustees | Real Property Planning",
    description:
      "First time managing an estate property? David Stein walks executors and trustees through every step — assessing the home, coordinating preparation, pricing it right, and handling the sale.",
    h1: "A Practical Guide for Executors and Trustees Managing Estate Property",
    quickAnswerQ: "What should an executor do when there is real estate in the estate?",
    quickAnswerA: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and market value. David Stein — a licensed Washington broker and certified residential appraiser — handles property evaluation, preparation, pricing, and the full sale process.",
    intro:
      "First time managing an estate property? David Stein walks executors and trustees through every step — assessing the home, coordinating preparation, pricing it right, and handling the sale from start to finish.",
  },
  "/probate-estate-sales": {
    title: "Probate Property Sales & Estate Real Estate | Real Property Planning",
    description:
      "Real Property Planning provides experienced guidance for probate real estate, estate property sales, inherited homes, and trust-owned property throughout Washington State.",
    h1: "Probate Property Sales and Estate Real Estate",
    intro:
      "Probate sales involve court timelines, fiduciary duties, deferred maintenance, and family coordination. David Stein manages the entire real estate process throughout Washington State so executors and attorneys can focus on what they do best.",
  },
  "/why-valuation-matters": {
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making throughout Washington State.",
    h1: "Why Valuation Matters for Probate and Inherited Property",
    quickAnswerQ: "Why does property valuation matter in estate and probate sales?",
    quickAnswerA: "Accurate valuation prevents the two most expensive mistakes in estate property sales: overpricing that leads to months of carrying costs and lost buyer interest, and underpricing that leaves tens of thousands of dollars on the table.",
    intro:
      "Accurate valuation is the foundation of every successful estate property sale. David Stein's dual credentials as a real estate broker and certified appraiser provide a unique perspective on pricing strategy throughout Washington State.",
  },
  "/senior-transitions": {
    title: "Senior Home Sales & Downsizing Support | Real Property Planning",
    description:
      "Real Property Planning provides thoughtful real estate support for downsizing, relocation, assisted living moves, and senior housing transitions throughout Washington State.",
    h1: "Senior Transition Real Estate Support",
    quickAnswerQ: "How does David Stein help seniors and families sell a longtime home?",
    quickAnswerA: "David provides patient, step-by-step guidance for seniors and families transitioning from a longtime home — whether moving to assisted living, downsizing, or relocating closer to family. He evaluates the home's condition, coordinates preparation, prices it accurately, and manages the sale.",
    intro:
      "When a parent or loved one needs to sell the family home, the process should feel steady — not rushed. David Stein works at the family's pace, handling preparation, pricing, and the sale with patience and care throughout Washington State.",
  },
  "/how-the-process-works": {
    title: "How the Process Works — Estate Property Sales | Real Property Planning",
    description:
      "From initial consultation to closing day — here is exactly how David Stein helps executors, attorneys, and families sell probate, inherited, and trust-owned property throughout Washington State.",
    h1: "How the Process Works",
    quickAnswerQ: "How do estate and probate property sales work in Washington State?",
    quickAnswerA: "David Stein follows a clear seven-step process: initial consultation, property evaluation and valuation-informed pricing, preparation and vendor coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support.",
    intro:
      "From initial consultation to closing day — here is exactly how David Stein helps executors, attorneys, and families sell probate, inherited, and trust-owned property throughout Washington State.",
  },
  "/how-we-work": {
    title: "How David Stein Works With Attorneys, Executors, Trustees & Families",
    description:
      "Learn how David Stein collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during estate property transitions.",
    h1: "How David Stein Works With Attorneys, Executors, Trustees, and Families",
    intro:
      "David Stein collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during probate, trust, and estate property transitions.",
  },
  "/attorney-referral": {
    title: "Attorney & Professional Referral Resource | Real Property Planning",
    description:
      "David Stein is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters throughout Washington State.",
    h1: "Attorney and Professional Referral Resource for Probate Real Estate",
    intro:
      "David Stein is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters throughout Washington State.",
  },
  "/for-cpas": {
    title: "Real Estate Guidance for CPAs | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State.",
    h1: "Real Estate Guidance for CPAs and Their Clients",
    intro:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for CPAs and their clients throughout Washington State.",
  },
  "/for-financial-planners": {
    title: "Real Estate Guidance for Financial Planners | Real Property Planning",
    description:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients throughout Washington State.",
    h1: "Real Estate Guidance for Financial Planners and Their Clients",
    intro:
      "Real Property Planning provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance for financial planners and their clients throughout Washington State.",
  },
  "/for-senior-living-professionals": {
    title: "For Senior Living & Transition Professionals | Real Property Planning",
    description:
      "Real Property Planning works with senior living communities, move managers, downsizing specialists, and estate sale companies when a home is part of a major life transition throughout Washington State.",
    h1: "For Senior Living and Transition Professionals",
    intro:
      "Real Property Planning works with senior living communities, move managers, downsizing specialists, and estate sale companies when a home is part of a major life transition throughout Washington State.",
  },
  "/for-referral-partners": {
    title: "For Professional Referral Partners | Real Property Planning",
    description:
      "Learn how Real Property Planning collaborates with attorneys, CPAs, senior move managers, and other professionals who assist families navigating probate property and estate transitions.",
    h1: "For Professional Referral Partners",
    intro:
      "Real Property Planning collaborates with attorneys, CPAs, senior move managers, and other professionals who assist families navigating probate property, estate transitions, and senior housing decisions.",
  },
  "/about": {
    title: "About David Stein — Broker & Certified Appraiser | Real Property Planning",
    description:
      "Meet David Stein — the Washington broker and certified appraiser behind Real Property Planning. Over 20 years of focused experience helping attorneys, executors, and families with estate property.",
    h1: "About David Stein",
    intro:
      "David Stein is a licensed real estate broker and Washington state certified residential appraiser with over 20 years of focused experience in probate real estate, inherited property, estate sales, and senior transitions throughout Washington State, with a strong focus in Western Washington and the Puget Sound region.",
  },
  "/faq": {
    title: "Probate Real Estate FAQ | Real Property Planning",
    description:
      "Answers to common questions about probate real estate, inherited homes, estate sales, trust-owned property, valuation, executors, and senior transitions in Washington.",
    h1: "Frequently Asked Questions About Probate Real Estate",
    intro:
      "Answers to common questions about probate real estate, inherited homes, estate sales, trust-owned property, valuation, executors, and senior transitions in Washington.",
  },
  "/terminology": {
    title: "Wills, Probate & Real Property Glossary | Real Property Planning",
    description:
      "A clear glossary of wills, probate, inheritance, and real property terms to help attorneys, executors, trustees, and families understand estate-related real estate.",
    h1: "Wills, Probate, and Real Property Glossary",
    intro:
      "A clear glossary of wills, probate, inheritance, and real property terms to help attorneys, executors, trustees, and families understand the process of managing and selling estate-related real estate.",
  },
  "/contact": {
    title: "Contact David Stein | Probate & Estate Real Estate",
    description:
      "Have a property tied to probate, a trust, an inheritance, or a senior transition? Contact David Stein for a confidential consultation. Serving clients throughout Washington State.",
    h1: "Contact David Stein",
    intro:
      "Have a property tied to probate, a trust, an inheritance, or a senior transition? Contact David Stein for a confidential consultation. Serving clients throughout Washington State.",
  },
  "/counties": {
    title: "Washington State Service Areas | Probate & Estate Real Estate",
    description:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation, and senior transition support for clients throughout Washington State.",
    h1: "Washington State Service Areas",
    intro:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation-informed strategy, and senior transition support for clients throughout Washington State, with especially strong experience in Western Washington and the Puget Sound region.",
  },
  "/cities-we-serve": {
    title: "Cities We Serve Throughout Washington State | Real Property Planning",
    description:
      "David Stein serves cities throughout Washington State for probate real estate, inherited property, trust-owned homes, and estate-related sales.",
    h1: "Cities We Serve Throughout Washington State",
    intro:
      "David Stein serves clients throughout Washington State — including Seattle, Bellevue, Kirkland, Everett, Tacoma, Gig Harbor, Bremerton, Bainbridge Island, and dozens of other communities.",
  },
  "/counties/king": {
    title: "King County Probate Real Estate | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors, attorneys, and families in King County — Seattle, Bellevue, Kirkland, Redmond, and surrounding communities.",
    h1: "Estate and Inherited Property Sales in King County",
    quickAnswerQ: "How do probate and estate property sales work in King County?",
    quickAnswerA: "King County's intense buyer demand and wide price variation make accurate pricing especially critical for estate sales. David Stein — a licensed broker and certified residential appraiser — evaluates each property's condition and market position, coordinates preparation and sale, and provides defensible pricing that standard agents cannot match.",
    intro:
      "King County is Washington's largest and most competitive real estate market. Estate properties here range from Capitol Hill bungalows to Eastside homes valued well over a million dollars — making accurate pricing and experienced coordination especially critical.",
    cities: [
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
      "Issaquah", "Sammamish", "Mercer Island", "Shoreline", "Renton", "Newcastle",
      "Kenmore", "Lake Forest Park", "Burien", "Federal Way", "Kent",
    ],
  },
  "/counties/snohomish": {
    title: "Snohomish County Probate Real Estate | Real Property Planning",
    description:
      "Probate real estate and inherited property sales support for families and fiduciaries in Snohomish County — Everett, Edmonds, Lynnwood, Mukilteo, and surrounding areas.",
    h1: "Estate and Inherited Property Sales in Snohomish County",
    quickAnswerQ: "How do inherited home decisions and pricing work in Snohomish County?",
    quickAnswerA: "Snohomish County spans waterfront communities like Edmonds and Mukilteo, established suburbs like Mill Creek and Bothell, and growing towns like Lake Stevens and Monroe — each with its own buyer pool and pricing dynamics. David Stein evaluates each property in its specific context.",
    intro:
      "Snohomish County spans waterfront communities, established suburbs, and growing towns — each with its own buyer pool and pricing dynamics that require local expertise for estate and inherited property sales.",
    cities: [
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek", "Bothell",
      "Snohomish", "Lake Stevens", "Marysville", "Monroe", "Arlington",
    ],
  },
  "/counties/pierce": {
    title: "Pierce County Probate Real Estate | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors and families in Pierce County — Tacoma, Puyallup, Gig Harbor, Lakewood, and surrounding communities.",
    h1: "Estate and Inherited Property Sales in Pierce County",
    quickAnswerQ: "What should executors and families know about selling inherited property in Pierce County?",
    quickAnswerA: "Pierce County's diverse neighborhoods — from Tacoma's North End to Gig Harbor's waterfront — create distinct buyer pools and pricing dynamics. David Stein provides practical, valuation-informed guidance for estate property preparation, pricing, and sale.",
    intro:
      "Pierce County's diverse communities require locally informed guidance for estate property sales. David Stein works with executors, trustees, and families throughout Tacoma, Gig Harbor, Puyallup, Lakewood, and surrounding areas.",
    cities: [
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ],
  },
  "/counties/kitsap": {
    title: "Kitsap County Probate Real Estate | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for executors and families in Kitsap County — Bainbridge Island, Poulsbo, Bremerton, Silverdale, and surrounding areas.",
    h1: "Estate and Inherited Property Sales in Kitsap County",
    quickAnswerQ: "How do probate and estate property sales work in Kitsap County?",
    quickAnswerA: "Kitsap County's waterfront properties, military-adjacent communities, and island logistics create unique valuation and coordination challenges for estate sales. David Stein's dual credentials as a broker and certified appraiser provide the depth needed for these distinctive properties.",
    intro:
      "Kitsap County's waterfront properties, military-adjacent communities, and island logistics create unique challenges for estate property sales that require locally informed, valuation-based guidance.",
    cities: [
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Port Orchard", "Kingston", "Suquamish",
    ],
  },
  "/counties/skagit": {
    title: "Skagit County Probate Real Estate | Real Property Planning",
    description:
      "Probate real estate and inherited property sales guidance for families and fiduciaries in Skagit County — Mount Vernon, Anacortes, Burlington, and surrounding communities.",
    h1: "Estate and Inherited Property Sales in Skagit County",
    quickAnswerQ: "How do estate property sales work in Skagit County?",
    quickAnswerA: "Skagit County's agricultural heritage, waterfront communities, and small-town character create valuation considerations that standard market analysis often misses. David Stein provides hands-on guidance for estate and inherited property sales throughout the county.",
    intro:
      "Skagit County's agricultural heritage, waterfront communities, and small-town character create unique dynamics for estate property sales that benefit from experienced, valuation-informed guidance.",
    cities: [
      "Mount Vernon", "Burlington", "Anacortes", "Sedro-Woolley",
      "La Conner", "Concrete", "Bow", "Edison",
    ],
  },
  "/resources": {
    title: "Resources | Real Property Planning",
    description:
      "Trusted professionals and service providers for probate, estate, and senior transition needs throughout Washington State.",
    h1: "Transition Resources and Professional Directory",
    intro:
      "Trusted professionals and service providers for probate, estate, and senior transition needs throughout Washington State.",
  },
  "/resources/senior-move-managers": {
    title: "Senior Move Managers | Resources | Real Property Planning",
    description:
      "Senior move management professionals in Washington State who coordinate and manage the physical and emotional aspects of relocating seniors.",
    h1: "Senior Move Managers in Washington State",
    intro:
      "Senior move management professionals in Washington State who coordinate and manage the physical and emotional aspects of relocating seniors.",
  },
  "/resources/estate-sale-companies": {
    title: "Estate Sale Companies | Resources | Real Property Planning",
    description:
      "Estate sale companies in Washington State that organize, price, and conduct sales of personal property and household contents during probate and estate transitions.",
    h1: "Estate Sale Companies in Washington State",
    intro:
      "Estate sale companies in Washington State that organize, price, and conduct sales of personal property and household contents during probate and estate transitions.",
  },
  "/resources/probate-estate-attorneys": {
    title: "Probate & Estate Attorneys | Resources | Real Property Planning",
    description:
      "Probate and estate attorneys in Washington State who guide families and fiduciaries through the probate process and estate administration.",
    h1: "Probate and Estate Attorneys in Washington State",
    intro:
      "Probate and estate attorneys in Washington State who guide families and fiduciaries through the probate process and estate administration.",
  },
  "/resources/cpas-financial-advisors": {
    title: "CPAs & Financial Advisors | Resources | Real Property Planning",
    description:
      "CPAs and financial advisors in Washington State who help with estate tax, capital gains, and financial planning related to inherited property.",
    h1: "CPAs and Financial Advisors in Washington State",
    intro:
      "CPAs and financial advisors in Washington State who assist with estate tax, capital gains, and financial planning related to inherited property.",
  },
  "/resources/senior-living-communities": {
    title: "Senior Living Communities | Resources | Real Property Planning",
    description:
      "Assisted living, independent living, and memory care communities throughout Washington State for families navigating senior housing transitions.",
    h1: "Senior Living Communities in Washington State",
    intro:
      "Assisted living, independent living, and memory care communities throughout Washington State for families navigating senior housing transitions.",
  },
  "/resources/property-preparation-services": {
    title: "Property Prep Services | Resources | Real Property Planning",
    description:
      "Cleanout, staging, repair, and preparation services for estate and transition properties throughout Washington State.",
    h1: "Property Preparation Services in Washington State",
    intro:
      "Cleanout, staging, repair, and preparation services for estate and transition properties throughout Washington State.",
  },
  "/resources/moving-relocation-services": {
    title: "Moving & Relocation | Resources | Real Property Planning",
    description:
      "Moving companies and relocation specialists experienced with estate and senior transitions throughout Washington State.",
    h1: "Moving and Relocation Services in Washington State",
    intro:
      "Moving companies and relocation specialists experienced with estate and senior transitions throughout Washington State.",
  },
  "/how-to-move-elderly-parents": {
    title: "How to Move Elderly Parents | Real Property Planning",
    description:
      "A compassionate step-by-step guide for families navigating senior housing transitions in Washington State — from recognizing when it's time to move through selling the family home.",
    h1: "How to Move Elderly Parents Out of Their Home in Washington State",
    intro:
      "A compassionate step-by-step guide for families navigating senior housing transitions in Washington State — from recognizing when it's time to move through selling the family home.",
  },
  "/transition-resources": {
    title: "Transition Resources for Families | Real Property Planning",
    description:
      "A curated starting point for families and professionals navigating probate, downsizing, inherited property, senior moves, and other major housing transitions throughout Washington State.",
    h1: "Transition Resources for Families and Professionals",
    intro:
      "A curated starting point for families, attorneys, senior living professionals, and others navigating probate, downsizing, inherited property, senior moves, and other major housing transitions throughout Washington State.",
  },
  "/services": {
    title: "Services | Real Property Planning",
    description:
      "Explore Real Property Planning's services including probate property sales, senior transitions, executor support, and estate-related real estate guidance throughout Washington State.",
    h1: "Real Property Planning Services",
    quickAnswerQ: "What services does Real Property Planning provide?",
    quickAnswerA: "Real Property Planning provides probate property sales, senior transition support, executor and trustee guidance, attorney referral coordination, and valuation-informed pricing strategy — all backed by David Stein's dual credentials as a licensed broker and certified residential appraiser.",
    intro:
      "Probate property sales, senior transitions, executor support, and estate-related real estate guidance throughout Washington State.",
  },
  "/testimonials": {
    title: "Testimonials & Reviews | Real Property Planning",
    description:
      "Read client reviews and testimonials about working with Real Property Planning for probate property sales, estate transitions, and senior moves throughout Washington State.",
    h1: "Client Testimonials and Reviews",
    intro:
      "Read what clients say about working with Real Property Planning for probate property sales, estate transitions, and senior moves throughout Washington State.",
  },
};

const replaceTag = (html: string, regex: RegExp, replacement: string) =>
  regex.test(html) ? html.replace(regex, replacement) : html;

const applyMetadata = (html: string, route: string, meta: RouteMeta) => {
  const { title, description, h1, intro, sections, cities } = meta;
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

  // Inject static SSG content into <div id="root"> for crawler visibility
  if (h1 || intro) {
    const { quickAnswerQ, quickAnswerA } = meta;
    const ssgParts: string[] = [];
    ssgParts.push(`<div id="ssg-content" style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:40px 20px">`);

    // H1 first
    if (h1) ssgParts.push(`<h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px">${h1}</h1>`);

    // Quick Answer block — placed FIRST for AEO extraction priority
    if (quickAnswerQ && quickAnswerA) {
      ssgParts.push(`<div style="margin-bottom:24px;padding:20px;border:1px solid #e5e5e5;border-radius:12px;background:#fafafa">`);
      ssgParts.push(`<p style="font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#a8892f;margin:0 0 8px 0">Quick Answer</p>`);
      ssgParts.push(`<h2 style="font-size:1.25rem;line-height:1.3;margin:0 0 8px 0">${quickAnswerQ}</h2>`);
      ssgParts.push(`<p style="font-size:1.05rem;line-height:1.7;color:#444;margin:0">${quickAnswerA}</p>`);
      ssgParts.push(`</div>`);
    }

    // Intro paragraph
    if (intro) ssgParts.push(`<p style="font-size:1.1rem;line-height:1.7;color:#444">${intro}</p>`);

    // Optional section headings
    if (sections) {
      sections.forEach((s) => {
        const [heading, ...rest] = s.split(" — ");
        ssgParts.push(`<h2 style="font-size:1.3rem;margin-top:24px;margin-bottom:8px">${heading}</h2>`);
        if (rest.length) ssgParts.push(`<p style="color:#555;line-height:1.6">${rest.join(" — ")}</p>`);
      });
    }

    // NAP block — pushed lower for local SEO but below unique content
    ssgParts.push(`<div style="margin-top:28px;padding:20px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa">`);
    ssgParts.push(`<h2 style="font-size:1.2rem;margin:0 0 12px 0">Real Property Planning — David Stein</h2>`);
    ssgParts.push(`<p style="margin:4px 0;color:#444">Licensed Real Estate Broker &amp; Washington State Certified Residential Appraiser</p>`);
    ssgParts.push(`<p style="margin:4px 0;color:#444">eXp Realty</p>`);
    ssgParts.push(`<p style="margin:4px 0;color:#555">Phone: <a href="tel:2069003015" style="color:#1a365d">(206) 900-3015</a></p>`);
    ssgParts.push(`<p style="margin:4px 0;color:#555">Email: <a href="mailto:david@realpropertyplanning.com" style="color:#1a365d">david@realpropertyplanning.com</a></p>`);
    ssgParts.push(`<p style="margin:4px 0;color:#555">Mailing Address: PO Box 1462, Woodinville, WA 98072</p>`);
    ssgParts.push(`<p style="margin:4px 0;color:#555">Office: 1455 NW Leary Way, Seattle, WA 98107</p>`);
    ssgParts.push(`</div>`);

    // Areas Served block — last
    ssgParts.push(`<div style="margin-top:28px">`);
    ssgParts.push(`<h2 style="font-size:1.3rem;margin-bottom:12px">Washington State Service Areas</h2>`);
    if (cities && cities.length > 0) {
      ssgParts.push(`<p style="color:#555;line-height:1.8">${cities.join(" · ")}</p>`);
    }
    ssgParts.push(`<p style="color:#666;margin-top:8px;line-height:1.6">Serving clients throughout Washington State, with especially strong experience in Western Washington and the Puget Sound region.</p>`);
    ssgParts.push(`</div>`);

    ssgParts.push(`</div>`);

    out = out.replace(
      '<div id="root"></div>',
      `<div id="root">${ssgParts.join("")}</div>`
    );
  }

  return out;
};

const routeMetadataPlugin = {
  name: "route-metadata-prerender",
  apply: "build" as const,
  async closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    const baseHtmlPath = path.join(distDir, "index.html");
    let baseHtml: string;
    try {
      baseHtml = await readFile(baseHtmlPath, "utf8");
    } catch {
      // index.html not yet emitted (e.g. dev build or prior error) — skip SSG
      return;
    }

    await Promise.all(
      Object.entries(ROUTE_METADATA).map(async ([route, metadata]) => {
        const html = applyMetadata(baseHtml, route, metadata);
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
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
    routeMetadataPlugin,
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
