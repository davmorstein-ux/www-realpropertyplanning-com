/**
 * THE GUIDES & ARTICLES LIBRARY: every family-side guide and article, grouped.
 *
 * WHY THIS FILE EXISTS (Sept 2026). The homepage says the site has "90+ guides &
 * articles". The only index a visitor could find, /guides-and-resources, listed
 * 26 of them. This file is now the single list that page renders, that the
 * build writes into the static HTML for crawlers, and that a test counts, so
 * the homepage figure can be checked by a visitor and cannot silently go false.
 *
 * WHAT COUNTS. A page whose job is to explain something to a family, executor,
 * or trustee. NOT counted, on purpose:
 *   - anything under /afh-club, and /senior-living/adult-family-homes: by
 *     standing rule, adult family home content belongs to AFH Club only;
 *   - /resources/* and the other "find a professional" pages: the library page
 *     itself tells readers those are directories, not guides;
 *   - section landing pages: each is the "start here" link on its group;
 *   - redirects, city and county landing pages, and pages about the site.
 *
 * THE COUNT HAS NO SLACK. It is exactly HOMEPAGE_GUIDE_CLAIM today. Remove a
 * piece without adding one and src/test/guideLibrary.test.ts fails, which is
 * the point: change the homepage figure rather than let it overstate.
 *
 * Titles are each page's own heading. Grouping was drafted by address and
 * keyword and is David's to correct: move an entry between groups freely.
 *
 * No React and relative imports only: vite.config.ts loads this in Node.
 */

export interface GuidePiece {
  title: string;
  href: string;
}

export interface GuideGroup {
  id: string;
  label: string;
  /** The section's own landing page, offered as a "start here" link. */
  landing?: { href: string; label: string };
  pieces: GuidePiece[];
}

export const GUIDE_LIBRARY: GuideGroup[] = [
  {
    id: "probate-inherited",
    label: "Probate & inherited property",
    landing: { href: "/estate-probate-inherited-property", label: "Start here: estate, probate and inherited property" },
    pieces: [
      { title: "Building Your Professional Team", href: "/estate-probate-inherited-property/professional-team" },
      { title: "Can You Sell a House During Probate in Washington?", href: "/guides/sell-house-during-probate-washington" },
      { title: "Deciding What to Do With the Property", href: "/estate-probate-inherited-property/what-to-do-with-the-property" },
      { title: "First Steps After a Death", href: "/estate-probate-inherited-property/first-steps" },
      { title: "How Long Does It Take to Sell a Probate Property?", href: "/guides/how-long-sell-probate-property" },
      { title: "How Probate Real Estate Works in Washington", href: "/guides/how-probate-real-estate-works" },
      { title: "Preparing the Property for Sale", href: "/estate-probate-inherited-property/preparing-the-property" },
      { title: "Probate House Sale Timeline in Washington State", href: "/guides/probate-house-sale-timeline-washington" },
      { title: "Probate Real Estate Sales in Washington State", href: "/probate-estate-sales" },
      { title: "Probate vs Trust Sale in Washington — What's the Difference?", href: "/guides/probate-vs-trust-sale-washington" },
      { title: "Selling an Inherited Home", href: "/selling-an-inherited-home" },
      { title: "Understanding Probate & Legal Authority", href: "/estate-probate-inherited-property/probate-and-legal-authority" },
      { title: "Understanding the Property's Value", href: "/estate-probate-inherited-property/property-value" },
      { title: "What Happens If Heirs Disagree About Selling?", href: "/guides/heirs-disagree-selling-house" },
      { title: "What Taxes Apply When Selling an Inherited House in Washington?", href: "/guides/taxes-selling-inherited-house-washington" },
      { title: "What to Do With an Inherited House in Washington", href: "/guides/inherited-house-washington" },
      { title: "What To Do With the House", href: "/what-to-do-with-the-house" },
      { title: "Who Has Authority to Sell Probate Property in Washington?", href: "/guides/who-has-authority-sell-probate-property-washington" },
    ],
  },
  {
    id: "executors-trustees",
    label: "Executors & trustees",
    landing: { href: "/executor-responsibilities-first-steps", label: "Start here: an executor's first steps" },
    pieces: [
      { title: "Can an Executor Sell Before Probate in Washington?", href: "/guides/executor-sell-house-before-probate-washington" },
      { title: "Common Executor Mistakes — and How to Avoid Them", href: "/executor-responsibilities-first-steps/common-mistakes" },
      { title: "Executor's Guide", href: "/executors/executors-guide" },
      { title: "Understanding Your Legal Duties as Executor", href: "/executor-responsibilities-first-steps/legal-duties" },
      { title: "What Executors Should Do Before Selling a Home", href: "/guides/what-executors-should-do" },
      { title: "What Should an Executor Do First With a House?", href: "/guides/executor-first-steps-house" },
      { title: "What to Do With Real Estate in the Estate", href: "/executor-responsibilities-first-steps/property-decisions" },
      { title: "When You Need Extra Help", href: "/executor-responsibilities-first-steps/when-you-need-extra-help" },
      { title: "Working With Professionals", href: "/executor-responsibilities-first-steps/working-with-professionals" },
      { title: "Your First 30 Days as Executor", href: "/executor-responsibilities-first-steps/first-30-days" },
    ],
  },
  {
    id: "pricing-appraisal",
    label: "Pricing, appraisal & preparing to sell",
    pieces: [
      { title: "Appraisal vs. CMA for Estate Property", href: "/guides/appraisal-vs-cma" },
      { title: "Date-of-Death Valuation & Estate Property Appraisals", href: "/date-of-death-valuation-property-appraisals" },
      { title: "Do You Need an Appraisal Before Selling Inherited Property?", href: "/guides/appraisal-before-selling-inherited-property" },
      { title: "How Do You Price a House in a Trust or Estate?", href: "/guides/pricing-house-trust-estate" },
      { title: "Preparing a Home for Sale During a Transition", href: "/preparing-home-for-sale-during-transition" },
      { title: "Should You Sell an Inherited House As-Is or Fix It First?", href: "/guides/sell-inherited-house-as-is-or-fix" },
      { title: "What Repairs Should Be Done Before Selling Estate Property?", href: "/guides/estate-property-repairs-before-sale" },
      { title: "What Repairs Should Be Made Before Selling a Probate Home?", href: "/guides/repairs-before-selling-probate-home-washington" },
      { title: "Why Valuation Matters for Probate and Inherited Property", href: "/why-valuation-matters" },
    ],
  },
  {
    id: "planning-ahead",
    label: "Wills, powers of attorney & planning ahead",
    landing: { href: "/planning-before-a-crisis", label: "Start here: planning before a crisis" },
    pieces: [
      { title: "Estate Planning & Powers of Attorney", href: "/estate-planning-powers-of-attorney" },
      { title: "How to Pass Real Estate to Your Children", href: "/articles/wills-trusts-other-options" },
      { title: "Power of Attorney and Real Estate in Washington State", href: "/power-of-attorney" },
      { title: "The Conversations Worth Having Now", href: "/planning-before-a-crisis/conversations-to-have" },
      { title: "The Legal Documents That Matter Most", href: "/planning-before-a-crisis/legal-documents" },
      { title: "The Property Questions to Think Through", href: "/planning-before-a-crisis/property-questions" },
      { title: "When a Move Seems Like It's Coming", href: "/planning-before-a-crisis/when-a-move-is-coming" },
      { title: "Why Planning Early Makes Such a Difference", href: "/planning-before-a-crisis/why-planning-early" },
      { title: "Wills and Real Estate in Washington State", href: "/wills" },
    ],
  },
  {
    id: "senior-transitions",
    label: "Helping a parent & senior transitions",
    pieces: [
      { title: "Aging in Place & Staying at Home Safely", href: "/aging-in-place-staying-home-safely" },
      { title: "Downsizing & Preparing for a Transition", href: "/downsizing-preparing-for-transition" },
      { title: "Downsizing a Senior's Home: Where to Start", href: "/senior-transitions" },
      { title: "Helping an Aging Parent", href: "/helping-an-aging-parent" },
      { title: "How Out-of-State Families Can Handle a Washington Property Sale", href: "/guides/out-of-state-families" },
      { title: "How Senior Transition Sales Differ From Ordinary Home Sales", href: "/guides/senior-transition-differences" },
      { title: "How to Sell a Parent's House to Pay for Senior Living", href: "/sell-house-fund-senior-living" },
      { title: "Understanding Senior Transitions", href: "/understanding-senior-transitions" },
    ],
  },
  {
    id: "senior-housing",
    label: "Senior housing options",
    pieces: [
      { title: "Aging in Place", href: "/senior-living/aging-in-place" },
      { title: "Aging in Place With Support", href: "/articles/aging-in-place" },
      { title: "Assisted Living", href: "/senior-living/assisted-living" },
      { title: "Assisted Living Communities", href: "/senior-living/assisted-living-communities" },
      { title: "Hospice Care in Washington", href: "/articles/hospice-care-washington" },
      { title: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { title: "Independent Living", href: "/senior-living/independent-living" },
      { title: "Memory Care", href: "/senior-living/memory-care" },
      { title: "Nursing & Skilled Care", href: "/senior-living/nursing-and-skilled-care" },
      { title: "Power of Attorney & Real Estate Decisions", href: "/senior-living/power-of-attorneys" },
      { title: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { title: "Senior Housing Options Explained", href: "/senior-living-and-relocation" },
      { title: "Skilled Nursing Care", href: "/senior-living/skilled-nursing" },
      { title: "The Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { title: "The Silver Tsunami Is Here", href: "/articles/silver-tsunami" },
      { title: "Understanding Housing & Care Options", href: "/understanding-housing-care-options" },
    ],
  },
  {
    id: "care-costs",
    label: "What care costs",
    landing: { href: "/cost-of-care-calculator", label: "Run the numbers: cost of care calculators" },
    pieces: [
      { title: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { title: "Continuing Care Retirement Community Costs", href: "/articles/ccrc-costs" },
      { title: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { title: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { title: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
    ],
  },
  {
    id: "long-term-care",
    label: "Long-term care",
    landing: { href: "/long-term-care", label: "Start here: understanding long-term care" },
    pieces: [
      { title: "Finding Care: RoomandCare.com", href: "/long-term-care/finding-care-roomandcare" },
      { title: "How to Choose Between Care Settings: A Guide for Washington Families", href: "/long-term-care/how-to-choose-care-settings" },
      { title: "Medicaid & Long-Term Care in Washington State: What Families Need to Know", href: "/long-term-care/medicaid-and-long-term-care" },
      { title: "Nursing Homes in Washington State: What Families Need to Know", href: "/long-term-care/nursing-homes" },
      { title: "Planning Your Hospital Discharge: A Guide for Washington Families", href: "/long-term-care/hospital-discharge-planning" },
      { title: "Short-Term Nursing Home Stays in Washington State: What Families Need to Know", href: "/long-term-care/short-term-nursing-home-stays" },
      { title: "The Nurse Delegation Program in Washington State: What Families Need to Know", href: "/long-term-care/nurse-delegation" },
      { title: "WA Cares Fund: How WA Cares Fits Into Long-Term Care Planning and Housing Decisions", href: "/long-term-care/wa-cares" },
    ],
  },
  {
    id: "reference",
    label: "Getting oriented & reference",
    pieces: [
      { title: "Building Your Trusted Professional Team", href: "/building-your-trusted-professional-team" },
      { title: "Frequently Asked Questions About Probate Real Estate", href: "/faq" },
      { title: "Gray Divorce and Your Home — What Washington Couples Need to Know", href: "/gray-divorce" },
      { title: "Grey Divorce and the Grey Tsunami", href: "/grey-divorce" },
      { title: "How the Process Works", href: "/how-the-process-works" },
      { title: "What Should We Do First?", href: "/what-should-we-do-first" },
      { title: "Wills, Probate, and Real Property Glossary", href: "/terminology" },
    ],
  },
];

export const GUIDE_COUNT = GUIDE_LIBRARY.reduce((n, g) => n + g.pieces.length, 0);

/** The homepage says "90+". This is the floor that claim depends on. */
export const HOMEPAGE_GUIDE_CLAIM = 90;

/** The same library as static HTML, for the build-time prerender that crawlers read. */
export function guideLibraryHtml(esc: (s: string) => string): string {
  return GUIDE_LIBRARY.map(
    (g) =>
      `<h2 style="font-size:1.3rem;margin-top:24px;margin-bottom:8px">${esc(g.label)}</h2>` +
      (g.landing ? `<p style="margin:0 0 8px"><a href="${g.landing.href}" style="color:#1a365d">${esc(g.landing.label)}</a></p>` : "") +
      `<ul style="margin:0 0 12px;padding-left:20px;line-height:1.8">${g.pieces.map((p) => `<li><a href="${p.href}" style="color:#1a365d">${esc(p.title)}</a></li>`).join("")}</ul>`
  ).join("");
}
