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
    q: "Can we list the house before Letters Testamentary are issued?",
    a: "No — a title company will not close a sale without proper documentation of legal authority. However David can begin assessment and preparation work before authority is formally granted.",
  },
  {
    q: "How long does it take to get Letters Testamentary in Washington?",
    a: "Typically 4–8 weeks from filing the petition with the court, depending on the county and complexity of the estate.",
  },
  {
    q: "What if the personal representative lives out of state?",
    a: "Out-of-state personal representatives can manage the entire process remotely. David provides photo updates, digital document signing, and regular communication so the representative never has to travel to supervise the property.",
  },
  {
    q: "Can a beneficiary sell the property if there is no will?",
    a: "Not without court appointment as administrator. Being a beneficiary does not grant authority to sell estate property.",
  },
  {
    q: "What happens if someone sells estate property without authority?",
    a: "This can create serious legal liability for the unauthorized party and may cloud the property's title — causing significant delays and legal costs to resolve.",
  },
];

const nonSupervisedActions = [
  "List the property without court approval",
  "Set the asking price without court approval",
  "Accept an offer without court approval",
  "Close the sale without returning to court",
];

const otherAuthorityCards = [
  {
    title: "Trustee",
    body: "If the property is held in a trust, the trustee — not a personal representative — has authority to sell. Trust sales operate outside of probate entirely.",
  },
  {
    title: "Power of Attorney",
    body: "A power of attorney grants authority to act on behalf of a living person — it terminates at death. A power of attorney cannot authorize the sale of a deceased person's property.",
  },
  {
    title: "Co-owner",
    body: "If the property was owned jointly with right of survivorship, the surviving co-owner may have authority to sell — but this depends on how title was held and whether probate is still required for the deceased's share.",
  },
];

const relatedCards = [
  { title: "Probate vs Trust Sale in Washington", href: "/guides/probate-vs-trust-sale-washington" },
  { title: "How Probate Real Estate Works", href: "/guides/how-probate-real-estate-works" },
  { title: "For Attorneys & Fiduciaries", href: "/for-attorneys" },
];

const jsonLd = articleSchema({
  headline: "Who Has Authority to Sell Probate Property in Washington State?",
  description: "David Stein explains who has legal authority to sell estate property in Washington State.",
  url: "/guides/who-has-authority-sell-probate-property-washington",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  about: ["Probate authority", "Personal representative", "Letters Testamentary", "Washington State"],
});

const WhoHasAuthoritySellProbateProperty = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Who Has Authority to Sell Probate Property in Washington State? | Real Property Planning"
      description="David Stein explains who has legal authority to sell estate property in Washington State — including personal representatives, trustees, and what Letters Testamentary mean for your sale. (206) 900-3015."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/guides-and-resources" },
        { name: "Who Has Authority to Sell Probate Property", url: "/guides/who-has-authority-sell-probate-property-washington" },
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
              Who Has Authority to Sell Probate Property in Washington State?
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-6">
              For executors, trustees, attorneys, and families who need to understand legal authority before any real estate action can be taken.
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
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">Why Authority Matters Before Anything Else</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              One of the most common and costly mistakes families make is taking action on a probate property before the right person has legal authority to do so. Listing a home, accepting an offer, or even making repairs without proper authority can create legal liability and delay the entire estate process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Understanding who has authority — and when that authority is in place — is the first step before any real estate professional can legitimately act on an estate property.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Personal Representative */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">The Personal Representative — Washington's Term for Executor</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In Washington State, the person with authority to manage and sell estate real property is called the personal representative — commonly known as an executor in other states.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">Named in the will</h3>
                <p className="text-base text-foreground/85 leading-relaxed">
                  If the deceased left a valid will, it typically names a personal representative. That person must still petition the court to be formally appointed — being named in the will alone does not grant legal authority.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">Appointed by the court</h3>
                <p className="text-base text-foreground/85 leading-relaxed">
                  If there is no will — called dying intestate — or if the named personal representative is unable or unwilling to serve, the court appoints an administrator to fulfill the same role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Letters Testamentary */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">What Are Letters Testamentary?</h2>
            <div className="rounded-lg border-l-4 border-primary bg-secondary p-6 md:p-8 shadow-sm space-y-5">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                <span className="font-semibold">Letters Testamentary</span> is the court-issued document that formally grants the personal representative legal authority to act on behalf of the estate — including the authority to list, sell, and transfer real property.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Without Letters Testamentary, no real estate professional can legally close a sale on estate property. Title companies require this documentation before they will insure the transaction.
              </p>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                A similar document called <span className="font-semibold">Letters of Administration</span> is issued when there is no will and the court appoints an administrator instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Non-Supervised Probate */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Washington's Non-Supervised Probate Advantage</h2>
            <div className="rounded-lg border-2 border-gold bg-background p-6 md:p-8 shadow-sm">
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-5">
                Washington State operates under <span className="font-semibold">non-supervised probate</span> — also known as independent administration. Under this system, the personal representative can:
              </p>
              <ul className="space-y-3 mb-5">
                {nonSupervisedActions.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 mt-0.5">
                      <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                    </span>
                    <span className="text-foreground text-base leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                This means the sale can proceed on a normal market timeline rather than waiting months for court hearings. However, the personal representative must still act within their fiduciary duty — pricing decisions must be defensible and all actions must serve the best interests of the estate and its beneficiaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Other Authority */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">Can Anyone Else Authorize a Sale?</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {otherAuthorityCards.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{c.title}</h3>
                  <p className="text-base text-foreground/85 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How David Works */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">How David Stein Works Within This Framework</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David Stein regularly works with personal representatives, trustees, estate attorneys, and families throughout Washington State. He understands exactly what documentation is required before a sale can proceed — and he coordinates directly with legal counsel to ensure every step is properly authorized.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David can begin working with the family before Letters Testamentary are issued — assessing the property, developing a pricing strategy, and coordinating preparation so everything is ready the moment legal authority is in place.
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

      {/* Section 8: Related */}
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
              David Stein works with personal representatives, trustees, and attorneys throughout Washington State. No pressure — just practical guidance.
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

export default WhoHasAuthoritySellProbateProperty;
