import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconProbate from "@/assets/icons/probate-property-sales-icon-washington.webp";

const intersections = [
  "What is the property actually worth in its current condition — not what an automated tool says, but a defensible, condition-adjusted market value?",
  "Should the property be sold as-is, or are there targeted improvements that would meaningfully improve the outcome?",
  "How do we manage a property that's been vacant for months — insurance, utilities, security, maintenance?",
  "How do we coordinate when heirs live in different states or have different opinions about timing and price?",
  "What does the sale timeline look like relative to the probate proceedings?",
];

const services = [
  {
    title: "Accurate, Defensible Valuation",
    description: (
      <>
        As a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link>, our team provides condition-adjusted market analysis that goes beyond a standard comparative market analysis. The result is a pricing position that holds up to scrutiny — from co-heirs, from the court, and from the estate attorney reviewing the documentation.
      </>
    ),
  },
  {
    title: "Strategic Sale Guidance",
    description: "Our team advises on timing, pricing, and preparation strategy with fiduciary defensibility in mind. Every repair recommendation is evaluated for return on investment. Every pricing decision is documented with comparable sales support.",
  },
  {
    title: "Property Preparation Coordination",
    description: "From professional cleanout to targeted repairs to staging, our team coordinates the full preparation process through trusted local vendors — so the executor doesn't have to manage it and you don't have to track it down.",
  },
  {
    title: "Communication With All Parties",
    description: "Our team serves as the single real estate point of contact — keeping executors, co-heirs, and the legal team informed with consistent, clear updates throughout the process.",
  },
  {
    title: "Hands-On Local Support",
    description: "For executors managing Washington State property from out of state, our team handles the property locally — with photo updates, digital documentation, and remote coordination that makes the process manageable from anywhere.",
  },
];

const situations = [
  "Selling inherited property during active probate proceedings",
  "Preparing a longtime family home for sale — often with decades of deferred maintenance",
  "Coordinating among multiple heirs with different opinions on timing and value",
  "Managing the property on behalf of an out-of-state or out-of-area executor",
  "Providing a defensible market value assessment for estate documentation",
  "Navigating a sale that involves court approval requirements",
];

const faqs = [
  {
    question: "How does Real Property Planning support probate attorneys during property sales?",
    answer: "Our team handles the real estate side completely — property assessment, condition-based pricing, preparation coordination, listing, and sale management — while keeping the attorney informed throughout. Attorneys receive consistent updates and have a single point of contact for all property-related questions. The goal is to make the real estate side of probate administration as straightforward as possible so you can focus on the legal work.",
  },
  {
    question: "What is the difference between a CMA and the valuation analysis our team provides?",
    answer: "A standard comparative market analysis (CMA) is produced by most listing agents and reflects a general price range based on nearby sales. It is not a formal appraisal, and it typically does not account for condition in a documented, methodology-based way. Our team's condition-based pricing combines his certified appraisal training with current market data — producing a condition-adjusted, comparable-supported price opinion that is more defensible for fiduciary purposes than a standard CMA. For situations requiring a formal appraisal (date-of-death valuations, for example), our team can discuss appropriate referral resources.",
  },
  {
    question: "Can you help when heirs disagree about value or timing?",
    answer: "Yes — and this is one of the most common situations our team works with. When heirs have received conflicting price opinions or have different views on what the property is worth, a clear, documented evidence-based analysis often resolves the disagreement faster than continued negotiation. Our team can present the analysis to all parties — together or separately — and walk through the comparable data in plain language.",
  },
  {
    question: "Do you work with probate attorneys outside of Western Washington?",
    answer: "Our team's primary service area is Western Washington and the Puget Sound region — King, Snohomish, Pierce, and Kitsap Counties, with additional coverage in Skagit County and surrounding areas. For attorneys with clients in other parts of Washington State, our team can discuss appropriate referral connections. For clients outside Washington, Real Property Planning can connect attorneys and clients with a trusted broker anywhere in the country through David Stein's eXp Realty network.",
  },
];

const ForProbateAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Probate Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning coordinates property assessment, valuation, preparation, and sale for probate attorneys and their clients throughout Washington State."
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
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconProbate} alt="Probate attorney real estate coordination Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Probate Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Probate Attorneys and Their Clients in Washington State
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            Helping Navigate Property Sales During Probate with Clarity and Care
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Opening */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Probate situations involve more than legal process. They involve families navigating loss, responsibility, and financial decisions they've never faced before — often on a timeline they don't control. When real estate is part of the estate, the{" "}
            <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executor</Link>{" "}
            and family are faced with questions about value, condition, timing, and coordination that most attorneys reasonably prefer to hand off to a trusted real estate professional.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside probate attorneys throughout Washington State to provide defensible valuation, coordinated preparation, and a steady, professional presence through every step of the property sale.
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
            Your clients and their executors are navigating decisions they've likely never made before. The questions that come up most often:
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
            These situations require both legal guidance and experienced real estate support — working together, not in parallel.
          </p>
        </div>
      </div>
    </section>

    {/* How We Support Your Clients */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-10">
            How We Support Your Clients
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
            Probate attorneys refer clients to Real Property Planning in situations including:
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
            If you have a client navigating a{" "}
            <Link to="/probate-estate-sales" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
            property situation in Washington State, a brief conversation is usually the fastest way to determine how Real Property Planning can support the case.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            Our team works collaboratively with probate attorneys throughout the Puget Sound area and across Washington State — and is available for direct attorney consultations at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
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
    </main>
    <Footer />
  </div>
);

export default ForProbateAttorneys;
