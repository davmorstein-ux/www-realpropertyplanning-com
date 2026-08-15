import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface BackToResourcesProps {
  /** Button text. Defaults to generic wording that is accurate from any
   *  entry point — a reader arriving from Google was never "at" resources,
   *  so "Back to" would be a false claim for them. */
  label?: string;
  /** Destination. Pass a #fragment to land on a specific category section
   *  rather than the top of the guides index. */
  href?: string;
}

/**
 * WHY THIS IS NOT AN IMAGE
 *
 * Previously rendered /back-to-resources.webp — a picture of the words
 * "← Back to Resources". That could not be translated by i18next across the
 * site's seven languages, blurred for anyone zooming in, ignored browser
 * font-size settings, and failed WCAG 1.4.5 (Images of Text, AA).
 *
 * WHY COLOURS LIVE IN A CLASS, NOT INLINE
 *
 * index.css contains attribute-matching rules such as
 *     main [style*="rgb(15"] { color: #3D3833 !important; }
 * intended to catch light grey inline TEXT colours. But [style*=...] tests
 * the whole style attribute, so a navy background containing rgb(15, 37, 71)
 * matched and forced the label to dark grey on a dark plate. Colours in a
 * stylesheet class cannot be reached by those selectors.
 */

const STYLE_ID = "rpp-back-to-resources-v3";

const CSS = `
  .rpp-btr {
    /* Sized to the label. Previously width:100% with max-width:480px, which
       stretched the plate to 480px no matter how short the text was — that
       was the excess padding, not the padding value itself. */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: auto;
    max-width: 100%;
    padding: 11px 26px;
    box-sizing: border-box;
    background: linear-gradient(180deg, #16335a 0%, #0f2547 55%, #0b1c35 100%);
    border: 2px solid #c9a84c;
    border-radius: 3px;
    box-shadow: 0 0 0 1px #8a7233, 0 3px 9px rgba(0,0,0,0.22),
                inset 0 0 0 1px rgba(201,168,76,0.4);
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    /* Gold ants — the .marquee-hover default is #7f1d1d burgundy, which is
       nearly invisible against this navy plate. */
    --marquee-color: #d1a847;
    transition: background 0.25s ease, box-shadow 0.25s ease;
  }

  /* UNDERLINE FIX. index.css has
         main a:not([class*="btn"]):not([role="menuitem"]):not(.no-underline)
             { text-decoration-line: underline; }
     at specificity (0,3,2), which beat a plain .rpp-btr rule at (0,1,0).
     That underline is the stray white line — the visible fragment sat in the
     gap between the label span and the arrow span. Doubling the class plus
     !important wins, and the .no-underline class below is a second guard. */
  .rpp-btr.rpp-btr,
  .rpp-btr.rpp-btr:hover,
  .rpp-btr.rpp-btr span {
    text-decoration: none !important;
    text-decoration-line: none !important;
  }

  .rpp-btr.rpp-btr,
  .rpp-btr.rpp-btr .rpp-btr-label {
    color: #ffffff !important;
  }
  .rpp-btr.rpp-btr .rpp-btr-arrow {
    color: #d1a847 !important;
    font-size: 22px;
    line-height: 1;
    transition: transform 0.25s ease;
  }

  .rpp-btr:hover,
  .rpp-btr:focus-visible {
    background: linear-gradient(180deg, #1a3a63 0%, #12294a 55%, #0d1f3a 100%);
    box-shadow: 0 0 0 1px #8a7233, 0 5px 14px rgba(0,0,0,0.28),
                inset 0 0 0 1px rgba(201,168,76,0.55);
  }
  .rpp-btr:hover .rpp-btr-arrow,
  .rpp-btr:focus-visible .rpp-btr-arrow {
    transform: translateX(4px);
  }
  .rpp-btr:focus-visible {
    outline: 3px solid #d1a847;
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .rpp-btr .rpp-btr-arrow { transition: none !important; }
  }
`;

export default function BackToResources({
  label = "Explore More Guides",
  href = "/guides-and-resources",
}: BackToResourcesProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = CSS;
      document.head.appendChild(style);
    }
    setReady(true);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "36px 24px 48px" }}>
      {/* marquee-hover supplies the marching-ants border already defined in
          index.css. no-underline satisfies the global link rule's own
          exclusion list rather than relying only on the override above. */}
      <Link to={href} className="rpp-btr marquee-hover no-underline" data-ready={ready ? "1" : "0"}>
        <span className="rpp-btr-label">{label}</span>
        <span className="rpp-btr-arrow" aria-hidden="true">
          &#8594;
        </span>
      </Link>
    </div>
  );
}
