/**
 * The "New to probate? Start here" band (Sept 30, 2026).
 *
 * Every probate, executor, trustee and estate-valuation page carries one line
 * pointing to the Washington Probate & Estate Property Guide and the glossary.
 * The React band is src/components/ProbateStartHere.tsx; the same line is
 * written into each route's prerendered HTML by vite.config.ts, so crawlers
 * see the links too. src/test/probateStartHere.test.ts checks that every route
 * listed here renders the band.
 *
 * To add a page: add its route here AND put <ProbateStartHere /> as the first
 * child of its <main> (or rely on EstateSubPageLayout / ExecutorSubPageLayout,
 * which already include it). No React, relative imports only.
 */
export const PROBATE_START_HERE_ROUTES: string[] = [
  // Probate & inherited property
  "/probate-estate-sales",
  "/selling-an-inherited-home",
  "/what-to-do-with-the-house",
  "/how-the-process-works",
  "/estate-probate-inherited-property/first-steps",
  "/estate-probate-inherited-property/probate-and-legal-authority",
  "/estate-probate-inherited-property/property-value",
  "/estate-probate-inherited-property/what-to-do-with-the-property",
  "/estate-probate-inherited-property/preparing-the-property",
  "/estate-probate-inherited-property/professional-team",
  "/guides/sell-house-during-probate-washington",
  "/guides/how-long-sell-probate-property",
  "/guides/how-probate-real-estate-works",
  "/guides/probate-house-sale-timeline-washington",
  "/guides/probate-vs-trust-sale-washington",
  "/guides/heirs-disagree-selling-house",
  "/guides/taxes-selling-inherited-house-washington",
  "/guides/property-taxes-after-death-washington",
  "/guides/mortgage-after-death-washington",
  "/guides/executor-buy-or-sell-estate-house-to-family-washington",
  "/guides/inherited-house-washington",
  "/guides/who-has-authority-sell-probate-property-washington",
  // Executors & trustees
  "/executors",
  "/executors/executors-guide",
  "/trustees",
  "/executor-responsibilities-first-steps",
  "/executor-responsibilities-first-steps/first-30-days",
  "/executor-responsibilities-first-steps/legal-duties",
  "/executor-responsibilities-first-steps/property-decisions",
  "/executor-responsibilities-first-steps/common-mistakes",
  "/executor-responsibilities-first-steps/working-with-professionals",
  "/executor-responsibilities-first-steps/when-you-need-extra-help",
  "/guides/executor-sell-house-before-probate-washington",
  "/guides/what-executors-should-do",
  "/guides/executor-first-steps-house",
  // Pricing, appraisal & preparing an estate property
  "/date-of-death-valuation-property-appraisals",
  "/why-valuation-matters",
  "/guides/appraisal-vs-cma",
  "/guides/appraisal-before-selling-inherited-property",
  "/guides/pricing-house-trust-estate",
  "/guides/sell-inherited-house-as-is-or-fix",
  "/guides/estate-property-repairs-before-sale",
  "/guides/repairs-before-selling-probate-home-washington",
  // City probate pages
  "/seattle-probate-estate-real-estate",
  "/bellevue-probate-estate-real-estate",
  "/tacoma-probate-estate-real-estate",
  "/spokane-probate-estate-real-estate",
  "/vancouver-wa-probate-estate-real-estate",
  "/everett-probate-estate-real-estate",
  "/bellingham-probate-estate-real-estate",
  "/olympia-probate-estate-real-estate",
];

export const PROBATE_START_HERE = {
  lead: "New to probate?",
  guide: { href: "/washington-probate-guide", label: "Washington Probate & Estate Property Guide", short: "Washington Probate Guide" },
  glossary: { href: "/probate-glossary", label: "Probate & Estate Glossary", short: "Probate Glossary" },
  terms: [
    { href: "/probate-glossary#nonintervention-powers", label: "nonintervention powers" },
    { href: "/probate-glossary#letters-testamentary", label: "letters testamentary" },
  ],
};
