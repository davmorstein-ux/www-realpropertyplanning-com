import { useEffect, useRef, useState } from "react";

/**
 * Cloudflare Turnstile widget for a form (Oct 5, 2026). Same loading approach
 * as src/pages/Contact.tsx: add the script once, poll until it is ready
 * (its one-time "load" event may already have fired on an earlier page), then
 * render into the returned ref. The send-contact-email function rejects any
 * submission without a valid token.
 *
 *   const ts = useTurnstile();
 *   <div ref={ts.ref} />            // the widget
 *   disabled={!ts.token}            // the submit button
 *   ts.reset() after each send      // tokens are single use
 */
export const TURNSTILE_SITE_KEY = "0x4AAAAAAD8Pv43WG0GFRJob";

export function useTurnstile() {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const [token, setToken] = useState("");

  useEffect(() => {
    let cancelled = false;
    const render = () => {
      if (!window.turnstile || !ref.current || widgetId.current) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (t) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };
    if (window.turnstile) {
      render();
    } else if (!document.querySelector('script[src*="turnstile"]')) {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    }
    const poll = window.setInterval(() => {
      if (cancelled) return;
      if (window.turnstile) {
        window.clearInterval(poll);
        render();
      }
    }, 150);
    const stop = window.setTimeout(() => window.clearInterval(poll), 20000);
    return () => {
      cancelled = true;
      window.clearInterval(poll);
      window.clearTimeout(stop);
      if (window.turnstile && widgetId.current) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* already gone */
        }
      }
      widgetId.current = undefined;
    };
  }, []);

  const reset = () => {
    setToken("");
    if (window.turnstile && widgetId.current) window.turnstile.reset(widgetId.current);
  };

  return { ref, token, reset };
}
