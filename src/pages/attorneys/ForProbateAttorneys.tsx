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

const intersections = [
  "Determining the current market value of the property",
  "Deciding whether to sell or retain the home",
  "Preparing a property that may not have been updated in years",
  "Coordinating with multiple heirs or decision-makers",
  "Managing timelines tied to probate requirements",
];

const services = [
  { title: "Accurate, Defensible Valuation", description: "Clear market-based valuations to support probate requirements and decision-making." },
  { title: "Strategic Sale Guidance", description: "Helping determine timing, pricing, and preparation strategy for the property." },
  { title: "Property Preparation Coordination", description: "Assistance with cleanout, repairs, and preparation through trusted service providers." },
  { title: "Communication with All Parties", description: "Helping coordinate between attorneys, executors, heirs, and other professionals." },
  { title: "Hands-On Support", description: "A structured approach that reduces stress and keeps the process moving forward." },
];

const situations = [
  "Selling inherited property during probate",
  "Preparing a long-time family home for sale",
  "Coordinating multiple heirs",
  "Managing out-of-area executors",
  "Determining market value for estate purposes",
];

const withoutGuidance = [
  "Delays in the process",
  "Confusion among heirs",
  "Unnecessary stress",
];

const withGuidance = [
  "Clarity and direction",
  "Smoother transactions",
  "Alignment between legal requirements and real-world execution",
];

const ForProbateAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Probate Attorneys | Real Property Planning"
      description="David Stein works with probate attorneys to coordinate property sales, valuations, and estate real estate decisions across Western Washington."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Probate Attorneys", url: "/for-probate-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Probate Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Probate Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Helping Navigate Property Sales During Probate with Clarity and Care
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
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
            Probate situations often involve more than just legal processes — they involve families navigating loss, responsibility, and important financial decisions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When real estate is part of the estate, executors and families are often faced with questions about value, timing, and how to move forward.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work alongside probate attorneys to provide clear valuation, structured guidance, and hands-on support to help ensure the process moves forward smoothly.
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
            Clients and executors are often navigating:
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
            These situations benefit from both legal guidance and experienced real estate support.
          </p>
        </div>
      </div>
    </section>

    {/* How I Support Your Clients */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            How I Support Your Clients
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            As a licensed real estate broker and state-certified residential appraiser, I provide:
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
            Common Situations I Help With
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
            Without clear guidance, probate-related property decisions can lead to:
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
            My role is to support the work you are doing — helping ensure that real estate is handled efficiently, professionally, and with care.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By working together, we can provide a more complete and supportive experience for clients navigating probate.
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
            If you work with clients managing real estate as part of probate, I would welcome the opportunity to collaborate and support a smooth and well-coordinated process.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/for-probate-attorneys" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForProbateAttorneys;
