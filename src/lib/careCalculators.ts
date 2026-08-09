
import { CARE_TYPES, type CareType } from "@/lib/careTypes";

/**
 * The six housing options shown on the Cost of Care calculator hub and in the
 * switcher strip at the foot of each calculator page.
 *
 * SINGLE SOURCE OF TRUTH. The hub grid and the switcher both read this list,
 * so adding or removing an option updates both. Do not hand-build either list
 * separately — they drifted apart in an earlier version of the site and the
 * result was a nav strip offering pages that no longer existed.
 *
 * WHY SIX and not the nine entries in CARE_TYPES:
 *   - Adult Day Care and CCRC are omitted. Both are real options, but they sit
 *     outside the "where will they live" decision this hub is built around.
 *   - The two nursing-home rows in CARE_TYPES (semi-private and private) are
 *     represented by one tile using the semi-private figure, which is the more
 *     common starting point. The private-room figure is shown on that page.
 *
 * `careTypeId` must match an id in src/lib/careTypes.ts — that is what the
 * calculator itself keys off. `slug` is the URL segment and must stay stable:
 * these are indexed pages, so renaming one needs a redirect.
 */
export interface CareCalculatorOption {
  slug: string;
  careTypeId: string;
  /** Short label for tiles and the switcher. CARE_TYPES labels are too long. */
  shortLabel: string;
  /** One line on who this option suits, shown on the hub tiles. */
  blurb: string;
}

export const CARE_CALCULATORS: CareCalculatorOption[] = [
  {
    slug: "independent-living",
    careTypeId: "independent-living",
    shortLabel: "Independent Living",
    blurb: "Own apartment, community amenities, no personal care included.",
  },
  {
    slug: "in-home-care",
    careTypeId: "in-home",
    shortLabel: "In-Home Care",
    blurb: "Staying in the current home with non-medical help brought in.",
  },
  {
    slug: "adult-family-home",
    careTypeId: "adult-family-home",
    shortLabel: "Adult Family Home",
    blurb: "A licensed residential home, usually six residents or fewer.",
  },
  {
    slug: "assisted-living",
    careTypeId: "assisted-living",
    shortLabel: "Assisted Living",
    blurb: "A larger community with daily support and on-site staff.",
  },
  {
    slug: "memory-care",
    careTypeId: "memory-care",
    shortLabel: "Memory Care",
    blurb: "Secured setting with staff trained in dementia care.",
  },
  {
    slug: "nursing-home",
    careTypeId: "nursing-semi",
    shortLabel: "Nursing Home",
    blurb: "Skilled nursing with medical care available around the clock.",
  },
];

/** Look up an option by its URL slug. Returns undefined for unknown slugs so
 *  the page can redirect rather than render a calculator for nothing. */
export const findCareCalculator = (slug?: string): CareCalculatorOption | undefined =>
  CARE_CALCULATORS.find((o) => o.slug === slug);

/** The full CareType record behind an option, for labels, figures and notes. */
export const careTypeFor = (option: CareCalculatorOption): CareType =>
  CARE_TYPES.find((c) => c.id === option.careTypeId) ?? CARE_TYPES[0];
