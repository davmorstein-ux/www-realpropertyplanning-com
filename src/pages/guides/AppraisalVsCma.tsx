import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import NextStepBlock from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const faqs = [
  { question: "Which should I get — an appraisal or a CMA?", answer: "It depends on the purpose. A CMA is typically used for listing pricing decisions. A formal appraisal is used when legal documentation, court submission, tax reporting, or lending requirements demand a certified independent valuation. Our team can advise on which is appropriate for your situation." },
  { question: "Is a broker's CMA less reliable than an appraisal?", answer: "Not necessarily — but they serve different purposes. A CMA from a broker with appraisal training can be highly accurate and practically useful for pricing. A formal appraisal carries legal weight that a CMA does not. Our team's dual credentials mean his market analyses incorporate appraisal-level discipline." },
  { question: "Do I need an appraisal before selling estate property?", answer: "It depends on the estate and court requirements. Some estates benefit from a formal appraisal for tax, distribution, or fiduciary purposes. Others can proceed with a professional market analysis. Our team helps executors and attorneys determine which approach is appropriate." },
  { question: "Why do automated online estimates not work for estate property?", answer: "Automated valuation models (AVMs) use algorithms based on recent sales data and property characteristics from public records. They cannot assess physical condition, deferred maintenance, functional obsolescence, or the unique challenges of estate properties — all of which significantly affect actual market value." },
];

const jsonLd = articleSchema({
  headline: "Appraisal vs. CMA in Probate, Estate, and Inherited Property Situations",
  description: "Understand the difference between a formal appraisal and a comparative market analysis — and why it matters when selling probate, estate, or inherited property.",
  url: "/guides/appraisal-vs-cma",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Property appraisal", "Comparative market analysis", "Estate property valuation", "Probate pricing", "Certified appraiser"],
});

const AppraisalVsCma = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Appraisal vs. CMA for Probate & Estate Property | Real Property Planning"
      description="Understand the difference between a formal appraisal and a CMA — and why it matters when selling probate, estate, or inherited property in Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Appraisal vs. CMA", url: "/guides/appraisal-vs-cma" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Appraisal vs. CMA: What Estate Property Sellers Need to Know
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            A formal appraisal and a comparative market analysis (CMA) both aim to estimate property value — but they serve different purposes, carry different weight, and are produced differently. When a property is part of a probate case, trust, or estate, understanding this distinction helps executors, attorneys, and families make better-informed decisions.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Is a Formal Appraisal?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A formal appraisal is an independent, certified opinion of value produced by a licensed or certified appraiser following Uniform Standards of Professional Appraisal Practice (USPAP). It involves a physical property inspection, detailed analysis of comparable sales, adjustments for condition and features, and a written report that can be used for legal, tax, lending, and court purposes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Formal appraisals carry legal weight. They are required for most mortgage lending, may be requested by probate courts, and are used for estate tax reporting (IRS Form 706), equitable distribution among heirs, and trust accounting. The appraiser's independence and adherence to professional standards make the resulting value opinion defensible under scrutiny.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In Washington State, certified residential appraisers are licensed by the Department of Licensing and must meet education, experience, and continuing education requirements. Real Property Planning holds Washington State Certified Residential Appraiser credential #1702080.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Is a Comparative Market Analysis (CMA)?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A CMA is a broker's opinion of value based on recent comparable sales, active listings, and pending transactions in the local market. It is the standard tool real estate agents use to recommend a listing price for a property. Unlike a formal appraisal, a CMA does not follow USPAP standards and does not carry the same legal or regulatory weight.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The quality of a CMA varies enormously depending on the broker's experience, analytical rigor, and understanding of the subject property's condition. A CMA from a broker with appraisal training and estate property experience will be substantially more reliable than one from an agent who primarily handles standard residential transactions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team's CMAs incorporate appraisal-level analysis — including condition adjustments, functional obsolescence assessments, and effective age considerations — giving executors and attorneys a market opinion that is grounded in professional valuation methodology even when a formal appraisal is not required.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Does the Distinction Matter Most?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Understanding when to use each tool prevents costly mistakes and supports better decision-making:</p>
          <div className="space-y-5">
            {[
              { title: "Estate Tax Reporting", text: "The IRS may require a formal appraisal for estate tax purposes, particularly for estates that exceed the federal estate tax exemption threshold. The appraisal establishes the property's fair market value as of the date of death." },
              { title: "Equitable Distribution Among Heirs", text: "When multiple beneficiaries need to agree on a property's value for buyout or distribution purposes, a formal appraisal provides an independent, credible basis for the discussion." },
              { title: "Court Requirements", text: "Some probate courts or specific estate circumstances may require or benefit from a formal appraisal. The estate attorney can advise whether this applies to your situation." },
              { title: "Listing Price Strategy", text: "For the practical purpose of setting a competitive listing price, a well-prepared CMA from a broker with appraisal experience is typically sufficient — and more directly connected to current market conditions." },
              { title: "Family Disagreements", text: "When heirs disagree about value, professional data — whether from an appraisal or a detailed CMA — helps move the conversation from opinion to evidence." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Not Sure Which Approach You Need?"
      body="Our team can help you determine whether a formal appraisal, a detailed market analysis, or both would best serve your estate situation."
      buttonText="Schedule a Consultation"
      microcopy="No pressure. Just clear, professional guidance."
    />

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Dual Broker/Appraiser Expertise Makes a Difference</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most real estate agents produce CMAs based primarily on square footage, bedroom count, and recent nearby sales. They may not have the training to account for the condition issues, functional obsolescence, and deferred maintenance that are common in estate and inherited properties.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team's certified appraisal background means he evaluates properties the way a lender's appraiser would — assessing effective age, physical depreciation, functional utility, and condition adjustments that automated tools and standard agents miss. This produces more accurate pricing, fewer appraisal surprises during buyer financing, and stronger support for the executor's fiduciary obligations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn more about <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why valuation expertise matters</Link> in estate property sales, or explore our team's <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step process</Link>.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Appraisal & CMA FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "Why Valuation Matters in Estate Real Estate", description: "Understand how professional valuation discipline protects executors, trustees, and families from costly pricing mistakes.", href: "/why-valuation-matters" },
        { title: "Inherited House Guide for Washington Families", description: "Explore your options — sell, keep, rent, or buy out co-inheritors — with key financial and legal considerations.", href: "/guides/inherited-house-washington" },
        { title: "How Probate Real Estate Works", description: "A step-by-step overview of the probate property sale process in Washington State.", href: "/guides/how-probate-real-estate-works" },
      ]}
    />

    <RelatedServices currentPath="/guides/appraisal-vs-cma" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">Need Pricing Guidance for an Estate Property?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">Our team provides honest, market-grounded assessments informed by over 20 years of dual broker and appraiser experience.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Discuss a Property</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default AppraisalVsCma;
