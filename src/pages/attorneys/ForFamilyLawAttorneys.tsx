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
import iconFamilyLaw from "@/assets/icons/attorney-family-law-property-icon-washington.webp";

const intersections = [
  "Division of real property between parties who may not agree on value or timing",
  "Sale of a shared home during active legal proceedings",
  "One party buying out the other — which requires an agreed-upon and defensible market value",
  "Coordinating the sale timeline with legal proceedings and court requirements",
  "Managing communication between parties who may have limited direct contact",
  "Preparing a home for sale when neither party is fully responsible for managing the process",
];

const services = [
  {
    title: "Accurate Market Valuation",
    description: (
      <>
        A shared, objective market value is often the most important tool for moving a family law property matter forward. David provides a condition-adjusted, comparable-supported market analysis — not a listing agent's pitch — that both parties can evaluate from the same factual foundation.
      </>
    ),
  },
  {
    title: "Neutral, Professional Coordination",
    description: "David's role is not to represent either party's interests — it's to handle the property professionally and move the process forward. He maintains clear, consistent communication with both parties (or through their respective counsel) and manages the sale with the goal of a fair outcome, not a fast commission.",
  },
  {
    title: "Structured Process Guidance",
    description: "Many clients navigating family law situations have never managed a home sale on their own. David explains each step clearly, manages the preparation and listing process, and provides regular updates so clients always know where things stand.",
  },
  {
    title: "Calm, Consistent Communication",
    description: "In situations where communication between parties is strained, David's structured approach to updates — consistent, factual, and professionally neutral — reduces opportunities for misunderstanding and conflict.",
  },
];

const faqs = [
  {
    question: "Can Real Property Planning work with both parties in a family law property situation?",
    answer: "Yes — David's role is explicitly neutral. He provides objective market analysis and manages the sale process professionally, without advocacy for either party. Communication protocols can be structured to route through respective counsel if that is preferred.",
  },
  {
    question: "How does valuation work when parties disagree on what the home is worth?",
    answer: "David provides a condition-adjusted, comparable-supported market analysis grounded in his certified appraisal training. Because the analysis is methodology-based rather than opinion-based, it gives both parties and their attorneys a shared factual foundation — which often resolves valuation disputes more efficiently than competing agent opinions.",
  },
  {
    question: "Can the home be sold during active legal proceedings?",
    answer: "In many cases, yes — though the specifics depend on court orders, agreements between parties, and the legal structure of the proceeding. David works in alignment with whatever legal requirements are in place and coordinates with both attorneys to ensure the real estate process supports rather than complicates the legal timeline.",
  },
];

const ForFamilyLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Family Law Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning provides neutral, valuation-informed real estate support for family law attorneys and their clients navigating property decisions in Washington State."
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
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconFamilyLaw} alt="Family law attorney property division real estate Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Family Law Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Family Law Attorneys and Their Clients in Washington State
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            Helping Clients Navigate Property Decisions with Clarity and Structure
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
            Family law matters involving real property are rarely just about the property. They're about the life the property represents, the disagreements it surfaces, and the financial reality it creates for people who are already navigating one of the hardest transitions of their lives. What clients need in those moments is not pressure — it's clarity. Not a rushed listing — it's an honest assessment of what the home is worth and what their realistic options are.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside family law attorneys throughout Washington State to provide reliable valuation, structured guidance, and a calm, professional approach that reduces conflict rather than adding to it.
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
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If you have a client navigating a family law matter that involves real property in Washington State, a brief conversation is usually the most efficient starting point.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            David works collaboratively with family law attorneys throughout the Puget Sound area — providing the neutral, structured real estate support that helps complex situations move forward.
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

    <RelatedServices currentPath="/for-family-law-attorneys" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForFamilyLawAttorneys;
