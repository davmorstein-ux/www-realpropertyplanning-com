/**
 * AFH LISTING PUSH ALERTS — the feed (owner's request, Oct 18, 2026).
 *
 * How the alerts work, end to end:
 *   1. At build time vite.config.ts calls buildAlertFeed() and writes the
 *      result to dist/afh-alert-feed.json. Because it is written by the
 *      build, the live file only changes when the site is PUBLISHED, so an
 *      alert can never point at a listing page that is not live yet.
 *   2. Every 15 minutes the Supabase function push-check fetches that file
 *      from the live site, compares it with the copy it saw last time, and
 *      sends a push alert to every subscriber whose area matches a change.
 *      The comparison lives in supabase/functions/push-check/diff.ts.
 *   3. Visitors subscribe from the sign-up box (src/components/AFHPushAlerts.tsx)
 *      through the push-subscribe function.
 *
 * Owner's decisions: alert on every kind of change (new listing, price change,
 * pending, sold, back on the market); a statewide option as well as city
 * choices; and a city choice may include its nearby cities.
 *
 * NWMLS: the feed is a public file, so it carries NO address, price, photo or
 * bed count — the same rule as src/lib/aiData.ts. The alert names the type of
 * listing and the city and links to the listing page, where the details and
 * the required attribution are shown. Price changes are detected from a short
 * fingerprint of the price, not the price itself. Do not add listing details
 * to the feed or the alert text without the owner first confirming with NWMLS
 * that it is permitted.
 *
 * Node-safe: no React, no "@/" imports (vite.config.ts imports it).
 */
import { afhListings, listingSlug, type AFHListing, type AFHListingType } from "./afhListings";
import { AFH_CITY_PAGES, cityPageByCity } from "./afhCityPages";

/** Bump if the feed's shape changes in a way push-check must notice. */
export const ALERT_FEED_VERSION = 1;

export type AlertEvent = "new" | "price" | "pending" | "sold" | "back";

export interface AlertMessage {
  title: string;
  body: string;
}

export interface AlertFeedItem {
  /** Stable key: the listing page slug. */
  key: string;
  /** Path of the listing's permanent page; the alert opens it. */
  path: string;
  status: AFHListing["marketStatus"];
  /** Fingerprint of the asking price. Changes when the price changes; reveals nothing else. */
  priceKey: string;
  /**
   * Which subscriptions hear about this listing. Tokens:
   *   "statewide"        every subscriber who chose all of Washington
   *   "city:<slug>"      subscribers to that city page only
   *   "near:<slug>"      subscribers to that city page who also chose nearby cities
   */
  audience: string[];
  /** Ready-written alert text for each kind of change. */
  messages: Record<AlertEvent, AlertMessage>;
}

export interface AlertFeed {
  version: number;
  generatedAt: string;
  items: AlertFeedItem[];
}

/** Short, stable, non-reversible-at-a-glance fingerprint (FNV-1a, 32-bit, hex). */
export function fingerprint(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

/** Audience tokens for a listing in this city. Cities without a city page reach statewide subscribers only. */
export function audienceFor(city: string): string[] {
  const tokens = ["statewide"];
  const page = cityPageByCity(city);
  if (!page) return tokens;
  tokens.push(`city:${page.slug}`, `near:${page.slug}`);
  for (const other of AFH_CITY_PAGES) {
    if (other.slug !== page.slug && other.nearby.includes(page.slug)) tokens.push(`near:${other.slug}`);
  }
  return tokens;
}

const NEW_TITLE: Record<AFHListingType, (city: string) => string> = {
  realEstate: (c) => `New adult family home for sale in ${c}`,
  business: (c) => `New AFH business for sale in ${c}`,
  lease: (c) => `New adult family home for lease in ${c}`,
};

/** Alert wording. Kept free of listing details (see the NWMLS note at the top). */
export function messagesFor(l: AFHListing): Record<AlertEvent, AlertMessage> {
  const c = l.city;
  return {
    new: { title: NEW_TITLE[l.listingType](c), body: "Just listed. Tap to see the details." },
    price: { title: `Price change on a ${c} AFH listing`, body: "The asking price has changed. Tap to see it." },
    pending: { title: `A ${c} AFH listing is now pending`, body: "A buyer is under contract. Tap for the listing." },
    sold: { title: `A ${c} AFH listing has sold`, body: "Tap to see the sale." },
    back: { title: `A ${c} AFH listing is back on the market`, body: "It is available again. Tap to see it." },
  };
}

export function buildAlertFeed(listings: AFHListing[] = afhListings, now: Date = new Date()): AlertFeed {
  return {
    version: ALERT_FEED_VERSION,
    generatedAt: now.toISOString(),
    items: listings.map((l) => {
      const key = listingSlug(l);
      return {
        key,
        path: `/afh-club/listings/${key}`,
        status: l.marketStatus,
        priceKey: fingerprint(l.price ?? ""),
        audience: audienceFor(l.city),
        messages: messagesFor(l),
      };
    }),
  };
}

/* ------------------------------------------------------------------ */
/* Subscription choices (shared by the sign-up box and its tests)      */
/* ------------------------------------------------------------------ */

/** The subscription scope tokens a sign-up stores. */
export function scopeFor(choice: { area: "statewide" } | { area: "city"; slug: string; nearby: boolean }): string {
  if (choice.area === "statewide") return "statewide";
  return `${choice.nearby ? "near" : "city"}:${choice.slug}`;
}

/** Every scope token push-subscribe accepts. Anything else is refused. */
export const VALID_SCOPES: string[] = [
  "statewide",
  ...AFH_CITY_PAGES.flatMap((c) => [`city:${c.slug}`, `near:${c.slug}`]),
];
