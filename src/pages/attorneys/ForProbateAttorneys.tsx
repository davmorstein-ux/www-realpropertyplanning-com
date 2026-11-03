import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToProfessionals from "@/components/BackToProfessionals";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import PageFAQ from "@/components/PageFAQ";
import JamesJacksonCard from "@/components/JamesJacksonCard";
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

  No first-person plural anywhere on this page — not even in client-voice
  questions. "We" reads as the site speaking regardless of who is meant.
*/

const intersections = [
  "What is the property actually worth in its current condition, as a defensible, condition-adjusted market value rather than an automated estimate?",
  "Should the property be sold as-is, or are there targeted improvements that would meaningfully improve the outcome?",
  "How does an executor manage a property that's been vacant for months (insurance, utilities, security, maintenance)?",
  "How do heirs coordinate when they live in different states or have different opinions about timing and price?",
  "What does the sale timeline look like relative to the probate proceedings?",
];

const services = [
  {
    title: "Accurate, Defensible Valuation",
    description: (
      <>
        {SAME_PERSON ? (
          <>As a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link>, {FEATURED_BROKER.role} provides</>
        ) : (
          <>{FEATURED_BROKER.Role} provides</>
        )} condition-adjusted market analysis that goes beyond a standard comparative market analysis. The aim is a price that holds up to scrutiny from co-heirs, the court, and the estate attorney reviewing the documentation.
      </>
    ),
  },
  {
    title: "Strategic Sale Guidance",
    description: `${FEATURED_BROKER.Role} advises on timing, pricing, and preparation strategy with fiduciary defensibility in mind. Repair recommendations are weighed against their likely return, and pricing recommendations are documented with comparable sales.`,
  },
  {
    title: "Property Preparation Coordination",
    description: `From professional cleanout to targeted repairs to staging, ${FEATURED_BROKER.role} coordinates preparation through independent local vendors, so neither the executor nor the attorney has to manage it day to day.`,
  },
  {
    title: "Communication With All Parties",
    description: `${FEATURED_BROKER.Role} serves as the single real estate point of contact and aims to keep executors, co-heirs, and the legal team informed with regular, clear updates.`,
  },
  {
    title: "Hands-On Local Support",
    description: `For executors managing Washington State property from out of state, ${FEATURED_BROKER.role} handles the property locally, with photo updates, digital documentation, and remote coordination so the executor can follow the sale from a distance.`,
  },
];

const situations = [
  "Selling inherited property during active probate proceedings",
  "Preparing a longtime family home for sale, often with decades of deferred maintenance",
  "Coordinating among multiple heirs with different opinions on timing and value",
  "Managing the property on behalf of an out-of-state or out-of-area executor",
  "Providing a defensible market value assessment for estate documentation",
  "Handling a sale that involves court approval requirements",
];

const faqs = [
  {
    question: `How does ${FEATURED_BROKER.role} support probate attorneys during property sales?`,
    answer: `${FEATURED_BROKER.Role} handles the real estate side (property assessment, condition-based pricing, preparation coordination, listing, and sale management) and keeps the attorney informed along the way. Attorneys have a single point of contact for property questions. The goal is to keep the real estate side of probate administration simple so you can focus on the legal work.`,
  },
  {
    question: `What is the difference between a CMA and the valuation analysis ${FEATURED_BROKER.role} provides?`,
    answer: `A standard comparative market analysis (CMA) is produced by most listing agents and reflects a general price range based on nearby sales. It is not a formal appraisal, and it typically does not account for condition in a documented, methodology-based way. ${FEATURED_BROKER.Role}'s condition-based pricing combines ${SAME_PERSON ? `${FEATURED_BROKER.pronoun.possessive} certified appraisal training` : "documented condition adjustments"} with current market data. The result is a condition-adjusted, comparable-supported price opinion that is usually more defensible for fiduciary purposes than a standard CMA. For situations requiring a formal appraisal (date-of-death valuations, for example), ${FEATURED_BROKER.role} can discuss appropriate referral resources.`,
  },
  {
    question: "Can you help when heirs disagree about value or timing?",
    answer: `Yes. When heirs have received conflicting price opinions or have different views on what the property is worth, a clear, documented analysis based on comparable sales can settle the disagreement faster than continued negotiation. ${FEATURED_BROKER.Role} can present the analysis to all parties, together or separately, and walk through the comparable data in plain language.`,
  },
  {
    question: "Do you work with probate attorneys outside of Western Washington?",
    answer: `${FEATURED_BROKER.Role}'s service area is all of Washington State. For clients outside Washington, ${FEATURED_BROKER.role} can connect attorneys and clients with a licensed broker in other states through ${FEATURED_BROKER.pronoun.possessive} ${FEATURED_BROKER.brokerage} network.`,
  },
];

const ForProbateAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Probate Attorneys in Washington State | Real Property Planning"
      description={`${FEATURED_BROKER.Role} — a Washington State licensed real estate broker${SAME_PERSON ? " and certified residential appraiser" : ""} — provides property assessment, valuation, preparation, and sale coordination for probate attorneys and their clients throughout Washington State.`}
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Probate Attorneys", url: "/for-probate-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <HeroBandTitle as="h1">Probate Attorneys</HeroBandTitle>

    {/* Opening */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When real estate is part of a probate estate, the{" "}
            <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executor</Link>{" "}
            and family face questions about value, condition, timing, and coordination that most attorneys reasonably prefer to hand off to a real estate professional. Those questions usually arrive while the family is dealing with a death and with financial decisions they haven't made before, often on a timeline they don't control.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {FEATURED_BROKER.Role} works with probate attorneys in Washington State to provide defensible valuation, coordinated preparation, and steady, professional communication during the property sale.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Probate Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Probate Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Executors and their families are usually making these decisions for the first time. The questions that come up most often:
          </p>
          <div className="grid gap-4">
            {intersections.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            These questions call for both legal guidance and real estate support, and they go more smoothly when the attorney and the broker coordinate.
          </p>
        </div>
      </div>
    </section>

    <JamesJacksonCard />

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

    {/* Common Situations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Common Situations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Situations where {FEATURED_BROKER.role} can help include:
          </p>
          <ul className="space-y-4">
            {situations.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
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
            If you have a client with a{" "}
            <Link to="/probate-estate-sales" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
            property situation in Washington State, a brief conversation is usually the fastest way to see whether and how {FEATURED_BROKER.role} can help.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            {FEATURED_BROKER.Role} works with probate attorneys in the Puget Sound area and elsewhere in Washington State and is available to speak with attorneys directly.
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

    <RelatedServices currentPath="/for-probate-attorneys" />
    <DisclaimerSection />
      <BackToProfessionals />
    </main>
    <Footer />
  </div>
);

export default ForProbateAttorneys;
