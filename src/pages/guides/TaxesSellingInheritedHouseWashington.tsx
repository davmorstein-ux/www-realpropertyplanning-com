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
import ServicePageNav from "@/components/ServicePageNav";

const faqs = [
  { question: "Do you pay capital gains tax on an inherited house in Washington?", answer: "You may owe federal capital gains tax on any appreciation above the stepped-up basis — meaning the property's fair market value at the date of the decedent's death. If you sell shortly after inheriting, there is often little or no gain. Washington State does not have a state capital gains tax on real estate sales of primary residences, but a 7% tax may apply to long-term capital gains above $250,000. Consult a tax professional for your specific situation." },
  { question: "What is a stepped-up basis?", answer: "When you inherit property, the IRS 'steps up' the cost basis to the fair market value at the date of the owner's death. This means you only owe capital gains tax on appreciation that occurs after that date — not on gains that accumulated during the original owner's lifetime." },
  { question: "Is there an estate tax in Washington State?", answer: "Yes. Washington State has its own estate tax, which applies to estates valued above $2.193 million (as of 2024). The federal estate tax exemption is significantly higher. Whether the estate owes taxes depends on total estate value, not just the property." },
  { question: "How do you establish the value at date of death?", answer: "The most reliable way is through a professional appraisal conducted as close to the date of death as possible. This establishes the stepped-up basis and provides documentation for tax purposes. A certified residential appraiser can provide this valuation." },
  { question: "What if you rent the inherited property before selling?", answer: "If you convert the property to a rental before selling, the tax situation becomes more complex. You may need to account for depreciation recapture and the holding period changes. A CPA experienced with inherited property can advise on the implications." },
];

const jsonLd = articleSchema({
  headline: "What Taxes Do You Pay When Selling an Inherited House in Washington?",
  description: "Understanding capital gains, stepped-up basis, estate taxes, and other tax considerations when selling inherited property in Washington State.",
  url: "/guides/taxes-selling-inherited-house-washington",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  about: ["Inherited property taxes", "Stepped-up basis", "Capital gains tax", "Washington estate tax", "Inherited house sale"],
});

const TaxesSellingInheritedHouseWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Taxes Do You Pay When Selling an Inherited House in Washington? | Real Property Planning"
      description="Understanding capital gains, stepped-up basis, estate taxes, and other tax considerations when selling inherited property in Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Taxes on Inherited House in WA", url: "/guides/taxes-selling-inherited-house-washington" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What Taxes Do You Pay When Selling an Inherited House in Washington?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            The short answer: it depends on timing, the property's value at the date of death, and how long you hold the property before selling. In many cases, the tax impact is smaller than people expect — thanks to what is called a "stepped-up basis."
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide explains the key tax concepts in plain language. It is not tax advice — always work with a qualified CPA or tax attorney for your specific situation.
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
            When someone inherits a house, one of the first questions is usually about taxes. The concern is understandable — if a parent bought a home for $80,000 decades ago and it is now worth $650,000, does the heir owe taxes on that entire gain?
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Generally, no. The IRS provides what is called a "stepped-up basis," which resets the property's cost basis to its fair market value at the date of the owner's death. If you sell shortly after inheriting, there is typically little or no taxable gain.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, if you hold the property for an extended period and it appreciates further, you may owe capital gains tax on the difference between the stepped-up basis and the eventual sale price. The longer you hold, the more important it becomes to track value changes and consult with a tax professional.
          </p>
        </div>
      </div>
    </section>

    {/* Key Tax Concepts */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Key Tax Concepts to Understand</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            <strong className="text-foreground">Stepped-up basis.</strong> This is the single most important concept. When you inherit property, the IRS resets the cost basis to fair market value at the date of death. This eliminates the capital gains that accumulated during the original owner's lifetime.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Capital gains tax.</strong> If you sell the property for more than the stepped-up basis, the gain is subject to federal capital gains tax. The rate depends on your income level and how long you held the property after inheriting it.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Washington State capital gains tax.</strong> As of 2022, Washington imposes a 7% tax on long-term capital gains exceeding $250,000. Certain exclusions may apply. This is an area where professional tax guidance is especially important.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Estate tax vs. inheritance tax.</strong> Washington has a state estate tax on estates above approximately $2.193 million. There is no separate inheritance tax. The estate tax is paid by the estate before distribution, not by individual heirs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Real estate excise tax (REET).</strong> Washington charges a real estate excise tax on all property sales. The rate varies by sale price and county. This is typically paid at closing and is a standard part of any Washington real estate transaction.
          </p>
        </div>
      </div>
    </section>

    {/* Why Valuation Matters */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Accurate Valuation Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The stepped-up basis depends entirely on establishing the property's fair market value at the date of death. If this value is not documented accurately, heirs may end up paying more in capital gains tax than necessary — or face challenges from the IRS.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">professional appraisal</Link> conducted close to the date of death provides the most reliable documentation. This is one of the few areas where the cost of an appraisal can directly save money in taxes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If time has passed since the death and no appraisal was done, a retrospective valuation may still be possible. A certified residential appraiser with experience in estate work can help determine the appropriate value.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Need Help Understanding Your Property's Value?"
      body="An accurate valuation is the foundation for sound tax planning. David can help you understand the property's current and historical value so you and your CPA can make informed decisions."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* Common Mistakes to Avoid */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-4">
            {[
              "Assuming you owe taxes on the full appreciation from original purchase price — the stepped-up basis usually eliminates most or all of this",
              "Failing to get an appraisal at or near the date of death — this is the most important step for establishing your tax basis",
              "Waiting too long to sell without understanding how additional appreciation affects your tax liability",
              "Confusing estate tax with capital gains tax — they are separate and apply in different circumstances",
              "Making decisions about the property without consulting a tax professional — what seems like a simple choice can have significant tax implications",
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

    {/* When to Get Professional Guidance */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When to Get Professional Guidance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Tax questions around inherited property sit at the intersection of real estate, estate law, and tax planning. No single professional has all the answers — this is a situation that benefits from coordination.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A CPA or tax attorney can advise on the tax implications. An estate attorney manages the legal framework. And a real estate broker with appraisal expertise can provide the valuation documentation that supports the entire process.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are uncertain about any aspect of the tax situation, getting professional guidance early is always less expensive than correcting mistakes later.
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
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House in Washington</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/pricing-house-trust-estate" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Pricing a House in Trust or Estate</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Inherited Property Tax FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "Should You Sell an Inherited House As-Is or Fix It Up?", description: "Understand when repairs make financial sense and when selling as-is is the better strategy.", href: "/guides/sell-inherited-house-as-is-or-fix" },
        { title: "What Should an Executor Do First With a House?", description: "A practical guide to the first decisions an executor needs to make.", href: "/guides/executor-first-steps-house" },
        { title: "Why Valuation Matters", description: "How accurate property valuation protects executors, heirs, and the estate.", href: "/why-valuation-matters" },
      ]}
    />

    <RelatedServices currentPath="/guides/taxes-selling-inherited-house-washington" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">If you're working through this situation and want help thinking it through, a short conversation can often bring clarity.</p>
          <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <ServicePageNav />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default TaxesSellingInheritedHouseWashington;
