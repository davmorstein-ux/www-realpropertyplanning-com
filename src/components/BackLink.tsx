import { Link } from "react-router-dom";
import { RPP_ARROW_PATH_LEFT } from "@/components/RppArrow";

/**
 * The site's one "Back to …" button (Oct 26, 2026; David chose option A).
 *
 * Bold navy words, NO underline (no CTA on the site is underlined), and a white
 * circle with a thin green ring holding a heavy green left-pointing chevron,
 * the same chevron as RppArrow. Every "Back to …" on the site uses this; the
 * old navy block buttons, image buttons and underlined "← Back to" links were
 * replaced with it. On hover the circle fills green and the chevron turns
 * white.
 *
 * `center` wraps it in a centred block with room above and below, for the
 * bottom-of-page use; leave it off for the top-of-page use.
 */
const GREEN = "#0f6b56";

export const BACK_LINK_CSS = `
a.rpp-backlink.rpp-backlink {
  display: inline-flex !important;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-size: 19px !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  color: #1B3A6B !important;
  text-decoration: none !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}
a.rpp-backlink.rpp-backlink * { text-decoration: none !important; }
a.rpp-backlink.rpp-backlink::after, a.rpp-backlink.rpp-backlink::before { content: none !important; display: none !important; }
a.rpp-backlink span.rpp-backlink-disc {
  flex: none;
  width: 38px; height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid ${GREEN};
  color: ${GREEN};
  display: inline-grid;
  place-items: center;
  box-shadow: 0 2px 5px -1px rgba(0,0,0,.22);
  transition: background-color .15s ease, color .15s ease, transform .15s ease;
}
a.rpp-backlink span.rpp-backlink-text.rpp-backlink-text {
  font-size: inherit !important; font-weight: inherit !important; color: inherit !important;
}
@media (hover: hover) {
  a.rpp-backlink:hover span.rpp-backlink-disc { background: ${GREEN}; color: #ffffff; transform: translateX(-2px); }
}
a.rpp-backlink.rpp-backlink:focus-visible { outline: 3px solid #1B3A6B; outline-offset: 3px; border-radius: 8px; }
`;

type Props = { to: string; label: string; center?: boolean; className?: string; style?: React.CSSProperties };

export default function BackLink({ to, label, center = false, className, style }: Props) {
  const text = /^back to\b/i.test(label) ? label : `Back to ${label}`;
  const link = (
    <Link to={to} className={`rpp-backlink${className ? ` ${className}` : ""}`} style={style} data-no-pulse>
      <span className="rpp-backlink-disc" aria-hidden="true">
        <svg viewBox="0 0 36 36" width="30" height="30">
          <path d={RPP_ARROW_PATH_LEFT} fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="rpp-backlink-text">{text}</span>
    </Link>
  );
  const css = <style dangerouslySetInnerHTML={{ __html: BACK_LINK_CSS }} />;
  return center ? (
    <div style={{ textAlign: "center", padding: "40px 24px 56px" }}>{css}{link}</div>
  ) : (
    <>{css}{link}</>
  );
}
