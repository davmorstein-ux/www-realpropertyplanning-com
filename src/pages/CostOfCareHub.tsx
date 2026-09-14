
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CareCalculatorSwitcher from "@/components/CareCalculatorSwitcher";

/**
 * Cost of Care calculator hub — the landing page at /cost-of-care-calculator.
 *
 * Replaces what used to sit on this route: a bare figures component with no
 * header, footer or calculator, which rendered as a fragment on a blank page.
 *
 * The job of this page is to get someone into the right calculator in one
 * click. The six tiles carry the monthly figure so a reader can often answer
 * their question here without going any further — and if they do go further,
 * they land on a calculator with the care type already chosen, which is one
 * fewer decision than the old single calculator asked for.
 *
 * The tiles are rendered by CareCalculatorSwitcher, the same component used at
 * the foot of each calculator page, so the two lists cannot disagree.
 */
const CostOfCareHub = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Cost of Care Calculators for Washington State | Real Property Planning"
      description="Compare the monthly cost of independent living, in-home care, adult family homes, assisted living, memory care, and nursing homes in Washington State."
      canonical="https://realpropertyplanning.com/cost-of-care-calculator"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Cost of Care Calculator", url: "https://realpropertyplanning.com/cost-of-care-calculator" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Cost of Care Calculators</HeroBandTitle>

      {/* Intro — relocated out of the title band. The band carries the
          page title and nothing else, sitewide. */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
            Washington State costs more than the national average for nearly every kind of care. Choose the option you are weighing up and see what it runs today, and what it is likely to run later.
          </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <CareCalculatorSwitcher heading="Choose a housing option" />

            <p className="text-muted-foreground text-base leading-relaxed mt-8">
              Figures are Washington State monthly medians. Every calculator lets you adjust the age, how far
              out the move is, and how many years of care to plan for.
            </p>

            {/* Hospice is a service, not a setting, so it is deliberately not a
                seventh card with a price. */}
            <div className="mt-8 rounded-xl border-2 border-dashed" style={{ borderColor: "#7f1d1d", padding: "1.25rem 1.5rem", background: "#fff8f6" }}>
              <p className="font-serif text-[22px] md:text-[26px] font-semibold text-navy leading-tight mb-2">What about hospice care?</p>
              <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-3">
                Hospice isn't a housing option, so it isn't a card above. It is end-of-life care that comes to wherever
                the person lives: their own home, an adult family home, assisted living, memory care, or a nursing
                facility. For eligible Medicare patients the hospice services themselves cost little or nothing; the
                room, board, and day-to-day care of the residence are paid separately, exactly as before hospice began.
              </p>
              <Link to="/articles/hospice-care-washington" className="text-accent underline underline-offset-4 font-semibold text-[17px]">
                Learn about hospice care in Washington →
              </Link>
            </div>

            <div
              className="mt-8"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem 1.5rem",
                padding: "1.25rem 1.5rem",
                background: "#0a5648",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.5, fontWeight: 600, flex: "1 1 360px" }}>
                Weighing an adult family home? The statewide median hides a wide spread by county. Look up the DSHS
                Medicaid rate range, private-pay range, and licensed homes for any Washington city or county.
              </p>
              <Link
                to="/afh-club/cost-by-location"
                className="no-underline"
                style={{
                  flex: "0 0 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "52px",
                  padding: "0 1.5rem",
                  background: "#fff",
                  color: "#0a5648",
                  fontSize: "17px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                AFH cost by city &amp; county →
              </Link>
            </div>

           
          </div>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default CostOfCareHub;
