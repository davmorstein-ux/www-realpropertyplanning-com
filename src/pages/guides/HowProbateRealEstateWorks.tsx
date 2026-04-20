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
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/probate-real-estate-sales-washington-guide.webp";

const faqs = [
  {
    question: "How long does it take to sell a house in probate in Washington?",
    answer: "Timelines vary widely depending on court processing, property condition, and preparation needs. Once legal authority is established, the listing-to-closing process can take 60 to 120 days — but the full probate timeline may extend several months or longer. Starting the real estate planning process early helps avoid unnecessary delays.",
  },
  {
    question: "Can an executor sell property before probate is completed?",
    answer: "In most cases, the executor or personal representative needs legal authority (letters testamentary) before the property can be listed and sold. However, pre-probate planning — including property assessment, vendor coordination, and pricing strategy — can begin immediately to reduce the overall timeline.",
  },
  {
    question: "Does probate property have to be sold at fair market value?",
    answer: "Executors and personal representatives have a fiduciary duty to act in the best interest of the estate, which generally means achieving fair market value. Our team's dual credentials as a broker and certified appraiser help ensure pricing decisions are defensible and well-supported by market data.",
  },
  {
    question: "What happens if heirs disagree about selling?",
    answer: "Disagreements among heirs are common in probate situations. When pricing disputes arise, Our team provides objective, data-driven market analysis that can help move the conversation forward. Legal questions about authority and heir rights should be directed to the estate attorney.",
  },
  {
    question: "Do I need a specialized agent for probate real estate?",
    answer: "Probate sales involve unique legal requirements, emotional complexity, and property condition challenges that most residential agents rarely encounter. Working with a broker who understands court timelines, fiduciary obligations, and estate property conditions can prevent costly mistakes and delays.",
  },
];

const jsonLd = articleSchema({
  headline: "How Probate Real Estate Sales Work in Washington State",
  description: "A comprehensive guide to selling property through probate in Washington — including legal authority, timing, valuation, preparation, and what executors and attorneys need to know.",
  url: "/guides/how-probate-real-estate-works",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Probate real estate", "Washington probate sales", "Estate property", "Executor responsibilities", "Court-supervised property sales"],
});

const HowProbateRealEstateWorks = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Probate Real Estate Sales Work in Washington | David Stein, Broker & Appraiser"
      description="David Stein explains how probate real estate sales work in Washington State. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "How Probate Real Estate Works", url: "/guides/how-probate-real-estate-works" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="Probate real estate sales guide — house, gavel, last will and testament, and petition for probate" className="block w-full max-w-[20rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How Probate Real Estate Sales Work in Washington State
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Written for executors, attorneys, and families who need a clear walkthrough of how a probate property sale works in Washington State. Selling property through probate in Washington involves legal authority, court oversight, property preparation, and careful pricing. This guide explains the process step by step — so executors, attorneys, and families know what to expect and how to avoid common pitfalls.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Whether you are a first-time executor or an attorney referring a client, understanding the probate real estate process helps you make better decisions and protect the estate's interests.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Your Probate Real Estate Broker & Agent */}
    <section className="py-16 lg:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
            Your Probate Real Estate Broker &amp; Agent in Washington State
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            When families, executors, and attorneys across the Puget Sound region search for a probate real estate broker and agent, they consistently find — and rely on — David Stein, President of Real Property Planning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            David is a Washington State Licensed Real Estate Broker and a Washington State Certified Residential Appraiser with over 20 years of combined experience in both disciplines. That dual credential is rare in the probate real estate space, and it matters: the same professional who prices your estate property for the court file is the one who lists and sells it — with no gap between valuation and market strategy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            David specializes exclusively in probate real estate sales, inherited property, estate sales, and senior housing transitions throughout King, Snohomish, Pierce, and Kitsap Counties.
          </p>
          <h3 className="font-serif text-xl text-foreground font-semibold mb-3">Professional Affiliations</h3>
          <ul className="space-y-3 mb-6">
            {[
              "Corporate Partner, Aging Life Care Association (ALCA)",
              "Member, National Association of Estate Planners & Councils (NAEPC)",
              "Recognized Member, National Association of Senior Advocates — Best Real Estate Agent 2026",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Real Property Planning is the hub connecting every professional and resource families need during a probate or estate property transition — with David Stein as your licensed broker and appraiser at the center of it all.
          </p>
        </div>
      </div>
    </section>

    {/* What Is Probate Real Estate */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Is Probate Real Estate?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Probate real estate refers to property that is part of a deceased person's estate and must be sold through the probate process. In Washington State, probate is the court-supervised process of settling an estate — including distributing assets, paying debts, and transferring or selling property.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Not all inherited property goes through probate. Property held in a trust, joint tenancy, or with a transfer-on-death deed may pass outside of probate entirely. Understanding the distinction matters because it affects who has authority to sell, what documentation is required, and how the sale process unfolds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When property does go through probate, the personal representative (executor) typically needs court-issued letters testamentary or letters of administration before the sale can proceed. The executor has a fiduciary duty to act in the best interest of the estate — which means achieving a fair price and managing the property responsibly during the process.
          </p>
        </div>
      </div>
    </section>

    {/* Who Has Authority */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Who Has Authority to Sell Probate Property in Washington?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            In Washington, the personal representative named in the will — or appointed by the court if there is no will — generally has authority to sell real property as part of estate administration. This authority is documented through letters testamentary (when there is a will) or letters of administration (when there is not).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Washington is a non-supervised probate state, meaning that in many cases the personal representative can sell real property without specific court approval of the sale price or terms. However, the will itself or court order may impose additional requirements. The estate attorney is the right person to clarify what authority exists and what approvals may be needed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Even before formal authority is granted, a broker experienced in probate can visit the property, assess its condition, begin planning preparation, and develop a pricing strategy — so the sale process can begin quickly once legal authority is in place.
          </p>
        </div>
      </div>
    </section>

    {/* Timing and Coordination */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Do Timing and Coordination Matter So Much?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Probate properties face unique timing pressures. While legal authority is being established, the property may be sitting vacant — accumulating carrying costs including mortgage payments, property taxes, insurance, utilities, and HOA dues. Deferred maintenance can worsen during this period, and security risks increase for unoccupied homes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Coordinating the real estate timeline with the legal process is one of the most important aspects of a successful probate sale. The executor, attorney, and broker need to work together to align property preparation with legal milestones — so the home reaches the market at the right time, in the right condition, at the right price.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Real Property Planning regularly coordinates with estate attorneys throughout Washington State to ensure the real estate process supports — rather than conflicts with — the overall estate administration timeline.
          </p>
        </div>
      </div>
    </section>

    {/* Valuation and Pricing */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How Is Probate Property Valued and Priced?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Pricing probate property is fundamentally different from pricing a standard home sale. Estate properties often have years of deferred maintenance, outdated kitchens and bathrooms, aging mechanical systems, and physical conditions that automated valuation tools and standard market comparisons do not account for.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As both a licensed real estate broker and a Washington State certified residential appraiser, Our team evaluates probate properties with a depth of analysis that goes beyond a standard comparative market analysis. He assesses the property's effective age, functional utility, physical depreciation, and market position — then develops a pricing strategy that reflects what buyers will actually pay given the property's real condition.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This matters because overpricing leads to extended market time and declining buyer interest, while underpricing can create fiduciary concerns and leave estate value on the table. Accurate, defensible pricing protects both the executor's fiduciary obligations and the estate's financial interests. Learn more about <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">why valuation expertise matters in estate sales</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Proof callout */}
    <section className="py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ProofCallout
            quote="Our team's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable."
            attribution="Family Member, King County"
            context="Probate property sale"
            variant="accent"
          />
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Navigating a Probate Property Situation?"
      body="Our team provides a no-pressure consultation to review the property, discuss timing and legal coordination, and outline practical next steps."
      buttonText="Schedule a Consultation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* Property Preparation */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Preparation Does a Probate Property Typically Need?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most probate properties need some level of preparation before going to market. The extent varies widely — from basic cleaning and decluttering to substantial cleanout, repairs, landscaping, and staging.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Common preparation needs include removing decades of accumulated personal property, addressing deferred maintenance issues (roof, plumbing, electrical), updating cosmetic elements that affect buyer perception, clearing landscaping, and ensuring the property is safe and presentable for showings.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team coordinates this entire process — scheduling vendors, managing timelines, and overseeing the work so the executor does not have to be on-site or manage contractors personally. He evaluates each potential improvement through a return-on-investment lens, advising the executor on which investments are likely to increase the sale price enough to justify the cost. See the full <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step sale process</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Common Delays */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Are the Most Common Delays in Probate Property Sales?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Understanding the common causes of delay helps executors and attorneys plan proactively:
          </p>
          <ul className="space-y-4 mb-6">
            {[
              "Waiting for legal authority (letters testamentary) before beginning any real estate work",
              "Disagreements among heirs about pricing, timing, or whether to sell",
              "Extensive property cleanout needs when the home contains decades of belongings",
              "Deferred maintenance that must be assessed before pricing can be finalized",
              "Title issues including liens, encumbrances, or unclear ownership",
              "Insurance gaps for vacant properties during the estate administration period",
              "Appraisal challenges when buyer financing requires the property to meet certain condition standards",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Many of these delays can be minimized or avoided by engaging a probate-experienced broker early in the process — even before legal authority is formally granted.
          </p>
        </div>
      </div>
    </section>

    {/* How a Broker/Appraiser Helps */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How Does a Broker With Appraisal Credentials Help?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most real estate agents handle one or two probate transactions in their career. Real Property Planning focuses his practice on probate, estate, and transition-related real estate — bringing both brokerage expertise and certified appraisal knowledge to every engagement.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This dual background means the executor and attorney receive more accurate property assessments, stronger pricing strategy, better preparation guidance, and more confident decision-making support throughout the process. It also means our team can anticipate appraisal-related challenges that could derail a buyer's financing — and address them before they become problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors managing estate property</Link> for the first time, this combination of expertise provides a single point of contact who can handle the real estate side completely — from initial assessment through closing. For <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">attorneys referring clients</Link>, it means a reliable, professional partner who understands fiduciary obligations and communicates clearly.
          </p>
        </div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-12 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What to Do With an Inherited House</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Probate Real Estate FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "What Executors Should Do First", description: "A step-by-step guide to the first 30 days of managing estate property as a personal representative.", href: "/guides/what-executors-should-do" },
        { title: "Inherited House Guide for Washington Families", description: "Explore your options — sell, keep, rent, or buy out co-inheritors — with key considerations.", href: "/guides/inherited-house-washington" },
        { title: "Appraisal vs. CMA: Which Do You Need?", description: "Learn when a formal appraisal is required versus a comparative market analysis.", href: "/guides/appraisal-vs-cma" },
      ]}
    />

    <RelatedServices currentPath="/guides/how-probate-real-estate-works" />

    {/* Bottom CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
            Have a Probate Property Situation to Discuss?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            Our team provides confidential, no-pressure consultations for executors, attorneys, trustees, and families dealing with probate property throughout Washington State.
          </p>
          <p className="text-primary-foreground/50 text-base mb-8">
            A short conversation to understand your situation, answer questions, and plan practical next steps.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default HowProbateRealEstateWorks;
