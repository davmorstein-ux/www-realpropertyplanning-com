import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEstateLiquidation from "@/assets/icons/estate-liquidation-hero-washington.webp";
import ParallaxHero from "@/components/ParallaxHero";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-10 md:py-14 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
          {title}
        </h2>
        <div className="space-y-5 text-foreground text-lg md:text-xl leading-[1.7] font-light">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const EstateLiquidationLearnMore = () => (
  <>
    <SEOHead
      title="Estate Liquidation & Estate Sales Explained — Washington State"
      description="A detailed guide to estate liquidation and estate sales: what they are, when families need them, how the process works, what can be sold, and how liquidators are paid."
      canonical="https://realpropertyplanning.com/estate-liquidation/learn-more"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Estate Liquidation", url: "https://realpropertyplanning.com/estate-liquidation" },
        { name: "Learn More", url: "https://realpropertyplanning.com/estate-liquidation/learn-more" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <ParallaxHero src={iconEstateLiquidation} alt="Estate liquidation and estate sales guide Washington State" />
            </div>
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">In-Depth Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              Estate Liquidation & Estate Sales Explained
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-5">
              A complete overview of how estate sales work, when families turn to professional liquidators, and what to expect at every step.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-8 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">On this page</p>
            <ul className="space-y-2 text-base md:text-lg">
              <li><a href="#what-is" className="text-accent hover:text-gold underline underline-offset-4">What is an Estate Sale?</a></li>
              <li><a href="#when" className="text-accent hover:text-gold underline underline-offset-4">When Do People Need Estate Liquidation?</a></li>
              <li><a href="#process" className="text-accent hover:text-gold underline underline-offset-4">How the Process Works</a></li>
              <li><a href="#what-sold" className="text-accent hover:text-gold underline underline-offset-4">What Can Be Sold?</a></li>
              <li><a href="#compensation" className="text-accent hover:text-gold underline underline-offset-4">How Estate Liquidators Are Compensated</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Section id="what-is" title="What is an Estate Sale?">
        <p>
          An estate sale is an organized, on-site sale of the contents of a home — furniture, household goods, collectibles, tools, artwork, and personal belongings — typically conducted over one to three days. Unlike a casual yard or garage sale, an estate sale is generally run by a professional liquidator who catalogs, prices, and stages every item in the home for sale to the public.
        </p>
        <p>
          Estate sales are most often used when the entire contents of a household need to be dispersed at once, rather than a few unwanted items. They differ from auctions in that buyers walk through the home and purchase items at marked prices (with tag-down discounts on later days), rather than bidding competitively. The result is a faster, more comprehensive way to convert a lifetime of belongings into cash and clear the home for sale or transfer.
        </p>
      </Section>

      <Section id="when" title="When Do People Need Estate Liquidation?">
        <p>
          Estate liquidation is typically prompted by a major life transition. The most common situations include:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-medium">Death of a loved one</strong> — executors and heirs need to settle the estate and clear the home before sale or transfer.</li>
          <li><strong className="font-medium">Divorce or separation</strong> — shared property must be valued, divided, or converted to cash.</li>
          <li><strong className="font-medium">Downsizing</strong> — moving from a larger family home into a smaller residence or condo.</li>
          <li><strong className="font-medium">Senior transitions</strong> — relocating to assisted living, memory care, or a family member's home.</li>
          <li><strong className="font-medium">Out-of-state relocation</strong> — when moving the entire household is impractical or cost-prohibitive.</li>
        </ul>
        <p>
          In each case, a professional liquidator brings structure, valuation expertise, and an established buyer network to a process that would otherwise overwhelm the family.
        </p>
      </Section>

      <Section id="process" title="How the Process Works">
        <p>
          A professional estate liquidation typically follows a clear, repeatable sequence. While details vary by company, most sales move through five core stages.
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong className="font-medium">Initial consultation.</strong> The liquidator walks through the home, reviews the scope of belongings, discusses goals and timing, and explains their commission structure and contract terms.
          </li>
          <li>
            <strong className="font-medium">Evaluation and pricing.</strong> Items are sorted, researched, and individually priced based on current resale values, comparable sales, and condition. Higher-value pieces may be appraised separately.
          </li>
          <li>
            <strong className="font-medium">Advertising and marketing.</strong> The sale is promoted through estate sale listing sites (such as EstateSales.net and EstateSales.org), email lists of regular buyers, social media, and signage.
          </li>
          <li>
            <strong className="font-medium">Running the sale.</strong> Staff manage the home during open hours, greet buyers, answer questions, prevent theft, process payments, and apply tag-down discounts on later days to move remaining inventory.
          </li>
          <li>
            <strong className="font-medium">Cleanup and final settlement.</strong> Unsold items are donated, recycled, or removed; the home is left broom-clean; and the family receives a settlement statement with itemized proceeds.
          </li>
        </ol>
      </Section>

      <Section id="what-sold" title="What Can Be Sold?">
        <p>
          Almost anything in a home with resale value can be included in an estate sale. Common categories include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Furniture — sofas, dining sets, bedroom suites, desks, and outdoor furniture</li>
          <li>Antiques and vintage pieces</li>
          <li>Fine and costume jewelry</li>
          <li>Collectibles — coins, stamps, sports memorabilia, figurines</li>
          <li>Artwork, prints, and framed photographs</li>
          <li>China, glassware, silver, and kitchenware</li>
          <li>Household goods, linens, and small appliances</li>
          <li>Books, records, and media collections</li>
          <li>Tools, garage equipment, and lawn care items</li>
          <li>Vehicles, boats, RVs, and trailers (when applicable)</li>
        </ul>
        <p>
          A professional liquidator will advise on which items are best suited for an on-site sale, which should be routed to specialty auction houses, and which are better donated or recycled.
        </p>
      </Section>

      <Section id="compensation" title="How Estate Liquidators Are Compensated">
        <p>
          Most estate liquidators work on a commission-based model, taking a percentage of total sales proceeds rather than charging the family up front. Commissions typically range from <strong className="font-medium">30% to 50%</strong>, depending on the scope of work, the value of the contents, the location, and any additional services such as full cleanout or appraisal coordination.
        </p>
        <p>
          Smaller estates or homes requiring extensive sorting and labor may carry a higher percentage or a minimum guaranteed fee. In some cases, a liquidator may offer a flat-rate buyout — purchasing the entire contents outright — when speed is the family's top priority. Reputable companies provide a written contract that clearly outlines the commission rate, included services, payout timing, and how unsold items will be handled.
        </p>
      </Section>

      {/* Next step / back to overview */}
      <section className="py-10 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/estate-liquidation" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
              ← Back to Estate Liquidation overview
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default EstateLiquidationLearnMore;
