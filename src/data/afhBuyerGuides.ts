// Relative import, not "@/": this file is also loaded by Node during `vite build`.
import type { AFHListing } from "./afhListings";

/**
 * Which AFH Club guides a listing page should point its reader to.
 *
 * WHY THIS EXISTS (Sept 2026). The listing pages are the highest-intent pages
 * on the site and they linked to no guides at all: 69 listing pages and 17 city
 * pages pointed only at calculators and at each other. The guides are what show
 * a buyer that the broker behind the listing understands what they are about to
 * do, and links from ~90 pages into one article cluster are what tell a search
 * engine those topics belong together.
 *
 * WHY IT IS PLAIN DATA. This file is imported by the React component
 * (AFHBuyerGuides) AND by the build-time prerender (afhInventoryPrerender.ts).
 * AI crawlers and most search crawlers read only the prerendered HTML, so a
 * link that exists in React alone is invisible to them. Keeping one list means
 * the two can never disagree. Do not import React, JSX, or browser APIs here.
 *
 * WHAT IS DELIBERATELY NOT HERE. The valuation estimator, ROI calculator,
 * financing calculator and cost lookup: AFHRunTheNumbers already puts those on
 * every listing and city page. This block is guides only.
 *
 * AUDIENCE. AFH Club: buyers, sellers, owners, investors. No family-placement
 * guides belong in these lists.
 */

export interface BuyerGuide {
  href: string;
  title: string;
  /** One line on why THIS reader should open it. Shown under the title. */
  why: string;
}

const G = {
  labels: {
    href: "/afh-club/afh-property-classifications",
    title: "Is It Really an Adult Family Home?",
    why: "What 'AFH', 'AFH-ready' and 'potential AFH' mean in a listing, and the documents to ask for.",
  },
  fieldGuide: {
    href: "/afh-club/afh-payment-field-guide",
    title: "Which Tier? The AFH Payment Field Guide",
    why: "Four different payment systems sit behind an AFH's income. Which ones survive a sale.",
  },
  care: {
    href: "/afh-club/care-classifications-a-through-e",
    title: "A Through E: How CARE Classifications Set Medicaid Income",
    why: "Why the mix of residents matters as much as occupancy, and what to verify.",
  },
  cbhs: {
    href: "/afh-club/cbhs-tiers",
    title: "CBHS Tiers Explained",
    why: "The behavioral health add-on behind some homes' income, and how durable it is.",
  },
  finance: {
    href: "/afh-club/how-to-finance-an-afh",
    title: "How to Finance an Adult Family Home",
    why: "Residential, SBA 7(a), SBA 504 or commercial: which loan fits what is being sold.",
  },
  buySell: {
    href: "/afh-club/buying-selling",
    title: "Buying or Selling an AFH",
    why: "The change-of-ownership process, and which contracts do not transfer to a buyer.",
  },
  wabo: {
    href: "/afh-club/wabo-inspection-guide",
    title: "The WABO Inspection Guide",
    why: "What the building inspection covers and what it costs to bring a house up to AFH code.",
  },
  licensing: {
    href: "/afh-club/licensing-certification",
    title: "Licensing & Certification",
    why: "What a new owner or operator must hold before the first resident moves in.",
  },
  violations: {
    href: "/afh-club/violation-history-lookup",
    title: "Violation History Lookup",
    why: "Check a licensed home's inspection and enforcement record before you make an offer.",
  },
  whatIs: {
    href: "/afh-club/what-is-an-adult-family-home",
    title: "What Is an Adult Family Home?",
    why: "The model in plain terms, and how it differs from assisted living.",
  },
} satisfies Record<string, BuyerGuide>;

export interface BuyerGuideSet {
  heading: string;
  intro: string;
  guides: BuyerGuide[];
}

/**
 * The set for one listing. The lead guide follows what is actually being sold:
 *
 *   income is part of the price   -> lead with how that income works
 *   (a business, or a home sold      (field guide, A-E, CBHS), then financing
 *    with residents in place)         and the change-of-ownership rules
 *
 *   a building, no income          -> lead with "is it really an AFH?", then
 *   (AFH-ready, former, opportunity,  the inspection, licensing and financing
 *    licensed but empty)
 *
 *   a lease                        -> what the label means, licensing, how the
 *                                     income works, and ownership transfer
 */
export function guidesForListing(l: Pick<AFHListing, "listingType" | "afhStatus">): BuyerGuideSet {
  const licensedNow = l.afhStatus === "operating" || l.afhStatus === "licensedNotOperating";

  if (l.listingType === "business") {
    return {
      heading: "Before you buy an AFH business",
      intro: "With a business sale, the income is what you are paying for. These guides explain where that income comes from and how much of it a new owner keeps.",
      guides: [G.fieldGuide, G.care, G.cbhs, G.finance, G.buySell],
    };
  }

  if (l.listingType === "lease") {
    return {
      heading: "Before you lease an AFH property",
      intro: "Leasing a house to operate in raises different questions from buying one. Start here.",
      guides: [G.labels, G.licensing, G.fieldGuide, G.buySell, ...(licensedNow ? [G.violations] : [G.wabo])],
    };
  }

  if (l.afhStatus === "operating") {
    return {
      heading: "Before you buy an operating AFH",
      intro: "An operating home is a building and an income stream. These guides cover how to verify both.",
      guides: [G.labels, G.fieldGuide, G.care, G.finance, G.violations],
    };
  }

  return {
    heading: "Before you buy this property",
    intro: "A listing that mentions adult family home use is not always a licensed adult family home. These guides cover what to confirm and what it takes to open.",
    guides: [G.labels, G.wabo, G.licensing, G.finance, ...(licensedNow || l.afhStatus === "former" ? [G.violations] : [G.whatIs])],
  };
}

/** The fixed set for pages that show many listings: the index and the city pages. */
export const GUIDES_FOR_BROWSING: BuyerGuideSet = {
  heading: "Guides for AFH buyers",
  intro: "Written for people buying, selling, or operating an adult family home in Washington.",
  guides: [G.labels, G.fieldGuide, G.finance, G.buySell, G.wabo],
};

/** Same links as static HTML, for the build-time prerender that crawlers read. */
export function buyerGuidesHtml(set: BuyerGuideSet, esc: (s: string) => string): string {
  const items = set.guides
    .map(
      (g) =>
        `<li style="margin:0 0 10px;line-height:1.6"><a href="${g.href}" style="color:#1a365d;font-weight:700">${esc(g.title)}</a><br><span style="color:#444">${esc(g.why)}</span></li>`
    )
    .join("");
  return (
    `<section style="margin:0 0 28px"><h2 style="font-size:1.3rem;margin:0 0 8px">${esc(set.heading)}</h2>` +
    `<p style="color:#444;line-height:1.7;margin:0 0 12px">${esc(set.intro)}</p>` +
    `<ul style="margin:0 0 12px;padding-left:20px">${items}</ul>` +
    `<p style="margin:0"><a href="/afh-club/resources" style="color:#1a365d">All AFH Club guides</a></p></section>`
  );
}
