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
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const faqs = [
  { question: "Should I renovate an inherited home before selling?", answer: "Usually, no. Full renovations rarely make financial sense for estate properties. Targeted improvements — deep cleaning, paint, landscaping, minor repairs — often deliver the best return. A professional assessment can identify which specific improvements are worth the investment." },
  { question: "What repairs add the most value to an estate home?", answer: "Cosmetic updates typically offer the best return: fresh paint, cleaned carpets, basic landscaping, working appliances, and functional plumbing and electrical. Major structural work should only be done if it is preventing the sale entirely or if the return clearly justifies the cost." },
  { question: "Can I sell an estate property as-is?", answer: "Yes. Selling as-is is always an option. However, properties sold as-is typically sell for less than prepared properties. David can help you compare the likely as-is sale price versus the likely price after targeted preparation, so you can make an informed decision." },
  { question: "Who pays for repairs on an estate property?", answer: "Repair costs are typically paid from estate funds. The executor should consult with the estate attorney about what expenditures are appropriate and keep clear records of all spending for estate accounting purposes." },
  { question: "How do I decide which repairs to skip?", answer: "Focus on return on investment. If a $2,000 improvement is likely to increase the sale price by $8,000, it makes sense. If a $15,000 repair only adds $5,000 in value, it probably does not. A broker with appraisal experience can help you evaluate these trade-offs." },
];

const jsonLd = articleSchema({
  headline: "What Repairs Should Be Done Before Selling an Estate Property?",
  description: "A practical guide to deciding which repairs and improvements are worth making before selling an inherited or estate home — and which ones to skip.",
  url: "/guides/estate-property-repairs-before-sale",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Estate property repairs", "Home preparation", "Inherited home improvements", "Sell as-is", "Property condition"],
});

const EstatePropertyRepairs = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Repairs Should Be Done Before Selling an Estate Property? | Real Property Planning"
      description="A practical guide to deciding which repairs and improvements are worth making before selling an inherited or estate home — and which ones to skip."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Estate Property Repairs Before Sale", url: "/guides/estate-property-repairs-before-sale" },
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
            What Repairs Should Be Done Before Selling an Estate Property?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Not all repairs are worth making. The key is identifying which improvements will meaningfully increase the sale price relative to their cost — and which ones will consume estate funds without delivering a proportional return.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide helps executors and families make smart, informed decisions about preparing an inherited or estate property for sale.
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
            Most inherited homes have been lived in for decades. They often have original kitchens, dated bathrooms, worn carpeting, deferred exterior maintenance, and sometimes more serious issues like aging roofs or outdated electrical systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The instinct is often to "fix everything" before listing. But full renovations on estate properties rarely make financial sense. The goal is not to create a dream home — it is to present the property in its best reasonable condition so buyers can see its potential without being distracted by easily fixable problems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every dollar spent on preparation should be evaluated through a simple lens: will this investment return more than it costs in the final sale price?
          </p>
        </div>
      </div>
    </section>

    {/* Repairs That Usually Make Sense */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Repairs That Usually Make Sense</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            These are the improvements that most consistently deliver a positive return on estate properties:
          </p>
          <ul className="space-y-4">
            {[
              "Deep cleaning — carpets, windows, kitchens, bathrooms. This is almost always worth doing.",
              "Fresh paint in neutral colors — one of the highest-return improvements for any home.",
              "Basic landscaping — mowing, trimming, removing debris. First impressions matter enormously.",
              "Minor repairs — fixing leaky faucets, broken light fixtures, sticking doors, cracked outlets.",
              "Decluttering and removing personal belongings — helps buyers envision their own life in the space.",
              "Ensuring all systems work — HVAC running, plumbing functional, electrical safe.",
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

    {/* Repairs That Usually Don't */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Repairs That Usually Don't Make Financial Sense</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Some improvements feel important but rarely deliver enough additional sale price to justify the cost and delay:
          </p>
          <ul className="space-y-4">
            {[
              "Full kitchen remodels — buyers in this price range often want to choose their own finishes.",
              "Bathroom renovations — unless something is non-functional, cosmetic updates are usually sufficient.",
              "New roof before listing — if the roof is aging but not leaking, a price credit is often more efficient than replacement.",
              "Room additions or structural changes — these rarely return their cost on estate properties.",
              "High-end finishes in modest neighborhoods — the market has a ceiling based on comparable sales.",
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

    <MidPageCTA
      heading="Not Sure What's Worth Fixing?"
      body="David evaluates each potential improvement through a return-on-investment lens, informed by his appraisal background. A short conversation can help you decide where estate funds are best spent."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* Where Mistakes Happen */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Where Mistakes Happen</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The most common mistake is spending too much. Executors understandably want to present the home well, but pouring $30,000 into renovations on a $350,000 home rarely adds $30,000 to the sale price. Often, it adds $10,000–$15,000 — meaning the estate lost money on the investment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The opposite mistake is doing nothing at all. A home listed with personal belongings everywhere, dirty carpets, and overgrown landscaping signals neglect to buyers — even if the bones of the house are solid. Basic preparation costs relatively little and can significantly improve buyer perception and offers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The best approach is targeted preparation guided by someone who understands both the <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">property's value</Link> and what buyers in that specific market expect.
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
            <Link to="/resources/property-preparation-services" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Property Preparation Services</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Estate Property Repair FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "What Executors Should Do Before Selling", description: "The first five steps every executor should take when the estate includes real property.", href: "/guides/what-executors-should-do" },
        { title: "Do I Need an Appraisal Before Selling?", description: "When a formal appraisal is needed and when a professional assessment is enough.", href: "/guides/appraisal-before-selling-inherited-property" },
        { title: "How to Price a House in a Trust or Estate", description: "Pricing strategies when condition, emotion, and legal obligations intersect.", href: "/guides/pricing-house-trust-estate" },
      ]}
    />

    <RelatedServices currentPath="/guides/estate-property-repairs-before-sale" />

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
    </main>
    <Footer />
  </div>
);

export default EstatePropertyRepairs;
