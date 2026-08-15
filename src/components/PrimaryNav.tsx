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
        .rpp-primarynav {
          display: flex;
          align-items: center;
          /* All five sit together at one even gap, LEFT-aligned — the group
             begins right after the search field's trailing margin, exactly
             where the first four have always begun. About used to be pushed
             away from them by margin-left:auto into a fixed slot beneath the
             phone button; removing that lets it fall in beside Real Estate &
             Legal Professionals without disturbing the other four.

             Do not change this to flex-end. That right-aligns the whole row,
             which slides all five toward the phone button and moves the four
             that were already correctly placed. */
          justify-content: flex-start;
          /* Scales with the window. At 1280px the four labels plus a fixed
             40px gap overflow the space left by the search field and the
             phone-width slot; at 1440px and up they fit comfortably. The clamp
             keeps the spacing generous on wide screens and lets it tighten
             rather than wrap on a laptop. Shorter labels are the only way to
             have both. */
          /* Raised from 16px minimum. On a narrow screen the widest label —
             "Real Estate & Legal Professionals" — sat close to its divider
             while the shorter ones had room to spare. The extra gap plus the
             wider trigger padding above evens that out. */
          --pn-gap: clamp(24px, 2vw, 34px);
          gap: var(--pn-gap);
          flex: 1;
          min-width: 0;
        }
        .rpp-pn-slot { position: relative; }
        /* .rpp-pn-slot--last is still applied in the JSX but no longer
           repositions anything. It previously carried margin-left:auto and
           width:var(--pn-phone-slot) to park About under the phone button.
           (No backticks in this block — it lives inside a template literal.)
           The class is kept as a hook — the menu-alignment rule further down
           still needs a way to name the final entry — but it must not reintroduce
           spacing, or About separates from the group again.

           Header.tsx still measures the phone button and sets --pn-phone-slot.
           That variable is now unused here; harmless, and left in place in case
           the isolated layout is ever wanted back. */
        .rpp-pn-slot--last { flex-shrink: 0; }

        /* Divider between the grouped entries, drawn in CSS rather than added
           to the markup — no JSX changes, and it cannot get out of step with
           the number of items.

           A drawn rule rather than a "|" character: two of these labels wrap to
           two lines, and a pipe glyph spans only one line's height, so it would
           float beside the first line instead of dividing the whole item.

           Sits in the middle of the gap, so it stays centred as the gap scales
           with the window. Deliberately faint: the job is to separate, not to
           decorate.

           Every entry after the first now gets one, About included. The
           suppression that used to sit here existed only because About stood
           apart in its own slot, where a divider would have implied it belonged
           to a rhythm it wasn't part of. It is part of that rhythm now. */
        .rpp-pn-slot + .rpp-pn-slot::before {
          content: "";
          position: absolute;
          left: calc(var(--pn-gap, 24px) / -2);
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 30px;
          background: rgba(39, 36, 33, 0.22);
        }

        .rpp-pn-trigger.rpp-pn-trigger {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 5px 14px;
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          font-family: 'DM Sans', system-ui, sans-serif;
          /* Tightened from 13px/0.08em. The header is now a single row, so the
             five labels share the space left by the logo, search field and
             menu button. This recovers roughly 60px across the row, which is
             what keeps "Real Estate & Legal Professionals" on two lines rather
             than forcing the nav to wrap. */
          /* !important because index.css sizes the two element types this
             component renders differently: the four entries with menus are
             <button> and pick up "button { font-size: 18px !important }",
             while the entry without one is an <a> and picks up
             "header a { font-size: max(1rem, 16px) !important }". That is why
             ABOUT rendered smaller than its neighbours. */
          font-size: 13px !important;
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

        /* Reserves two lines of height for EVERY label, whether it has one or
           two. The trigger is a centred flex column, so a one-line entry used
           to be a shorter stack and its caret rode up — "Articles & Guides"
           and "About" sat visibly higher than their two-line neighbours.

           2.4em is exactly two lines at this component's 13px / 1.2. Fixing
           the height here rather than forcing "Articles &" / "Guides" onto two
           lines keeps the labels reading naturally, and it holds for any label
           added later regardless of how many lines it takes. */
        .rpp-pn-lines {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 2.4em;
        }

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
        const slotClass = `rpp-pn-slot${i === PRIMARY_NAV.length - 1 ? " rpp-pn-slot--last" : ""}`;

        if (!entry.items) {
          return (
            <div className={slotClass} key={entry.href}>
              <Link
                to={entry.href}
                className={`rpp-pn-trigger rpp-pn-trigger bg-transparent${pathname === entry.href ? " is-active" : ""}`}
              >
                <span className="rpp-pn-lines">
                  {entry.lines.map((line) => (
                    <span className="rpp-pn-line" key={line}>
                      {line}
                    </span>
                  ))}
                </span>
                {/* Reserves the caret's height so a link without a menu sits on
                    the same baseline as the ones with menus. Without it the
                    caret-less entry floated lower than its neighbours. */}
                <span className="rpp-pn-caret" aria-hidden="true" style={{ visibility: "hidden" }}>
                  &#9660;
                </span>
              </Link>
            </div>
          );
        }

        return (
          <div
            className={slotClass}
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
              <span className="rpp-pn-lines">
                {entry.lines.map((line) => (
                  <span className="rpp-pn-line" key={line}>
                    {line}
                  </span>
                ))}
              </span>
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
