import { Navigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
 * The other five options sit in a sidebar rail beside the calculator rather
 * than in a band below it, so comparing two options costs one click without
 * costing a screenful of scrolling.
 */
const CostOfCareDetail = () => {
  const { careSlug } = useParams<{ careSlug: string }>();
  const option = findCareCalculator(careSlug);

  if (!option) {
    return <Navigate to="/cost-of-care-calculator" replace />;
  }

  const care = careTypeFor(option);
  /* The h1 below reads the translated care-type label. careTypeFor() returns
     the English record from careTypes.ts; the same label exists translated at
     costOfCarePage.careTypes.<id>.label in all eight locales, verified present
     for all nine care types. The SEO title deliberately stays English — it is
     rendered per-route and the seo.* keys describe the hub, not this page. */
  const { t } = useTranslation();
  const careLabel = t(`costOfCarePage.careTypes.${care.id}.label`, { defaultValue: care.label });
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
        {/* Hero carries the option's own colour as a bottom rule, so the page
            identifies itself before the heading is read. */}
        <section
          className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14"
          style={{ borderBottom: `6px solid ${option.color}` }}
        >
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4">
                {careLabel}
              </h1>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {option.blurb}
              </p>
            </div>
          </div>
        </section>

        {/* Calculator and the other options side by side. The switcher used to
            sit in its own full-width band below, which pushed the page down
            without earning the space. On narrow screens the rail drops beneath
            the calculator rather than squeezing beside it. */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <style>{`
              .rpp-calcpage-layout {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2.5rem;
                align-items: start;
                max-width: 1180px;
                margin: 0 auto;
              }
              @media (min-width: 1024px) {
                .rpp-calcpage-layout {
                  grid-template-columns: minmax(0, 1fr) 300px;
                  gap: 3rem;
                }
                /* Follows the reader down a long calculator. Offset clears the
                   sticky site header. */
                .rpp-calcpage-rail {
                  position: sticky;
                  top: calc(var(--header-height, 120px) + 20px);
                }
              }
              .rpp-calcpage-railhead {
                font-family: Georgia, serif;
                font-size: 20px !important;
                font-weight: 700;
                color: #272421;
                margin: 0 0 1rem;
                line-height: 1.3;
              }
            `}</style>

            <div className="rpp-calcpage-layout">
              <div>
                <CostOfCareEmbed careTypeId={option.careTypeId} />
              </div>

              <aside className="rpp-calcpage-rail" aria-label="Other cost of care calculators">
                <p className="rpp-calcpage-railhead">Compare another option</p>
                <CareCalculatorSwitcher currentSlug={option.slug} layout="rail" />
                <p className="text-muted-foreground text-base leading-relaxed mt-5">
                  <Link to="/cost-of-care-calculator" className="text-accent underline underline-offset-4">
                    See all six side by side
                  </Link>
                </p>
              </aside>
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
