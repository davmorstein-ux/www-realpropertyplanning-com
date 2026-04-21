import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const payOff = [
  {
    title: "Deep cleaning and odor remediation",
    meta: "Cost: $500–$2,000 | Impact: High",
    body: "A clean, fresh-smelling home attracts more buyers and stronger offers. Almost always worth doing regardless of the property's condition.",
  },
  {
    title: "Interior paint in neutral colors",
    meta: "Cost: $2,000–$6,000 | Impact: High",
    body: "Fresh paint is one of the highest-return improvements in real estate — it makes the home feel clean, updated, and move-in ready without a large investment.",
  },
  {
    title: "Landscaping and curb appeal",
    meta: "Cost: $500–$3,000 | Impact: High",
    body: "First impressions matter. Overgrown landscaping signals neglect and can reduce buyer interest before they even enter the home.",
  },
  {
    title: "Carpet cleaning or replacement",
    meta: "Cost: $500–$3,000 | Impact: Medium to high",
    body: "Badly stained or odorous carpet is a significant buyer deterrent. Cleaning or replacing it typically returns well.",
  },
  {
    title: "Minor repairs — fixtures, hardware, leaky faucets",
    meta: "Cost: $500–$2,000 | Impact: Medium",
    body: "Small deferred maintenance items signal to buyers that the home has not been cared for. Addressing them is inexpensive and improves buyer confidence.",
  },
];

const careful = [
  {
    title: "Roof replacement",
    body: "A failing roof is a significant concern — but whether to replace it depends on the home's price point, the local market, and what comparable sales show. In some cases, a price adjustment is more cost-effective than a full replacement.",
  },
  {
    title: "Electrical and plumbing updates",
    body: "Safety issues must be addressed — but cosmetic or code-compliance updates that go beyond safety may not return their cost.",
  },
  {
    title: "HVAC replacement",
    body: "A non-functioning HVAC system will almost always be flagged in a buyer's inspection. Replacing it before listing often prevents larger price reductions later — but this depends on the system's age, the season, and the market.",
  },
  {
    title: "Bathroom updates",
    body: "Minor cosmetic updates — new fixtures, caulking, a deep clean — often return well. Full bathroom renovations rarely do in estate properties.",
  },
];

const skip = [
  {
    title: "Full kitchen renovation",
    body: "The single most common over-investment in estate properties. Buyers often expect to make their own updates. A clean, functional kitchen is sufficient in most cases.",
  },
  {
    title: "New flooring throughout",
    body: "Cleaning existing floors — including hardwood refinishing where appropriate — almost always delivers better return than full replacement.",
  },
  {
    title: "Landscaping overhaul",
    body: "Basic cleanup and maintenance delivers strong return. A full landscaping redesign does not.",
  },
  {
    title: "Window replacement",
    body: "Expensive and rarely returns its cost in estate sales unless windows are broken or present a safety issue.",
  },
];

const faqs = [
  {
    q: "Who pays for repairs on an estate property?",
    a: "Repair costs come from estate funds. The executor has fiduciary responsibility to ensure any money spent on preparation can be justified by the return at closing.",
  },
  {
    q: "Do we need to disclose known defects even if we sell as-is?",
    a: "Yes. Washington State requires disclosure of known material defects regardless of whether the property is sold as-is. An estate attorney can advise on the specific disclosure requirements for probate properties.",
  },
  {
    q: "What if we don't have estate funds available for repairs?",
    a: "Some families use bridge financing or negotiate with contractors for payment at closing. David can help identify practical options based on the specific situation.",
  },
  {
    q: "How does David decide what to recommend?",
    a: "Every recommendation is based on comparable sales data, current buyer behavior in that price range and neighborhood, and an honest assessment of what the improvement will actually return at closing.",
  },
  {
    q: "Can David coordinate the repairs so we don't have to?",
    a: "Yes. David manages vendor coordination for all preparation work — scheduling contractors, overseeing the work, and ensuring the property is ready to list without the executor needing to be on-site.",
  },
];

const relatedCards = [
  { title: "Probate House Sale Timeline", href: "/guides/probate-house-sale-timeline-washington" },
  { title: "Should You Sell As-Is or Fix It First?", href: "/guides/sell-inherited-house-as-is-or-fix" },
  { title: "Probate & Estate Sales", href: "/probate-estate-sales" },
];

const jsonLd = articleSchema({
  headline: "What Repairs Should Be Made Before Selling a Probate Home?",
  description: "David Stein explains which repairs are worth making before selling an estate property in Washington State — and which ones to skip.",
  url: "/guides/repairs-before-selling-probate-home-washington",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  about: ["Estate property repairs", "Probate home preparation", "Washington State"],
});

type Card = { title: string; meta?: string; body: string };

const CardGrid = ({ items, accent }: { items: Card[]; accent: "green" | "amber" | "red" }) => {
  const borderClass = {
    green: "border-t-4 border-t-[#15803d]",
    amber: "border-t-4 border-t-[#b45309]",
    red: "border-t-4 border-t-[#b91c1c]",
  }[accent];
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((c) => (
        <div key={c.title} className={`rounded-xl bg-card border border-border ${borderClass} p-6 shadow-sm`}>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{c.title}</h3>
          {c.meta && <p className="text-sm font-semibold text-gold mb-2">{c.meta}</p>}
          <p className="text-base text-muted-foreground leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  );
};

const RepairsBeforeSellingProbateHomeWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Repairs Should Be Made Before Selling a Probate Home in Washington? | Real Property Planning"
      description="David Stein explains which repairs are worth making before selling an estate property in Washington State — and which ones to skip. Licensed Broker & Certified Appraiser — (206) 900-3015."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/guides-and-resources" },
        { name: "Repairs Before Selling a Probate Home", url: "/guides/repairs-before-selling-probate-home-washington" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-16">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-5">
              What Repairs Should Be Made Before Selling a Probate Home?
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-6">
              A practical guide to deciding which improvements are worth the investment — and which ones to skip.
            </p>
            <p className="text-lg text-gold font-bold leading-relaxed mb-6">
              David Stein — Licensed Real Estate Broker &amp; Certified Residential Appraiser — (206) 900-3015
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="rounded-lg">Talk to David</Button>
              </Link>
              <a href="tel:2069003015">
                <Button variant="outline" size="lg" className="rounded-lg bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (206) 900-3015
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">The Core Question Every Executor Faces</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Before listing an estate property, executors and families face a decision that has real financial consequences: what do we fix, what do we leave alone, and how do we know the difference?
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get it right and the estate nets significantly more from the sale. Get it wrong and the estate spends money on improvements that buyers don't value — or worse, undersells a property that needed just a small investment to attract competitive offers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: ROI framework */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">The Return on Investment Framework</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Every potential improvement to a probate property should be evaluated through one lens: will this investment return more than it costs at closing?
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              David Stein's dual background as a Licensed Broker and Certified Residential Appraiser means every repair recommendation is grounded in methodology — not guesswork. He evaluates each potential improvement based on comparable sales data, buyer behavior in the current market, and the property's specific condition.
            </p>
            <div className="rounded-lg bg-background border-l-4 border-gold p-6 shadow-sm">
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                A $3,000 interior paint job might add $8,000 to the sale price. A $40,000 kitchen renovation might add only $20,000. These distinctions matter enormously when estate funds are limited and fiduciary duties require defensible decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pay off */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Repairs That Almost Always Pay Off</h2>
            <CardGrid items={payOff} accent="green" />
          </div>
        </div>
      </section>

      {/* Section 4: Careful eval */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Repairs That Require Careful Evaluation</h2>
            <CardGrid items={careful} accent="amber" />
          </div>
        </div>
      </section>

      {/* Section 5: Skip */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Repairs to Skip in Most Cases</h2>
            <CardGrid items={skip} accent="red" />
          </div>
        </div>
      </section>

      {/* Section 6: As-Is */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">The As-Is Question</h2>
            <div className="rounded-lg bg-background border-l-4 border-primary p-6 shadow-sm space-y-4">
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Some estate properties are best sold as-is — particularly when the property has significant deferred maintenance, the estate has limited funds for preparation, or the timeline is urgent.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Selling as-is does not mean giving the property away. It means pricing it accurately for its actual condition and marketing it to buyers who are specifically looking for properties they can improve themselves — investors, contractors, and experienced buyers who understand the estate sale market.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                David Stein evaluates every estate property honestly — recommending the preparation approach that will produce the best financial outcome for the estate given its specific condition, timeline, and market position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: How David evaluates */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">How David Stein Evaluates Repairs</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David Stein's dual background as a Licensed Broker and Certified Residential Appraiser means every repair recommendation is grounded in comparable sales data and current buyer behavior — not general contractor estimates or guesswork.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David manages vendor coordination for all preparation work — scheduling contractors, overseeing the work, and ensuring the property is ready to list without the executor needing to be on-site.
            </p>
            <AffiliationBadgeGrid />
          </div>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 9: Related Resources */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedCards.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  className="block rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <span className="text-gold font-medium text-base">Read more →</span>
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
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">Ready to Talk?</h2>
            <p className="text-lg text-primary-foreground/85 leading-relaxed mb-8">
              David Stein evaluates every estate property honestly — recommending the preparation approach that will produce the best outcome for the estate. No pressure — just practical guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:2069003015">
                <Button variant="gold" size="lg" className="rounded-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-lg bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default RepairsBeforeSellingProbateHomeWashington;
