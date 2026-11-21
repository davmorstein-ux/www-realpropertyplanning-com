import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import afhGlyph from "@/assets/perf/afh-club-glyph.webp";

/* AFH Club strip (Nov 20, 2026, David): moved from under the homepage guides,
   where Medicare vs. Medicaid now sits, to near the bottom of the page, above
   the FAQ. Same strip as before; the styles moved here with it.
   Class names avoid "btn"/"cta" substrings in their own names except the
   long-standing rpp-afh-strip-cta, which uses doubled-class selectors. */
const CSS = `
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
`;

const HomepageAFHStrip = () => {
  const { t } = useTranslation();
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "2.5rem 1.5rem 3rem" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Link to="/afh-club" className="rpp-afh-strip marquee-hover" style={{ marginTop: 0 }}>
        <span className="rpp-afh-strip-label">{t("afhClub.eyebrow")}</span>
        <span className="rpp-afh-strip-cta">
          Explore
          <span className="rpp-afh-strip-wordmark" aria-label="AFH Club">
            <img src={afhGlyph} alt="" aria-hidden="true" className="rpp-afh-strip-glyph" width={200} height={194} />
            <span className="rpp-afh-strip-sr">A</span>FH Club
          </span>
        </span>
      </Link>
    </section>
  );
};

export default HomepageAFHStrip;
