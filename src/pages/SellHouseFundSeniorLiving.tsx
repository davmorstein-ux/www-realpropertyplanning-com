import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import fundSeniorLivingIcon from "@/assets/icons/fund-senior-living-icon-washington.webp";

const steps = [
  {
    title: "Understand what the home is actually worth",
    body: "David Stein's dual credential as a Licensed Broker and Certified Residential Appraiser means families get a professional valuation — not a listing pitch. That number becomes the foundation for every financial decision that follows.",
  },
  {
    title: "Figure out the timeline",
    body: "Three options: sell before the move, sell while the senior is in care, or use bridge financing. Each has tradeoffs. David helps families choose the right path for their situation.",
  },
  {
    title: "Prepare the home for sale",
    body: "Cleanout, minor repairs, paint, landscaping, and staging — evaluated through a return-on-investment lens. David coordinates every vendor so out-of-state families never have to fly in to supervise.",
  },
  {
    title: "Price it correctly for its condition",
    body: "Overpricing causes the home to sit and carrying costs to pile up. Underpricing leaves money on the table that could have funded months of additional care. David's appraisal background means the price is set based on methodology — not optimism.",
  },
  {
    title: "Close and fund the care plan",
    body: "Proceeds are distributed after paying off any remaining mortgage, closing costs, and fees. A financial planner or elder law attorney can help structure how those proceeds are held — particularly if Medicaid eligibility is a consideration.",
  },
];

const faqs = [
  {
    q: "Can we sell the house if my parent still lives there?",
    a: "Yes — but it requires sensitivity and careful coordination. David has experience listing homes where the senior is still in residence and handles showings in a way that is respectful and minimally disruptive.",
  },
  {
    q: "Does selling the house affect Medicaid eligibility?",
    a: "Potentially yes. Medicaid has asset and income rules that vary by situation. Consult an elder law attorney before selling if Medicaid is a current or future consideration.",
  },
  {
    q: "How long does it take to sell a senior's home?",
    a: "From first conversation to closing, most senior home sales take 60–120 days depending on preparation needs and market conditions. Starting early gives the family the most options.",
  },
  {
    q: "Can David start before my parent has moved?",
    a: "Yes. David can assess the home, develop a pricing strategy, and begin coordinating preparation work before the move happens — so everything is ready to go the moment the family gives the word.",
  },
  {
    q: "What if siblings disagree about selling?",
    a: "This is very common. David provides objective, data-based pricing guidance that gives all family members a shared foundation for the conversation — removing emotion from the financial decision.",
  },
];

const relatedResources = [
  {
    title: "Senior Placement in Washington State",
    href: "/senior-placement",
  },
  {
    title: "Senior Home Sale",
    href: "/senior-transitions",
  },
  {
    title: "How the Process Works",
    href: "/how-the-process-works",
  },
];

const SellHouseFundSeniorLiving = () => {
  return (
    <>
      <SEOHead
        title="How to Sell a Parent's House to Pay for Senior Living in Washington State | Real Property Planning"
        description="Learn how Washington State families use home sale proceeds to pay for assisted living, memory care, and adult family home placement. David Stein — Licensed Broker & Certified Appraiser — (206) 900-3015."
        canonical="https://www.realpropertyplanning.com/sell-house-fund-senior-living"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Services", url: "https://www.realpropertyplanning.com/services" },
          {
            name: "Sell a House to Fund Senior Living",
            url: "https://www.realpropertyplanning.com/sell-house-fund-senior-living",
          },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-3 md:pt-4 pb-14 md:pb-16 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img src={fundSeniorLivingIcon} alt="" aria-hidden="true" className="mx-auto max-w-[18rem] w-full h-auto object-contain mb-4" loading="lazy" />
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6 leading-tight">
                How to Sell a Parent's House to Pay for Senior Living
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                For most Washington State families, the home is the key to affording the care their parent needs.
              </p>
              <p className="text-primary-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                David Stein coordinates the home sale with the care plan — so the timing and the proceeds work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Talk to David
                  </Button>
                </Link>
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Call (206) 900-3015
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Why the Home Sale and the Care Decision Are Connected
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                Senior care in Washington State is expensive. Assisted living averages $4,000–$8,000 per month. Memory care can reach $10,000 or more. For most families, Social Security and savings alone are not enough — the home is the primary asset available to bridge the gap.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                That means two things have to happen at roughly the same time: your parent moves into care, and the home goes on the market. Getting the timing right — and the price right — directly affects how long the care can be funded and how much financial stress the family carries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — 5-Step Process */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 text-center">
                The 5-Step Process
              </h2>
              <ol className="space-y-6">
                {steps.map((step, idx) => (
                  <li
                    key={step.title}
                    className="card-3d p-6 md:p-8 bg-card flex flex-col sm:flex-row gap-5 sm:gap-6"
                  >
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground border-2 border-gold flex items-center justify-center font-serif text-3xl font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/85 text-base md:text-lg leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Section 3 — Example Box */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 text-center">
                How Much Can the Home Sale Actually Cover?
              </h2>
              <div className="border-2 border-gold rounded-2xl bg-card p-6 md:p-10 shadow-lg">
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                  A Washington State home selling for <span className="font-bold">$600,000</span> with a <span className="font-bold">$100,000</span> remaining mortgage and <span className="font-bold">$40,000</span> in closing and preparation costs leaves approximately <span className="font-bold text-primary">$460,000</span> in net proceeds.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="border-l-4 border-gold pl-5">
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      <span className="font-bold">At $6,000/month for assisted living</span> — approximately 6 years of care funded
                    </p>
                  </li>
                  <li className="border-l-4 border-gold pl-5">
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      <span className="font-bold">At $9,000/month for memory care</span> — approximately 4 years of care funded
                    </p>
                  </li>
                </ul>
                <p className="italic text-foreground/85 text-base md:text-lg leading-relaxed">
                  Getting the home sold at the right price, at the right time, matters enormously to the family's long-term financial picture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — FAQ */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/85 text-base md:text-lg leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 5 — Affiliations */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
                Professional Affiliations
              </h2>
              <AffiliationBadgeGrid />
            </div>
          </div>
        </section>

        {/* Section 6 — Related Resources */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 text-center">
                Related Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedResources.map((res) => (
                  <Link
                    key={res.href}
                    to={res.href}
                    className="card-3d p-6 md:p-8 bg-card text-center hover:shadow-xl transition-shadow flex items-center justify-center min-h-[120px]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-foreground font-bold">
                      {res.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
                Ready to Talk?
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                Most families start with a single question. David Stein is happy to hear it — no pressure, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Call (206) 900-3015
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default SellHouseFundSeniorLiving;
