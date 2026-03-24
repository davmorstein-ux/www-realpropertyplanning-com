import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Scale, FileText, Heart, Users, Handshake } from "lucide-react";
import RealClientSituations from "@/components/RealClientSituations";
import PageTestimonials from "@/components/PageTestimonials";

const attorneyTypes = [
  {
    title: "Probate Attorneys",
    description: "Support for inherited property, estate sales, and coordination with executors and heirs.",
    href: "/for-probate-attorneys",
    icon: Scale,
  },
  {
    title: "Estate Planning Attorneys",
    description: "Helping clients evaluate real estate decisions as part of broader planning strategies.",
    href: "/for-estate-planning-attorneys",
    icon: FileText,
  },
  {
    title: "Elder Law Attorneys",
    description: "Guidance for clients navigating care transitions, long-term planning, and housing decisions.",
    href: "/for-elder-law-attorneys",
    icon: Heart,
  },
  {
    title: "Family Law Attorneys",
    description: "Structured support for property decisions during family-related legal matters.",
    href: "/for-family-law-attorneys",
    icon: Users,
  },
  {
    title: "Divorce Attorneys",
    description: "Objective valuation and neutral guidance for property division and sale.",
    href: "/for-divorce-attorneys",
    icon: Handshake,
  },
];

const whyCollaborate = [
  "Clear, defensible valuation backed by appraisal experience",
  "Structured, professional approach to property decisions",
  "Experience coordinating with multiple stakeholders",
  "Strong communication throughout the process",
  "Focus on reducing stress for clients",
];

const coordinateWith = [
  "Senior move managers",
  "Estate sale companies",
  "Financial professionals",
  "Specialized lenders",
];

const attorneyTestimonials = [
  {
    text: "David's communication throughout the process was excellent. He kept me informed without creating unnecessary noise, and my client felt well supported. That is exactly what I look for in a referral.",
    attribution: "Attorney referral",
    context: "Probate property coordination",
  },
  {
    text: "I have referred several clients to David for estate property situations. Each time, the feedback has been the same — professional, thorough, and easy to work with. He makes me look good.",
    attribution: "Estate planning attorney",
    context: "Multiple client referrals · Western Washington",
  },
];

const attorneyCaseStudies = [
  {
    title: "Probate Attorney Refers First-Time Executor",
    situation: "A probate attorney's client — a first-time executor living out of state — inherited a home in King County that needed cleanout, repairs, and sale. The attorney needed a real estate professional who could handle the property side without requiring constant oversight.",
    approach: "David coordinated directly with the executor, managed the cleanout and preparation, provided pricing guidance based on the property's actual condition, and kept both the attorney and executor informed at key milestones.",
    outcome: "The property sold within market expectations. The attorney received positive feedback from the client and has since referred additional estate clients to David.",
  },
  {
    title: "Trust Administration With Multiple Beneficiaries",
    situation: "An estate planning attorney was advising a trustee managing a trust that included a residential property in Snohomish County. Three beneficiaries had different expectations about value, and the trustee needed defensible market data before proceeding.",
    approach: "David assessed the property, prepared a detailed analysis of condition issues and comparable sales, and presented findings to the trustee and beneficiaries in a clear, objective format. He answered questions from all parties without taking sides.",
    outcome: "The beneficiaries aligned on pricing. The property was listed, sold, and closed without disputes — and the trustee had documented market support for the sale price.",
  },
  {
    title: "Guardianship Property Sale Requiring Court Oversight",
    situation: "An elder law attorney needed to facilitate the sale of a protected person's home in Pierce County. The sale required court approval, documented market analysis, and careful handling of a property with significant deferred maintenance.",
    approach: "David provided a thorough property assessment, coordinated necessary preparations, and documented his pricing rationale with the analytical depth that court-supervised sales require. He worked within the attorney's timeline and communicated proactively throughout.",
    outcome: "The court approved the sale. The property closed at fair market value with complete documentation, and the attorney noted that David's process made the legal side significantly easier.",
  },
];

const faqs = [
  {
    question: "When should an attorney involve a real estate professional in a probate or trust matter?",
    answer: "Early involvement often prevents delays and costly missteps. When there are questions about property condition, likely value, preparation needs, or sale timing, having a knowledgeable real estate resource in place allows your client to make faster, better-informed decisions — and gives you reliable market data to support fiduciary obligations.",
  },
  {
    question: "How does David communicate with attorneys during a transaction?",
    answer: "David provides updates at key milestones — property assessment, listing, offers, and closing — and is available by phone or email for questions between updates. He understands that attorneys need concise, relevant information without unnecessary noise, and he tailors his communication style accordingly.",
  },
  {
    question: "Can David help with properties that need significant preparation before listing?",
    answer: "Yes. Many estate and inherited homes need cleanout, repairs, or staging before they are ready for the market. David coordinates vendors, evaluates which improvements offer meaningful return on investment, and manages the entire preparation process so your client does not have to.",
  },
  {
    question: "Does David provide formal appraisals for estate or probate purposes?",
    answer: "David is a Washington State Certified Residential Appraiser and can discuss valuation matters in depth. His primary role in most client engagements is as a real estate broker providing pricing strategy and sale execution. Formal appraisals are available separately when needed for court filings, tax purposes, or trust documentation.",
  },
  {
    question: "How does David handle situations where family members disagree about the property?",
    answer: "With patience, professionalism, and data. David presents objective market information that helps all parties understand the property's realistic value and the options available. His appraisal background gives him credibility when explaining pricing decisions, and his experience with multi-party situations helps him navigate disagreements without taking sides.",
  },
];

const jsonLd = articleSchema({
  headline: "Real Estate Support for Attorneys and Their Clients",
  description: "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, guardianship, estate transitions, and senior moves across Western Washington.",
  url: "/for-attorneys",
  datePublished: "2025-01-15",
  dateModified: "2026-03-24",
  about: ["Probate real estate", "Attorney referral", "Fiduciary support", "Estate property", "Trust-owned real estate"],
});

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Support for Attorneys | David Stein – Real Property Planning"
        description="Licensed broker and certified appraiser supporting attorneys with probate sales, estate property coordination, and valuation guidance across Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Attorneys & Fiduciaries
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Real Estate Support for Attorneys and Their Clients
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Helping Navigate Property Decisions with Clarity, Coordination, and Confidence
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
                <Phone className="w-4 h-4 mr-2" />
                Connect to Discuss a Client Situation
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
              Legal matters involving real estate often extend beyond documentation and structure — they require real-world execution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Whether clients are navigating probate, estate planning, divorce, or life transitions, property decisions can introduce complexity, emotion, and uncertainty.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I work alongside attorneys to provide clear valuation insight, structured guidance, and hands-on support — helping ensure that real estate decisions are handled thoughtfully and efficiently.
            </p>
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
              As a licensed real estate broker and state-certified residential appraiser, I bring a dual perspective that supports both strategic planning and practical execution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              My role is not to replace legal guidance — it is to support it.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              By working together, we can help clients move forward with greater clarity, reduced stress, and well-coordinated decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Collaboration – Tile Grid */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
                Areas of Collaboration
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the area that best fits your client's situation:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {attorneyTypes.map((type) => (
                <Link
                  key={type.href}
                  to={type.href}
                  className="group flex flex-col items-center text-center gap-4 rounded-2xl border border-border bg-card px-6 py-8 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    <type.icon className="w-7 h-7" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <span className="text-accent text-sm font-medium group-hover:underline underline-offset-4">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Choose to Collaborate */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
              Why Attorneys Choose to Collaborate
            </h2>
            <ul className="space-y-4">
              {whyCollaborate.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Supporting Beyond the Transaction */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              Supporting Your Clients Beyond the Transaction
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In many situations, real estate is only one piece of a larger transition. I regularly coordinate with:
            </p>
            <ul className="space-y-4 mb-6">
              {coordinateWith.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This helps ensure that clients receive support beyond just the sale of a property.
            </p>
          </div>
        </div>
      </section>

      <RealClientSituations studies={attorneyCaseStudies} background="bg-background" />

      <PageTestimonials testimonials={attorneyTestimonials} heading="What Referring Attorneys Say" />

      <PageFAQ faqs={faqs} heading="Questions Attorneys Commonly Ask" />

      <RelatedServices currentPath="/for-attorneys" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Let's Connect
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              If you work with clients where real estate plays a role, I would welcome the opportunity to collaborate and support a smooth, well-coordinated process.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForAttorneys;
