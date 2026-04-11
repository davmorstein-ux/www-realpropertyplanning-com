import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const faqs = [
  { question: "Is an appraisal legally required before selling inherited property?", answer: "Not always. Washington State does not mandate a formal appraisal for every estate sale. However, certain situations — such as court oversight, multi-heir disputes, or tax reporting — may require or strongly benefit from one. The estate attorney can advise on legal requirements specific to your case." },
  { question: "What is the difference between an appraisal and a CMA?", answer: "An appraisal is a formal, independent opinion of value performed by a licensed appraiser following strict professional standards. A CMA (comparative market analysis) is an informal estimate prepared by a real estate broker based on recent sales. David's dual credentials allow him to provide market analysis with appraisal-level rigor." },
  { question: "How much does an estate property appraisal cost?", answer: "Formal appraisals for estate properties typically range from $400 to $800 or more, depending on property complexity, location, and purpose. The cost is usually justified when the valuation will be used for court proceedings, tax filings, or resolving disputes among heirs." },
  { question: "Can an online estimate replace a professional assessment?", answer: "No. Online valuation tools (Zestimate, Redfin estimates, etc.) rely on algorithms that cannot account for property condition, deferred maintenance, needed repairs, or estate-specific circumstances. These tools routinely miss the mark by 10–20% or more on inherited properties." },
  { question: "When should I get the property appraised vs. just assessed?", answer: "If you need a formal document for court, tax, or legal purposes, get an appraisal. If you need to understand the property's likely sale price to make planning decisions, a professional assessment from someone with appraisal credentials can provide that insight more quickly and affordably." },
];

const jsonLd = articleSchema({
  headline: "Do I Need an Appraisal Before Selling Inherited Property?",
  description: "When a formal appraisal is needed for inherited property — and when a professional market assessment may be enough. A guide for executors and families.",
  url: "/guides/appraisal-before-selling-inherited-property",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Property appraisal", "Inherited property", "Estate valuation", "CMA vs appraisal", "Executor decisions"],
});

const AppraisalBeforeSelling = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Do I Need an Appraisal Before Selling Inherited Property? | Real Property Planning"
      description="When a formal appraisal is needed for inherited property — and when a professional market assessment may be enough. A practical guide for executors and families."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Appraisal Before Selling Inherited Property", url: "/guides/appraisal-before-selling-inherited-property" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Do I Need an Appraisal Before Selling Inherited Property?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            It depends on your situation. A formal appraisal is not always legally required, but understanding the property's true value before making decisions is almost always essential — especially for estate and inherited properties where condition, deferred maintenance, and emotional pricing can lead to costly mistakes.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide explains when a formal appraisal is needed, when a professional assessment is sufficient, and why accurate valuation protects everyone involved.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* What This Means in Practice */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What This Means in Practice</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Inherited properties are almost never in "typical" market condition. They often have decades of deferred maintenance, outdated finishes, accumulated belongings, and sometimes structural issues that the previous owner lived with comfortably but that significantly affect market value.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Online valuation tools assume a property is in average condition. For inherited homes, this assumption is almost always wrong — sometimes by tens of thousands of dollars.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A professional who understands both real estate markets and <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">appraisal methodology</Link> can give you a realistic picture of what the property is actually worth in its current state — and what targeted improvements might meaningfully change that number.
          </p>
        </div>
      </div>
    </section>

    {/* When You Need a Formal Appraisal */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When You Likely Need a Formal Appraisal</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A certified appraisal may be needed or strongly recommended in these situations:
          </p>
          <ul className="space-y-4">
            {[
              "The probate court requires a formal valuation as part of estate administration",
              "The estate needs a date-of-death value for federal estate tax purposes (estates over the filing threshold)",
              "Heirs disagree about the property's worth and need an independent, defensible opinion",
              "One heir wants to buy out the others and everyone needs to agree on fair market value",
              "The property is being distributed in-kind rather than sold, and equitable division requires valuation",
              "An attorney or CPA has specifically requested a formal appraisal for legal or tax documentation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* When a Professional Assessment May Be Enough */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When a Professional Assessment May Be Enough</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If the primary goal is to sell the property and you need to understand realistic pricing, a thorough market assessment from a broker with appraisal credentials can often provide the insight you need — faster and more affordably than a formal appraisal.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is especially true when all heirs agree to sell, the estate is straightforward, and there are no court requirements for a formal appraisal. A valuation-informed market analysis considers the same factors a formal appraisal would — comparable sales, condition adjustments, market trends — but delivers the conclusion in a format designed for sale planning rather than legal documentation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            David's <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold underline underline-offset-4">dual credentials as broker and certified appraiser</Link> mean his market assessments carry the analytical rigor of appraisal methodology, giving families confidence in pricing decisions even without a formal appraisal report.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Not Sure Which You Need?"
      body="David can help you determine whether a formal appraisal or a professional market assessment is the right approach for your situation — and explain the practical difference."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* Where Mistakes Happen */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Where Mistakes Happen</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The most expensive mistake families make is relying on an online estimate or a neighbor's opinion to price an inherited home. These informal valuations consistently miss condition-based factors that directly affect what buyers will actually pay.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Overpricing leads to extended market time, price reductions, and stigma. Underpricing means leaving money on the table — money that belongs to the estate and its beneficiaries.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Another common mistake is getting a formal appraisal when it is not needed, spending $500–$800 unnecessarily. Or, conversely, skipping a formal appraisal when the court or a multi-heir dispute actually requires one — which can create legal complications down the road.
          </p>
        </div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Appraisal vs. CMA</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Appraisal & Valuation FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "Appraisal vs. CMA in Estate Situations", description: "Understand the key differences and when each approach is appropriate.", href: "/guides/appraisal-vs-cma" },
        { title: "How to Price a House in a Trust or Estate", description: "A practical look at pricing strategies when emotion, condition, and legal obligations intersect.", href: "/guides/pricing-house-trust-estate" },
        { title: "What Executors Should Do First", description: "The practical first steps every executor should take before selling.", href: "/guides/what-executors-should-do" },
      ]}
    />

    <RelatedServices currentPath="/guides/appraisal-before-selling-inherited-property" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">If you're dealing with this situation and want help thinking through your options, a short conversation can often bring clarity.</p>
          <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    <Footer />
  </div>
);

export default AppraisalBeforeSelling;
