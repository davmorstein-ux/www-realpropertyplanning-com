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
import { MessageSquare, Phone, Mail, Globe } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ListenButton from "@/components/ListenButton";
import davidSteinPhoto from "@/assets/providers/david-stein-headshot-sq.jpg";
import expRealtyLogo from "@/assets/providers/exp-realty-logo-large.png";
import ehoLogo from "@/assets/providers/equal-housing-opportunity.png";

const faqs = [
  {
    question: "How is selling trust property different from a normal home sale?",
    answer: "Trust sales involve fiduciary obligations, potential beneficiary oversight, documentation requirements, and sometimes attorney involvement that standard sales do not. David understands these dynamics and structures the process to account for them — reducing risk and providing the documentation trustees need.",
  },
  {
    question: "I live out of state — can David handle the property locally?",
    answer: "Absolutely. Many trustees manage trust property from a distance. David provides hands-on local coordination — property access, vendor management, preparation, and sale oversight — keeping you informed through regular updates without requiring you to be present.",
  },
  {
    question: "What documentation will I have to support my pricing decisions?",
    answer: "David provides detailed market analysis, comparable sales data, condition assessments, and written pricing rationale. His appraisal background means this documentation meets a higher standard than typical agent opinions — giving you defensible support for fiduciary decisions.",
  },
  {
    question: "Do I need court approval to sell trust property?",
    answer: "In most cases, trust property can be sold without court approval — unlike probate property, which may require court oversight. However, the specific trust terms and Washington State law govern the process. David works closely with trust attorneys to ensure the sale follows proper procedures.",
  },
  {
    question: "What if beneficiaries disagree about the sale?",
    answer: "This is common. David provides objective, data-driven pricing and market analysis that helps move the conversation from emotion to facts. His valuation-informed approach gives all parties a defensible basis for decision-making, which often resolves disagreements more effectively than opinions.",
  },
  {
    question: "Should I invest in repairs before selling trust property?",
    answer: "It depends on the property, the market, and the likely return on investment. Some improvements meaningfully increase value; others are not worth the cost or delay. David evaluates repair decisions with a practical, market-informed perspective so you can make prudent fiduciary decisions.",
  },
];

const jsonLd = articleSchema({
  headline: "Trust Property Guide for Trustees",
  description: "Practical real estate guidance for trustees, successor trustees, and fiduciaries managing trust-held property in Washington State. Licensed broker and certified appraiser.",
  url: "/trustees",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  about: ["Trustees", "Successor trustees", "Trust administration", "Trust property", "Trust-held real estate"],
});

const Trustees = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Trustees — Real Estate Guidance for Trust-Held Property | David Stein"
        description="Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State. Licensed broker and certified appraiser."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Trustees", url: "/trustees" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl" id="trustees-hero-section">
            <div className="mb-5">
              <ListenButton targetId="trustees-hero-section" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Fiduciary Support
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Trustees
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-4 motion-safe:animate-[text-emphasis-a_14s_ease-in-out_infinite]" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>
              Serving as a trustee often means balancing legal responsibility, practical decisions, family dynamics, and property-related questions — all at the same time.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground leading-relaxed mb-8 motion-safe:animate-[text-emphasis-b_14s_ease-in-out_infinite]" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}>
              When a trust includes real estate, the process can involve valuation, property preparation, timing, communication, and sale coordination. This page is designed to help trustees understand the real estate side of that responsibility and know where to turn for practical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Conversation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Trustees Are Often Dealing With */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              What Trustees Are Often Dealing With
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Trustees are frequently asked to make careful decisions on behalf of others while meeting fiduciary responsibilities and keeping the process organized. When real estate is part of the trust, that can mean evaluating whether to sell, preparing a property for market, coordinating access, addressing personal property, and documenting decisions in a way that supports transparency.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              In many cases, trustees are also working with attorneys, CPAs, financial advisors, family members, and beneficiaries — all while trying to move the process forward responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: When Real Estate Is Held in Trust */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              When Real Estate Is Held in Trust
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Trust-held property often comes with questions that go beyond a typical home sale. Trustees may need help understanding value, timing, market strategy, property condition, cleanup, repairs, or how to coordinate a sale while keeping all interested parties informed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              This is especially important when:
            </p>
            <ul className="space-y-4">
              {[
                "The property has not been updated in years",
                "Beneficiaries are out of state",
                "The home is occupied or full of personal belongings",
                "There are questions about pricing or condition",
                "The trustee wants a clear, well-supported process",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: How I Help Trustees */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How I Help Trustees
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I help trustees navigate the real estate side of the process with clear communication, practical guidance, and valuation-informed strategy.
            </p>
            <ul className="space-y-4">
              {[
                "Objective property guidance grounded in real estate and appraisal experience",
                "Clear pricing and valuation support",
                "Property preparation recommendations based on condition, marketability, and return",
                "Coordination with attorneys, fiduciaries, and family decision-makers",
                "Help managing personal property, cleanout, vendor access, and sale preparation",
                "Calm communication during emotionally and logistically complex situations",
                "Support for local and out-of-state trustees",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Why Valuation Matters */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              Why Valuation Matters
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              As both a Realtor and a Washington State Certified Residential Appraiser, David Stein brings an added level of perspective to trust-related property decisions. That can be especially valuable when trustees want a more informed understanding of value, market position, condition-related tradeoffs, and how to support decision-making with defensible reasoning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This does not replace legal or tax advice, but it can help trustees approach the real estate side of the process with more clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Who This Page Is For */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Who This Page Is For
            </h2>
            <ul className="space-y-4">
              {[
                "Individual trustees",
                "Successor trustees",
                "Family members helping a trustee",
                "Attorneys assisting trust administration",
                "CPAs and fiduciary professionals involved in trust-related property decisions",
                "Out-of-state trustees managing Washington property",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: A Practical Resource for the Next Step */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              A Practical Resource for the Next Step
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Trustees are often expected to act carefully, communicate clearly, and make decisions that hold up under scrutiny. When real estate is involved, having the right guidance can make that process more manageable.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you are still gathering information or ready to make decisions about a trust-held property, this page is here to help you understand the path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Professional — David Stein Realtor (same card as Realtor page) */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              Featured Professional
            </h2>

            <div className="bg-secondary border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
                <div className="shrink-0">
                  <img
                    src={davidSteinPhoto}
                    alt="David Stein — Real Estate Broker, Real Property Planning"
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border shadow-sm"
                  />
                </div>

                <div className="flex w-full flex-col items-center sm:flex-1 sm:items-start">
                  <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img
                      src={expRealtyLogo}
                      alt="eXp Realty logo"
                      className="h-[120px] w-auto object-contain mx-auto sm:mx-0 sm:-translate-x-[10px] block"
                    />
                  </a>

                  <div className="w-full mt-1 text-center sm:text-left">
                    <p className="text-foreground font-semibold text-base">David Stein</p>
                    <p className="text-muted-foreground text-sm mb-0.5">Real Estate Broker</p>
                    <p className="text-muted-foreground text-sm mb-1.5">Real Property Planning</p>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Specializing in senior transitions, probate and estate property sales, and trust-held real estate throughout Washington State. Combining real estate brokerage with certified residential appraisal experience to provide families, executors, and professionals with informed, reliable property guidance.
                    </p>

                    <div className="text-muted-foreground text-xs leading-relaxed mb-3 space-y-0.5">
                      <p>Real Estate Broker — License #113972</p>
                      <p>WA Certified Residential Appraiser — #1702080</p>
                    </div>

                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <a href="tel:+12069003015" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                          (206) 900-3015
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a href="mailto:david@realpropertyplanning.com" className="text-accent hover:text-gold underline-offset-4 hover:underline break-all">
                          david@realpropertyplanning.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <Globe className="w-4 h-4 text-accent shrink-0" />
                        <a href="https://davestein.exprealty.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">
                          davestein.exprealty.com
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-foreground font-semibold text-xs uppercase tracking-widest mb-2">Proud member of the:</p>
                      <ul className="space-y-1 text-[#1c825e] text-sm">
                        <li>ALCA — Aging Life Care Association</li>
                        <li>NAOSA — National Association of Senior Advocates</li>
                        <li>NAEPC — National Association of Estate Planners &amp; Councils</li>
                        <li>NAR — National Association of Realtors®</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                      <img
                        src={ehoLogo}
                        alt="Equal Housing Opportunity"
                        className="h-10 w-auto object-contain opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Trustee FAQs" />

      <RelatedServices currentPath="/trustees" />

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Need Help With a Trust-Held Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              If you are serving as a trustee and need practical guidance around valuation, preparation, coordination, or sale strategy, I would be glad to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Conversation
                </Button>
              </Link>
              <Link to="/how-the-process-works">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  See How the Process Works
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

export default Trustees;
