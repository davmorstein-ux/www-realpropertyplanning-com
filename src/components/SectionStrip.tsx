import { useEffect, useRef, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { sectionStripFor, stripInHeader, type BandPhoto, type SectionStrip as Strip } from "@/lib/sectionStrip";
import estateBand from "@/assets/section-bands/estate-band.webp";
import estateBandMobile from "@/assets/section-bands/estate-band-mobile.webp";
import seniorBand from "@/assets/section-bands/senior-band.webp";
import seniorBandMobile from "@/assets/section-bands/senior-band-mobile.webp";
import professionalBand from "@/assets/section-bands/professional-band.webp";
import professionalBandMobile from "@/assets/section-bands/professional-band-mobile.webp";
import guidesBand from "@/assets/section-bands/guides-band.webp";
import guidesBandMobile from "@/assets/section-bands/guides-band-mobile.webp";

/**
 * Section photo band + section tabs. Rules, labels and the owner's decisions:
 * src/lib/sectionStrip.ts.
 *
 * Two places draw them:
 * - HeroBandTitle (most strip pages): the photo band WITH the page's h1 on it,
 *   then the tabs. It replaces the dark title band on those pages.
 * - Header.tsx, via the default export below, only on CUSTOM_HEADER_ROUTES:
 *   the photo band without a title, then the tabs, above the page's own header.
 *
 * Computers: photo 150px tall, title over a soft cream glow on the left, 25%
 * cream fade over the whole photo. Phones: photo 130px tall (its own crop), the
 * title sits under the photo on cream, the tabs scroll sideways with a fade +
 * chevron on the right and the current tab scrolled into view.
 *
 * index.css traps avoided: class prefixes rppbd- / rpptb- hold none of the
 * btn/cta/card/tile/section substrings; tab links carry .no-underline (main a
 * is underlined sitewide) and data-no-pulse (the current tab's bar would count
 * as a border for the click pulse); the nav is a div with role="navigation"
 * because <nav> is styled as the site header; no uppercase/letter-spacing
 * (forced to 14px eyebrow text). The h1 uses its own class, not
 * rpp-hero-band-text, so the white band-title rules do not repaint it.
 */
const INK = "#292524"; // warm charcoal, matches the homepage headline
const DOOR = "#B0352A"; // brick-red front-door colour (brand)
const CREAM = "250,248,244";

const PHOTOS: Record<BandPhoto, { desktop: string; mobile: string }> = {
  estate: { desktop: estateBand, mobile: estateBandMobile },
  senior: { desktop: seniorBand, mobile: seniorBandMobile },
  professional: { desktop: professionalBand, mobile: professionalBandMobile },
  guides: { desktop: guidesBand, mobile: guidesBandMobile },
};

const CSS = `
.rppbd { position: relative; background: #faf8f4; }
.rppbd .rppbd-photo { position: relative; height: 150px; overflow: hidden; }
.rppbd .rppbd-photo img { display: block; width: 100%; height: 150px; object-fit: cover; object-position: center; }
.rppbd .rppbd-fade { position: absolute; inset: 0; background: rgba(${CREAM},0.25); pointer-events: none; }
.rppbd .rppbd-glow { position: absolute; top: 0; bottom: 0; left: 0; width: 62%; pointer-events: none;
  background: linear-gradient(to right, rgba(${CREAM},0.88) 0%, rgba(${CREAM},0.7) 45%, rgba(${CREAM},0) 100%); }
.rppbd .rppbd-head { position: absolute; top: 0; bottom: 0; left: 0; display: flex; align-items: center; padding: 0 56px; max-width: 58%; box-sizing: border-box; }
html body .rppbd h1.rppbd-title.rppbd-title, html body .rppbd .rppbd-title.rppbd-title {
  margin: 0 !important; padding: 0 !important; color: ${INK} !important; background: none !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-weight: 700 !important;
  font-size: clamp(30px, 3.2vw, 42px) !important; line-height: 1.1 !important; letter-spacing: 0 !important;
  text-transform: none !important; text-align: left !important; }
@media (max-width: 767px) {
  .rppbd .rppbd-photo, .rppbd .rppbd-photo img { height: 130px; }
  .rppbd .rppbd-glow { display: none; }
  .rppbd .rppbd-head { position: static; max-width: none; padding: 16px 16px 14px; }
  html body .rppbd h1.rppbd-title.rppbd-title, html body .rppbd .rppbd-title.rppbd-title { font-size: 30px !important; line-height: 1.15 !important; }
}
.rpptb { background: #ffffff; border-bottom: 1px solid #e2dccf; border-top: 1px solid #e2dccf; position: relative; }
.rpptb .rpptb-in { display: flex; flex-wrap: wrap; justify-content: center; column-gap: 28px; padding: 0 24px; }
html body .rpptb a.rpptb-link.no-underline { display: inline-flex !important; align-items: center; min-height: 52px; box-sizing: border-box; padding: 3px 2px 0 !important;
  border-bottom: 3px solid transparent; color: ${INK} !important; background: none !important; text-decoration: none !important;
  font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 16px !important; font-weight: 600 !important; line-height: 1.2 !important; white-space: nowrap; }
html body .rpptb a.rpptb-link.no-underline[aria-current="page"] { color: ${DOOR} !important; font-weight: 700 !important; border-bottom-color: ${DOOR}; }
@media (hover: hover) { html body .rpptb a.rpptb-link.no-underline:not([aria-current="page"]):hover { color: ${DOOR} !important; } }
html body .rpptb a.rpptb-link:focus-visible { outline: 3px solid ${INK}; outline-offset: 2px; }
.rpptb .rpptb-fade { display: none; }
@media (max-width: 767px) {
  .rpptb .rpptb-in { flex-wrap: nowrap; justify-content: flex-start; column-gap: 24px; overflow-x: auto; padding: 0 44px 0 16px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .rpptb .rpptb-in::-webkit-scrollbar { display: none; }
  html body .rpptb a.rpptb-link.no-underline { flex: 0 0 auto; }
  .rpptb .rpptb-fade { display: flex; position: absolute; top: 0; right: 0; bottom: 0; width: 52px; pointer-events: none; align-items: center; justify-content: flex-end; padding-right: 8px; box-sizing: border-box; background: linear-gradient(to right, rgba(255,255,255,0), #ffffff 70%); color: ${INK}; }
}
`;

/** The photo band. With `title`, the page title sits on it (computers) or under it (phones). */
export function SectionBand({ photo, title }: { photo: BandPhoto; title?: ReactNode }) {
  const src = PHOTOS[photo];
  return (
    <div className="rppbd" data-nosnippet={title ? undefined : "true"}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rppbd-photo">
        <picture>
          <source media="(max-width: 767px)" srcSet={src.mobile} width={1170} height={390} />
          <img src={src.desktop} alt="" width={1920} height={225} fetchPriority="high" decoding="async" />
        </picture>
        <div className="rppbd-fade" aria-hidden="true" />
        {title && <div className="rppbd-glow" aria-hidden="true" />}
      </div>
      {title && <div className="rppbd-head">{title}</div>}
    </div>
  );
}

/** The topic tabs: every page in the same dropdown, the current one in brick red.
    Always drawn straight after SectionBand, whose <style> block styles both. */
export function SectionTabs({ strip }: { strip: Strip }) {
  const { pathname } = useLocation();
  const row = useRef<HTMLDivElement>(null);
  /* Phones: if the current tab starts off-screen, scroll the row so it sits
     near the left edge (scrollLeft only, so the page does not jump). */
  useEffect(() => {
    const el = row.current;
    const cur = el?.querySelector<HTMLElement>('a[aria-current="page"]');
    if (!el || !cur) return;
    const fits = cur.offsetLeft + cur.offsetWidth <= el.clientWidth - 44;
    el.scrollLeft = fits ? 0 : Math.max(0, cur.offsetLeft - 16);
  }, [pathname]);
  return (
    <div className="rpptb" role="navigation" aria-label={`More in ${strip.heading}`} data-nosnippet="true">
      <div className="rpptb-in" ref={row}>
        {strip.links.map((l) => (
          <Link key={l.href} to={l.href} className="rpptb-link no-underline" data-no-pulse="" aria-current={l.current ? "page" : undefined}>
            {l.label}
          </Link>
        ))}
      </div>
      <span className="rpptb-fade" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  );
}

/** Header version: only on custom-header strip pages (photo band without a title, then tabs). */
export default function SectionStrip() {
  const { pathname } = useLocation();
  const strip = sectionStripFor(pathname);
  if (!strip || !stripInHeader(pathname)) return null;
  return (
    <>
      <SectionBand photo={strip.photo} />
      <SectionTabs strip={strip} />
    </>
  );
}
