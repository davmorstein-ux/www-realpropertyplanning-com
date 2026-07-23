import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { afhListings } from "@/data/afhListings";
import { AFHListingCard, AFHListingsDisclaimer } from "@/components/AFHListingCard";
import { Link } from "react-router-dom";

const GREEN = "#0a5648";

interface AFHCityHubProps {
  city: string;
  county: string;
  slug: string;
  metaDescription: string;
  intro: ReactNode;
  faqs: { question: string; answer: string }[];
}

const AFHCityHub = ({ city, county, slug, metaDescription, intro, faqs }: AFHCityHubProps) => {
  const cityListings = afhListings.filter((l) => l.city.toLowerCase() === city.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Adult Family Homes For Sale in ${city}, WA | Real Property Planning`}
        description={metaDescription}
        canonical={`https://realpropertyplanning.com/afh-club/for-sale/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: `For Sale in ${city}, WA`, url: `/afh-club/for-sale/${slug}` },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{`Adult Family Homes For Sale in ${city}, WA`}</HeroBandTitle>

        <section className="py-12 md:py-16 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed space-y-4">
              {intro}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Currently Available</p>
              <h2 className="font-serif text-[26px] md:text-[34px] font-semibold text-navy leading-tight">
                {cityListings.length > 0
                  ? `Adult Family Homes for sale in ${city} right now`
                  : `No active ${city} listings at this exact moment`}
              </h2>
            </div>

            {cityListings.length > 0 ? (
              <div className="max-w-[1000px] mx-auto flex flex-col gap-4">
                {cityListings.map((listing, index) => (
                  <AFHListingCard key={listing.id} listing={listing} index={index} total={cityListings.length} />
                ))}
                <AFHListingsDisclaimer />
              </div>
            ) : (
              <div className="max-w-2xl mx-auto text-center text-foreground/80 text-[17px] leading-relaxed">
                <p className="mb-6">
                  Inventory in {city} changes regularly — a specific address isn't always on the market at any given
                  moment. The fastest way to see what's currently available across {county} County, or to get
                  notified the moment a {city} property lists, is to browse the full marketplace or reach out
                  directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/afh-club/listings"
                    className="inline-flex items-center justify-center gap-2 bg-[#0a5648] text-white font-bold px-6 py-3 rounded-lg no-underline"
                  >
                    Browse All AFH Listings
                  </Link>
                  <a
                    href="tel:+12069003015"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#0a5648] text-[#0a5648] font-bold px-6 py-3 rounded-lg no-underline"
                  >
                    Call (206) 900-3015
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <PageFAQ
          faqs={faqs}
          heading={`Adult Family Homes in ${city}, WA: Common Questions`}
          eyebrow="Frequently Asked Questions"
          id={`afh-${slug}`}
        />
      </main>
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AFHCityHub;
