import { Fragment, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AFH_QUICK_LINKS, isAFHClubPath, isActiveQuickLink } from "@/lib/afhQuickLinks";

/**
 * AFH Club quick links (owner's request, Oct 1, 2026): a bar of AFH Club's main
 * pages under the site menu on EVERY AFH Club page, so a visitor on, say, Find a
 * Professional can see that the listings and the directory exist without opening
 * the menu. Rendered once by src/components/Header.tsx; pages add nothing.
 *
 * Design (owner chose "Option A", Oct 1, 2026, after the first pale version was
 * "not obvious enough"): AFH Club's dark green (the "AFH Club Featured
 * Professionals" banner), the red-door glyph and "AFH Club" wordmark on the left,
 * a thin red rule underneath, the current section as a cream pill. Owner asked
 * for "|" between the links (Oct 1, 2026) so each one reads as its own choice.
 *
 * Spacing below the bar (owner: "too close… cluttered"): index.css zeroes the top
 * padding of the first block inside #main-content, so page headings sat right
 * against the bar. The rule below gives that first block room again, only on pages
 * that show this bar. Every such first block has its own background colour (checked
 * on all AFH routes, Oct 1, 2026), so the space takes the page's colour, not a stripe.
 *
 * The links and the "which page counts as which" rules live in
 * src/lib/afhQuickLinks.ts, which vite.config.ts also reads for the static HTML.
 * <nav> is styled as the site header by index.css, so this is a div with
 * role="navigation". Class prefix "afhq-" avoids index.css substring traps.
 * On phones the row scrolls sideways and centres the current page's link.
 */
const GREEN = "#192A19";
const CREAM = "#F3F0EA";
const CSS = `
.afhq { background: ${GREEN}; border-bottom: 3px solid #7f2028; }
.afhq .afhq-in { max-width: 1240px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; gap: 0; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
.afhq .afhq-in::-webkit-scrollbar { display: none; }
.afhq a.afhq-brand { flex: 0 0 auto; display: inline-flex !important; align-items: center; gap: 8px; height: auto !important; margin-right: 6px; padding: 0 16px 0 0 !important; border-right: 1px solid rgba(243,240,234,0.35); text-decoration: none !important; }
.afhq a.afhq-brand img { height: 26px; width: auto; display: block; }
.afhq a.afhq-brand span { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; font-weight: 400 !important; letter-spacing: 0.18em; color: ${CREAM} !important; white-space: nowrap; }
.afhq a.afhq-link { flex: 0 0 auto; display: inline-flex !important; align-items: center; height: 36px !important; margin: 8px 0; padding: 0 10px !important; border-radius: 999px; font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; font-weight: 600 !important; color: ${CREAM} !important; text-decoration: none !important; white-space: nowrap; }
.afhq a.afhq-link[aria-current="page"] { background: ${CREAM}; color: ${GREEN} !important; font-weight: 700 !important; }
.afhq span.afhq-sep { flex: 0 0 auto; margin: 0 4px; font-size: 18px !important; font-weight: 300 !important; line-height: 1; color: rgba(243,240,234,0.5) !important; user-select: none; }
@media (hover: hover) { .afhq a.afhq-link:not([aria-current="page"]):hover { background: rgba(243,240,234,0.14); } }
.afhq a:focus-visible { outline: 2px solid ${CREAM}; outline-offset: 2px; }
@media (max-width: 640px) { .afhq a.afhq-brand span { font-size: 16px !important; } .afhq a.afhq-link { font-size: 14px !important; padding: 0 10px !important; } .afhq span.afhq-sep { margin: 0 3px; } }
/* Breathing room between the bar and the page (see comment above). */
.afhq ~ #main-content > *:first-child { padding-top: 28px !important; }
@media (max-width: 640px) { .afhq ~ #main-content > *:first-child { padding-top: 20px !important; } }
`;

export default function AFHClubQuickLinks() {
  const { pathname } = useLocation();
  const row = useRef<HTMLDivElement>(null);
  /* Phones: bring the current page's link into view inside the row (scrollLeft
     only, so the page itself does not jump). */
  useEffect(() => {
    const el = row.current;
    const cur = el?.querySelector<HTMLElement>('a[aria-current="page"]');
    if (el && cur && el.scrollWidth > el.clientWidth) {
      el.scrollLeft = Math.max(0, cur.offsetLeft - (el.clientWidth - cur.offsetWidth) / 2);
    }
  }, [pathname]);
  if (!isAFHClubPath(pathname)) return null;
  return (
    <div className="afhq" role="navigation" aria-label="AFH Club pages">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="afhq-in" ref={row}>
        <Link to="/afh-club" className="afhq-brand" aria-label="AFH Club home">
          <img src="/afh-club-glyph.webp" alt="" width={200} height={194} />
          <span aria-hidden="true">AFH Club</span>
        </Link>
        {AFH_QUICK_LINKS.map((l, i) => {
          const active = isActiveQuickLink(l, pathname);
          return (
            <Fragment key={l.href}>
              {i > 0 && <span className="afhq-sep" aria-hidden="true">|</span>}
              <Link to={l.href} className="afhq-link" aria-current={active ? "page" : undefined}>
                {l.label}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
