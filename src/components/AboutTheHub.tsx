/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here today?" funnel tiles
 * and above the Cost of Care Calculator band.
 *
 * Card treatment matches the Cost of Care / AFH Club cards below it, but with a
 * quieter border since this is a statement rather than a call to action.
 *
 * No heading — the first sentence names the site, so a heading above it would
 * only repeat the subject and compete with "What brings you here today?".
 *
 * Text is left-aligned and the card is capped at 900px so lines land in the
 * 60-75 character range. Centered prose at this length produced a ragged left
 * edge that made the block hard to scan.
 *
 * The scoped <style> with doubled class names follows the pattern the homepage
 * already uses to defeat the global "main p font-size !important" rule in
 * index.css.
 *
 * Copy is hardcoded English for now — the rest of this page uses i18next keys,
 * so this block still needs keys added to translate with the other 7 locales.
 */
const AboutTheHub = () => {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "2.25rem auto 2.5rem",
      }}
    >
      <style>{`
        .rpp-abouthub-copy.rpp-abouthub-copy {
          font-family: Georgia, serif;
          font-size: clamp(17px, 1.6vw, 19px) !important;
          font-weight: 400;
          color: #272421;
          margin: 0;
          line-height: 1.75;
          text-align: left;
        }
        .rpp-abouthub-lead.rpp-abouthub-lead {
          font-weight: 700;
        }
      `}</style>

      <div
        style={{
          background: "#ffffff",
          border: "2px solid #d6cdbf",
          borderRadius: 12,
          padding: "1.5rem 1.75rem",
        }}
      >
        <p className="rpp-abouthub-copy rpp-abouthub-copy">
          <span className="rpp-abouthub-lead rpp-abouthub-lead">Real Property Planning</span> is a free,
          independent educational resource for Washington families navigating a home decision during aging,
          illness, probate, or the settlement of an estate. We explain the real estate, housing, and planning
          issues involved in plain language, and connect you with the attorneys, fiduciaries, and care
          professionals who work in this area.
        </p>
      </div>
    </div>
  );
};

export default AboutTheHub;
