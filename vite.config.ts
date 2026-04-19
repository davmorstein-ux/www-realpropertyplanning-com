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
  ssgParts.push(`<p style="margin:4px 0;color:#444">Washington State Licensed Real Estate Broker — License held under eXp Realty</p>`);
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
