import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I know if a property needs to go through probate?",
    a: "Check how the property is titled. If it is in the deceased person's name alone with no co-owner, beneficiary designation, or trust, it likely requires probate. An estate attorney can confirm this based on the specific facts of the situation.",
  },
  {
    q: "Can a trust sale be challenged by beneficiaries?",
    a: "Yes. Beneficiaries can challenge a trust sale if they believe the trustee breached their fiduciary duty — for example by selling the property significantly below market value. A defensible, condition-based pricing strategy protects the trustee from such claims.",
  },
  {
    q: "What if the property is partly in a trust and partly in the estate?",
    a: "This can happen when only some assets were transferred into a trust before death. An estate attorney should advise on how to handle the split — the real estate side will follow whichever process applies to how that specific property is titled.",
  },
  {
    q: "Does David work with both executors and trustees?",
    a: "Yes. David works regularly with both — as well as with the attorneys who represent them.",
  },
  {
    q: "How quickly can a trust sale close compared to a probate sale?",
    a: "A trust sale can sometimes close within 30–60 days of the trustee being ready to act. A probate sale typically takes longer due to the legal steps required to establish authority and administer the estate.",
  },
];

const probateBullets = [
  "The court appoints a personal representative to manage the estate",
  "Letters Testamentary or Letters of Administration are required before the executor has legal authority to sell",
  "Washington is a non-supervised probate state — most sales do not require court approval of price or terms",
  "The process typically takes 4–12 months from opening probate to closing",
  "All decisions must meet the executor's fiduciary duty to the estate and its beneficiaries",
];

const trustBullets = [
  "The property passes outside of probate entirely — no court involvement required",
  "The trustee named in the trust document has immediate authority to sell",
  "The sale can proceed much faster — sometimes within weeks of the grantor's death",
  "The trustee still has fiduciary duties to the trust's beneficiaries",
  "Pricing must still be defensible — beneficiaries can challenge a sale they believe was undervalued",
];

const comparisonRows = [
  ["Court involvement", "Yes — probate court oversees the estate", "No — trust operates independently"],
  ["Legal authority", "Letters Testamentary required", "Trustee authority per trust document"],
  ["Timeline", "4–12 months typical", "Weeks to months"],
  ["Court approval of price", "Not required in most WA cases", "Not required"],
  ["Fiduciary duty", "Executor owes duty to estate and heirs", "Trustee owes duty to beneficiaries"],
  ["Property title", "Held in decedent's name alone", "Held in trust name"],
  ["Complexity", "Higher — court deadlines and documentation", "Lower — but trust terms must be followed"],
];

const probateSituation = [
  "The deceased owned the home solely in their own name",
  "There is no living co-owner on title",
  "No transfer-on-death deed was recorded",
  "The property was not placed in a trust before death",
];

const trustSituation = [
  "The home was titled in the name of a revocable living trust",
  "The trust document names a successor trustee with authority to sell",
  "The grantor set up the trust specifically to avoid probate",
];

const relatedCards = [
  { title: "How Probate Real Estate Works in Washington", href: "/guides/how-probate-real-estate-works" },
  { title: "Who Has Authority to Sell Probate Property", href: "/guides/who-has-authority-sell-probate-property-washington" },
  { title: "Probate & Estate Sales", href: "/probate-estate-sales" },
];

const jsonLd = articleSchema({
  headline: "Probate vs Trust Sale in Washington State — What's the Difference?",
  description: "David Stein explains the key differences between probate sales and trust sales in Washington State.",
  url: "/guides/probate-vs-trust-sale-washington",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  about: ["Probate sales", "Trust sales", "Washington State", "Estate administration"],
});

const ProbateVsTrustSaleWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate vs Trust Sale in Washington State — What's the Difference? | Real Property Planning"
      description="David Stein explains the key differences between probate sales and trust sales in Washington State. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties — (206) 900-3015."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/guides-and-resources" },
        { name: "Probate vs Trust Sale in Washington", url: "/guides/probate-vs-trust-sale-washington" },
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
              Probate vs Trust Sale in Washington State — What's the Difference?
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-6">
              For executors, trustees, attorneys, and families who need to understand which process applies to their situation.
            </p>
            <p className="text-lg text-gold font-bold leading-relaxed mb-6">
              David Stein — Licensed Real Estate Broker &amp; Certified Residential Appraiser — (206) 900-3015
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="rounded-lg">Contact</Button>
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

      {/* Section 1: Why This Distinction Matters */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">Why This Distinction Matters</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When a property owner passes away, the path to selling their real estate depends entirely on how that property was owned and titled. Two of the most common scenarios in Washington State are probate sales and trust sales — and they involve very different processes, timelines, and levels of legal oversight.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Getting this wrong at the start causes delays, legal complications, and unnecessary stress for families who are already in a difficult situation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Probate Sale */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">What Is a Probate Sale?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A probate sale occurs when real property is part of a deceased person's estate and must go through the court-supervised probate process before it can be sold. In Washington State, probate is required when a person dies owning property solely in their own name — with no co-owner, no beneficiary designation, and no trust holding title.
            </p>
            <ul className="space-y-3">
              {probateBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 mt-0.5">
                    <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Trust Sale */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">What Is a Trust Sale?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A trust sale occurs when real property is held inside a revocable or irrevocable trust and the trustee sells it as part of trust administration after the grantor's death.
            </p>
            <ul className="space-y-3">
              {trustBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 mt-0.5">
                    <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Side by Side Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 font-semibold"></th>
                    <th className="px-4 py-3 font-semibold">Probate Sale</th>
                    <th className="px-4 py-3 font-semibold">Trust Sale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, p, t], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
                      <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top">{label}</th>
                      <td className="px-4 py-3 text-foreground/85 align-top">{p}</td>
                      <td className="px-4 py-3 text-foreground/85 align-top">{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Situations */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Common Situations in Washington State</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-4">When probate is required</h3>
                <ul className="space-y-3">
                  {probateSituation.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-foreground text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-4">When a trust sale applies</h3>
                <ul className="space-y-3">
                  {trustSituation.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-foreground text-base leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="italic text-muted-foreground text-base mt-6 leading-relaxed">
              Non-probate transfers — such as joint tenancy with right of survivorship, community property with right of survivorship, or a transfer-on-death deed — pass property directly to the surviving owner or named beneficiary without probate or a trust sale.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: How David Works With Both */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">How David Stein Works With Both</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Whether a property is going through probate or trust administration, David Stein brings the same discipline to every sale — accurate condition-based pricing, coordinated preparation, and clear communication with all parties involved.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              For probate sales, David works directly with the executor and estate attorney — providing regular updates, handling all property preparation coordination, and ensuring the pricing documentation supports the executor's fiduciary obligations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For trust sales, David works with the trustee and their legal counsel — moving quickly when the trust allows, and ensuring the sale price is well-documented and defensible to beneficiaries.
            </p>
            <AffiliationBadgeGrid />
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-14 md:py-20 bg-background">
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

      {/* Section 8: Related Resources */}
      <section className="py-14 md:py-20 bg-secondary">
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
              David Stein works with executors, trustees, and attorneys throughout Washington State. No pressure — just practical guidance.
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

export default ProbateVsTrustSaleWashington;
