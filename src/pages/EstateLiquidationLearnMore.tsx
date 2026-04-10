import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

const EstateLiquidationLearnMore = () => (
  <>
    <SEOHead
      title="Estate Liquidation Guide — What It Includes | Real Property Planning"
      description="Detailed guide to estate liquidation in Washington State — from estate sales and cleanouts to donation coordination and preparing the home for market."
    />
    <BreadcrumbSchema items={[
      { name: "Estate Liquidation", url: "/estate-liquidation" },
      { name: "Learn More", url: "/estate-liquidation/learn-more" },
    ]} />
    <Header />
    <main>
      <section className="bg-secondary py-12 md:py-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">Understanding Estate Liquidation</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              What estate liquidation involves, how estate sales fit in, who it helps, and how David coordinates the process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">What Estate Liquidation Can Include</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Estate liquidation goes well beyond hosting a sale. It can involve many coordinated steps:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Sorting and organizing personal belongings, furniture, and household items",
                "Identifying items of potential value — antiques, collectibles, jewelry, artwork",
                "Coordinating a professional estate sale for qualifying items",
                "Arranging donation pickups for items that won't be sold",
                "Facilitating consignment for higher-value pieces",
                "Coordinating buyout offers when a full sale isn't practical",
                "Overseeing cleanout and removal of remaining items",
                "Preparing the home for market once contents have been addressed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Estate Sales Are One Part of the Process</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Many people think of estate sales as the entire liquidation process — but they're actually one strategy within a larger plan. Not every home is a good candidate for a traditional estate sale.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Real Property Planning works with trusted <Link to="/resources/estate-sale-companies" className="text-accent hover:text-gold underline underline-offset-4">estate sale companies</Link> throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">Who This Helps</h2>
            <ul className="space-y-3">
              {[
                { label: "Heirs and beneficiaries", desc: "inheriting a home filled with decades of belongings" },
                { label: "Executors and personal representatives", desc: "managing estate obligations under court timelines" },
                { label: "Trustees", desc: "administering trust-held property that needs to be sold" },
                { label: "Seniors downsizing", desc: "moving to smaller homes or senior living communities" },
                { label: "Out-of-state families", desc: "coordinating from a distance" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-muted-foreground text-base leading-relaxed">
                    <strong className="text-foreground">{item.label}</strong> — {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">How David Helps</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              David plays a critical coordination role in the overall liquidation-to-sale process:
            </p>
            <ul className="space-y-3">
              {[
                "Help determine the right liquidation strategy",
                "Connect families with trusted estate sale professionals and cleanout teams",
                "Coordinate the transition from contents management to home preparation",
                "Provide valuation-informed pricing guidance",
                "Manage the listing, marketing, and sale of the property",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/estate-liquidation" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              ← Back to Estate Liquidation
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/estate-liquidation" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default EstateLiquidationLearnMore;
