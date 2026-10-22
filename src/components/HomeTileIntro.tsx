/**
 * Homepage tile wave (Oct 21, 2026, David's idea, "Go"): when the four
 * "What brings you here today?" tiles first come into view, each gives the
 * same double pulse as a click, one at a time in order (brown, green, blue,
 * purple), ONCE. Then everything stays still.
 *
 * Deliberately not a loop: endless motion distracts an older readership,
 * WCAG 2.2.2 requires a pause control for motion longer than 5 seconds, and
 * it would blur what the pulse means elsewhere ("you clicked this").
 *
 * - Skipped entirely under prefers-reduced-motion.
 * - Plays once per browser session (sessionStorage, wrapped in try/catch).
 * - Stops the moment the visitor clicks, taps or presses a key.
 * - Uses its own class (rpp-intro-pulse), not rpp-pulsing, so it never
 *   interferes with PulseNavigator or the click tracking that checks that class.
 */
import { useEffect } from "react";

const KEY = "rpp-tile-wave-seen";
const STAGGER_MS = 900; // one tile finishes before the next starts (matches --rpp-pulse-duration)
const START_DELAY_MS = 400;

export default function HomeTileIntro() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {
      /* storage blocked: play anyway */
    }
    const tiles = Array.from(document.querySelectorAll<HTMLElement>("[data-home-tile]"));
    if (tiles.length === 0 || !("IntersectionObserver" in window)) return;

    const timers: number[] = [];
    let started = false;
    const stop = () => {
      timers.forEach((t) => window.clearTimeout(t));
      tiles.forEach((el) => el.classList.remove("rpp-intro-pulse"));
      window.removeEventListener("pointerdown", stop, true);
      window.removeEventListener("keydown", stop, true);
    };

    const play = () => {
      started = true;
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
      tiles.forEach((el, i) => {
        timers.push(
          window.setTimeout(() => {
            el.classList.add("rpp-intro-pulse");
            timers.push(window.setTimeout(() => el.classList.remove("rpp-intro-pulse"), STAGGER_MS + 50));
          }, START_DELAY_MS + i * STAGGER_MS),
        );
      });
      timers.push(window.setTimeout(stop, START_DELAY_MS + tiles.length * STAGGER_MS + 200));
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (started) return;
        // Wait until the whole row (the last tile) is on screen, so the
        // visitor sees the wave from the start.
        if (entries.some((e) => e.target === tiles[tiles.length - 1] && e.intersectionRatio >= 0.6)) {
          io.disconnect();
          play();
        }
      },
      { threshold: [0.6] },
    );
    io.observe(tiles[tiles.length - 1]);
    window.addEventListener("pointerdown", stop, true);
    window.addEventListener("keydown", stop, true);

    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  return null;
}
