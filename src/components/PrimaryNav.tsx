import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PRIMARY_NAV } from "@/lib/primaryNav";

/**
 * Desktop primary navigation with dropdown menus.
 *
 * CLICK, NOT HOVER — deliberately. Hover menus open when a cursor merely
 * passes over the trigger, which for readers with unsteady pointer control
 * means menus appearing unbidden while they are trying to reach something
 * else. They also do nothing on a touchscreen. Click is slower by one action
 * and considerably calmer, which is the right trade for this audience.
 *
 * Because the trigger opens a menu rather than navigating, each menu repeats
 * its own page as the first item. Without that the landing page behind the
 * button would be unreachable from the header.
 *
 * KEYBOARD: Escape closes and returns focus to the trigger; Tab moves through
 * the items normally; clicking anywhere outside closes. The trigger carries
 * aria-expanded and aria-controls so the state is announced.
 *
 * Styling mirrors the WaterfallNav drawer — a category-coloured heading and a
 * left-edge marker that fills in on hover — so the two navigation surfaces
 * read as the same system. Accent colours all clear 4.5:1 on white.
 *
 * index.css carries global !important rules on links, so the styles below use
 * doubled class selectors and the bg-transparent token satisfies
 * main a:not([class*="bg-"]).
 */
const PrimaryNav = () => {
  const { pathname } = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  /* Close on route change — otherwise the menu stays open over the new page. */
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  useEffect(() => {
    if (openIndex === null) return;

    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const i = openIndex;
        setOpenIndex(null);
        triggerRefs.current[i]?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex]);

  return (
    <div className="rpp-primarynav" ref={navRef}>
      <style>{`
        .rpp-primarynav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          min-width: 0;
        }
        .rpp-pn-slot { position: relative; }

        .rpp-pn-trigger.rpp-pn-trigger {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 5px 8px;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          font-family: 'Raleway', 'Gill Sans', 'Century Gothic', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
          text-align: center;
          line-height: 1.2;
          cursor: pointer;
          text-decoration: none !important;
        }
        .rpp-pn-trigger.rpp-pn-trigger:hover { color: #ffffff; }
        .rpp-pn-trigger.rpp-pn-trigger[aria-expanded="true"],
        .rpp-pn-trigger.rpp-pn-trigger.is-active {
          border-bottom-color: #ffffff;
        }
        .rpp-pn-trigger.rpp-pn-trigger:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 3px;
          border-radius: 3px;
        }
        .rpp-pn-line { display: block; white-space: nowrap; }

        /* Caret rotates when open — the only motion here, and it conveys state
           rather than decorating. */
        .rpp-pn-caret {
          display: block;
          font-size: 9px;
          line-height: 1;
          margin-top: 2px;
          opacity: 0.75;
          transition: transform 0.15s ease;
        }
        .rpp-pn-trigger[aria-expanded="true"] .rpp-pn-caret { transform: rotate(180deg); }

        .rpp-pn-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 60;
          min-width: 290px;
          max-width: 340px;
          background: #ffffff;
          border: 1px solid #d2c9bb;
          border-top: 4px solid var(--pn-color, #25597e);
          border-radius: 8px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.22);
          padding: 6px 0 8px;
        }
        /* Menus near the right edge would otherwise overflow the viewport. */
        .rpp-pn-slot:last-child .rpp-pn-menu { left: auto; right: 0; transform: none; }

        .rpp-pn-menu-heading {
          padding: 10px 18px 8px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--pn-color, #25597e);
        }

        .rpp-pn-item.rpp-pn-item {
          display: block;
          padding: 9px 18px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px !important;
          font-weight: 600;
          color: #272421 !important;
          line-height: 1.35;
          text-decoration: none !important;
          text-transform: none !important;
          border-left: 3px solid transparent;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .rpp-pn-item.rpp-pn-item:hover,
        .rpp-pn-item.rpp-pn-item:focus-visible {
          background: rgba(0,0,0,0.05);
          border-left-color: var(--pn-color, #25597e);
          outline: none;
        }
        .rpp-pn-item.rpp-pn-item.is-current {
          border-left-color: var(--pn-color, #25597e);
          background: rgba(0,0,0,0.04);
        }

        @media (max-width: 950px) {
          .rpp-primarynav { display: none; }
        }
      `}</style>

      {PRIMARY_NAV.map((entry, i) => {
        const isOpen = openIndex === i;

        if (!entry.items) {
          return (
            <div className="rpp-pn-slot" key={entry.href}>
              <Link
                to={entry.href}
                className={`rpp-pn-trigger rpp-pn-trigger bg-transparent${pathname === entry.href ? " is-active" : ""}`}
              >
                {entry.lines.map((line) => (
                  <span className="rpp-pn-line" key={line}>
                    {line}
                  </span>
                ))}
              </Link>
            </div>
          );
        }

        return (
          <div className="rpp-pn-slot" key={entry.href}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              className={`rpp-pn-trigger rpp-pn-trigger${pathname === entry.href ? " is-active" : ""}`}
              aria-expanded={isOpen}
              aria-controls={`rpp-pn-menu-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {entry.lines.map((line) => (
                <span className="rpp-pn-line" key={line}>
                  {line}
                </span>
              ))}
              <span className="rpp-pn-caret" aria-hidden="true">
                &#9660;
              </span>
            </button>

            {isOpen ? (
              <div
                className="rpp-pn-menu"
                id={`rpp-pn-menu-${i}`}
                style={{ ["--pn-color" as string]: entry.color }}
              >
                <div className="rpp-pn-menu-heading">{entry.lines.join(" ")}</div>
                {entry.items.map((item) => (
                  <Link
                    key={item.href + item.name}
                    to={item.href}
                    className={`rpp-pn-item rpp-pn-item bg-transparent${pathname === item.href ? " is-current" : ""}`}
                    onClick={() => setOpenIndex(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default PrimaryNav;
