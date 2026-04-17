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
import iconDivorce from "@/assets/icons/attorney-divorce-property-icon-washington.webp";

const intersections = [
  "Establishing a shared, defensible market value for the marital home",
  "Determining whether to sell the property or have one party retain it (and at what value)",
  "Managing the sale of a shared home when communication between parties is limited",
  "Coordinating the sale timeline with divorce proceedings and court requirements",
  "Handling the preparation and listing process when neither party is fully managing it",
  "Ensuring both parties receive consistent, factual updates throughout the sale",
];

const services = [
  {
    title: "Objective, Defensible Valuation",
    description: (
      <>
        our team's <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraisal</Link> background produces a condition-adjusted, methodology-based market analysis — not a listing pitch. When both parties are working from the same objective foundation, valuation disputes resolve more efficiently. This analysis can also serve as a useful reference point in settlement negotiations.
      </>
    ),
  },
  {
    title: "Neutral Representation",
    description: "our team does not represent either party's interests — he represents the property and the process. His role is to handle the sale fairly, transparently, and professionally, with consistent communication to both parties (or through their attorneys) and no advocacy for either side.",
  },
  {
    title: "Structured, Organized Sale Process",
    description: "our team manages preparation, listing, marketing, showings, negotiation, and closing — providing both parties with regular updates in a format that is factual, clear, and professionally neutral. Neither party has to wonder what is happening or rely on the other for information.",
  },
  {
    title: "Market Expertise for the Puget Sound Region",
    description: (
      <>
        our team brings deep knowledge of real estate conditions throughout{" "}
        <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">King County, Snohomish County, Pierce County, and Kitsap County</Link>{" "}
        — ensuring that pricing decisions reflect actual market conditions in the specific neighborhood, not generalized estimates.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How does Real Property Planning maintain neutrality when working with divorcing parties?",
    answer: "our team's role is defined from the beginning as neutral coordinator — his obligation is to the property transaction, not to either party. Communication protocols are established upfront: updates can be sent simultaneously to both parties, routed through respective counsel, or structured in whatever way the attorneys prefer. Pricing and preparation decisions are based on market data, not either party's preference.",
  },
  {
    question: "What if one party is living in the home during the sale?",
    answer: "This is one of the most common and most delicate situations in divorce real estate. Our team has worked with this dynamic regularly and approaches it with clear protocols: scheduled showings with appropriate notice, professional staging guidance that respects the occupant's daily life, and consistent communication that keeps both parties informed without requiring them to interact directly.",
  },
  {
    question: "Can the home be sold before the divorce is finalized?",
    answer: "In many cases, yes — though it depends on court orders and the specifics of the legal proceedings. Our team coordinates with both attorneys to ensure the real estate process aligns with the legal timeline and any court-imposed requirements.",
  },
];

const ForDivorceAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Divorce Attorneys in Washington State | Real Property Planning"
      description="Neutral, valuation-informed real estate support for divorce attorneys and their clients navigating marital home sales in Washington State. Serving the Puget Sound region."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Divorce Attorneys", url: "/for-divorce-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconDivorce} alt="Divorce attorney marital home sale neutral real estate Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Divorce Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Divorce Attorneys and Their Clients in Washington State
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            Providing Clarity and Neutrality During Complex Transitions
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
            Divorce often involves some of the most significant financial and emotional decisions a person will face — and real estate is frequently at the center of those decisions. The marital home may be the largest shared asset. It may also be the most emotionally charged. When questions arise about value, timing, and how to move forward fairly, what both parties need is not another advocate — it's a neutral, experienced professional who will handle the property with objectivity and care.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside divorce attorneys throughout Washington State to provide objective valuation, structured sale management, and a consistently neutral approach that supports resolution rather than extending conflict.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Divorce Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Divorce Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Divorce property situations involve decisions that affect both parties' financial futures — and getting them right requires both legal guidance and real estate expertise:
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

    <PageFAQ faqs={faqs} heading="Frequently Asked Questions" />

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Discuss a Client Situation
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If you have a client navigating a divorce that involves real property in Washington State, Real Property Planning provides the neutral, structured real estate support that helps complex situations move forward — fairly, efficiently, and with as little additional stress as possible.
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

    <RelatedServices currentPath="/for-divorce-attorneys" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForDivorceAttorneys;
