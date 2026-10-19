/**
 * "Where to go next" links for the licensed-home directory (Oct 19, 2026).
 *
 * Search Console, Sept 20 – Oct 17, 2026: the /afh-club/homes pages brought in
 * about 87% of the site's Google clicks (≈1,360 of 1,630), and a home's page
 * offered nothing after the DSHS record. Visitors are mostly families choosing
 * a home and owners or buyers checking homes, so there is one group of links
 * for each.
 *
 * One list, used by the live pages (AFHDirectoryNextSteps.tsx) and the
 * prerendered HTML (prerender.ts), so both say the same thing. The for-sale
 * link's wording is deliberate: "adult family homes for sale in …" is what
 * people search, and those searches were landing on directory pages instead
 * of the listings.
 */
import { cityPageByCity } from "../afhCityPages";

export interface NextLink {
  href: string;
  label: string;
  note: string;
}

export interface NextGroup {
  heading: string;
  links: NextLink[];
}

/** `city` is the directory city ("Bothell"); a for-sale page is linked when that city has one. */
export function directoryNextSteps(city?: string): NextGroup[] {
  const forSale = city ? cityPageByCity(city) : undefined;
  return [
    {
      heading: "Choosing a home for a family member?",
      links: [
        {
          href: "/senior-living/choosing-an-adult-family-home",
          label: "How to choose an adult family home",
          note: "A tour checklist, how to read the DSHS record, and how to compare two homes.",
        },
        {
          href: "/adult-family-home-costs",
          label: "What adult family homes cost, by city and county",
          note: "Medicaid rates and typical private-pay ranges for any Washington city or county.",
        },
        {
          href: "/my-plan#parent:",
          label: "Make a free plan for your parent's care and house",
          note: "Four questions, then a step-by-step checklist. For most families the house pays for care.",
        },
      ],
    },
    {
      heading: "Own, buy or sell an adult family home?",
      links: [
        forSale
          ? {
              href: `/afh-club/for-sale/${forSale.slug}`,
              label: `Adult family homes for sale in ${forSale.city}`,
              note: `Licensed homes and buildings on the market now in and around ${forSale.city}.`,
            }
          : {
              href: "/afh-club/listings",
              label: "Adult family homes for sale in Washington",
              note: "Licensed homes and buildings on the market now, statewide.",
            },
        {
          href: "/afh-club/washington-adult-family-home-guide/selling",
          label: "Selling an adult family home",
          note: "The house, the business or both: timing, the 60-day notice, and how buyers judge a home.",
        },
        {
          href: "/afh-club/listings#phone-alerts",
          label: "Phone alerts for new AFH listings",
          note: "Free. New listings, price changes and sales, statewide or by city.",
        },
        {
          href: "/newsletter#afh",
          label: "The AFH Club newsletter",
          note: "Rule changes, sales and market notes for owners and buyers. Free.",
        },
      ],
    },
  ];
}
