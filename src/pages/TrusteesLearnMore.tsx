import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";

const faqs = [
  { question: "How is selling trust property different from a normal home sale?", answer: "Trust sales involve fiduciary obligations, potential beneficiary oversight, and documentation requirements. Real Property Planning structures the process to account for them." },
  { question: "I live out of state — can you handle the property locally?", answer: "Absolutely. Real Property Planning provides hands-on local coordination — property access, vendor management, preparation, and sale oversight." },
  { question: "What documentation will I have to support my pricing decisions?", answer: "We provide detailed market analysis, comparable sales data, condition assessments, and written pricing rationale meeting a higher standard than typical agent opinions." },
  { question: "Do I need court approval to sell trust property?", answer: "In most cases, trust property can be sold without court approval — unlike probate property. The specific trust terms and Washington State law govern the process." },
  { question: "What if beneficiaries disagree about the sale?", answer: "We provide objective, data-driven pricing that helps move the conversation from emotion to facts." },
  { question: "Should I invest in repairs before selling trust property?", answer: "It depends on the property, the market, and the likely return on investment. We evaluate repair decisions with a practical perspective." },
];

const TrusteesLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Trustee Guide — Selling Trust-Held Property in Washington | Real Property Planning"
      description="In-depth guidance for trustees selling trust-held property in Washington State. FAQs, fiduciary considerations, and practical support."
    />
    <BreadcrumbSchema items={[
      { name: "Trustees", url: "/trustees" },
      { name: "Learn More", url: "/trustees/learn-more" },
    ]} />
    <Header />

    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            What Trustees Need to Know
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Detailed guidance on selling trust-held property — fiduciary considerations, valuation, and practical support.
          </p>
        </div>
      </div>
    </section>

    <DirectAnswerBlock
      question="What should a trustee know about selling trust-held real estate?"
      answer="Trust property sales involve fiduciary obligations, beneficiary communication, defensible pricing, and sometimes attorney coordination. Real Property Planning works with trustees to evaluate property condition, price it accurately, manage preparation and sale, and provide documentation to support fiduciary decisions."
      supportBullets={[
        "Defensible, valuation-informed pricing that supports fiduciary accountability",
        "Full coordination of cleanout, repairs, listing, and closing — managed for you",
        "Clear communication with beneficiaries, attorneys, and co-trustees throughout",
      ]}
    />

    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">What Trustees Are Often Dealing With</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Trustees are frequently asked to make careful decisions on behalf of others while meeting fiduciary responsibilities. When real estate is part of the trust, that can mean evaluating whether to sell, preparing a property for market, coordinating access, and documenting decisions transparently.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In many cases, trustees are also working with attorneys, CPAs, financial advisors, family members, and beneficiaries.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">When Real Estate Is Held in Trust</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">This is especially important when:</p>
          <ul className="space-y-4">
            {["The property has not been updated in years", "Beneficiaries are out of state", "The home is occupied or full of personal belongings", "There are questions about pricing or condition", "The trustee wants a clear, well-supported process"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">How Real Property Planning Helps Trustees</h2>
          <ul className="space-y-4">
            {["Objective property guidance grounded in real estate experience", "Clear pricing and valuation support", "Property preparation recommendations", "Coordination with attorneys, fiduciaries, and family decision-makers", "Help managing personal property, cleanout, and sale preparation", "Calm communication during complex situations", "Support for local and out-of-state trustees"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Who This Page Is For</h2>
          <ul className="space-y-4">
            {["Individual trustees", "Successor trustees", "Family members helping a trustee", "Attorneys assisting trust administration", "CPAs and fiduciary professionals", "Out-of-state trustees managing Washington property"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Trustee FAQs" />
    <RelatedServices currentPath="/trustees" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">Need Help With a Trust-Held Property?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">Real Property Planning can help with valuation, preparation, coordination, and sale strategy.</p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    <Footer />
  </div>
);

export default TrusteesLearnMore;
