import { Link, useLocation } from "react-router-dom";
import { breadcrumbsFor } from "@/lib/breadcrumbs";
import { sectionStripFor } from "@/lib/sectionStrip";
import { AFH_FLOW_BASE } from "@/data/afhFlow";

/**
 * The "you are here" line under the header (Nov 1, 2026). Rules for when it
 * shows, and where the trail comes from: src/lib/breadcrumbs.ts. Pages with
 * their section's tabs already show where they are, so they get no line.
 *
 * Class names start rpp-trail and avoid card/tile/section/btn/cta (sitewide
 * substring rules in index.css). index.css also stretches every "nav a" to the
 * full row height; the doubled class selectors below win over that.
 * Phones drop the last crumb (the page's own title, which is the heading
 * right below) so the line stays short.
 */
const CSS = `
  .rpp-trail { background: #f5f2ec; padding: 10px 24px 4px; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif; }
  .rpp-trail ol.rpp-trail-ol { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 2px 0; font-size: 15px; line-height: 1.5; color: #1c1917; }
  .rpp-trail li.rpp-trail-li { display: inline-flex; align-items: center; margin: 0; padding: 0; }
  .rpp-trail li.rpp-trail-li + li.rpp-trail-li::before { content: "›"; margin: 0 8px; color: #1c1917; }
  .rpp-trail a.rpp-trail-a.rpp-trail-a { color: #1B3A6B; font-weight: 600; text-decoration: none; height: auto !important; padding: 2px 0 !important; display: inline; }
  .rpp-trail a.rpp-trail-a.rpp-trail-a:hover { text-decoration: underline; text-underline-offset: 3px; }
  .rpp-trail a.rpp-trail-a.rpp-trail-a:focus-visible { outline: 2px solid #1B3A6B; outline-offset: 2px; border-radius: 2px; }
  .rpp-trail .rpp-trail-here { font-weight: 400; }
  @media (max-width: 640px) {
    .rpp-trail { padding: 8px 16px 2px; }
    .rpp-trail li.rpp-trail-last { display: none; }
  }
  @media print { .rpp-trail { display: none !important; } }
`;

/* The two flow-chart guides carry their own "Flow chart › step" line. */
const OWN_TRAIL = ["/washington-probate-guide/", `${AFH_FLOW_BASE}/`];

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  if (sectionStripFor(pathname)) return null;
  if (OWN_TRAIL.some((base) => pathname.startsWith(base))) return null;
  const trail = breadcrumbsFor(pathname);
  if (!trail) return null;
  return (
    <nav className="rpp-trail" aria-label="Breadcrumb" data-nosnippet="true">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <ol className="rpp-trail-ol">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={`${i}-${c.name}`} className={`rpp-trail-li${last ? " rpp-trail-last" : ""}`}>
              {c.href && !last ? (
                <Link to={c.href} className="rpp-trail-a" data-no-pulse="">
                  {c.name}
                </Link>
              ) : (
                <span className="rpp-trail-here" aria-current="page">
                  {c.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
