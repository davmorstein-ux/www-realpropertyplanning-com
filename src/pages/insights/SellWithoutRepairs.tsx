import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { question: "Will I get less money selling as-is?", answer: "Usually, yes — but not always as much less as people fear. Buyers who purchase as-is properties factor in repair costs, but a well-priced as-is home in a desirable location can still attract strong offers. The key is pricing accurately based on current condition, not what the home could be worth after renovations." },
  { question: "Do I need to disclose known issues if I sell as-is?", answer: "Yes. In Washington State, sellers are required to complete a seller disclosure form regardless of whether the home is sold as-is. 'As-is' means you are not making repairs — it does not remove your obligation to disclose known material defects." },
  { question: "What types of buyers purchase as-is properties?", answer: "Investors, flippers, and buyers looking for value in exchange for sweat equity. Some traditional buyers are also willing to take on a project if the location and price are right. Your pricing strategy and marketing approach should reflect which buyer pool you are targeting." },
  { question: "Should I at least get an inspection before listing as-is?", answer: "A pre-listing inspection can be valuable. It helps you understand what buyers will find, allows you to price more accurately, and reduces the chance of surprises that derail a deal after you are already under contract." },
];

const jsonLd = articleSchema({
  headline: "Can You Sell an Inherited House Without Fixing It Up?",
  description: "Whether you can sell an inherited house as-is in Washington, when it makes sense, and how to evaluate the decision. Practical guidance for executors and heirs.",
  url: "/insights/sell-inherited-house-without-repairs",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["As-is property sale", "Inherited property", "Estate repairs", "Washington real estate"],
});

const SellWithoutRepairs = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Can You Sell an Inherited House Without Fixing It Up? | Real Property Planning"
      description="Whether you can sell an inherited house as-is, when repairs make sense, and how to evaluate the decision. Practical guidance for executors and families in Washington."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Sell Without Repairs", url: "/insights/sell-inherited-house-without-repairs" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Can You Sell an Inherited House Without Fixing It Up?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Yes — you can sell an inherited property without making repairs. But whether you should depends on the property's condition, the local market, and what outcome you are trying to achieve. Selling as-is is a legitimate strategy, not a last resort.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article walks through the trade-offs, when as-is makes sense, and how to make an informed decision.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Pros and Cons */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The Pros and Cons of Selling As-Is</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Selling as-is simplifies the process — but it also changes who your buyer is and what they are willing to pay.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">The advantages are real.</strong> You avoid the cost and time of repairs. You eliminate the stress of managing contractors from a distance. You reduce carrying costs by getting to market faster. And for families dealing with grief, conflict, or financial pressure, speed and simplicity can be worth more than a slightly higher sale price.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">The trade-offs are also real.</strong> As-is properties generally sell for less than comparable homes in updated condition. You attract a different buyer pool — often investors who are calculating their own profit margin. And in a softer market, as-is homes may take longer to sell because fewer buyers are willing to take on risk.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Neither path is automatically right or wrong. The best approach depends on the specific property, your financial situation, and how much time and energy you have available.
          </p>
        </div>
      </div>
    </section>

    {/* When Repairs Make Sense */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Repairs Actually Make Sense</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Some repairs genuinely pay for themselves. Others are a poor use of estate funds. The distinction matters.
          </p>
          <ul className="space-y-4">
            {[
              "Safety issues — exposed wiring, structural concerns, or code violations that would scare away even investor buyers",
              "Cosmetic basics — deep cleaning, removing clutter, and basic landscaping that cost little but dramatically improve first impressions",
              "High-ROI fixes — a fresh coat of paint, carpet cleaning, or minor kitchen updates that shift the property from 'project' to 'move-in ready' in a buyer's mind",
              "Deal-breakers — issues that would likely surface during inspection and cause buyers to walk away or renegotiate aggressively",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Full renovations — new kitchens, bathroom remodels, or major system replacements — rarely make financial sense for estate properties. The cost almost never comes back dollar for dollar, and the time investment delays the sale significantly.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* How to Evaluate */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How to Evaluate the Decision</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The most useful question is not "should we fix it up?" — it is "what would we gain by fixing it, and is that gain worth the cost, time, and effort?"
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A professional property assessment can answer this clearly. By understanding the home's current market value as-is and estimating what it might bring with targeted improvements, you can make a data-driven decision rather than guessing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Consider your constraints honestly. If you live out of state, managing a renovation remotely adds complexity. If the estate has limited funds, investing in repairs means upfront costs with uncertain returns. If family members are eager to resolve things, the time required for improvements may create more conflict than the financial benefit is worth.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The right answer balances financial return with practical reality — and it looks different for every family.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PageFAQ faqs={faqs} />
        </div>
      </div>
    </section>

    <NextStepBlock
      steps={[
        { title: "Repairs Before Selling Estate Property", description: "Which improvements are worth the investment.", href: "/guides/estate-property-repairs-before-sale" },
        { title: "Pricing an Inherited Property", description: "Why inherited property pricing requires a different approach.", href: "/insights/pricing-inherited-property-differences" },
        { title: "Why Valuation Matters", description: "How professional valuation protects your interests.", href: "/why-valuation-matters" },
      ]}
    />

    {/* CTA */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Clear Next Step</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            If you're working through a situation like this and want help thinking through your options, a short conversation can often bring clarity.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-4 text-lg rounded-lg">
              Schedule a Consultation
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No pressure. Just practical guidance.</p>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/insights/sell-inherited-house-without-repairs" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SellWithoutRepairs;
