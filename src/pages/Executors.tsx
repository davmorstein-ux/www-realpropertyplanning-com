import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, MessageSquare, AlertTriangle, Home, DollarSign, Users } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Assess the Property",
    text: "David reviews the home's condition, location, and current state to give you an honest picture of what you're working with and what the market is likely to see. This includes identifying deferred maintenance, safety concerns, and any issues that could affect value or sale timeline.",
  },
  {
    number: "02",
    title: "Coordinate Timing and Legal Readiness",
    text: "Legal authority, family discussions, and personal logistics all affect when a sale can begin. David helps you understand the timeline, coordinate with the estate attorney if needed, and plan accordingly so nothing delays the process unnecessarily.",
  },
  {
    number: "03",
    title: "Prepare the Home",
    text: "Many estate homes need cleanout, minor repairs, or light staging. David coordinates vendors and manages the preparation so you don't have to — including sorting through what to keep, donate, sell, or discard when the home is full of decades of personal belongings.",
  },
  {
    number: "04",
    title: "Price It With Analytical Precision",
    text: "With dual credentials as a broker and certified appraiser, David provides pricing guidance that reflects the property's true condition and the current market — not wishful thinking or inflated numbers designed to win a listing. This protects your fiduciary obligation and sets realistic expectations.",
  },
  {
    number: "05",
    title: "Market and Sell Strategically",
    text: "David creates a marketing plan tailored to the property's strengths and target buyer pool, manages showings, reviews offers thoroughly, and negotiates terms designed to protect the estate's interests and maximize net proceeds.",
  },
  {
    number: "06",
    title: "Communicate Throughout",
    text: "From listing to closing, David keeps you, the attorney, and other stakeholders informed with clear, timely updates — so you always know where things stand and can make decisions confidently without being surprised by developments.",
  },
];

const commonConcerns = [
  {
    icon: DollarSign,
    title: "What Is the Property Actually Worth?",
    description: "This is often the first and most important question. Online estimates are unreliable for estate properties because they cannot account for deferred maintenance, outdated systems, or condition issues. David's appraisal background means he evaluates the property based on what a buyer will actually see — not what an algorithm projects. Getting the price right from the start avoids costly price reductions, extended market time, and potential scrutiny from heirs or the court.",
  },
  {
    icon: Home,
    title: "Should I Make Repairs or Sell As-Is?",
    description: "This depends on the property, the market, and the likely return on investment. Some improvements — like cleaning, decluttering, and basic landscaping — almost always pay off. Others — like major kitchen renovations or structural repairs — may not be worth the cost or delay. David evaluates each decision individually and recommends only the improvements that will meaningfully affect the sale price and timeline.",
  },
  {
    icon: AlertTriangle,
    title: "The House Is Full of Personal Belongings — Where Do I Start?",
    description: "A lifetime of possessions can feel overwhelming, especially when you are emotionally connected to the items or managing from a distance. David works with professional move managers and estate sale companies who handle this process with care and efficiency. He can coordinate the entire cleanout — from identifying items of value to scheduling removal — so you do not have to do it yourself.",
  },
  {
    icon: Users,
    title: "Multiple Heirs Have Different Opinions About What to Do",
    description: "When siblings or co-heirs disagree about pricing, timing, or whether to sell at all, objective market data becomes essential. David presents factual information — comparable sales, condition assessments, and realistic timeline projections — that helps all parties make informed decisions. His appraisal credentials give his pricing recommendations credibility that reduces family conflict.",
  },
];

const beforeListingChecklist = [
  "Confirm your legal authority to sell — Letters Testamentary, Letters of Administration, or trust documentation",
  "Secure the property — change locks if needed, check insurance coverage, and ensure utilities remain active",
  "Do not make major decisions about repairs or pricing until you have a professional assessment",
  "Gather any available property records — prior appraisals, tax assessments, renovation history, and known issues",
  "Identify all decision-makers and communication preferences before the process begins",
  "If the home contains personal belongings, do not feel pressure to sort everything immediately — professional help is available",
  "Ask your estate attorney about any court approval requirements that may affect the sale timeline",
];

const faqs = [
  {
    question: "What is the first thing I should do as executor when there is real estate involved?",
    answer: "Secure the property, confirm your legal authority to act, and get a realistic assessment of the home's condition and likely market value. David can handle the property evaluation while you work with the estate attorney on the legal requirements.",
  },
  {
    question: "I live out of state — can David handle the property locally?",
    answer: "Absolutely. Many executors and trustees manage property from a distance. David provides hands-on local coordination — property access, vendor management, inspections, preparation, and sale oversight — keeping you informed through regular updates without requiring you to be present.",
  },
  {
    question: "Should I invest in repairs before selling the estate property?",
    answer: "It depends on the property, the market, and the likely return on investment. Some improvements meaningfully increase value; others are not worth the cost or delay. David evaluates repair decisions with a practical, market-informed perspective so you make the right call.",
  },
  {
    question: "How is selling estate property different from a normal home sale?",
    answer: "Estate sales often involve legal timelines, multiple decision-makers, deferred maintenance, personal property cleanout, and emotional complexity. David understands these dynamics and structures the process to account for them — reducing stress and avoiding costly missteps.",
  },
  {
    question: "What if I am a first-time executor and have no idea where to start?",
    answer: "That is completely normal — most executors are handling this for the first time. David walks you through the real estate side step by step, explains what to expect at each stage, and handles the coordination so you can focus on the other responsibilities of estate administration. You do not need prior experience to work with Real Property Planning.",
  },
  {
    question: "How does David handle situations where the property has significant deferred maintenance?",
    answer: "David assesses the property's condition honestly and helps you understand which issues affect value, which need to be disclosed, and which are worth addressing before listing. His appraisal experience means he can estimate the impact of condition issues on market value — giving you data to make informed decisions rather than guesses.",
  },
];

const jsonLd = articleSchema({
  headline: "Estate Property Guide for Executors & Trustees",
  description: "Practical, step-by-step real estate guidance for executors, personal representatives, trustees, and families managing inherited property and estate home sales in Western Washington.",
  url: "/executors",
  datePublished: "2025-01-15",
  dateModified: "2026-03-16",
  about: ["Executors", "Trustees", "Personal representatives", "Estate property", "Inherited home sales", "Deferred maintenance", "Personal property cleanout"],
});

const Executors = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Selling an Estate Property | Help for Executors"
        description="Guidance for executors and personal representatives selling inherited property, including valuation insight, preparation, and coordinated real estate services."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              For Executors, Trustees & Personal Representatives
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              You Have Enough to Manage — Let David Handle the Property
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Most executors are handling an estate for the first time — sorting through legal paperwork, coordinating with family, and making decisions about a property they may not have seen in years. The real estate side alone can feel like a full-time job. David Stein takes that burden off your plate with a structured, hands-on approach that covers everything from initial property assessment to closing day.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              With over 20 years as both a licensed broker and a state certified appraiser, David brings a level of analytical depth and practical coordination that general listing agents simply do not offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Common Concerns */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Common Concerns Executors and Trustees Face
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              If you have been named executor, personal representative, or trustee, these are the questions that keep most people up at night. David has helped clients work through every one of them.
            </p>
            <div className="space-y-6">
              {commonConcerns.map((concern) => (
                <div key={concern.title} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <concern.icon className="w-6 h-6 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                        {concern.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] leading-relaxed">
                        {concern.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before You List Checklist */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What to Do Before Listing an Estate Property
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              You do not need to have everything figured out before reaching out — but these steps will help you feel more prepared and give David the information he needs to provide useful guidance from the first conversation.
            </p>
            <ul className="space-y-4">
              {beforeListingChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How the Process Works for Executors
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              David follows a clear, six-step process so you always know what's happening and what comes next:
            </p>
            <div className="grid gap-5 lg:gap-6">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-gold font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground text-lg italic leading-relaxed mb-4">
              "David brought clarity, professionalism, and calm guidance during a very difficult property transition. His valuation perspective and market knowledge were incredibly helpful."
            </p>
            <p className="text-muted-foreground text-sm font-medium">— Client Review · Estate-related property transition</p>
          </div>
        </div>
      </section>

      {/* Reassurance for First-Time Executors */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              If This Is Your First Time as Executor — You Are Not Alone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The vast majority of executors and personal representatives are doing this for the first time. There is no training program, no orientation manual, and no roadmap for managing a loved one's estate while also processing grief and family obligations. It is completely normal to feel overwhelmed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              David's role is to take the real estate weight off your shoulders. He explains what to expect at each stage, handles the coordination that would otherwise consume your time, and communicates in plain language — not industry jargon. You do not need to be a real estate expert. You just need someone in your corner who is.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A clear plan, experienced guidance, and consistent communication make all the difference. Learn more about <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">how the full process works</Link>, explore <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why accurate pricing matters</Link> for estate property, or visit the <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">Probate & Estate Sales</Link> page for a broader overview.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Looking for other professionals who can help? Browse the <Link to="/resources" className="text-accent hover:text-gold underline underline-offset-4">Resources</Link> section for trusted attorneys, CPAs, senior move managers, and other service providers in Western Washington.
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Executor & Trustee FAQs" />

      <RelatedServices currentPath="/executors" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need help with an inherited or estate property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Start with a conversation. David will review your situation and outline practical next steps — no pressure, no obligation. Whether you are just beginning the process or already feel behind, there is always a clear path forward.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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

export default Executors;
