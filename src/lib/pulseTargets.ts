/**
 * Which tiles and buttons get the double pulse (Oct 20, 2026,
 * approved by David on the homepage tiles first). One list, read by
 * src/components/PulseNavigator.tsx. Anything matching here (or carrying a
 * `data-pulse` attribute) pulses when clicked; the script adds `data-pulse`
 * to it at click time so the CSS in index.css applies.
 *
 * Built from an inventory of every clickable element on all 326 sitemap pages
 * (tiles = large linked cards; buttons = filled or outlined calls to action).
 * Left out on purpose, per David's spec: ordinary text links, form fields,
 * dropdowns, checkboxes, accordion rows, carousel arrows, calculator steppers
 * and toggles, filter chips, header and footer controls. To exclude one
 * element anywhere, give it `data-no-pulse`.
 *
 * The shared <Button> (src/components/ui/button.tsx) adds data-pulse itself
 * for its full-size variants, so Button-based calls to action need no entry.
 */
export const PULSE_TARGETS: string[] = [
  // Tiles: guided pathways, topic lists, next questions, roadmaps
  "a.tile-white",
  "a.interior-tile",
  "a.rpp-roadmap-list-item",
  "a.rpp-next-step",
  "a.rpp-qa-journey",
  "a.pfc-go",
  // Tiles: service, resource, profession and professional cards
  "a.marquee-hover",
  "a.card-3d",
  "a.card-3d-premium",
  "a.p1tile",
  "a.p3tile",
  "a.rpp-pr-card",
  "a.rpp-coc-card",
  // Tiles: AFH Club destinations, carousel, calculators
  "a.afh-carousel-card",
  "a.rpp-afh-dest-card",
  "a.rpp-afh-choose-main",
  "a.rpp-afh-strip",
  "a.rpp-calcswitch-card",
  "a.rpp-calcs-item",
  // Choice tiles that advance a guided tool (pulse only, never delayed: buttons)
  "button.mp-choice",
  "button.cgb-pick",
  "button.fhp-choice",
  // Calls to action: links styled as buttons
  "a.rpp-link-large.rpp-filled",
  "a.rpp-answer-cta",
  "a.rpp-afh-btn-solid",
  "a.rpp-afh-btn-outline",
  "a.rpp-contact-btn",
  "a.rpp-return-btn",
  "a.rpp-afh-return",
  "a.rpp-pr-browse",
  "a.rpp-btr",
  "a.prp-back",
  "a.prp-next",
  "a.article-resource-btn",
  "a.hbk-dl",
  "a.byb-dl",
  // Calls to action: real buttons
  "button.rpp-news-submit",
  "button.rpp-ask-send",
  "button.aps-go",
  "button.p1bar-btn",
  "button.p3bar-btn",
  "button.cafh-print",
  "button.mp-action",
  "button.rpp-apply-button",
];

export const PULSE_SELECTOR = ["[data-pulse]", ...PULSE_TARGETS].join(", ");

/* ── Everything else: the shape rule (Oct 20, 2026) ──────────────────────
   A class list alone missed unclassed tiles (David found /afh-club: the
   buyer steps, destination cards, city buttons and listing buttons did not
   pulse). So any other link or button inside <main> that LOOKS like a tile
   or button pulses too: not a text link inside a sentence, at least
   MIN_W x MIN_H on screen, and not a form, menu, accordion or toggle control.
   The class list above still wins (it covers choice tiles such as role=radio
   buttons that the shape rule would skip). */
const MIN_W = 100;
const MIN_H = 32;
const NEVER = [
  "header", "footer", "[data-no-pulse]",
  "input", "select", "textarea", "label", "option", "summary",
  "[role='combobox']", "[role='checkbox']", "[role='radio']", "[role='switch']",
  "[role='tab']", "[role='menuitem']", "[role='option']", "[role='slider']",
  "[aria-expanded]", "[aria-haspopup]", "[class*='chip']",
].join(", ");

/** The element that should pulse for a click on `target`, or null. */
export function pulseHost(target: Element): HTMLElement | null {
  const listed = target.closest(PULSE_SELECTOR) as HTMLElement | null;
  if (listed) return listed.closest("header, footer, [data-no-pulse]") ? null : listed;

  const el = target.closest("a[href], button, [role='button']") as HTMLElement | null;
  if (!el || !el.closest("main")) return null;
  if (el.matches(NEVER) || el.closest("header, footer, [data-no-pulse], [role='menu'], [role='listbox'], [role='tablist']")) return null;
  const cs = getComputedStyle(el);
  if (cs.display === "inline") return null; // a link inside a sentence
  const r = el.getBoundingClientRect();
  if (r.width < MIN_W || r.height < MIN_H) return null; // arrows, steppers, small toggles
  if (!looksLikeTileOrButton(el)) return null; // a plain text link set on its own line (site map, email)
  return el;
}

const visible = (cs: CSSStyleDeclaration) =>
  (cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent") ||
  cs.backgroundImage !== "none" ||
  cs.boxShadow !== "none" ||
  ["Top", "Right", "Bottom", "Left"].some(
    (side) =>
      parseFloat(cs.getPropertyValue(`border-${side.toLowerCase()}-width`)) > 0 &&
      cs.getPropertyValue(`border-${side.toLowerCase()}-style`) !== "none",
  );

/** A tile or button has a fill, border, shadow or picture of its own (or on
 *  the box just inside it); a text link has only words. */
function looksLikeTileOrButton(el: HTMLElement): boolean {
  if (el.tagName === "BUTTON") return true;
  if (visible(getComputedStyle(el))) return true;
  const inner = [...el.querySelectorAll<HTMLElement>(":scope > *, :scope > * > *")].slice(0, 24);
  for (const child of inner) {
    if (child.matches("img, picture, video")) {
      const b = child.getBoundingClientRect();
      if (b.width >= 40 && b.height >= 40) return true;
    } else if (visible(getComputedStyle(child))) {
      const b = child.getBoundingClientRect();
      if (b.width >= 32 && b.height >= 32) return true;
    }
  }
  return false;
}
