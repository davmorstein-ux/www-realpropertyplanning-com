import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";

/**
 * Homepage door hero that opens once (Nov 20, 2026, David's idea).
 *
 * The door starts closed and swings open (outward, like the logo's door) over
 * about 1.2 seconds, while "next" in the slogan fades from charcoal to the
 * door's garnet (CSS in RPPHomeV3's DOOR_HERO_CSS, keyed on data-door).
 *
 *   - 15 frames David made in ChatGPT; every frame was recoloured to the
 *     homepage door garnet (#8E091C) and given the same garden (taken from the
 *     last frame) so only the door moves. Files: src/assets/hero/door-open/,
 *     door-NN-sm.webp (195x320) and door-NN-lg.webp (463x760).
 *   - The page first shows frame 0 (closed, ~9 KB, preloaded by vite.config's
 *     preloadHomepageHero). The other frames load after; if they are not all
 *     ready within 3 seconds, the door simply shows open, without animating.
 *   - Plays once per browser tab (sessionStorage). Visitors with "reduce
 *     motion" turned on see the open door and the garnet word, no movement.
 *   - Only this component re-renders per frame: the slogan and heading are
 *     passed in as children, so React reuses them untouched.
 *   - Keep <picture> without a class and the attribute order
 *     media/srcSet/sizes: vite.config.ts reads them for the preload links.
 */
const pick = (g: Record<string, string>) =>
  Object.keys(g).sort().map((k) => g[k]);
const SMALL = pick(
  import.meta.glob("/src/assets/hero/door-open/door-*-sm.webp", { eager: true, query: "?url&no-inline", import: "default" }) as Record<string, string>,
);
const LARGE = pick(
  import.meta.glob("/src/assets/hero/door-open/door-*-lg.webp", { eager: true, query: "?url&no-inline", import: "default" }) as Record<string, string>,
);
const LAST = LARGE.length - 1;
const srcSetFor = (i: number) => `${SMALL[i]} 195w, ${LARGE[i]} 463w`;
const SIZES = "(min-width: 901px) 232px, 92px";
const PLAYED_KEY = "rpp-door-opened";
/** Pause on the closed door, then frame times that slow as the door settles. */
const HOLD_CLOSED_MS = 450;
const frameMs = (k: number) => Math.round(60 + 110 * (k / LAST) ** 2);

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Phase = "closed" | "opening" | "open";

export default function DoorHero({ alt, children }: { alt: string; children: ReactNode }) {
  const [frame, setFrame] = useState(0);
  const [phase, setPhase] = useState<Phase>("closed");

  useIsoLayoutEffect(() => {
    const showOpen = () => {
      setFrame(LAST);
      setPhase("open");
    };
    let skip = false;
    try {
      skip = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      skip = true;
    }
    try {
      if (window.sessionStorage.getItem(PLAYED_KEY) === "1") skip = true;
    } catch {
      /* storage blocked: play it */
    }
    if (skip || LAST < 1) {
      showOpen();
      return;
    }

    let done = false;
    const timers: number[] = [];
    const started = performance.now();
    const giveUp = window.setTimeout(() => {
      done = true;
      showOpen();
    }, 3000);

    const play = () => {
      if (done) return;
      done = true;
      window.clearTimeout(giveUp);
      try {
        window.sessionStorage.setItem(PLAYED_KEY, "1");
      } catch {
        /* fine */
      }
      setPhase("opening");
      let at = 0;
      for (let k = 1; k <= LAST; k++) {
        at += frameMs(k);
        const f = k;
        timers.push(window.setTimeout(() => {
          setFrame(f);
          if (f === LAST) setPhase("open");
        }, at));
      }
    };

    let failed = false;
    Promise.all(
      LARGE.map((_, i) => {
        const im = new Image();
        im.sizes = SIZES;
        im.srcset = srcSetFor(i);
        im.src = LARGE[i];
        return im.decode().catch(() => {
          failed = true;
        });
      }),
    ).then(() => {
      if (done) return;
      if (failed) {
        done = true;
        window.clearTimeout(giveUp);
        showOpen();
        return;
      }
      const wait = Math.max(0, HOLD_CLOSED_MS - (performance.now() - started));
      timers.push(window.setTimeout(play, wait));
    });

    return () => {
      done = true;
      window.clearTimeout(giveUp);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <div className="rpp-door-hero" data-door={phase}>
      <div className="rpp-door-inner">
        {children}
        <picture>
          <source media="(max-width: 900px)" srcSet={srcSetFor(frame)} sizes="92px" width={195} height={320} />
          <img
            id="rpp-hero-image"
            className="rpp-door-img"
            src={LARGE[frame]}
            srcSet={srcSetFor(frame)}
            sizes={SIZES}
            width={463}
            height={760}
            alt={alt}
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </div>
    </div>
  );
}
