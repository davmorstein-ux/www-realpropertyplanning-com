import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.webp";

const whyCPAsInvolveRE = [
  { heading: "Understanding Likely Market Value", text: "Clients often need a practical understanding of what a property may be worth before making informed decisions." },
  { heading: "Evaluating Sale Timing and Strategy", text: "A property may need to be sold quickly, prepared carefully, or evaluated more thoughtfully before action is taken." },
  { heading: "Helping Clients Think Through Condition", text: "Inherited homes and estate properties are often not in move-in-ready condition." },
  { heading: "Supporting Coordinated Decision-Making", text: "Property decisions often involve attorneys, trustees, heirs, fiduciaries, and family members." },
];

const howHelpsBlocks = [
  { heading: "Valuation-Informed Perspective", text: "Real Property Planning brings added perspective to questions of value and pricing strategy through combined brokerage and appraisal experience." },
  { heading: "Practical Guidance on Sale Strategy", text: "Some properties should be sold as-is. Others may benefit from cleanup or repairs. We help clients think through those choices." },
  { heading: "Support With Inherited and Probate Property", text: "Inherited homes and probate properties often involve more complexity than a typical sale." },
  { heading: "Local Market Insight", text: "Real Property Planning serves King, Snohomish, Pierce, and Kitsap Counties with local market knowledge." },
];

const ForCPAsLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="CPA Guide — Real Estate Guidance for Accounting Professionals | Real Property Planning"
      description="In-depth real estate guidance for CPAs and their clients navigating inherited property, estate settlement, and trust administration in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "For CPAs", url: "/for-cpas" },
      { name: "Learn More", url: "/for-cpas/learn-more" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Working With CPAs</h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            How Real Property Planning supports CPAs and their clients when property decisions are part of the financial picture.
          </p>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">Why CPAs May Involve a Real Estate Professional</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {whyCPAsInvolveRE.map((card, i) => (
              <div key={i} className="bg-card border border-border rounded-[18px] px-7 py-8">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{card.heading}</h3>
                <p className="text-muted-foreground leading-[1.75]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">How Real Property Planning Helps</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {howHelpsBlocks.map((block, i) => (
              <div key={i} className="bg-secondary border border-border rounded-[18px] px-7 py-8">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{block.heading}</h3>
                <p className="text-muted-foreground leading-[1.75]">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">Discuss a Client Situation</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">Confidential conversations are always welcome.</p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Discuss a Client Situation
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

export default ForCPAsLearnMore;
