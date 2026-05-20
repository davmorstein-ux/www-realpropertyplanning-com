import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, AlertCircle } from "lucide-react";
import GoldCheck3D from "@/components/GoldCheck3D";
import HeroBandTitle from "@/components/HeroBandTitle";
import washingtonExecutorsHero from "@/assets/washington-executors-hero.png";

const steps = [
  {
    title: "Confirm your authority to act",
    body: "Before making decisions about the property, confirm who has legal authority to act on behalf of the estate or trust. In many cases, that may be the executor, personal representative, trustee, or another authorized party. If you are unsure, confirm this with the attorney handling the estate.",
  },
  {
    title: "Secure the property immediately",
    body: "Make sure the property is protected as soon as possible. Change locks if needed, collect spare keys, secure valuables, forward mail, and make sure the home is not left vulnerable. If the property is vacant, regular checks are often a good idea.",
  },
  {
    title: "Review insurance coverage",
    body: "Do not assume the existing homeowner's policy still provides the right protection. A vacant property or estate-owned property may require different coverage. Confirm the policy status, vacancy terms, and whether any updates are needed right away.",
  },
  {
    title: "Locate important property documents",
    body: "Gather the documents connected to the home, including the deed, mortgage information, tax statements, utility details, HOA information, lease agreements if applicable, and any trust or probate-related paperwork. Having these in one place makes the process much easier.",
  },
  {
    title: "Understand the property's condition",
    body: "Take time to assess the true condition of the home. Look at deferred maintenance, safety concerns, needed repairs, personal property left behind, and any issues that may affect marketability or value. This helps set realistic expectations before making next-step decisions.",
  },
  {
    title: "Get a realistic valuation",
    body: "One of the most important steps is determining a credible value for the property. Families are often given inflated opinions or conflicting advice. A realistic valuation helps with planning, timing, repair decisions, sale strategy, and conversations with attorneys, heirs, and beneficiaries.",
  },
  {
    title: "Decide whether to sell as-is or improve before sale",
    body: "Not every estate property should be renovated before listing. Some homes sell best as-is, while others benefit from targeted clean-up, hauling, repairs, or cosmetic improvements. The goal is to make decisions based on likely return, not guesswork.",
  },
  {
    title: "Coordinate with all decision-makers",
    body: "Many estate sales involve multiple family members, co-trustees, beneficiaries, or advisors. Clear communication matters. Decide early who needs updates, who is involved in decisions, and how approvals will be handled to reduce confusion and delays.",
  },
  {
    title: "Build a timeline that fits the legal process",
    body: "The real estate timeline should work alongside probate, trust administration, title requirements, court timelines if applicable, and family logistics. Rushing usually causes problems, but waiting too long can also create unnecessary holding costs and stress.",
  },
  {
    title: "Choose a sale strategy that fits the situation",
    body: "Once the legal authority, condition, and timing are clear, choose the best path forward. That may include selling traditionally, selling as-is, preparing the property for maximum exposure, or delaying the sale until other estate matters are resolved. The right approach depends on the property, the people involved, and the overall goals.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Washington Executor's 10-Step Checklist for Handling Real Estate",
  description:
    "A practical free resource for Washington executors, trustees, and families handling estate real estate.",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
};

const WashingtonExecutorsChecklist = () => {
  return (
    <>
      <SEOHead
        title="Washington Executor's 10-Step Checklist for Handling Real Estate | Real Property Planning"
        description="A practical free resource for Washington executors, trustees, and families handling estate real estate. Learn the 10 key steps to protect the property, understand value, and move forward with confidence."
        canonical="https://realpropertyplanning.com/resources/washington-executors-10-step-checklist"
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Resources", url: "https://realpropertyplanning.com/resources" },
          {
            name: "Washington Executor's 10-Step Checklist",
            url: "https://realpropertyplanning.com/resources/washington-executors-10-step-checklist",
          },
        ]}
      />
      <Header />

      <main id="main-content">
        {/* Shared Hero (image + navy band) */}
        <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
          <div style={{ lineHeight: 0 }}>
            <img
              src={washingtonExecutorsHero}
              alt="Senior couple driving a red convertible toward a highway sign reading 10 Steps for Executors with Seattle skyline and Mount Rainier in the distance"
              className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
              loading="eager"
            />
            <HeroBandTitle as="div">10 Steps Every Executor Should Know</HeroBandTitle>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium">
                When a home is part of an estate, most executors and families are forced to make important decisions quickly — often without a clear roadmap. This checklist is designed to help you understand the real estate side of the process, avoid common mistakes, and move forward with more confidence.
              </p>
            </div>
          </div>
        </section>

        {/* 10 Steps */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Your Roadmap
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10">
                10 Steps Every Executor Should Know
              </h2>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-5 md:gap-6">
                    {/* Step number */}
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-gold/20 to-gold/8 border border-gold/25 shadow-[0_2px_6px_rgba(201,168,76,0.12)]">
                      <span className="text-gold font-bold text-base">{i + 1}</span>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer note */}
        <section className="py-10 md:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-xl border border-border bg-card p-6 md:p-8 flex gap-4">
                <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed">
                  Every estate situation is different. This checklist is meant to help you ask the right questions, stay organized, and make informed decisions about the property. It is not legal or tax advice. Executors, trustees, and families should work with the appropriate attorney, CPA, and real estate professionals for guidance specific to their situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Need help navigating the real estate side of an estate?
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Real Property Planning works with executors, trustees, and families to make informed property decisions with clarity, coordination, and structured, evidence-based strategy.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto text-base tracking-wide">
                  Schedule a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/resources/washington-executors-10-step-checklist" />
          <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default WashingtonExecutorsChecklist;
