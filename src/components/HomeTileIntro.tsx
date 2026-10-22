/**
 * Homepage tile wave (Oct 21, 2026, David's idea, "Go"): when the four
 * "What brings you here today?" tiles first come into view, each gives the
 * same double pulse as a click, one at a time in order (brown, green, blue,
 * purple). The wave plays TWICE with a 2.5 s pause between (Oct 22, 2026,
 * David: once was easy to miss while reading the headline). Then still.
 *
 * Deliberately not a loop: endless motion distracts an older readership,
 * WCAG 2.2.2 asks for a way to stop motion longer than 5 seconds, and it
 * would blur what the pulse means elsewhere ("you clicked this"). Two passes
 * run ~10 s, so it also stops when the tile row scrolls out of view.
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
const PASSES = 2;
const PAUSE_MS = 2500; // between passes

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
    const stopObservers: IntersectionObserver[] = [];
    let started = false;
    const stop = () => {
      timers.forEach((t) => window.clearTimeout(t));
      stopObservers.forEach((o) => o.disconnect());
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
      const passMs = tiles.length * STAGGER_MS;
      for (let pass = 0; pass < PASSES; pass++) {
        const base = START_DELAY_MS + pass * (passMs + PAUSE_MS);
        tiles.forEach((el, i) => {
          timers.push(
            window.setTimeout(() => {
              el.classList.add("rpp-intro-pulse");
              timers.push(window.setTimeout(() => el.classList.remove("rpp-intro-pulse"), STAGGER_MS + 50));
            }, base + i * STAGGER_MS),
          );
        });
      }
      const total = START_DELAY_MS + PASSES * passMs + (PASSES - 1) * PAUSE_MS;
      timers.push(window.setTimeout(stop, total + 200));
      // Stop if the row leaves the screen: never animate where nobody can see it.
      const seen = new Map<Element, boolean>();
      const away = new IntersectionObserver((entries) => {
        entries.forEach((e) => seen.set(e.target, e.isIntersecting));
        // Only when every watched tile is off screen (a 2x2 grid on phones
        // can have one row visible and the other not).
        if (seen.size === 2 && [...seen.values()].every((v) => !v)) stop();
      });
      away.observe(tiles[0]);
      away.observe(tiles[tiles.length - 1]);
      timers.push(window.setTimeout(() => away.disconnect(), total + 300));
      stopObservers.push(away);
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
