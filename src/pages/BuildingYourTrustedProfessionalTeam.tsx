import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articleSchema } from "@/lib/schema";
import wtdwHeroImage from "@/assets/building-trusted-professional-team-hero.png";
import HeroBandTitle from "@/components/HeroBandTitle";
import PremiumInfoCard from "@/components/PremiumInfoCard";

type Card = { title: string; description: string; href: string };

const legal: Card[] = [
  { title: "Estate Planning Attorneys", description: "Powers of attorney, wills, trusts, guardianship, and future legal planning.", href: "/estate-planning-powers-of-attorney" },
  { title: "Probate Attorneys", description: "Estate administration, inherited property, and legal coordination after a death.", href: "/resources/probate-estate-attorneys" },
  { title: "Elder Law Attorneys", description: "Legal guidance for aging, care planning, and senior-related decisions.", href: "/attorneys/for-elder-law-attorneys" },
  { title: "Real Estate Attorneys", description: "Title, property transfers, and real estate legal matters.", href: "/attorneys/for-real-estate-attorneys" },
];

const financial: Card[] = [
  { title: "CPAs & Financial Planners", description: "Tax guidance, estate coordination, and long-term financial planning.", href: "/for-cpas" },
  { title: "Mortgage Lenders", description: "Financing options for estate, inherited, and transitional properties.", href: "/lenders-financing-specialists" },
  { title: "Certified Appraisers", description: "Independent property valuation for estate, probate, and trust purposes.", href: "/real-estate-appraiser" },
];

const housing: Card[] = [
  { title: "Senior Living Advisors", description: "Help evaluating assisted living, memory care, and housing options.", href: "/senior-placement" },
  { title: "Medicare & Benefits Advisors", description: "Navigating Medicare, Medicaid, and care funding options.", href: "/medicare-providers" },
  { title: "Caregiving Professionals", description: "In-home care coordination and aging-in-place support.", href: "/helping-an-aging-parent" },
  { title: "Senior Move Managers", description: "Sorting, packing, and coordinating a senior's move with patience and care.", href: "/senior-move-managers" },
];

const property: Card[] = [
  { title: "Real Estate Brokers", description: "Probate, estate, and senior transition property sales throughout Washington State.", href: "/realtor" },
  { title: "Senior Move Managers", description: "Estate cleanout, downsizing coordination, and home preparation.", href: "/resources/senior-move-managers" },
  { title: "Title & Escrow", description: "Closing coordination for estate and inherited property transactions.", href: "/title-and-escrow" },
  { title: "Probate & Estate Sales", description: "Specialized real estate guidance for court-supervised and estate property sales.", href: "/probate-estate-sales" },
];

const Section = ({ heading, cards }: { heading: string; cards: Card[] }) => (
  <section className="py-10 lg:py-12">
    <div className="container px-6 lg:px-8">
      <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-7">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {cards.map((c) => (
          <PremiumInfoCard
            key={c.title + c.href}
            title={c.title}
            description={c.description}
            href={c.href}
          />
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
            <HeroBandTitle as="div">Your Professional Team</HeroBandTitle>
          </div>
        </section>

        <h1 className="sr-only">Building Your Trusted Professional Team</h1>

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
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Not Sure Who You Need?
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-7">
                Real Property Planning can help identify the right professionals for your situation and connect you with trusted resources throughout Washington State.
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
