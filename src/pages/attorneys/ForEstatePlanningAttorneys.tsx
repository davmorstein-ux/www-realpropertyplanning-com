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

const questions = [
  "Should the property be sold now or held?",
  "What is the true current market value?",
  "How does timing affect tax or planning outcomes?",
  "What preparation is needed before listing?",
  "How do we coordinate with trustees, family members, and advisors?",
];

const services = [
  { title: "Clear, Defensible Valuation", description: "Objective market insight to support planning decisions, trust strategies, and client discussions." },
  { title: "Strategic Sale Planning", description: "Guidance on timing, preparation, and positioning — aligned with the broader estate plan." },
  { title: "Coordination with Advisors", description: "Collaboration with attorneys, CPAs, and financial planners to ensure everyone is working from the same information." },
  { title: "Property Preparation Oversight", description: "Access to trusted vendors and coordination of repairs, cleanout, or updates when needed." },
  { title: "Steady Communication", description: "A calm, structured approach that keeps clients informed and reduces uncertainty." },
];

const situations = [
  "Trust planning that includes real property",
  "Pre-sale planning prior to life transitions",
  "Preparing a home for future sale within a trust structure",
  "Evaluating whether to sell, retain, or reposition property",
  "Coordinating with multiple decision-makers",
];

const withoutCoordination = [
  "Unnecessary stress for clients",
  "Delays in execution",
  "Missed opportunities in the market",
];

const withCoordination = [
  "Clarity in decision-making",
  "Smoother transitions",
  "Alignment between legal strategy and real-world execution",
];

const ForEstatePlanningAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Estate Planning Attorneys | Real Property Planning"
      description="David Stein works with estate planning attorneys on trust-owned property sales, valuations, and real estate coordination across Western Washington."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Estate Planning Attorneys", url: "/for-estate-planning-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Estate Planning Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Estate Planning Attorneys and Their Clients
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Helping Your Clients Execute the Plan — Clearly and Confidently
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
            Estate planning is about clarity, protection, and long-term intent. But when real property is involved, even well-structured plans can become complicated when it's time to act.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I work alongside estate planning attorneys to help clients move from strategy to execution — providing clear valuation insight, coordinated sale planning, and a steady, professional presence during important transitions.
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
            Many clients have a plan in place — but questions arise when real property becomes part of the conversation:
          </p>
          <div className="grid gap-4">
            {questions.map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{q}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            These decisions benefit from both legal guidance and real estate expertise working together.
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
            When real estate decisions are made without proper coordination, it can lead to:
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
            When we work together, clients benefit from:
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
            My role is not to replace legal guidance — it is to support it.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By working together, we can help ensure that your client's real estate decisions reflect the intent of their plan, while navigating the practical realities of the market.
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
            If you work with clients who need real estate guidance as part of their planning process, I'd welcome the opportunity to collaborate.
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

    <RelatedServices currentPath="/for-estate-planning-attorneys" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForEstatePlanningAttorneys;
