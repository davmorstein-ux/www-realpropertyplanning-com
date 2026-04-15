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
      title="Real Estate Support for Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning provides valuation, preparation, and sale coordination for probate, estate, elder law, family law, and divorce attorneys throughout Washington State."
    />
    <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-3 md:mb-4">
            <img src={iconAttorneys} alt="Real estate support for probate estate and family law attorneys Washington State" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy"/>
          </div>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Attorneys
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
            Real Estate Support for Probate &amp; Estate Attorneys in Washington State
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
            Real Property Planning handles valuation, preparation, coordination, and sale — so you and your client can focus on legal and financial priorities.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Attorney Specialty Tiles */}
    <section className="pt-6 md:pt-8 pb-12 lg:pb-16 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-muted-foreground text-lg md:text-xl leading-[1.8] font-bold mb-4 md:mb-6">
            Select the area of law that best fits your client's situation below.
          </p>
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-3">
              Areas of Collaboration
            </h2>
          </div>
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-0 sm:grid-cols-3 attorney-tiles-grid">
            {attorneyTiles.map((tile, index) => (
              <ServiceNavTileCard key={tile.href + tile.title} tile={tile} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Introductory copy below tiles */}
    <section className="py-10 md:py-14 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8]">
            Attorneys working in probate, estate planning, elder law, family law, and divorce regularly encounter real estate questions that fall outside the scope of legal counsel. When a client needs honest property valuation, coordinated sale management, or a professional who can hold a complex multi-party process together — that's where Real Property Planning fits in.
          </p>
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
