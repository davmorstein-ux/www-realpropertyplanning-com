import { Link } from "react-router-dom";

/**
 * Professional disclaimer shown in the body of every page.
 *
 * CONDENSED from two full paragraphs to a single sentence plus a link.
 * The long version restated the footer almost verbatim on every page,
 * which pushed real content down and read as legal boilerplate rather
 * than disclosure.
 *
 * WHY IT STAYS IN THE BODY AT ALL, GIVEN THE FOOTER ALREADY HAS IT
 *
 * <Footer> carries data-nosnippet="true". That attribute tells Google
 * not to use any of that text in search snippets, and AI answer engines
 * generally honour it too. So the footer disclaimer is invisible to
 * exactly the systems that extract and republish page content — which
 * is the context where the disclosure most needs to travel alongside
 * the claims.
 *
 * This component has no data-nosnippet, so it is the version that gets
 * picked up. Do not add one.
 */
const DisclaimerSection = () => {
  return (
    <section className="py-8 lg:py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl px-6 py-5 md:px-7 md:py-6">
            <p className="rpp-disclaimer-eyebrow">Professional Disclosure</p>
            <p className="text-foreground leading-relaxed m-0" style={{ fontSize: "17px" }}>
              <strong className="font-semibold">Real Property Planning is an educational and connection hub.</strong> It
              does not provide legal, tax, accounting, financial, brokerage, or appraisal services. Professionals
              referenced on this site are independently licensed and operate through their own separate businesses.{" "}
              <Link
                to="/disclaimer"
                className="text-foreground font-semibold underline underline-offset-4 decoration-2"
              >
                Read the full disclaimer
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Scoped so the global rule
             main [class*="uppercase"] { font-size: max(0.875rem,14px) !important }
           cannot shrink this label — 0.875rem IS 14px, so that max() always
           returns exactly 14px rather than acting as the floor it looks like. */
        .rpp-disclaimer-eyebrow.rpp-disclaimer-eyebrow {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 13px !important;
          font-weight: 700 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;
          color: #6b1b22 !important;
          margin: 0 0 8px 0 !important;
        }
      `}</style>
    </section>
  );
};

export default DisclaimerSection;
