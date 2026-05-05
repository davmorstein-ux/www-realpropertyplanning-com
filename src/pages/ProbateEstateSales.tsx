import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scale, Users, Wrench, BarChart3, Heart, Hammer } from "lucide-react";

import warning3d from "@/assets/property-warning-guidance-icon-washington.webp";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconProbateSales from "@/assets/probate-estate-sales-hero.png";
import probateTimeline from "@/assets/probate-timeline.webp";

// ── Data ──

const probateCaseStudies = [
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
    howHelped: "Real Property Planning provided a clear, condition-based pricing assessment so everyone was working from the same numbers. He walked the family through market data, explained the cost of holding versus selling, and coordinated the preparation and sale with regular updates to all four siblings.",
    outcome: "The family reached agreement within two weeks. The home sold at a price everyone felt was fair, and the process was far less stressful than expected.",
  },
  {
    title: "Helping a Family Navigate a Senior Transition and Home Sale",
    label: "Senior Transition",
    situation: "A longtime homeowner in her early 80s was moving to assisted living. Her two adult children were helping coordinate the transition and sale of the family home in King County.",
    challenge: "The home held 40 years of memories. The family wasn't sure how to prepare the property, when to list, or how to manage the timeline alongside the move.",
    howHelped: "Real Property Planning recommended a phased approach: start with a gentle cleanout, address targeted improvements, and list at a time aligned with the transition. He coordinated vendors and kept everyone informed throughout.",
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

const timingConsiderations = [
  {
    title: "Before Legal Authority Is Granted",
    text: "Many executors and families don't realize help is available before legal authority is formally in place. Real Property Planning can assess the property, provide a realistic picture of likely value and condition, and help you plan next steps — so you're ready to act the moment authority is granted. This early groundwork often saves weeks once probate is officially underway.",
  },
  {
    title: "During Active Probate",
    text: "Once legal authority is established, Our team coordinates preparation, cleanout, pricing strategy, and the listing timeline — always in alignment with the legal proceedings and any court requirements. Attorneys receive regular updates and have a single reliable point of contact for all property-related questions. Family members stay informed without being overwhelmed.",
  },
  {
    title: "Post-Probate or Trust Distribution",
    text: "Once authority is clear and the estate is ready to move forward, Our team manages the full sale process — preparation, professional marketing, negotiation, and closing. For properties that need work, each improvement is evaluated for return on investment before any money is spent.",
  },
];

const commonQuestionsFaqs = [
  {
    question: "What specific Washington court forms or filings affect when we can list the property?",
    answer: "In a typical Washington probate, the personal representative needs Letters Testamentary (with a will) or Letters of Administration (without one) before listing. If the will grants Nonintervention Powers — which is common in Washington — the PR can usually sell without further court approval. If the estate is supervised, you may need a court order authorizing the sale and confirming the price. We coordinate directly with the estate attorney so the listing date, the offer-acceptance date, and the closing date all line up with whatever order the court requires.",
  },
  {
    question: "Can we accept the first reasonable offer, or do we need to follow a court bidding process?",
    answer: "It depends on the type of probate. With Nonintervention Powers, the PR can negotiate and accept like a normal seller. In supervised probates — and in some judicial-confirmation situations — the accepted offer may be subject to overbid at a court hearing. We structure the listing strategy and disclosures around whichever standard applies, so heirs and the attorney are not surprised at the hearing.",
  },
  {
    question: "How do you protect an executor from later claims that the home was sold for too little?",
    answer: "This is fiduciary defensibility, and it is why we lead with a documented, valuation-based pricing analysis rather than a marketing CMA. The PR's file includes condition photos, comparable-sales adjustments, marketing exposure records, every offer received, and the rationale for the accepted price — the same documentation an appraiser would produce. If a beneficiary later questions the sale price, the answer is in the file.",
  },
  {
    question: "The house is full of belongings and hasn't been touched in years. Where do you even start?",
    answer: "We start with a walk-through to separate the property questions from the contents questions. For contents, we coordinate vetted estate-sale companies, donation pickups, and full cleanout crews — and tell you which approach actually nets more for the estate. For the property itself, we identify the small set of repairs that move the appraised value (and therefore the sale price) and the larger set that do not. Most estate homes need far less work than families assume.",
  },
  {
    question: "How does selling during probate affect our tax situation as heirs?",
    answer: "Inherited property generally receives a stepped-up basis to fair market value as of the date of death — which is why a defensible date-of-death valuation matters. If the property sells reasonably close to that value, capital-gains exposure for the heirs is usually minimal. We are not tax advisors, but we coordinate closely with your CPA or estate attorney and can produce the valuation documentation they need.",
  },
  {
    question: "Can you start working with us before the estate attorney is even hired?",
    answer: "Yes. Many families call us first because the property is the most visible, most stressful piece. We will tell you honestly whether you need an attorney (almost always yes for Washington probate) and refer you to several experienced probate attorneys in your county if you don't have one. Then we work alongside whichever attorney you choose — they handle the legal proceeding, we handle the property.",
  },
];

const whatMakesDifferentTiles = [
  { icon: Scale, label: "Legal Authority", text: "Court requirements may dictate when and how a sale can occur." },
  { icon: Users, label: "Multiple Decision-Makers", text: "Executors, co-heirs, attorneys, and trustees must coordinate." },
  { icon: Wrench, label: "Property Condition", text: "Deferred maintenance, belongings, and vacancy are common." },
  { icon: BarChart3, label: "Honest Pricing", text: "Value must reflect actual condition — not automated estimates." },
  { icon: Heart, label: "Emotional Complexity", text: "Family dynamics can slow communication and decisions." },
  { icon: Hammer, label: "Preparation Strategy", text: "As-is vs. repairs has a direct impact on fiduciary defensibility." },
];

const jsonLd = articleSchema({
  headline: "Probate Real Estate Sales in Washington State",
  description: "Evidence-based probate real estate guidance for executors, attorneys, and families throughout Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/probate-estate-sales",
  datePublished: "2025-01-15",
  dateModified: "2026-04-15",
  about: ["Probate real estate", "Estate sales", "Inherited property", "Court-supervised sales", "Fiduciary duties"],
});

// ── Expandable Case Study Card ──

const CaseStudyCard = ({ study }: { study: typeof probateCaseStudies[number] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-3d p-6 md:p-7 flex flex-col min-w-[300px] md:min-w-0">
      {study.label && (
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 rounded-full px-2.5 py-0.5 self-start mb-3">
          {study.label}
        </span>
      )}
      <h3 className="font-serif text-lg text-foreground font-semibold mb-3">{study.title}</h3>
      <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Situation</p>
      <p className="text-muted-foreground leading-relaxed text-[15px] mb-3">{study.situation}</p>
      {open && (
        <div className="space-y-3 animate-in fade-in duration-200">
          {study.challenge && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Challenge</p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{study.challenge}</p>
            </div>
          )}
          {study.howHelped && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">How We Helped</p>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{study.howHelped}</p>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Outcome</p>
            <p className="text-foreground leading-relaxed font-medium text-[15px]">{study.outcome}</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-accent hover:text-gold transition-colors text-sm font-medium self-start"
      >
        {open ? "Show less ↑" : "Read more ↓"}
      </button>
    </div>
  );
};

// ── Page ──

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate Broker & Agent in Washington State | David Stein | Real Property Planning"
        description="David Stein — Washington State Licensed Real Estate Broker & Certified Appraiser specializing in probate real estate sales in King, Snohomish, Pierce & Kitsap Counties. Real Property Planning."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Probate & Estate Sales", url: "/probate-estate-sales" }]} />
      <Header />
      <main id="main-content">

      {/* SECTION 1 — Hero (unchanged) */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-16 md:pb-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconProbateSales} alt="Probate estate sale scene — house with sold sign, probate court documents, keys, and scale of justice in gold circular frame" className="mx-auto max-w-[16rem] md:max-w-[20rem] w-full h-auto object-contain mb-6" loading="eager"/>
            <p className="text-gold font-bold tracking-widest uppercase mb-6 text-sm md:text-base">
              Probate &amp; Estate Property Sales
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-8">
              Selling a Home Through Probate in Washington State
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-12 max-w-2xl mx-auto">
              David Stein — Licensed Broker &amp; Certified Residential Appraiser — (206) 900-3015
            </p>
            <div className="flex flex-col items-center gap-4 mb-12 w-full">
              <p className="text-primary-foreground text-lg leading-relaxed text-center">
                The court sets the timeline. We work within it.
              </p>
              <p className="text-primary-foreground text-lg leading-relaxed text-center">
                Pricing must hold up to fiduciary scrutiny.
              </p>
              <p className="text-primary-foreground text-lg leading-relaxed text-center">
                Every party stays informed. Every step is documented.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Talk Through Your Estate
                </Button>
              </Link>
              <Link to="/guides/sell-house-during-probate-washington">
                <Button size="lg" variant="outline3d" className="bg-white !text-[#0f2d52] border-2 border-[#0f2d52] hover:bg-[#0f2d52] hover:!text-white focus-visible:ring-[#0f2d52] w-full sm:w-auto">
                  Read the Probate Sale Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent 3-Block Section (unchanged) */}
      <section className="bg-background py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 md:gap-10">
            <article className="bg-card border border-border rounded-lg p-7 md:p-8 shadow-sm">
              <h2 className="font-serif text-xl md:text-2xl text-[hsl(0_70%_30%)] font-semibold mb-4 leading-snug text-center">
                Why Probate Home Sales Require Special Handling
              </h2>
              <p className="text-foreground/75 text-base leading-none">
                Selling a home through probate in Washington State is different from a traditional home sale. Probate sales often involve court timelines, executor responsibilities, multiple interested parties, and pricing that must stand up to fiduciary scrutiny.
              </p>
            </article>
            <article className="bg-card border border-border rounded-lg p-7 md:p-8 shadow-sm">
              <h2 className="font-serif text-xl md:text-2xl text-[hsl(0_70%_30%)] font-semibold mb-4 leading-snug text-center">
                How David Stein Helps With Probate Real Estate
              </h2>
              <p className="text-foreground/75 text-base leading-none">
                David Stein helps families, executors, trustees, and attorneys navigate the probate real estate process from property assessment and pricing through preparation, listing, negotiation, and closing.
              </p>
            </article>
            <article className="bg-card border border-border rounded-lg p-7 md:p-8 shadow-sm">
              <h2 className="font-serif text-xl md:text-2xl text-[hsl(0_70%_30%)] font-semibold mb-4 leading-snug text-center">
                Serving Probate Clients Across Washington
              </h2>
              <p className="text-foreground/75 text-base leading-none">
                Serving <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">King, Snohomish, Pierce, and Kitsap Counties</Link>, with statewide coordination for out-of-state executors and families managing inherited property from a distance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Search-Focused Intro Section (unchanged) */}
      <section className="bg-muted/30 py-14 md:py-20 border-y border-border">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-[hsl(0_70%_30%)] font-semibold leading-tight mb-6 text-center">
              Need Help Selling Probate Property in Washington State?
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
              If you are an executor, trustee, or family member trying to sell a home through probate in Washington State, this page should immediately explain what to expect, how the process works, and how to move forward with the right pricing and sale strategy. Real Property Planning provides probate real estate guidance designed to help families make informed decisions and avoid costly delays.
            </p>
            <ul className="space-y-3 text-foreground/80 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1 shrink-0">•</span>
                <span>Understand the probate sale process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1 shrink-0">•</span>
                <span>Price the property using defensible market and appraisal methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1 shrink-0">•</span>
                <span>Coordinate the sale from pre-listing through closing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Probate Timeline Diagram (unchanged) */}
      <section className="bg-background py-8 md:py-12">
        <div className="w-full">
          <img src={probateTimeline} alt="Probate real estate sale timeline — 7 steps from owner passing through distribution of proceeds in Washington State" style={{ maxWidth: '720px', width: '100%', margin: '2rem auto', display: 'block' }} loading="lazy" />
        </div>
      </section>

      <TrustStrip />

      {/* Your Probate Real Estate Broker & Agent (unchanged) */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-6">
              Your Probate Real Estate Broker &amp; Agent in Washington State
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When families, executors, and attorneys across the Puget Sound region search for a probate real estate broker and agent, they consistently find — and rely on — David Stein, President of Real Property Planning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              David is a Washington State Licensed Real Estate Broker and a Washington State Certified Residential Appraiser with over 20 years of combined experience in both disciplines. That dual credential is rare in the probate real estate space, and it matters: the same professional who prices your estate property for the court file is the one who lists and sells it — with no gap between valuation and market strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David specializes exclusively in probate real estate sales, inherited property, estate sales, and senior housing transitions throughout King, Snohomish, Pierce, and Kitsap Counties.
            </p>
            <h3 className="font-serif text-xl text-foreground font-semibold mb-3">Professional Affiliations</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Corporate Partner, Aging Life Care Association (ALCA)",
                "Member, National Association of Estate Planners & Councils (NAEPC)",
                "Recognized Member, National Association of Senior Advocates — Best Real Estate Agent 2026",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Real Property Planning is the hub connecting every professional and resource families need during a probate or estate property transition — with David Stein as your licensed broker and appraiser at the center of it all.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Probate vs Inherited: Two-tile accordion cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4">
              Probate Property vs. Inherited Property — What's the Difference?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This distinction matters more than most people realize. Understanding which situation you're in determines your legal authority, your timeline, and your options before you can take any action on the property.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Card 1 — Probate Property */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <Accordion type="single" collapsible>
                  <AccordionItem value="probate" className="border-b-0">
                    <div className="p-6 pb-0">
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Probate Property</h3>
                      <p className="text-muted-foreground leading-relaxed text-[15px]">
                        Court-supervised. Legal authority required before the sale can proceed.
                      </p>
                    </div>
                    <AccordionTrigger className="px-6 py-3 text-accent hover:text-gold text-sm font-medium hover:no-underline justify-start gap-1">
                      Learn more
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed text-[15px]">
                        Property being administered through court-supervised probate. Legal authority (<Link to="/terminology" className="text-accent hover:text-gold underline underline-offset-4">letters testamentary or letters of administration</Link>) is typically required before a sale can proceed. Timelines, court requirements, and fiduciary duties all affect the process.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* Card 2 — Inherited Property */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <Accordion type="single" collapsible>
                  <AccordionItem value="inherited" className="border-b-0">
                    <div className="p-6 pb-0">
                      <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Inherited Property (Non-Probate)</h3>
                      <p className="text-muted-foreground leading-relaxed text-[15px]">
                        Passes outside probate via trust or joint tenancy. Fewer legal hurdles, but still complex.
                      </p>
                    </div>
                    <AccordionTrigger className="px-6 py-3 text-accent hover:text-gold text-sm font-medium hover:no-underline justify-start gap-1">
                      Learn more
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed text-[15px]">
                        Property that passes outside of probate — through a trust, joint tenancy, or beneficiary designation. These situations may have fewer legal hurdles but still involve condition concerns, family coordination, and pricing decisions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What Makes Estate Property Sales Different: 3-col icon tile grid */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4">
              What Makes Estate Property Sales Different
            </h2>
            <p className="text-muted-foreground text-[17px] leading-[1.85] mb-10">
              Estate property sales are genuinely different from standard real estate transactions — and treating them like ordinary listings is where families and executors most often run into trouble. The challenges are legal, logistical, emotional, and financial — often all at once.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatMakesDifferentTiles.map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 flex flex-col items-start">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-base text-foreground font-semibold mb-2">{tile.label}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{tile.text}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-muted-foreground text-[17px] leading-[1.85] mt-10">
              Our team's dual background as a licensed broker and a{" "}
              <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link>{" "}
              means he approaches these situations differently than a standard listing agent. Every pricing decision is grounded in methodology. Every repair recommendation is evaluated through a{" "}
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">return-on-investment</Link>{" "}
              lens. And every communication is structured to keep attorneys, executors, and family members aligned — not competing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Timing and Coordination (unchanged) */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[hsl(0_70%_30%)] font-semibold mb-4">
              Timing and Coordination in Probate Sales
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Real Property Planning works with clients at every stage of the process — whether legal authority has been granted or not:
            </p>
            <div className="space-y-5">
              {timingConsiderations.map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <span className="text-gold font-serif text-2xl font-semibold shrink-0 leading-none pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Learn more about the complete <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">sale process from consultation to closing</Link>, or see why <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">accurate pricing is critical</Link> in estate situations.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-page CTA (unchanged) */}
      <MidPageCTA
        heading="Have a Probate or Estate Property to Discuss?"
        body="A brief conversation can help you understand your options and decide on a practical next step."
        buttonText="Schedule a Conversation"
        variant="dark"
      />

      {/* SECTION 5 — The Real Estate Side: Collapsed accordion */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How We Manage the Real Estate Side
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From vacant property carrying costs to out-of-state coordination — here's how we handle the details.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="real-estate-side" className="bg-card border border-border rounded-xl overflow-hidden data-[state=open]:border-gold/25 transition-colors">
                <AccordionTrigger className="px-6 py-5 text-left font-serif text-base md:text-lg font-semibold text-foreground hover:text-gold hover:no-underline">
                  The Real Estate Side of Estate Administration
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      Selling estate property is rarely as simple as putting a sign in the yard. These homes often sit vacant for months while legal authority is established, insurance and utility issues need to be managed, and the property's condition may deteriorate. Meanwhile, carrying costs — taxes, insurance, maintenance, and HOA fees — continue to accumulate.
                    </p>
                    <p>
                      Real Property Planning understands these pressures from working through them with hundreds of clients. We help{" "}
                      <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors</Link>, attorneys, and families develop a timeline that accounts for legal proceedings, property preparation, and market conditions — so the sale happens at the right time, not just the fastest time.
                    </p>
                    <p>
                      For properties that need work before listing, each potential improvement is evaluated through a{" "}
                      <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">return-on-investment</Link>{" "}
                      lens informed by{" "}
                      <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraisal</Link>{" "}
                      training. A $5,000 kitchen cleanup might add $15,000 in sale price; a $40,000 renovation might add only $20,000. These distinctions matter when estate funds are limited and fiduciary duties require defensible decision-making.
                    </p>
                    <p>
                      Families and executors throughout the Puget Sound area — from Seattle and Bellevue in King County to Everett and Edmonds in Snohomish County, Tacoma and Puyallup in Pierce County, and Bremerton and Silverdale in Kitsap County — face these same challenges. Real Property Planning's approach is the same regardless of location: assess the property honestly, develop a preparation strategy based on return on investment, price it correctly for its actual condition, and manage the sale with clear communication throughout.
                    </p>
                    <p>
                      For{" "}
                      <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold underline underline-offset-4">executors managing property from out of state</Link>, the entire process can be handled remotely — with photo updates, digital document signing, and regular calls to keep you informed without requiring you to travel for every step.
                    </p>
                    <p>
                      Whether the property is a mid-century rambler in Shoreline with decades of deferred maintenance or a waterfront home on Mercer Island held in a family trust, Our team brings the same structured approach: assess, plan, prepare, price, market, and close — with clear communication at every step.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Common Questions FAQ accordion (unchanged component, consistent styling) */}
      <PageFAQ faqs={commonQuestionsFaqs} heading="Common Questions About Probate Real Estate Sales in Washington State" />

      {/* Legal Disclaimer (unchanged) */}
      <section className="py-12 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
              <img src={warning3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0 mt-0.5" loading="lazy"/>
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">Important Note</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Real Property Planning provides real estate guidance, market analysis, and property sale services. Legal advice regarding probate administration, estate law, fiduciary duties, and court procedures should be directed to a qualified attorney. Real Property Planning works collaboratively with your legal team to ensure the real estate side proceeds smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial (unchanged) */}
      <section className="py-14 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProofCallout
              quote="The dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable."
              attribution="Professional Referral"
              context="Probate property sale coordination"
              variant="accent"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — Real Client Situations: 2-col grid with expandable cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Real Client Situations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Examples of how Our team has helped executors and families handle complex probate property transitions.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {probateCaseStudies.map((study, i) => (
                <CaseStudyCard key={i} study={study} />
              ))}
            </div>

            {/* CTA below cards */}
            <div className="mt-14 text-center">
              <div className="premium-divider mb-8">
                <span className="premium-divider-dot" />
              </div>
              <h3 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
                A Clear Next Step
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                If you're dealing with a situation like this, a short conversation can help bring clarity.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Schedule a Consultation
                </Button>
              </Link>
              <p className="text-muted-foreground/70 text-sm mt-4">
                No pressure. Just practical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Links (unchanged) */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">All FAQs</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/resources" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Resources</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/probate-estate-sales" />

      {/* SECTION 8 — Bottom CTA (unchanged) */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to Talk?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              Whether{" "}
              <Link to="/terminology" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">probate</Link>{" "}
              is just beginning, actively underway, or nearing completion, a short conversation can help you understand your options and develop a practical next step.
            </p>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Our team works with{" "}
              <Link to="/executors" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">executors</Link>,{" "}
              <Link to="/for-attorneys" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">attorneys</Link>, and families throughout{" "}
              <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State. Through David Stein's eXp Realty network, Real Property Planning can also connect{" "}
              <Link to="/guides/out-of-state-families" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">out-of-state</Link>{" "}
              families with trusted brokers in other states.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+12069003015">
                <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
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
};

export default ProbateEstateSales;
