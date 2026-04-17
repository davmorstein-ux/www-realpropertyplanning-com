import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEstatePlanning from "@/assets/icons/attorney-estate-planning-icon-washington.webp";

const questions = [
  "The client wants to understand the current market value of a property held in trust",
  "A life transition — health change, move to senior living, death of a spouse — triggers a planned or unplanned property sale",
  "Timing a sale relative to tax planning, trust provisions, or beneficiary needs requires real estate input",
  "Multiple trustees or beneficiaries need to agree on pricing and preparation before a sale can proceed",
  "A property held in trust for years has deferred maintenance that affects its realistic market value",
];

const services = [
  {
    title: "Clear, Defensible Valuation",
    description: (
      <>
        our team's background as a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> means clients receive a condition-adjusted, methodology-based market assessment — not just a listing agent's price opinion. This is especially valuable when valuation needs to support trust decisions, beneficiary conversations, or planning-related financial analysis.
      </>
    ),
  },
  {
    title: "Strategic Sale Planning",
    description: "our team advises on timing, preparation, and market positioning — always in alignment with the broader estate plan and the client's specific situation. Decisions about what to repair, when to list, and how to price are made with both market knowledge and fiduciary awareness.",
  },
  {
    title: "Coordination With Advisors",
    description: "our team works collaboratively with attorneys, CPAs, and financial planners — ensuring that everyone involved in the client's plan is working from the same real estate information. One consistent point of contact. Regular updates. No gaps in communication.",
  },
  {
    title: "Property Preparation Oversight",
    description: "When preparation is needed before a sale, our team coordinates vendors, manages the process, and keeps the client and their advisors informed — without adding to their administrative burden.",
  },
];

const ForEstatePlanningAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Estate Planning Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning helps estate planning attorneys and their clients navigate property valuation, sale timing, and real estate coordination throughout Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Estate Planning Attorneys", url: "/for-estate-planning-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconEstatePlanning} alt="Estate planning attorney real estate support Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Estate Planning Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Estate Planning Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            Helping Your Clients Execute the Plan — Clearly and Confidently
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
            Estate planning is about clarity, protection, and long-term intent. But even the most carefully structured plan can become complicated when real property is involved and it's time to act. The client who understood their trust during the planning conversation may feel uncertain when the property actually needs to be sold. The family member who agreed on paper may resist when it becomes real.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside estate planning attorneys to help clients move from strategy to execution — providing clear valuation insight, coordinated sale planning, and a calm, professional presence during transitions that matter.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Estate Planning Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Estate Planning Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Many of your clients have a plan in place — but the real estate questions arise at the point of execution, often years after the plan was drafted. The most common situations:
          </p>
          <div className="grid gap-4">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
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

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Discuss a Client Situation
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If you work with clients who hold real property as part of their estate plan — and who will eventually need to sell, transfer, or make decisions about that property — our team welcomes the opportunity to be a resource for your practice.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            A brief conversation is the most efficient way to discuss how Real Property Planning can support your clients in Washington State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/for-estate-planning-attorneys" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForEstatePlanningAttorneys;
