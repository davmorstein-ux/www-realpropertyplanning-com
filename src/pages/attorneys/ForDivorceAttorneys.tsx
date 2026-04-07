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
import ServicePageNav from "@/components/ServicePageNav";

const intersections = [
  "What is the home actually worth in today's market?",
  "Should the property be sold or retained by one party?",
  "What is the best timing for a sale?",
  "How do we minimize conflict during the process?",
  "How do we coordinate communication between parties?",
];

const services = [
  { title: "Objective, Defensible Valuation", description: "Clear market-based valuations that support fair decision-making and reduce disputes." },
  { title: "Neutral Representation", description: "A balanced approach focused on fairness, transparency, and minimizing conflict." },
  { title: "Structured Sale Process", description: "Guidance on preparing, listing, and selling the property in a way that is organized and efficient." },
  { title: "Coordinated Communication", description: "Helping keep all parties informed while maintaining professionalism and clarity." },
  { title: "Market Expertise", description: "Insight into pricing, timing, and positioning to help achieve the best possible outcome." },
];

const situations = [
  "Sale of a marital home during divorce proceedings",
  "One party buying out the other",
  "Determining current market value for negotiations",
  "Coordinating timelines with legal processes",
  "Managing communication between multiple stakeholders",
];

const withoutGuidance = [
  "Increased conflict",
  "Delays in resolution",
  "Financial uncertainty",
];

const withGuidance = [
  "Clarity and transparency",
  "Smoother transactions",
  "Reduced stress during an already difficult time",
];

const ForDivorceAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Divorce Attorneys | Real Property Planning"
      description="David Stein works with divorce attorneys on marital property sales, valuations, and neutral real estate coordination throughout Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Divorce Attorneys", url: "/for-divorce-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Divorce Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Divorce Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Providing Clarity and Neutrality During Complex Transitions
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
            Divorce often involves some of the most significant financial and emotional decisions a person will face — and real estate is frequently at the center of those decisions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When a home is involved, questions arise around value, timing, and how to move forward in a way that is fair, clear, and practical.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work alongside divorce attorneys to provide objective valuation, structured guidance, and a calm, neutral approach that helps clients navigate these decisions with greater confidence.
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
            Clients are often facing questions such as:
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
            These situations benefit from a clear, neutral, and professional approach.
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
            Without clear guidance, real estate decisions during divorce can lead to:
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
            With the right approach, clients benefit from:
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

    {/* A Professional, Neutral Approach */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
            A Professional, Neutral Approach
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            My role is not to take sides — it is to provide clarity, structure, and professionalism throughout the process.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By working together, we can help ensure that real estate decisions are handled fairly and efficiently, supporting the overall resolution of the case.
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
            If you work with clients navigating divorce where real estate is involved, I would welcome the opportunity to collaborate and support a smooth, well-managed process.
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

    <RelatedServices currentPath="/for-divorce-attorneys" />
    <ServicePageNav />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForDivorceAttorneys;
