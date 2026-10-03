/**
 * "Free download: The AFH Club Handbook" (Oct 3, 2026). Shown on the AFH Club
 * home page and the Washington AFH Guide start page. The PDF is built from
 * docs/handbook/afh-club-handbook.html (see docs/handbook/build-pdf.mjs).
 * Class names avoid "card", "btn", "cta", "tile" and "section", which index.css
 * styles globally.
 */

export const HANDBOOK_PDF = "/downloads/afh-club-handbook.pdf";
const G = "#0a5648";

const CSS = `
.hbk { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 28px; align-items: center;
  background: #f2f7f5; border: 1px solid #c9dbd5; border-left: 6px solid ${G}; border-radius: 14px; padding: 24px 28px; }
.hbk .hbk-cover { width: 150px; height: auto; aspect-ratio: 440 / 569; border-radius: 6px; background: #ffffff; box-shadow: 0 10px 24px rgba(10,86,72,0.22); display: block; }
.hbk .hbk-eyebrow.hbk-eyebrow { font-family: 'DM Sans', sans-serif !important; font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: ${G} !important; margin: 0 0 6px !important; }
.hbk h2.hbk-title, .hbk h3.hbk-title { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3vw, 30px) !important; font-weight: 700 !important; line-height: 1.2 !important; color: #14283a !important; margin: 0 0 8px !important; text-align: left !important; }
.hbk p.hbk-text.hbk-text { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 16px !important; max-width: none !important; text-align: left !important; }
.hbk a.hbk-dl { display: inline-flex; align-items: center; min-height: 48px; padding: 10px 22px; border-radius: 10px; background: ${G}; color: #ffffff !important;
  font-family: 'DM Sans', sans-serif; font-size: 17px !important; font-weight: 700 !important; text-decoration: none !important; }
@media (hover: hover) { .hbk a.hbk-dl:hover { background: #073f35; } }
.hbk .hbk-meta.hbk-meta { font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; color: #1f2933 !important; margin-left: 14px; }
@media (max-width: 640px) {
  .hbk { grid-template-columns: 1fr; gap: 16px; padding: 20px; text-align: left; }
  .hbk .hbk-cover { width: 120px; }
  .hbk .hbk-meta.hbk-meta { display: block; margin: 10px 0 0; }
}
`;

export default function HandbookDownload({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="hbk">
      <style>{CSS}</style>
      <a href={HANDBOOK_PDF} download aria-hidden="true" tabIndex={-1}>
        <img className="hbk-cover" src="/afh-club-handbook-cover.webp" alt="" width={440} height={569} loading="lazy" decoding="async" />
      </a>
      <div>
        <p className="hbk-eyebrow">Free download</p>
        <H className="hbk-title">The AFH Club Handbook</H>
        <p className="hbk-text">
          Buying, owning, operating and selling an adult family home in Washington, in one place: licensing, how homes get paid,
          what transfers in a sale, financing, and what to verify before you buy.
        </p>
        <a className="hbk-dl" href={HANDBOOK_PDF} download>Download the handbook (PDF)</a>
        <span className="hbk-meta">20 pages · reviewed October 2026</span>
      </div>
    </div>
  );
}
