import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import AuthorByline from "@/components/AuthorByline";
import ProbateStartHere from "@/components/ProbateStartHere";

const speedUp = [
  "Starting cleanout and planning while the court appointment is pending",
  "A property in good condition requiring minimal cleanout or repair",
  "Heirs who are aligned on pricing and timing from the start",
  "An estate attorney and broker who stay in regular contact",
  "A strong seller's market with high buyer demand",
];

const slowDown = [
  "Delays in filing the probate petition, since each week of delay adds carrying costs",
  "Extensive cleanout: a home with decades of belongings can take weeks to clear",
  "Disagreements among heirs about pricing, timing, or whether to sell",
  "Deferred maintenance that must be assessed before accurate pricing can be set",
  "Title issues including liens, encumbrances, or unclear ownership",
  "Properties requiring significant repairs before they can be shown",
  "A slower buyer's market with limited demand",
];

const faqs = [
  { question: "What is the fastest a probate property can sell?", answer: "If the executor already has letters testamentary and the property is in good condition, the sale itself can close in about 30 to 45 days, similar to a standard real estate transaction. The total timeline, including probate administration, is usually longer." },
  { question: "What delays probate property sales the most?", answer: "The most common delays are waiting for court-issued authority, property preparation and cleanout, disagreements among heirs, title issues, and deferred maintenance that surfaces during inspection. Planning ahead during the probate waiting period can reduce many of these delays." },
  { question: "Can you speed up the process?", answer: "Yes, to a degree. Starting preparation during probate, getting a professional assessment early, coordinating with the estate attorney on timing, and communicating clearly with heirs can all shorten the process." },
  { question: "Does the type of probate affect the timeline?", answer: "Significantly. Estates with nonintervention powers allow the executor to sell without court approval for each step. Court-supervised estates require hearings and confirmations that can add weeks or months to the process." },
  { question: "What if the property needs significant repairs?", answer: "Properties needing major work usually take longer to sell, either because repairs take time first or because the buyer pool narrows. A professional assessment can help show whether repairs are worth the cost or whether selling as-is makes more sense." },
];

const jsonLd = articleSchema({
  headline: "How Long Does It Take to Sell a Probate Property?",
  description: "Realistic timelines for probate property sales in Washington State — from court authority to closing. Understand what affects the timeline and how to plan effectively.",
  url: "/guides/how-long-sell-probate-property",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  about: ["Probate timeline", "Probate property sale", "Estate property timeline", "Selling probate house", "Washington probate"],
});

const HowLongSellProbateProperty = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Long Does It Take to Sell a Probate Property? | Real Property Planning"
      description="Realistic timelines for probate property sales in Washington State — from court authority to closing. Understand what affects the timeline and how to plan."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Guides & Resources", url: "/guides-and-resources" },
      { name: "How Long to Sell Probate Property", url: "/guides/how-long-sell-probate-property" },
    ]} />
    <Header />
    <main id="main-content">
      <ProbateStartHere />

    <HeroBandTitle as="h1">How Long Does It Take to Sell a Probate Property?</HeroBandTitle>
    {/* What This Means in Practice */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              Written for executors, attorneys, and families who need a realistic timeline for selling a probate property in Washington State. The time from the death to the closing varies widely. It depends on how quickly the executor is appointed, the condition of the house, the market, and how quickly the family agrees.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: "18px" }}>
              This guide covers the two phases of the timeline, what affects each, and where planning can shorten it.
            </p>
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What This Means in Practice</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A probate property sale has two phases: the legal phase (getting authority to sell) and the real estate phase (preparing, listing, and closing). Each has its own delays.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Phase 1: Legal authority.</strong> The original will goes to the court, and the court may admit it and appoint the executor as soon as the petition is presented (RCW 11.20.020); heirs are notified after the appointment (RCW 11.28.237). Letters testamentary issue once the executor's oath is filed and any required bond is posted. In an uncontested case the wait is mostly preparing the petition and the county's processing time. Without a will, a petition by someone other than the surviving spouse needs 10 days' notice to the spouse unless the spouse waives it (RCW 11.28.131). A contested will or appointment can take months.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Phase 2: Property sale.</strong> Once the executor has authority, the property needs assessment, preparation, listing, marketing, negotiation, and closing. A well-prepared property in a strong market may sell in 30 days. A property needing significant work or in a slower market may take longer.
          </p>
        </div>
      </div>
    </section>

    {/* Factors That Affect the Timeline */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Factors That Affect the Timeline</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            These factors have the greatest effect on the timeline:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Court processing time.</strong> Different counties in Washington process probate at different speeds. King County and Pierce County tend to have heavier caseloads, which can mean longer wait times for hearings.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Property condition.</strong> A home that has been well-maintained can go to market quickly. A property with deferred maintenance, hoarding, or structural issues may need weeks or months of preparation before it is ready.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Family coordination.</strong> When several heirs are involved, especially heirs in different states or with different opinions, communication and decision-making add time. Clear communication and a professional <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">property valuation</Link> help align expectations.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Market conditions.</strong> A strong seller's market can shorten the listing-to-close timeline. A slower market or a property in a less desirable location may need more time and careful pricing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Title complications.</strong> Liens, boundary disputes, missing documents, or unclear ownership history can delay closing until resolved. A title review early in the process helps find these issues while there is time to resolve them.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Wondering About Your Timeline?"
      body={`A short conversation with ${FEATURED_BROKER.name} can help you see where you are in the process and what to expect from here.`}
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance on the property questions."
    />

    {/* Speed up / slow down: merged from the retired
        /guides/probate-house-sale-timeline-washington (Oct 4, 2026, Question
        Map step 8). Its week-by-week figures were not carried over: they
        were unsourced and conflicted with this page. */}
    <section className="py-14 md:py-20 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">What Can Speed It Up</h2>
            <ul className="space-y-3 list-disc pl-5">
              {speedUp.map((b) => (
                <li key={b} className="text-foreground text-base leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-5">What Can Slow It Down</h2>
            <ul className="space-y-3 list-disc pl-5">
              {slowDown.map((b) => (
                <li key={b} className="text-foreground text-base leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* How to Think Through This Situation */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How to Think Through This Situation</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If you are the executor, use the probate waiting period to prepare. A practical order of steps:
          </p>
          <ol className="space-y-4 list-decimal list-inside text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Start planning immediately.</strong> Do not wait for letters testamentary to begin assessing the property and coordinating with professionals.</li>
            <li><strong className="text-foreground">Get a professional property assessment.</strong> Knowing the home's condition and value early helps set realistic expectations for timeline and price.</li>
            <li><strong className="text-foreground">Begin cleanout and preparation.</strong> This is often the most time-consuming part, and it can happen before legal authority is granted.</li>
            <li><strong className="text-foreground">Communicate a realistic timeline to heirs.</strong> Setting expectations early helps prevent pressure and conflict later.</li>
            <li><strong className="text-foreground">Coordinate with the estate attorney.</strong> Align the property sale timeline with the overall estate administration plan.</li>
          </ol>
        </div>
      </div>
    </section>

    {/* Common Mistakes to Avoid */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-4">
            {[
              "Telling heirs the sale will close quickly without accounting for probate timelines, which creates unrealistic expectations and unnecessary pressure",
              "Waiting until letters testamentary are issued to begin any planning, which loses time that could have gone to preparing the house",
              "Rushing the property to market without proper preparation: a poorly presented home can sell for less and may take longer to sell",
              "Ignoring title issues until a buyer is under contract, which can delay a sale or end it late in the process",
              "Not factoring in seasonal market conditions: listing in winter rather than spring can affect both timeline and price",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* When to Get Professional Guidance */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When to Get Professional Guidance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Bring in a real estate professional during the probate waiting period rather than after authority has been granted. Early involvement leaves time to plan and gives a more accurate timeline.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A broker experienced with probate and estate property can assess the home, suggest which preparation is worth doing, coordinate with the estate attorney, and give a realistic range for price and timeline, all before the property is ready to list.
          </p>
        </div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/sell-house-during-probate-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Selling During Probate in WA</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/executor-first-steps-house" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Executor First Steps With a House</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Probate Timeline FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "Can You Sell a House During Probate in Washington?", description: "Understand what authority is needed and how the process works.", href: "/guides/sell-house-during-probate-washington" },
        { title: "What Should an Executor Do First With a House?", description: "The first decisions an executor needs to make about estate property.", href: "/guides/executor-first-steps-house" },
        { title: "Should You Sell As-Is or Fix It Up?", description: "When repairs make sense and when selling as-is is the better strategy.", href: "/guides/sell-inherited-house-as-is-or-fix" },
      ]}
    />

    <RelatedServices currentPath="/guides/how-long-sell-probate-property" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">To talk through the timeline for a specific estate property, schedule a short conversation.</p>
          <Link to="/contact?reason=estate-property"><Button variant="gold" size="lg">Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <AuthorByline context="estate" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default HowLongSellProbateProperty;
