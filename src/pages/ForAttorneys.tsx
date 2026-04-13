import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import CTASection from "@/components/CTASection";
import ServiceNavTileCard from "@/components/ServiceNavTileCard";
import type { ServiceTile } from "@/components/service-nav-tiles-data";
import iconProbate from "@/assets/icons/probate-property-sales-icon-washington.webp";
import iconDivorce from "@/assets/icons/attorney-divorce-property-icon-washington.webp";
import iconElderLaw from "@/assets/icons/attorney-elder-law-icon-washington.webp";
import iconEstatePlanning from "@/assets/icons/attorney-estate-planning-icon-washington.webp";
import iconFamilyLaw from "@/assets/icons/attorney-family-law-property-icon-washington.webp";
import iconRealEstateAttorney from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";

const attorneyTiles: ServiceTile[] = [
  { title: "Probate\nAttorneys", subtitle: "", href: "/for-probate-attorneys", iconSrc: iconProbate },
  { title: "Estate Planning\nAttorneys", subtitle: "", href: "/for-estate-planning-attorneys", iconSrc: iconEstatePlanning },
  { title: "Elder Law\nAttorneys", subtitle: "", href: "/for-elder-law-attorneys", iconSrc: iconElderLaw },
  { title: "Family Law\nAttorneys", subtitle: "", href: "/for-family-law-attorneys", iconSrc: iconFamilyLaw },
  { title: "Divorce\nAttorneys", subtitle: "", href: "/for-divorce-attorneys", iconSrc: iconDivorce },
  { title: "Real Estate\nAttorneys", subtitle: "", href: "/real-estate-attorneys", iconSrc: iconRealEstateAttorney },
];

const ForAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate Real Estate Services for Attorneys in Washington State | Real Property Planning"
      description="A trusted real estate resource for attorneys handling probate and estate matters in Washington State. Licensed Broker & Certified Appraiser with deep expertise in inherited and court-supervised property sales."
    />
    <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-secondary pt-8 md:pt-12 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <img src={iconAttorneys} alt="Probate real estate services for attorneys in Washington State" className="block w-full max-w-[23rem] h-auto object-contain"  loading="lazy"/>
          </div>
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Attorneys
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
            Real Estate Support for Probate &amp; Estate Attorneys
          </h1>
          <p className="text-muted-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
            Real Property Planning handles valuation, preparation, coordination, and sale — so you and your client can focus on legal and financial priorities.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Attorney Specialty Tiles */}
    <section className="py-12 lg:py-16 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
              Areas of Collaboration
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Select the area that best fits your client's situation:
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-0 sm:grid-cols-3 attorney-tiles-grid">
            {attorneyTiles.map((tile, index) => (
              <ServiceNavTileCard key={tile.href + tile.title} tile={tile} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/for-attorneys/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about working with Attorneys →
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForAttorneys;
