/**
 * Double-pulse interaction (Oct 20, 2026, David's spec): a tile or button
 * marked with `data-pulse` gives two gentle heartbeats when clicked. One
 * document-level listener does it for the whole site, so components only add
 * the attribute; nothing is copied into each tile.
 *
 * Timing and scale live in index.css (--rpp-pulse-duration, --rpp-pulse-scale,
 * --rpp-pulse-easing). This script reads the duration from there, so changing
 * 900ms to 750ms in that one place changes both the animation and the wait.
 *
 * What it does, per click on an element inside [data-pulse]:
 *   - Internal link (same site, plain left click, no target=_blank): the click
 *     is held, the pulse plays, then the router navigates. A second click while
 *     the pulse runs is ignored, so nothing navigates twice.
 *   - Anything else (buttons that submit, open, expand): the pulse plays and
 *     the click goes through untouched, with no delay.
 *   - Ctrl/Cmd/Shift/Alt or middle click, target=_blank, downloads, external
 *     links, tel:/mailto:: left completely alone (normal browser behaviour).
 *   - prefers-reduced-motion: no animation and no delay.
 *
 * Keyboard: Enter on a focused link fires a click, so it pulses the same way;
 * focus rings are untouched (the scale does not hide the outline).
 *
 * Runs in the capture phase on document, before React Router's own handler on
 * the root. Calling preventDefault there makes <Link> skip its navigation
 * (it checks event.defaultPrevented), and the delayed navigate() below does it
 * instead. siteTracking's listener was installed earlier, so analytics still
 * see the click.
 */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK_MS = 900;

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
      const host = target.closest("[data-pulse]") as HTMLElement | null;
      if (!host) return;
      if (reducedMotion()) return;

      const ms = pulseMs();
      const link = target.closest("a[href]") as HTMLAnchorElement | null;
      const modified = e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;

      // Not a link (a button or other control): pulse, never delay the action.
      const isLink = !!link && (link === host || host.contains(link) || link.contains(host));
      if (!link || !isLink) {
        if (!modified) playPulse(host, ms);
        return;
      }
      if (modified) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(link.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return; // external, tel:, mailto:
      // A jump to a spot on the same page: pulse, but don't hold the scroll.
      if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
        playPulse(host, ms);
        return;
      }

      // Internal link: hold the click, pulse, then navigate once.
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
