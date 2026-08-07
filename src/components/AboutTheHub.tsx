/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here today?" funnel tiles
 * and above the Cost of Care / AFH Club cards.
 *
 * Renders as a plain block with no background of its own so it sits inside the
 * existing cream band. Inline styles match the surrounding homepage and avoid
 * the h2 font-size caps in index.css.
 *
 * Full width with a constrained measure rather than a narrow tile — prose needs
 * roughly 45-75 characters per line to read comfortably at the font sizes this
 * audience requires.
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
      <h2
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(24px, 2.6vw, 32px)",
          fontWeight: 700,
          color: "#272421",
          margin: "0 0 14px",
          lineHeight: 1.2,
        }}
      >
        What is Real Property Planning?
      </h2>

      <p
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(18px, 1.7vw, 20px)",
          fontWeight: 400,
          color: "#272421",
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        Real Property Planning is a free, independent educational resource for Washington families navigating a home
        decision during aging, illness, probate, or the settlement of an estate. We explain the real estate, housing,
        and planning issues involved in plain language, and connect you with the attorneys, fiduciaries, and care
        professionals who work in this area.
      </p>
    </div>
  );
};

export default AboutTheHub;
