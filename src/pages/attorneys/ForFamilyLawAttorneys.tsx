import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import FeaturedAttorneyPlaceholder from "@/components/FeaturedAttorneyPlaceholder";
import GoldCheck3D from "@/components/GoldCheck3D";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { brokerageAttribution, appraisalAttribution,  FEATURED_BROKER, SAME_PERSON} from "@/data/featuredProfessionals";

/*
  ATTRIBUTION NOTE — do not reintroduce "our team" / "we" / "Real Property Planning"
  as the actor on this page.

  Real Property Planning is a neutral educational hub. It does not provide
  brokerage, appraisal, legal, tax, or advisory services, and it has no team.
  The real estate and appraisal work described on this page is performed by
  the featured broker personally (src/data/featuredProfessionals.ts) — today a Washington State licensed real estate broker
  with eXp Realty, and as a certified residential appraiser through Stein
  Appraisal — both of which are separate businesses from this site.

  SEPARATE REVIEW ITEM (not an attribution issue): the neutrality language in
  the "Neutral, Professional Coordination" service and the first FAQ describes
  an agency posture toward two opposing parties. That wording is preserved here
  exactly as written and should be reviewed with the eXp designated broker for
  consistency with Washington agency and dual-agency disclosure requirements.
*/

const intersections = [
  "Division of real property between parties who may not agree on value or timing",
  "Sale of a shared home during active legal proceedings",
  "One party buying out the other, which requires an agreed-upon and defensible market value",
  "Coordinating the sale timeline with legal proceedings and court requirements",
  "Managing communication between parties who may have limited direct contact",
  "Preparing a home for sale when neither party is fully responsible for managing the process",
];

const services = [
  {
    title: "Accurate Market Valuation",
    description: (
      <>
        A shared, objective market value usually makes a family law property matter easier to move forward. {FEATURED_BROKER.Role} provides a condition-adjusted market analysis supported by comparable sales, rather than a listing agent's pitch, so both parties can evaluate it from the same factual foundation.
      </>
    ),
  },
  {
    title: "Neutral, Professional Coordination",
    description: `${FEATURED_BROKER.Role} does not represent either party's interests; the role is to handle the property professionally and move the process forward. ${FEATURED_BROKER.pronoun.Subject} maintains clear, consistent communication with both parties (or through their respective counsel) and manages the sale with the goal of a fair outcome, not a fast commission.`,
  },
  {
    title: "Structured Process Guidance",
    description: `Some clients in family law matters have never managed a home sale on their own. ${FEATURED_BROKER.Role} explains each step, manages the preparation and listing process, and aims to give regular updates so clients know where things stand.`,
  },
  {
    title: "Calm, Consistent Communication",
    description: `When communication between the parties is strained, updates that are consistent, factual and professionally neutral can reduce opportunities for misunderstanding and conflict. ${FEATURED_BROKER.Role} keeps to that structure.`,
  },
];

const faqs = [
  {
    question: `Can ${FEATURED_BROKER.role} work with both parties in a family law property situation?`,
    answer: `Yes. ${FEATURED_BROKER.Role}'s role is explicitly neutral. ${FEATURED_BROKER.pronoun.Subject} provides objective market analysis and manages the sale process without advocating for either party. Communication can be set up to go through each party's counsel if that is preferred.`,
  },
  {
    question: "How does valuation work when parties disagree on what the home is worth?",
    answer: `${FEATURED_BROKER.Role} provides a condition-adjusted, comparable-supported market analysis${SAME_PERSON ? ` grounded in ${FEATURED_BROKER.pronoun.possessive} certified appraisal training` : ""}. Because the analysis is methodology-based rather than opinion-based, it gives both parties and their attorneys a shared factual foundation, which can resolve valuation disputes more efficiently than competing agent opinions.`,
  },
  {
    question: "Can the home be sold during active legal proceedings?",
    answer: `In many cases, yes, though the specifics depend on court orders, agreements between the parties, and the legal structure of the proceeding. ${FEATURED_BROKER.Role} works within whatever legal requirements are in place and coordinates with both attorneys so the real estate process fits the legal timeline instead of complicating it.`,
  },
];

const ForFamilyLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Family Law Attorneys in Washington State | Real Property Planning"
      description={`${FEATURED_BROKER.Role} — a Washington State licensed real estate broker${SAME_PERSON ? " and certified residential appraiser" : ""} — provides experienced real estate support for family law attorneys and their clients navigating property decisions in Washington State.`}
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Family Law Attorneys", url: "/for-family-law-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <HeroBandTitle as="h1">Family Law Attorneys</HeroBandTitle>

    {/* Opening */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            In a family law matter, the home is often where the parties disagree most and where each one's financial future is decided. What clients usually need is an honest assessment of what the home is worth and what their realistic options are, without pressure or a rushed listing.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {FEATURED_BROKER.Role} works with family law attorneys in Washington State to provide valuation, structured guidance, and a calm, professional approach meant to reduce conflict rather than add to it.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Family Law Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Family Law Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Property decisions in family law situations involve layers that standard real estate transactions don't:
          </p>
          <div className="grid gap-4">
            {intersections.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* How the featured broker Supports Your Clients */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-10">
            How {FEATURED_BROKER.roleTitle} Supports Your Clients
          </h2>
          <div className="grid gap-5">
            {services.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl px-7 py-6">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mt-8">
            {brokerageAttribution} {appraisalAttribution} Real Property Planning is an educational hub and does not provide
            brokerage, appraisal, legal, or tax services.
          </p>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Frequently Asked Questions" />

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Discuss a Client Situation
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If a client's family law matter involves real property in Washington State, a brief conversation is usually the most efficient place to start.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            {FEATURED_BROKER.Role} works with family law attorneys in the Puget Sound area, providing neutral, structured real estate support intended to help complex situations move forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${FEATURED_BROKER.phoneTel}`}>
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                Call {FEATURED_BROKER.phone}
              </Button>
            </a>
            <Link to="/contact?reason=join-network">
              <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <FeaturedAttorneyPlaceholder />
    <RelatedServices currentPath="/for-family-law-attorneys" />
    <DisclaimerSection />
      <BackToProfessionals />
    </main>
    <Footer />
  </div>
);

export default ForFamilyLawAttorneys;
