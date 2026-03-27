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
import GoldCheck3D from "@/components/GoldCheck3D";
import NextStepBlock from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const options = [
  { title: "Sell the Property", text: "The most common choice. Selling converts the property into liquid assets that can be distributed among beneficiaries, used to settle estate debts, or reinvested. The sale can happen immediately, after preparation, or after a holding period depending on circumstances." },
  { title: "Keep the Property", text: "Some families choose to keep an inherited home — as a rental, vacation property, or future residence. This option requires understanding ongoing costs (taxes, insurance, maintenance), management responsibilities, and potential tax implications." },
  { title: "Rent the Property", text: "Renting can provide income while the family decides on a long-term plan. However, becoming a landlord involves legal obligations, property management, and ongoing costs that should be carefully evaluated." },
  { title: "Buy Out Other Heirs", text: "When one heir wants to keep the property and others want to sell, a buyout may be possible. This requires an accurate property valuation that all parties can agree on — an area where David's dual broker/appraiser credentials are particularly valuable." },
];

const decisionFactors = [
  "The property's current condition and market value",
  "Whether the estate needs to be settled quickly or has flexibility",
  "The financial needs and preferences of all beneficiaries",
  "Ongoing carrying costs — taxes, insurance, utilities, maintenance",
  "Whether the property is in a strong, stable, or declining market",
  "Tax implications including capital gains and stepped-up basis",
  "The executor's fiduciary obligations to the estate",
  "Whether the property is located near or far from the decision-makers",
];

const faqs = [
  { question: "What is a stepped-up basis and why does it matter?", answer: "When you inherit property, the tax basis is generally 'stepped up' to the property's fair market value at the date of death. This means if you sell soon after inheritance, you may owe little or no capital gains tax. The longer you hold the property, the more potential appreciation may become taxable. Consult a CPA or tax advisor for guidance specific to your situation." },
  { question: "Should I sell an inherited house as-is?", answer: "It depends on the property's condition, your timeline, and the likely return on preparation investment. Some properties sell well as-is to investors or renovation buyers. Others benefit significantly from targeted preparation. David evaluates each situation individually and recommends the approach most likely to protect value." },
  { question: "How soon can I sell an inherited house in Washington?", answer: "Once legal authority is established (through probate, trust administration, or other means), the property can be listed for sale. Pre-listing preparation — assessment, cleanout, repairs — can begin earlier. David helps create a realistic timeline aligned with your specific circumstances." },
  { question: "What if there are multiple heirs who cannot agree?", answer: "Disagreements among heirs are common. David provides objective, data-driven market analysis that helps move conversations from opinion to evidence. For legal disputes, the estate attorney should be involved. David's role is to provide clear real estate data and professional guidance." },
  { question: "Do I need to go through probate to sell an inherited house?", answer: "Not always. Property held in a trust, joint tenancy, or with a transfer-on-death deed may pass outside of probate. The estate attorney can clarify the legal requirements. David can begin property assessment and planning regardless of the legal pathway." },
];

const jsonLd = articleSchema({
  headline: "What to Do With an Inherited House in Washington State",
  description: "A comprehensive guide to your options when you inherit property in Washington — including selling, keeping, renting, valuation, preparation, and coordinating with family.",
  url: "/guides/inherited-house-washington",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Inherited property", "Estate real estate", "Washington inheritance", "Heir responsibilities", "Property valuation"],
});

const InheritedHouseWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What to Do With an Inherited House in Washington State | Real Property Planning"
      description="A practical guide to your options when you inherit a house in Washington — including selling, keeping, renting, valuation, preparation, tax considerations, and family coordination."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Inherited House Guide", url: "/guides/inherited-house-washington" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What to Do With an Inherited House in Washington State
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Inheriting a house brings both opportunity and responsibility. Whether the property came to you through a will, trust, or joint ownership, you face important decisions about what to do next — and the choices you make early can significantly affect your financial outcome and family relationships.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide walks through your main options, the factors that should inform your decision, and when professional guidance can make a meaningful difference.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Are Your Options?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            There is no single right answer. The best choice depends on the property, the estate, the family, and the market:
          </p>
          <div className="space-y-6">
            {options.map((opt, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{opt.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{opt.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Key Factors to Consider</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Before making a decision, evaluate these factors carefully:
          </p>
          <ul className="space-y-4">
            {decisionFactors.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Not Sure What to Do With an Inherited Property?"
      body="David provides a no-pressure consultation to assess the property, explain your options, and help you develop a practical plan."
      buttonText="Schedule a Consultation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Professional Guidance Matters Early</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Many people wait too long to get professional input on an inherited property. During that delay, carrying costs accumulate, the property's condition may deteriorate, market conditions may shift, and tax planning opportunities may be lost.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A conversation with David early in the process — even before you have made any decisions — can help you understand the property's realistic value, the costs of holding versus selling, and the preparation work that may be needed. This information supports better decision-making by all stakeholders.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            David's dual credentials as a licensed broker and <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold underline underline-offset-4">certified residential appraiser</Link> mean you get valuation insight that goes beyond what a standard real estate agent can provide. For <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors managing estate responsibilities</Link>, this early guidance is particularly valuable.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Family Guide</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Inherited Property FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "How Probate Real Estate Works in Washington", description: "Understand the legal process, timeline, and key decisions involved in selling property through probate.", href: "/guides/how-probate-real-estate-works" },
        { title: "Appraisal vs. CMA: Which Do You Need?", description: "Learn when a formal appraisal is required and when a market analysis is sufficient for estate property.", href: "/guides/appraisal-vs-cma" },
        { title: "What Executors Should Do First", description: "A step-by-step guide to the first 30 days of managing estate property as a personal representative.", href: "/guides/what-executors-should-do" },
      ]}
    />

    <RelatedServices currentPath="/guides/inherited-house-washington" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">Have Questions About an Inherited Property?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">David provides confidential consultations for heirs, executors, trustees, and families throughout Washington State.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    <Footer />
  </div>
);

export default InheritedHouseWashington;
