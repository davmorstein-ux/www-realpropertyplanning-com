import { useEffect, useRef, useState } from "react";

/**
 * Rotating cost figures for the Cost of Care Calculator tile.
 *
 * TIMING
 *   HOLD_MS  3000   figures sit still and fully opaque
 *   FADE_MS  1250   out, then the same again in — 2500ms per changeover
 *   Full cycle: 5.5s per set of three.
 *
 * This is a true fade-out-then-fade-in rather than a fade-in over a hard
 * swap: the current figures dim to zero, the numbers change while nothing
 * is visible, then the new set comes up. Swapping mid-fade would show two
 * different numbers blended together, which reads as a rendering fault.
 *
 * DESIGN NOTES
 *
 * 1. FADE, NOT SLIDE. Sliding motion is the trigger for vestibular
 *    discomfort, which is more common among older readers. A fade conveys
 *    the same change with none of the movement.
 *
 * 2. PAUSES ON HOVER AND FOCUS, and returns to full opacity when it does —
 *    stopping mid-fade would leave the figures half-faded and unreadable.
 *
 * 3. VISIBLE PAUSE BUTTON. WCAG 2.2.2 requires a pause, stop, or hide
 *    mechanism for content that auto-updates for more than five seconds
 *    alongside other content. This is a requirement, not a nicety.
 *
 * 4. RESPECTS prefers-reduced-motion. Users who have asked their OS for
 *    less motion get the first set, static, with no timer running.
 *
 * 5. SCREEN READERS GET EVERYTHING AT ONCE. The rotating display is
 *    aria-hidden and a full static list sits behind it, so nothing is
 *    announced mid-change and no figure is unreachable.
 */

export interface CareCost {
  label: string;
  amount: string;
  /** Accent colour for the figure. Each must reach 4.5:1 on white. */
  color: string;
}

/* Replace the placeholder figures with your real numbers. The three known
   values are taken from the current tile; the rest are marked TODO. */
const DEFAULT_COSTS: CareCost[] = [
  { label: "Adult Family Home", amount: "$6,500", color: "#0f6b56" },
  { label: "Assisted Living", amount: "$7,600", color: "#2f2b27" },
  { label: "Memory Care", amount: "$9,500", color: "#6b2d8f" },
  { label: "In-Home Care", amount: "$8,000", color: "#1B3A6B" }, // TODO: confirm
  { label: "Nursing Home — Shared", amount: "$11,000", color: "#7f1d1d" }, // TODO: confirm
  { label: "Nursing Home — Private", amount: "$13,000", color: "#0f4c4a" }, // TODO: confirm
];

const PER_PAGE = 3;
const HOLD_MS = 3000; // still and fully visible between changeovers
const FADE_MS = 1250; // each direction — 2500ms out-and-in per change

interface Props {
  costs?: CareCost[];
}

const CostOfCareRotator = ({ costs = DEFAULT_COSTS }: Props) => {
  const pages: CareCost[][] = [];
  for (let i = 0; i < costs.length; i += PER_PAGE) {
    pages.push(costs.slice(i, i + PER_PAGE));
  }

  const [page, setPage] = useState(0);
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

    // hold → fade out → swap → fade in → repeat
    const startCycle = () => {
      timers.current.push(
        window.setTimeout(() => {
          setVisible(false);
          timers.current.push(
            window.setTimeout(() => {
              setPage((p) => (p + 1) % pages.length);
              setVisible(true);
              timers.current.push(window.setTimeout(startCycle, FADE_MS));
            }, FADE_MS),
          );
        }, HOLD_MS),
      );
    };

    startCycle();
    return clearTimers;
  }, [paused, reduced, pages.length]);

  const current = pages[page] ?? pages[0];

  return (
    <div
      className="rpp-cost-rotator"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Visible, animated. Hidden from assistive tech so nothing is
          announced mid-rotation. */}
      <div aria-hidden="true">
        <div
          className="rpp-cost-page"
          style={{
            opacity: reduced ? 1 : visible ? 1 : 0,
            transition: reduced ? "none" : `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        >
          {current.map((c) => (
            <div key={c.label} className="rpp-cost-item">
              <span className="rpp-cost-label">{c.label}</span>
              <span className="rpp-cost-amount" style={{ color: c.color }}>
                {c.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Every figure, always available to screen readers. */}
      <ul className="rpp-sr-only">
        {costs.map((c) => (
          <li key={c.label}>
            {c.label}: {c.amount} per month
          </li>
        ))}
      </ul>

      {!reduced && pages.length > 1 && (
        <div className="rpp-cost-controls">
          <button type="button" onClick={() => setPaused((p) => !p)} aria-pressed={paused} className="rpp-cost-pause">
            {paused ? "Resume" : "Pause"}
          </button>
          <span className="rpp-cost-dots" aria-hidden="true">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPage(i);
                  setVisible(true);
                  setPaused(true);
                }}
                className={`rpp-cost-dot${i === page ? " is-current" : ""}`}
                tabIndex={-1}
              />
            ))}
          </span>
        </div>
      )}

      <style>{`
        .rpp-cost-rotator { position: relative; }

        .rpp-cost-page {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .rpp-cost-item { display: flex; flex-direction: column; }

        .rpp-cost-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 17px !important;
          font-weight: 600;
          color: #1B3A6B;
          line-height: 1.3;
        }
        .rpp-cost-amount {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 30px;
          font-weight: 700;
          line-height: 1.15;
        }

        .rpp-cost-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
        }
        /* 44px tall so it is comfortably clickable — this control exists for
           people who need the motion to stop, so it cannot be fiddly. */
        .rpp-cost-pause {
          min-height: 44px;
          padding: 6px 16px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #7f1d1d;
          background: transparent;
          border: 2px solid #7f1d1d;
          border-radius: 6px;
          cursor: pointer;
        }
        .rpp-cost-pause:hover { background: rgba(127,29,29,0.06); }
        .rpp-cost-pause:focus-visible {
          outline: 3px solid #d1a847;
          outline-offset: 2px;
        }

        .rpp-cost-dots { display: inline-flex; gap: 7px; }
        .rpp-cost-dot {
          width: 11px; height: 11px;
          padding: 0;
          border-radius: 50%;
          border: 1px solid #7f1d1d;
          background: transparent;
          cursor: pointer;
        }
        .rpp-cost-dot.is-current { background: #7f1d1d; }

        .rpp-sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0 0 0 0); white-space: nowrap; border: 0;
        }
      `}</style>
    </div>
  );
};

export default CostOfCareRotator;
