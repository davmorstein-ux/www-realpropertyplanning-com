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
  listingSlug,
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

/** Card anchor on list pages. */
export const listingAnchor = (l: AFHListing) => `listing-${listingSlug(l)}`;

/** Permanent page for a listing. */
export const listingRoute = (l: AFHListing) => `/afh-club/listings/${listingSlug(l)}`;

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
  p.push(
    `<h3 style="font-size:1.15rem;line-height:1.3;margin:0 0 6px"><a href="${listingRoute(l)}" style="color:#1a365d">${esc(listingHeading(l))}</a></h3>`
  );
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

export const listingSchema = (l: AFHListing, canonical: string): Record<string, unknown> => {
  const price = l.marketStatus === "sold" && l.soldPrice ? Number(l.soldPrice.replace(/[^0-9.]/g, "")) : priceNumber(l);
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
      l.marketStatus === "active"
        ? "https://schema.org/InStock"
        : l.marketStatus === "pending"
          ? "https://schema.org/LimitedAvailability"
          : l.marketStatus === "sold"
            ? "https://schema.org/SoldOut"
            : "https://schema.org/Discontinued",
    businessFunction:
      l.listingType === "lease" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
    seller: { "@type": "RealEstateAgent", name: l.broker ? `${l.broker}, ${l.brokerage}` : l.brokerage },
    ...(l.sourceUrl ? { url: l.sourceUrl } : {}),
  };
  const base = {
    name: listingHeading(l),
    description: afhClassification(l),
    identifier: { "@type": "PropertyValue", propertyID: AFH_SOURCE_LABELS[l.source], value: l.mlsNum },
    url: `${SITE_URL}${listingRoute(l)}`,
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

/* ------------------------------------------------------------------ */
/* Permanent per-listing pages: /afh-club/listings/<city>-<source>-<#>  */
/* ------------------------------------------------------------------ */

export interface AFHListingRoute {
  route: string;
  title: string;
  description: string;
  body: string;
  /** ISO date for sitemap lastmod — the listing's lastVerified. */
  lastmod: string;
}

const STATUS_HEADLINE: Record<AFHListing["marketStatus"], string> = {
  active: "for sale",
  pending: "pending sale",
  sold: "sold",
  expired: "no longer listed",
  withdrawn: "no longer listed",
};

const typeNoun = (l: AFHListing) =>
  l.listingType === "business" ? "Adult family home business" : l.listingType === "lease" ? "Adult family home for lease" : "Adult family home";

/** Plain-language explanation of what a buyer is (and is not) getting. Mirrors AFH_STATUS_LABELS semantics. */
export const whatIsBeingSold = (l: AFHListing): string => {
  if (l.listingType === "lease") {
    return "This is a lease, not a sale. The lessee rents the house to operate an adult family home in it and holds their own DSHS license; the owner keeps the real estate. Check whether the home is currently licensed or only AFH-ready, and what the lease says about licensing, residents, and the operator's exit.";
  }
  if (l.listingType === "business") {
    return "This is the operating business, not the house. What conveys is the license history, the residents and their contracts, staff, and the goodwill of an established home. The buyer must qualify for their own DSHS license through the Change of Ownership process; the DSHS license itself never transfers. The real estate is leased or listed separately — confirm the terms before valuing the business.";
  }
  const base: Record<AFHListing["afhStatus"], string> = {
    operating:
      "The house is currently licensed by DSHS and caring for residents. The buyer must qualify for their own license through the Change of Ownership process — the seller's license does not transfer with the deed.",
    licensedNotOperating:
      "The house holds a current DSHS license but has no residents. A buyer relicenses through Change of Ownership and then rebuilds the census from zero; there is no operating income to underwrite.",
    former:
      "The house was licensed as an adult family home in the past but is not licensed today. A buyer starts the licensing process fresh, and any code or inspection work that has aged out may need to be redone.",
    afhReady:
      "The house has passed the WABO (building code) inspection required for an adult family home but has never been licensed. It is a house built or converted to AFH standards, not an operating care business.",
    opportunity:
      "The house is being marketed for potential adult family home use. No WABO inspection or licensing is claimed; the buyer is responsible for the entire conversion and licensing process.",
  };
  const business: Record<AFHListing["businessIncluded"], string> = {
    yes: " The operating business is included with the real estate in this listing.",
    no: " The operating business is not included — only the real estate is being sold.",
    separate: ` The operating business is listed separately (${l.linkedMls ? `MLS #${l.linkedMls}` : "see the listing broker"}), so buying the house alone does not buy the residents or contracts.`,
    unknown: " Whether the operating business is included is not stated in the listing; confirm with the listing broker.",
  };
  return base[l.afhStatus] + (l.afhStatus === "operating" || l.afhStatus === "licensedNotOperating" ? business[l.businessIncluded] : "");
};

export const availabilityAnswer = (l: AFHListing): string => {
  const verified = formatVerifiedDate(l.lastVerified);
  switch (l.marketStatus) {
    case "active":
      return `Yes. As of ${verified} this listing was active at ${l.price}.`;
    case "pending":
      return `Not currently. As of ${verified} this listing was pending sale${l.statusChanged ? ` (pending since ${formatVerifiedDate(l.statusChanged)})` : ""}. Pending sales can fall through, so it may return to the market.`;
    case "sold":
      return `No. This listing sold${l.soldDate ? ` on ${formatVerifiedDate(l.soldDate)}` : ""}${l.soldPrice ? ` for ${l.soldPrice}` : ""}. It was last listed at ${l.price}. The page is kept as a record of the sale.`;
    case "expired":
      return `No. This listing expired${l.statusChanged ? ` on ${formatVerifiedDate(l.statusChanged)}` : ""} without selling and is no longer available. It was last listed at ${l.price}.`;
    case "withdrawn":
      return `No. This listing was withdrawn from the market${l.statusChanged ? ` on ${formatVerifiedDate(l.statusChanged)}` : ""}. It was last listed at ${l.price}.`;
  }
};

export function buildAfhListingRoutes(cityRoutes: Record<string, string>): AFHListingRoute[] {
  return afhListings.map((l) => {
    const route = listingRoute(l);
    const canonical = `${SITE_URL}${route}`;
    const heading = listingHeading(l);
    const title = `${typeNoun(l)} ${STATUS_HEADLINE[l.marketStatus]}: ${heading} | AFH Club`;
    const description = `${heading} — ${afhClassification(l)}, ${l.beds} bedrooms, ${l.sqft} sq ft, ${l.marketStatus === "sold" && l.soldPrice ? `sold for ${l.soldPrice}` : `listed at ${l.price}`}. ${AFH_SOURCE_LABELS[l.source]} #${l.mlsNum}. Status ${AFH_MARKET_STATUS_LABELS[l.marketStatus].toLowerCase()}, verified ${formatVerifiedDate(l.lastVerified)}.`;
    const cityRoute = cityRoutes[l.city.toLowerCase()];
    const typeRoute = `/afh-club/listings/${AFH_TYPE_LABELS[l.listingType].slug}`;

    const rows: Array<[string, string]> = [
      ["Status", AFH_MARKET_STATUS_LABELS[l.marketStatus]],
      [l.marketStatus === "sold" ? "Last list price" : l.priceLabel || (l.listingType === "business" ? "Business asking price" : "Asking price"), l.price],
      ...(l.soldPrice ? ([["Sold price", l.soldPrice]] as Array<[string, string]>) : []),
      ["AFH classification", afhClassification(l)],
      ["Bedrooms", String(l.beds)],
      ["Bathrooms", `${l.bathDisplay} (${l.bathDetail})`],
      ["Size", `${l.sqft} square feet`],
      ["Location", `${l.city}, ${l.state}`],
      [`${AFH_SOURCE_LABELS[l.source]} number`, l.mlsNum],
      ...(l.linkedMls ? ([[`${l.listingType === "business" ? "Real estate" : "Business"} listed separately`, `MLS #${l.linkedMls}`]] as Array<[string, string]>) : []),
      ["Listed by", l.broker ? `${l.broker}, ${l.brokerage}` : l.brokerage],
      ...(l.listedDate ? ([["Date listed", formatVerifiedDate(l.listedDate)]] as Array<[string, string]>) : []),
      ...(l.statusChanged ? ([["Status changed", formatVerifiedDate(l.statusChanged)]] as Array<[string, string]>) : []),
      ...(l.soldDate ? ([["Closed", formatVerifiedDate(l.soldDate)]] as Array<[string, string]>) : []),
      ["Last verified", formatVerifiedDate(l.lastVerified)],
    ];

    const b: string[] = [];
    b.push(`<div id="ssg-content" style="font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:40px 20px">`);
    b.push(
      `<p style="font-size:0.9rem;color:#666;margin:0 0 12px"><a href="/afh-club" style="color:#1a365d">AFH Club</a> › <a href="/afh-club/listings" style="color:#1a365d">Listings</a>${
        cityRoute ? ` › <a href="${cityRoute}" style="color:#1a365d">${esc(l.city)}</a>` : ""
      } › ${esc(sourceRef(l))}</p>`
    );
    b.push(`<h1 style="font-size:2rem;line-height:1.2;margin-bottom:8px">${esc(typeNoun(l))} ${STATUS_HEADLINE[l.marketStatus]}: ${esc(heading)}</h1>`);
    b.push(
      `<p style="margin:0 0 16px;font-size:1.1rem"><strong style="color:${l.marketStatus === "active" ? "#0a5648" : l.marketStatus === "pending" ? "#a8892f" : "#8a2a2a"}">${AFH_MARKET_STATUS_LABELS[l.marketStatus]}</strong> · ${esc(l.soldPrice && l.marketStatus === "sold" ? `Sold ${l.soldPrice}` : l.price)} · ${esc(afhClassification(l))}</p>`
    );
    b.push(`<div style="margin-bottom:24px;padding:20px;border:1px solid #e5e5e5;border-radius:12px;background:#fafafa">`);
    b.push(`<p style="font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#a8892f;margin:0 0 8px 0">Quick Answer</p>`);
    b.push(`<h2 style="font-size:1.25rem;line-height:1.3;margin:0 0 8px 0">Is this ${esc(typeNoun(l).toLowerCase())} still available?</h2>`);
    b.push(`<p style="font-size:1.05rem;line-height:1.7;color:#444;margin:0">${esc(availabilityAnswer(l))}</p>`);
    b.push(`</div>`);
    if (l.photo) {
      b.push(`<img src="${esc(l.photo)}" alt="${esc(heading)}" loading="lazy" style="max-width:100%;height:auto;border-radius:12px;margin:0 0 20px">`);
    }
    b.push(`<h2 style="font-size:1.3rem;margin:0 0 8px">Listing details</h2>`);
    b.push(
      `<table style="width:100%;border-collapse:collapse;margin:0 0 24px"><tbody>` +
        rows.map(([k, v]) => `<tr><th scope="row" style="text-align:left;padding:8px 10px;border-bottom:1px solid #eee;width:40%;font-size:0.95rem">${esc(k)}</th><td style="padding:8px 10px;border-bottom:1px solid #eee;font-size:0.95rem">${esc(v)}</td></tr>`).join("") +
        `</tbody></table>`
    );
    if (l.businessNotes) b.push(`<p style="color:#444;line-height:1.6;margin:0 0 24px">${esc(l.businessNotes)}</p>`);
    b.push(`<h2 style="font-size:1.3rem;margin:0 0 8px">What is — and is not — being sold</h2>`);
    b.push(`<p style="color:#444;line-height:1.7;margin:0 0 24px">${esc(whatIsBeingSold(l))}</p>`);
    if (l.source !== "nwmls" && l.sourceUrl) {
      b.push(`<p style="margin:0 0 24px"><a href="${esc(l.sourceUrl)}" rel="nofollow noopener" style="color:#1a365d">View the original listing at ${AFH_SOURCE_LABELS[l.source]}</a></p>`);
    }
    b.push(`<h2 style="font-size:1.3rem;margin:0 0 8px">Seen a change?</h2>`);
    b.push(
      `<p style="color:#444;line-height:1.7;margin:0 0 24px">If this listing has sold, changed price, or come off the market, <a href="mailto:info@realpropertyplanning.com?subject=${encodeURIComponent(`AFH listing status change — ${sourceRef(l)}`)}" style="color:#1a365d">report the change</a> and it will be verified against the source and updated.</p>`
    );
    b.push(`<p style="margin:0 0 8px"><a href="${typeRoute}" style="color:#1a365d">All ${esc(AFH_TYPE_LABELS[l.listingType].plural.toLowerCase())} in Washington</a></p>`);
    if (cityRoute) b.push(`<p style="margin:0 0 8px"><a href="${cityRoute}" style="color:#1a365d">Adult family homes for sale in ${esc(l.city)}, WA</a></p>`);
    b.push(`<p style="margin:0 0 24px"><a href="/afh-club/listings" style="color:#1a365d">All adult family home listings in Washington</a></p>`);
    b.push(disclaimer([l]));
    b.push(
      jsonLdTagLocal({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: canonical,
        dateModified: l.lastVerified,
        publisher: { "@type": "Organization", name: "Real Property Planning", url: SITE_URL },
        mainEntity: listingSchema(l, canonical),
      })
    );
    b.push(
      jsonLdTagLocal({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "AFH Club", item: `${SITE_URL}/afh-club` },
          { "@type": "ListItem", position: 2, name: "Listings", item: `${SITE_URL}/afh-club/listings` },
          ...(cityRoute ? [{ "@type": "ListItem", position: 3, name: `For sale in ${l.city}, WA`, item: `${SITE_URL}${cityRoute}` }] : []),
          { "@type": "ListItem", position: cityRoute ? 4 : 3, name: heading, item: canonical },
        ],
      })
    );
    b.push(`</div>`);
    return { route, title, description, body: b.join(""), lastmod: l.lastVerified };
  });
}

const jsonLdTagLocal = (obj: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
