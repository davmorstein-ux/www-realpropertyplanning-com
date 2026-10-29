
/**
 * The site's one arrow (Oct 26, 2026, David: "consistency is key", "do that
 * for ALL arrows through the site"). Since Oct 29, 2026: a thin RING with a
 * chevron, both drawn in currentColor (was a solid disc with the chevron cut
 * out, which read as dated). Next to navy link text it is a navy ring; inside
 * a navy button with white text it is a white ring. One component, every
 * context, no colour props.
 *
 * Sizes with the text (1.15em by default). Decorative: aria-hidden, the link
 * text says where it goes. Buttons styled by index.css get the same shape from
 * the CTA ARROW mask there; keep the two drawings identical (see
 * RPP_ARROW_PATH).
 *
 * Do NOT use it for arrows that mean "leads to" inside text or flow charts
 * ("Probate → Sale"), for breadcrumb separators, or for menu chevrons. Those
 * are not "go here" arrows.
 */
export const RPP_ARROW_PATH = "M15.6 10.6 L21.6 18 L15.6 25.4";
export const RPP_ARROW_PATH_LEFT = "M20.4 10.6 L14.4 18 L20.4 25.4";
/* Ring + chevron (Oct 29, 2026, David: the solid disc read as dated; he kept
   the chevron over a straight arrow as "more simple looking"). Same numbers as
   the CSS mask (--rpp-arrow-mask in index.css); change both together. */
export const RPP_ARROW_RING_R = 16.4;
export const RPP_ARROW_RING_W = 2.8;
export const RPP_ARROW_CHEVRON_W = 3.6;

type Props = {
  /** CSS size, e.g. "1.15em" (default) or 32. */
  size?: number | string;
  direction?: "right" | "left";
  className?: string;
  style?: React.CSSProperties;
};

export default function RppArrow({ size = "1.15em", direction = "right", className, style }: Props) {
  return (
    <svg
      className={`rpp-arrow${className ? ` ${className}` : ""}`}
      viewBox="0 0 36 36"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ display: "inline-block", verticalAlign: "-0.2em", flex: "none", ...style }}
    >
      <circle cx="18" cy="18" r={RPP_ARROW_RING_R} fill="none" stroke="currentColor" strokeWidth={RPP_ARROW_RING_W} />
      <path
        d={direction === "left" ? RPP_ARROW_PATH_LEFT : RPP_ARROW_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={RPP_ARROW_CHEVRON_W}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The same heavy chevron WITHOUT its disc, for buttons that are already a
 * solid circle (the search button, carousel arrows). Drawn in currentColor.
 */
export function RppChevron({ size = 22, direction = "right", className, style }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flex: "none", ...style }}
    >
      <path
        d={direction === "left" ? RPP_ARROW_PATH_LEFT : RPP_ARROW_PATH}
        transform="translate(-18 -18) scale(2)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
