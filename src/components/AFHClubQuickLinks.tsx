import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AFH_QUICK_LINKS, isAFHClubPath, isActiveQuickLink } from "@/lib/afhQuickLinks";

/**
 * AFH Club quick links (owner's request, Oct 1, 2026): a slim row of AFH Club's
 * main pages under the site menu on EVERY AFH Club page, so a visitor on, say,
 * Find a Professional can see that the listings and the directory exist without
 * opening the menu. Rendered once by src/components/Header.tsx (outside <main>,
 * so index.css's first-section reset is untouched); pages add nothing.
 *
 * The links and the "which page counts as which" rules live in
 * src/lib/afhQuickLinks.ts, which vite.config.ts also reads for the static HTML.
 *
 * <nav> is styled as the site header by index.css, so this is a div with
 * role="navigation". Class prefix "afhq-" avoids index.css substring traps.
 * On phones the row scrolls sideways instead of wrapping to three lines.
 */
const GREEN = "#192A19";
const CSS = `
.afhq { position: relative; background: #f3f0ea; border-bottom: 1px solid #ddd6cc; }
/* Phones: the row scrolls sideways; a fade at the right edge shows there is more. */
@media (max-width: 1100px) { .afhq::after { content: ""; position: absolute; top: 0; right: 0; bottom: 0; width: 36px; pointer-events: none; background: linear-gradient(to right, rgba(243,240,234,0), #f3f0ea 85%); } }
.afhq .afhq-in { max-width: 1240px; margin: 0 auto; padding: 0 16px; display: flex; align-items: center; gap: 4px; overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
.afhq .afhq-in::-webkit-scrollbar { display: none; }
.afhq .afhq-label { flex: 0 0 auto; font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.12em; text-transform: uppercase; color: ${GREEN} !important; margin-right: 6px; white-space: nowrap; }
.afhq a.afhq-link { flex: 0 0 auto; display: inline-flex !important; align-items: center; min-height: 44px; height: auto !important; padding: 0 12px !important; font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; font-weight: 600 !important; color: #1c1917 !important; text-decoration: none !important; white-space: nowrap; border-bottom: 3px solid transparent; }
.afhq a.afhq-link[aria-current="page"] { color: ${GREEN} !important; border-bottom-color: ${GREEN}; font-weight: 700 !important; }
@media (hover: hover) { .afhq a.afhq-link:hover { color: ${GREEN} !important; text-decoration: underline !important; text-underline-offset: 4px; } }
.afhq a.afhq-link:focus-visible { outline: 2px solid ${GREEN}; outline-offset: -2px; }
@media (max-width: 640px) { .afhq .afhq-label { font-size: 12px !important; } .afhq a.afhq-link { font-size: 14px !important; padding: 0 10px !important; } }
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
      <style>{CSS}</style>
      <div className="afhq-in" ref={row}>
        <span className="afhq-label">AFH Club</span>
        {AFH_QUICK_LINKS.map((l) => {
          const active = isActiveQuickLink(l, pathname);
          return (
            <Link key={l.href} to={l.href} className="afhq-link" aria-current={active ? "page" : undefined}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
