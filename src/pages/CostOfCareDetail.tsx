import { Navigate, useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CostOfCareEmbed from "@/components/CostOfCareEmbed";
import CareCalculatorSwitcher from "@/components/CareCalculatorSwitcher";
import { findCareCalculator, careTypeFor } from "@/lib/careCalculators";

/**
 * One calculator page per housing option, at
 * /cost-of-care-calculator/:careSlug.
 *
 * One component serves all six rather than six near-identical page files. The
 * care type is read from the URL, so the calculator opens with it already
 * chosen — that is the step this design removes.
 *
 * An unrecognised slug redirects to the hub rather than rendering an empty
 * calculator. That matters because these URLs get indexed and shared: a typo
 * or a renamed slug should land somewhere useful, not on a broken page.
 *
 * The switcher at the foot lists the other five, so someone comparing two
 * options never has to go back to the hub to do it.
 */
const CostOfCareDetail = () => {
  const { careSlug } = useParams<{ careSlug: string }>();
  const option = findCareCalculator(careSlug);

  if (!option) {
    return <Navigate to="/cost-of-care-calculator" replace />;
  }

  const care = careTypeFor(option);
  const url = `https://realpropertyplanning.com/cost-of-care-calculator/${option.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${care.label} Cost Calculator — Washington State | Real Property Planning`}
        description={`What ${option.shortLabel.toLowerCase()} costs each month in Washington State, how it compares with the national median, and what it is likely to cost in future years.`}
        canonical={url}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Cost of Care Calculator", url: "https://realpropertyplanning.com/cost-of-care-calculator" },
          { name: option.shortLabel, url },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">
                {care.label}
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {option.blurb}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <CostOfCareEmbed careTypeId={option.careTypeId} />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <CareCalculatorSwitcher currentSlug={option.slug} heading="Compare another option" />
              <p className="text-muted-foreground text-base leading-relaxed mt-8">
                Weighing this against something else?{" "}
                <Link to="/cost-of-care-calculator" className="text-accent underline underline-offset-4">
                  See all six side by side
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CostOfCareDetail;
