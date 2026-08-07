/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here today?" funnel tiles
 * and above the Cost of Care Calculator band.
 *
 * Renders as a plain block with no background of its own so it sits inside the
 * existing cream band.
 *
 * The scoped <style> block with doubled class names follows the same pattern
 * the homepage already uses to defeat the global "main p font-size !important"
 * rule in index.css, which would otherwise flatten the paragraph size.
 *
 * Copy is hardcoded English for now — the rest of this page uses i18next keys,
 * so this block will need keys added to translate with the other 7 locales.
 */
const AboutTheHub = () => {
  return (
    <div
      style={{
        maxWidth: 780,
        margin: "2rem auto 2.5rem",
        textAlign: "center",
        padding: "0 0.5rem",
      }}
    >
      <style>{`
        .rpp-abouthub-h2.rpp-abouthub-h2 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 2.6vw, 32px) !important;
          font-weight: 700;
          color: #272421;
          margin: 0 0 14px;
          line-height: 1.2;
        }
        .rpp-abouthub-copy.rpp-abouthub-copy {
          font-family: Georgia, serif;
          font-size: clamp(18px, 1.7vw, 20px) !important;
          font-weight: 400;
          color: #272421;
          margin: 0;
          line-height: 1.7;
        }
      `}</style>

      <h2 className="rpp-abouthub-h2 rpp-abouthub-h2">What is Real Property Planning?</h2>

      <p className="rpp-abouthub-copy rpp-abouthub-copy">
        Real Property Planning is a free, independent educational resource for Washington families navigating a
        home decision during aging, illness, probate, or the settlement of an estate. We explain the real
        estate, housing, and planning issues involved in plain language, and connect you with the attorneys,
        fiduciaries, and care professionals who work in this area.
      </p>
    </div>
  );
};

export default AboutTheHub;
