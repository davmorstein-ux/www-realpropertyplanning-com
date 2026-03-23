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
import { Phone, CheckCircle, MessageSquare } from "lucide-react";
import RealClientSituations from "@/components/RealClientSituations";
import PageTestimonials from "@/components/PageTestimonials";

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

const whyRefer = [
  "Licensed real estate broker and Washington State certified residential appraiser — dual credentials that provide analytical depth in pricing and market positioning",
  "Clear, honest pricing guidance based on property condition and market data — not inflated numbers",
  "Professional, timely communication with attorneys and their clients at every stage",
  "Extensive experience with probate sales, trust administration, guardianship dispositions, and senior transitions",
  "Full coordination of property preparation — cleanout, repairs, staging, and vendor management",
  "Deep respect for the attorney-client relationship and fiduciary responsibilities",
  "Calm, patient handling of sensitive family dynamics and multi-party situations",
  "Willingness to speak directly with clients, family members, and other professionals — reducing your workload",
];

const clientSituations = [
  "Probate property that needs to be sold as part of estate administration",
  "Trust-owned real estate that a trustee needs to liquidate or manage",
  "Guardianship or conservatorship property requiring court-supervised sale",
  "Inherited home where multiple heirs have different opinions about what to do",
  "Senior client transitioning from a longtime home to assisted living or family care",
  "Estate property with significant deferred maintenance or condition issues",
  "Out-of-state executor who needs reliable local coordination",
  "Situations requiring documented market analysis for court or beneficiary review",
];

const processSteps = [
  {
    number: "1",
    title: "You Reach Out",
    text: "Share the client situation — property type, legal context, timeline, and any known complications. David listens carefully and outlines how he can help.",
  },
  {
    number: "2",
    title: "David Assesses the Property",
    text: "He visits the home, evaluates condition, and provides a written summary of findings — including realistic market perspective and preparation recommendations.",
  },
  {
    number: "3",
    title: "Pricing and Strategy",
    text: "Drawing on his appraisal background, David presents pricing guidance based on actual condition and comparable sales — not aspirational numbers or automated estimates.",
  },
  {
    number: "4",
    title: "Preparation and Coordination",
    text: "If needed, David creates a preparation plan and coordinates vendors directly — cleanout, repairs, staging — keeping your client informed without requiring their day-to-day involvement.",
  },
  {
    number: "5",
    title: "Marketing Through Closing",
    text: "Professional listing, strategic marketing, offer review, negotiation, and closing — all managed with attention to the legal context and fiduciary duties that distinguish estate transactions.",
  },
  {
    number: "6",
    title: "You Stay Informed",
    text: "Updates at key milestones — listing, offers, inspections, and closing — with availability for questions throughout. David communicates at the level of detail you prefer.",
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
  headline: "A Trusted Real Estate Resource for Attorneys",
  description: "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, guardianship, estate transitions, and senior moves across Western Washington.",
  url: "/for-attorneys",
  datePublished: "2025-01-15",
  dateModified: "2026-03-23",
  about: ["Probate real estate", "Attorney referral", "Fiduciary support", "Estate property", "Trust-owned real estate"],
});

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Resource for Estate & Probate Attorneys | David Stein"
        description="Experienced real estate broker and certified appraiser assisting attorneys and fiduciaries with probate property sales and estate real estate decisions in Western Washington."
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
              A Trusted Real Estate Resource for Attorneys
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              When your client's legal matter involves real property, David Stein provides the professional coordination, honest market analysis, and structured communication that protect your client's interests — and your reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Connect About a Client Situation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              A Collaborative Approach to Estate Real Estate
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              David works alongside attorneys — never around them. He understands that legal counsel directs the overall matter, and he provides real estate expertise that supports your work without overstepping professional boundaries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With dual credentials as a licensed broker and certified residential appraiser, David brings a level of analytical depth and professional discretion that general listing agents simply do not offer. Attorneys who refer clients to Real Property Planning know their clients will be treated with patience, honesty, and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Why Attorneys Refer */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Why Attorneys Refer Clients to David
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Attorneys continue to refer because the experience is consistently professional, organized, and low-friction — and because their clients feel supported rather than pressured.
            </p>
            <ul className="space-y-4">
              {whyRefer.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Situations */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Common Client Situations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Attorneys involve Real Property Planning when a client's matter includes real property that needs professional guidance:
            </p>
            <ul className="space-y-4">
              {clientSituations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How the Referral Process Works
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Every situation is different, but the general workflow follows a clear, professional path:
            </p>
            <div className="grid gap-5">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-xl px-7 py-6 flex gap-5 items-start">
                  <span className="text-gold font-serif text-3xl font-semibold leading-none pt-0.5 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              A Referral That Reflects Well on You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              When you refer a client to David, your reputation is on the line. He understands that — and takes it seriously. Every client interaction is handled with the same professionalism, discretion, and care that you would expect from a trusted colleague.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              David does not use high-pressure tactics, make unrealistic promises, or disappear after the listing is signed. He communicates clearly, manages expectations honestly, and treats every client — whether the property is worth $300,000 or $3 million — with the same level of attention and respect.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your clients will feel supported. And they will remember who referred them.
            </p>
          </div>
        </div>
      </section>

      <RealClientSituations studies={attorneyCaseStudies} background="bg-background" />

      {/* Good Fit */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              A Referral May Make Sense When…
            </h2>
            <ul className="space-y-4">
              {[
                "Your client has real property as part of a probate, trust, or guardianship matter",
                "The property needs professional assessment before decisions can be made",
                "Your client is overwhelmed and needs someone to handle the real estate side",
                "You want reliable market data to support fiduciary decision-making",
                "The property needs preparation — cleanout, repairs, or staging — before it can be listed",
                "You need a real estate professional who communicates clearly and respects boundaries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-8">
              Learn more about <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">how David works with executors</Link>, explore the <Link to="/professional-referral-resource" className="text-accent hover:text-gold underline underline-offset-4">Professional Referral Resource</Link>, or browse the <Link to="/resources" className="text-accent hover:text-gold underline underline-offset-4">Resource Directory</Link> for other trusted professionals in Western Washington.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Questions Attorneys Commonly Ask" />

      <RelatedServices currentPath="/for-attorneys" />

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Have a Client Who Needs Real Estate Guidance?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Confidential conversations are always welcome. David will follow up promptly to discuss the situation and how he can support your client — no pressure, no obligation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Connect About a Client Situation
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
