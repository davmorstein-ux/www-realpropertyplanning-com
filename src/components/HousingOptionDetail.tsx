import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import housingOptionsHero from "@/assets/housing_options_hero.webp";

export interface HousingOptionDetailProps {
  title: string;
  slug: string;
  whatItIs: string;
  bestFor: string;
  typicalCosts: string;
  whatsIncluded: string;
  metaDescription: string;
}

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="border-l-4 border-gold pl-5">
    <p className="text-foreground text-base md:text-lg leading-relaxed">
      <span className="font-bold text-foreground">{label}:</span>{" "}
      <span className="text-foreground/85">{children}</span>
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
            />
            <HeroBandTitle>{title}</HeroBandTitle>
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
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default HousingOptionDetail;
