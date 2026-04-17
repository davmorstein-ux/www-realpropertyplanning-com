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
    title: "Probate & Estate Real Estate in Washington State | Real Property Planning",
    description:
      "Calm, experienced guidance for families navigating probate, inherited property, and senior housing transitions across Washington State. Licensed Broker & Certified Appraiser. Call (206) 900-3015.",
    h1: "Probate, Estate & Senior Transition Real Estate in Washington State",
    intro:
      "Guiding seniors, families, and professionals through real estate and housing transitions across Washington State — downsizing, relocation, probate, inherited property, and senior living decisions — with calm guidance, practical coordination, and clear next steps.",
    sections: [],
    cities: [
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Mercer Island", "Issaquah",
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek",
      "Tacoma", "University Place", "Gig Harbor", "Puyallup",
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Mount Vernon", "Burlington", "Anacortes",
    ],
  },
  "/for-attorneys": {
    title: "Probate Real Estate Services for Attorneys in Washington State | Real Property Planning",
    description:
      "A trusted real estate resource for attorneys handling probate and estate matters in Washington State. Licensed Broker & Certified Appraiser with deep expertise in inherited and court-supervised property sales.",
    h1: "Real Estate Support for Probate & Estate Attorneys",
    quickAnswerQ: "How does Real Property Planning support attorneys with estate and probate real estate?",
    quickAnswerA: "Our team handles the real estate side of estate, probate, and family law matters — property assessment, condition-based pricing, preparation coordination, and sale management — so attorneys and their clients can focus on the legal and financial priorities.",
    intro:
      "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, estate transitions, and senior housing moves throughout Washington State.",
  },
  "/executors": {
    title: "Help for Executors Selling Inherited Property in Washington State | Real Property Planning",
    description:
      "Are you an executor managing a probate property in Washington? Get calm, step-by-step guidance on pricing, preparing, and selling inherited real estate. Serving King, Snohomish & surrounding counties.",
    h1: "Guidance for Executors Managing Inherited Property",
    quickAnswerQ: "What should an executor do when there is real estate in the estate?",
    quickAnswerA: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and market value. Our team — combining licensed Washington brokerage and certified residential appraisal expertise — handles property evaluation, preparation, pricing, and the full sale process.",
    intro:
      "First time managing an estate property? Our team walks executors and trustees through every step — assessing the home, coordinating preparation, pricing it right, and handling the sale from start to finish.",
  },
  "/probate-estate-sales": {
    title: "Probate Home Sales in Washington State | Real Property Planning",
    description:
      "Selling a home through probate in Washington State? We guide families and estates through the process with expertise, patience, and clear next steps. Licensed Broker & Certified Appraiser.",
    h1: "Probate Real Estate Sales in Washington State",
    intro:
      "Probate sales involve court timelines, fiduciary duties, deferred maintenance, and family coordination. Our team manages the entire real estate process throughout Washington State so executors and attorneys can focus on what they do best.",
  },
  "/why-valuation-matters": {
    title: "Why Valuation Matters for Probate & Inherited Property | Real Property Planning",
    description:
      "Learn why accurate valuation matters for probate real estate, inherited homes, estate sales, trust-owned property, pricing strategy, and family decision-making throughout Washington State.",
    h1: "Why Valuation Matters for Probate and Inherited Property",
    quickAnswerQ: "Why does property valuation matter in estate and probate sales?",
    quickAnswerA: "Accurate valuation prevents the two most expensive mistakes in estate property sales: overpricing that leads to months of carrying costs and lost buyer interest, and underpricing that leaves tens of thousands of dollars on the table.",
    intro:
      "Accurate valuation is the foundation of every successful estate property sale. Combined real estate broker and certified appraiser credentials provide a unique perspective on pricing strategy throughout Washington State.",
  },
  "/senior-transitions": {
    title: "Senior Housing Transitions & Downsizing in Washington State | Real Property Planning",
    description:
      "Helping seniors and families navigate downsizing, relocation, and senior living decisions across Washington State. Compassionate coordination and clear next steps every step of the way.",
    h1: "Senior Housing Transitions & Downsizing in Washington State",
    quickAnswerQ: "How does Real Property Planning support senior housing transitions?",
    quickAnswerA: "Real Property Planning provides patient, step-by-step guidance for seniors and families transitioning from a longtime home — whether moving to assisted living, downsizing, or relocating closer to family. The process includes home evaluation, preparation coordination, accurate pricing, and full sale management.",
    intro:
      "When a parent or loved one needs to sell the family home, the process should feel steady — not rushed. Real Property Planning works at the family's pace, handling preparation, pricing, and the sale with patience and care throughout Washington State.",
  },
  "/how-the-process-works": {
    title: "How the Process Works — Estate Property Sales | Real Property Planning",
    description:
      "From initial consultation to closing day — here is exactly how Real Property Planning helps executors, attorneys, and families sell probate, inherited, and trust-owned property throughout Washington State.",
    h1: "How the Process Works",
    quickAnswerQ: "How does the estate and probate property sale process work?",
    quickAnswerA: "Real Property Planning follows a clear seven-step process: initial consultation, property evaluation and condition-based pricing, preparation and vendor coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support.",
    intro:
      "From initial consultation to closing day — here is exactly how Real Property Planning helps executors, attorneys, and families sell probate, inherited, and trust-owned property throughout Washington State.",
  },
  "/how-we-work": {
    title: "How We Work With Attorneys, Executors, Trustees & Families",
    description:
      "Learn how Real Property Planning collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during estate property transitions.",
    h1: "How We Work With Attorneys, Executors, Trustees, and Families",
    intro:
      "Our team collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during probate, trust, and estate property transitions.",
  },
  "/attorney-referral": {
    title: "Attorney & Professional Referral Resource | Real Property Planning",
    description:
      "Real Property Planning is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters throughout Washington State.",
    h1: "Attorney and Professional Referral Resource for Probate Real Estate",
    intro:
      "Real Property Planning is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters throughout Washington State.",
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
    title: "About Real Property Planning | Licensed Broker & Certified Appraiser in Washington State",
    description:
      "Real Property Planning helps families, seniors, and legal professionals navigate life's most important real estate transitions across Washington State with calm guidance and deep local expertise.",
    h1: "About Real Property Planning",
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
    title: "Contact Real Property Planning | Probate & Estate Real Estate in Washington State",
    description:
      "Ready to talk through your situation? Reach out to Real Property Planning for calm, knowledgeable guidance on probate, inherited property, or senior housing transitions. Call (206) 900-3015.",
    h1: "Get in Touch",
    intro:
      "Have a property tied to probate, a trust, an inheritance, or a senior transition? Contact Real Property Planning for a confidential consultation. Serving clients throughout Washington State.",
  },
  "/counties": {
    title: "Washington State Service Areas | Probate & Estate Real Estate",
    description:
      "Real Property Planning provides probate real estate, inherited property, estate sale, valuation, and senior transition support for clients throughout Washington State.",
    h1: "Washington State Service Areas",
    intro:
      "Real Property Planning provides probate real estate, inherited property, estate sale, condition-based pricing strategy, and senior transition support for clients throughout Washington State, with especially strong experience in Western Washington and the Puget Sound region.",
  },
  "/cities-we-serve": {
    title: "Cities We Serve Throughout Washington State | Real Property Planning",
    description:
      "Real Property Planning serves cities throughout Washington State for probate real estate, inherited property, trust-owned homes, and estate-related sales.",
    h1: "Cities We Serve Throughout Washington State",
    intro:
      "Real Property Planning serves clients throughout Washington State — including Seattle, Bellevue, Kirkland, Everett, Tacoma, Gig Harbor, Bremerton, Bainbridge Island, and dozens of other communities.",
  },
  "/king-county": {
    title: "Probate & Estate Real Estate in King County, WA | Real Property Planning",
    description:
      "Selling an inherited home in Seattle, the Eastside, or South King County. Neighborhood-level pricing for Capitol Hill, Mercer Island, Renton, Bellevue, and beyond.",
    h1: "Selling an Inherited Home in Seattle, the Eastside, or South King County",
    quickAnswerQ: "How does selling estate property work in King County's competitive market?",
    quickAnswerA: "King County's market is active, but condition-impaired or vacant estate properties don't automatically benefit. Our team starts with an honest, condition-adjusted valuation calibrated to the specific neighborhood and buyer pool — not a county-wide average.",
    intro:
      "From Capitol Hill craftsmans to Mercer Island waterfront and Renton ramblers — King County estate properties demand neighborhood-level pricing, not county averages. Our team helps families and executors navigate it carefully.",
    cities: [
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
      "Issaquah", "Sammamish", "Mercer Island", "Shoreline", "Renton", "Newcastle",
      "Kenmore", "Lake Forest Park", "Burien", "Federal Way", "Kent",
    ],
  },
  "/snohomish-county": {
    title: "Probate & Estate Real Estate in Snohomish County, WA | Real Property Planning",
    description:
      "Estate property sales from Edmonds to Monroe. Waterfront homes in Mukilteo, family houses in Mill Creek, rural acreage near Arlington — priced for the actual neighborhood.",
    h1: "Estate Property Sales from Edmonds to Monroe — Snohomish County, WA",
    quickAnswerQ: "How do probate and estate property sales work in Snohomish County?",
    quickAnswerA: "Snohomish County stretches from Edmonds and Mukilteo waterfronts to Mill Creek suburbs to rural acreage near Monroe and Arlington — each with its own buyer pool. Our team prices and prepares each estate property for the specific neighborhood it sits in.",
    intro:
      "Waterfront homes in Mukilteo, longtime family houses in Mill Creek, rural acreage near Arlington — every Snohomish corner has its own buyer pool. Our team prices and prepares each estate property for the actual neighborhood it sits in.",
    cities: [
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek", "Bothell",
      "Snohomish", "Lake Stevens", "Marysville", "Monroe", "Arlington",
    ],
  },
  "/pierce-county": {
    title: "Probate & Estate Real Estate in Pierce County, WA | Real Property Planning",
    description:
      "Inherited homes in Tacoma's North End, Gig Harbor waterfronts, and Puyallup family communities. Honest condition assessment and Pierce-County-specific pricing.",
    h1: "Inherited Homes in Tacoma, Gig Harbor, and Across Pierce County",
    quickAnswerQ: "What should executors know about selling inherited property in Pierce County?",
    quickAnswerA: "Pierce County's housing inventory leans older — many estate properties are pre-1950 craftsmans or mid-century homes carrying years of deferred maintenance. The right strategy depends on the specific neighborhood: a Stadium District craftsman is a different conversation than a Lakewood rambler or a Gig Harbor view lot.",
    intro:
      "Tacoma's North End craftsmans, Gig Harbor waterfronts, and Puyallup family homes each face a different buyer pool. Our team brings honest condition assessment and Pierce-County-specific pricing to estate property sales.",
    cities: [
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ],
  },
  "/kitsap-county": {
    title: "Probate & Estate Real Estate in Kitsap County, WA | Real Property Planning",
    description:
      "Estate property guidance for Bainbridge Island, Poulsbo, Bremerton, Silverdale, and Kitsap waterfront communities. Local pricing and coordination.",
    h1: "Estate and Inherited Property Sales in Kitsap County",
    intro:
      "Kitsap County's waterfront properties, military-adjacent communities, and ferry-served islands create distinctive valuation considerations for estate sales — Bainbridge premiums, Bremerton revitalization dynamics, and Poulsbo's small-town buyer pool each behave differently.",
    cities: [
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Port Orchard", "Kingston", "Suquamish",
    ],
  },
  "/skagit-county": {
    title: "Probate & Estate Real Estate in Skagit County, WA | Real Property Planning",
    description:
      "Estate and inherited property guidance for Mount Vernon, Anacortes, Burlington, and Skagit Valley communities. Local pricing for waterfront and farm properties.",
    h1: "Estate and Inherited Property Sales in Skagit County",
    intro:
      "Skagit County estate properties span Anacortes waterfront homes, Mount Vernon and Burlington town houses, and rural farmland in the valley — each with valuation considerations standard market analysis often misses.",
    cities: [
      "Mount Vernon", "Burlington", "Anacortes", "Sedro-Woolley",
      "La Conner", "Concrete", "Bow", "Edison",
    ],
  },
  "/seattle-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Seattle, WA | Real Property Planning",
    description:
      "Selling an inherited Seattle home — from Ballard to Beacon Hill. Neighborhood-specific pricing for Capitol Hill condos, West Seattle craftsmans, and Magnolia view homes.",
    h1: "Selling an Inherited Seattle Home — From Ballard to Beacon Hill",
    intro:
      "A Capitol Hill condo, a West Seattle craftsman, and a Magnolia view home are three completely different sales — different buyer pools, different prep decisions, different price ceilings. Estate properties inside Seattle city limits reward neighborhood-specific pricing far more than they reward broad market averages.",
  },
  "/bellevue-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Bellevue, WA | Real Property Planning",
    description:
      "Bellevue estate and trust property sales for higher-value homes — Bridle Trails, Somerset, West Bellevue, Newport Shores, and Medina. Defensible pricing for fiduciaries.",
    h1: "Bellevue Estate & Trust Property Sales — Built for Higher-Value Homes",
    intro:
      "Bellevue estate sales often involve trust-owned property, multiple beneficiaries, and homes in the $1.5M–$5M range where a 2% pricing error becomes a six-figure mistake. Bridle Trails, Somerset, West Bellevue, and Newport Shores each carry their own buyer expectations — and the prep that makes sense for a Medina view home is rarely the prep that makes sense for a Crossroads condo.",
  },
  "/tacoma-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Tacoma, WA | Real Property Planning",
    description:
      "Inherited Tacoma homes — North End craftsmans, Stadium District character homes, South End ramblers. Targeted prep for the Tacoma buyer pool.",
    h1: "Inherited Tacoma Homes — North End Craftsmans to South End Ramblers",
    intro:
      "Many Tacoma estate homes were built before 1950 and carry decades of deferred maintenance — character-rich houses in the North End and Stadium District, mid-century ramblers in the South End, and post-war homes across Hilltop and Eastside. The right move is rarely \"fix everything\"; it's knowing which targeted repairs the Tacoma buyer pool will actually pay for, and which ones to skip.",
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
    quickAnswerA: "Real Property Planning provides probate property sales, senior transition support, executor and trustee guidance, attorney referral coordination, and condition-based pricing strategy — backed by dual credentials as a licensed brokerage with certified residential appraisal expertise.",
    intro:
      "Probate property sales, senior transitions, executor support, and estate-related real estate guidance throughout Washington State.",
  },
  "/services/senior-transitions": {
    title: "Senior Transitions Services | Real Property Planning",
    description:
      "Senior transition support for selling a longtime home, coordinating preparation, and guiding families through major housing decisions throughout Washington State.",
    h1: "Senior Transitions",
    quickAnswerQ: "How does Real Property Planning help with senior transitions?",
    quickAnswerA: "Real Property Planning helps seniors and families sell a longtime home with patient, step-by-step guidance around preparation, pricing, timing, and coordination during a major housing transition.",
    intro:
      "Support for seniors and families navigating the sale of a longtime home during downsizing, assisted living moves, relocation, or other major housing transitions.",
  },
  "/testimonials": {
    title: "Testimonials & Reviews | Real Property Planning",
    description:
      "Read client reviews and testimonials about working with Real Property Planning for probate property sales, estate transitions, and senior moves throughout Washington State.",
    h1: "Client Testimonials and Reviews",
    intro:
      "Read what clients say about working with Real Property Planning for probate property sales, estate transitions, and senior moves throughout Washington State.",
  },
  "/guides-and-resources": {
    title: "Guides & Resources | Probate, Estate & Senior Transition Guidance | Real Property Planning",
    description:
      "Clear, practical guides for families, executors, trustees, and professionals navigating probate, inherited property, senior transitions, pricing, and real estate decisions in Washington State.",
    h1: "Guides & Resources",
    intro:
      "Practical answers to common questions about probate, inherited homes, senior transitions, pricing, and the professionals who help — written in plain language for families, executors, trustees, and professionals throughout Washington State.",
  },
};

const DEFAULT_SHELL_META: RouteMeta = ROUTE_METADATA["/"] || {
  title: "Real Property Planning | Washington State Real Estate Guidance",
  description:
    "Real Property Planning helps seniors, families, executors, trustees, attorneys, and fiduciaries navigate probate real estate, inherited homes, senior transitions, and housing change across Washington State.",
};

const replaceTag = (html: string, regex: RegExp, replacement: string) =>
  regex.test(html) ? html.replace(regex, replacement) : html;

const buildSsgContent = (meta: RouteMeta) => {
  const { h1, intro, sections, cities, quickAnswerQ, quickAnswerA } = meta;

  if (!h1 && !intro) return "";

  const ssgParts: string[] = [];
  ssgParts.push(`<div id="ssg-content" style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:40px 20px">`);

  if (h1) ssgParts.push(`<h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px">${h1}</h1>`);

  if (quickAnswerQ && quickAnswerA) {
    ssgParts.push(`<div style="margin-bottom:24px;padding:20px;border:1px solid #e5e5e5;border-radius:12px;background:#fafafa">`);
    ssgParts.push(`<p style="font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#a8892f;margin:0 0 8px 0">Quick Answer</p>`);
    ssgParts.push(`<h2 style="font-size:1.25rem;line-height:1.3;margin:0 0 8px 0">${quickAnswerQ}</h2>`);
    ssgParts.push(`<p style="font-size:1.05rem;line-height:1.7;color:#444;margin:0">${quickAnswerA}</p>`);
    ssgParts.push(`</div>`);
  }

  if (intro) ssgParts.push(`<p style="font-size:1.1rem;line-height:1.7;color:#444">${intro}</p>`);

  if (sections) {
    sections.forEach((s) => {
      const [heading, ...rest] = s.split(" — ");
      ssgParts.push(`<h2 style="font-size:1.3rem;margin-top:24px;margin-bottom:8px">${heading}</h2>`);
      if (rest.length) ssgParts.push(`<p style="color:#555;line-height:1.6">${rest.join(" — ")}</p>`);
    });
  }

  ssgParts.push(`<div style="margin-top:28px;padding:20px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa">`);
  ssgParts.push(`<h2 style="font-size:1.2rem;margin:0 0 12px 0">Real Property Planning</h2>`);
  ssgParts.push(`<p style="margin:4px 0;color:#444">Licensed Real Estate Brokerage &amp; Certified Residential Appraisal</p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#444">eXp Realty</p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#555">Phone: <a href="tel:2069003015" style="color:#1a365d">(206) 900-3015</a></p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#555">Email: <a href="mailto:info@realpropertyplanning.com" style="color:#1a365d">info@realpropertyplanning.com</a></p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#555">Mailing Address: PO Box 1462, Woodinville, WA 98072</p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#555">Office: 1455 NW Leary Way, Seattle, WA 98107</p>`);
  ssgParts.push(`</div>`);

  ssgParts.push(`<div style="margin-top:28px">`);
  ssgParts.push(`<h2 style="font-size:1.3rem;margin-bottom:12px">Washington State Service Areas</h2>`);
  if (cities && cities.length > 0) {
    ssgParts.push(`<p style="color:#555;line-height:1.8">${cities.join(" · ")}</p>`);
  }
  ssgParts.push(`<p style="color:#666;margin-top:8px;line-height:1.6">Serving clients throughout Washington State, with especially strong experience in Western Washington and the Puget Sound region.</p>`);
  ssgParts.push(`</div>`);

  ssgParts.push(`</div>`);
  return ssgParts.join("");
};

const buildRouteAwareShellScript = () => {
  // Build a compact JSON map of route -> {title, description, h1, intro, quickAnswerQ, quickAnswerA}
  // This is embedded inline so no XHR is needed (Lovable hosting returns root index.html for all paths)
  const routeMap: Record<string, { t: string; d: string; h1?: string; intro?: string; qQ?: string; qA?: string }> = {};
  for (const [route, meta] of Object.entries(ROUTE_METADATA)) {
    routeMap[route] = {
      t: meta.title,
      d: meta.description,
      ...(meta.h1 ? { h1: meta.h1 } : {}),
      ...(meta.intro ? { intro: meta.intro } : {}),
      ...(meta.quickAnswerQ ? { qQ: meta.quickAnswerQ } : {}),
      ...(meta.quickAnswerA ? { qA: meta.quickAnswerA } : {}),
    };
  }
  const mapJson = JSON.stringify(routeMap);

  return `<script>(function(){
var R=${mapJson};
var normalizePath=function(p){var n=p||"/";try{n=decodeURIComponent(n);}catch(e){}if(!n.startsWith("/"))n="/"+n;if(n.endsWith("/index.html"))n=n.slice(0,-11)||"/";if(n.length>1&&n.endsWith("/"))n=n.slice(0,-1);return n||"/";};
var route=normalizePath(window.location.pathname);
var m=R[route];
if(!m)return;
if(m.t)document.title=m.t;
var setMeta=function(sel,attr,val){var el=document.querySelector(sel);if(el)el.setAttribute(attr,val);else{el=document.createElement("meta");var parts=sel.match(/\\[([^=]+)="([^"]+)"\\]/);if(parts){el.setAttribute(parts[1],parts[2]);}el.setAttribute(attr,val);document.head.appendChild(el);}};
setMeta('meta[name="description"]',"content",m.d);
setMeta('meta[property="og:title"]',"content",m.t);
setMeta('meta[property="og:description"]',"content",m.d);
setMeta('meta[name="twitter:title"]',"content",m.t);
setMeta('meta[name="twitter:description"]',"content",m.d);
var canon=route==="/"?"${SITE_URL}":"${SITE_URL}"+route;
setMeta('meta[property="og:url"]',"content",canon);
var link=document.querySelector('link[rel="canonical"]');if(link)link.setAttribute("href",canon);else{link=document.createElement("link");link.rel="canonical";link.href=canon;document.head.appendChild(link);}
var root=document.getElementById("root");
if(root&&m.h1){var html='<div id="ssg-content" style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:40px 20px">';
html+='<h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px">'+m.h1+'</h1>';
if(m.qQ&&m.qA){html+='<div style="margin:20px 0;padding:20px;border:1px solid #e2e2e2;border-radius:12px;background:#fafaf8"><p style="font-weight:700;text-transform:uppercase;letter-spacing:0.1em;font-size:0.7rem;color:#a8892f;margin:0 0 6px 0">Quick Answer</p><h2 style="font-size:1.25rem;line-height:1.3;margin:0 0 8px 0">'+m.qQ+'</h2><p style="font-size:1.05rem;line-height:1.7;color:#444;margin:0">'+m.qA+'</p></div>';}
if(m.intro){html+='<p style="font-size:1.1rem;line-height:1.7;color:#444">'+m.intro+'</p>';}
html+='</div>';root.innerHTML=html;}
})();</script>`;
};

const injectRouteAwareShell = (html: string) => {
  const script = buildRouteAwareShellScript();
  // Insert script right after </head><body> or before the closing </body>
  // Since SSG content may already be inside #root, match the closing </div> of #root
  return html.replace("</body>", `${script}</body>`);
};

const applyMetadata = (
  html: string,
  route: string,
  meta: RouteMeta,
  options: { injectSsg?: boolean } = {}
) => {
  const { title, description } = meta;
  const { injectSsg = true } = options;
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

  if (injectSsg) {
    const ssgContent = buildSsgContent(meta);
    if (ssgContent) {
    out = out.replace(
      '<div id="root"></div>',
      `<div id="root">${ssgContent}</div>`
    );
    }
  }

  return out;
};

const writeRouteHtmlVariants = async (
  distDir: string,
  route: string,
  routeHtml: string
) => {
  const relativeRoutePath = route.slice(1);
  const directoryIndexPath = path.join(distDir, relativeRoutePath, "index.html");
  const htmlAliasPath = path.join(distDir, `${relativeRoutePath}.html`);

  await Promise.all([
    mkdir(path.dirname(directoryIndexPath), { recursive: true }),
    mkdir(path.dirname(htmlAliasPath), { recursive: true }),
  ]);

  await Promise.all([
    writeFile(directoryIndexPath, routeHtml, "utf8"),
    writeFile(htmlAliasPath, routeHtml, "utf8"),
  ]);
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
      return;
    }

    const rootHtml = injectRouteAwareShell(
      applyMetadata(baseHtml, "/", DEFAULT_SHELL_META, { injectSsg: true })
    );
    await writeFile(baseHtmlPath, rootHtml, "utf8");

    await Promise.all(
      Object.entries(ROUTE_METADATA)
        .filter(([route]) => route !== "/")
        .map(async ([route, metadata]) => {
          const routeHtml = applyMetadata(baseHtml, route, metadata);
          await writeRouteHtmlVariants(distDir, route, routeHtml);
        })
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
