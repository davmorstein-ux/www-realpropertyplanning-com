/**
 * Compare two copies of the AFH alert feed and list the alerts to send.
 * Pure: no Deno or network APIs, so src/test/afhAlerts.test.ts can run it.
 * The feed itself, and the wording of every alert, come from
 * src/data/afhAlerts.ts at build time.
 */

export type AlertEvent = "new" | "price" | "pending" | "sold" | "back";

export interface FeedItem {
  key: string;
  path: string;
  status: string;
  priceKey: string;
  audience: string[];
  messages: Record<AlertEvent, { title: string; body: string }>;
}

export interface Alert {
  key: string;
  event: AlertEvent;
  title: string;
  body: string;
  path: string;
  audience: string[];
}

const LIVE = new Set(["active", "pending"]);

/** What changed for one listing, or null. A status change wins over a price change seen at the same time. */
export function eventFor(prev: Pick<FeedItem, "status" | "priceKey"> | undefined, next: FeedItem): AlertEvent | null {
  if (!prev) return LIVE.has(next.status) ? "new" : null; // a sold record added for the sold page is history, not news
  if (prev.status !== next.status) {
    if (next.status === "pending" && prev.status === "active") return "pending";
    if (next.status === "sold") return "sold";
    if (next.status === "active" && prev.status !== "active") return "back";
    return null; // expired or withdrawn: no alert
  }
  if (LIVE.has(next.status) && prev.priceKey !== next.priceKey) return "price";
  return null;
}

/** All alerts between two feeds. With no previous feed there is nothing to compare, so nothing is sent. */
export function diffFeeds(prev: FeedItem[] | null, next: FeedItem[]): Alert[] {
  if (!prev) return [];
  const before = new Map(prev.map((i) => [i.key, i]));
  const out: Alert[] = [];
  for (const item of next) {
    const event = eventFor(before.get(item.key), item);
    if (!event) continue;
    const m = item.messages[event];
    out.push({ key: item.key, event, title: m.title, body: m.body, path: item.path, audience: item.audience });
  }
  return out;
}

/**
 * More changes than this in one publish is a data import or a correction
 * sweep, not market news. push-check records the new state and sends nothing,
 * rather than buzzing every phone a dozen times.
 */
export const MAX_ALERTS_PER_RUN = 12;

/** Scope tokens a subscription may hold. Mirrors VALID_SCOPES in src/data/afhAlerts.ts in shape. */
export const SCOPE_PATTERN = /^(statewide|(city|near):[a-z0-9-]{2,40})$/;
