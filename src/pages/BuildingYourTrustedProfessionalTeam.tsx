import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articleSchema } from "@/lib/schema";
import wtdwHeroImage from "@/assets/building-trusted-professional-team-hero.webp";
import HeroBandTitle from "@/components/HeroBandTitle";
import probateAttorneyImg from "@/assets/legal/probate-attorney.webp";
import estatePlanningAttorneyImg from "@/assets/legal/estate-planning-attorney.webp";
import elderLawAttorneyImg from "@/assets/legal/elder-law-attorney.webp";
import realEstateAttorneyImg from "@/assets/legal/real-estate-attorney.webp";
import familyLawAttorneyImg from "@/assets/legal/family-law-attorney.webp";
import divorceAttorneyImg from "@/assets/legal/divorce-attorney.webp";

type Card = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  cta?: string;
};

const legal: Card[] = [
  { title: "Estate Planning Attorneys", description: "Powers of attorney, wills, trusts, guardianship, and future legal planning.", href: "/estate-planning-powers-of-attorney", image: estatePlanningAttorneyImg, alt: "Estate planning attorneys Washington State", cta: "Learn More" },
  { title: "Probate Attorneys", description: "Estate administration, inherited property, and legal coordination after a death.", href: "/resources/probate-estate-attorneys", image: probateAttorneyImg, alt: "Probate attorneys Washington State", cta: "Learn More" },
  { title: "Elder Law Attorneys", description: "Legal guidance for aging, care planning, and senior-related decisions.", href: "/attorneys/for-elder-law-attorneys", image: elderLawAttorneyImg, alt: "Elder law attorneys Washington State", cta: "Learn More" },
  { title: "Real Estate Attorneys", description: "Title, property transfers, and real estate legal matters.", href: "/attorneys/for-real-estate-attorneys", image: realEstateAttorneyImg, alt: "Real estate attorneys Washington State", cta: "Learn More" },
  { title: "Family Law Attorney", description: "Custody, parenting plans, and spousal support guidance for families navigating difficult transitions.", href: "/attorneys/for-family-law-attorneys", image: familyLawAttorneyImg, alt: "Family law attorneys Washington State", cta: "Learn More" },
  { title: "Divorce Attorney", description: "Guidance through divorce proceedings, property division, and settlement agreements.", href: "/attorneys/for-divorce-attorneys", image: divorceAttorneyImg, alt: "Divorce attorneys Washington State", cta: "Learn More" },
];

const financial: Card[] = [
  { title: "CPAs", description: "Tax guidance, estate coordination, and compliance for probate and inherited assets.", href: "/for-cpas", image: "/tiles/set1/certified-public-accountants.webp", alt: "CPAs Washington State", cta: "Learn More" },
  { title: "Financial Planners", description: "Long-term financial planning, inherited asset guidance, and senior housing cost planning.", href: "/professionals/financial-planners", image: "/tiles/set1/financial-planners.webp", alt: "Financial planners Washington State", cta: "Learn More" },
  { title: "Mortgage Lenders", description: "Financing options for estate, inherited, and transitional properties.", href: "/mortgage-lenders", image: "/tiles/set1/mortgage-lenders.webp", alt: "Mortgage lenders Washington State", cta: "Learn More" },
  { title: "Certified Appraisers", description: "Independent property valuation for estate, probate, and trust purposes.", href: "/real-estate-appraiser", image: "/tiles/set1/real-estate-appraisers.webp", alt: "Certified real estate appraisers Washington State", cta: "Learn More" },
];

const housing: Card[] = [
  { title: "Senior Living Advisors", description: "Help evaluating assisted living, memory care, and housing options.", href: "/senior-placement", image: "/tiles/set1/senior-living-advisors.webp", alt: "Senior living advisors Washington State", cta: "Learn More" },
  { title: "Medicare & Benefits Advisors", description: "Navigating Medicare, Medicaid, and care funding options.", href: "/medicare-providers", image: "/tiles/set3/medicare-providers.webp", alt: "Medicare and benefits advisors Washington State", cta: "Learn More" },
  { title: "Aging Life Care Managers", description: "Guides seniors and families through housing, care, and life transition decisions.", href: "/aging-life-care-managers", image: "/tiles/set3/paying-for-senior-living.webp", alt: "Aging Life Care Managers Washington State", cta: "Learn More" },
  { title: "Senior Move Managers", description: "Sorting, packing, and coordinating a senior's move with patience and care.", href: "/senior-move-managers", image: "/tiles/set1/senior-move-managers.webp", alt: "Senior move managers Washington State", cta: "Learn More" },
];

const property: Card[] = [
  { title: "Real Estate Brokers", description: "Probate, estate, and senior transition property sales throughout Washington State.", href: "/realtor", image: "/tiles/set1/real-estate-brokers.webp", alt: "Real estate brokers Washington State", cta: "Learn More" },
  
  { title: "Title & Escrow", description: "Closing coordination for estate and inherited property transactions.", href: "/title-and-escrow", image: "/tiles/set2/title-escrow.webp", alt: "Title and escrow Washington State", cta: "Learn More" },
  { title: "Probate & Estate Sales", description: "Specialized real estate guidance for court-supervised and estate property sales.", href: "/probate-estate-sales", image: "/tiles/set2/probate-estate-sales.webp", alt: "Probate and estate sales Washington State", cta: "Learn More" },
];

const Section = ({ heading, cards }: { heading: string; cards: Card[] }) => (
  <section className="py-10 lg:py-12">
      <div className="mx-auto px-0" style={{ maxWidth: "1600px" }}>
      <h2
        className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-center"
        style={{ color: "#1B3A6B" }}
      >
        {heading}
      </h2>
      <p className="text-muted-foreground text-base leading-relaxed text-center max-w-3xl mx-auto mb-7">
        ​
      </p>
      <div className={`pro-team-grid grid ${cards.length === 4 ? "grid-cols-4" : "grid-cols-3"} gap-x-0 gap-y-2 items-stretch justify-items-stretch`}>
        {cards.map((s) => (
          <Link
            key={s.title + s.href}
            to={s.href}
            aria-label={`${s.title} — ${s.description} — ${s.cta}`}
            className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <div className="tile-white__inner h-full relative">
              <div className="tile-white__face h-full">
                <div className="flex h-full flex-col">
                  <div style={{ width: "100%", lineHeight: "0", background: "hsl(var(--background))" }}>
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "contain",
                        display: "block",
                        margin: "0",
                        padding: "0",
                        background: "transparent",
                      }}
                    />
                  </div>
                  <div
                    className="relative flex flex-1 flex-col items-center text-center overflow-hidden"
                    style={{ padding: "8px 8px 12px" }}
                  >
                    <h3
                      className="font-serif text-[17px] md:text-[19px] font-bold leading-snug mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0 whitespace-nowrap"
                      style={{ color: "#1B3A6B", textDecoration: "none" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mb-2 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0"
                      style={{ color: "#374151", fontSize: "16px", lineHeight: 1.6, textDecoration: "none" }}
                    >
                      {s.description}
                    </p>
                    <span
                      className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0"
                      style={{ textDecoration: "none" }}
                    >
                      {s.cta}
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "rgba(10, 20, 46, 0.97)",
                        zIndex: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "1.25rem 1.5rem",
                        transition: "opacity 0.28s ease 0.1s",
                      }}
                    >
                      <h3 className="font-serif text-white text-[22px] md:text-[24px] font-bold leading-snug mb-3">
                        {s.title}
                      </h3>
                      <span
                        className="inline-flex items-center gap-2 text-[16px] font-bold tracking-wide"
                        style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {s.cta}
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const jsonLd = articleSchema({
  headline: "Building Your Trusted Professional Team",
  description:
    "Connect with vetted legal, financial, senior housing, and property professionals throughout Washington State.",
  url: "/building-your-trusted-professional-team",
  datePublished: "2026-05-08",
  dateModified: "2026-05-17",
  about: ["Professional team", "Senior transitions", "Estate planning", "Probate"],
});

const BuildingYourTrustedProfessionalTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Building Your Trusted Professional Team | Real Property Planning"
        description="Connect with vetted legal, financial, senior housing, and property professionals throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Building Your Trusted Professional Team", url: "/building-your-trusted-professional-team" }]} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={wtdwHeroImage}
              alt="Quiet Washington street with craftsman homes"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover block"
              loading="eager"
            />
            <HeroBandTitle as="div">A Guide to Independent Professionals</HeroBandTitle>
          </div>
        </section>

        <h1 className="sr-only">A Guide to Trusted, Independent Professionals</h1>

        <div id="legal-professionals" className="scroll-mt-20 bg-background">
          <Section heading="Legal Professionals" cards={legal} />
        </div>
        <div className="bg-secondary">
          <Section heading="Financial & Valuation Professionals" cards={financial} />
        </div>
        <div className="bg-background">
          <Section heading="Senior Housing & Care" cards={housing} />
        </div>
        <div className="bg-secondary">
          <Section heading="Property & Transition Support" cards={property} />
        </div>

        {/* Closing CTA */}
        <section className="py-12 lg:py-16 bg-primary">
          <div className="px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Not Sure Who You Need?
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-7">
                Real Property Planning can help point you toward the right kinds of independent professionals for your situation. It is an educational hub and connection point — the professionals referenced are independent and are not employees or affiliates of Real Property Planning.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default BuildingYourTrustedProfessionalTeam;
