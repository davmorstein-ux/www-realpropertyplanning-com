import { useState, useRef, useEffect } from "react";

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const CATEGORIES = [
  {
    label: "Legal Professionals",
    color: "#ac1515",
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
    label: "Real Estate & Professionals",
    color: "#aa570e",
    items: [
      { name: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
      { name: "CPAs & Accountants", href: "/professionals/cpas" },
      { name: "Certified Appraisers", href: "/real-estate-appraiser" },
      { name: "Mortgage Lenders", href: "/mortgage-lenders" },
      { name: "Real Estate Brokers", href: "/realtor" },
      { name: "Estate Liquidators", href: "/estate-liquidators" },
    ],
  },
  {
    label: "Senior Housing",
    color: "#1d7239",
    items: [
      { name: "Senior Living Advisors", href: "/senior-living-advisors" },
      { name: "Senior Move Managers", href: "/senior-move-managers" },
      { name: "Aging in Place", href: "/aging-in-place-staying-home-safely" },
      { name: "Downsizing & Preparing for Transition", href: "/downsizing-preparing-for-transition" },
    ],
  },
  {
    label: "Senior Care",
    color: "#117078",
    items: [
      { name: "Medicare & Benefits Advisors", href: "/medicare-providers" },
      { name: "Aging Life Care Managers", href: "/aging-life-care-managers" },
      { name: "Understanding Housing & Care Options", href: "/understanding-housing-care-options" },
    ],
  },
  {
    label: "Guides & Articles",
    color: "#284dbd",
    items: [
      { name: "All Resources & Guides", href: "/guides-and-resources" },
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "Aging in Place", href: "/articles/aging-in-place" },
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "For Executors", href: "/executors" },
    ],
  },
  {
    label: "Long-Term Care",
    color: "#6b30a6",
    items: [
      { name: "Long-Term Care Overview", href: "/long-term-care" },
      { name: "Nursing Homes", href: "/long-term-care/nursing-homes" },
      { name: "Nurse Delegation", href: "/long-term-care/nurse-delegation" },
      { name: "Medicaid & Long-Term Care", href: "/long-term-care/medicaid-and-long-term-care" },
      { name: "WA Cares Fund", href: "/long-term-care/wa-cares" },
      { name: "Hospital Discharge Planning", href: "/long-term-care/hospital-discharge-planning" },
    ],
  },
  {
    label: "More",
    color: "#a82466",
    items: [
      { name: "AFH Club", href: "/afh-club" },
      { name: "AFH Calculators", href: "/afh-club/calculators" },
      { name: "Selling Your AFH at Retirement", href: "/afh-club/selling-your-business-at-retirement" },
      { name: "Cost of Care Calculator", href: "/cost-of-care-calculator" },
      { name: "Resources", href: "/resources" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const PANEL_FADE_MS = 1400;
const PANEL_HOVER_CLOSE_DELAY = 1500;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300&display=swap');
  .wf-wrap {
    position: relative;
    display: inline-block;
    z-index: 10001;
  }
  .wf-trigger {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: background 0.3s ease;
  }
  .wf-trigger:hover { background: rgba(232,201,122,0.12); }

  .wf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10,22,40,0.3);
    z-index: 9998;
    cursor: pointer;
  }

  .wf-panel {
    position: fixed;
    top: 64px;
    left: 0;
    width: 660px;
    max-width: 96vw;
    height: calc(100vh - 64px);
    background: #f7f4ef;
    z-index: 9999;
    border-right: 1px solid #d2b2b4;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .wf-panel-entering {
    animation: panelIn ${PANEL_FADE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .wf-panel-exiting {
    animation: panelOut ${PANEL_FADE_MS}ms cubic-bezier(0.22,1,0.36,1) forwards;
  }
  @keyframes panelIn {
    0%   { opacity: 0; transform: translateX(-32px); }
    60%  { opacity: 0.8; transform: translateX(-4px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes panelOut {
    0%   { opacity: 1; transform: translateX(0); }
    40%  { opacity: 0.6; transform: translateX(-8px); }
    100% { opacity: 0; transform: translateX(-32px); }
  }

  .wf-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px 12px;
    border-bottom: 1px solid #dfc9cb;
    flex-shrink: 0;
  }
  .wf-what-label {
    font-size: 13px;
    font-weight: 600;
    color: #280a0c;
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
    transition: background 0.3s ease;
  }
  .wf-close-x:hover { background: rgba(192,57,43,0.1); }

  .wf-body {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .wf-rail {
    width: 220px;
    flex-shrink: 0;
    border-right: 1px solid #dfc9cb;
    overflow-y: auto;
    padding: 8px 0;
  }
  .wf-rail::-webkit-scrollbar { width: 3px; }
  .wf-rail::-webkit-scrollbar-thumb { background: #d2b2b4; border-radius: 2px; }

  .wf-rail-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 13px 16px;
    font-size: 13.5px;
    font-weight: 800;
    color: #280a0c;
    letter-spacing: 0.04em;
    background: var(--cat-bg-rest, transparent);
    border: none;
    border-left: 5px solid var(--cat-color, transparent);
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .wf-rail-btn-inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .wf-rail-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: var(--cat-color, #7f2028);
    flex-shrink: 0;
  }
  .wf-rail-btn:hover { background: var(--cat-bg-active, rgba(0,0,0,0.08)); }
  .wf-rail-btn.wf-active {
    background: var(--cat-bg-active, rgba(0,0,0,0.08));
    color: var(--cat-color, #7f2028);
  }
  .wf-rail-chevron {
    font-size: 13px;
    color: currentColor;
    opacity: 0;
    transition: opacity 0.25s ease;
    flex-shrink: 0;
    margin-left: 8px;
  }
  .wf-rail-btn.wf-active .wf-rail-chevron { opacity: 1; }

  .wf-flyout {
    flex: 1;
    overflow-y: auto;
    padding: 10px 0 16px;
  }
  .wf-flyout::-webkit-scrollbar { width: 3px; }
  .wf-flyout::-webkit-scrollbar-thumb { background: #d2b2b4; border-radius: 2px; }

  .wf-flyout-heading {
    padding: 8px 20px 12px;
    font-size: 13px;
    font-weight: 800;
    color: var(--cat-color, #7f2028);
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .wf-item {
    display: block;
    width: 100%;
    padding: 9px 20px;
    font-size: 14px;
    font-weight: 700;
    color: #280a0c;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    line-height: 1.4;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }
  .wf-item:hover {
    color: #280a0c;
    border-left-color: var(--cat-color, #7f2028);
    background: rgba(0,0,0,0.05);
  }

  .wf-close-footer {
    flex-shrink: 0;
    padding: 10px 18px 14px;
    border-top: 1px solid #dfc9cb;
    background: #f7f4ef;
  }
  .wf-close-btn {
    width: 100%;
    padding: 11px;
    background: #280a0c;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.4s ease;
  }
  .wf-close-btn:hover { background: #7f2028; color: #ffffff; }

  @media (max-width: 640px) {
    .wf-panel { width: 100vw; max-width: 100vw; }
    .wf-body { flex-direction: column; overflow-y: auto; }
    .wf-rail {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #dfc9cb;
      overflow-y: visible;
      flex-shrink: 0;
    }
    .wf-flyout { overflow-y: visible; }
  }

  @media (prefers-reduced-motion: reduce) {
    .wf-panel { animation: none !important; opacity: 1 !important; }
  }
`;

function NavRail({ categories, activeIndex, onSelect }) {
  return (
    <div className="wf-rail">
      {categories.map((cat, i) => (
        <button
          key={cat.label}
          data-nav-button
          className={`wf-rail-btn${activeIndex === i ? " wf-active" : ""}`}
          style={{
            "--cat-color": cat.color,
            "--cat-bg-rest": hexToRgba(cat.color, 0.1),
            "--cat-bg-active": hexToRgba(cat.color, 0.2),
          }}
          aria-current={activeIndex === i}
          onMouseEnter={() => onSelect(i)}
          onClick={() => onSelect(i)}
        >
          <span className="wf-rail-btn-inner">
            <span className="wf-rail-dot" aria-hidden="true" />
            <span>{cat.label}</span>
          </span>
          <span className="wf-rail-chevron" aria-hidden="true">
            &rarr;
          </span>
        </button>
      ))}
    </div>
  );
}

function NavFlyout({ category, onNavigate }) {
  if (!category) return <div className="wf-flyout" />;
  return (
    <div className="wf-flyout" style={{ "--cat-color": category.color }}>
      <div className="wf-flyout-heading">{category.label}</div>
      {category.items.map((item) => (
        <button key={item.href} data-nav-button className="wf-item" onClick={() => onNavigate(item.href)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const exitTimerRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const openPanel = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    setExiting(false);
    setOpen(true);
  };

  const closePanel = () => {
    if (!open || exiting) return;
    setExiting(true);
    exitTimerRef.current = setTimeout(() => {
      setOpen(false);
      setExiting(false);
      setActiveIndex(0);
    }, PANEL_FADE_MS);
  };

  const cancelClose = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  };

  const scheduleClose = () => {
    hoverTimerRef.current = setTimeout(closePanel, PANEL_HOVER_CLOSE_DELAY);
  };

  const handleNavigate = (href) => {
    setOpen(false);
    setExiting(false);
    setActiveIndex(0);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    window.location.href = href;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, exiting]);

  useEffect(
    () => () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    },
    [],
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="wf-wrap" onMouseEnter={openPanel} onMouseLeave={scheduleClose}>
        <button
          className="wf-trigger"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={openPanel}
          title="Menu"
        >
          {/* Hamburger icon only — no MENU text */}
          <span
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "26px",
              height: "20px",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span
              style={{ display: "block", height: "2.5px", background: "#FFEF00", borderRadius: "1px", width: "100%" }}
            />
            <span
              style={{ display: "block", height: "2.5px", background: "#FFEF00", borderRadius: "1px", width: "75%" }}
            />
            <span
              style={{ display: "block", height: "2.5px", background: "#FFEF00", borderRadius: "1px", width: "100%" }}
            />
          </span>
        </button>
      </div>

      {open && (
        <>
          <div className="wf-overlay" onClick={closePanel} aria-hidden="true" />
          <div
            className={`wf-panel${exiting ? " wf-panel-exiting" : " wf-panel-entering"}`}
            role="dialog"
            aria-label="Site navigation"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="wf-panel-header">
              <span className="wf-what-label">What are you looking for?</span>
              <button className="wf-close-x" data-nav-button onClick={closePanel} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div className="wf-body">
              <NavRail categories={CATEGORIES} activeIndex={activeIndex} onSelect={setActiveIndex} />
              <NavFlyout category={CATEGORIES[activeIndex]} onNavigate={handleNavigate} />
            </div>

            <div className="wf-close-footer">
              <button className="wf-close-btn" data-nav-button onClick={closePanel}>
                Close Menu
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
