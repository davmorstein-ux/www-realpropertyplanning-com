import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import JourneyShortcuts from "@/components/JourneyShortcuts";
import { articleSchema } from "@/lib/schema";
import HeroBandTitle from "@/components/HeroBandTitle";
import SimpleHubChoices from "@/components/SimpleHubChoices";
import { TEAM_HUB_CHOICES, TEAM_NOT_SURE } from "@/lib/team-simple";

type Card = {
  title: string;
  description: string;
  href: string;
  cta?: string;
};

const legal: Card[] = [
  {
    title: "Attorneys",
    description:
      "Estate planning, probate, elder law, family law, divorce, and real estate attorneys throughout Washington State.",
    href: "/for-attorneys",
    cta: "Meet the Attorneys",
  },
];

const financial: Card[] = [
  {
    title: "CPAs",
    description: "Tax guidance, estate coordination, and compliance for probate and inherited assets.",
    href: "/for-cpas",
    cta: "Learn More",
  },
  {
    title: "Financial Planners",
    description: "Long-term financial planning, inherited asset guidance, and senior housing cost planning.",
    href: "/professionals/financial-planners",
    cta: "Learn More",
  },
  {
    title: "Mortgage Lenders",
    description: "Financing options for estate, inherited, and transitional properties.",
    href: "/mortgage-lenders",
    cta: "Learn More",
  },
  {
    title: "Certified Appraisers",
    description: "Independent property valuation for estate, probate, and trust purposes.",
    href: "/real-estate-appraiser",
    cta: "Learn More",
  },
];

const housing: Card[] = [
  {
    title: "Senior Living Advisors",
    description: "Help evaluating assisted living, memory care, and housing options.",
    href: "/senior-living-advisors",
    cta: "Learn More",
  },
  {
    title: "Medicare & Benefits Advisors",
    description: "Help with Medicare, Medicaid, and care funding options.",
    href: "/medicare-providers",
    cta: "Learn More",
  },
  {
    title: "Aging Life Care Managers",
    description: "Guides seniors and families through housing, care, and life transition decisions.",
    href: "/aging-life-care-managers",
    cta: "Learn More",
  },
  {
    title: "Senior Move Managers",
    description: "Sorting, packing, and coordinating a senior's move.",
    href: "/senior-move-managers",
    cta: "Learn More",
  },
];

const property: Card[] = [
  {
    title: "Real Estate Brokers",
    description: "Probate, estate, and senior transition property sales throughout Washington State.",
    href: "/realtor",
    cta: "Learn More",
  },
  {
    title: "Estate Liquidators",
    description:
      "Companies that organize and conduct estate sales, residential clear outs, and personal property liquidation.",
    href: "/estate-liquidators",
    cta: "Learn More",
  },
  {
    title: "Title & Escrow",
    description: "Closing coordination for estate and inherited property transactions.",
    href: "/title-and-escrow",
    cta: "Learn More",
  },
  {
    title: "Probate & Estate Sales",
    description: "Specialized real estate guidance for court-supervised and estate property sales.",
    href: "/probate-estate-sales",
    cta: "Learn More",
  },
];

/** Every card above, A to Z, for the plain list under the buttons. */
const ALL_PROFESSIONALS = [...legal, ...financial, ...housing, ...property].sort((x, y) =>
  x.title.localeCompare(y.title),
);

const jsonLd = articleSchema({
  headline: "Building Your Professional Team",
  description:
    "Find independent legal, financial, senior housing, and property professionals throughout Washington State.",
  url: "/building-your-professional-team",
  datePublished: "2026-05-08",
  dateModified: "2026-09-27",
  about: ["Professional team", "Senior transitions", "Estate planning", "Probate"],
});

const BuildingYourTrustedProfessionalTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Building Your Professional Team | Real Property Planning"
        description="Find independent legal, financial, senior housing, and property professionals throughout Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Building Your Professional Team", url: "/building-your-professional-team" }]}
      />
      <Header />
      <main id="main-content" className="apf">
        
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
<HeroBandTitle as="h1">A Guide to Independent Professionals</HeroBandTitle>
          </div>
        </section>

        {/* Simplified (Oct 23, 2026, same pattern as the other three homepage
            paths): six photo buttons that ask by need rather than job title,
            a full-width "Not sure who you need?" bar, then every kind of
            professional A-Z as a plain list, so no page loses its link. This
            replaced the four groups of 13 cards, the group dropdown and the
            closing "Not Sure Who You Need?" band. Labels and images:
            src/lib/team-simple.ts. */}
        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="apf-ask">What do you need help with?</p>
            <SimpleHubChoices choices={TEAM_HUB_CHOICES} notSure={TEAM_NOT_SURE} />
            <JourneyShortcuts lead="Want a quick answer first?" questions="professional" style={{ margin: "32px auto 0" }} />

            <div className="apf-az">
              <h2 className="apf-h2">Every kind of professional, A to Z</h2>
              <ul className="apf-az-list">
                {ALL_PROFESSIONALS.map((c) => (
                  <li key={c.href}>
                    <Link to={c.href}>{c.title}</Link>
                    <span>{c.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* "Common Challenges" / "Common Mistakes" (GuidanceGrid) removed from this hub on
            Oct 27, 2026 (David: simplify the hubs); its three items were deleted from
            src/lib/inheritedPropertyGuidance.ts. */}

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default BuildingYourTrustedProfessionalTeam;
