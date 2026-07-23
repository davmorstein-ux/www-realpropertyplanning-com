import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "path";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

// Skip optimization for images smaller than 10KB
const MIN_OPTIMIZE_BYTES = 10 * 1024;


const SITE_URL = "https://realpropertyplanning.com";

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
      "Calm, experienced guidance for probate, inherited property, and senior housing transitions across Washington State. Call (206) 900-3015.",
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
  "/for-attorneys/how-it-works": {
    title: "How Real Property Planning Works With Attorneys | Referral Process",
    description:
      "A clear, document-style walkthrough of how Real Property Planning supports Washington estate, probate, and family law attorneys from referral through closing — including what we handle and how to make a referral.",
    h1: "How Real Property Planning Works With Attorneys",
    intro:
      "This page is for Washington State estate and probate attorneys who refer clients for real estate services. It walks through exactly what happens after the referral, what Real Property Planning handles on your behalf, and how to send a file over.",
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
    title: "Skagit County Probate & Estate Real Estate | Real Property Planning",
    description:
      "Estate and inherited property guidance for Mount Vernon, Anacortes, Burlington, and the Skagit Valley. Local pricing for waterfront and farm properties.",
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

  // ─── Counties (remaining 17) — H1 pattern: "{County}, WA" ──────────────
  "/whatcom-county": {
    title: "Probate & Estate Real Estate in Whatcom County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Bellingham, Ferndale, Lynden, and the Whatcom County communities. Local pricing for waterfront, rural, and in-town homes.",
    h1: "Whatcom County, WA",
    intro: "From Bellingham bayfront homes to Lynden farmhouses and Ferndale family neighborhoods, Whatcom County estate properties span very different buyer pools. Our team prices and prepares each property for the actual market it sits in.",
  },
  "/thurston-county": {
    title: "Probate & Estate Real Estate in Thurston County, WA | Real Property Planning",
    description: "Estate and inherited property sales across Olympia, Lacey, Tumwater, and the South Sound. Honest condition assessment and Thurston-County-specific pricing.",
    h1: "Thurston County, WA",
    intro: "Olympia's older established neighborhoods, Lacey's mid-century inventory, and Tumwater's family communities each carry different buyer expectations. Our team brings condition-based pricing calibrated to the actual neighborhood.",
  },
  "/clark-county": {
    title: "Probate & Estate Real Estate in Clark County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Vancouver, Camas, Battle Ground, Ridgefield, and the Southwest Washington market. Pricing built for the local Portland-metro buyer pool.",
    h1: "Clark County, WA",
    intro: "Clark County estate sales play to a Portland-influenced buyer pool — Vancouver waterfront condos, Camas family homes, and Battle Ground acreage each behave differently. Our team prices for the actual sub-market, not the metro average.",
  },
  "/spokane-county": {
    title: "Probate & Estate Real Estate in Spokane County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Spokane, Spokane Valley, Liberty Lake, and the Inland Northwest. Honest condition-based pricing for the Spokane buyer pool.",
    h1: "Spokane County, WA",
    intro: "Spokane's South Hill craftsmans, Spokane Valley ramblers, and Liberty Lake newer construction draw different buyers and tolerate different prep choices. Our team brings condition-adjusted pricing built for the Spokane market — not Westside assumptions.",
  },
  "/benton-county": {
    title: "Probate & Estate Real Estate in Benton County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Kennewick, Richland, West Richland, and the Tri-Cities. Local pricing calibrated to the Benton County buyer pool.",
    h1: "Benton County, WA",
    intro: "Tri-Cities estate properties — Kennewick family homes, Richland mid-centurys, West Richland newer construction — reward neighborhood-specific pricing and an honest read on condition. Our team handles the full sale process with that local discipline.",
  },
  "/yakima-county": {
    title: "Probate & Estate Real Estate in Yakima County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Yakima, Selah, Sunnyside, and the lower Yakima Valley. Honest pricing calibrated to local buyer expectations and decades-held homes.",
    h1: "Yakima County, WA",
    intro: "Yakima Valley buyers expect honest pricing and negotiate hard on condition. Our team prices each estate property based on its actual features — not Westside comparables that don't translate.",
  },
  "/franklin-county": {
    title: "Probate & Estate Real Estate in Franklin County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Pasco, West Pasco, and the Tri-Cities side of Franklin County. Pricing built for the local agricultural-and-suburban buyer pool.",
    h1: "Franklin County, WA",
    intro: "Pasco's growing neighborhoods and Franklin County's mix of newer construction and rural acreage call for buyer-pool-specific pricing. Our team brings condition-based valuation and full sale coordination for executors, trustees, and families.",
  },
  "/cowlitz-county": {
    title: "Probate & Estate Real Estate in Cowlitz County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Longview, Kelso, Castle Rock, and the Lower Columbia. Honest pricing for Cowlitz County's regional buyer pool.",
    h1: "Cowlitz County, WA",
    intro: "Longview's established neighborhoods, Kelso family homes, and Castle Rock acreage each carry their own pricing dynamics. Our team brings condition-adjusted valuation built for the Cowlitz County market.",
  },
  "/grays-harbor-county": {
    title: "Probate & Estate Real Estate in Grays Harbor County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Aberdeen, Hoquiam, Montesano, Ocean Shores, and the Washington coast. Local pricing for coastal and inland properties.",
    h1: "Grays Harbor County, WA",
    intro: "Coastal properties in Ocean Shores, working-town homes in Aberdeen and Hoquiam, and rural acreage near Montesano all behave differently. Our team prices each estate property for the buyer pool it actually competes in.",
  },
  "/island-county": {
    title: "Probate & Estate Real Estate in Island County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Whidbey Island, Camano Island, Oak Harbor, Coupeville, Langley, and Freeland. Local pricing for waterfront and view homes.",
    h1: "Island County, WA",
    intro: "Whidbey and Camano estate properties — waterfront, view lots, and inland family homes — each carry distinct buyer pools shaped by ferry access, the Naval base, and second-home demand. Our team prices for the actual sub-market.",
  },
  "/jefferson-county": {
    title: "Probate & Estate Real Estate in Jefferson County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Port Townsend, Port Hadlock, Chimacum, and the Olympic Peninsula. Local pricing for historic, waterfront, and rural homes.",
    h1: "Jefferson County, WA",
    intro: "Port Townsend's Victorian-era homes, Port Hadlock waterfront properties, and Chimacum acreage attract different buyers and reward different prep choices. Our team brings condition-based pricing calibrated to the local market.",
  },
  "/lewis-county": {
    title: "Probate & Estate Real Estate in Lewis County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Centralia, Chehalis, Napavine, and the I-5 corridor through Lewis County. Honest local pricing for in-town and rural homes.",
    h1: "Lewis County, WA",
    intro: "Lewis County's mix of established Centralia and Chehalis neighborhoods, smaller-town homes, and rural acreage each behave differently. Our team prices each estate property for the actual buyer pool — not regional averages.",
  },
  "/mason-county": {
    title: "Probate & Estate Real Estate in Mason County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Shelton, Belfair, Allyn, Hoodsport, and Mason County's waterfront and rural communities. Local pricing for varied property types.",
    h1: "Mason County, WA",
    intro: "Mason County estate properties span Shelton in-town homes, Belfair and Allyn waterfront, and rural acreage across the peninsula. Our team brings condition-based pricing built for each sub-market's specific buyer pool.",
  },
  "/pacific-county": {
    title: "Probate & Estate Real Estate in Pacific County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Long Beach, Ilwaco, Raymond, South Bend, and Pacific County's coastal communities. Honest pricing for coastal and inland properties.",
    h1: "Pacific County, WA",
    intro: "Long Beach Peninsula vacation homes, Ilwaco coastal properties, and Raymond and South Bend in-town houses each face very different buyer pools. Our team prices each estate property for its actual market.",
  },
  "/san-juan-county": {
    title: "Probate & Estate Real Estate in San Juan County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for San Juan Island, Orcas Island, Lopez Island, and the San Juans. Local pricing for waterfront, view, and island properties.",
    h1: "San Juan County, WA",
    intro: "San Juan, Orcas, and Lopez Island estate properties draw a specific buyer pool shaped by ferry access, second-home demand, and limited inventory. Our team prices each property for the actual island sub-market.",
  },
  "/skamania-county": {
    title: "Probate & Estate Real Estate in Skamania County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Stevenson, Carson, North Bonneville, and the Columbia River Gorge area. Local pricing for rural, view, and waterfront homes.",
    h1: "Skamania County, WA",
    intro: "Skamania County's Columbia Gorge properties — Stevenson in-town homes, Carson rural acreage, and view lots near North Bonneville — each carry their own pricing dynamics. Our team brings condition-based valuation tailored to the local market.",
  },
  "/wahkiakum-county": {
    title: "Probate & Estate Real Estate in Wahkiakum County, WA | Real Property Planning",
    description: "Estate and inherited property guidance for Cathlamet, Skamokawa, and Wahkiakum County's Lower Columbia communities. Local pricing for rural, river, and in-town homes.",
    h1: "Wahkiakum County, WA",
    intro: "Wahkiakum County estate properties — Cathlamet town homes, Skamokawa river properties, and rural acreage — each face a small, specific buyer pool. Our team brings honest pricing and full sale coordination for executors and families.",
  },

  // ─── Single-page service hubs ──────────────────────────────────────────
  "/real-estate-appraiser": {
    title: "Certified Real Estate Appraiser in Washington State | Real Property Planning",
    description: "Licensed and certified real estate appraiser serving all of Washington State. Residential, estate, probate, and senior transition appraisals accepted by courts, lenders, and the IRS.",
    h1: "Certified Residential Real Estate Appraiser in Washington State",
    intro: "Washington State Certified Residential Appraiser providing valuations for probate, estate, trust, divorce, and senior transition matters — accepted by courts, lenders, attorneys, and the IRS.",
  },
  "/realtor": {
    title: "Realtor | Real Property Planning",
    description: "Experienced real estate guidance for seniors, families, executors, and professionals navigating important property decisions in Washington State.",
    h1: "Realtor Serving Seniors, Families, and Estate Transitions",
    intro: "Experienced real estate guidance for seniors, families, executors, trustees, and the professionals who advise them throughout Washington State.",
  },
  "/wills": {
    title: "Wills & Real Estate | What Families Need to Know | Real Property Planning",
    description: "Learn how wills affect real property decisions in Washington State. Understand what executors, heirs, and families should know about selling or transferring a home during estate administration.",
    h1: "Wills and Real Estate in Washington State",
    intro: "How wills affect real property decisions in Washington State — what executors, heirs, and families should know about selling or transferring a home during estate administration.",
  },
  "/power-of-attorney": {
    title: "Power of Attorney & Real Estate in Washington State | Real Property Planning",
    description: "If you hold Power of Attorney for an aging parent or loved one in Washington State, we can help you navigate real estate decisions, home sales, and certified appraisals with confidence.",
    h1: "Power of Attorney and Real Estate in Washington State",
    intro: "Practical guidance for agents holding Power of Attorney who must make real estate decisions for an aging parent or loved one — including sales, valuations, and timing.",
  },
  "/estate-liquidation": {
    title: "Estate Liquidation & Estate Sales | Real Property Planning",
    description: "Estate liquidation services in Washington State — from estate sales and cleanouts to donation coordination and preparing the home for market. Guidance for executors, heirs, and families.",
    h1: "Estate Liquidation and Estate Sales in Washington State",
    intro: "Coordinating estate sales, cleanouts, donation logistics, and preparing the home for market — practical estate liquidation guidance for executors, heirs, and families throughout Washington State.",
  },
  "/trustees": {
    title: "Trustees — Real Estate Guidance for Trust-Held Property | Real Property Planning",
    description: "Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State.",
    h1: "Real Estate Guidance for Trustees and Successor Trustees",
    intro: "Practical, fiduciary-aware real estate guidance for trustees and successor trustees managing the sale of trust-held property throughout Washington State.",
  },

  // ─── Educational guides (16) — each with unique H1/title/description ──
  "/guides/how-probate-real-estate-works": {
    title: "How Probate Real Estate Sales Work in Washington State | Real Property Planning",
    description: "A comprehensive guide to how probate property sales work in Washington — including legal authority, timing, pricing, preparation, and what executors and attorneys need to know.",
    h1: "How Probate Real Estate Sales Work in Washington State",
    intro: "A comprehensive walkthrough of how probate property sales work in Washington — legal authority, timing, pricing, preparation, and what executors and attorneys need to know.",
  },
  "/guides/what-executors-should-do": {
    title: "What Executors Should Do Before Selling an Inherited Home | Real Property Planning",
    description: "A practical step-by-step guide for executors and personal representatives — from securing the property and confirming authority to pricing, preparation, and managing the sale.",
    h1: "What Executors Should Do Before Selling an Inherited Home",
    intro: "Step-by-step guidance for executors and personal representatives — securing the property, confirming authority, pricing, preparing, and managing the sale.",
  },
  "/guides/appraisal-vs-cma": {
    title: "Appraisal vs. CMA for Probate & Estate Property | Real Property Planning",
    description: "Understand the difference between a formal appraisal and a CMA — and why it matters when selling probate, estate, or inherited property in Washington State.",
    h1: "Appraisal vs. CMA: What's the Difference for Estate Property?",
    intro: "When does an estate need a formal appraisal versus a Comparative Market Analysis? A clear breakdown of the differences and when each is appropriate.",
  },
  "/guides/out-of-state-families": {
    title: "How Out-of-State Families Can Manage a Washington Property Sale | Real Property Planning",
    description: "Practical guidance for remote executors, trustees, heirs, and families managing the sale of inherited or estate property in Washington State from out of state.",
    h1: "How Out-of-State Families Manage a Washington Property Sale",
    intro: "Practical guidance for remote executors, trustees, heirs, and families managing the sale of inherited or estate property in Washington State from out of state.",
  },
  "/guides/senior-transition-differences": {
    title: "How Senior Transition Sales Differ From Ordinary Home Sales | Real Property Planning",
    description: "Understanding the emotional, logistical, and practical differences between selling a longtime family home during a senior transition and a conventional real estate transaction.",
    h1: "How Senior Transition Sales Differ From Ordinary Home Sales",
    intro: "Understanding the emotional, logistical, and practical differences between selling a longtime family home during a senior transition and a conventional real estate transaction.",
  },
  "/guides/inherited-house-washington": {
    title: "What to Do With an Inherited House in Washington State | Real Property Planning",
    description: "A practical guide to your options when you inherit a house in Washington — including selling, keeping, renting, valuation, preparation, tax considerations, and family coordination.",
    h1: "What to Do With an Inherited House in Washington State",
    intro: "Your options when you inherit a house in Washington — selling, keeping, renting, valuation, preparation, tax considerations, and family coordination.",
  },
  "/guides/executor-sell-house-before-probate-washington": {
    title: "Can an Executor Sell a House Before Probate in Washington? | Real Property Planning",
    description: "Understanding when an executor can — and cannot — sell estate property in Washington State. Learn what steps to take while waiting for legal authority.",
    h1: "Can an Executor Sell a House Before Probate in Washington?",
    intro: "When an executor can — and cannot — sell estate property in Washington State, and what to do while waiting for legal authority.",
  },
  "/guides/appraisal-before-selling-inherited-property": {
    title: "Do I Need an Appraisal Before Selling Inherited Property? | Real Property Planning",
    description: "When a formal appraisal is needed for inherited property — and when a professional market assessment may be enough. A practical guide for executors and families.",
    h1: "Do I Need an Appraisal Before Selling Inherited Property?",
    intro: "When a formal appraisal is needed for inherited property — and when a professional market assessment is enough.",
  },
  "/guides/estate-property-repairs-before-sale": {
    title: "What Repairs Should Be Done Before Selling an Estate Property? | Real Property Planning",
    description: "A practical guide to deciding which repairs and improvements are worth making before selling an inherited or estate home — and which ones to skip.",
    h1: "What Repairs Should Be Done Before Selling an Estate Property?",
    intro: "Which repairs and improvements are worth making before selling an inherited or estate home — and which ones to skip.",
  },
  "/guides/heirs-disagree-selling-house": {
    title: "What Happens If Heirs Disagree on Selling a House? | Real Property Planning",
    description: "Practical guidance for families navigating heir disagreements about inherited property — understanding options, reaching agreement, and moving forward.",
    h1: "What Happens If Heirs Disagree on Selling a House?",
    intro: "Practical guidance for families navigating heir disagreements about inherited property — options, reaching agreement, and moving forward.",
  },
  "/guides/pricing-house-trust-estate": {
    title: "How Do You Price a House in a Trust or Estate? | Real Property Planning",
    description: "A practical guide to pricing estate and trust-owned property — why standard approaches fail and what valuation-informed strategy looks like.",
    h1: "How Do You Price a House in a Trust or Estate?",
    intro: "A practical guide to pricing estate and trust-owned property — why standard approaches fall short and what valuation-informed strategy looks like.",
  },
  "/guides/sell-house-during-probate-washington": {
    title: "Can You Sell a House During Probate in Washington State? | Real Property Planning",
    description: "Yes — once the executor has court-issued authority. Learn how the process works, what to expect, and how to avoid common mistakes when selling during probate.",
    h1: "Can You Sell a House During Probate in Washington State?",
    intro: "Yes — once the executor has court-issued authority. How the process works, what to expect, and how to avoid common mistakes.",
  },
  "/guides/taxes-selling-inherited-house-washington": {
    title: "What Taxes Do You Pay When Selling an Inherited House in Washington? | Real Property Planning",
    description: "Understanding capital gains, stepped-up basis, estate taxes, and other tax considerations when selling inherited property in Washington State.",
    h1: "What Taxes Do You Pay When Selling an Inherited House in Washington?",
    intro: "Capital gains, stepped-up basis, estate taxes, and other tax considerations when selling inherited property in Washington State.",
  },
  "/guides/how-long-sell-probate-property": {
    title: "How Long Does It Take to Sell a Probate Property? | Real Property Planning",
    description: "Realistic timelines for probate property sales in Washington State — from court authority to closing. Understand what affects the timeline and how to plan.",
    h1: "How Long Does It Take to Sell a Probate Property?",
    intro: "Realistic timelines for probate property sales in Washington State — from court authority to closing — and what affects the timeline.",
  },
  "/guides/executor-first-steps-house": {
    title: "What Should an Executor Do First With a House? | Real Property Planning",
    description: "A practical guide to the first decisions an executor needs to make about estate property — from securing the home to planning for sale.",
    h1: "What Should an Executor Do First With a House?",
    intro: "The first decisions an executor needs to make about estate property — from securing the home to planning for sale.",
  },
  "/guides/sell-inherited-house-as-is-or-fix": {
    title: "Should You Sell an Inherited House As-Is or Fix It Up? | Real Property Planning",
    description: "A practical guide to deciding whether to sell an inherited property as-is or invest in repairs. Understand the trade-offs and when each approach makes sense.",
    h1: "Should You Sell an Inherited House As-Is or Fix It Up?",
    intro: "Deciding whether to sell an inherited property as-is or invest in repairs — the trade-offs and when each approach makes sense.",
  },

  // ===== Guided Journey Hub pages =====
  "/helping-aging-parents": {
    title: "Helping Aging Parents — A Calm Family Roadmap | Real Property Planning",
    description: "Guidance for adult children and families supporting aging parents — housing, caregiving, downsizing, and major life decisions across Washington State.",
    h1: "Helping Aging Parents — A Calm Family Roadmap",
    intro: "A guided journey for families helping a parent or loved one through housing, care, and major life transitions — calm, practical, and free of pressure.",
  },
  "/estate-probate-inherited-property": {
    title: "Estate, Probate & Inherited Property — Guided Journey | Real Property Planning",
    description: "A clear roadmap for executors, trustees, heirs, and families managing estate, probate, and inherited property matters in Washington State.",
    h1: "Estate, Probate & Inherited Property — Where to Begin",
    intro: "A guided journey for executors, trustees, and heirs handling probate, estate settlement, and inherited real estate — step by step.",
  },
  "/what-should-we-do-first": {
    title: "What Should We Do First? — Guided First Steps | Real Property Planning",
    description: "A calm starting point for families facing housing, estate, or transition decisions. Plain-language first steps before any major move.",
    h1: "What Should We Do First?",
    intro: "When several decisions feel urgent at once, this guided journey helps families take a calm, ordered first step — before making any big move.",
  },
  "/what-to-do-with-the-house": {
    title: "What To Do With the House — Sell, Keep, or Prepare | Real Property Planning",
    description: "A guided roadmap for families deciding what to do with a family or inherited home — sell, keep, repair, or prepare for transition.",
    h1: "What To Do With the House",
    intro: "Sell, keep, repair, or prepare? A calm, guided journey for families weighing what to do with a family home or inherited property.",
  },
  "/understanding-housing-care-options": {
    title: "Understanding Housing & Care Options | Real Property Planning",
    description: "Plain-language overview of independent living, assisted living, memory care, adult family homes, and in-home support across Washington State.",
    h1: "Understanding Housing & Care Options",
    intro: "Compare independent living, assisted living, memory care, adult family homes, and in-home support — a calm orientation for families.",
  },
  "/understanding-senior-transitions": {
    title: "Understanding Senior Transitions | Real Property Planning",
    description: "A guided overview of senior moves, downsizing, housing changes, and family coordination across Washington State.",
    h1: "Understanding Senior Transitions",
    intro: "A calm guide to senior moves, downsizing, and the housing, care, and family coordination that goes with them.",
  },
  "/date-of-death-valuation-property-appraisals": {
    title: "Date-of-Death Valuation & Estate Property Appraisals | Real Property Planning",
    description: "Certified date-of-death valuations and estate property appraisals for probate, trusts, stepped-up basis, and tax filings in Washington State.",
    h1: "Date-of-Death Valuation & Estate Property Appraisals",
    intro: "A certified date-of-death appraisal supports stepped-up basis, estate filings, and fair distribution among heirs — performed to professional appraisal standards.",
  },
  "/estate-planning-powers-of-attorney": {
    title: "Estate Planning & Powers of Attorney — Guided Overview | Real Property Planning",
    description: "Plain-language overview of wills, trusts, powers of attorney, and estate planning basics for Washington State families.",
    h1: "Estate Planning & Powers of Attorney",
    intro: "A calm orientation to wills, trusts, powers of attorney, and the planning steps that protect families before a crisis develops.",
  },
  "/building-your-trusted-professional-team": {
    title: "Building Your Trusted Professional Team | Real Property Planning",
    description: "Connect with attorneys, CPAs, lenders, care managers, and other vetted professionals supporting estate, probate, and senior transition decisions.",
    h1: "Building Your Trusted Professional Team",
    intro: "Estates and senior transitions often require a coordinated team. This guided journey helps families connect with the right vetted professionals.",
  },
  "/downsizing-preparing-for-transition": {
    title: "Downsizing & Preparing for a Transition | Real Property Planning",
    description: "A calm, step-by-step guide to downsizing, sorting belongings, and preparing a longtime home for a senior move or major life transition.",
    h1: "Downsizing & Preparing for a Transition",
    intro: "Decades of belongings, a longtime home, and a major move ahead — a calm, step-by-step roadmap for families preparing to downsize.",
  },
  "/executor-responsibilities-first-steps": {
    title: "Executor Responsibilities — First Steps | Real Property Planning",
    description: "A practical roadmap for newly appointed executors and personal representatives in Washington State — duties, timelines, and first 30–60 days.",
    h1: "Executor Responsibilities — First Steps",
    intro: "Just appointed as executor or personal representative? A clear roadmap of your duties, timelines, and the most important first steps.",
  },
  "/preparing-home-for-sale-during-transition": {
    title: "Preparing a Home for Sale During a Major Transition | Real Property Planning",
    description: "Coordinated cleanout, repairs, and staging for estate, probate, and senior transition home sales across Washington State.",
    h1: "Preparing a Home for Sale During a Transition",
    intro: "Cleanout, repairs, staging — coordinated preparation for homes being sold during probate, estate settlement, or a senior move.",
  },
  "/selling-an-inherited-home": {
    title: "Selling an Inherited Home — Calm Roadmap | Real Property Planning",
    description: "A calm, plain-language roadmap for heirs, executors, and families selling an inherited home in Washington State — taxes, basis, timing, and process.",
    h1: "Selling an Inherited Home",
    intro: "A calm roadmap for heirs and executors selling an inherited home — covering taxes, basis, timing, heirs' coordination, and the sale process.",
  },
  "/aging-in-place-staying-home-safely": {
    title: "Aging in Place & Staying Home Safely | Real Property Planning",
    description: "A calm guide to aging in place, evaluating safety, and planning ahead for caregiving and housing decisions in Washington State.",
    h1: "Aging in Place & Staying at Home Safely",
    intro: "What aging in place really means — how families evaluate safety, plan ahead, and weigh in-home support against future housing changes.",
  },

  // ===== Bulk-added SSG coverage (144 previously-uncovered routes) =====
  "/afh-club": {
    title: "AFH Club | Adult Family Home Resource Network | Real Property Planning",
    description: "Washington State's premier resource network for Adult Family Home owners, prospective providers, buyers, and the professionals who serve them.",
    h1: "AFH Club",
  },
  "/afh-club/building-inspection": {
    title: "AFH Building & Inspection Requirements | AFH Club | Real Property Planning",
    description: "Complete guide to Washington State AFH building requirements — WABO inspection process, what WABO is, common modifications, new build vs remodel vs existing home, and septic requirements.",
    h1: "AFH Building Requirements & Inspections",
  },
  "/afh-club/buying-selling": {
    title: "Buying or Selling an AFH | AFH Club | Real Property Planning",
    description: "Complete guide to buying or selling an Adult Family Home in Washington State — CHOW process, what transfers, DSHS locator, specialty contracts, and real estate considerations.",
    h1: "Buying or Selling an Adult Family Home",
  },
  "/afh-club/calculators": {
    title: "AFH Calculators — ROI & Valuation Tools | Real Property Planning",
    description: "Professional financial tools built exclusively for Washington State Adult Family Homes — ROI calculator and valuation estimator.",
    h1: "AFH Calculators",
  },
  "/afh-club/costs-fees": {
    title: "AFH Costs & Fees | AFH Club | Real Property Planning",
    description: "Complete breakdown of Washington State Adult Family Home startup costs, annual licensing fees, liability insurance, building permits, and Medicaid rate information for 2025.",
    h1: "AFH Costs & Fees in Washington State",
  },
  "/afh-club/find-a-professional": {
    title: "Find an AFH Professional | AFH Club | Real Property Planning",
    description: "Directory of professional categories serving Washington State Adult Family Homes — real estate brokers, appraisers, management companies, CPAs, attorneys, and compliance consultants.",
    h1: "Find an AFH Professional",
  },
  "/afh-club/getting-started": {
    title: "Getting Started with an Adult Family Home | AFH Club | Real Property Planning",
    description: "Is an Adult Family Home right for you? A comprehensive guide to what AFHs are, who can open one, individual vs entity providers, and what to expect before applying.",
    h1: "Is an Adult Family Home Right for You?",
  },
  "/afh-club/licensing-certification": {
    title: "AFH Licensing & Certification | AFH Club | Real Property Planning",
    description: "Complete guide to Washington State AFH licensing — DSHS application process, Home Care Aide certification, background checks, HCA exemptions, and CHOW requirements.",
    h1: "AFH Licensing & Certification in Washington State",
  },
  "/afh-club/management-companies": {
    title: "AFH Management Companies | AFH Club | Real Property Planning",
    description: "Professional Adult Family Home management companies serving Washington State — Aura Living Care and other operators providing staffing, compliance, and care services.",
    h1: "AFH Management Companies",
  },
  "/afh-club/ownership-structure": {
    title: "AFH Ownership: Individual or LLC? | AFH Club | Real Property Planning",
    description: "Should you buy an Adult Family Home as an individual or through an LLC? A guide to financing, liability, tax, and Washington State licensing considerations for AFH buyers.",
    h1: "Should You Buy an Adult Family Home as an Individual or Through an LLC?",
  },
  "/afh-club/real-estate-broker": {
    title: "AFH Real Estate Broker | AFH Club | Real Property Planning",
    description: "Washington State licensed real estate broker specializing in Adult Family Home transactions — CHOW process, AFH valuations, and expert guidance for buyers and sellers.",
    h1: "AFH Real Estate Broker",
  },
  "/afh-club/regulations-compliance": {
    title: "AFH Regulations & Compliance | AFH Club | Real Property Planning",
    description: "A plain-language guide to Washington State DSHS inspections, enforcement levels, top AFH violations, and public lookup tools for Adult Family Homes.",
    h1: "Understanding DSHS Inspections & Compliance",
  },
  "/afh-club/resources": {
    title: "AFH Resource Library | AFH Club | Real Property Planning",
    description: "Everything you need to know about opening, operating, buying, or selling an Adult Family Home in Washington State — organized by topic.",
    h1: "AFH Resource Library",
  },
  "/afh-club/training-education": {
    title: "AFH Training & Education | AFH Club | Real Property Planning",
    description: "Complete guide to Washington State AFH training requirements — 75-hour HCA training, AFH Administrator Training, specialty courses, continuing education, and where to enroll.",
    h1: "AFH Training & Education Requirements",
  },
  "/afh-marketplace": {
    title: "AFH Marketplace — Washington Adult Family Homes for Sale | Real Property Planning",
    description: "Washington State Adult Family Homes for sale — property, business, or both. Filter by county, capacity, and price.",
    h1: "AFH Marketplace",
  },
  "/afh-submit": {
    title: "Sell Your AFH — Talk With David | Real Property Planning",
    description: "Thinking of selling your Adult Family Home in Washington? Start with a conversation with David Stein.",
    h1: "Thinking of Selling Your AFH?",
  },
  "/aging-life-care-managers": {
    title: "Aging Life Care Managers in Washington State | Real Property Planning",
    description: "Find certified aging life care managers and geriatric care professionals serving Washington State — helping families coordinate care, navigate transitions, and support older adults.",
    h1: "Aging Life Care Managers",
  },
  "/articles": {
    title: "Articles & Insights | Senior Housing, Probate & Estate Guidance — WA",
    description: "Plain-English articles on senior housing options, probate timelines, inherited property decisions, and estate transitions across Washington State.",
  },
  "/articles/affordable-senior-housing": {
    title: "Affordable Senior Housing for Older Adults: What to Expect",
    description: "Understand affordable senior housing options, income-based rent, waitlists, and what is included. Learn how to compare and apply for low-cost senior housing.",
    h1: "Affordable Senior Housing",
  },
  "/articles/aging-in-place": {
    title: "Aging in Place With Support: What Older Adults Should Expect",
    description: "Learn about aging in place with support, including costs, home care options, safety modifications, and how to compare staying home with senior housing.",
    h1: "Aging in Place With Support",
  },
  "/articles/ccrc-costs": {
    title: "Continuing Care Retirement Communities Costs: What to Expect",
    description: "Understand CCRC costs, entrance fees, monthly fees, contract types, and what is included. Compare continuing care retirement communities before committing.",
    h1: "Continuing Care Retirement Community Costs",
  },
  "/articles/how-to-choose-senior-housing": {
    title: "How to Choose Senior Housing: A Step-by-Step Guide for Families",
    description: "A practical step-by-step guide to help families choose senior housing by assessing needs, budget, options, visits, contracts, and moving.",
    h1: "How to Choose Senior Housing",
  },
  "/articles/independent-living-costs": {
    title: "Independent Living Costs for Older Adults: What to Expect",
    description: "Understand independent living costs for seniors. Learn what is included, extra fees to watch for, and how to compare communities before making a move.",
    h1: "Independent Living Costs",
  },
  "/articles/memory-care-costs": {
    title: "Memory Care Costs for Families: What to Expect",
    description: "Understand memory care costs for families. Learn what is included, extra fees to watch for, and how to compare communities before choosing memory care for a loved one.",
    h1: "Memory Care Costs",
  },
  "/articles/senior-housing-costs": {
    title: "Senior Housing Costs: What Older Adults and Families Should Expect",
    description: "Understand senior housing costs including independent living, assisted living, memory care, CCRCs, affordable housing, and aging in place with support.",
    h1: "Senior Housing Costs",
  },
  "/articles/senior-housing-guide": {
    title: "The Senior Housing Guide for Older Adults and Families: A Complete Resource",
    description: "A comprehensive senior housing guide covering independent living, assisted living, memory care, CCRCs, affordable housing, and aging in place with support.",
    h1: "The Senior Housing Guide",
  },
  "/articles/senior-housing-options": {
    title: "Senior Housing Options for Older Adults: Choosing the Right Next Home",
    description: "Explore senior housing options including independent living, assisted living, memory care, CCRCs, affordable housing, and aging in place with support.",
    h1: "Senior Housing Options",
  },
  "/articles/silver-tsunami": {
    title: "The Silver Tsunami: Aging America's Housing & Care Shift",
    description: "How the Silver Tsunami — millions of Baby Boomers turning 65 — is reshaping housing, retirement, caregiving, and senior support across America.",
    h1: "The Silver Tsunami Is Here",
  },
  "/articles/wills-trusts-other-options": {
    title: "How to Pass Real Estate to Your Children: Wills, Trusts, and Other Options | Real Property Planning",
    description: "A plain-language guide to the most common ways Washington homeowners transfer real estate to the next generation — and the tradeoffs each method carries.",
    h1: "How to Pass Real Estate to Your Children:",
  },
  "/attorneys/for-divorce-attorneys": {
    title: "Divorce Attorneys in Washington State | Real Property Planning",
    description: "A divorce attorney helps individuals and couples navigate the legal process of ending a marriage, including asset division and real property matters.",
    h1: "Divorce Attorney",
  },
  "/attorneys/for-elder-law-attorneys": {
    title: "Elder Law Attorneys in Washington State | Real Property Planning",
    description: "An elder law attorney helps seniors and families with long-term care planning, Medicaid, guardianship, and incapacity planning in Washington State.",
    h1: "Elder Law Attorney",
  },
  "/attorneys/for-family-law-attorneys": {
    title: "Family Law Attorneys in Washington State | Real Property Planning",
    description: "A family law attorney helps families with custody, parenting plans, guardianship, and spousal support — often intersecting with real estate decisions.",
    h1: "Family Law Attorney",
  },
  "/attorneys/for-real-estate-attorney": {
    title: "Real Estate Attorneys in Washington State | Real Property Planning",
    description: "A real estate attorney handles the legal side of property transactions — contracts, title issues, closings, and ownership transfers in Washington State.",
    h1: "Real Estate Attorney",
  },
  "/bellingham-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Bellingham, WA",
    description: "Guidance for executors and families with inherited or estate property in Bellingham, WA. Out-of-area support and coordinated decisions.",
    h1: "Helping Families Handle Inherited Property in Bellingham",
  },
  "/client-stories": {
    title: "Real Situations. Real Outcomes. | Real Property Planning",
    description: "See how Real Property Planning has helped executors, families, and trustees navigate real probate and estate property situations across Washington State.",
    h1: "Real Situations. Real Outcomes.",
  },
  "/cost-of-care-calculator": {
    title: "Cost of Care Calculator | Washington State Long-Term Care Costs",
    description: "Compare the cost of in-home care, assisted living, memory care, and nursing homes in Washington State versus national averages, with future cost projections.",
    h1: "Cost of Care Calculator",
  },
  "/counties/cowlitz": {
    title: "Probate & Estate Real Estate in Cowlitz County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Cowlitz County, Washington. Serving Longview, Kelso, Castle Rock & surrounding communities.",
    h1: "Cowlitz County, WA",
  },
  "/counties/grays-harbor": {
    title: "Probate & Estate Real Estate in Grays Harbor County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Grays Harbor County, Washington. Serving Aberdeen, Hoquiam, Ocean Shores & surrounding communities.",
    h1: "Grays Harbor County, WA",
  },
  "/counties/island": {
    title: "Probate & Estate Real Estate in Island County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Island County, Washington. Serving Whidbey Island, Camano Island, Oak Harbor, Coupeville & surrounding communities.",
    h1: "Island County, WA",
  },
  "/counties/jefferson": {
    title: "Probate & Estate Real Estate in Jefferson County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Jefferson County, Washington. Serving Port Townsend, Sequim, Port Hadlock & surrounding communities.",
    h1: "Jefferson County, WA",
  },
  "/counties/king": {
    title: "Probate & Estate Real Estate in King County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout King County, Washington. Serving Seattle, Bellevue, Kirkland, Redmond & more.",
    h1: "King County, WA",
  },
  "/counties/kitsap": {
    title: "Probate & Estate Real Estate in Kitsap County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Kitsap County. Serving Bremerton, Silverdale, Poulsbo, Bainbridge Island & more.",
    h1: "Kitsap County, WA",
  },
  "/counties/lewis": {
    title: "Probate & Estate Real Estate in Lewis County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Lewis County, Washington. Serving Chehalis, Centralia, Morton & surrounding communities.",
    h1: "Lewis County, WA",
  },
  "/counties/mason": {
    title: "Probate & Estate Real Estate in Mason County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Mason County, Washington. Serving Shelton, Belfair, Union, Hoodsport & surrounding communities.",
    h1: "Mason County, WA",
  },
  "/counties/pacific": {
    title: "Probate & Estate Real Estate in Pacific County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Pacific County, Washington. Serving Long Beach, Raymond, South Bend, Ilwaco & surrounding communities.",
    h1: "Pacific County, WA",
  },
  "/counties/pierce": {
    title: "Probate & Estate Real Estate in Pierce County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Pierce County. Serving Tacoma, Puyallup, Gig Harbor, Lakewood & more.",
    h1: "Inherited Homes in Tacoma, Gig Harbor, and Across Pierce County",
  },
  "/counties/san-juan": {
    title: "Probate & Estate Real Estate in San Juan County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout San Juan County, Washington. Serving San Juan Island, Orcas Island, Lopez Island & surrounding communities.",
    h1: "San Juan County, WA",
  },
  "/counties/skagit": {
    title: "Skagit County Probate & Estate Real Estate | Real Property Planning",
    description: "Probate, inherited property, and senior transitions across Skagit County — Mount Vernon, Burlington, Anacortes, La Conner, and more.",
    h1: "Probate & Estate Real Estate in Skagit County, Washington",
  },
  "/counties/skamania": {
    title: "Probate & Estate Real Estate in Skamania County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Skamania County, Washington. Serving Stevenson, North Bonneville, Carson & surrounding communities.",
    h1: "Skamania County, WA",
  },
  "/counties/snohomish": {
    title: "Probate & Estate Real Estate in Snohomish County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Snohomish County. Serving Everett, Edmonds, Lynnwood, Bothell, Woodinville & more.",
    h1: "Snohomish County, WA",
  },
  "/counties/thurston": {
    title: "Thurston County Probate & Estate Real Estate | Real Property Planning",
    description: "Probate, inherited property, and senior transitions across Thurston County — Olympia, Lacey, Tumwater, Yelm, and surrounding communities.",
    quickAnswerQ: "How do practical probate and estate sale strategies work in Thurston County?",
    quickAnswerA: "Thurston County's government-employment-driven market creates a steady buyer pool that behaves differently from faster-growing metro areas. Real Property Planning provides practical estate sale strategy grounded in Thurston County's measured market dynamics — helping executors and families set realistic expectations and move forward with clear plans.",
  },
  "/counties/wahkiakum": {
    title: "Probate & Estate Real Estate in Wahkiakum County, WA | Real Property Planning",
    description: "Experienced probate real estate, inherited home sales, and senior transition guidance throughout Wahkiakum County, Washington. Serving Cathlamet, Skamokawa & surrounding communities.",
    h1: "Wahkiakum County, WA",
  },
  "/disclaimer": {
    title: "Disclaimer | Real Property Planning",
    description: "Real Property Planning is an independent educational hub. We do not provide professional services; featured professionals are independent and not affiliates of Real Property Planning.",
    h1: "Disclaimer",
  },
  "/estate-liquidation/learn-more": {
    title: "Estate Liquidation & Estate Sales Explained — Washington State",
    description: "A detailed guide to estate liquidation and estate sales: what they are, when families need them, how the process works, what can be sold, and how liquidators are paid.",
    h1: "Estate Liquidation & Estate Sales Explained",
  },
  "/estate-liquidators": {
    title: "Estate Liquidators | Real Property Planning",
    description: "Featured Washington State estate liquidators helping families with estate sales, residential clear outs, and personal property liquidation.",
    h1: "Estate Liquidators",
  },
  "/estate-probate-inherited-property/first-steps": {
    title: "First Steps After a Death | Real Property Planning",
    description: "The early days after a loved one passes are overwhelming. Here are the calm, practical first steps to take — before any major decisions need to be made.",
  },
  "/estate-probate-inherited-property/preparing-the-property": {
    title: "Preparing the Property for Sale | Real Property Planning",
    description: "From cleanout to repairs to occupancy concerns — what to handle before an estate home goes to market, and how to make smart decisions about what's worth doing.",
  },
  "/estate-probate-inherited-property/professional-team": {
    title: "Building Your Professional Team | Real Property Planning",
    description: "Estate administration requires the right professionals working together. Here's who you need, what each one does, and how to assemble the right team.",
  },
  "/estate-probate-inherited-property/property-value": {
    title: "Understanding the Property's Value | Real Property Planning",
    description: "Estate property valuation has unique requirements. Here's what a date-of-death appraisal is, why it matters, and how it differs from a standard market estimate.",
  },
  "/estate-probate-inherited-property/what-to-do-with-the-property": {
    title: "Deciding What to Do With the Property | Real Property Planning",
    description: "Sell, keep, rent, or transfer — there's no single right answer for estate property. Here's how to think through the options carefully.",
  },
  "/everett-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Everett, WA",
    description: "Guidance for executors and families handling inherited homes in Everett, WA. Practical preparation help, realistic pricing, clear next steps.",
    h1: "Helping Everett Families Navigate Inherited Homes",
  },
  "/executor-responsibilities-first-steps/common-mistakes": {
    title: "Common Executor Mistakes — and How to Avoid Them | Real Property Planning",
    description: "Most executor mistakes are avoidable. Here are the ones that trip people up most often — and what to do instead.",
  },
  "/executor-responsibilities-first-steps/first-30-days": {
    title: "Your First 30 Days as Executor | Real Property Planning",
    description: "The weeks immediately after a death are overwhelming. Here's a clear, prioritized list of what actually needs to happen first — and what can wait.",
  },
  "/executor-responsibilities-first-steps/legal-duties": {
    title: "Understanding Your Legal Duties as Executor | Real Property Planning",
    description: "What are you actually responsible for as an executor or trustee? A plain-language overview of the legal obligations Washington State executors need to understand.",
  },
  "/executor-responsibilities-first-steps/property-decisions": {
    title: "What to Do With Real Estate in the Estate | Real Property Planning",
    description: "The family home is often the largest and most complicated asset in an estate. Here's what executors need to know about real property decisions.",
  },
  "/executors/executors-guide": {
    title: "Executor's Guide | Real Property Planning",
    description: "A practical guide for Washington State executors and Personal Representatives managing real estate in an estate.",
    h1: "Executor's Guide",
  },
  "/featured-senior-move-managers": {
    title: "Featured Senior Move Managers | Real Property Planning",
    description: "Featured Washington State senior move managers helping families with downsizing, relocation, and senior transitions.",
    h1: "Featured Senior Move Managers",
  },
  "/for-attorneys/divorce-attorneys": {
    title: "Divorce Attorneys in Washington State | Real Property Planning",
    description: "A divorce attorney helps individuals and couples navigate the legal process of ending a marriage, including asset division and real property matters.",
    h1: "Divorce Attorney",
  },
  "/for-attorneys/elder-law-attorneys": {
    title: "Real Estate Support for Elder Law Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning helps elder law attorneys and their clients navigate senior home sales, Medicaid planning property decisions, and estate transitions in Washington State.",
    h1: "Elder Law Attorneys",
  },
  "/for-attorneys/estate-planning-attorneys": {
    title: "Real Estate Support for Estate Planning Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning helps estate planning attorneys and their clients navigate property valuation, sale timing, and real estate coordination throughout Washington State.",
    h1: "Estate Planning Attorneys",
  },
  "/for-attorneys/family-law-attorneys": {
    title: "Real Estate Support for Family Law Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning provides neutral, experienced real estate support for family law attorneys and their clients navigating property decisions in Washington State.",
    h1: "Family Law Attorneys",
  },
  "/for-attorneys/probate-attorneys": {
    title: "Real Estate Support for Probate Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning coordinates property assessment, valuation, preparation, and sale for probate attorneys and their clients throughout Washington State.",
    h1: "Probate Attorneys",
  },
  "/for-attorneys/real-estate-attorneys": {
    title: "Real Estate Brokerage Support for Real Estate Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning works alongside real estate attorneys to provide market analysis, property coordination, and sale management when clients need both legal and real estate expertise.",
    h1: "Real Estate Attorneys",
  },
  "/for-divorce-attorneys": {
    title: "Divorce Attorneys in Washington State | Real Property Planning",
    description: "A divorce attorney helps individuals and couples navigate the legal process of ending a marriage, including asset division and real property matters.",
    h1: "Divorce Attorney",
  },
  "/for-elder-law-attorneys": {
    title: "Real Estate Support for Elder Law Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning helps elder law attorneys and their clients navigate senior home sales, Medicaid planning property decisions, and estate transitions in Washington State.",
    h1: "Elder Law Attorneys",
  },
  "/for-estate-planning-attorneys": {
    title: "Real Estate Support for Estate Planning Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning helps estate planning attorneys and their clients navigate property valuation, sale timing, and real estate coordination throughout Washington State.",
    h1: "Estate Planning Attorneys",
  },
  "/for-family-law-attorneys": {
    title: "Real Estate Support for Family Law Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning provides neutral, experienced real estate support for family law attorneys and their clients navigating property decisions in Washington State.",
    h1: "Family Law Attorneys",
  },
  "/for-probate-attorneys": {
    title: "Real Estate Support for Probate Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning coordinates property assessment, valuation, preparation, and sale for probate attorneys and their clients throughout Washington State.",
    h1: "Probate Attorneys",
  },
  "/gray-divorce": {
    title: "Gray Divorce and the Family Home in Washington State | Real Property Planning",
    description: "Guidance for Washington State couples over 50 navigating the family home during divorce. Calm, neutral real estate coordination from a Licensed Broker & Certified Appraiser.",
    h1: "Gray Divorce and Your Home — What Washington Couples Need to Know",
  },
  "/grey-divorce": {
    title: "Grey Divorce and the Grey Tsunami: Real Estate, Retirement and Family Planning After 50",
    description: "Learn what grey divorce means, how it connects to the Grey Tsunami, and why real estate, retirement, estate planning, and senior housing decisions matter for adults divorcing after age 50.",
    h1: "Grey Divorce and the Grey Tsunami",
  },
  "/guides/probate-vs-trust-sale-washington": {
    title: "Probate vs Trust Sale in Washington State — What's the Difference? | Real Property Planning",
    description: "Real Property Planning explains the key differences between probate sales and trust sales in Washington State. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties — (206) 900-3015.",
    h1: "Probate vs Trust Sale in Washington State — What's the Difference?",
  },
  "/home-new": {
    title: "Real Property Planning | Estate & Senior Resources",
    description: "Washington resource hub for probate real estate, inherited property, senior transitions, and trusted professional guidance.",
  },
  "/join-the-network": {
    title: "Join the Network | Real Property Planning Professional Referral Network | Washington State",
    description: "We connect seniors, families, executors, and attorneys with trusted local professionals. If you serve this community, join the Real Property Planning referral network.",
    h1: "Join the Real Property Planning Professional Network",
  },
  "/lenders-and-financing-specialists": {
    title: "Lenders & Financing Specialists | Real Property Planning",
    description: "Supporting clients with financing options and long-term planning. Connect with trusted lending professionals who help you explore reverse mortgage and retirement strategies.",
    h1: "Supporting Clients with Financing Options and Long-Term Planning",
  },
  "/long-term-care": {
    title: "Long-Term Care Options in Washington State | Real Property Planning",
    description: "A hub for understanding long-term care options in Washington State — nursing homes, Medicaid, WA Cares, hospital discharge planning, and how to choose the right care setting.",
    h1: "Understanding Long-Term Care in Washington",
  },
  "/long-term-care/finding-care-roomandcare": {
    title: "Finding Care: RoomandCare.com",
    description: "How Real Property Planning helps families evaluate RoomAndCare.com listings and other Adult Family Home options throughout Washington State.",
  },
  "/long-term-care/hospital-discharge-planning": {
    title: "Planning Your Hospital Discharge: A Guide for Washington Families",
    description: "A comprehensive guide to hospital discharge planning in Washington State — what questions to ask, understanding your options, and how to avoid readmission after a hospital stay.",
    h1: "Planning Your Hospital Discharge: A Guide for Washington Families",
  },
  "/long-term-care/how-to-choose-care-settings": {
    title: "How to Choose Between Care Settings: A Guide for Washington Families",
    description: "A practical guide to choosing between aging in place, adult family homes, assisted living, memory care, and nursing homes in Washington State — matched to actual care needs and budget.",
    h1: "How to Choose Between Care Settings: A Guide for Washington Families",
  },
  "/long-term-care/medicaid-and-long-term-care": {
    title: "Medicaid & Long-Term Care in Washington State: What Families Need to Know",
    description: "A comprehensive guide to Medicaid long-term care coverage in Washington State — eligibility, spend-down, adult family homes, assisted living, WA Cares, and why early planning matters.",
    h1: "Medicaid &amp; Long-Term Care in Washington State: What Families Need to Know",
  },
  "/long-term-care/nurse-delegation": {
    title: "The Nurse Delegation Program in Washington State: What Families Need to Know",
    description: "Learn how Washington State's Nurse Delegation Program allows trained caregivers to perform nursing tasks in home care and adult family home settings — and how Medicaid covers the cost.",
    h1: "The Nurse Delegation Program in Washington State: What Families Need to Know",
  },
  "/long-term-care/nursing-homes": {
    title: "Nursing Homes in Washington State: What Families Need to Know",
    description: "A comprehensive guide to nursing homes in Washington State — costs, staffing standards, how to research quality, Medicaid, WA Cares, and how to find the right fit for your family.",
    h1: "Nursing Homes in Washington State: What Families Need to Know",
  },
  "/long-term-care/short-term-nursing-home-stays": {
    title: "Short-Term Nursing Home Stays in Washington State: What Families Need to Know",
    description: "Learn how short-term skilled nursing care works in Washington State — Medicare coverage, rehabilitation quality, discharge planning, and how to navigate the transition back home.",
    h1: "Short-Term Nursing Home Stays in Washington State: What Families Need to Know",
  },
  "/long-term-care/wa-cares": {
    title: "WA Cares Fund: How It Fits Into Long-Term Care Planning and Housing Decisions",
    description: "A guide to Washington's WA Cares Fund — how it's funded, what it may pay for, who qualifies, and how it fits alongside home equity, Medicaid, and other long-term care planning strategies.",
    h1: "WA Cares Fund: How WA Cares Fits Into Long-Term Care Planning and Housing Decisions",
  },
  "/medicare-providers": {
    title: "Medicare Providers in Washington State | Real Property Planning",
    description: "Connect with trusted Medicare specialists in Washington State. Learn about Medicare Parts A, B, C, and D, enrollment timing, and how Medicare planning fits into senior life transitions.",
    h1: "Medicare Providers in Washington State",
  },
  "/mortgage-lenders": {
    title: "Mortgage Lenders | Real Property Planning",
    description: "Featured Washington State mortgage lenders supporting families with reverse mortgages, retirement financing, and home loans.",
    h1: "Featured Mortgage Lenders",
  },
  "/olympia-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Olympia, WA",
    description: "Guidance for families, executors, and seniors with estate or inherited property in Olympia, WA. Support for transitions, timing, and next steps.",
    h1: "Helping Families Navigate Estate Property in Olympia",
  },
  "/planning": {
    title: "Planning & Next Steps | Estate & Senior Transition Roadmap — WA",
    description: "A practical roadmap for planning ahead — estate prep, property decisions, and senior housing transitions guided with care across Washington State.",
  },
  "/planning-before-a-crisis": {
    title: "Planning Before a Crisis | Real Property Planning",
    description: "Most families wait until a health emergency or a loved one's passing to sort out housing and property. Learn what you can do now — while there's still time to plan calmly.",
    h1: "Planning Before a Crisis",
  },
  "/planning-before-a-crisis/conversations-to-have": {
    title: "The Conversations Worth Having Now | Real Property Planning",
    description: "Most families never ask an aging parent what they actually want. These are the questions worth asking — before circumstances force the answer.",
  },
  "/planning-before-a-crisis/how-we-can-help": {
    title: "How This Resource Helps | Real Property Planning",
    description: "Real Property Planning is an educational resource hub for seniors, families, executors, and professionals navigating housing transitions and estate property in Washington State.",
  },
  "/planning-before-a-crisis/legal-documents": {
    title: "The Legal Documents That Matter Most | Real Property Planning",
    description: "Four documents that protect your family's ability to act when it matters most — explained in plain language for Washington State families.",
  },
  "/planning-before-a-crisis/property-questions": {
    title: "The Property Questions to Think Through | Real Property Planning",
    description: "What is the home worth? What condition is it in? Who inherits it — and what happens if they disagree? The property questions families wish they'd thought through earlier.",
  },
  "/planning-before-a-crisis/when-a-move-is-coming": {
    title: "When a Move Seems Like It's Coming | Real Property Planning",
    description: "You can see the signs. A parent is struggling at home. A health event has changed things. Here's what to do when the question is no longer 'if' but 'when.'",
  },
  "/planning-before-a-crisis/why-planning-early": {
    title: "Why Planning Early Makes Such a Difference | Real Property Planning",
    description: "When housing and property decisions are made under pressure, families pay the price — financially and emotionally. Here's what's at stake when planning is left too late.",
  },
  "/professionals": {
    title: "Find a Professional | Real Property Planning | Western Washington",
    description: "A resource for families navigating estate settlement, inherited homes, and senior transitions — find trusted probate attorneys, senior housing advisors, financial planners, and more across the Puget Sound region.",
    h1: "The Right Team Makes All the Difference",
  },
  "/professionals-services": {
    title: "Professionals & Services | Estate, Probate & Senior Specialists — WA",
    description: "Connect with vetted attorneys, CPAs, lenders, appraisers, and senior transition specialists serving families across Washington State.",
    h1: "Professionals &amp; Services",
  },
  "/professionals/attorneys": {
    title: "Legal Professionals | Attorneys Directory | Real Property Planning",
    description: "Find experienced probate, estate planning, elder law, real estate, family law, and divorce attorneys serving Washington families.",
    h1: "Legal Professionals",
  },
  "/professionals/care-managers": {
    title: "Aging Life Care Managers & Social Workers | Puget Sound | Real Property Planning",
    description: "Find certified aging life care managers and geriatric social workers serving Western Washington — helping families coordinate care, navigate elder care decisions, and support older adults through major life transitions.",
  },
  "/professionals/estate-sale": {
    title: "Estate Sale & Personal Property Specialists | Puget Sound | Real Property Planning",
    description: "Find trusted estate sale companies and personal property specialists serving Western Washington — helping families sort, value, and sell belongings from an estate or senior downsizing.",
  },
  "/professionals/financial-planners": {
    title: "Financial Planners for Estate & Senior Transitions | Western Washington | Real Property Planning",
    description: "Find financial advisors and planners in the Puget Sound region who specialize in inherited assets, estate tax planning, and financial decisions during senior transitions.",
    h1: "Financial Planners & Advisors",
  },
  "/professionals/home-preparation": {
    title: "Home Preparation & Staging for Estate Sales | Western Washington | Real Property Planning",
    description: "Find contractors, cleaners, and staging professionals in the Puget Sound area who help prepare inherited homes and longtime family residences for a successful sale.",
  },
  "/professionals/probate-attorneys": {
    title: "Probate Attorneys in Western Washington | Real Property Planning",
    description: "Find experienced probate and estate attorneys serving King, Snohomish, Pierce, Skagit, and Kitsap Counties — helping families navigate estate settlement, inherited property, and probate court.",
  },
  "/professionals/senior-housing-advisors": {
    title: "Senior Housing Advisors in Western Washington | Real Property Planning",
    description: "Find trusted senior housing advisors and placement specialists serving the Puget Sound region — helping older adults and families choose assisted living, memory care, and independent living options.",
  },
  "/real-estate-attorneys": {
    title: "Real Estate Brokerage Support for Real Estate Attorneys in Washington State | Real Property Planning",
    description: "Real Property Planning works alongside real estate attorneys to provide market analysis, property coordination, and sale management when clients need both legal and real estate expertise.",
    h1: "Real Estate Attorneys",
  },
  "/resources/washington-executors-10-step-checklist": {
    title: "Washington Executor's 10-Step Checklist for Handling Real Estate | Real Property Planning",
    description: "A practical free resource for Washington executors, trustees, and families handling estate real estate. Learn the 10 key steps to protect the property, understand value, and move forward with confidence.",
    h1: "10 Steps Every Executor Should Know",
  },
  "/retirement-reverse-mortgage": {
    title: "Retirement & Reverse Mortgage Guidance | Real Property Planning",
    description: "Reverse mortgage and retirement financing guidance for Washington seniors and families. Trusted lending professionals supporting long-term housing and estate planning decisions.",
    h1: "Supporting Clients with Financing Options and Long-Term Planning",
  },
  "/roles": {
    title: "Roles & Responsibilities | Executors, Trustees & POA — Washington",
    description: "Clear guidance on the roles that govern estates — executors, trustees, power of attorney, and the duties each carries in Washington State.",
  },
  "/search": {
    title: "Search | Real Property Planning",
    description: "Search Real Property Planning for probate, estate sales, senior transitions, attorneys, CPAs, financial planners, and more.",
    h1: "Search Real Property Planning",
  },
  "/sell-house-fund-senior-living": {
    title: "How to Sell a Parent's House to Pay for Senior Living in Washington State | Real Property Planning",
    description: "Learn how Washington State families use home sale proceeds to pay for assisted living, memory care, and adult family home placement. Real Property Planning — Licensed Broker & Certified Appraiser — (206) 900-3015.",
    h1: "How to Sell a Parent's House to Pay for Senior Living",
  },
  "/senior-living-advisors": {
    title: "Senior Living Advisors in Washington State | Real Property Planning",
    description: "Featured Senior Living Advisors helping older adults and families evaluate assisted living, memory care, adult family homes, and in-home care across Washington State.",
    h1: "Senior Living Advisors",
  },
  "/senior-living-and-relocation": {
    title: "Senior Living & Relocation | Real Property Planning",
    description: "Helping families navigate housing transitions — from understanding senior living options to coordinating the sale of a family home.",
    h1: "Senior Living & Relocation",
  },
  "/senior-living/adult-family-homes": {
    title: "Adult Family Homes",
    description: "Adult Family Homes in Washington State — licensed residential homes serving 2–6 residents with personal care in a home-like setting.",
  },
  "/senior-living/aging-in-place": {
    title: "Aging in Place",
    description: "Aging in Place in Washington State — remain in your own home with in-home caregivers, safety modifications, meal delivery, and medical alert services.",
  },
  "/senior-living/assisted-living": {
    title: "Assisted Living",
    description: "Assisted Living communities in Washington State — licensed residential care with help for daily activities, medication management, and 24-hour staff.",
  },
  "/senior-living/assisted-living-communities": {
    title: "Assisted Living Communities | Senior Living | Real Property Planning",
    description: "Learn about assisted living communities offering daily support, social activities, and on-site amenities for seniors throughout Washington State.",
    h1: "Assisted Living Communities",
  },
  "/senior-living/independent-living": {
    title: "Independent Living",
    description: "Independent Living communities in Washington State for active, self-sufficient seniors who want convenience, social connection, and freedom from home maintenance.",
  },
  "/senior-living/memory-care": {
    title: "Memory Care",
    description: "Memory Care communities in Washington State for seniors with Alzheimer's, dementia, or cognitive decline — secure environments and specially trained staff.",
  },
  "/senior-living/nursing-and-skilled-care": {
    title: "Nursing & Skilled Care | Senior Living | Real Property Planning",
    description: "Learn about nursing and skilled care facilities providing 24-hour medical support for seniors throughout Washington State.",
    h1: "Nursing & Skilled Care",
  },
  "/senior-living/power-of-attorneys": {
    title: "Power of Attorney & Real Estate Decisions | Real Property Planning",
    description: "Understanding how a power of attorney works in real estate — for families, executors, and professionals navigating property decisions in Washington State.",
    h1: "Power of Attorney &amp; Real Estate Decisions",
  },
  "/senior-living/skilled-nursing": {
    title: "Skilled Nursing Care",
    description: "Skilled Nursing Care facilities in Washington State providing 24-hour medical care and rehabilitation, often after hospitalization or for long-term clinical needs.",
  },
  "/senior-move-managers": {
    title: "Senior Move Managers in Washington State | Real Property Planning",
    description: "Featured Senior Move Managers helping older adults and families plan, pack, and resettle during life's most significant transitions across Washington State.",
    h1: "Senior Move Managers",
  },
  "/sitemap": {
    title: "Site Map | Real Property Planning",
    description: "Complete site map of Real Property Planning showing every page, its URL, and the internal links each page contains.",
    h1: "Site Map",
  },
  "/spokane-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Spokane, WA",
    description: "Guidance for executors and families with inherited property in Spokane, WA. Local on-the-ground coordination for out-of-area decision-makers.",
    h1: "Helping Families Manage Inherited Property in Spokane",
    quickAnswerQ: "How does Real Property Planning help families manage inherited property in Spokane?",
    quickAnswerA: "Many Spokane estate properties are managed by families who live outside the area. Real Property Planning provides reliable, on-the-ground coordination — property assessment, preparation, pricing, and sale management — so out-of-area executors and trustees can make confident decisions without needing to be on-site.",
  },
  "/title-and-escrow": {
    title: "Title & Escrow Services in Washington State | Real Property Planning",
    description: "Learn how title and escrow services protect buyers, sellers, and families during probate and estate real estate transactions in Washington State.",
    h1: "Title &amp; Escrow Services in Washington State",
  },
  "/vancouver-wa-probate-estate-real-estate": {
    title: "Probate & Estate Real Estate in Vancouver, WA",
    description: "Guidance for families, executors, and trustees with inherited property in Vancouver, WA. Relocation, timing, and coordinated transitions.",
    h1: "Helping Families Navigate Property Transitions in Vancouver",
  },
  "/counties/benton": {
    title: "Probate Real Estate & Inherited Property Sales in Benton County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Benton County, Washington State.",
    h1: "Estate & Inherited Property Sales in Benton County",
  },
  "/counties/clark": {
    title: "Probate Real Estate & Inherited Property Sales in Clark County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Clark County, Washington State.",
    h1: "Estate & Inherited Property Sales in Clark County",
  },
  "/counties/franklin": {
    title: "Probate Real Estate & Inherited Property Sales in Franklin County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Franklin County, Washington State.",
    h1: "Estate & Inherited Property Sales in Franklin County",
  },
  "/counties/spokane": {
    title: "Probate Real Estate & Inherited Property Sales in Spokane County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Spokane County, Washington State.",
    h1: "Estate & Inherited Property Sales in Spokane County",
  },
  "/counties/whatcom": {
    title: "Probate Real Estate & Inherited Property Sales in Whatcom County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Whatcom County, Washington State.",
    h1: "Estate & Inherited Property Sales in Whatcom County",
  },
  "/counties/yakima": {
    title: "Probate Real Estate & Inherited Property Sales in Yakima County | Real Property Planning",
    description: "Probate real estate and inherited property sales guidance for executors, attorneys, and families in Yakima County, Washington State.",
    h1: "Estate & Inherited Property Sales in Yakima County",
  },
  "/afh-club/afh-roi-calculator": {
    title: "AFH ROI Calculator | Real Property Planning",
    description: "Estimate return on investment for an Adult Family Home purchase in Washington State — purchase price, financing, revenue, and operating expenses.",
    h1: "AFH ROI Calculator",
  },
  "/afh-club/afh-valuation-estimator": {
    title: "AFH Valuation Estimator | Real Property Planning",
    description: "Estimate the value of an operating Adult Family Home business in Washington State based on income, capacity, occupancy, and licensing status.",
    h1: "AFH Valuation Estimator",
  },
  "/afh-club/listings": {
    title: "Adult Family Homes For Sale | Real Property Planning",
    description: "Current Adult Family Home listings for sale throughout Washington State — licensed businesses, properties, or both, with pricing and broker contact information.",
    h1: "Adult Family Homes For Sale",
  },

  // ===== AFH city-specific for-sale pages (LLM/AI-search AEO pages) =====
  "/afh-club/for-sale/seattle-wa": {
    title: "Adult Family Homes For Sale in Seattle, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Seattle, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Seattle, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Seattle, WA?",
    quickAnswerA: "Seattle's Adult Family Home inventory turns over regularly across neighborhoods from West Seattle to Northgate. Current listings — with photos, pricing, and licensing status — are available on this page and update as new properties come to market.",
    intro: "Seattle's Adult Family Home market sits at the intersection of the city's aging population and its persistently tight housing supply, which together keep demand for licensed AFH care steady across nearly every neighborhood. Every AFH sale in Seattle runs on two parallel tracks: the real estate transaction itself, and the DSHS licensing process that determines who can legally operate the home.",
  },
  "/afh-club/for-sale/kirkland-wa": {
    title: "Adult Family Homes For Sale in Kirkland, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Kirkland, WA — licensed businesses, properties, or both on the Eastside. Current listings and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Kirkland, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Kirkland, WA?",
    quickAnswerA: "Kirkland's Adult Family Home listings update as inventory changes — availability here tends to be limited given the Eastside's high land values, so available properties don't stay listed long. Current listings are shown on this page.",
    intro: "Kirkland sits at a distinctive point in the Eastside AFH market — strong household incomes, an aging homeowner base, and land values that make new construction of care facilities financially difficult all combine to keep demand for existing licensed homes high.",
  },
  "/afh-club/for-sale/renton-wa": {
    title: "Adult Family Homes For Sale in Renton, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Renton, WA — licensed businesses, properties, or both in South King County. Current listings and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Renton, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Renton, WA?",
    quickAnswerA: "Renton's current AFH listings are shown on this page. As a South King County hub with a diverse mix of housing stock, Renton tends to offer more accessible entry points into AFH ownership than areas closer to Seattle or the Eastside.",
    intro: "Renton occupies a practical middle ground in the King County AFH market — close enough to Seattle and the Eastside to draw on the same employment base and senior population, while offering more approachable pricing than either.",
  },
  "/afh-club/for-sale/lynnwood-wa": {
    title: "Adult Family Homes For Sale in Lynnwood, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Lynnwood, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Lynnwood, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Lynnwood, WA?",
    quickAnswerA: "Lynnwood consistently has some of the strongest AFH listing activity in Snohomish County, and current listings are shown on this page. As a hub along the I-5 corridor with strong transit access, it draws steady interest from both buyers and operators.",
    intro: "Lynnwood is one of the more active Adult Family Home markets in Snohomish County — its central location along the I-5 corridor, established residential neighborhoods, and proximity to major medical facilities all make it a natural fit for licensed care.",
  },
  "/afh-club/for-sale/edmonds-wa": {
    title: "Adult Family Homes For Sale in Edmonds, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Edmonds, WA — licensed businesses, properties, or both. Current listings, pricing guidance, and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Edmonds, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Edmonds, WA?",
    quickAnswerA: "Edmonds has consistently strong AFH inventory, and current listings are shown on this page. As a well-established Puget Sound community with an older housing stock and a large senior population, Edmonds has long been one of Snohomish County's most active AFH markets.",
    intro: "Edmonds has one of the deepest, most established Adult Family Home markets in Snohomish County. Its housing stock skews older and larger than much of the surrounding area, its senior population is significant, and its proximity to Swedish Edmonds hospital makes it an attractive location for licensed care.",
  },
  "/afh-club/for-sale/puyallup-wa": {
    title: "Adult Family Homes For Sale in Puyallup, WA | Real Property Planning",
    description: "Adult Family Homes for sale in Puyallup, WA — licensed businesses, properties, or both in Pierce County. Current listings and answers to common AFH buying questions.",
    h1: "Adult Family Homes For Sale in Puyallup, WA",
    quickAnswerQ: "What Adult Family Homes are for sale in Puyallup, WA?",
    quickAnswerA: "Current Puyallup-area AFH listings are shown on this page. As one of Pierce County's fastest-growing communities, Puyallup has seen steady growth in AFH activity alongside its broader residential expansion.",
    intro: "Puyallup has grown into one of Pierce County's more active residential markets, and its Adult Family Home inventory has grown alongside it — offering a genuinely more accessible entry point into AFH ownership for buyers priced out of King County or the Eastside.",
  },
  "/afh-club/selling-your-business-at-retirement": {
    title: "Selling Your Adult Family Home Business at Retirement | Real Property Planning",
    description: "Planning to retire from operating your Adult Family Home? Learn how to sell the business and building together, transfer your DSHS license, and value your AFH accurately.",
    h1: "Selling Your AFH Business at Retirement",
    quickAnswerQ: "I'm planning to retire from running my AFH — should I sell the business and the building together, or separately?",
    quickAnswerA: "Most retiring owners sell both together, and most buyers prefer it that way — it lets them step directly into an operating home with residents, staff, and licensing already in place. Selling the business and building as a single transaction is usually simpler and often nets more than selling them apart, though separating them can make sense in specific situations, such as keeping the real estate as an investment.",
    intro: "Running an Adult Family Home for years — sometimes decades — builds something genuinely difficult to walk away from: relationships with residents and families, a trained staff who trust your leadership, and a business with real value beyond the four walls it sits in. Selling an AFH at retirement runs on two tracks that have to work together: the real estate transaction, and the transfer of your DSHS operating license to a new, DSHS-approved owner.",
  },

  // ===== Final coverage gap-fill (6 routes missed by the bulk pass) =====
  "/estate-probate-inherited-property/probate-and-legal-authority": {
    title: "Understanding Probate & Legal Authority | Real Property Planning",
    description: "What is probate, and do you need it? Who has legal authority to make decisions about the estate? Plain-language answers for Washington State families.",
    h1: "Understanding Probate & Legal Authority",
  },
  "/executor-responsibilities-first-steps/when-you-need-extra-help": {
    title: "When Executors Need Extra Help | Real Property Planning",
    description: "Guidance for executors who feel overwhelmed managing an estate — when and how to bring in professional support throughout Washington State.",
    h1: "When You Need Extra Help",
  },
  "/executor-responsibilities-first-steps/working-with-professionals": {
    title: "Executors Working With Professionals | Real Property Planning",
    description: "How executors coordinate with attorneys, CPAs, appraisers, and other professionals during estate administration in Washington State.",
    h1: "Working With Professionals",
  },
  "/guides/probate-house-sale-timeline-washington": {
    title: "Probate House Sale Timeline in Washington State | Real Property Planning",
    description: "Real Property Planning explains the realistic timeline for selling a probate property in Washington State — from death to distribution of proceeds. Licensed Broker & Certified Appraiser — (206) 900-3015.",
    h1: "Probate House Sale Timeline in Washington State",
  },
  "/guides/repairs-before-selling-probate-home-washington": {
    title: "What Repairs Should Be Made Before Selling a Probate Home in Washington? | Real Property Planning",
    description: "Real Property Planning explains which repairs are worth making before selling an estate property in Washington State — and which ones to skip. Licensed Broker & Certified Appraiser — (206) 900-3015.",
    h1: "What Repairs Should Be Made Before Selling a Probate Home?",
  },
  "/guides/who-has-authority-sell-probate-property-washington": {
    title: "Who Has Authority to Sell Probate Property in Washington State? | Real Property Planning",
    description: "Real Property Planning explains who has legal authority to sell estate property in Washington State — including personal representatives, trustees, and what Letters Testamentary mean for your sale. (206) 900-3015.",
    h1: "Who Has Authority to Sell Probate Property?",
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
  ssgParts.push(`<p style="margin:4px 0;color:#444">Independent hub for probate, estate &amp; senior transition real estate in Washington State</p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#444">David Stein — Washington State Licensed Real Estate Broker — David Stein's real estate license is held under eXp Realty</p>`);
  ssgParts.push(`<p style="margin:4px 0;color:#444">Washington State Certified Residential Appraiser — Stein Appraisal</p>`);
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
      test: /\.(jpe?g|png|webp|svg)$/i,
      includePublic: true,
      png: { quality: 78 },
      jpeg: { quality: 78 },
      jpg: { quality: 78 },
      webp: { quality: 78 },
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
                cleanupNumericValues: { floatPrecision: 2 },
              },
            },
          },
        ],
      },
      // Skip files under 10KB
      cache: false,
      logStats: true,
    }),
    routeMetadataPlugin,
    mcpPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
