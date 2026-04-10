import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import iconFamilyLaw from "@/assets/icons/icon-family-law-3d.png";

const intersections = [
  "Division of real property",
  "Sale of a shared home",
  "Determining fair market value",
  "Coordinating timing with legal proceedings",
  "Managing communication between multiple parties",
];

const services = [
  { title: "Accurate Market Valuation", description: "Clear, data-supported valuation to assist in informed decision-making." },
  { title: "Structured Process Guidance", description: "Helping clients understand the steps involved in preparing and selling a home." },
  { title: "Professional Coordination", description: "Working alongside attorneys and clients to ensure alignment and clarity." },
  { title: "Calm, Consistent Communication", description: "Providing steady communication that helps reduce confusion and uncertainty." },
  { title: "Market Insight", description: "Guidance on pricing, timing, and positioning based on current conditions." },
];

const situations = [
  "Division of jointly owned real estate",
  "Preparing a home for sale during legal proceedings",
  "Supporting clients through transitions involving housing",
  "Coordinating timelines with legal requirements",
  "Providing valuation insight for decision-making",
];

const withoutGuidance = [
  "Misunderstandings",
  "Delays",
  "Added stress for clients",
];

const withGuidance = [
  "Clarity and structure",
  "Smoother transactions",
  "A more manageable experience",
];

const ForFamilyLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Family Law Attorneys | Real Property Planning"
      description="Real Property Planning works with family law attorneys on property valuations, home sales, and real estate coordination during family transitions in Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Family Law Attorneys", url: "/for-family-law-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconFamilyLaw} alt="" aria-hidden="true" className="mx-auto w-60 h-auto object-contain mb-8" />
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Family Law Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Family Law Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Helping Clients Navigate Property Decisions with Clarity and Structure
          </p>
          <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Family law matters often involve significant life changes — and when real estate is part of the equation, those changes can become even more complex.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Whether clients are navigating divorce, separation, or other family-related legal matters, decisions involving a home require clear information, thoughtful planning, and a steady approach.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside family law attorneys to provide reliable valuation, structured guidance, and professional coordination throughout the process.
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
            Clients may be facing situations such as:
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
            These situations benefit from a clear, organized, and professional approach.
          </p>
        </div>
      </div>
    </section>

    {/* How We Support Your Clients */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            How We Support Your Clients
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            As a licensed real estate brokerage with state-certified residential appraisal expertise, Real Property Planning provides:
          </p>
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
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            Common Situations We Help With
          </h2>
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

    {/* Why This Matters */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            Why This Matters
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Without clear guidance, property-related decisions can lead to:
          </p>
          <ul className="space-y-3 mb-10">
            {withoutGuidance.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            With the right support, clients benefit from:
          </p>
          <ul className="space-y-3">
            {withGuidance.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* A Collaborative Approach */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
            A Collaborative Approach
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our role is to support the legal process by helping ensure that real estate decisions are handled clearly, professionally, and efficiently.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By working together, Real Property Planning can provide a more complete and coordinated experience for clients.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If your clients are navigating family law matters involving real estate, we would welcome the opportunity to collaborate and support a smooth process.
          </p>
          <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/for-family-law-attorneys" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForFamilyLawAttorneys;
