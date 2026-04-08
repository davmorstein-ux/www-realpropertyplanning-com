import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

const EstateLiquidation = () => (
  <>
    <SEOHead
      title="Estate Liquidation & Estate Sales | Real Property Planning"
      description="Estate liquidation services in Washington State — from estate sales and cleanouts to donation coordination and preparing the home for market. Guidance for executors, heirs, and families."
      canonical="https://www.realpropertyplanning.com/estate-liquidation"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Estate Liquidation", url: "https://www.realpropertyplanning.com/estate-liquidation" },
      ]}
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Services</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Estate Liquidation & Estate Sales
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              When a family member passes away, moves to assisted living, or downsizes, the contents of a home often need to be addressed before the property can be sold. Estate liquidation is the broader process of sorting, valuing, and responsibly distributing or selling those belongings — and estate sales are one important part of that process.
            </p>
          </div>
        </div>
      </section>

      {/* What Estate Liquidation Can Include */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              What Estate Liquidation Can Include
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Estate liquidation goes well beyond hosting a sale. It can involve many coordinated steps, depending on the situation:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Sorting and organizing personal belongings, furniture, and household items",
                "Identifying items of potential value — antiques, collectibles, jewelry, artwork",
                "Coordinating a professional estate sale for qualifying items",
                "Arranging donation pickups for items that won't be sold",
                "Facilitating consignment for higher-value pieces",
                "Coordinating buyout offers when a full sale isn't practical",
                "Managing selective item sales through dealers or specialty buyers",
                "Overseeing cleanout and removal of remaining items",
                "Preparing the home for market once contents have been addressed",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base leading-relaxed">
              Each situation is different. Some families need a full-service estate sale with hundreds of items priced and displayed. Others simply need help clearing out a home quickly and responsibly. The right approach depends on the timeline, the family's goals, and what's inside the property.
            </p>
          </div>
        </div>
      </section>

      {/* Estate Sales as One Part of the Process */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Estate Sales Are One Part of the Process
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Many people think of estate sales as the entire liquidation process — but they're actually one strategy within a larger plan. A professional estate sale can be an excellent way to maximize the return on household contents, especially when there are antiques, collectibles, or well-maintained furnishings involved.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              However, not every home is a good candidate for a traditional estate sale. Sometimes a combination of approaches — selling select items, donating others, and coordinating a cleanout — is the most practical and cost-effective path forward.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Real Property Planning works with trusted <Link to="/resources/estate-sale-companies" className="text-accent hover:text-gold underline underline-offset-4">estate sale companies</Link> throughout Washington State and can help families determine the best approach based on their specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              Who This Helps
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Estate liquidation touches many different situations. David Stein works with families and professionals across a wide range of circumstances:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                { label: "Heirs and beneficiaries", desc: "inheriting a home filled with decades of belongings" },
                { label: "Executors and personal representatives", desc: "managing estate obligations under court timelines" },
                { label: "Trustees", desc: "administering trust-held property that needs to be sold" },
                { label: "Seniors downsizing", desc: "moving to smaller homes or senior living communities" },
                { label: "Out-of-state families", desc: "coordinating from a distance and needing a local point of contact" },
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

      {/* How I Help */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
              How David Helps
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
              Real Property Planning doesn't run estate sales directly — but David Stein plays a critical coordination role in the overall liquidation-to-sale process. With over 20 years of experience as both a licensed real estate broker and certified appraiser, David works with families to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Help determine the right liquidation strategy for the property and timeline",
                "Connect families with trusted local estate sale professionals, cleanout teams, and donation services",
                "Coordinate the transition from contents management to home preparation",
                "Provide valuation-informed pricing guidance once the home is ready for market",
                "Manage the listing, marketing, and sale of the property itself",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gold-dark flex-shrink-0" />
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-base leading-relaxed">
              The goal is to make the process as smooth and stress-free as possible — so families can focus on what matters most while the property side is handled with care and professionalism.
            </p>
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

export default EstateLiquidation;
