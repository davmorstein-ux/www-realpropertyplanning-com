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
import estateLiquidatorsTile from "@/assets/estate-liquidators-tile-transparent.png";
import attorneysTileImg from "@/assets/legal/attorneys-tile.webp";

type Card = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  cta?: string;
};

const legal: Card[] = [
  { title: "Attorneys", description: "Estate planning, probate, elder law, family law, divorce, and real estate attorneys throughout Washington State.", href: "/for-attorneys", image: attorneysTileImg, alt: "Attorneys Washington State", cta: "Meet the Attorneys" },
];

const financial: Card[] = [
  { title: "CPAs", description: "Tax guidance, estate coordination, and compliance for probate and inherited assets.", href: "/for-cpas", image: "/tiles/set1/cpas-tile.webp", alt: "CPAs Washington State", cta: "Learn More" },
  { title: "Financial Planners", description: "Long-term financial planning, inherited asset guidance, and senior housing cost planning.", href: "/professionals/financial-planners", image: "/tiles/set1/financial-planners-tile.webp", alt: "Financial planners Washington State", cta: "Learn More" },
  { title: "Mortgage Lenders", description: "Financing options for estate, inherited, and transitional properties.", href: "/mortgage-lenders", image: "/tiles/set1/mortgage-lenders-tile.webp", alt: "Mortgage lenders Washington State", cta: "Learn More" },
  { title: "Certified Appraisers", description: "Independent property valuation for estate, probate, and trust purposes.", href: "/real-estate-appraiser", image: "/tiles/set1/real-estate-appraisers-tile.webp", alt: "Certified real estate appraisers Washington State", cta: "Learn More" },
];

const housing: Card[] = [
  { title: "Senior Living Advisors", description: "Help evaluating assisted living, memory care, and housing options.", href: "/senior-living-advisors", image: "/tiles/set1/senior-living-advisors-tile.png", alt: "Senior living advisors Washington State", cta: "Learn More" },
  { title: "Medicare & Benefits Advisors", description: "Navigating Medicare, Medicaid, and care funding options.", href: "/medicare-providers", image: "/tiles/set1/medicare-providers-tile.png", alt: "Medicare and benefits advisors Washington State", cta: "Learn More" },
  { title: "Aging Life Care Managers", description: "Guides seniors and families through housing, care, and life transition decisions.", href: "/aging-life-care-managers", image: "/tiles/set1/aging-life-care-managers-tile.png", alt: "Aging Life Care Managers Washington State", cta: "Learn More" },
  { title: "Senior Move Managers", description: "Sorting, packing, and coordinating a senior's move with patience and care.", href: "/senior-move-managers", image: "/tiles/set1/senior-move-managers-tile.png", alt: "Senior move managers Washington State", cta: "Learn More" },
];

const property: Card[] = [
  { title: "Real Estate Brokers", description: "Probate, estate, and senior transition property sales throughout Washington State.", href: "/realtor", image: "/tiles/set1/real-estate-brokers-tile.png", alt: "Real estate brokers Washington State", cta: "Learn More" },
  { title: "Estate Liquidators", description: "Companies that organize and conduct estate sales, residential clear outs, and personal property liquidation.", href: "/estate-liquidators", image: "/tiles/set1/estate-liquidators-tile.png", alt: "Estate liquidators Washington State — estate sales, appraisal, sorting, staging, marketing", cta: "Learn More" },
  { title: "Title & Escrow", description: "Closing coordination for estate and inherited property transactions.", href: "/title-and-escrow", image: "/tiles/set1/title-escrow-tile.png", alt: "Title and escrow Washington State", cta: "Learn More" },
  { title: "Probate & Estate Sales", description: "Specialized real estate guidance for court-supervised and estate property sales.", href: "/probate-estate-sales", image: "/tiles/set1/probate-estate-sales-tile.png", alt: "Probate and estate sales Washington State", cta: "Learn More" },
];

const Section = ({ heading, cards, bg = "bg-background" }: { heading: string; cards: Card[]; bg?: string }) => (

  <section className={`py-10 lg:py-12 ${bg}`}>

    <div className="container px-6 lg:px-8">

      <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ color: "#1B3A6B" }}>

        {heading}

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {cards.map((s) => (

          <Link

            key={s.title + s.href}

            to={s.href}

            aria-label={`${s.title} — ${s.description}`}

            style={{ textDecoration: "none" }}

          >

            <div

              style={{

                background: "#fff",

                borderRadius: 16,

                border: "1px solid rgba(0,0,0,0.08)",

                overflow: "hidden",

                height: "100%",

                display: "flex",

                flexDirection: "column",

                transition: "box-shadow 0.2s ease, transform 0.2s ease",

              }}

              onMouseEnter={(e) => {

                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";

                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";

              }}

              onMouseLeave={(e) => {

                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";

                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";

              }}

            >

              {/* Photo */}

              <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>

                <img

                  src={s.image}

                  alt={s.alt}

                  loading="lazy"

                  style={{

                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    objectPosition: "center",

                    display: "block",

                  }}

                />

              </div>

              {/* Card body */}

              <div style={{ padding: "16px 20px 0", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>

                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", lineHeight: 1.3, marginBottom: 6, minHeight: 48 }}>

                  {s.title}

                </h3>

                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, flex: 1 }}>

                  {s.description}

                </p>

              </div>

              {/* CTA bar */}

              <div style={{ padding: "12px 20px 16px" }}>

                <div

                  style={{

                    background: "#C9A84C",

                    borderRadius: 8,

                    padding: "10px 16px",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    gap: 6,

                    fontFamily: "'Raleway', sans-serif",

                    fontSize: 13,

                    fontWeight: 700,

                    color: "#fff",

                    letterSpacing: "0.04em",

                  }}

                >

                  {s.cta}

                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

                    <polyline points="9 18 15 12 9 6" />

                  </svg>

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
          <section className="py-10 lg:py-12 bg-background">
            <div className="container px-6 lg:px-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-center" style={{ color: "#1B3A6B" }}>
                Legal Professionals
              </h2>
              <div className="flex justify-center">
                <div style={{ width: "100%", maxWidth: 360 }}>
                  {legal.map((s) => (
                    <a key={s.title} href={s.href} style={{ textDecoration: "none", display: "block" }}>
                      <div style={{ background: "#fff", borderRadius: 16, border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", transition: "box-shadow 0.2s ease, transform 0.2s ease" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                      >
                        <div style={{ width: "100%", height: 180, overflow: "hidden" }}>
                          <img src={s.image} alt={s.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                        </div>
                        <div style={{ padding: "16px 20px 0" }}>
                          <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#1B3A6B", lineHeight: 1.3, marginBottom: 6 }}>{s.title}</h3>
                          <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{s.description}</p>
                        </div>
                        <div style={{ padding: "12px 20px 16px" }}>
                          <div style={{ background: "#C9A84C", borderRadius: 8, padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "'Raleway', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>
                            {s.cta}
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <Section heading="Financial & Valuation Professionals" cards={financial} bg="bg-secondary" />
        </div>
        <div>
          <Section heading="Senior Housing & Care" cards={housing} bg="bg-background" />
        </div>
        <div>
          <Section heading="Property & Transition Support" cards={property} bg="bg-secondary" />
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
