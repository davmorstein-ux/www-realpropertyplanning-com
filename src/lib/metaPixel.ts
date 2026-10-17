/**
 * Meta (Facebook) Pixel — ad landing pages ONLY (Oct 17, 2026).
 *
 * WHY IT IS NOT SITEWIDE. This site has pages on hospice, dementia, memory care
 * and nursing homes. A sitewide pixel would tell Meta which of those pages each
 * Facebook user read. Washington's My Health My Data Act treats that kind of
 * sharing as consumer health data needing consent, and Meta itself restricts
 * advertisers it classifies as health-related. So the pixel loads only on the
 * pages listed in PIXEL_PAGES (ad landing pages with no health content), and:
 *
 *   - fbq.disablePushState: once loaded, the pixel would otherwise send a
 *     PageView for every later in-app navigation (this is a single-page app),
 *     including a hospice guide the visitor clicks to next. Turned off.
 *   - autoConfig false: stops the pixel from reading button text and form
 *     fields on its own ("automatic events" and automatic advanced matching,
 *     which can hash and send a typed email address). Turned off.
 *   - No advanced matching, no custom data on events: Meta receives "a
 *     PageView" and "a Lead" with the page URL, nothing typed or chosen.
 *   - Global Privacy Control: if the browser sends it, the pixel never loads.
 *
 * META_PIXEL_ID is empty until the owner creates the pixel in Meta Events
 * Manager. While it is empty nothing loads and nothing is sent.
 *
 * Disclosed on src/pages/Privacy.tsx. Change both together.
 */

/** Paste the Pixel ID from Meta Events Manager here (digits only). */
export const META_PIXEL_ID = "";

/** The only pages the pixel may load on. Ad landing pages with no health content. */
export const PIXEL_PAGES = new Set<string>(["/family-home-planning"]);

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
  disablePushState?: boolean;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

let started = false;

const pathNow = () => window.location.pathname.replace(/\/+$/, "") || "/";

/** True once the pixel has been started on this visit. */
export const metaPixelActive = (): boolean => started;

/**
 * Load the pixel and send one PageView. Call from a landing page's useEffect.
 * Does nothing without an ID, off the allowed pages, or under Global Privacy Control.
 */
export const loadMetaPixel = (): void => {
  try {
    if (started || typeof window === "undefined") return;
    if (!/^\d{6,20}$/.test(META_PIXEL_ID)) return;
    if (!PIXEL_PAGES.has(pathNow())) return;
    if (navigator.globalPrivacyControl === true) return;

    /* Meta's standard loader, written out so it can be read. */
    const fbq: Fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    fbq.disablePushState = true;
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);

    fbq("set", "autoConfig", false, META_PIXEL_ID);
    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");
    started = true;
  } catch {
    /* tracking must never interfere with the page */
  }
};

/**
 * A completed newsletter / checklist signup. Sent only if the pixel was started
 * on this visit (that is, on a landing page). No email, no answers, no source tag.
 */
export const trackMetaLead = (): void => {
  try {
    if (!started || typeof window.fbq !== "function") return;
    window.fbq("track", "Lead");
  } catch {
    /* never interrupt the visitor */
  }
};

/** Test hook. */
export const __resetMetaPixelForTests = (): void => {
  started = false;
};
