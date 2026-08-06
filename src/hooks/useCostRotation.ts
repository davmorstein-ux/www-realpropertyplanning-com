import { useEffect, useRef, useState } from "react";

/**
 * Rotation timing for the homepage Cost of Care figures.
 *
 *   HOLD_MS  3000   figures sit still and fully opaque
 *   FADE_MS  1250   out, then the same again in — 2500ms per changeover
 *   Full cycle: 5.5s per set of three.
 *
 * A true fade-out-then-fade-in, not a fade-in over a hard swap: the figures
 * dim to zero, the numbers change while nothing is visible, then the new set
 * comes up. Swapping mid-fade would briefly blend two different dollar
 * amounts on top of each other, which reads as a rendering fault.
 *
 * WHY A HOOK RATHER THAN A SELF-CONTAINED COMPONENT
 *
 * The Cost of Care tile is wrapped in a single <a> covering the whole card.
 * A <button> inside an anchor is invalid HTML, and clicking it would follow
 * the link instead of pausing. So state lives here, the figures render
 * inside the anchor, and the pause control renders outside it.
 */

export const HOLD_MS = 3000;
export const FADE_MS = 1250;
export const PER_PAGE = 3;

export function useCostRotation<T>(items: T[], perPage: number = PER_PAGE) {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage));
  }

  const [pageIndex, setPageIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduced || pages.length < 2) {
      clearTimers();
      setVisible(true); // never rest mid-fade
      return;
    }

    const cycle = () => {
      timers.current.push(
        window.setTimeout(() => {
          setVisible(false);
          timers.current.push(
            window.setTimeout(() => {
              setPageIndex((p) => (p + 1) % pages.length);
              setVisible(true);
              timers.current.push(window.setTimeout(cycle, FADE_MS));
            }, FADE_MS)
          );
        }, HOLD_MS)
      );
    };

    cycle();
    return clearTimers;
  }, [paused, reduced, pages.length]);

  const goTo = (i: number) => {
    clearTimers();
    setPageIndex(i);
    setVisible(true);
    setPaused(true);
  };

  return {
    current: pages[pageIndex] ?? pages[0] ?? [],
    pageIndex,
    pageCount: pages.length,
    visible,
    paused,
    setPaused,
    reduced,
    goTo,
  };
}
