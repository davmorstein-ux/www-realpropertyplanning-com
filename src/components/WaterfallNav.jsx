import { useState, useRef, useEffect } from "react";

const LEFT_GROUPS = [
  {
    label: "Legal Professionals",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Estate Planning Attorneys", href: "/professionals/estate-planning-attorneys" },
      { name: "Probate & Estate Attorneys", href: "/professionals/probate-attorneys" },
      { name: "Elder Law Attorneys", href: "/professionals/elder-law-attorneys" },
      { name: "Real Estate Attorneys", href: "/professionals/real-estate-attorneys" },
      { name: "Family Law Attorneys", href: "/professionals/family-law-attorneys" },
      { name: "Divorce Attorneys", href: "/attorneys/for-divorce-attorneys" },
    ],
  },
  {
    label: "Financial & Valuation",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { name: "CPAs & Accountants", href: "/professionals/cpas" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
    ],
  },
  {
    label: "Senior Housing & Care",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
    ],
  },
  {
    label: "Property & Transition",
    href: "/building-your-trusted-professional-team",
    items: [
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
];

const RIGHT_GROUPS = [
  {
    label: "Senior Housing",
    href: "/articles/senior-housing-guide",
    items: [
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Options", href: "/articles/senior-housing-options" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Aging in Place", href: "/articles/aging-in-place" },
    ],
  },
  {
    label: "Property & Estate",
    href: "/probate-estate-sales",
    items: [
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "Senior Home Sales", href: "/senior-transitions" },
      { name: "For Executors", href: "/executors" },
    ],
  },
  {
    label: "Articles",
    href: "/articles/silver-tsunami",
    items: [
      { name: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { name: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { name: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
    ],
  },
  {
    label: "More",
    href: "/resources",
    items: [
      { name: "Resources", href: "/resources" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

function flattenGroups(groups) {
  return groups.flatMap((g, gi) => [
    { type: "label", text: g.label, href: g.href, groupIndex: gi },
    ...g.items.map(item => ({ type: "link", name: item.name, href: item.href, groupIndex: gi })),
  ]);
}

const LEFT_BARS = flattenGroups(LEFT_GROUPS);
const RIGHT_BARS = flattenGroups(RIGHT_GROUPS);

const STAGGER_MS = 45;
const BAR_DURATION_MS = 360;
const HOVER_CLOSE_DELAY = 200;

const CSS = `
  .wf-trigger {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 10001;
    border-radius: 6px;
    transition: background 0.15s;
  }
  .wf-trigger:hover {
    background: rgba(201,168,76,0.1);
  }
  .wf-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: flex-start;
  }
  .wf-trigger .wf-ln {
    display: block;
    height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    transition: width 0.25s ease;
  }
  .wf-trigger .wf-ln-1 { width: 32px; }
  .wf-trigger .wf-ln-2 { width: 22px; }
  .wf-trigger .wf-ln-3 { width: 14px; }
  .wf-trigger:hover .wf-ln-1,
  .wf-trigger:hover .wf-ln-2,
  .wf-trigger:hover .wf-ln-3 { width: 32px; }
  .wf-menu-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #c9a84c;
    text-transform: uppercase;
    user-select: none;
  }

  .wf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(26,39,68,0.3);
    z-index: 9998;
    cursor: pointer;
  }

  .wf-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
    max-width: 96vw;
    height: 100vh;
    background: #f7f4ef;
    z-index: 9999;
    border-right: 1px solid #d4c9b0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .wf-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px 12px;
    border-bottom: 1px solid #e0d8c8;
    flex-shrink: 0;
  }
  .wf-what-label {
    font-size: 13px;
    font-weight: 600;
    color: #1a2744;
    letter-spacing: 0.02em;
  }
  .wf-close-x {
    background: none;
    border: none;
    color: #c0392b;
    font-size: 22px;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.15s;
  }
  .wf-close-x:hover { background: rgba(192,57,43,0.1); }

  .wf-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
    overflow: hidden;
  }
  .wf-col {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 6px 0 16px;
  }
  .wf-col:first-child { border-right: 1px solid #e0d8c8; }
  .wf-col::-webkit-scrollbar { width: 3px; }
  .wf-col::-webkit-scrollbar-thumb { background: #d4c9b0; border-radius: 2px; }

  .wf-bar { display: block; width: 100%; }

  .wf-group-label {
    display: block;
    width: 100%;
    padding: 14px 14px 3px;
    font-size: 9px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.12s;
  }
  .wf-group-label:hover { color: #a07830; }

  .wf-divider {
    margin: 3px 14px 0;
    border: none;
    border-top: 0.5px solid #e0d8c8;
  }

  .wf-link {
    display: block;
    width: 100%;
    padding: 7px 14px 7px 20px;
    font-size: 13px;
    color: #2a3a5a;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    line-height: 1.35;
    transition: color 0.12s, border-color 0.12s, background 0.12s;
  }
  .wf-link:hover {
    color: #1a2744;
    border-left-color: #c9a84c;
    background: rgba(201,168,76,0.08);
  }

  .wf-close-footer {
    flex-shrink: 0;
    padding: 12px 18px 16px;
    border-top: 1px solid #e0d8c8;
    background: #f7f4ef;
  }
  .wf-close-btn {
    width: 100%;
    padding: 12px;
    background: #1a2744;
    color: #c9a84c;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s, color 0.15s;
  }
  .wf-close-btn:hover {
    background: #c9a84c;
    color: #1a2744;
  }

  @keyframes wfIn {
    from { opacity: 0; transform: translateX(-14px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes wfOut {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-14px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .wf-bar { animation: none !important; opacity: 1 !important; }
  }
`;

function NavColumn({ bars, closing, colDelay, onNavigate }) {
  return (
    <div className="wf-col">
      {bars.map((bar, i) => {
        const total = bars.length;
        const delay = closing
          ? (total - 1 - i) * STAGGER_MS + colDelay
          : i * STAGGER_MS + colDelay;
        const anim = {
          animation: `${closing ? "wfOut" : "wfIn"} ${BAR_DURATION_MS}ms cubic-bezier(0.22,1,0.36,1) both`,
          animationDelay: `${delay}ms`,
        };
        if (bar.type === "label") {
          return (
            <div key={i} className="wf-bar" style={anim}>
              {i > 0 && <hr className="wf-divider" />}
              <button className="wf-group-label" onClick={() => onNavigate(bar.href)}>
                {bar.text}
              </button>
            </div>
          );
        }
        return (
          <div key={i} className="wf-bar" style={anim}>
            <button className="wf-link" onClick={() => onNavigate(bar.href)}>
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
  const timerRef = useRef(null);
  const hoverCloseTimer = useRef(null);
  const panelRef = useRef(null);

  const openPanel = () => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    if (open && !closing) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setClosing(false);
    setOpen(true);
  };

  const closePanel = () => {
    if (!open || closing) return;
    setClosing(true);
    const maxBars = Math.max(LEFT_BARS.length, RIGHT_BARS.length);
    const duration = (maxBars - 1) * STAGGER_MS + BAR_DURATION_MS + 80;
    timerRef.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, duration);
  };

  const handleTriggerMouseLeave = () => {
    if (!open) return;
    hoverCloseTimer.current = setTimeout(() => {
      closePanel();
    }, HOVER_CLOSE_DELAY);
  };

  const handlePanelMouseEnter = () => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
  };

  const handlePanelMouseLeave = () => {
    hoverCloseTimer.current = setTimeout(() => {
      closePanel();
    }, HOVER_CLOSE_DELAY);
  };

  const handleNavigate = (href) => {
    setOpen(false);
    setClosing(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    window.location.href = href;
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closePanel(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closing]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <button
        className="wf-trigger"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={openPanel}
        onMouseEnter={openPanel}
        onMouseLeave={handleTriggerMouseLeave}
        title="Menu"
      >
        <span className="wf-icon">
          <span className="wf-ln wf-ln-1" />
          <span className="wf-ln wf-ln-2" />
          <span className="wf-ln wf-ln-3" />
        </span>
        <span className="wf-menu-label">Menu</span>
      </button>

      {open && (
        <>
          <div className="wf-overlay" onClick={closePanel} aria-hidden="true" />
          <div
            className="wf-panel"
            ref={panelRef}
            role="dialog"
            aria-label="Site navigation"
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
            <div className="wf-panel-header">
              <span className="wf-what-label">What are you looking for?</span>
              <button className="wf-close-x" onClick={closePanel} aria-label="Close menu">✕</button>
            </div>

            <div className="wf-columns">
              <NavColumn bars={LEFT_BARS} closing={closing} colDelay={0} onNavigate={handleNavigate} />
              <NavColumn bars={RIGHT_BARS} closing={closing} colDelay={20} onNavigate={handleNavigate} />
            </div>

            <div className="wf-close-footer">
              <button className="wf-close-btn" onClick={closePanel}>
                Close Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
