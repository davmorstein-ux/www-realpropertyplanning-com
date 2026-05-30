import { useState, useRef, useEffect } from "react";

const NAV_GROUPS = [
  {
    label: "Find a Professional",
    column: 0,
    items: [
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "CPAs & Accountants", href: "/professionals/cpas" },
      { name: "Divorce Attorneys", href: "/attorneys/for-divorce-attorneys" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
      { name: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
      { name: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
  {
    label: "Senior Housing & Care",
    column: 1,
    items: [
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "CCRC Costs", href: "/articles/ccrc-costs" },
      { name: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { name: "Aging in Place With Support", href: "/articles/aging-in-place" },
      { name: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
    ],
  },
  {
    label: "Property, Legal & Estate",
    column: 1,
    items: [
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "Senior Home Sales", href: "/senior-transitions" },
      { name: "For Executors", href: "/executors" },
      { name: "Building Your Professional Team", href: "/building-your-trusted-professional-team" },
    ],
  },
  {
    label: "Articles",
    column: 1,
    items: [
      { name: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
    ],
  },
  {
    label: "More",
    column: 1,
    items: [
      { name: "About", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

// Build two column lists for staggered animation
const LEFT_BARS = NAV_GROUPS.filter(g => g.column === 0).flatMap(g => [
  { type: "label", text: g.label },
  ...g.items.map(item => ({ type: "link", name: item.name, href: item.href })),
]);

const RIGHT_BARS = NAV_GROUPS.filter(g => g.column === 1).flatMap(g => [
  { type: "label", text: g.label },
  ...g.items.map(item => ({ type: "link", name: item.name, href: item.href })),
]);

const STAGGER_MS = 50;
const BAR_DURATION_MS = 380;
const CLOSE_DELAY_MS = 120;

const CSS = `
  .wf-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: flex-start;
    position: relative;
    z-index: 10001;
  }
  .wf-btn .wf-ln {
    display: block;
    height: 2px;
    background: #c9a84c;
    border-radius: 2px;
    transition: width 0.25s ease;
  }
  .wf-btn .wf-ln-1 { width: 26px; }
  .wf-btn .wf-ln-2 { width: 18px; }
  .wf-btn .wf-ln-3 { width: 12px; }
  .wf-btn:hover .wf-ln-1,
  .wf-btn:hover .wf-ln-2,
  .wf-btn:hover .wf-ln-3 { width: 26px; }

  .wf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26, 39, 68, 0.35);
    z-index: 9998;
    cursor: pointer;
    backdrop-filter: blur(1px);
  }

  .wf-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 520px;
    max-width: 95vw;
    height: 100vh;
    background: #f7f4ef;
    z-index: 9999;
    overflow: hidden;
    border-right: 1px solid #d4c9b0;
    display: flex;
    flex-direction: column;
  }

  .wf-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px 12px;
    border-bottom: 1px solid #e0d8c8;
    flex-shrink: 0;
    background: #f7f4ef;
  }
  .wf-panel-brand {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1a2744;
  }
  .wf-panel-brand span {
    color: #c9a84c;
    margin-right: 6px;
  }
  .wf-close-x {
    background: none;
    border: none;
    color: #888;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    padding: 4px 6px;
    transition: color 0.15s;
    border-radius: 4px;
  }
  .wf-close-x:hover { color: #1a2744; background: rgba(26,39,68,0.06); }

  .wf-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    overflow: hidden;
  }

  .wf-col {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 0 32px;
  }
  .wf-col:first-child {
    border-right: 1px solid #e0d8c8;
  }
  .wf-col::-webkit-scrollbar { width: 3px; }
  .wf-col::-webkit-scrollbar-thumb { background: #d4c9b0; border-radius: 2px; }

  .wf-bar { display: block; width: 100%; }

  .wf-bar-label {
    padding: 14px 16px 4px;
    font-size: 9px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    user-select: none;
  }

  .wf-bar-divider {
    margin: 4px 16px 0;
    border: none;
    border-top: 0.5px solid #e0d8c8;
  }

  .wf-bar-link {
    display: block;
    width: 100%;
    padding: 7px 16px 7px 22px;
    font-size: 12px;
    color: #2a3a5a;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.12s, border-color 0.12s, background 0.12s;
    line-height: 1.35;
  }
  .wf-bar-link:hover {
    color: #1a2744;
    border-left-color: #c9a84c;
    background: rgba(201,168,76,0.08);
  }

  @keyframes wfSlideIn {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes wfSlideOut {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-16px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .wf-bar { animation: none !important; opacity: 1 !important; }
  }
`;

function NavColumn({ bars, closing, columnDelay }) {
  return (
    <div className="wf-col">
      {bars.map((bar, i) => {
        const totalBars = bars.length;
        const delayMs = closing
          ? (totalBars - 1 - i) * STAGGER_MS + columnDelay
          : i * STAGGER_MS + columnDelay;

        const animStyle = {
          animation: `${closing ? "wfSlideOut" : "wfSlideIn"} ${BAR_DURATION_MS}ms cubic-bezier(0.22,1,0.36,1) both`,
          animationDelay: `${delayMs}ms`,
        };

        if (bar.type === "label") {
          return (
            <div key={i} className="wf-bar" style={animStyle}>
              {i > 0 && <hr className="wf-bar-divider" />}
              <div className="wf-bar-label">{bar.text}</div>
            </div>
          );
        }

        return (
          <div key={i} className="wf-bar" style={animStyle}>
            <button
              className="wf-bar-link"
              onClick={() => { window.location.href = bar.href; }}
            >
              {bar.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimerRef = useRef(null);

  const openPanel = () => {
    if (open && !closing) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setClosing(false);
    setOpen(true);
  };

  const closePanel = () => {
    if (!open || closing) return;
    setClosing(true);
    const maxBars = Math.max(LEFT_BARS.length, RIGHT_BARS.length);
    const totalDuration = (maxBars - 1) * STAGGER_MS + BAR_DURATION_MS + 80;
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, totalDuration);
  };

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") closePanel(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, closing]);

  useEffect(() => {
    return () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <button
        className="wf-btn"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={openPanel}
        title="Menu"
      >
        <span className="wf-ln wf-ln-1" />
        <span className="wf-ln wf-ln-2" />
        <span className="wf-ln wf-ln-3" />
      </button>

      {open && (
        <>
          <div
            className="wf-overlay"
            onClick={closePanel}
            aria-hidden="true"
          />

          <div
            className="wf-panel"
            role="dialog"
            aria-label="Site navigation"
          >
            <div className="wf-panel-header">
              <span className="wf-panel-brand">
                <span>◆</span>Real Property Planning
              </span>
              <button
                className="wf-close-x"
                onClick={closePanel}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <div className="wf-columns">
              <NavColumn
                bars={LEFT_BARS}
                closing={closing}
                columnDelay={0}
              />
              <NavColumn
                bars={RIGHT_BARS}
                closing={closing}
                columnDelay={20}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
