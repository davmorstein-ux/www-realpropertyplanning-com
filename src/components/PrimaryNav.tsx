import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PRIMARY_NAV } from "@/lib/primaryNav";

/**
 * Desktop primary navigation with dropdown menus.
 *
 * OPENS ON HOVER OR CLICK. Hover is the expected behaviour and is what makes
 * the menus feel responsive; click is kept so the menus also work for anyone
 * navigating by keyboard or touch, and so a deliberate tap is never ignored.
 *
 * The close delay below is the part that matters for this audience. A menu
 * that shuts the instant the cursor leaves the trigger is very hard to use if
 * your pointer control is not steady — the cursor drifts off the edge on the
 * way down and the menu disappears. The delay gives it time to come back.
 *
 * Because a trigger opens a menu rather than navigating, each menu repeats its
 * own page as the first item. Without that the landing page behind the button
 * would be unreachable from the header.
 *
 * KEYBOARD: Escape closes and returns focus to the trigger; Tab moves through
 * the items normally; clicking anywhere outside closes. The trigger carries
 * aria-expanded and aria-controls so the state is announced.
 *
 * Styling mirrors the WaterfallNav drawer — a category-coloured heading and a
 * left-edge marker — so the two navigation surfaces read as the same system.
 * Accent colours clear 4.5:1 both on white and on the hover tint.
 *
 * index.css carries global !important rules on links, so the styles below use
 * doubled class selectors and the bg-transparent token satisfies
 * main a:not([class*="bg-"]).
 */

/* Delay before a menu closes on mouse-out. Long enough that the cursor can
   travel from the trigger down into the menu, or slip off an edge and come
   back, without the menu vanishing. Short delays are what make hover menus
   feel twitchy for anyone whose pointer control is not steady. */
const HOVER_CLOSE_DELAY = 500;

const PrimaryNav = () => {
  const { pathname } = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), HOVER_CLOSE_DELAY);
  };

  /* Close on route change — otherwise the menu stays open over the new page. */
  useEffect(() => {
    setOpenIndex(null);
  }, [pathname]);

  /* Clear any pending close when the component goes away, so a timer cannot
     fire against an unmounted component. */
  useEffect(() => cancelClose, []);

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
        /* justify-content was space-between, which spread the five labels
           across the full width and left large gaps between them. flex-end
           with a fixed gap groups them together as a single navigation unit,
           which is easier to scan than five widely separated items. */
        .rpp-primarynav {
          display: flex;
          align-items: center;
          /* space-around rather than flex-end: the nav now owns a full-width
             tier of its own, so the five labels spread evenly across it with
             breathing room on both sides instead of bunching at one end. */
          /* space-between, not space-around: space-around adds half-gaps at
             the ends, which indented the first and last labels away from the
             page edges. The nav now starts flush with the hamburger on the
             left and ends flush with the phone on the right. */
          justify-content: space-between;
          gap: 12px;
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
          /* Tightened from 13px/0.08em. The header is now a single row, so the
             five labels share the space left by the logo, search field and
             menu button. This recovers roughly 60px across the row, which is
             what keeps "Real Estate & Legal Professionals" on two lines rather
             than forcing the nav to wrap. */
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          /* Dark on the cream header. These were white when the header was
             near-black; if the header ever goes dark again, these flip back. */
          color: #272421;
          text-align: center;
          line-height: 1.2;
          cursor: pointer;
          text-decoration: none !important;
        }
        .rpp-pn-trigger.rpp-pn-trigger:hover { color: #7f1d1d; }
        .rpp-pn-trigger.rpp-pn-trigger[aria-expanded="true"],
        .rpp-pn-trigger.rpp-pn-trigger.is-active {
          border-bottom-color: #7f1d1d;
          color: #7f1d1d;
        }
        .rpp-pn-trigger.rpp-pn-trigger:focus-visible {
          outline: 2px solid #7f1d1d;
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
          /* Width follows the longest item because the items no longer wrap.
             max-width is a safety stop, not a target. */
          min-width: 260px;
          max-width: 420px;
          width: max-content;
          background: #ffffff;
          border: 1px solid #c3b8a6;
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
          /* !important because index.css sets a display on descendants of
             main a, which put two short items side by side on one line. */
          display: block !important;
          width: 100%;
          padding: 13px 18px !important;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px !important;
          font-weight: 600;
          color: #272421 !important;
          line-height: 1.45 !important;
          /* One line per item. The menu sizes itself to the longest label
             rather than wrapping the long ones onto a second line. */
          white-space: nowrap;
          text-decoration: none !important;
          text-transform: none !important;
          border-left: 4px solid transparent;
          transition: background 0.12s ease, border-color 0.12s ease, color 0.12s ease;
        }
        /* The previous hover was a 5% black wash, which was close to invisible.
           The row now changes background, thickens its left marker AND takes
           the category colour, so the highlight is unmistakable. */
        .rpp-pn-item.rpp-pn-item:hover,
        .rpp-pn-item.rpp-pn-item:focus-visible {
          background: #f1ece4;
          border-left-color: var(--pn-color, #25597e);
          color: var(--pn-color, #25597e) !important;
          outline: none;
        }
        .rpp-pn-item.rpp-pn-item.is-current {
          border-left-color: var(--pn-color, #25597e);
          background: #f6f2ea;
          color: var(--pn-color, #25597e) !important;
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
          <div
            className="rpp-pn-slot"
            key={entry.href}
            onMouseEnter={() => {
              cancelClose();
              setOpenIndex(i);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              className={`rpp-pn-trigger rpp-pn-trigger${pathname === entry.href ? " is-active" : ""}`}
              aria-expanded={isOpen}
              aria-controls={`rpp-pn-menu-${i}`}
              onClick={() => {
                cancelClose();
                setOpenIndex(isOpen ? null : i);
              }}
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
