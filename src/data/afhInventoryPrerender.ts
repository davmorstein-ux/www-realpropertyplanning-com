/**
 * Build-time prerender for AFH for-sale inventory.
 *
 * The listing cards on /afh-club/listings and the /afh-club/for-sale/<city>
 * pages were rendered only in the browser, so a crawler that does not execute
 * JavaScript (most AI search engines) saw the intro copy and nothing else —
 * no prices, cities, MLS numbers, or statuses. This module turns the static
 * data in afhListings.ts into plain HTML and JSON-LD that vite.config.ts
 * injects into each page's prerendered index.html. React replaces it on
 * hydration; the facts here mirror what AFHListingCard renders so the two
 * never disagree.
 *
 * Runs in Node during `vite build`. Keep it free of Vite-only imports.
 */

import {
  afhListings,
  afhClassification,
  formatVerifiedDate,
  latestVerified,
  isLive,
  AFH_MARKET_STATUS_LABELS,
  AFH_SOURCE_LABELS,
  AFH_TYPE_LABELS,
  type AFHListing,
  type AFHListingType,
} from "./afhListings";

const SITE_URL = "https://realpropertyplanning.com";

/** Which slice of the inventory a page shows. Set on RouteMeta.afhInventory in vite.config.ts. */
export interface AFHInventoryScope {
  /** City name exactly as it appears in afhListings.ts (case-insensitive). */
  city?: string;
  /** Restrict to one listing type. Omit for all types. */
  type?: AFHListingType;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const priceNumber = (l: AFHListing): number | null => {
  const n = Number(l.price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
};

const sqftNumber = (l: AFHListing): number | null => {
  const n = Number(l.sqft.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
};

const sourceRef = (l: AFHListing) => `${AFH_SOURCE_LABELS[l.source]} #${l.mlsNum}`;

const displayAddress = (l: AFHListing) =>
  /upon request|undisclosed/i.test(l.address) ? "Undisclosed address" : l.address;

const listingHeading = (l: AFHListing) => `${displayAddress(l)}, ${l.city}, ${l.state}`;

/** Stable slug for a listing, used as the card anchor and as the ListItem URL fragment. */
export const listingAnchor = (l: AFHListing) =>
  `listing-${l.city.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${l.source}-${l.mlsNum}`;

const scopedListings = (scope: AFHInventoryScope): AFHListing[] =>
  afhListings.filter(
    (l) =>
      isLive(l) &&
      (!scope.city || l.city.toLowerCase() === scope.city.toLowerCase()) &&
      (!scope.type || l.listingType === scope.type)
  );

const countSentence = (listings: AFHListing[], scope: AFHInventoryScope): string => {
  const where = scope.city ? `${scope.city}, Washington` : "Washington State";
  const nouns: Record<AFHListingType | "all", { one: string; many: string }> = {
    all: { one: "adult family home opportunity", many: "adult family home opportunities" },
    realEstate: { one: "adult family home property for sale", many: "adult family home properties for sale" },
    business: { one: "adult family home business for sale", many: "adult family home businesses for sale" },
    lease: { one: "adult family home for lease", many: "adult family homes for lease" },
  };
  const noun = nouns[scope.type ?? "all"];
  const active = listings.filter((l) => l.marketStatus === "active").length;
  const pending = listings.filter((l) => l.marketStatus === "pending").length;
  if (listings.length === 0) {
    return `There are currently no ${noun.many} publicly listed in ${where} in this directory.`;
  }
  const n = listings.length;
  const parts = [`${active} active`];
  if (pending) parts.push(`${pending} pending`);
  return `There ${n === 1 ? "is" : "are"} currently ${n} ${n === 1 ? noun.one : noun.many} publicly listed in ${where} in this directory (${parts.join(", ")}).`;
};

const summaryTable = (listings: AFHListing[]): string => {
  const th = (t: string) =>
    `<th style="text-align:left;padding:8px 10px;border-bottom:2px solid #ddd;font-size:0.85rem">${t}</th>`;
  const td = (t: string) => `<td style="padding:8px 10px;border-bottom:1px solid #eee;font-size:0.95rem">${t}</td>`;
  const rows = listings
    .map(
      (l) =>
        `<tr>` +
        td(AFH_MARKET_STATUS_LABELS[l.marketStatus]) +
        td(esc(`${displayAddress(l)}, ${l.city}`)) +
        td(esc(l.price)) +
        td(String(l.beds)) +
        td(`${esc(l.sqft)} sq ft`) +
        td(esc(afhClassification(l))) +
        td(esc(sourceRef(l))) +
        td(formatVerifiedDate(l.lastVerified)) +
        `</tr>`
    )
    .join("");
  return (
    `<div style="overflow-x:auto;margin:16px 0 24px"><table style="width:100%;border-collapse:collapse">` +
    `<thead><tr>${th("Status")}${th("Location")}${th("Price")}${th("Beds")}${th("Size")}${th("AFH classification")}${th("Source #")}${th("Verified")}</tr></thead>` +
    `<tbody>${rows}</tbody></table></div>`
  );
};

const listingCard = (l: AFHListing): string => {
  const p: string[] = [];
  p.push(
    `<article id="${listingAnchor(l)}" style="margin:0 0 18px;padding:18px;border:1px solid #e5e5e5;border-radius:12px;background:#fff">`
  );
  p.push(`<h3 style="font-size:1.15rem;line-height:1.3;margin:0 0 6px">${esc(listingHeading(l))}</h3>`);
  const priceLabel = l.priceLabel || (l.listingType === "business" ? "Business asking price" : "Asking price");
  p.push(
    `<p style="margin:0 0 6px;font-size:1.1rem"><strong>${esc(l.price)}</strong> <span style="color:#666;font-size:0.9rem">— ${esc(priceLabel)}</span> · <strong>${AFH_MARKET_STATUS_LABELS[l.marketStatus]}</strong></p>`
  );
  p.push(`<p style="margin:0 0 6px;color:#0a5648;font-weight:700">${esc(afhClassification(l))}</p>`);
  p.push(
    `<p style="margin:0 0 6px;color:#444">${l.beds} bedrooms · ${esc(l.bathDisplay)} bathrooms (${esc(l.bathDetail)}) · ${esc(l.sqft)} square feet</p>`
  );
  p.push(`<p style="margin:0 0 6px;color:#444">${esc(sourceRef(l))}</p>`);
  if (l.linkedMls) {
    p.push(
      `<p style="margin:0 0 6px;color:#444">${l.listingType === "business" ? "Real estate" : "Business"} listed separately — MLS #${esc(l.linkedMls)}</p>`
    );
  }
  if (l.businessNotes) p.push(`<p style="margin:0 0 6px;color:#444;line-height:1.6">${esc(l.businessNotes)}</p>`);
  const who = l.broker ? `${l.broker}, ${l.brokerage}` : l.brokerage;
  p.push(`<p style="margin:0 0 6px;color:#555;font-size:0.9rem">Listed by ${esc(who)}</p>`);
  if (l.source !== "nwmls" && l.sourceUrl) {
    p.push(
      `<p style="margin:0 0 6px;font-size:0.9rem"><a href="${esc(l.sourceUrl)}" rel="nofollow noopener" style="color:#1a365d">View the original listing</a></p>`
    );
  }
  p.push(
    `<p style="margin:0;color:#666;font-size:0.85rem">Last verified ${formatVerifiedDate(l.lastVerified)}${
      l.statusChanged ? ` · status changed ${formatVerifiedDate(l.statusChanged)}` : ""
    }</p>`
  );
  p.push(`</article>`);
  return p.join("");
};

const disclaimer = (listings: AFHListing[]): string => {
  const hasNwmls = listings.some((l) => l.source === "nwmls");
  const hasOther = listings.some((l) => l.source !== "nwmls");
  return (
    `<p style="margin:16px 0 0;padding:14px;border:1px solid #e5e5e5;border-radius:8px;background:#fafafa;font-size:0.8rem;color:#666;line-height:1.7;text-align:center">` +
    (hasNwmls ? "NWMLS listings are provided courtesy of the Northwest Multiple Listing Service. " : "") +
    (hasOther
      ? "Listings marked RMLS, BizBuySell, or direct are summarized from public sources and link to the listing brokerage; photos and remarks are not reproduced. "
      : "") +
    `Information deemed reliable but not guaranteed. Real Property Planning is an independent educational hub and does not represent buyers or sellers on these properties directly — contact David Stein, Washington State Licensed Real Estate Broker (eXp Realty · License #133972), for all inquiries, showings, and full listing details.` +
    `</p>`
  );
};

const listingSchema = (l: AFHListing, canonical: string): Record<string, unknown> => {
  const price = priceNumber(l);
  const sqft = sqftNumber(l);
  const address = {
    "@type": "PostalAddress",
    addressLocality: l.city,
    addressRegion: l.state,
    addressCountry: "US",
    ...(/upon request|undisclosed/i.test(l.address) ? {} : { streetAddress: l.address }),
  };
  const offer = {
    "@type": "Offer",
    ...(price !== null ? { price, priceCurrency: "USD" } : {}),
    availability:
      l.marketStatus === "active" ? "https://schema.org/InStock" : "https://schema.org/LimitedAvailability",
    businessFunction:
      l.listingType === "lease" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
    seller: { "@type": "RealEstateAgent", name: l.broker ? `${l.broker}, ${l.brokerage}` : l.brokerage },
    ...(l.sourceUrl ? { url: l.sourceUrl } : {}),
  };
  const base = {
    name: listingHeading(l),
    description: afhClassification(l),
    identifier: { "@type": "PropertyValue", propertyID: AFH_SOURCE_LABELS[l.source], value: l.mlsNum },
    url: `${canonical}#${listingAnchor(l)}`,
    address,
    offers: offer,
  };
  if (l.listingType === "business") {
    return {
      "@type": "Product",
      category: "Adult family home business",
      ...base,
    };
  }
  return {
    "@type": "SingleFamilyResidence",
    additionalType: "https://schema.org/House",
    numberOfBedrooms: l.beds,
    ...(sqft !== null ? { floorSize: { "@type": "QuantitativeValue", value: sqft, unitCode: "FTK" } } : {}),
    ...base,
  };
};

export interface AFHInventoryRender {
  /** HTML to place inside #ssg-content, after the quick answer. */
  html: string;
  /** JSON-LD objects to emit as separate <script type="application/ld+json"> tags. */
  jsonLd: Record<string, unknown>[];
  /** Latest verification date across the shown listings, ISO. Null when empty. */
  dateModified: string | null;
  count: number;
}

export function renderAfhInventory(
  scope: AFHInventoryScope,
  route: string,
  pageName: string,
  pageDescription: string
): AFHInventoryRender {
  const listings = scopedListings(scope);
  const canonical = `${SITE_URL}${route}`;
  const verified = latestVerified(listings);

  const html: string[] = [];
  html.push(`<section style="margin:0 0 28px">`);
  html.push(`<h2 style="font-size:1.3rem;margin:0 0 8px">Currently available</h2>`);
  html.push(`<p style="font-size:1.05rem;line-height:1.7;color:#444;margin:0 0 6px">${esc(countSentence(listings, scope))}</p>`);
  if (verified) {
    html.push(
      `<p style="color:#666;font-size:0.9rem;margin:0 0 12px">Listings last verified ${formatVerifiedDate(verified)}. Sold, expired, and withdrawn listings are removed from this list.</p>`
    );
  }
  if (listings.length > 0) {
    html.push(summaryTable(listings));
    listings.forEach((l) => html.push(listingCard(l)));
    html.push(disclaimer(listings));
  }
  if (scope.city) {
    html.push(
      `<p style="margin-top:16px"><a href="/afh-club/listings" style="color:#1a365d">All adult family homes for sale in Washington</a></p>`
    );
  }
  html.push(`</section>`);

  const jsonLd: Record<string, unknown>[] = [];
  if (listings.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: pageName,
      description: pageDescription,
      url: canonical,
      numberOfItems: listings.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      ...(verified ? { dateModified: verified } : {}),
      publisher: { "@type": "Organization", name: "Real Property Planning", url: SITE_URL },
      itemListElement: listings.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: listingSchema(l, canonical),
      })),
    });
  }
  if (scope.city) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AFH Club", item: `${SITE_URL}/afh-club` },
        { "@type": "ListItem", position: 2, name: "Listings", item: `${SITE_URL}/afh-club/listings` },
        { "@type": "ListItem", position: 3, name: `For sale in ${scope.city}, WA`, item: canonical },
      ],
    });
  }

  return { html: html.join(""), jsonLd, dateModified: verified, count: listings.length };
}
