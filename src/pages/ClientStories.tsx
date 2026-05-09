import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RealClientSituations from "@/components/RealClientSituations";

const studies = [
  {
    title: "Out-of-State Executor With a Full House",
    label: "Out-of-State Coordination",
    situation: "An executor living in California was named personal representative for her father's estate in Snohomish County. The home had not been updated in 30 years and was filled with decades of belongings.",
    challenge: "No local contacts, no idea where to start, and no ability to travel frequently to manage the process.",
    howHelped: "Real Property Planning assessed the property, coordinated a professional cleanout team, managed minor repairs and landscaping, and handled the entire listing and sale process — providing regular photo updates so she never had to fly out.",
    outcome: "The home sold within three weeks of listing at a price that exceeded the executor's expectations.",
  },
  {
    title: "Estate Property With Significant Deferred Maintenance",
    label: "Valuation Strategy",
    situation: "A trustee needed to sell a Pierce County home that had a failing roof, outdated electrical, and years of deferred maintenance.",
    challenge: "Two previous agents had declined the listing because of the property's condition. The trustee needed to fulfill fiduciary obligations.",
    howHelped: "Real Property Planning evaluated each issue, estimated the cost impact on market value, and recommended a targeted preparation strategy — addressing safety concerns while advising against costly renovations that would not deliver meaningful return.",
    outcome: "The property was priced accurately for its condition, attracted multiple offers, and closed smoothly with documented market support.",
  },
  {
    title: "Coordinating a Probate Sale with Multiple Heirs",
    label: "Family Coordination",
    situation: "Four adult siblings inherited a family home in Kitsap County after their father passed. All four had equal ownership, and none lived near the property.",
    challenge: "The siblings had different views on timing — one wanted to hold, two wanted to sell quickly, and one was unsure. Confusion about the home's value made it harder to reach agreement.",
    howHelped: "Real Property Planning provided a clear, condition-based pricing assessment so everyone was working from the same numbers. Real Property Planning walked the family through market data, explained the cost of holding versus selling, and coordinated the preparation and sale with regular updates to all four siblings.",
    outcome: "The family reached agreement within two weeks. The home sold at a price everyone felt was fair, and the process was far less stressful than expected.",
  },
  {
    title: "Helping a Family Navigate a Senior Transition and Home Sale",
    label: "Senior Transition",
    situation: "A longtime homeowner in her early 80s was moving to assisted living. Her two adult children were helping coordinate the transition and sale of the family home in King County.",
    challenge: "The home held 40 years of memories. The family wasn't sure how to prepare the property, when to list, or how to manage the timeline alongside the move.",
    howHelped: "Real Property Planning recommended a phased approach: start with a gentle cleanout, address targeted improvements, and list at a time aligned with the transition. Real Property Planning coordinated vendors and kept everyone informed throughout.",
    outcome: "The home sold within a month of listing. The family described the experience as respectful and well-paced.",
  },
  {
    title: "Providing Clarity on Pricing an Inherited Property",
    label: "Valuation Strategy",
    situation: "An executor inherited a home in Snohomish County and had received two very different price opinions from other agents.",
    challenge: "One agent suggested listing high to 'test the market.' The other recommended a much lower price to sell fast. Neither was supported by detailed analysis.",
    howHelped: "Real Property Planning conducted a thorough property review and provided a condition-based pricing strategy — walking the executor through comparable sales, condition adjustments, and current market trends.",
    outcome: "The executor chose a well-supported list price. The home received strong interest and sold close to asking.",
  },
];

const ClientStories = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Situations. Real Outcomes. | Real Property Planning"
      description="See how Real Property Planning has helped executors, families, and trustees navigate real probate and estate property situations across Washington State."
    />
    <BreadcrumbSchema items={[{ name: "Client Stories", url: "/client-stories" }]} />
    <Header />
    <main id="main-content">
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-5">
              Real Situations. Real Outcomes.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Every estate property situation is different. Here are a few examples of how we've helped.
            </p>
          </div>
        </div>
      </section>
      <RealClientSituations studies={studies} heading="" subheading="" showCTA />
      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ClientStories;
