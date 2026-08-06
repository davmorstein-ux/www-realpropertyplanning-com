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
 * WHY THE COLOURS LIVE IN A CLASS, NOT INLINE
 *
 * index.css contains attribute-matching rules such as
 *     main [style*="rgb(15"] { color: #3D3833 !important; }
 * intended to catch light grey inline TEXT colours. But [style*=...] tests
 * the whole style attribute, so a navy background containing rgb(15, 37, 71)
 * matched, and the label was forced to dark grey on a dark plate.
 *
 * Keeping colours in a stylesheet class instead of the style attribute means
 * those selectors cannot match this component at all. Layout values stay
 * inline; anything colour-related lives in the class below.
 */

const STYLE_ID = "rpp-back-to-resources-v2";

const CSS = `
  .rpp-btr {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    max-width: 480px;
    width: 100%;
    min-height: 56px;
    padding: 16px 32px;
    box-sizing: border-box;
    background: linear-gradient(180deg, #16335a 0%, #0f2547 55%, #0b1c35 100%);
    border: 3px solid #c9a84c;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #8a7233, 0 3px 10px rgba(0,0,0,0.22),
                inset 0 0 0 1px rgba(201,168,76,0.4);
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 21px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    line-height: 1.25;
    transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  }
  /* Doubled class beats the global inline-attribute and link-colour rules. */
  .rpp-btr.rpp-btr,
  .rpp-btr.rpp-btr .rpp-btr-label {
    color: #ffffff !important;
  }
  .rpp-btr.rpp-btr .rpp-btr-arrow {
    color: #d1a847 !important;
    font-size: 24px;
    line-height: 1;
    transition: transform 0.25s ease;
  }
  .rpp-btr:hover,
  .rpp-btr:focus-visible {
    background: linear-gradient(180deg, #1a3a63 0%, #12294a 55%, #0d1f3a 100%);
    box-shadow: 0 0 0 1px #8a7233, 0 6px 18px rgba(0,0,0,0.28),
                inset 0 0 0 1px rgba(201,168,76,0.55);
    transform: translateY(-2px);
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
    .rpp-btr, .rpp-btr .rpp-btr-arrow { transition: none !important; }
    .rpp-btr:hover { transform: none !important; }
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
    <div style={{ textAlign: "center", padding: "48px 24px 64px" }}>
      <Link to={href} className="rpp-btr" data-ready={ready ? "1" : "0"}>
        <span className="rpp-btr-label">{label}</span>
        <span className="rpp-btr-arrow" aria-hidden="true">
          &#8594;
        </span>
      </Link>
    </div>
  );
}
