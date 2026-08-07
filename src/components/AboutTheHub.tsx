/**
 * AboutTheHub
 *
 * Short orienting statement for the homepage: what Real Property Planning is
 * and who it serves. Sits below the "What brings you here" choice tiles and
 * above the Cost of Care section.
 *
 * Full-width band rather than a tile — prose needs a 45-75 character measure to
 * read comfortably at the font sizes this audience requires, which a narrow
 * vertical column cannot provide.
 */
const AboutTheHub = () => {
  return (
    <section className="py-14 md:py-20 bg-cream" aria-labelledby="about-the-hub-heading">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="about-the-hub-heading"
            className="font-serif text-[28px] md:text-[40px] lg:text-[44px] font-semibold text-navy leading-tight mb-6 md:mb-8"
          >
            What is Real Property Planning?
          </h2>

          <p className="font-serif text-navy text-[19px] md:text-[21px] leading-[1.75]">
            Real Property Planning is a free, independent educational resource for Washington families navigating a home
            decision during aging, illness, probate, or the settlement of an estate. We explain the real estate,
            housing, and planning issues involved in plain language, and connect you with the attorneys, fiduciaries,
            and care professionals who work in this area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTheHub;
