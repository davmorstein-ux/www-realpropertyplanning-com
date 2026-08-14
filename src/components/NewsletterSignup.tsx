
import { useId, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

/**
 * Newsletter signup.
 *
 * Posts to the newsletter-subscribe edge function, which holds the MailerLite
 * key server-side and pins the group. Nothing secret reaches the browser.
 *
 * DELIBERATELY NOT A VENDOR EMBED. MailerLite's snippet ships its own fonts
 * and palette, ignores the cream/burgundy system, and does not meet the 44px
 * tap target and real-<label> standards held everywhere else on this site.
 *
 * WHAT THIS DOES NOT DO, ON PURPOSE:
 *   - It does not send. Sending, unsubscribe links, suppression lists and the
 *     CAN-SPAM postal footer are MailerLite's job.
 *   - No popup, slide-in, or timed overlay variant exists, and none should be
 *     added. An unbidden overlay needs a focus trap, an Escape handler and a
 *     generous close target to be usable by readers with tremor or screen
 *     readers; done imperfectly it traps someone mid-research on a page about
 *     their parent's care.
 *   - It never reports whether an address is already subscribed. The edge
 *     function returns the same response either way; surfacing the difference
 *     would turn this into an email enumeration oracle.
 */

const TURNSTILE_SITE_KEY = "0x4AAAAAAD8Pv43WG0GFRJob";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

/* ------------------------------------------------------------------ *
 * COPY — every variant lives here, not in the pages.
 *
 * Page-side copy is how the hero bands drifted: eighty-five hand-rolled
 * versions of one thing. A page picks a variant; it does not write one.
 *
 * Frequency language stays vague on the LOW side ("occasional") on purpose.
 * "Monthly" is a promise, and a missed month reads as abandonment.
 * ------------------------------------------------------------------ */
type Variant = "general" | "probate" | "senior" | "footer";

const COPY: Record<Variant, { heading: string; body: string; cta: string }> = {
  general: {
    heading: "Stay informed, without the noise",
    body: "Occasional practical notes for Washington families facing property, estate, probate, and senior-transition decisions.",
    cta: "Subscribe",
  },
  probate: {
    heading: "Planning an estate property sale?",
    body: "Occasional Washington-focused guidance on probate, inherited homes, preparation, timing, and family decision-making.",
    cta: "Get Probate Property Updates",
  },
  senior: {
    heading: "Clear guidance for the next move",
    body: "Occasional resources on downsizing, senior living decisions, relocation planning, and preparing a longtime home for sale.",
    cta: "Send Me Senior Transition Resources",
  },
  footer: {
    heading: "Practical guidance for the decisions ahead",
    body: "Occasional, plain-English updates. No sales pressure.",
    cta: "Subscribe",
  },
};

interface NewsletterSignupProps {
  variant?: Variant;
  /* Overrides the auto-generated source tag. Use when two forms share a page
     and you need to tell them apart in MailerLite. */
  source?: string;
}

/* The edge function holds the MailerLite key and pins the group; this only
   ever sends an address, a source tag, and the anti-bot signals. */
async function subscribeRequest(payload: {
  email: string;
  source: string;
  company_website: string;
  form_loaded_at: number;
  turnstile_token: string;
}): Promise<void> {
  const { error } = await supabase.functions.invoke("newsletter-subscribe", { body: payload });
  if (error) throw error;
}

const NewsletterSignup = ({ variant = "general", source }: NewsletterSignupProps) => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  /* Honeypot. Real visitors never see this; bots that fill every input trip
     it. Named company_website because that is plausible enough to be filled. */
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  /* Turnstile loads ON FIRST INTERACTION, not on mount. This component sits in
     the footer of roughly 300 pages; loading Cloudflare's script eagerly would
     mean a third-party request on every pageview for a form most visitors
     never touch. Contact.tsx loads it eagerly because it lives on one page —
     the difference is deliberate, not an inconsistency. */
  const [wantsTurnstile, setWantsTurnstile] = useState(false);

  const formLoadedAt = useRef<number>(Date.now());
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  /* useId, not a hand-rolled counter: the footer and article forms co-exist on
     the same page, and duplicate ids would point both labels at whichever
     input mounted first, silently breaking the second for screen reader and
     click-the-label users. */
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hpId = `${inputId}-hp`;
  const copy = COPY[variant];
  const tag = source || `${variant}:${pathname}`;

  useEffect(() => {
    if (!wantsTurnstile) return;
    let cancelled = false;

    const renderWidget = () => {
      if (cancelled) return;
      if (!window.turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) return;
      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    /* Polling rather than the script's load event. That event fires exactly
       once ever, so if the script already exists from an earlier page in the
       same session, a freshly attached listener never fires and the widget
       silently never renders. Same reasoning as Contact.tsx. */
    const poll = setInterval(() => {
      if (window.turnstile) {
        clearInterval(poll);
        renderWidget();
      }
    }, 200);
    const giveUp = setTimeout(() => clearInterval(poll), 15000);

    return () => {
      cancelled = true;
      clearInterval(poll);
      clearTimeout(giveUp);
    };
  }, [wantsTurnstile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    /* Deliberately permissive. Aggressive client-side email regexes reject
       valid addresses (long TLDs, plus-addressing, apostrophes) and the person
       rejected has no way to argue. MailerLite validates properly, and double
       opt-in catches anything that gets through. */
    if (!trimmed || !trimmed.includes("@") || trimmed.length < 5) {
      setError("Please enter an email address so we know where to send it.");
      setStatus("error");
      return;
    }

    if (!turnstileToken) {
      setError("Please wait a moment for the security check to finish, then try again.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      await subscribeRequest({
        email: trimmed,
        source: tag,
        company_website: companyWebsite,
        form_loaded_at: formLoadedAt.current,
        turnstile_token: turnstileToken,
      });
      setStatus("done");
      setEmail("");
    } catch {
      /* Never surface the raw error — meaningless to the reader, and it can
         leak provider detail. */
      setError("Something went wrong on our end. Please try again in a moment.");
      setStatus("error");
    }
  };

  return (
    <div className="rpp-news">
      <style>{`
        /* Doubled class selectors. index.css sets font-size, color and display
           on bare p / input / button / label with !important; a single class
           loses every one of those fights. */
        .rpp-news.rpp-news {
          background: #f7f4ef;
          border: 1px solid #dfc9cb;
          border-left: 4px solid hsl(355 45% 30%);
          border-radius: 8px;
          padding: 28px 24px;
          margin: 40px auto;
          max-width: 640px;
        }
        .rpp-news-heading.rpp-news-heading {
          font-family: "Source Serif 4", Georgia, serif !important;
          font-size: 24px !important;
          font-weight: 600 !important;
          line-height: 1.25 !important;
          color: #272421 !important;
          margin: 0 0 10px !important;
        }
        .rpp-news-body.rpp-news-body {
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 17px !important;
          line-height: 1.55 !important;
          color: #4a443e !important;
          margin: 0 0 18px !important;
        }
        /* A real, visible label. Placeholder-as-label disappears the moment
           someone types, which is exactly when a person who reads slowly needs
           it most, and several screen readers do not announce it at all. */
        .rpp-news-label.rpp-news-label {
          display: block !important;
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          color: #272421 !important;
          margin: 0 0 6px !important;
        }
        .rpp-news-row { display: flex; flex-wrap: wrap; gap: 10px; }
        .rpp-news-input.rpp-news-input {
          flex: 1 1 260px;
          min-height: 48px;
          padding: 12px 14px !important;
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 17px !important;
          color: #272421 !important;
          background: #ffffff !important;
          border: 1px solid #c9beb4 !important;
          border-radius: 6px !important;
        }
        .rpp-news-input.rpp-news-input:focus-visible {
          outline: 3px solid hsl(355 45% 30%) !important;
          outline-offset: 2px !important;
        }
        /* Named "submit", NOT "btn". index.css carries 45 rules keyed on
           main button[class*="btn"] and [class*="cta"] — including one that
           injects an ::after arrow and widens it from 13px to 23px on hover,
           and another that runs an animated marching-ants border.

           Together those made this button flicker: hover widened the element
           by 10px, its right edge moved out from under the cursor, hover
           dropped, the button shrank back, hover returned — a loop running as
           fast as the pointer could keep up.

           Any class containing "btn" or "cta" inside <main> inherits that
           behaviour. Do not rename this back. */
        .rpp-news-submit.rpp-news-submit {
          min-height: 48px;
          padding: 12px 22px !important;
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          background: hsl(355 45% 30%) !important;
          border: none !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          transition: background 200ms ease;
        }
        .rpp-news-submit.rpp-news-submit:hover { background: hsl(355 50% 24%) !important; }
        .rpp-news-submit.rpp-news-submit:focus-visible {
          outline: 3px solid #272421 !important;
          outline-offset: 3px !important;
        }
        .rpp-news-submit.rpp-news-submit:disabled { opacity: 0.65; cursor: default !important; }
        .rpp-news-fine.rpp-news-fine {
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 14px !important;
          color: #6b635b !important;
          margin: 12px 0 0 !important;
        }
        .rpp-news-fine.rpp-news-fine a { color: hsl(355 45% 30%) !important; }
        /* Error text is not carried by colour alone — it is announced via
           role=alert and tied to the input with aria-describedby, so it
           survives both colour blindness and screen readers. */
        .rpp-news-error.rpp-news-error {
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          color: #8a1f1f !important;
          margin: 10px 0 0 !important;
        }
        .rpp-news-done.rpp-news-done {
          font-family: "DM Sans", system-ui, sans-serif !important;
          font-size: 17px !important;
          line-height: 1.55 !important;
          color: #272421 !important;
          margin: 0 !important;
        }
        /* Off-screen rather than display:none — a bot reading the DOM sees a
           normal field, while aria-hidden and tabIndex -1 keep it away from
           sighted, keyboard and screen-reader users. */
        .rpp-news-hp {
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
        }
        .rpp-news-turnstile { margin-top: 14px; }
        @media (prefers-reduced-motion: reduce) {
          .rpp-news-submit.rpp-news-submit { transition: none !important; }
        }
      `}</style>

      {status === "done" ? (
        /* role="status" announces without stealing focus. The confirmation
           step is stated plainly — otherwise someone who never clicks the
           confirmation link believes they subscribed. */
        <p className="rpp-news-done" role="status">
          <strong>Please check your email.</strong> We have sent a message asking you to
          confirm your address — we will not add you to the list until you do. If it does
          not arrive within a few minutes, it may be in your spam folder.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="rpp-news-heading">{copy.heading}</p>
          <p className="rpp-news-body">{copy.body}</p>

          <label className="rpp-news-label" htmlFor={inputId}>
            Email address
          </label>
          <div className="rpp-news-row">
            <input
              id={inputId}
              className="rpp-news-input"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              /* Not a substitute for the label above — a format hint only. */
              placeholder="you@example.com"
              aria-describedby={status === "error" ? errorId : undefined}
              aria-invalid={status === "error" || undefined}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setWantsTurnstile(true)}
              disabled={status === "sending"}
            />
            <button className="rpp-news-submit" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : copy.cta}
            </button>
          </div>

          {/* Honeypot. aria-hidden and tabIndex -1 keep it away from screen
              readers and keyboard users; only a script filling every field
              will touch it. */}
          <div className="rpp-news-hp" aria-hidden="true">
            <label htmlFor={hpId}>Company website</label>
            <input
              id={hpId}
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
          </div>

          {wantsTurnstile && <div className="rpp-news-turnstile" ref={turnstileContainerRef} />}

          {status === "error" && (
            <p className="rpp-news-error" id={errorId} role="alert">
              {error}
            </p>
          )}

          {/* This claim is only true because /privacy exists and says so. */}
          <p className="rpp-news-fine">
            We will not sell or share your information. Unsubscribe at any time.{" "}
            <a href="/privacy">Privacy policy</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
