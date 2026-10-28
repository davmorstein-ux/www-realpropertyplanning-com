import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { sectionStripFor } from "@/lib/sectionStrip";

/**
 * Section strip: the other topics from the same dropdown, under the site menu.
 * Which pages get one, the labels and the owner's decisions: src/lib/sectionStrip.ts.
 * Rendered once by src/components/Header.tsx (after the mobile header spacer);
 * pages add nothing.
 *
 * Desktop: pills wrap and centre (a 14-item menu takes two rows, accepted by the
 * owner). Phones: one row that scrolls sideways, a fade + chevron on the right
 * edge says there is more, and the current pill is scrolled into view.
 *
 * index.css traps avoided: <nav> is styled as the site header there, so this is
 * a div with role="navigation"; class prefix "rpps-" holds none of the
 * btn/cta/card/tile/section substrings; no uppercase or letter-spacing (that
 * forces 14px "eyebrow" text). Header and footer never pulse; this sits outside
 * <main>, so it does not either.
 */
const INK = "#292524"; // warm charcoal, matches the homepage headline
const CSS = `
.rpps { background: #ffffff; border-bottom: 1px solid #e2dccf; }
.rpps .rpps-in { margin: 0 auto; padding: 12px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px; }
.rpps .rpps-head { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 16px !important; font-weight: 700 !important; color: ${INK} !important; margin-right: 6px; white-space: nowrap; }
.rpps a.rpps-pill { display: inline-flex !important; align-items: center; min-height: 44px; box-sizing: border-box; padding: 0 13px !important; border-radius: 999px; border: 1.5px solid #c9c4bb; background: #ffffff; color: ${INK} !important; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 16px !important; font-weight: 600 !important; line-height: 1.2; text-decoration: none !important; white-space: nowrap; }
.rpps a.rpps-pill[aria-current="page"] { background: ${INK}; border-color: ${INK}; color: #ffffff !important; }
@media (hover: hover) { .rpps a.rpps-pill:not([aria-current="page"]):hover { background: #f3f1ed; border-color: ${INK}; } }
.rpps a.rpps-pill:focus-visible { outline: 3px solid ${INK}; outline-offset: 2px; }
.rpps .rpps-fade { display: none; }
/* Computers: the menu tab directly above is already underlined with this
   section's name, so the strip's own heading is hidden there to keep an
   eight-topic menu on one row at laptop width (1280px). Screen readers still
   get it from aria-label. Phones keep it: their menu is behind the button. */
@media (min-width: 768px) { .rpps .rpps-head { display: none; } }
@media (max-width: 767px) {
  .rpps .rpps-wrap { position: relative; }
  .rpps .rpps-in { flex-wrap: nowrap; justify-content: flex-start; overflow-x: auto; padding: 10px 44px 12px 16px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .rpps .rpps-in::-webkit-scrollbar { display: none; }
  .rpps .rpps-head { flex: 0 0 auto; }
  .rpps a.rpps-pill { flex: 0 0 auto; }
  .rpps .rpps-fade { display: flex; position: absolute; top: 0; right: 0; bottom: 0; width: 52px; pointer-events: none; align-items: center; justify-content: flex-end; padding-right: 8px; box-sizing: border-box; background: linear-gradient(to right, rgba(255,255,255,0), #ffffff 70%); color: ${INK}; }
}
`;

export default function SectionStrip() {
  const { pathname } = useLocation();
  const strip = sectionStripFor(pathname);
  const row = useRef<HTMLDivElement>(null);
  /* Phones: if the current pill starts off-screen, scroll the row so it sits
     near the left edge (scrollLeft only, so the page does not jump). A pill
     already in view leaves the row alone, so the heading stays readable. */
  useEffect(() => {
    const el = row.current;
    const cur = el?.querySelector<HTMLElement>('a[aria-current="page"]');
    if (!el || !cur) return;
    const fits = cur.offsetLeft + cur.offsetWidth <= el.clientWidth - 44;
    el.scrollLeft = fits ? 0 : Math.max(0, cur.offsetLeft - 16);
  }, [pathname]);
  if (!strip) return null;
  return (
    <div className="rpps" role="navigation" aria-label={`More in ${strip.heading}`} data-nosnippet="true">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rpps-wrap">
        <div className="rpps-in" ref={row}>
          <span className="rpps-head">{strip.heading}:</span>
          {strip.links.map((l) => (
            <Link key={l.href} to={l.href} className="rpps-pill" aria-current={l.current ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <span className="rpps-fade" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
