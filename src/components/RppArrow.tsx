import { useId } from "react";

/**
 * The site's one arrow (Oct 26, 2026, David: "consistency is key", "do that
 * for ALL arrows through the site"): a solid disc with a heavy chevron, the
 * shape first used on the homepage Popular Resources tiles.
 *
 * The disc is drawn in currentColor with the chevron CUT OUT of it, so the
 * chevron always shows whatever is behind: on a white page next to navy link
 * text it is a navy disc with a white chevron; inside a navy button with white
 * text it is a white disc with a navy chevron. One component, every context,
 * no colour props.
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

type Props = {
  /** CSS size, e.g. "1.15em" (default) or 32. */
  size?: number | string;
  direction?: "right" | "left";
  className?: string;
  style?: React.CSSProperties;
};

export default function RppArrow({ size = "1.15em", direction = "right", className, style }: Props) {
  const id = `rpp-arrow-${useId().replace(/:/g, "")}`;
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
      <defs>
        <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
          <rect width="36" height="36" fill="#fff" />
          <path
            d={direction === "left" ? RPP_ARROW_PATH_LEFT : RPP_ARROW_PATH}
            fill="none"
            stroke="#000"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <circle cx="18" cy="18" r="18" fill="currentColor" mask={`url(#${id})`} />
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
