/**
 * revealScroll — bring newly revealed content into view (Nov 1, 2026).
 *
 * Owner's rule: when a tap makes something appear BELOW the thing tapped
 * (questions, the next question, a result, an answer), the page must move to
 * it. On a phone the new content is often off-screen and the tap "seems to do
 * nothing". Use this one helper everywhere so the behaviour is the same sitewide.
 *
 * What it does:
 *  - waits for React to paint the new content (two animation frames);
 *  - scrolls only if the target's top is not already comfortably on screen;
 *  - stops the target just under the header (fixed on phones, sticky on desktop)
 *    with a small gap, so nothing hides behind it;
 *  - smooth scroll, or an instant jump for people with "reduce motion" on;
 *  - optionally moves keyboard / screen-reader focus to the target without a
 *    second jump (the target needs tabIndex={-1} if it isn't focusable).
 */

const GAP = 12;

function headerBottom(): number {
  const header = document.querySelector("header");
  if (!header) return 0;
  const pos = getComputedStyle(header).position;
  if (pos !== "fixed" && pos !== "sticky") return 0;
  const r = header.getBoundingClientRect();
  let bottom = r.bottom > 0 ? r.bottom : 0;
  // AFH Club pages add a fixed steps bar under the header (src/components/AFHStepsBar.tsx),
  // which publishes its height as --afh-stepsbar-h and removes it when it unmounts.
  const bar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--afh-stepsbar-h"));
  if (bar > 0) bottom += bar;
  return bottom;
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export interface RevealOptions {
  /** Move focus to the target after scrolling (default false). */
  focus?: boolean;
  /**
   * Scroll even when the target is already visible (default false). By default
   * the page only moves when the target's top sits below 60% of the screen or
   * above/under the header.
   */
  always?: boolean;
  /** Wait this long (ms) before moving, so the tap visibly registers first. */
  delayMs?: number;
}

/** Phones and small tablets — the width at which the header switches to its phone layout. */
export function isPhoneWidth(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(max-width: 950px)").matches;
  } catch {
    return window.innerWidth < 951;
  }
}

export function revealInView(el: HTMLElement | null | undefined, opts: RevealOptions = {}): void {
  if (typeof window === "undefined") return;
  const run = () => {
    if (!el || !el.isConnected) return;
    const top = headerBottom();
    const rect = el.getBoundingClientRect();
    const visibleHeight = window.innerHeight - top;
    const comfortablyVisible = rect.top >= top + 4 && rect.top <= top + visibleHeight * 0.6;
    if (opts.always || !comfortablyVisible) {
      const y = window.scrollY + rect.top - top - GAP;
      window.scrollTo({ top: Math.max(0, y), behavior: prefersReducedMotion() ? "auto" : "smooth" });
    }
    if (opts.focus) {
      try {
        el.focus({ preventScroll: true });
      } catch {
        /* older browsers ignore the option */
      }
    }
  };
  // Two frames: the first lets React commit, the second lets layout settle.
  const go = () => requestAnimationFrame(() => requestAnimationFrame(run));
  if (opts.delayMs && opts.delayMs > 0) window.setTimeout(go, opts.delayMs);
  else go();
}

/** Same, by element id — for components that don't hold a ref. */
export function revealById(id: string, opts?: RevealOptions): void {
  if (typeof document === "undefined") return;
  requestAnimationFrame(() => revealInView(document.getElementById(id), opts));
}
