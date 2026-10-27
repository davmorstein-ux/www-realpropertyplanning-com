/**
 * WHAT'S MY REMODEL WORTH? — spending table (Oct 15, 2026). DRAFT: Claude's estimates, built
 * at the owner's request ("build it first") for him to correct on the live page. Edit the
 * numbers here; nothing else needs to change.
 *
 * The page asks what was spent on each category (sliders, $0–$100,000 in $500 steps, or typed).
 * For each category:
 *   share    — part of a FULL renovation's value this category accounts for (shares add to 1).
 *              A full renovation itself is measured from sales: see FULL_RENO_BROKER and
 *              renoCeilings in src/lib/remodelValue.ts (about +30% / +20% over unrenovated,
 *              more in pricier neighborhoods).
 *   fullJob  — what a complete, market-appropriate job costs on a house worth $1,000,000
 *              unrenovated. It scales IN PROPORTION to the house's own unrenovated value (owner,
 *              Oct 15, 2026: "a $10,000 remodel in Burien could be significant where a $10,000
 *              remodel in Clyde Hill means nothing ... you're not going to spend $50,000 on windows
 *              in a house in Renton but $100,000 in windows could easily be spent in Medina").
 *              So a $3.3M Clyde Hill house expects about 3.3 times the spending, and the same
 *              dollars buy a third as much of a "complete job" there.
 *              Value earned builds steadily (earnedShare in src/lib/remodelValue.ts): about 57% of
 *              the category's value at half the full-job cost, 90% at the full-job cost, all of it
 *              at about 1.5 times the full-job cost, nothing more after that. Calibrated so a
 *              complete job on the owner's comparable 98034 split entry (about $1.0M unrenovated)
 *              totals about the $250,000 that seller spent and lands near its $1,315,000 sale.
 */

export interface SpendCategory {
  id: string;
  label: string;
  share: number;
  fullJob: number;
  /** One line under the slider: what the money typically covers. */
  hint: string;
}

export const SPEND_CATEGORIES: SpendCategory[] = [
  { id: "kitchen", label: "Kitchen", share: 0.25, fullJob: 55000, hint: "Cabinets, counters, appliances, lighting, layout" },
  { id: "baths", label: "Bathrooms", share: 0.17, fullJob: 45000, hint: "All bathrooms together: tile, vanities, fixtures, showers" },
  { id: "flooring", label: "Flooring", share: 0.1, fullJob: 22000, hint: "Hardwood, LVP, tile, carpet" },
  { id: "paint", label: "Interior paint", share: 0.06, fullJob: 9000, hint: "Walls, ceilings, trim" },
  { id: "finishes", label: "Interior finishes", share: 0.05, fullJob: 13000, hint: "Trim, doors, lighting, built-ins" },
  /* Split Oct 15, 2026 (owner) from "Siding & exterior paint" (0.07, $27,000) into two sliders. */
  { id: "exterior", label: "Siding", share: 0.05, fullJob: 18000, hint: "New siding, trim and entry" },
  { id: "extpaint", label: "Exterior paint", share: 0.02, fullJob: 9000, hint: "Body, trim and doors; prep and caulking" },
  { id: "roof", label: "Roof", share: 0.06, fullJob: 24000, hint: "Tear-off and new roof" },
  { id: "gutters", label: "Gutters & downspouts", share: 0.02, fullJob: 6000, hint: "Seamless gutters, downspouts, gutter guards, drainage" },
  { id: "windows", label: "Windows & exterior doors", share: 0.08, fullJob: 22000, hint: "Replacement windows, entry and patio doors" },
  { id: "systems", label: "Heating, cooling & systems", share: 0.07, fullJob: 22000, hint: "Furnace or heat pump, A/C, electrical, plumbing, water heater" },
  { id: "landscaping", label: "Landscaping", share: 0.05, fullJob: 13000, hint: "Yard, plantings, hardscape, fencing" },
  /* Oct 15, 2026 (owner). A home theater is a buyer-specific taste: a small share, so most of what is
     spent on one past a modest room does not come back at sale. */
  { id: "theater", label: "Home theater", share: 0.02, fullJob: 15000, hint: "Projector or screen, sound, seating, room finishing" },
];

/** Slider range, from the owner: $0 to $300,000 in $500 steps (Oct 27, 2026; was $100,000 — a kitchen alone
 * can cost $300,000 in a high-end house). Larger amounts can be typed. */
export const SLIDER_MAX = 300000;
export const SLIDER_STEP = 500;

/** The house value the full-job costs above are written for. */
export const COST_BASE_VALUE = 1000000;

/**
 * Work finished more than 10 years ago earns this share of its value today: King County sales
 * show buyers pay a renovation premium of about 19% within 10 years but about 8% after that.
 * 0.6 rather than 0.4 because quality and condition outlast the "newly renovated" premium.
 */
export const OLD_WORK_FACTOR = 0.6;
