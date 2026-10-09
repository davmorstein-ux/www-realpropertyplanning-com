import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AFH_BUYER_STEPS } from "@/components/AFHBuyerSteps";

/**
 * Sticky six-step bar for the pages the AFH buyer steps link to (Oct 8, 2026,
 * owner's request): it sits directly under the header so a reader can jump to
 * any step from anywhere on the page. Icon, number and one short word only.
 *
 * Desktop (>= 769px, the header's own breakpoint): position:sticky under the
 * sticky header, one row of six.
 *
 * Phones (< 769px): 2 rows of 3. The mobile header is position:FIXED with a
 * spacer (the iPhone "tremor" fix in Header.tsx), so this bar is fixed too,
 * pinned at var(--header-height), with its own spacer in the flow. A sticky
 * element here could bring the shiver back. While the reader scrolls down it
 * collapses to one line ("Step 3 of 6 · Revenue"); scrolling up, tapping the
 * line, or returning to the top opens it again. The spacer always keeps the
 * open height, so collapsing never moves the page.
 *
 * The bar publishes its height as --afh-stepsbar-h so in-page scroll targets
 * can clear it (see AFHPropertyScore's topRef).
 */
const SHORT: Record<number, string> = { 1: "Find", 2: "Score", 3: "Revenue", 4: "Value", 5: "Financing", 6: "Connect" };
const BREAKPOINT = 769;

const AFHStepsBar = ({ current }: { current: number }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openH, setOpenH] = useState(0);
  const barRef = useRef<HTMLElement>(null);
  const collapsedRef = useRef(false);
  collapsedRef.current = collapsed;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Measure the OPEN bar for the spacer and the scroll-margin variable. Only
     measured while open, so the collapsed line never shrinks the spacer. */
  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (collapsedRef.current) return;
        const h = Math.round(el.getBoundingClientRect().height);
        setOpenH((prev) => (Math.abs(prev - h) < 1 ? prev : h));
        document.documentElement.style.setProperty("--afh-stepsbar-h", `${h}px`);
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      document.documentElement.style.removeProperty("--afh-stepsbar-h");
    };
  }, [isMobile]);

  /* Phones only: collapse on scroll down, open on scroll up. Direction is
     judged over a few pixels and state is only written when it changes, so
     the bar does not flicker on small finger wobbles. */
  useEffect(() => {
    if (!isMobile) {
      setCollapsed(false);
      return;
    }
    let lastY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY;
        if (y < 80) {
          if (collapsedRef.current) setCollapsed(false);
          lastY = y;
        } else if (dy > 12) {
          if (!collapsedRef.current) setCollapsed(true);
          lastY = y;
        } else if (dy < -12) {
          if (collapsedRef.current) setCollapsed(false);
          lastY = y;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  const cur = AFH_BUYER_STEPS.find((s) => s.n === current);

  return (
    <>
      <nav
        ref={barRef}
        aria-label="Buying an adult family home, step by step"
        className={`rpp-stepsbar${isMobile ? " is-mobile" : ""}${collapsed ? " is-collapsed" : ""}`}
      >
        {isMobile && collapsed && cur ? (
          <button type="button" className="rpp-stepsbar-line" aria-expanded="false" onClick={() => setCollapsed(false)}>
            <span className="rpp-stepsbar-n">{cur.n}</span>
            <span className="rpp-stepsbar-linetext">
              Step {cur.n} of 6 · {SHORT[cur.n]}
            </span>
            <span className="rpp-stepsbar-chev" aria-hidden="true">▾</span>
          </button>
        ) : (
          <ol>
            {AFH_BUYER_STEPS.map((s) => {
              const isCurrent = s.n === current;
              return (
                <li key={s.n} className={isCurrent ? "is-current" : undefined}>
                  <Link
                    to={s.href}
                    className="rpp-stepsbar-cell"
                    aria-current={isCurrent ? "step" : undefined}
                    aria-label={`Step ${s.n}: ${s.label}`}
                  >
                    <img className="rpp-stepsbar-ico" src={s.icon} alt="" width={40} height={40} decoding="async" />
                    <span className="rpp-stepsbar-n">{s.n}</span>
                    <span className="rpp-stepsbar-label">{SHORT[s.n]}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </nav>
      {/* Phones: holds the open bar's footprint in the flow (the bar itself is fixed). */}
      {isMobile && <div aria-hidden="true" style={{ height: openH }} />}
      <style dangerouslySetInnerHTML={{ __html: STEPSBAR_CSS }} />
    </>
  );
};

/* Class names deliberately avoid "btn" and "cta" (index.css paints those the
   retired maroon) and carry no letter-spacing/uppercase (index.css forces such
   "eyebrow" text to 14px). Labels are spans inside links, which index.css sizes
   down, hence the !important sizes. */
const STEPSBAR_CSS = `
  .rpp-stepsbar { font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; position: sticky; top: var(--header-height, 0px); z-index: 40; background: #faf8f4; border-bottom: 1px solid rgba(39,36,33,0.18); padding: 8px 24px; margin: 0; box-sizing: border-box; width: 100%; }
  /* !important on the box: sitewide mobile rules stretch a fixed <nav> to full height otherwise. */
  .rpp-stepsbar.is-mobile { position: fixed !important; top: var(--header-height, 0px) !important; bottom: auto !important; left: 0; right: 0; height: auto !important; min-height: 0 !important; max-height: none !important; display: block !important; padding: 6px 10px; }
  .rpp-stepsbar ol { list-style: none; margin: 0 auto; padding: 0; max-width: 1100px; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; }
  .rpp-stepsbar.is-mobile ol { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 5px; }
  .rpp-stepsbar li { margin: 0 !important; padding: 0 !important; min-width: 0; display: flex; }
  .rpp-stepsbar li::before, .rpp-stepsbar li::marker { content: none !important; }
  .rpp-stepsbar a.rpp-stepsbar-cell { position: relative; flex: 1 1 auto; display: flex !important; align-items: center; justify-content: center; gap: 10px; padding: 6px 10px 6px 14px !important; min-height: 52px; border: 1.5px solid #ddd6cc; border-radius: 10px; background: #fff; color: #272421 !important; text-decoration: none !important; line-height: 1.2 !important; box-sizing: border-box; min-width: 0; }
  .rpp-stepsbar.is-mobile a.rpp-stepsbar-cell { gap: 4px; padding: 4px 5px !important; min-height: 44px; justify-content: flex-start; }
  .rpp-stepsbar img.rpp-stepsbar-ico { display: block; width: 40px; height: 40px; object-fit: contain; flex: 0 0 auto; margin: 0; }
  .rpp-stepsbar.is-mobile img.rpp-stepsbar-ico { width: 30px; height: 30px; }
  .rpp-stepsbar .rpp-stepsbar-n { flex: 0 0 auto; width: 22px; height: 22px; border-radius: 50%; background: #0a5648; color: #fff !important; font-weight: 700; font-size: 13px !important; line-height: 1 !important; display: inline-flex; align-items: center; justify-content: center; }
  /* The number rides on the icon's corner so each cell stays one line wide. */
  .rpp-stepsbar a.rpp-stepsbar-cell .rpp-stepsbar-n { position: absolute; top: 3px; left: 3px; box-shadow: 0 0 0 2px #fff; }
  .rpp-stepsbar.is-mobile a.rpp-stepsbar-cell .rpp-stepsbar-n { top: 2px; left: 2px; width: 18px; height: 18px; font-size: 11px !important; box-shadow: 0 0 0 1.5px #fff; }
  /* Tablet widths: six across leaves too little room for icon beside word, so stack them. */
  @media (min-width: 769px) and (max-width: 1099px) {
    .rpp-stepsbar:not(.is-mobile) a.rpp-stepsbar-cell { flex-direction: column; gap: 2px; padding: 6px 4px !important; }
    .rpp-stepsbar:not(.is-mobile) img.rpp-stepsbar-ico { width: 34px; height: 34px; }
    .rpp-stepsbar:not(.is-mobile) .rpp-stepsbar-label { font-size: 16px !important; }
  }
  .rpp-stepsbar .rpp-stepsbar-label { font-weight: 700; font-size: 17px !important; line-height: 1.2 !important; color: #272421 !important; white-space: nowrap; min-width: 0; }
  .rpp-stepsbar.is-mobile .rpp-stepsbar-label { font-size: 15px !important; overflow: hidden; text-overflow: clip; }
  .rpp-stepsbar li.is-current a.rpp-stepsbar-cell { border-color: #0a5648; border-width: 2px; background: #e3efea; }
  @media (hover: hover) { .rpp-stepsbar a.rpp-stepsbar-cell:hover { border-color: #0a5648; } }
  .rpp-stepsbar a.rpp-stepsbar-cell:focus-visible, .rpp-stepsbar .rpp-stepsbar-line:focus-visible { outline: 2px solid #0a5648; outline-offset: 2px; }
  .rpp-stepsbar .rpp-stepsbar-line { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 44px; padding: 6px 12px; border: 2px solid #0a5648; border-radius: 10px; background: #e3efea; color: #272421; font: inherit; font-weight: 700; font-size: 17px; text-align: left; cursor: pointer; box-sizing: border-box; }
  .rpp-stepsbar .rpp-stepsbar-linetext { flex: 1 1 auto; font-size: 17px !important; color: #272421 !important; }
  .rpp-stepsbar .rpp-stepsbar-chev { font-size: 18px !important; color: #0a5648 !important; }
  /* Small phones (iPhone SE/mini): a smaller icon keeps "Financing" whole. */
  @media (max-width: 389px) { .rpp-stepsbar.is-mobile img.rpp-stepsbar-ico { width: 24px; height: 24px; } .rpp-stepsbar.is-mobile a.rpp-stepsbar-cell { gap: 3px; padding: 4px 3px !important; } }
  @media print { .rpp-stepsbar { display: none !important; } }
`;

export default AFHStepsBar;
