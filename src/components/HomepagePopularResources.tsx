import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* Popular resources (Oct 26, 2026). David: the old icon tiles "look weak" and
   "appear as one large image versus 4 separate selections". Rebuilt with his
   choices after mock-ups:
   - Each tile leads with the visitor's situation ("We inherited a house").
     People find themselves faster than they find a guide title, and four
     identical "Read Guide" buttons were part of why the tiles blurred
     together. The guide's name was an underlined link line under it; David
     said it cluttered the tile, so it was replaced by a circled arrow in the
     bottom-right corner, like the homepage tiles. The guide name stays in the
     link's aria-label for screen readers.
   - David's four realistic 3D objects (he made them in ChatGPT; transparent
     WebP in public/popular-*-v1.webp, trimmed to their edges). Any replacement
     should be a real object on a plain white background, cut out the same way.
   - White tiles with a 2px border in each tile's own colour (David: "a cleaner
     look" than tinted fills): navy, bronze, garnet, teal, all already used on
     the site.
   - Desktop: object and words centred. Phones: four stacked rows, object left.
   Class names avoid "btn"/"cta" (index.css forces maroon on those). */
const resources = [
  { situation: "I'm the executor. Where do I start?", guide: "Executor's 10-step checklist", href: "/resources/washington-executors-10-step-checklist", img: "/popular-clipboard-v1.webp", w: 372, h: 440, c: "#1B3A6B" },
  { situation: "The house has to go through probate", guide: "How probate sales work", href: "/guides/how-probate-real-estate-works", img: "/popular-scale-v1.webp", w: 440, h: 430, c: "#8a5212" },
  { situation: "Mom or Dad needs more care", guide: "Senior housing & care options", href: "/understanding-housing-care-options", img: "/popular-house-v1.webp", w: 440, h: 398, c: "#9E1F3A" },
  { situation: "We inherited a house", guide: "What to do with it", href: "/guides/inherited-house-washington", img: "/popular-keys-v1.webp", w: 420, h: 440, c: "#0f6b56" },
];

const HomepagePopularResources = () => {
  const { t } = useTranslation();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "3.5rem 0 4rem" }}>
      <style dangerouslySetInnerHTML={{ __html: `
      .rpp-pr-eyebrow {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 21px !important;
        font-weight: 700 !important;
        letter-spacing: 0.14em !important;
        text-transform: uppercase !important;
        color: #272421 !important;
        margin: 0 0 0.5rem 0 !important;
        display: block !important;
      }
      .rpp-pr-heading {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: clamp(32px, 3vw, 48px) !important;
        font-weight: 700 !important;
        color: #272421 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
      }
      .rpp-pr-grid.rpp-pr-grid {
        display: grid !important;
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 1.5rem !important;
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .rpp-pr-grid li { display: flex !important; margin: 0 !important; }
      .rpp-pr-grid li::before, .rpp-pr-grid li::marker { content: none !important; display: none !important; }
      .rpp-pr-tile.rpp-pr-tile {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
        background: #ffffff !important;
        border: 2px solid var(--pr-c) !important;
        border-radius: 16px !important;
        position: relative !important;
        padding: 1.5rem 1.25rem 3.6rem !important;
        text-decoration: none !important;
        box-shadow: 0 4px 14px -10px color-mix(in srgb, var(--pr-c) 60%, transparent) !important;
        transition: transform 0.18s ease, box-shadow 0.18s ease !important;
      }
      .rpp-pr-tile.rpp-pr-tile:hover, .rpp-pr-tile.rpp-pr-tile:focus-visible {
        transform: translateY(-3px) !important;
        box-shadow: 0 16px 30px -14px color-mix(in srgb, var(--pr-c) 60%, transparent) !important;
      }
      .rpp-pr-tile.rpp-pr-tile:focus-visible { outline: 3px solid var(--pr-c) !important; outline-offset: 3px !important; }
      .rpp-pr-tile img.rpp-pr-object.rpp-pr-object {
        display: block !important;
        width: auto !important;
        max-width: 150px !important;
        height: 130px !important;
        object-fit: contain !important;
        margin: 0 0 1rem !important;
        border-radius: 0 !important;
        filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.16));
        transition: transform 0.18s ease;
      }
      .rpp-pr-tile:hover img.rpp-pr-object.rpp-pr-object { transform: translateY(-2px) scale(1.03); }
      .rpp-pr-body.rpp-pr-body {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        flex: 1 !important;
        width: 100% !important;
      }
      /* Spans inside links are forced to 16px regular by index.css; these
         restate their own size and weight. */
      .rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 22px !important;
        font-weight: 800 !important;
        line-height: 1.25 !important;
        color: #272421 !important;
        margin: 0 !important;
      }
      /* Circled arrow, bottom-right corner (like the homepage tiles): a solid
         disc in the tile's colour with a white arrow (David, Oct 26, 2026); on
         hover it darkens a little and nudges right. */
      .rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow {
        position: absolute !important;
        right: 14px !important;
        bottom: 14px !important;
        width: 36px !important;
        height: 36px !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box;
        border-radius: 999px !important;
        border: 0 !important;
        color: #ffffff !important;
        background: var(--pr-c) !important;
        box-shadow: 0 2px 5px -1px color-mix(in srgb, var(--pr-c) 55%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.22) !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
      }
      .rpp-pr-tile:hover span.rpp-pr-arrow.rpp-pr-arrow,
      .rpp-pr-tile:focus-visible span.rpp-pr-arrow.rpp-pr-arrow {
        background: color-mix(in srgb, var(--pr-c) 82%, #000000) !important;
        transform: translateX(2px);
      }

      /* Browse all — a solid button, so it reads as the primary next step
         rather than another text link among many. */
      .rpp-pr-browse.rpp-pr-browse {
        display: inline-flex !important;
        align-items: center !important;
        gap: 10px !important;
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #1c1917 !important;
        background-color: #ffffff !important;
        border: 2px solid #3d3833 !important;
        border-radius: 8px !important;
        /* Padding and min-height are set inline on the <Link> instead of
           here: Lovable's preview serves stale CSS from <style> blocks
           while .tsx markup updates reliably, so sizing that needs to
           land goes in the markup. 44px is the WCAG 2.2 AAA tap-target
           floor — don't trim below it. */
        box-shadow: 0 3px 12px rgba(26,39,68,0.14) !important;
        transition: background-color 150ms ease, border-color 150ms ease !important;
      }
      .rpp-pr-browse.rpp-pr-browse,
      .rpp-pr-browse.rpp-pr-browse * {
        text-decoration: none !important;
      }
      .rpp-pr-browse:hover,
      .rpp-pr-browse:focus-visible {
        color: #ffffff !important;
        background-color: #3d3833 !important;
        border-color: #3d3833 !important;
      }

      /* AFH Club — a quiet, explicitly labeled door for the owner /
         operator / investor audience. Deliberately a different shape from
         the browse button above it: outlined strip, green left rule, and
         the audience named up front, so the two never compete. */
      .rpp-afh-strip.rpp-afh-strip {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.5rem 1.25rem;
        width: 100%;
        max-width: 720px;
        min-height: 56px;
        margin: 1.75rem auto 0;
        padding: 0.85rem 1.5rem;
        background: #ffffff;
        border: 1px solid #cfd8d4;
        border-left: 5px solid #0a5648;
        border-radius: 10px;
        text-align: center;
        transition: background-color 150ms ease, border-color 150ms ease;
      }
      .rpp-afh-strip.rpp-afh-strip,
      .rpp-afh-strip.rpp-afh-strip * {
        text-decoration: none !important;
      }
      .rpp-afh-strip:hover,
      .rpp-afh-strip:focus-visible {
        background: #f4f8f6;
        border-color: #0a5648;
      }
      .rpp-afh-strip-label.rpp-afh-strip-label {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #063e33;
        margin: 0;
      }
      /* CTA carries the AFH Club wordmark (house glyph standing in for the
         "A") on the Club's dark green, exactly as the Club's own hero draws
         it. The glyph is cream with a red door, so it needs the dark ground. */
      .rpp-afh-strip-cta.rpp-afh-strip-cta {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        /* The Club hero's forest green (#192A19), not the AFH teal. */
        background: #192a19;
        border-radius: 8px;
        padding: 10px 18px;
        min-height: 48px;
        margin: 0;
        border: none;
        transition: background-color 0.15s ease;
      }
      .rpp-afh-strip:hover .rpp-afh-strip-cta.rpp-afh-strip-cta {
        background: #26402a;
      }
      .rpp-afh-strip-wordmark {
        display: inline-flex;
        align-items: center;
        font-size: 22px;
        letter-spacing: 0.04em;
        line-height: 1;
      }
      .rpp-afh-strip-glyph {
        height: 0.95em;
        width: auto;
        display: block;
        margin-right: 1px;
      }
      .rpp-afh-strip-sr {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        white-space: nowrap;
      }

      @media (max-width: 1000px) {
        .rpp-pr-grid.rpp-pr-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      }
      @media (max-width: 640px) {
        .rpp-afh-strip.rpp-afh-strip {
          flex-direction: column;
          gap: 0.6rem;
          padding: 1rem 1.25rem;
        }
        .rpp-afh-strip-label.rpp-afh-strip-label {
          font-size: 15px;
          letter-spacing: 0.05em;
        }
      }
      /* PHONES (under 640px): four stacked rows, object left and words right,
         left-aligned, so each choice is its own clearly separate tap target
         (was a cramped 2 x 2 that read as one block). */
      @media (max-width: 639px) {
        .rpp-pr-grid.rpp-pr-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 0.9rem !important; }
        .rpp-pr-tile.rpp-pr-tile {
          flex-direction: row !important;
          align-items: center !important;
          text-align: left !important;
          gap: 0.9rem !important;
          padding: 0.85rem 1rem 2.9rem 0.75rem !important;
        }
        .rpp-pr-tile img.rpp-pr-object.rpp-pr-object { width: 88px !important; max-width: 88px !important; height: 88px !important; flex: 0 0 88px; margin: 0 0 -2rem !important; }
        .rpp-pr-body.rpp-pr-body { align-items: flex-start !important; }
        .rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation { font-size: 20px !important; }
        .rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow { right: 12px !important; bottom: 10px !important; width: 34px !important; height: 34px !important; }
      }
    ` }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <span className="rpp-pr-eyebrow">Popular Resources</span>
          <h2 className="rpp-pr-heading">The guides people open most</h2>
        </div>

        {/* Cards */}
        <ul className="rpp-pr-grid">
          {resources.map((r) => (
            <li key={r.href}>
              <Link
                to={r.href}
                className="rpp-pr-tile marquee-hover"
                style={{ ["--pr-c" as string]: r.c }}
                aria-label={`${r.situation}: ${r.guide}`}
              >
                <img className="rpp-pr-object" src={r.img} alt="" width={r.w} height={r.h} loading="lazy" decoding="async" />
                <span className="rpp-pr-body">
                  <span className="rpp-pr-situation">{r.situation}</span>
                </span>
                <span className="rpp-pr-arrow" aria-hidden="true">
                  {/* A heavy chevron (sideways V), not a line arrow (David, Oct 26,
                      2026: "a sideways V, thicker/heavier"). Nudged 1px right
                      so it looks centred in the disc. */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                    <path d="M9 5.5l6.5 6.5-6.5 6.5" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Browse all — primary next step */}
        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <Link to="/resources" className="rpp-pr-browse" style={{ padding: "11px 22px", minHeight: 44 }}>
            Browse all resources
          </Link>
        </div>

        {/* AFH Club — relocated from the funnel section so the top of the
            homepage speaks only to families. No SVG arrow here: the
            afhClub.cta string already ends in an arrow in every locale. */}
        <Link to="/afh-club" className="rpp-afh-strip marquee-hover">
          <span className="rpp-afh-strip-label">{t("afhClub.eyebrow")}</span>
          <span className="rpp-afh-strip-cta">
            Explore
            <span className="rpp-afh-strip-wordmark" aria-label="AFH Club">
              <img src="/afh-club-glyph.webp" alt="" aria-hidden="true" className="rpp-afh-strip-glyph" width={200} height={194} />
              <span className="rpp-afh-strip-sr">A</span>FH Club
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HomepagePopularResources;
