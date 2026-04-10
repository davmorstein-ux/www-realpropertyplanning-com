import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const whyPlannersInvolveRE = [
  { heading: "Sale Versus Hold Decisions", text: "Clients sometimes need to decide whether to sell, retain, or evaluate a property before making larger planning decisions." },
  { heading: "Value and Marketability Questions", text: "Condition, location, buyer expectations, and preparation needs can all affect timing and outcome." },
  { heading: "Downsizing and Senior Housing Changes", text: "When a home sale is part of a later-life housing transition, practical guidance helps clarify next steps." },
  { heading: "Estate and Trust Property Transitions", text: "Inherited homes and trust-owned properties often require coordination among family members and professional advisors." },
];

const howHelpsBlocks = [
  { heading: "Practical Real Estate Guidance", text: "Real Property Planning helps clients understand what the property is, what may affect its value, and what sale strategy may make the most sense." },
  { heading: "Valuation-Informed Perspective", text: "Combined brokerage and appraisal experience brings added insight to questions of pricing and positioning." },
  { heading: "Preparation Strategy", text: "Some homes benefit from cleanup or repairs; others are best sold as-is. We help clients think through those choices with care." },
  { heading: "Local Market Awareness", text: "Real Property Planning serves King, Snohomish, Pierce, and Kitsap Counties with local market knowledge." },
];

const ForFinancialPlannersLearnMore = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Financial Planner Guide — Real Estate Guidance | Real Property Planning"
      description="In-depth real estate guidance for financial planners and their clients navigating inherited property, trust-owned homes, and estate transitions in Washington State."
    />
    <BreadcrumbSchema items={[
      { name: "For Financial Planners", url: "/for-financial-planners" },
      { name: "Learn More", url: "/for-financial-planners/learn-more" },
    ]} />
    <Header />

    <section className="bg-secondary py-12 md:py-16">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Working With Financial Planners</h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            How Real Property Planning supports financial planners and their clients when property decisions affect broader planning goals.
          </p>
        </div>
      </div>
    </section>

    <section className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">Why Financial Planners May Involve a Real Estate Professional</h2>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {whyPlannersInvolveRE.map((card, i) => (
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
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Discuss a Client Situation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForFinancialPlannersLearnMore;
