import { HUB_FOUNDER_NAME } from "./featuredProfessionals"; // relative: vite.config.ts imports this file

/**
 * "Why I built this" — a short first-person note from the site's founder at the
 * top of every calculator (Oct 16, 2026, David's idea).
 *
 * WHY THESE ARE SIGNED AS FOUNDER, NOT AS THE FEATURED BROKER. Since Sept 22,
 * 2026 the site is not about any one professional: the featured broker and
 * appraiser are a swappable record (featuredProfessionals.ts). These notes are
 * different. They say why the tools were built, and the person who built them
 * stays the founder even if another broker takes the featured spot, so they are
 * signed with HUB_FOUNDER_NAME and never with FEATURED_BROKER. Keep them free of
 * any pitch for brokerage or appraisal work; the IntentCTA at the foot of each
 * calculator already does that job.
 *
 * SINGLE SOURCE. The page component (src/components/WhyIBuiltThis.tsx) and the
 * prerendered static HTML (buildSsgContent in vite.config.ts) both read this
 * file, so a wording change here reaches both. Keep each note to two to four
 * sentences: people came to calculate.
 */

export const FOUNDER_SIGNATURE = `${HUB_FOUNDER_NAME}, founder of Real Property Planning`;
export const WHY_HEADING = "Why I built this";

/** The six cost-of-care calculators share one reason; a single line changes by care type. */
const COST_OF_CARE_SHARED =
  "Most families I meet start planning for care after a fall or a hospital stay, when there's no time to compare options. The first question is almost always about cost, and an honest answer is hard to find online. I built these calculators so you can see real Washington numbers before you're forced to decide.";

/** Keyed by the slug in src/lib/careCalculators.ts. */
const COST_OF_CARE_LINE: Record<string, string> = {
  "memory-care": "Memory care costs more than standard assisted living, and the gap surprises a lot of families.",
  "independent-living": "Independent living is usually paid entirely out of pocket, so it helps to see how long savings will last.",
  "in-home-care": "Families often assume staying home is the cheapest choice. Sometimes it is, and sometimes it isn't once the hours add up.",
  "nursing-home": "A nursing home is usually the most expensive option per month, which is why many families start Medicaid planning here.",
  "assisted-living": "Assisted living prices often climb as care needs grow, so the starting rate is rarely the whole story.",
  "adult-family-home": "Adult family homes often cost less than assisted living for similar care, but prices vary widely from one home to the next.",
};

/** Every calculator route that carries a note, with its text. */
export const CALCULATOR_NOTES: Record<string, string> = {
  "/adult-family-home-costs":
    "Adult family home prices vary more from one county to the next than most families expect, and Medicaid rates are published in places few people know to look. I built this so you can see what a home near your parent is likely to charge before you start touring.",
  "/whats-my-remodel-worth":
    "Many people who inherit a home, or who are handling an estate, have to decide whether it's worth fixing up a house that's had years of deferred maintenance. Some updates pay for themselves at sale. Many don't. As an appraiser and a broker, I see both sides of that question, and I built this so you can see the tradeoff before you spend the money.",
  "/afh-club/afh-property-score":
    "I've watched buyers fall in love with a house and only later learn it could never be licensed as an adult family home. The hallway is too narrow, there's no step-free entry, or there aren't enough bathrooms. I built this screen so you can catch those problems in ten minutes instead of after an inspection.",
  "/afh-club/afh-roi-calculator":
    "An adult family home is a business inside a house, and buyers often judge it by the house alone. I built this so you can see whether the beds, the care mix, and the operating costs actually support the price.",
  "/afh-club/afh-valuation-estimator":
    "When an adult family home sells, the real estate and the business are two different things with two different values, and sellers and buyers often blur them together. As an appraiser, separating them is the first thing I do. This tool lets you do the same.",
  "/afh-club/afh-financing-calculator":
    "I built this after working through a real sale where everything came down to one question: would a lender approve the loan at that price with the residents the home actually had? Every empty bed changes the answer. This shows you how much before you're in front of a lender.",
};

/** The note for a cost-of-care calculator page, by care slug. */
export const costOfCareNote = (slug: string): string => {
  const line = COST_OF_CARE_LINE[slug];
  return line ? `${COST_OF_CARE_SHARED} ${line}` : COST_OF_CARE_SHARED;
};

export const COST_OF_CARE_SLUGS = Object.keys(COST_OF_CARE_LINE);

/** The note for any route, or undefined if the route has none. Used by the static prerender. */
export const calculatorNoteForRoute = (route: string): string | undefined => {
  if (CALCULATOR_NOTES[route]) return CALCULATOR_NOTES[route];
  const m = route.match(/^\/cost-of-care-calculator\/([^/]+)$/);
  return m ? costOfCareNote(m[1]) : undefined;
};
