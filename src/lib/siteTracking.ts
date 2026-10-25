/**
 * Site-wide conversion tracking (Oct 8, 2026 audit: "which pages produce business?").
 *
 * One click/input listener on the document, installed once from main.tsx, so the
 * 30-plus pages with phone and email links need no per-link code. Fires GA4 events:
 *
 *   contact_click        a tel: or mailto: link was tapped anywhere on the site.
 *                        contact_kind (phone | email), contact_target (featured
 *                        professional | site inbox | other), page_path.
 *                        Skipped for links marked data-provider-tracked, which
 *                        already send provider_contact_click (providerTracking.ts).
 *   contact_cta_click    a link to /contact was followed: page_path and the
 *                        ?reason= topic code. Shows intent even when the form is
 *                        never sent; generate_lead (leadTracking.ts) is the send.
 *   calculator_used      first real interaction (typing, choosing, pressing a
 *                        button) on a calculator page, once per calculator per
 *                        visit: calculator_path.
 *   ask_question         the "Ask a question" box: the question (trimmed, emails
 *                        and phone numbers removed), whether there was an answer,
 *                        the answer's page, and the page asked from.
 *   sign_up              newsletter or "notify me" signup confirmed: method
 *                        "newsletter" and the form's source tag (called from
 *                        NewsletterSignup.tsx via trackSignup). Also sends a
 *                        Meta Pixel "Lead" (no data) when the pixel is running,
 *                        which is only on ad landing pages (metaPixel.ts).
 *   planner_started      first answer on a planner page (/my-plan or
 *                        /family-home-planning), once per visit (Oct 25, 2026):
 *                        page_path only. Compared with planner_completed it
 *                        shows how many people start a plan and stop.
 *   planner_completed    every question on a planner page answered: page_path
 *                        only, never the answers. A saved plan reopened from its
 *                        link is not counted again (Oct 25, 2026).
 *   next_step_click      a link in a related-reading or professionals block
 *                        (Oct 20, 2026): block (next_questions | read_next |
 *                        journey_shortcuts | my_plan_invite | people_who_help |
 *                        care_cost_callout | remodel_callout),
 *                        link_path (the page it opens, or the site's host name
 *                        for an outside link) and page_path. Blocks are marked
 *                        with data-track-block.
 *   home_tile_click      one of the four homepage tiles under "What brings you
 *                        here today?" (Oct 20, 2026): tile (planAhead |
 *                        helpingParent | handlingEstate | needProfessional) and
 *                        tile_path. Marked with data-home-tile in RPPHomeV3.tsx.
 *
 * WHAT IS NEVER COLLECTED: the visitor's name, email, phone number, what they type
 * into a calculator, or contact-form message text. The one typed text collected is
 * a question asked in the Ask box (ask_question), trimmed, with emails and phone
 * numbers removed. Documented on src/pages/Privacy.tsx; keep the two in step.
 *
 * WHAT THE NUMBERS MEAN: a phone tap opened a dialler; it does not prove a call.
 * Report "phone taps", not "calls".
 *
 * Fails silently without gtag (ad blocker, preview build): tracking must never
 * interfere with a click or a form.
 */
import { FEATURED_APPRAISER, FEATURED_BROKER } from "@/data/featuredProfessionals";
import { AFH_CALCULATORS, FAMILY_CALCULATOR_HREFS } from "@/data/calculatorIndex";
import { trackMetaLead } from "@/lib/metaPixel";

const send = (name: string, params: Record<string, string>): void => {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", name, params);
  } catch {
    /* never interrupt the visitor */
  }
};

const digits = (s: string) => s.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
const FEATURED_PHONES = new Set([digits(FEATURED_BROKER.phone), digits(FEATURED_APPRAISER.phone)]);
const FEATURED_EMAILS = new Set([FEATURED_BROKER.email, FEATURED_APPRAISER.email].map((e) => e.toLowerCase()));
const SITE_INBOXES = new Set(["info@realpropertyplanning.com"]);

/** Who a tel:/mailto: link reaches, as a category. Never the number or address itself. */
export const contactTarget = (href: string): string => {
  const lower = href.toLowerCase();
  if (lower.startsWith("tel:")) return FEATURED_PHONES.has(digits(lower.slice(4))) ? "featured_professional" : "other";
  const addr = decodeURIComponent(lower.slice(7).split("?")[0]).trim();
  if (FEATURED_EMAILS.has(addr)) return "featured_professional";
  if (SITE_INBOXES.has(addr)) return "site_inbox";
  return "other";
};

const CALCULATOR_PATHS = new Set<string>([...AFH_CALCULATORS.map((c) => c.href), ...FAMILY_CALCULATOR_HREFS]);
const calculatorsUsed = new Set<string>();
const path = () => window.location.pathname.replace(/\/+$/, "") || "/";

const onCalculatorInteraction = (target: EventTarget | null) => {
  const p = path();
  if (!CALCULATOR_PATHS.has(p) || calculatorsUsed.has(p)) return;
  const el = target as Element | null;
  if (!el || typeof el.closest !== "function" || !el.closest("main")) return;
  calculatorsUsed.add(p);
  send("calculator_used", { calculator_path: p });
};

let installed = false;

export const initSiteTracking = (): void => {
  if (installed || typeof document === "undefined") return;
  installed = true;

  document.addEventListener(
    "click",
    (e) => {
      const t = e.target as Element | null;
      if (!t || typeof t.closest !== "function") return;
      const a = t.closest("a[href]") as HTMLAnchorElement | null;
      if (a) {
        const href = a.getAttribute("href") || "";
        if (/^(tel|mailto):/i.test(href)) {
          if (!a.closest("[data-provider-tracked]")) {
            send("contact_click", {
              contact_kind: /^tel:/i.test(href) ? "phone" : "email",
              contact_target: contactTarget(href),
              page_path: path(),
            });
          }
          return;
        }
        // Related-reading and professional blocks (Oct 20, 2026): which block,
        // where the link went, and the page it was on. Nothing about the visitor.
        const block = a.closest("[data-track-block]");
        if (block && !a.classList.contains("rpp-pulsing")) {
          send("next_step_click", {
            block: block.getAttribute("data-track-block") || "unknown",
            link_path: (() => {
              try {
                const u = new URL(href, window.location.origin);
                return u.origin === window.location.origin ? u.pathname + u.hash : u.hostname;
              } catch {
                return "unknown";
              }
            })(),
            page_path: path(),
          });
        }
        const tile = a.closest("[data-home-tile]");
        // Extra clicks while the double pulse plays are ignored (PulseNavigator), so count them once.
        if (tile && !tile.classList.contains("rpp-pulsing")) send("home_tile_click", { tile: tile.getAttribute("data-home-tile") || "unknown", tile_path: href });
        try {
          const url = new URL(href, window.location.origin);
          if (url.origin === window.location.origin && /^\/contact\/?$/.test(url.pathname) && path() !== "/contact") {
            send("contact_cta_click", { page_path: path(), contact_reason: url.searchParams.get("reason") || "unspecified" });
          }
        } catch {
          /* malformed href: ignore */
        }
        return;
      }
      if (t.closest("button, [role='button'], [role='radio'], label")) onCalculatorInteraction(t);
    },
    true,
  );
  document.addEventListener("input", (e) => onCalculatorInteraction(e.target), true);
  document.addEventListener("change", (e) => onCalculatorInteraction(e.target), true);
};

/**
 * "Ask a question" box (AskBox.tsx): what was asked and whether the site had an
 * answer. The question is trimmed to 100 characters (GA4's limit for a value)
 * after removing anything that looks like an email address or phone number, so
 * the owner sees what people ask without collecting contact details.
 */
export const scrubQuestion = (q: string): string =>
  q
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, "[email]")
    .replace(/\+?\(?\d[\d\s().-]{6,}\d/g, "[number]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);

export const trackAsk = (question: string, answerPath: string | null): void =>
  send("ask_question", {
    question: scrubQuestion(question),
    answered: answerPath ? "yes" : "no",
    answer_path: answerPath ?? "none",
    page_path: typeof window === "undefined" ? "" : path(),
  });

/** Newsletter / "notify me" signup confirmed by the server. */
export const trackSignup = (source: string): void => {
  send("sign_up", { method: "newsletter", signup_source: source || "unspecified" });
  trackMetaLead();
};

/** First answer on a planner page. The answer itself is never sent. */
export const trackPlannerStarted = (): void =>
  send("planner_started", { page_path: typeof window === "undefined" ? "" : path() });

/** All questions on a planner page answered. The answers are never sent. */
export const trackPlannerCompleted = (): void =>
  send("planner_completed", { page_path: typeof window === "undefined" ? "" : path() });
