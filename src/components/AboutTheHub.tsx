/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here today?" funnel tiles
 * and above the Cost of Care Calculator band.
 *
 * Sized and styled to match the surrounding cards: full container width, 12px
 * radius, and the same box-shadow lift used by the funnel tiles and the Cost of
 * Care card, so it belongs to the same visual system.
 *
 * The border is a quieter stone rather than the burgundy used on the Cost of
 * Care card — that card is clickable and this one is not, so a matching border
 * would imply an action that doesn't exist.
 *
 * No heading: the first sentence names the site, so a heading above it would
 * repeat the subject and compete with "What brings you here today?".
 *
 * Font steps up slightly from the earlier narrow version because the card is
 * now full width — at 1200px a smaller size would push lines past 95 characters.
 *
 * Doubled class names follow the pattern this page already uses to defeat the
 * global "main p font-size !important" rule in index.css.
 *
 * Copy is hardcoded English for now — the rest of this page uses i18next keys,
 * so this block still needs keys added to translate with the other 7 locales.
 */
const AboutTheHub = () => {
  return (
    <div style={{ margin: "2.25rem 0 2.5rem" }}>
      <style>{`
        .rpp-abouthub-card.rpp-abouthub-card {
          display: block;
          background: #ffffff;
          border: 3px solid #d6cdbf;
          border-radius: 12px;
          padding: 1.35rem 1.6rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }
        .rpp-abouthub-copy.rpp-abouthub-copy {
          font-family: Georgia, serif;
          font-size: clamp(17px, 1.35vw, 20px) !important;
          font-weight: 400;
          color: #272421;
          margin: 0 auto;
          max-width: 68em;
          line-height: 1.75;
          text-align: left;
        }
        .rpp-abouthub-lead.rpp-abouthub-lead {
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .rpp-abouthub-card.rpp-abouthub-card {
            padding: 1.2rem 1.25rem;
          }
        }
      `}</style>

      <div className="rpp-abouthub-card rpp-abouthub-card">
        <p className="rpp-abouthub-copy rpp-abouthub-copy">
          <span className="rpp-abouthub-lead rpp-abouthub-lead">Real Property Planning</span> is a free,
          independent educational resource for Washington families navigating a home decision during aging,
          illness, probate, or the settlement of an estate. It explains the real estate, housing, and planning
          issues involved in plain language, and connects you with the attorneys, fiduciaries, and care
          professionals who work in this area.
        </p>
      </div>
    </div>
  );
};

export default AboutTheHub;
