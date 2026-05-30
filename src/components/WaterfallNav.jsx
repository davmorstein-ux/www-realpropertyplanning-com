import { useState, useRef, useEffect } from "react";

const NAV_GROUPS = [
  {
    label: "Find a Professional",
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
    items: [
      { name: "Probate & Estate Sales", href: "/probate-estate-sales" },
      { name: "Senior Home Sales", href: "/senior-transitions" },
      { name: "For Executors", href: "/executors" },
      { name: "Building Your Professional Team", href: "/building-your-trusted-professional-team" },
    ],
  },
  {
    label: "Articles",
    items: [
      { name: "The Silver Tsunami", href: "/articles/silver-tsunami" },
      { name: "Senior Housing Guide", href: "/articles/senior-housing-guide" },
      { name: "How to Choose Senior Housing", href: "/articles/how-to-choose-senior-housing" },
      { name: "Senior Housing Costs", href: "/articles/senior-housing-costs" },
      { name: "Independent Living Costs", href: "/articles/independent-living-costs" },
      { name: "Memory Care Costs", href: "/articles/memory-care-costs" },
      { name: "CCRC Costs", href: "/articles/ccrc-costs" },
      { name: "Affordable Senior Housing", href: "/articles/affordable-senior-housing" },
      { name: "Aging in Place With Support", href: "/articles/aging-in-place" },
    ],
  },
  {
    label: "More",
    items: [
      { name: "About", href: "/about" },
      { name: "Resources", href: "/resources" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const ALL_BARS = NAV_GROUPS.flatMap((group) => [
  { type: "label", text: group.label },
  ...group.items.map((item) => ({ type: "link", name: item.name, href: item.href })),
]);

const STAGGER_MS = 35;
const BAR_DURATION_MS = 280;

const CSS = `
  .wf-hamburger-btn {
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
  .wf-hamburger-btn .wf-line {
    display: block;
    height: 2px;
    background: #c9a84c;
    border-radius: 2px;
    transition: width 0.25s ease;
  }
  .wf-hamburger-btn .wf-line-1 { width: 26px; }
  .wf-hamburger-btn .wf-line-2 { width: 18px; }
  .wf-hamburger-btn .wf-line-3 { width: 12px; }
  .wf-hamburger-btn:hover .wf-line-1,
  .wf-hamburger-btn:hover .wf-line-2,
  .wf-hamburger-btn:hover .wf-line-3 { width: 26px; }

  .wf-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9998;
    cursor: pointer;
  }

  .wf-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: #12203a;
    z-index: 9999;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 40px;
  }
  .wf-panel::-webkit-scrollbar { width: 4px; }
  .wf-panel::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.25); border-radius: 2px; }

  .wf-panel-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 16px 12px;
    border-bottom: 1px solid rgba(201,168,76,0.15);
    margin-bottom: 6px;
  }
  .wf-close-x {
    background: none;
    border: none;
    color: #8fa0c0;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    padding: 4px 6px;
    transition: color 0.15s;
  }
  .wf-close-x:hover { color: #ffffff; }

  .wf-bar {
    display: block;
    width: 100%;
  }
  .wf-bar-label-inner {
    padding: 12px 18px 3px;
    font-size: 10px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .wf-bar-link-inner {
    display: block;
    width: 100%;
    padding: 8px 18px 8px 26px;
    font-size: 13px;
    color: #c8d4e8;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
    line-height: 1.4;
  }
  .wf-bar-link-inner:hover {
    color: #ffffff;
    border-left-color: #c9a84c;
    background: rgba(201,168,76,0.07);
  }

  @keyframes wfBarIn {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes wfBarOut {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-20px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .wf-bar { animation: none !important; opacity: 1 !important; }
  }
`;

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const panelRef = useRef(null);
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
    const totalDuration = (ALL_BARS.length - 1) * STAGGER_MS + BAR_DURATION_MS + 50;
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, totalDuration);
  };

  const handleItemClick = (href) => {
    setOpen(false);
    setClosing(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    window.location.href = href;
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
        className="wf-hamburger-btn"
        aria-label="Open navigation menu"
        aria-expanded={open}
        onClick={openPanel}
        title="Menu"
      >
        <span className="wf-line wf-line-1" />
        <span className="wf-line wf-line-2" />
        <span className="wf-line wf-line-3" />
      </button>

      {open && (
        <>
          <div
            className="wf-overlay"
            onClick={closePanel}
            aria-hidden="true"
          />

          <div className="wf-panel" ref={panelRef} role="dialog" aria-label="Site navigation">
            <div className="wf-panel-header">
              <button
                className="wf-close-x"
                onClick={closePanel}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            {ALL_BARS.map((bar, i) => {
              const totalBars = ALL_BARS.length;
              const delayMs = closing
                ? (totalBars - 1 - i) * STAGGER_MS
                : i * STAGGER_MS;

              const animStyle = {
                animation: `${closing ? "wfBarOut" : "wfBarIn"} ${BAR_DURATION_MS}ms ease both`,
                animationDelay: `${delayMs}ms`,
              };

              if (bar.type === "label") {
                return (
                  <div key={i} className="wf-bar" style={animStyle}>
                    <div className="wf-bar-label-inner">{bar.text}</div>
                  </div>
                );
              }

              return (
                <div key={i} className="wf-bar" style={animStyle}>
                  <button
                    className="wf-bar-link-inner"
                    onClick={() => handleItemClick(bar.href)}
                  >
                    {bar.name}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
