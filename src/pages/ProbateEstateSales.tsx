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

import warning3d from "@/assets/warning-3d.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const probateVsInherited = [
  {
    label: "Probate Property",
    description: "Property being administered through court-supervised probate. Legal authority (letters testamentary or letters of administration) is typically required before a sale can proceed. Timelines, court requirements, and fiduciary duties all affect the process.",
  },
  {
    label: "Inherited Property (Non-Probate)",
    description: "Property that passes outside of probate — through a trust, joint tenancy, or beneficiary designation. These situations may have fewer legal hurdles but still involve condition concerns, family coordination, and pricing decisions.",
  },
];

const whatMakesDifferent = [
  "Legal authority and court requirements may dictate when and how a sale occurs",
  "Multiple decision-makers — executors, co-heirs, attorneys, trustees — must coordinate",
  "Properties often have years of deferred maintenance, clutter, or vacancy",
  "Pricing must account for condition, legal timelines, and realistic market expectations",
  "Emotional complexity can affect family communication and decision-making",
  "Preparation decisions (as-is vs. repair) have a direct impact on sale outcome",
];

const timingConsiderations = [
  {
    title: "Before Legal Authority Is Granted",
    text: "David can assess the property, discuss likely value, and help plan next steps — so you're ready to act as soon as authority is in place.",
  },
  {
    title: "During Active Probate",
    text: "Coordinate preparation, cleanout, pricing strategy, and listing timeline in alignment with legal proceedings and court requirements.",
  },
  {
    title: "Post-Probate or Trust Distribution",
    text: "Once authority is clear, David manages the full sale process — preparation, marketing, negotiation, and closing.",
  },
];

const faqs = [
  {
    question: "How long does it take to sell a probate property in Washington?",
    answer: "Timelines depend on legal authority, property condition, preparation needs, and market conditions. Some properties list within weeks of authority being granted; others need months of preparation. David helps create a realistic timeline based on your specific situation.",
  },
  {
    question: "Can an estate property be sold as-is?",
    answer: "Yes. Many probate and estate properties sell as-is, especially when time or budget constraints make preparation impractical. David evaluates whether an as-is sale or targeted improvements will produce the best overall result for the estate.",
  },
  {
    question: "What costs are involved in selling a probate property?",
    answer: "Common costs include cleanout, repairs, staging, real estate commissions, closing costs, and title-related expenses. David helps executors understand likely costs upfront so there are no surprises.",
  },
  {
    question: "Does the executor need court approval to sell in Washington?",
    answer: "It depends on the estate structure and the authority granted by the court or will. In many cases, a personal representative can sell without additional court confirmation. Legal questions should always be directed to the estate attorney.",
  },
  {
    question: "How is pricing different for probate property?",
    answer: "Estate properties often have condition issues that standard market comparisons don't account for. David's appraisal background allows him to evaluate the property more accurately — accounting for deferred maintenance, functional obsolescence, and realistic buyer expectations.",
  },
];

const jsonLd = articleSchema({
  headline: "Probate Property Sales & Estate Real Estate",
  description: "Experienced guidance for probate real estate sales, inherited property, and estate-related home transactions throughout Western Washington.",
  url: "/probate-estate-sales",
  datePublished: "2025-01-15",
  dateModified: "2026-03-15",
  about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
});

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estate & Probate Property Sales | David Stein | Puget Sound"
        description="David Stein guides executors, attorneys, and families through estate and probate property sales in King, Snohomish, and Pierce counties — including pricing, preparation, and sale of inherited homes."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate & Estate Property Sales
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Selling Probate Property Requires a Different Kind of Expertise
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              When a home is part of a probate case, nothing about the sale follows the normal playbook. Court authority may need to be granted before the property can be listed. The house itself may have been vacant for months, with deferred maintenance that standard market comparisons cannot account for. And the executor, attorney, and family members all need to stay informed without stepping on each other's timelines.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              David Stein brings a rare combination of brokerage skill and certified appraisal knowledge to these situations — giving executors defensible pricing, attorneys a reliable point of coordination, and families the confidence that the property is being handled with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Probate vs Inherited */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Probate Property vs. Inherited Property — What's the Difference?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Not all inherited property goes through probate. Understanding the distinction helps determine the right approach:
            </p>
            <div className="space-y-6">
              {probateVsInherited.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.label}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes These Sales Different */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Makes Estate Property Sales Different
            </h2>
            <ul className="space-y-4">
              {whatMakesDifferent.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timing and Coordination */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Timing and Coordination in Probate Sales
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David works with clients at every stage of the process — whether legal authority has been granted or not:
            </p>
            <div className="space-y-5">
              {timingConsiderations.map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Learn more about the complete <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">sale process from consultation to closing</Link>, or see why <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">accurate pricing is critical</Link> in estate situations.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding the Executor's Role in Property Sales */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              The Real Estate Side of Estate Administration
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Selling estate property is rarely as simple as putting a sign in the yard. These homes often sit vacant for months while legal authority is established, insurance and utility issues need to be managed, and the property's condition may deteriorate. Meanwhile, carrying costs — taxes, insurance, maintenance, and HOA fees — continue to accumulate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David Stein understands these pressures because he has worked through them with hundreds of clients. He helps executors, attorneys, and families develop a timeline that accounts for legal proceedings, property preparation, and market conditions — so the sale happens at the right time, not just the fastest time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For properties that need work before listing, David evaluates each potential improvement through a return-on-investment lens informed by his appraisal training. A $5,000 kitchen cleanup might add $15,000 in sale price; a $40,000 renovation might add only $20,000. These distinctions matter when estate funds are limited and fiduciary duties require defensible decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether the property is a mid-century rambler in Shoreline with decades of deferred maintenance or a waterfront home on Mercer Island held in a family trust, David brings the same structured approach: assess, plan, prepare, price, market, and close — with clear communication at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
              <img src={warning3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Important Note</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  David Stein provides real estate guidance, market analysis, and property sale services. Legal advice regarding probate administration, estate law, fiduciary duties, and court procedures should be directed to a qualified attorney. David works collaboratively with your legal team to ensure the real estate side proceeds smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground text-lg italic leading-relaxed mb-4">
              "David's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable."
            </p>
            <p className="text-muted-foreground text-sm font-medium">— Professional Referral · Probate property sale coordination</p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Probate & Estate Sale FAQs" />

      <RelatedServices currentPath="/probate-estate-sales" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need experienced help selling a probate or estate property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David Stein provides a no-pressure consultation to review the property, discuss timing, and outline next steps.
            </p>
            <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
