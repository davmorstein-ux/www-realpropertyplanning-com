import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle } from "lucide-react";

const intersections = [
  "Transitioning to assisted living or memory care",
  "Planning for long-term care needs",
  "Evaluating Medicaid eligibility strategies",
  "Managing a home that is no longer practical or safe",
  "Coordinating decisions among family members",
];

const services = [
  { title: "Clear, Objective Valuation", description: "Helping families understand current market value so they can make informed decisions aligned with legal and financial planning." },
  { title: "Transition-Focused Planning", description: "Guidance on whether to sell, when to sell, and how to prepare the home — based on the client's situation." },
  { title: "Coordination with Professionals", description: "Working alongside elder law attorneys, senior move managers, care providers, and family members." },
  { title: "Property Preparation Support", description: "Helping coordinate cleanout, repairs, and preparation with trusted service providers." },
  { title: "Calm, Structured Communication", description: "Providing steady guidance during what is often an emotional and uncertain time." },
];

const situations = [
  "Moving a loved one into assisted living or care",
  "Preparing a long-time family home for sale",
  "Supporting adult children managing a parent's property",
  "Evaluating timing and strategy for sale",
  "Coordinating multiple decision-makers",
];

const withoutCoordination = [
  "Confusion about next steps",
  "Delays in important decisions",
  "Added emotional stress",
];

const withCoordination = [
  "Clarity and confidence",
  "Smoother transitions",
  "Alignment between legal planning and real-world execution",
];

const ForElderLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Elder Law Attorneys | Real Property Planning"
      description="David Stein works with elder law attorneys on senior transitions, Medicaid planning, and real estate coordination across Western Washington."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Elder Law Attorneys", url: "/for-elder-law-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Elder Law Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Elder Law Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Helping Families Navigate Property Decisions During Life Transitions
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
              <Phone className="w-4 h-4 mr-2" />
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
            Elder law planning often involves more than legal structure — it involves real-life transitions that can be emotional, complex, and time-sensitive.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When real estate is part of the picture, families are often faced with difficult decisions about whether to sell, retain, or reposition a home.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work alongside elder law attorneys to provide clear guidance, thoughtful coordination, and practical support so clients can move forward with confidence.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Elder Law Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Elder Law Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Clients and families are often navigating situations such as:
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
            These moments require both legal guidance and real estate expertise working together.
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
            Without clear coordination, families can experience:
          </p>
          <ul className="space-y-3 mb-10">
            {withoutCoordination.map((item, i) => (
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
            {withCoordination.map((item, i) => (
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
            My role is to support the work you are already doing — helping ensure that real estate decisions are handled thoughtfully, efficiently, and in alignment with your client's needs.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Together, we can provide a more complete and supportive experience for the families we serve.
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
            If you work with clients navigating life transitions where real estate is part of the picture, I would welcome the opportunity to collaborate.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/for-elder-law-attorneys" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForElderLawAttorneys;
