/**
 * Defines the ordered sequence of ALL public-facing pages for prev/next navigation.
 * Grouped logically by topic area for intuitive browsing.
 */
export interface ServicePageEntry {
  path: string;
  label: string;
}

export const servicePageSequence: ServicePageEntry[] = [
  // ── Homepage ──
  { path: "/", label: "Home" },

  // ── Core services ──
  { path: "/services", label: "Services" },
  { path: "/probate-estate-sales", label: "Probate & Estate Sales" },
  { path: "/senior-transitions", label: "Senior Transitions" },
  { path: "/executors", label: "Executors" },
  { path: "/wills", label: "Wills" },

  // ── Senior Living & Relocation hub + sub-pages ──
  { path: "/senior-living-and-relocation", label: "Senior Living & Relocation" },
  { path: "/senior-living/adult-family-homes", label: "Adult Family Homes" },
  { path: "/senior-living/assisted-living-communities", label: "Assisted Living" },
  { path: "/senior-living/memory-care", label: "Memory Care" },
  { path: "/senior-living/nursing-and-skilled-care", label: "Nursing & Skilled Care" },
  { path: "/senior-living/independent-living", label: "Independent Living" },
  { path: "/senior-living/power-of-attorneys", label: "Power of Attorneys" },

  // ── Process & value pages ──
  { path: "/how-we-work", label: "How We Work" },
  { path: "/how-the-process-works", label: "How the Process Works" },
  { path: "/why-valuation-matters", label: "Why Valuation Matters" },
  { path: "/how-to-move-elderly-parents", label: "How to Move Elderly Parents" },

  // ── Professional pages ──
  { path: "/for-professionals", label: "For Professionals" },
  { path: "/for-attorneys", label: "For Attorneys" },
  { path: "/for-probate-attorneys", label: "For Probate Attorneys" },
  { path: "/for-estate-planning-attorneys", label: "For Estate Planning Attorneys" },
  { path: "/for-elder-law-attorneys", label: "For Elder Law Attorneys" },
  { path: "/for-family-law-attorneys", label: "For Family Law Attorneys" },
  { path: "/for-divorce-attorneys", label: "For Divorce Attorneys" },
  { path: "/real-estate-attorneys", label: "For Real Estate Attorneys" },
  { path: "/for-cpas", label: "For CPAs" },
  { path: "/for-financial-planners", label: "For Financial Planners" },
  { path: "/for-senior-living-professionals", label: "For Senior Living Professionals" },
  { path: "/lenders-and-financing-specialists", label: "Lenders & Financing" },
  { path: "/for-referral-partners", label: "For Referral Partners" },
  { path: "/attorney-referral", label: "Attorney Referral" },
  { path: "/professional-referral-resource", label: "Professional Referral Resource" },
  { path: "/professional-network", label: "Professional Network" },

  // ── Additional services ──
  { path: "/senior-estate-services", label: "Senior Estate Services" },
  { path: "/retirement-reverse-mortgage", label: "Retirement & Reverse Mortgage" },
  { path: "/transition-resources", label: "Transition Resources" },

  // ── Resources ──
  { path: "/resources", label: "Resources" },
  { path: "/resources/senior-move-managers", label: "Senior Move Managers" },
  { path: "/resources/estate-sale-companies", label: "Estate Sale Companies" },
  { path: "/resources/probate-estate-attorneys", label: "Probate & Estate Attorneys" },
  { path: "/resources/cpas-financial-advisors", label: "CPAs & Financial Advisors" },
  { path: "/resources/senior-living-communities", label: "Senior Living Communities" },
  { path: "/resources/property-preparation-services", label: "Property Preparation" },
  { path: "/resources/moving-relocation-services", label: "Moving & Relocation" },
  { path: "/resources/washington-executors-10-step-checklist", label: "Executor's Checklist" },

  // ── Guides ──
  { path: "/guides/how-probate-real-estate-works", label: "How Probate Real Estate Works" },
  { path: "/guides/what-executors-should-do", label: "What Executors Should Do" },
  { path: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" },
  { path: "/guides/out-of-state-families", label: "Out-of-State Families" },
  { path: "/guides/senior-transition-differences", label: "Senior Transition Differences" },
  { path: "/guides/inherited-house-washington", label: "Inherited House in Washington" },
  { path: "/guides/executor-sell-house-before-probate-washington", label: "Selling Before Probate" },
  { path: "/guides/appraisal-before-selling-inherited-property", label: "Appraisal Before Selling" },
  { path: "/guides/estate-property-repairs-before-sale", label: "Estate Property Repairs" },
  { path: "/guides/heirs-disagree-selling-house", label: "When Heirs Disagree" },
  { path: "/guides/pricing-house-trust-estate", label: "Pricing a Trust/Estate House" },
  { path: "/guides/sell-house-during-probate-washington", label: "Selling During Probate" },
  { path: "/guides/taxes-selling-inherited-house-washington", label: "Taxes on Inherited Property" },
  { path: "/guides/how-long-sell-probate-property", label: "How Long to Sell Probate Property" },
  { path: "/guides/executor-first-steps-house", label: "Executor's First Steps" },
  { path: "/guides/sell-inherited-house-as-is-or-fix", label: "Sell As-Is or Fix Up" },

  // ── Insights ──
  { path: "/insights", label: "Insights" },
  { path: "/insights/first-steps-inherited-house-washington", label: "First Steps: Inherited House" },
  { path: "/insights/out-of-state-inherited-house-help", label: "Out-of-State Inherited House" },
  { path: "/insights/estate-property-sale-timeline", label: "Estate Sale Timeline" },
  { path: "/insights/estate-property-cleanout-before-sale", label: "Estate Cleanout" },
  { path: "/insights/pricing-inherited-property-differences", label: "Pricing Inherited Property" },
  { path: "/insights/sell-inherited-house-without-repairs", label: "Sell Without Repairs" },
  { path: "/insights/family-disagreement-selling-house", label: "Family Disagreement" },
  { path: "/insights/empty-house-before-selling", label: "Empty House Before Selling" },
  { path: "/insights/sell-or-keep-inherited-property", label: "Sell or Keep Property" },
  { path: "/insights/estate-property-mistakes", label: "Estate Property Mistakes" },
  { path: "/insights/out-of-state-executor-case-study", label: "Out-of-State Executor" },

  // ── Counties ──
  { path: "/counties", label: "Counties We Serve" },
  { path: "/king-county", label: "King County" },
  { path: "/snohomish-county", label: "Snohomish County" },
  { path: "/pierce-county", label: "Pierce County" },
  { path: "/kitsap-county", label: "Kitsap County" },
  { path: "/clark-county-probate-estate-real-estate", label: "Clark County" },
  { path: "/spokane-county-probate-estate-real-estate", label: "Spokane County" },
  { path: "/thurston-county-probate-estate-real-estate", label: "Thurston County" },
  { path: "/whatcom-county-probate-estate-real-estate", label: "Whatcom County" },
  { path: "/benton-county-probate-estate-real-estate", label: "Benton County" },

  // ── Cities ──
  { path: "/cities-we-serve", label: "Cities We Serve" },
  { path: "/seattle-probate-estate-real-estate", label: "Seattle" },
  { path: "/bellevue-probate-estate-real-estate", label: "Bellevue" },
  { path: "/tacoma-probate-estate-real-estate", label: "Tacoma" },
  { path: "/spokane-probate-estate-real-estate", label: "Spokane" },
  { path: "/vancouver-wa-probate-estate-real-estate", label: "Vancouver WA" },
  { path: "/everett-probate-estate-real-estate", label: "Everett" },
  { path: "/kirkland-probate-estate-real-estate", label: "Kirkland" },
  { path: "/redmond-probate-estate-real-estate", label: "Redmond" },
  { path: "/olympia-probate-estate-real-estate", label: "Olympia" },
  { path: "/bellingham-probate-estate-real-estate", label: "Bellingham" },
  { path: "/yakima-probate-estate-real-estate", label: "Yakima" },
  { path: "/kennewick-probate-estate-real-estate", label: "Kennewick" },
  { path: "/richland-probate-estate-real-estate", label: "Richland" },
  { path: "/pasco-probate-estate-real-estate", label: "Pasco" },
  { path: "/renton-probate-estate-real-estate", label: "Renton" },
  { path: "/kent-probate-estate-real-estate", label: "Kent" },
  { path: "/federal-way-probate-estate-real-estate", label: "Federal Way" },
  { path: "/auburn-probate-estate-real-estate", label: "Auburn" },
  { path: "/marysville-probate-estate-real-estate", label: "Marysville" },

  // ── Info pages ──
  { path: "/about", label: "About" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/faq", label: "FAQ" },
  { path: "/terminology", label: "Terminology" },
  { path: "/contact", label: "Contact" },
];

export function getAdjacentPages(currentPath: string) {
  const index = servicePageSequence.findIndex((p) => p.path === currentPath);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? servicePageSequence[index - 1] : null,
    next: index < servicePageSequence.length - 1 ? servicePageSequence[index + 1] : null,
  };
}
