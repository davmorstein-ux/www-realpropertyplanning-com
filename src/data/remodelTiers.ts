/**
 * WHAT'S MY REMODEL WORTH? — the tier table (Oct 13, 2026). DRAFT FOR THE OWNER'S REVIEW.
 *
 * King County's records do not know window brands or roof shingles. They grade a
 * whole house's quality of construction and finish on a 1–13 scale (BldgGrade) and
 * its upkeep on a 1–5 scale (Condition). This table turns a remodel's scope into
 * those two scales:
 *
 *   - Each part of the house carries a WEIGHT: how much of the assessor's
 *     whole-house grade it accounts for. The weights add to 1.
 *   - Each quality tier points at a TARGET GRADE (economy 7, standard 8,
 *     premium 10, luxury 12, using the assessor's own grade descriptions).
 *   - New grade = old grade + sum over the parts redone of weight × (target − old).
 *     A luxury kitchen in a grade 7 house moves the whole house 0.25 × 5 = 1.25
 *     grades; redoing everything at premium takes any house to grade 10.
 *     Economy finishes in a grade 10 house pull it DOWN.
 *   - Condition rises toward 5 ("very good") in proportion to the share of the
 *     house that is new.
 *
 * The weights, targets and examples are a starting draft by an appraiser's rules
 * of thumb, not a statistical fit; the owner (a certified residential appraiser)
 * corrects them. The price model itself is fitted from King County sales: see
 * src/lib/remodelValue.ts.
 */

export type Tier = "economy" | "standard" | "premium" | "luxury";

export const TIERS: { id: Tier; label: string }[] = [
  { id: "economy", label: "Economy" },
  { id: "standard", label: "Standard" },
  { id: "premium", label: "Premium" },
  { id: "luxury", label: "Luxury" },
];

/** The assessor grade each tier finishes at. */
export const TIER_GRADE: Record<Tier, number> = { economy: 7, standard: 8, premium: 10, luxury: 12 };

export interface RemodelPart {
  id: string;
  label: string;
  /** Share of the whole-house grade. All weights add to 1. */
  weight: number;
  examples: Record<Tier, string>;
}

export const REMODEL_PARTS: RemodelPart[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    weight: 0.25,
    examples: {
      economy: "Stock cabinets, laminate counters, basic appliance package",
      standard: "Semi-custom cabinets, quartz or granite counters, stainless appliances",
      premium: "Custom cabinets, slab quartz or stone, upgraded appliance package, island",
      luxury: "Full custom millwork, designer stone, built-in professional appliances (Sub-Zero, Wolf class)",
    },
  },
  {
    id: "baths",
    label: "Bathrooms",
    weight: 0.15,
    examples: {
      economy: "Fiberglass tub and shower, stock vanity, sheet vinyl",
      standard: "Tile surround, quartz-top vanity, new fixtures",
      premium: "Custom tile shower, double vanity, heated floors",
      luxury: "Curbless stone shower, freestanding tub, custom vanities, designer fixtures",
    },
  },
  {
    id: "flooring",
    label: "Flooring",
    weight: 0.12,
    examples: {
      economy: "Carpet and sheet vinyl",
      standard: "Luxury vinyl plank (LVP) and carpet in bedrooms",
      premium: "Engineered hardwood or tile throughout",
      luxury: "Site-finished solid hardwood, natural stone",
    },
  },
  {
    id: "windows",
    label: "Windows & exterior doors",
    weight: 0.1,
    examples: {
      economy: "Builder-grade vinyl (entry-level JELD-WEN class)",
      standard: "Mid-range vinyl (Milgard class)",
      premium: "Fiberglass or wood-clad (Andersen, Pella class)",
      luxury: "Custom wood or steel (Marvin Signature class)",
    },
  },
  {
    id: "roof",
    label: "Roof",
    weight: 0.08,
    examples: {
      economy: "3-tab composition shingles",
      standard: "Architectural composition shingles (30-year)",
      premium: "Designer laminated shingles (Presidential class)",
      luxury: "Standing-seam metal, slate or cedar shake",
    },
  },
  {
    id: "exterior",
    label: "Siding & exterior",
    weight: 0.1,
    examples: {
      economy: "Paint and patch existing siding",
      standard: "Fiber-cement (Hardie class) siding",
      premium: "Fiber-cement with stone or wood accents, new decks and entry",
      luxury: "Architect-designed exterior, natural stone, custom outdoor living",
    },
  },
  {
    id: "interior",
    label: "Interior finishes (paint, trim, doors, lighting)",
    weight: 0.1,
    examples: {
      economy: "Fresh paint, hollow-core doors, basic fixtures",
      standard: "Paint, new trim, solid-core doors, recessed lighting",
      premium: "Upgraded millwork, designer lighting, built-ins",
      luxury: "Custom millwork throughout, architectural lighting plan",
    },
  },
  {
    id: "systems",
    label: "Heating, cooling & systems",
    weight: 0.1,
    examples: {
      economy: "Replace furnace or water heater like for like",
      standard: "New forced air with A/C or a heat pump, electrical panel",
      premium: "High-efficiency heat pump, rewiring, re-plumbing, smart controls",
      luxury: "Radiant heat, whole-house systems, generator, home automation",
    },
  },
];

/** The assessor's names for its building grades (King County Assessor). */
export const GRADE_LABELS: Record<number, string> = {
  4: "4 — Low",
  5: "5 — Fair",
  6: "6 — Low average",
  7: "7 — Average",
  8: "8 — Good",
  9: "9 — Better",
  10: "10 — Very good",
  11: "11 — Excellent",
  12: "12 — Luxury",
  13: "13 — Mansion",
};

/** The assessor's condition scale. */
export const CONDITION_LABELS: Record<number, string> = {
  1: "1 — Poor",
  2: "2 — Fair",
  3: "3 — Average",
  4: "4 — Good",
  5: "5 — Very good",
};
