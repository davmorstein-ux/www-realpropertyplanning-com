
import { useId, useState, useEffect, useRef } from "react";
import { trackSignup } from "@/lib/siteTracking";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { CHECKLIST_PDF } from "@/data/myPlan";

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

// Window.turnstile is declared once in src/types/turnstile.d.ts.

/* ------------------------------------------------------------------ *
 * COPY — every variant lives here, not in the pages.
 *
 * Page-side copy is how the hero bands drifted: eighty-five hand-rolled
 * versions of one thing. A page picks a variant; it does not write one.
 *
 * Frequency language stays vague on the LOW side ("occasional") on purpose.
 * "Monthly" is a promise, and a missed month reads as abandonment.
 * ------------------------------------------------------------------ */
type Variant = "general" | "probate" | "senior" | "footer" | "afh" | "afhFooter";

/** Which MailerLite list a signup joins (Oct 16, 2026). The edge function maps this to a group from a fixed whitelist. */
export type NewsletterList = "family" | "afh";

/* Oct 25, 2026 (October audit, item 1): every family-side box now leads with
   the free 7-step checklist, a concrete reason to sign up today, and the AFH
   boxes lead with what actually arrives (listings, sold prices, DSHS changes).
   A family-list signup with variant copy hands over the checklist link on
   success (CHECKLIST_DONE below), so the promise in the heading is kept. */
const CHECKLIST_LINE = "the 7-step checklist for Washington families: who can sign, how the home is owned, and when to sell";

const COPY: Record<Variant, { heading: string; body: string; cta: string }> = {
  general: {
    heading: "Free: the family home planning checklist",
    body: `Get ${CHECKLIST_LINE}. You'll also get occasional plain-English notes on inherited homes, probate, senior moves and the cost of care. Unsubscribe any time.`,
    cta: "Send me the checklist",
  },
  probate: {
    heading: "Selling an inherited house? Start with the checklist",
    body: `Get ${CHECKLIST_LINE}. You'll also get occasional Washington notes on probate, inherited homes and timing a sale. Unsubscribe any time.`,
    cta: "Send me the checklist",
  },
  senior: {
    heading: "Helping a parent move? Start with the checklist",
    body: `Get ${CHECKLIST_LINE}. You'll also get occasional notes on downsizing, senior living decisions and preparing a longtime home for sale. Unsubscribe any time.`,
    cta: "Send me the checklist",
  },
  footer: {
    heading: "Free: the family home planning checklist",
    body: `Get ${CHECKLIST_LINE}, plus the occasional Real Property Planning newsletter. No sales pressure. Unsubscribe any time.`,
    cta: "Send me the checklist",
  },
  afh: {
    heading: "New AFH listings and DSHS changes, by email",
    body: "Adult family homes and AFH businesses as they come up for sale in Washington, recent sold prices, and DSHS rate and rule changes that affect owners and buyers. Occasional, never daily. Unsubscribe any time.",
    cta: "Subscribe to AFH Club",
  },
  afhFooter: {
    heading: "New AFH listings and DSHS changes, by email",
    body: "Adult family homes for sale, recent sold prices, and DSHS rate and rule changes. Occasional. Unsubscribe any time.",
    cta: "Subscribe",
  },
};

interface NewsletterSignupProps {
  variant?: Variant;
  /* Overrides the auto-generated source tag. Use when two forms share a page
     and you need to tell them apart in MailerLite. */
  source?: string;
  /* Overrides the variant copy for a specific use, e.g. a city listing alert.
     The signup still lands in the same MailerLite group; the source tag is
     what tells the alerts apart. */
  copy?: { heading: string; body: string; cta: string };
  /* Which list. Defaults to "afh" on any /afh-club page and "family" elsewhere,
     so the AFH city alerts and Market Report join the AFH list on their own. */
  list?: NewsletterList;
  /* Replaces the "please check your email" confirmation, e.g. to hand over a
     download the signup was for (/family-home-planning). Keep the
     confirm-your-address sentence in whatever replaces it. */
  doneMessage?: React.ReactNode;
  /* Hand over the checklist PDF on success. Defaults to on for family-list
     boxes using the built-in copy; pass true when custom copy promises it. */
  checklist?: boolean;
}

/* The edge function holds the MailerLite key and pins the group; this only
   ever sends an address, a source tag, and the anti-bot signals. */
async function subscribeRequest(payload: {
  email: string;
  source: string;
  list: NewsletterList;
  company_website: string;
  form_loaded_at: number;
  turnstile_token: string;
}): Promise<void> {
  const { error } = await supabase.functions.invoke("newsletter-subscribe", { body: payload });
  if (error) throw error;
}

const NewsletterSignup = ({ variant = "general", source, copy: copyOverride, list: listProp, doneMessage, checklist }: NewsletterSignupProps) => {
  const { pathname } = useLocation();
  const list: NewsletterList = listProp ?? (pathname.startsWith("/afh-club") ? "afh" : "family");
  /* Accent by list: navy for the family side, AFH Club hunter green. The old
     burgundy belonged to a retired colour scheme and is not used on the site. */
  const accent = list === "afh" ? "#0a5648" : "#1B3A6B";
  const accentHover = list === "afh" ? "#073f35" : "#132b50";
  const [email, setEmail] = useState("");
  /* Honeypot. Real visitors never see this; bots that fill every input trip
     it. Sent to the function under the key company_website; the DOM field
     name is deliberately meaningless so browser autofill cannot match it. */
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
  const copy = copyOverride ?? COPY[variant];
  /* Family-list boxes using the built-in copy promise the checklist, so they
     hand it over. Pages with their own copy decide for themselves (checklist prop). */
  const checklistDone = checklist ?? (list === "family" && !copyOverride);
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
      setError("Please enter an email address to receive it.");
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
        list,
        company_website: companyWebsite,
        form_loaded_at: formLoadedAt.current,
        turnstile_token: turnstileToken,
      });
      setStatus("done");
      setEmail("");
      trackSignup(tag);
    } catch {
      /* Never surface the raw error — meaningless to the reader, and it can
         leak provider detail. */
      setError("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  };

  return (
    <div className="rpp-news" style={{ ["--rpp-news-accent" as string]: accent, ["--rpp-news-accent-hover" as string]: accentHover } as React.CSSProperties}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Doubled class selectors. index.css sets font-size, color and display
           on bare p / input / button / label with !important; a single class
           loses every one of those fights. */
        .rpp-news.rpp-news {
          background: #f7f4ef;
          border: 1px solid #ddd6cc;
          border-left: 4px solid var(--rpp-news-accent);
          border-radius: 8px;
          padding: 28px 24px;
          margin: 40px auto;
          max-width: 640px;
        }
        .rpp-news-heading.rpp-news-heading {
          font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
          font-size: 24px !important;
          font-weight: 600 !important;
          line-height: 1.25 !important;
          color: #272421 !important;
          margin: 0 0 10px !important;
        }
        .rpp-news-body.rpp-news-body {
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
          font-size: 17px !important;
          line-height: 1.55 !important;
          color: #1c1917 !important;
          margin: 0 0 18px !important;
        }
        /* A real, visible label. Placeholder-as-label disappears the moment
           someone types, which is exactly when a person who reads slowly needs
           it most, and several screen readers do not announce it at all. */
        .rpp-news-label.rpp-news-label {
          display: block !important;
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
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
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
          font-size: 17px !important;
          color: #272421 !important;
          background: #ffffff !important;
          border: 1px solid #c9beb4 !important;
          border-radius: 6px !important;
        }
        .rpp-news-input.rpp-news-input:focus-visible {
          outline: 3px solid var(--rpp-news-accent) !important;
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
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          background: var(--rpp-news-accent) !important;
          border: none !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          transition: background 200ms ease;
        }
        .rpp-news-submit.rpp-news-submit:hover { background: var(--rpp-news-accent-hover) !important; }
        .rpp-news-submit.rpp-news-submit:focus-visible {
          outline: 3px solid #272421 !important;
          outline-offset: 3px !important;
        }
        .rpp-news-submit.rpp-news-submit:disabled { opacity: 0.65; cursor: default !important; }
        .rpp-news-fine.rpp-news-fine {
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
          font-size: 14px !important;
          color: #1c1917 !important;
          margin: 12px 0 0 !important;
        }
        .rpp-news-fine.rpp-news-fine a { color: var(--rpp-news-accent) !important; }
        /* Error text is not carried by colour alone — it is announced via
           role=alert and tied to the input with aria-describedby, so it
           survives both colour blindness and screen readers. */
        .rpp-news-error.rpp-news-error {
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          color: #8a1f1f !important;
          margin: 10px 0 0 !important;
        }
        .rpp-news-done.rpp-news-done {
          font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
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
      ` }} />

      {status === "done" && (doneMessage || checklistDone) ? (
        <div className="rpp-news-done" role="status">
          {doneMessage ?? (
            <>
              <p style={{ margin: "0 0 12px", fontWeight: 700 }}>Your checklist is ready.</p>
              <p style={{ margin: "0 0 12px" }}>
                <a href={CHECKLIST_PDF} target="_blank" rel="noopener" style={{ fontWeight: 700, color: accent, textDecoration: "underline" }}>
                  Download the 7-step checklist (PDF)
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <strong>One more step for the newsletter:</strong> a link to confirm your address is on its way to your inbox. Nothing else is sent until you click it.
              </p>
            </>
          )}
        </div>
      ) : status === "done" ? (
        /* role="status" announces without stealing focus. The confirmation
           step is stated plainly — otherwise someone who never clicks the
           confirmation link believes they subscribed. */
        <p className="rpp-news-done" role="status">
          <strong>Please check your email.</strong> A message has been sent asking you to
          confirm your address — you will not be added to the list until you do. If it does
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
              will touch it.

              The name is deliberately meaningless. It was "company_website"
              with a "Company website" label, on the reasoning that the name had
              to look plausible enough for a bot to fill. It did — and it looked
              equally plausible to Chrome, which matches autofill on field-name
              heuristics, treats "company" as a known field type, and ignores
              autocomplete="off" for autofill. On the contact form that same
              naming caused twelve days of real submissions to be discarded as
              spam before anyone noticed.

              Bots fill every field regardless of what it is called, so the trap
              still works. Humans now have nothing for autofill to match. Do not
              rename it to anything containing company, website, url, address,
              phone, name or email. */}
          <div className="rpp-news-hp" aria-hidden="true">
            <label htmlFor={hpId}>Leave this field blank</label>
            <input
              id={hpId}
              type="text"
              name="rpp_hp_field"
              tabIndex={-1}
              autoComplete="off"
              data-1p-ignore="true"
              data-lpignore="true"
              data-form-type="other"
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
            Your information is never sold or shared. Unsubscribe at any time.{" "}
            <a href="/privacy">Privacy policy</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
