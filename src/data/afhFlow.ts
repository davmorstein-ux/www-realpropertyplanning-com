/**
 * The AFH Club flow chart (owner, Oct 1, 2026), built like the probate one
 * (src/data/probateFlow.ts). The one-page Washington Adult Family Home Guide
 * became a start page with a chart plus one short page per box:
 *
 *   What do you want to do?
 *     open a new home ............ /afh-club/washington-adult-family-home-guide/opening
 *     buy one → an operating home  /afh-club/washington-adult-family-home-guide/buying
 *             → a house to convert → opening
 *     sell my home ............... /afh-club/washington-adult-family-home-guide/selling
 *     I already run one .......... /afh-club/washington-adult-family-home-guide/running
 *     run the numbers ............ /afh-club/washington-adult-family-home-guide/evaluating
 *   opening and buying → once licensed → running
 *   any time ..................... /afh-club/washington-adult-family-home-guide/rules-and-key-figures,
 *                                  /afh-club/washington-afh-rule-changes, /afh-club/glossary
 *
 * Audience: buyers, sellers, owners, operators and investors (AGENTS.md §8).
 * Facts here repeat the reviewed guides and cite their rules; change both
 * together. Keep pages short: summary, at most seven steps, three watch-outs.
 * Used by the pages and vite.config.ts, so no React and no "@/" imports.
 */
import type { FlowPage, FlowWatch } from "./probateFlow";

/** AFH Club green, used as the accent on the AFH flow pages. */
export const AFH_GREEN = "#0a5648";

export const AFH_FLOW_BASE = "/afh-club/washington-adult-family-home-guide";
const path = (slug: string) => `${AFH_FLOW_BASE}/${slug}`;
export const AFH_RULES_PATH = path("rules-and-key-figures");

const WAC = (cite: string) => `https://app.leg.wa.gov/WAC/default.aspx?cite=${cite}`;
const RCW = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const BAAU_QUEUE = "https://www.dshs.wa.gov/altsa/baau-application-processing-timeline";

const NO_TRANSFER: FlowWatch = {
  lead: "The license does not transfer.",
  text: "Every new owner applies for a new license, including when an LLC is formed around an existing home. ECS and SBS contracts do not transfer either.",
  cite: { label: "WAC 388-76-10105", href: WAC("388-76-10105") },
};

const RULES_CHANGED: FlowWatch = {
  lead: "Rules changed in 2025 and 2026.",
  text: "Homes licensed after September 20, 2026 need 27-inch interior doors where residents pass through. Check advice against the rule-change tracker.",
  link: { label: "Washington AFH Rules Have Changed", href: "/afh-club/washington-afh-rule-changes" },
};

export const AFH_FLOW_PAGES: FlowPage[] = [
  {
    slug: "opening",
    path: path("opening"),
    box: "Open a new home",
    title: "Opening a New Adult Family Home",
    description: "Becoming a licensed adult family home provider in Washington, in a house you own, buy or lease: the qualifications, training, licensing, building inspection and costs, in order.",
    trail: ["What do you want to do?", "Open a new home"],
    summary: [
      "DSHS licenses the provider, not the house. You need the experience and training first, then a house that passes the local building inspection, then the DSHS license.",
      "Licensing takes months, not weeks, so plan the house, the money and the training to line up.",
    ],
    steps: [
      { label: "Is an Adult Family Home Right for You?", href: "/afh-club/getting-started", note: "Qualifications, the 1,000 hours, and what the job really is." },
      { label: "Training & Education Requirements", href: "/afh-club/training-education", note: "Administrator training, Home Care Aide, specialty training." },
      { label: "AFH Licensing & Certification", href: "/afh-club/licensing-certification", note: "The application, background checks, the licensing inspection." },
      { label: "Building Requirements & Inspections", href: "/afh-club/building-inspection", note: "What the house needs to pass form 15-604." },
      { label: "AFH Costs & Fees", href: "/afh-club/costs-fees", note: "License fees, insurance, training and start-up costs." },
      { label: "Buying as an Individual or Through an LLC", href: "/afh-club/ownership-structure", note: "Which structure, and why forming one later is a change of ownership." },
    ],
    watch: [
      { lead: "1,000 hours of direct care first.", text: "Within the last 60 months, for the provider or entity representative; licensed physicians, PAs and nurses are exempt.", cite: { label: "WAC 388-76-10130", href: WAC("388-76-10130") } },
      { lead: "The house is inspected before the license.", text: "The local building official passes it on DSHS form 15-604; WABO wrote the checklist but does not inspect.", cite: { label: "WAC 388-76-10700", href: WAC("388-76-10700") } },
      { lead: "DSHS posts its application queue.", text: "It does not promise a timeline; check the current queue before you set dates.", cite: { label: "DSHS processing timeline", href: BAAU_QUEUE } },
    ],
    next: { label: "Running a licensed home", href: path("running") },
  },
  {
    slug: "buying",
    path: path("buying"),
    box: "An operating home",
    title: "Buying an Adult Family Home",
    description: "Buying an operating adult family home in Washington, the house, the business or both: change of ownership, checking the DSHS record, financing and listings, in order.",
    trail: ["What do you want to do?", "Buy one", "An operating home"],
    summary: [
      "You are buying a house, a business, or both, but never the license. You apply for your own license through the change-of-ownership process and must meet every provider qualification.",
      "Check the home's DSHS record and confirm what it really is before you rely on the income it shows.",
    ],
    steps: [
      { label: "Buying or Selling an Adult Family Home", href: "/afh-club/buying-selling", note: "The change-of-ownership process from both sides." },
      { label: "Is It Really an Adult Family Home?", href: "/afh-club/afh-property-classifications", note: "Operating, former, AFH-ready or just marketing." },
      { label: "How to Look Up DSHS Violations", href: "/afh-club/violation-history-lookup", note: "Checking a home's inspection and enforcement record." },
      { label: "How to Finance an AFH", href: "/afh-club/how-to-finance-an-afh", note: "Loan types for the real estate and the business." },
      { label: "Buying as an Individual or Through an LLC", href: "/afh-club/ownership-structure", note: "Decide before you apply; changing later is another change of ownership." },
      { label: "AFH Listings", href: "/afh-club/listings", note: "Homes, businesses and leases for sale in Washington." },
    ],
    watch: [
      NO_TRANSFER,
      { lead: "A lapsed home meets today's rules.", text: "DSHS confirmed in writing that a continuously licensed home keeps the building rules it was licensed under; a home whose license lapsed must meet current rules, including 27-inch doors.", cite: { label: "WAC 388-76-10715", href: WAC("388-76-10715") } },
      { lead: "Read the public record.", text: "The DSHS locator shows each home's license and three years of limits and enforcement.", link: { label: "How to look up violations", href: "/afh-club/violation-history-lookup" } },
    ],
    next: { label: "Running a licensed home", href: path("running") },
  },
  {
    slug: "selling",
    path: path("selling"),
    box: "Sell my home",
    title: "Selling Your Adult Family Home",
    description: "Selling a Washington adult family home, the house, the business or both: timing, the 60-day notice, how buyers judge a home, value and listing, in order.",
    trail: ["What do you want to do?", "Sell my home"],
    summary: [
      "Your buyer cannot take over your license; they apply for their own, and you keep operating until the change of ownership is approved. That makes timing the biggest part of the plan.",
      "Buyers price an operating home on its records: census, contracts, inspection history and the house itself.",
    ],
    steps: [
      { label: "Selling Your AFH Business at Retirement", href: "/afh-club/selling-your-business-at-retirement", note: "Timing, notice, and what a buyer will ask for." },
      { label: "Buying or Selling an Adult Family Home", href: "/afh-club/buying-selling", note: "The change-of-ownership process from both sides." },
      { label: "Is It Really an Adult Family Home?", href: "/afh-club/afh-property-classifications", note: "How your home will be described to buyers." },
      { label: "AFH Valuation Estimator", href: "/afh-club/afh-valuation-estimator", note: "A starting range for the real estate and the business." },
      { label: "Find a Professional", href: "/afh-club/find-a-professional", note: "Brokers, business brokers, bookkeepers and insurance." },
      { label: "List a Home on AFH Club", href: "/afh-submit", note: "Add your home to the AFH Club listings." },
    ],
    watch: [
      { lead: "Give 60 days' written notice.", text: "To DSHS and to each resident, before the proposed change of ownership.", cite: { label: "WAC 388-76-10106", href: WAC("388-76-10106") } },
      NO_TRANSFER,
      { lead: "Keep the license continuous if you can.", text: "A home that stays licensed through the sale keeps the building rules it was licensed under; a lapse can force upgrades such as 27-inch doors.", link: { label: "Washington AFH Rules Have Changed", href: "/afh-club/washington-afh-rule-changes" } },
    ],
  },
  {
    slug: "running",
    path: path("running"),
    box: "I already run one",
    title: "Running a Licensed Adult Family Home",
    description: "Running a licensed Washington adult family home: staying compliant, DSHS inspections, how Medicaid pays (CARE, CBHS, ECS, SBS), and the rules that changed, in order.",
    trail: ["What do you want to do?", "I already run one"],
    summary: [
      "Two things decide how a home does: its inspection record and how it is paid. Most homes are paid mainly by Medicaid, at a daily rate set by each resident's CARE classification and the home's region.",
      "The rules keep changing, so the rule-change tracker is worth a look every few months.",
    ],
    steps: [
      { label: "The Dos and Don'ts of Operating an AFH", href: "/afh-club/dos-and-donts-operating-adult-family-home", note: "Fourteen topics, each marked requirement or best practice." },
      { label: "DSHS Inspections & Compliance", href: "/afh-club/regulations-compliance", note: "How inspections work and the rules cited most often." },
      { label: "A Through E: CARE Classifications", href: "/afh-club/care-classifications-a-through-e", note: "How each Medicaid resident's daily rate is set." },
      { label: "CBHS Tiers Explained", href: "/afh-club/cbhs-tiers", note: "Behavioral health support paid on top of the base rate." },
      { label: "The AFH Payment Field Guide", href: "/afh-club/afh-payment-field-guide", note: "ECS, SBS, private pay, and what a contract list does not prove." },
      { label: "Washington AFH Rules Have Changed", href: "/afh-club/washington-afh-rule-changes", note: "Every rule change since 2023, old beside new." },
      { label: "Find a Professional", href: "/afh-club/find-a-professional", note: "Bookkeepers, insurance brokers and others." },
    ],
    watch: [
      { lead: "Inspections can come any time.", text: "At least every 18 months, 15 on average, and unannounced; up to two years after three citation-free inspections.", cite: { label: "RCW 70.128.070", href: RCW("70.128.070") } },
      { lead: "The license fee is per bed.", text: "$450 per licensed bed a year since July 2025 ($2,700 for six beds), per DSHS in writing.", link: { label: "AFH Costs & Fees", href: "/afh-club/costs-fees" } },
      RULES_CHANGED,
    ],
    next: { label: "Rules & key figures", href: AFH_RULES_PATH },
  },
  {
    slug: "evaluating",
    path: path("evaluating"),
    box: "Run the numbers",
    title: "Evaluating an AFH Property or Investment",
    description: "Comparing houses for adult family home use, running income and value numbers, and studying the Washington market: AFH Club's calculators and data, in order.",
    trail: ["What do you want to do?", "Run the numbers"],
    summary: [
      "Start with the house (will it work as an adult family home?), then the income it could earn, then what it is worth.",
      "The calculators use your own assumptions and give estimates, not appraisals.",
    ],
    steps: [
      { label: "AFH Property Score", href: "/afh-club/afh-property-score", note: "How well a specific house fits adult family home use." },
      { label: "AFH ROI Calculator", href: "/afh-club/afh-roi-calculator", note: "Income, expenses and return from your own assumptions." },
      { label: "AFH Valuation Estimator", href: "/afh-club/afh-valuation-estimator", note: "A starting range for the real estate and the business." },
      { label: "WABO Checklist & Technical Requirements", href: "/afh-club/wabo-technical-guide", note: "Bedroom types, escape windows, ramps and doors." },
      { label: "Washington AFHs by the Numbers", href: "/afh-club/washington-afh-data", note: "Every licensed home counted by county, size and contract." },
      { label: "Directory of Licensed Homes", href: "/afh-club/homes", note: "Every licensed adult family home, by county and city." },
    ],
    watch: [
      { lead: "\"AFH-ready\" is not \"licensed.\"", text: "A listing can mean an operating home, a former one, a house that passed the building inspection, or just a marketing idea.", link: { label: "Is It Really an Adult Family Home?", href: "/afh-club/afh-property-classifications" } },
      { lead: "Where the home is changes the rate.", text: "DSHS pays homes in King, Pierce and Snohomish counties more than homes in the rest of the state.", link: { label: "CARE classifications", href: "/afh-club/care-classifications-a-through-e" } },
      { lead: "Zoning is rarely the obstacle.", text: "An adult family home is a permitted use in every residential or commercial zone, including single-family zones.", cite: { label: "RCW 70.128.140", href: RCW("70.128.140") } },
    ],
    next: { label: "Buying an adult family home", href: path("buying") },
  },
];

export const AFH_FLOW_BY_SLUG = Object.fromEntries(AFH_FLOW_PAGES.map((p) => [p.slug, p])) as Record<string, FlowPage>;

export const afhFlowPrerenderSections = (p: FlowPage): string[] => [
  `Where this fits — ${p.trail.join(" → ")}.`,
  ...p.summary,
  `Steps, in order — ${p.steps.map((s, i) => `${i + 1}. ${s.label}: ${s.note}`).join(" ")}`,
  `Watch out for — ${p.watch.map((w) => `${w.lead} ${w.text}${w.cite ? ` (${w.cite.label})` : ""}`).join(" ")}`,
  ...(p.next ? [`Next: ${p.next.label} (${p.next.href}).`] : []),
  `Back to the flow chart: ${AFH_FLOW_BASE}. Rules and key figures: ${AFH_RULES_PATH}.`,
];

export const AFH_FLOW_CHART_TEXT: string[] = [
  "Start: adult family homes in Washington. First question: what do you want to do?",
  `Open a new home (${path("opening")}).`,
  `Buy one: an operating home, the house and business (${path("buying")}), or a house to convert into an adult family home (${path("opening")}).`,
  `Sell my home (${path("selling")}).`,
  `I already run one (${path("running")}). Opening and buying lead here once licensed.`,
  `Run the numbers (${path("evaluating")}).`,
  `Any time: rules and key figures (${AFH_RULES_PATH}), the rule-change tracker (/afh-club/washington-afh-rule-changes), and the AFH glossary (/afh-club/glossary).`,
];
