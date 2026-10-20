/**
 * Double-pulse interaction (Oct 20, 2026, David's spec; approved on the four
 * homepage tiles, then extended sitewide the same day). A tile or button gives
 * two gentle heartbeats when clicked. One document-level listener does it for
 * the whole site, so components never carry their own animation code.
 *
 * WHAT PULSES: anything with a `data-pulse` attribute, plus the existing tile
 * and button classes listed in src/lib/pulseTargets.ts (one list). Anything
 * inside the header or footer, or carrying `data-no-pulse`, never pulses.
 *
 * TIMING AND SCALE live in index.css (--rpp-pulse-duration, --rpp-pulse-scale,
 * --rpp-pulse-easing). This script reads the duration from there, so changing
 * 900ms to 750ms in that one place changes both the animation and the wait.
 *
 * Per click on a pulsing element:
 *   - Internal page link (same site, plain left click, no target=_blank, not a
 *     file such as a PDF): the click is held, the pulse plays, then the router
 *     navigates. Clicks during the pulse are ignored, so nothing opens twice.
 *   - A jump to a spot on the same page: pulses, scrolls immediately.
 *   - Anything else (buttons that submit, open, expand, choose): the pulse
 *     plays and the click goes through untouched, with no delay.
 *   - target=_blank, downloads, files, external links, tel:/mailto:: pulse,
 *     and the browser handles the click straight away (no hold).
 *   - Ctrl/Cmd/Shift/Alt or middle click: left completely alone.
 *   - prefers-reduced-motion: no animation and no delay.
 *
 * Keyboard: Enter on a focused link fires a click, so it pulses the same way;
 * focus rings are untouched.
 *
 * Runs in the capture phase on document, before React Router's own handler on
 * the root. preventDefault there makes <Link> skip its navigation (it checks
 * event.defaultPrevented), and the delayed navigate() does it instead.
 * siteTracking's listener was installed earlier, so analytics still see the
 * click.
 */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PULSE_SELECTOR } from "@/lib/pulseTargets";

const FALLBACK_MS = 900;
const FILE_PATH = /\.(pdf|docx?|xlsx?|csv|zip|png|jpe?g|webp|gif|svg|mp3|mp4|ics|txt|xml|json)$/i;

const pulseMs = (): number => {
  try {
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--rpp-pulse-duration").trim();
    if (raw.endsWith("ms")) return parseFloat(raw);
    if (raw.endsWith("s")) return parseFloat(raw) * 1000;
  } catch {
    /* fall through */
  }
  return FALLBACK_MS;
};

const reducedMotion = (): boolean => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

/** Restart the animation even if the class is still on from a previous pulse. */
const playPulse = (el: HTMLElement, ms: number) => {
  if (!el.hasAttribute("data-pulse")) el.setAttribute("data-pulse", "");
  el.classList.remove("rpp-pulsing");
  void el.offsetWidth; // reflow so the animation restarts
  el.classList.add("rpp-pulsing");
  window.setTimeout(() => el.classList.remove("rpp-pulsing"), ms + 50);
};

export default function PulseNavigator() {
  const navigate = useNavigate();

  useEffect(() => {
    const busy = new WeakSet<HTMLElement>();

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;
      const host = target.closest(PULSE_SELECTOR) as HTMLElement | null;
      if (!host) return;
      if (host.closest("header, footer, [data-no-pulse]")) return;
      if (host.matches("input, select, textarea, label, option")) return;
      if (host.matches(":disabled, [aria-disabled='true']")) return;
      if (reducedMotion()) return;

      const ms = pulseMs();
      const modified = e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      if (modified) return;

      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      const isLink = !!link && (link === host || host.contains(link) || link.contains(host));

      // A button or other control: pulse, never delay the action.
      if (!link || !isLink) {
        playPulse(host, ms);
        return;
      }
      let url: URL | null = null;
      try {
        url = new URL(link.getAttribute("href") || "", window.location.href);
      } catch {
        url = null;
      }
      // New tab, download, file (PDF), external site, phone or email: pulse,
      // but let the browser handle the click straight away.
      if (
        !url ||
        (link.target && link.target !== "_self") ||
        link.hasAttribute("download") ||
        url.origin !== window.location.origin ||
        FILE_PATH.test(url.pathname)
      ) {
        playPulse(host, ms);
        return;
      }

      // A jump to a spot on the same page: pulse, but don't hold the scroll.
      if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
        playPulse(host, ms);
        return;
      }

      // Internal page link: hold the click, pulse, then navigate once.
      e.preventDefault();
      if (busy.has(host)) return;
      busy.add(host);
      playPulse(host, ms);
      window.setTimeout(() => {
        busy.delete(host);
        navigate(url.pathname + url.search + url.hash);
      }, ms);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);

  return null;
}
