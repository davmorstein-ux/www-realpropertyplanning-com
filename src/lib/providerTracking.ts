/**
 * Provider referral tracking.
 *
 * Fires a GA4 custom event when a visitor acts on a featured professional's
 * listing — taps a phone number, clicks an email, or follows a website link.
 *
 * WHY THIS EXISTS
 * GA4 enhanced measurement already records outbound clicks automatically, so
 * clicks to a provider's website are captured without any code. It does NOT
 * capture `tel:` or `mailto:` clicks, because those never navigate to another
 * page. On a site whose readership skews elderly, a phone tap is the likeliest
 * referral action of all — so without this helper the strongest signal is the
 * one missing from the report.
 *
 * WHAT IS COLLECTED
 * Provider name, company, the kind of contact (phone / email / website), and
 * the page it happened on. No visitor identity, no phone number typed, no
 * message content. Nothing here identifies the person clicking, only which
 * listing was acted on. Anything beyond that does not belong in this event and
 * should not be added — see src/pages/Privacy.tsx, which documents this.
 *
 * WHAT THE NUMBERS MEAN — read before reporting them to a professional.
 * These are CLICKS, not clients. A phone tap means someone opened a dialler;
 * it does not mean they called, spoke to anyone, or engaged the professional.
 * Report them as "clicks to your listing" and the figures stay defensible. A
 * number described as "referrals" that the professional cannot reconcile with
 * their own intake does more harm than reporting nothing.
 *
 * FAILS SILENTLY BY DESIGN
 * If gtag is absent — blocked by an ad blocker, or a preview build without the
 * tag — this does nothing and the click proceeds normally. Tracking must never
 * be able to stop someone reaching a professional.
 */

type ContactKind = "phone" | "email" | "website";

interface ProviderClickArgs {
  /** Provider's display name, e.g. "Nicole Guzman Johnson". */
  provider: string;
  /** Firm or company, e.g. "Books on The Rock, LLC". */
  company?: string;
  kind: ContactKind;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackProviderClick = ({ provider, company, kind }: ProviderClickArgs): void => {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "provider_contact_click", {
      provider_name: provider,
      provider_company: company ?? "",
      contact_kind: kind,
      page_path: window.location.pathname,
    });
  } catch {
    /* Never let a reporting failure interrupt a click. */
  }
};

/**
 * Appends referral UTM parameters to a provider's outbound website URL.
 *
 * The point is verification rather than measurement: once these are attached,
 * the professional sees realpropertyplanning.com as a referral source in their
 * OWN analytics. A number they confirmed themselves carries far more weight
 * than one handed to them in an email.
 *
 * Returns the URL untouched if it is relative, already carries a utm_source, or
 * cannot be parsed — so it is safe to wrap every link with it.
 */
export const withReferralParams = (url: string): string => {
  try {
    if (!url || !/^https?:\/\//i.test(url)) return url;
    const u = new URL(url);
    if (u.searchParams.has("utm_source")) return url;
    u.searchParams.set("utm_source", "realpropertyplanning.com");
    u.searchParams.set("utm_medium", "referral");
    u.searchParams.set("utm_campaign", "featured-professional");
    return u.toString();
  } catch {
    return url;
  }
};
