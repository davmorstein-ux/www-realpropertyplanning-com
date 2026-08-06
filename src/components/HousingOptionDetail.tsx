import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import housingOptionsHero from "@/assets/housing_options_hero.webp";
import CostOfCareEmbed from "@/components/CostOfCareEmbed";

export interface HousingOptionDetailProps {
  title: string;
  slug: string;
  whatItIs: string;
  bestFor: string;
  typicalCosts: string;
  whatsIncluded: string;
  metaDescription: string;
  /** Matches an id in the Cost of Care Calculator's CARE_TYPES list, if one exists for this option. */
  calculatorCareId?: string;
  /** Optional link to a live directory of this housing type. Renders a
   *  prominent band directly under the description, which is the point
   *  where a reader has decided this option fits and wants to see real
   *  homes. All three props must be supplied for the band to render. */
  listingsHref?: string;
  listingsLabel?: string;
  listingsIntro?: string;
}

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-l-4 border-gold pl-5">
    <p className="text-foreground text-base md:text-lg leading-relaxed">
      <span className="font-bold text-foreground">{label}:</span>{" "}
      {/* WAS text-foreground/85 — an 85% opacity that rendered body copy
          faded against the cream background. Full strength now. */}
      <span className="text-foreground">{children}</span>
    </p>
  </div>
);

const HousingOptionDetail = ({
  title,
  slug,
  whatItIs,
  bestFor,
  typicalCosts,
  whatsIncluded,
  metaDescription,
  calculatorCareId,
  listingsHref,
  listingsLabel,
  listingsIntro,
}: HousingOptionDetailProps) => {
  const url = `https://realpropertyplanning.com/senior-living/${slug}`;
  return (
    <>
      <SEOHead
        title={`${title} in Washington State | Real Property Planning`}
        description={metaDescription}
        canonical={url}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com/" },
          { name: "Senior Placement", url: "https://realpropertyplanning.com/senior-placement" },
          { name: title, url },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero stack */}
        <section className="pt-0 pb-0 bg-transparent">
          <div style={{ lineHeight: 0 }}>
            <img
              src={housingOptionsHero}
              alt={`${title} — senior housing option in Washington State`}
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
              loading="eager"
              sizes="100vw"
              decoding="async"
              width={1920}
              height={595}
            />
            {/* ADDED as="h1". Without it these six senior-living pages had no
                H1 at all — the page title rendered as a plain band with no
                heading semantics. Screen readers had no top-level landmark
                and search engines saw a page with no primary heading. */}
            <HeroBandTitle as="h1">{title}</HeroBandTitle>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <Row label="What it is">{whatItIs}</Row>
              <Row label="Best for">{bestFor}</Row>
              <Row label="Typical costs">{typicalCosts}</Row>
              <Row label="What's typically included">{whatsIncluded}</Row>
            </div>
          </div>
        </section>

        {/* Live listings — sits directly under the description, before the
            calculator. A reader who has just finished the four rows has
            decided whether this option fits; that is the moment they want
            to see actual homes. Placing it after the calculator would
            catch them later, by which point some have left. */}
        {listingsHref && listingsLabel && (
          <section className="py-10 md:py-14 bg-background border-t border-border">
            <div className="container px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                {listingsIntro && <p className="text-foreground text-lg leading-relaxed mb-6">{listingsIntro}</p>}
                <Link to={listingsHref}>
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                    {listingsLabel} →
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {calculatorCareId && (
          <section className="py-12 md:py-16 bg-secondary">
            <div className="container px-6 lg:px-8">
              <CostOfCareEmbed careTypeId={calculatorCareId} />
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/contact">
                <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                  Talk to a Senior Living Advisor →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default HousingOptionDetail;
