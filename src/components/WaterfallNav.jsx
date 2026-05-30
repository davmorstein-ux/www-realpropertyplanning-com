import { useState, useRef, useCallback } from "react";

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

// Flatten all items into a single list for the waterfall bars
const ALL_BARS = NAV_GROUPS.flatMap((group) => [
  { type: "label", text: group.label },
  ...group.items.map((item) => ({ type: "link", ...item })),
]);

const STAGGER_MS = 40; // delay between each bar
const BAR_DURATION_MS = 320;
const CLOSE_DELAY_MS = 150;

export default function WaterfallNav() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("in"); // "in" | "out"
  const closeTimer = useRef(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const openNav = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (open) return;
    setDirection("in");
    setAnimating(true);
    setOpen(true);
    // After all bars have landed, mark animation done
    const total = ALL_BARS.length * STAGGER_MS + BAR_DURATION_MS;
    setTimeout(() => setAnimating(false), total);
  }, [open]);

  const closeNav = useCallback(() => {
    if (!open) return;
    closeTimer.current = setTimeout(() => {
      setDirection("out");
      setAnimating(true);
      // After reverse animation completes, hide
      const total = ALL_BARS.length * STAGGER_MS + BAR_DURATION_MS;
      setTimeout(() => {
        setOpen(false);
        setAnimating(false);
      }, total);
    }, CLOSE_DELAY_MS);
  }, [open]);

  const handleItemClick = (href) => {
    setOpen(false);
    setAnimating(false);
    window.location.href = href;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeNav();
  };

  return (
    <>
      <style>{`
        .wf-nav-root {
          position: relative;
          display: inline-block;
          z-index: 1000;
        }

        /* Hamburger button */
        .wf-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-start;
        }
        .wf-hamburger span {
          display: block;
          height: 2px;
          background: #c9a84c;
          border-radius: 1px;
          transition: width 0.2s ease;
        }
        .wf-hamburger span:nth-child(1) { width: 24px; }
        .wf-hamburger span:nth-child(2) { width: 18px; }
        .wf-hamburger span:nth-child(3) { width: 12px; }
        .wf-hamburger:hover span:nth-child(1) { width: 24px; }
        .wf-hamburger:hover span:nth-child(2) { width: 24px; }
        .wf-hamburger:hover span:nth-child(3) { width: 24px; }

        /* Panel */
        .wf-panel {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 300px;
          background: #12203a;
          z-index: 999;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 20px 0 40px;
          box-shadow: 4px 0 24px rgba(0,0,0,0.4);
        }

        /* Panel header */
        .wf-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px 16px;
          border-bottom: 1px solid rgba(201,168,76,0.2);
          margin-bottom: 8px;
        }
        .wf-panel-logo {
          font-size: 13px;
          font-weight: 500;
          color: #c9a84c;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .wf-close-btn {
          background: none;
          border: none;
          color: #8fa0c0;
          font-size: 20px;
          cursor: pointer;
          padding: 4px;
          line-height: 1;
          transition: color 0.15s;
        }
        .wf-close-btn:hover { color: #ffffff; }

        /* Individual bars */
        .wf-bar {
          display: block;
          width: 100%;
          overflow: hidden;
          transform-origin: left center;
        }

        .wf-bar-label {
          padding: 14px 20px 4px;
          font-size: 11px;
          font-weight: 600;
          color: #c9a84c;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: default;
          user-select: none;
        }

        .wf-bar-link {
          display: block;
          padding: 9px 20px 9px 28px;
          font-size: 13px;
          color: #c8d4e8;
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
          cursor: pointer;
          background: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }
        .wf-bar-link:hover {
          color: #ffffff;
          border-left-color: #c9a84c;
          background: rgba(201,168,76,0.06);
        }

        /* Overlay */
        .wf-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 998;
        }

        /* Waterfall animation — bar enters */
        @keyframes barIn {
          from {
            opacity: 0;
            transform: translateX(-18px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateX(0);
            max-height: 80px;
          }
        }

        /* Waterfall animation — bar exits */
        @keyframes barOut {
          from {
            opacity: 1;
            transform: translateX(0);
            max-height: 80px;
          }
          to {
            opacity: 0;
            transform: translateX(-18px);
            max-height: 0;
          }
        }

        /* Reduced motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .wf-panel {
            transition: opacity 0.2s ease;
          }
          .wf-bar {
            animation: none !important;
            opacity: 1 !important;
            max-height: 80px !important;
            transform: none !important;
          }
        }

        /* Scrollbar styling */
        .wf-panel::-webkit-scrollbar { width: 4px; }
        .wf-panel::-webkit-scrollbar-track { background: transparent; }
        .wf-panel::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 2px; }
      `}</style>

      {/* Hamburger trigger */}
      <div
        className="wf-nav-root"
        onMouseEnter={openNav}
        onMouseLeave={closeNav}
        onKeyDown={handleKeyDown}
      >
        <button
          className="wf-hamburger"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => (open ? closeNav() : openNav())}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Invisible bridge: keeps panel open when cursor travels from button to panel */}
        {open && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "320px",
              height: "100vh",
              zIndex: 997,
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="wf-overlay"
          onClick={closeNav}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      {open && (
        <nav
          className="wf-panel"
          aria-label="Site navigation"
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
          onMouseLeave={closeNav}
        >
          <div className="wf-panel-header">
            <span className="wf-panel-logo">Real Property Planning</span>
            <button
              className="wf-close-btn"
              onClick={closeNav}
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          {ALL_BARS.map((bar, i) => {
            const totalBars = ALL_BARS.length;
            // "in": bar i has delay i * STAGGER_MS
            // "out": bar i has delay (totalBars - 1 - i) * STAGGER_MS (last bar exits first)
            const delayIn = i * STAGGER_MS;
            const delayOut = (totalBars - 1 - i) * STAGGER_MS;
            const delay = direction === "in" ? delayIn : delayOut;

            const animStyle = prefersReducedMotion
              ? {}
              : {
                  animation: `${direction === "in" ? "barIn" : "barOut"} ${BAR_DURATION_MS}ms ease forwards`,
                  animationDelay: `${delay}ms`,
                  opacity: direction === "in" ? 0 : 1,
                };

            if (bar.type === "label") {
              return (
                <div key={i} className="wf-bar" style={animStyle}>
                  <div className="wf-bar-label">{bar.text}</div>
                </div>
              );
            }

            return (
              <div key={i} className="wf-bar" style={animStyle}>
                <button
                  className="wf-bar-link"
                  onClick={() => handleItemClick(bar.href)}
                >
                  {bar.name}
                </button>
              </div>
            );
          })}
        </nav>
      )}
    </>
  );
}
