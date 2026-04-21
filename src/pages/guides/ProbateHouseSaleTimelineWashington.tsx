import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Phone, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    title: "Weeks 1–4: Death and initial steps",
    body: "The estate enters probate. The executor secures the property, changes locks, notifies insurance, and begins gathering documentation. No real estate action can be taken yet — but David Stein can begin assessing the property and developing a pricing strategy during this period.",
  },
  {
    title: "Weeks 4–8: Petitioning the court",
    body: "The executor or their attorney files a petition with the probate court to be formally appointed personal representative. This process typically takes 4–8 weeks depending on the county and complexity of the estate.",
  },
  {
    title: "Weeks 8–12: Letters Testamentary issued",
    body: "The court issues Letters Testamentary — the document that grants legal authority to act on behalf of the estate. This is the moment real estate action can officially begin. Property preparation, listing agreements, and professional photography can all proceed at this point.",
  },
  {
    title: "Weeks 10–16: Property preparation",
    body: "Cleanout, minor repairs, staging, and landscaping are coordinated. The length of this phase depends heavily on the condition of the property and the extent of personal belongings left behind. David Stein coordinates all vendors so the executor does not need to be on-site.",
  },
  {
    title: "Weeks 14–20: Listing and marketing",
    body: "The home is listed at a court-defensible, condition-based price. In a normal Washington State market, well-priced estate properties typically receive offers within 2–6 weeks of listing.",
  },
  {
    title: "Weeks 16–24: Offer, negotiation, and closing",
    body: "Once an offer is accepted, the standard closing process in Washington State takes 30–45 days. The executor, estate attorney, and escrow company coordinate to ensure all documentation is properly executed.",
  },
  {
    title: "Weeks 20–28+: Distribution of proceeds",
    body: "After closing, proceeds are used to pay estate debts, taxes, and costs. Remaining funds are distributed to beneficiaries according to the will or Washington State law.",
  },
];

const speedUp = [
  "Engaging a probate-experienced broker before Letters Testamentary are issued",
  "A property in good condition requiring minimal cleanout or repair",
  "Heirs who are aligned on pricing and timing from the start",
  "An estate attorney and broker who communicate regularly and coordinate effectively",
  "A strong seller's market with high buyer demand",
];

const slowDown = [
  "Delays in filing the probate petition — every week of delay adds carrying costs",
  "Extensive cleanout needed — homes with decades of belongings can take weeks to clear",
  "Disagreements among heirs about pricing, timing, or whether to sell",
  "Deferred maintenance that must be assessed before accurate pricing can be set",
  "Title issues including liens, encumbrances, or unclear ownership",
  "Properties requiring significant repairs before they can be shown",
  "A slower buyer's market with limited demand",
];

const tableRows: Array<{ phase: string; duration: string; bold?: boolean }> = [
  { phase: "Death to petition filing", duration: "1–4 weeks" },
  { phase: "Court appointment of executor", duration: "4–8 weeks" },
  { phase: "Property preparation", duration: "2–8 weeks" },
  { phase: "Listing to accepted offer", duration: "2–6 weeks" },
  { phase: "Offer to closing", duration: "4–6 weeks" },
  { phase: "Total — best case", duration: "3–4 months", bold: true },
  { phase: "Total — typical case", duration: "5–8 months", bold: true },
  { phase: "Total — complex case", duration: "9–12+ months", bold: true },
];

const faqs = [
  {
    q: "Can we do anything before Letters Testamentary are issued?",
    a: "Yes. David can assess the property, develop a pricing strategy, and coordinate early preparation work — so the moment legal authority is granted, the property is ready to list immediately.",
  },
  {
    q: "What is the fastest a probate sale can close in Washington State?",
    a: "In ideal conditions — simple estate, good property condition, aligned heirs, strong market — a probate sale can close in as little as 3–4 months from the date of death.",
  },
  {
    q: "What causes the most delays in a probate sale?",
    a: "The biggest delays are usually: waiting too long to file the probate petition, extensive property cleanout needs, and heir disagreements about pricing or timing.",
  },
  {
    q: "Does Washington State require court approval to sell the property?",
    a: "In most cases no. Washington operates under non-supervised probate — the executor can list, negotiate, and close without returning to court for approval.",
  },
  {
    q: "How do carrying costs affect the estate?",
    a: "Every month a property sits unsold, the estate pays taxes, insurance, utilities, and maintenance. On a typical Washington State home these costs can run $1,500–$3,000 per month or more — a powerful reason to move efficiently.",
  },
];

const relatedCards = [
  { title: "How Probate Real Estate Works in Washington", href: "/guides/how-probate-real-estate-works" },
  { title: "Who Has Authority to Sell Probate Property", href: "/guides/who-has-authority-sell-probate-property-washington" },
  { title: "Probate & Estate Sales", href: "/probate-estate-sales" },
];

const jsonLd = articleSchema({
  headline: "Probate House Sale Timeline in Washington State",
  description: "David Stein explains the realistic timeline for selling a probate property in Washington State — from death to distribution of proceeds.",
  url: "/guides/probate-house-sale-timeline-washington",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  about: ["Probate timeline", "Estate sales", "Washington State", "Executor"],
});

const ProbateHouseSaleTimelineWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Probate House Sale Timeline in Washington State | Real Property Planning"
      description="David Stein explains the realistic timeline for selling a probate property in Washington State — from death to distribution of proceeds. Licensed Broker & Certified Appraiser — (206) 900-3015."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema
      items={[
        { name: "Resources", url: "/guides-and-resources" },
        { name: "Probate House Sale Timeline in Washington", url: "/guides/probate-house-sale-timeline-washington" },
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
              Probate House Sale Timeline in Washington State
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-6">
              A realistic, step-by-step guide to how long a probate property sale actually takes — and what affects the timeline.
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

      {/* Section 1: Why the Timeline Matters */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">Why the Timeline Matters</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Carrying costs on a vacant estate property add up fast — property taxes, insurance, utilities, and maintenance accumulate every week the home sits unsold. Understanding the realistic timeline helps executors, attorneys, and families plan effectively and avoid costly delays.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Timeline Steps */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">The Realistic Timeline — Start to Finish</h2>
            <ol className="space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex items-start gap-5">
                  <div
                    style={{
                      background: "radial-gradient(circle at 38% 38%, #2a4a8b, #0a1d3d 70%)",
                      border: "2px solid #c9a84c",
                      borderRadius: "50%",
                      width: "52px",
                      height: "52px",
                      minWidth: "52px",
                      boxShadow:
                        "inset 3px 3px 8px rgba(255,255,255,0.2), inset -3px -3px 8px rgba(0,0,0,0.6), 4px 4px 10px rgba(0,0,0,0.5), -1px -1px 4px rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c9a84c",
                      fontSize: "20px",
                      fontWeight: 700,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 3: Speed up */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">What Can Speed Up the Timeline</h2>
            <ul className="space-y-3">
              {speedUp.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 mt-0.5">
                    <Check className="h-4 w-4 text-green-700" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Slow down */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">What Can Slow Down the Timeline</h2>
            <ul className="space-y-3">
              {slowDown.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 mt-0.5">
                    <AlertTriangle className="h-4 w-4 text-amber-700" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Quick reference table */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Washington State Probate Timeline — Quick Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 font-semibold">Phase</th>
                    <th className="px-4 py-3 font-semibold">Typical Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, i) => (
                    <tr key={r.phase} className={i % 2 === 0 ? "bg-background" : "bg-secondary"}>
                      <th scope="row" className={`px-4 py-3 align-top text-foreground ${r.bold ? "font-bold" : "font-semibold"}`}>{r.phase}</th>
                      <td className={`px-4 py-3 align-top text-foreground/85 ${r.bold ? "font-bold" : ""}`}>{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How David reduces delays */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">How David Stein Reduces Timeline Delays</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David Stein begins working with families before Letters Testamentary are issued — assessing the property, coordinating early preparation, and developing a pricing strategy so everything is ready to move the moment legal authority is granted.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              His dual credential as a Licensed Broker and Certified Residential Appraiser means the pricing decision is made once — accurately — without the back-and-forth that comes when a broker's estimate and an appraiser's valuation don't match.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David coordinates directly with estate attorneys throughout Washington State to ensure the real estate timeline supports — rather than conflicts with — the overall estate administration plan.
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

export default ProbateHouseSaleTimelineWashington;
