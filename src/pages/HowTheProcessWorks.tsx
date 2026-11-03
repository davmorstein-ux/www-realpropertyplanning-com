import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Link } from "react-router-dom";
import BackToPreviousPage from "@/components/BackToPreviousPage";
import ProbateStartHere from "@/components/ProbateStartHere";

/* Where "Back to …" goes when the visitor arrived from outside the site. */
const BACK_FALLBACK = { href: "/probate-estate-sales", label: "Probate & Estate Sales" };

/* HERO IMAGE.
   Replaces the small 3D clipboard-and-gavel icon that previously sat centred
   on the navy band. The new artwork is a full-width scene, so it now runs
   edge to edge above the band — matching the hero pattern used on
   /senior-transitions, /understanding-housing-care-options, and the
   senior-living pages.

   The phone icon import was removed along with the hero button that used it. */

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "Every sale begins with a conversation about the property, the people involved, and the reasons for selling. A licensed broker asks about legal authority, family dynamics, timeline pressures, and financial goals. For an executor handling a first estate, an attorney referring a client, or a family helping a parent move, this conversation sets the plan for the steps that follow.",
  },
  {
    number: "02",
    title: "Property Review and Pricing Discussion",
    text: "A licensed broker visits the property to assess its condition, identify features that affect value, and evaluate what the market is likely to see. A broker with appraisal training can give a realistic pricing view that accounts for deferred maintenance, outdated systems, unusual layouts, and other condition factors that automated estimates often miss.",
  },
  {
    number: "03",
    title: "Coordination of Cleanout, Repairs, and Vendor Management",
    text: "Estate and inherited homes often need significant work before they are ready for the market. Personal belongings need to be sorted and removed. Deferred repairs need to be addressed. Landscaping, cleaning, and sometimes light staging are needed to present the property effectively. A broker experienced in estate property can coordinate this: scheduling vendors, managing timelines, and overseeing the work so you do not have to be on-site or manage contractors yourself.",
  },
  {
    number: "04",
    title: "Listing Preparation and Marketing Strategy",
    text: "Once the property is ready, your listing broker develops a marketing plan tailored to the home's specific strengths, target buyer profile, and local market conditions. This includes professional photography, listing descriptions, pricing, and exposure through MLS, online platforms, and agent networks.",
  },
  {
    number: "05",
    title: "Offer Review, Negotiation, and Contract Management",
    text: "When offers arrive, your broker reviews each one for price, terms, contingencies, financing strength, and closing timeline, lays out the options, and negotiates on your behalf to protect the estate's interests. With multiple offers, a broker can help you weigh competing bids with a focus on certainty of closing and net proceeds.",
  },
  {
    number: "06",
    title: "Escrow and Closing Coordination",
    text: "From accepted offer to closing day, your broker manages the transaction details: inspection responses, appraisal coordination, title issues, repair negotiations, and communication with all parties including the buyer's agent, escrow officer, and your attorney if applicable. A broker tracks deadlines, anticipates problems, and keeps the transaction moving toward closing.",
  },
  {
    number: "07",
    title: "Post-Sale Support",
    text: "After closing, a broker is usually still available for questions about final documentation, tax-related inquiries you may want to discuss with your CPA, or any loose ends related to the property. For families with ongoing estate matters or other properties, keeping the same contact can help with later real estate needs.",
  },
];

const faqs = [
  {
    question: "What is the typical process for selling an inherited or probate property?",
    answer:
      "The process generally follows seven steps: initial consultation, property evaluation and pricing discussion, preparation coordination, listing and marketing, offer review and negotiation, escrow and closing management, and post-sale support. Real Property Planning explains each step so families and executors know what to expect, and can point you toward professionals who handle the work.",
  },
  {
    question: "How long does the entire process take from start to closing?",
    answer:
      "Timelines vary depending on property condition, legal authority, preparation needs, and market conditions. Simple situations may take 2-3 months; more complex matters with significant cleanup, repairs, or multi-party coordination may take longer. Understanding these variables early helps set realistic expectations, and the plan can be adjusted as circumstances evolve.",
  },
  {
    question: "Do I need to be local to manage an estate property sale?",
    answer:
      "No. Executors and trustees often manage property from out of state. A local broker can handle the on-site coordination and send regular updates, so you can take part in decisions without being there in person.",
  },
  {
    question: "What happens if the property needs major repairs?",
    answer:
      "Repair decisions are best evaluated with a practical, cost-benefit perspective. Some improvements meaningfully increase sale price; others are not worth the cost or delay. A broker can coordinate vendors, obtain estimates, and help you decide which investments make sense based on the property's market position and your timeline.",
  },
  {
    question: "How is an estate-focused broker different from a regular real estate agent?",
    answer:
      "Most agents focus on listing and selling. A broker who specialises in estate property usually starts earlier, with property assessment, valuation analysis, preparation coordination, and family communication, and continues through closing and beyond. Appraisal credentials, where a broker holds them, add pricing depth that most agents do not have.",
  },
];

const HowTheProcessWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How Estate & Probate Property Sales Work in WA"
        description="A step-by-step look at selling estate, probate, and inherited property in Washington State — from initial consultation through closing."
        jsonLd={articleSchema({
          headline: "How the Process Works — Estate Property Sales",
          description:
            "A seven-step overview of how estate, probate, and inherited property sales work in Washington State.",
          url: "/how-the-process-works",
          datePublished: "2025-01-15",
          dateModified: "2026-03-16",
          about: [
            "Estate sale process",
            "Probate property sales",
            "Real estate consultation",
            "Property preparation",
            "Offer negotiation",
            "Closing coordination",
          ],
        })}
      />
      <BreadcrumbSchema items={[{ name: "How the Process Works", url: "/how-the-process-works" }]} />
      <Header />
      <main id="main-content">
        <ProbateStartHere />
        <HeroBandTitle as="h1">How the Process Works</HeroBandTitle>

        <BackToPreviousPage variant="top" fallback={BACK_FALLBACK} />

        {/* WHAT THIS PAGE IS ABOUT (Sept 29, 2026). The owner: "There has to be
            more information for what process this page is talking about." The
            h1 stays "How the Process Works" (owner's decision, second audit);
            this section names the process in the first lines a visitor reads. */}
        <section className="pb-4 bg-background">
          <div className="container px-6 lg:px-8">
            {/* index.css zeroes the first section's top padding sitewide; the gap goes inside. */}
            <div className="max-w-[900px] mx-auto" style={{ paddingTop: 32 }}>
              <p className="text-foreground/80 font-semibold uppercase tracking-[0.14em] text-sm mb-3">
                Selling an estate, probate, trust or inherited home in Washington
              </p>
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
                What process is this?
              </h2>
              <div className="space-y-4 text-foreground text-lg leading-relaxed">
                <p>
                  This page walks through how a house is sold when the owner has died, the home is held in a trust, or a
                  parent is moving out of the family home: seven steps, from the first conversation with a listing broker
                  to the questions that come up after closing. It explains what a licensed broker usually does at each
                  step, so you know what to expect and what to ask.
                </p>
                <p>
                  <strong>It is written for</strong> executors and personal representatives, trustees, heirs selling a
                  home they inherited, adult children helping a parent move, and the attorneys, CPAs and other
                  professionals who refer them.
                </p>
                <p>
                  <strong>Before step 1: who can sign.</strong> Someone has to have legal authority to sell. For a probate
                  estate, that is usually the personal representative appointed by the court; for a trust, the trustee;
                  for a living owner, the owner or an agent under a power of attorney. Confirm this with an attorney
                  first. See{" "}
                  <Link
                    to="/estate-probate-inherited-property/probate-and-legal-authority"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    Probate and legal authority
                  </Link>
                  .
                </p>
                <p>
                  <strong>What this page is not:</strong> it is not the court side of probate, and it is not legal or tax
                  advice. Real Property Planning explains the process; the work itself is done by an independent,
                  licensed real estate broker you choose. How the site's featured broker is paid is on the{" "}
                  <Link to="/compensation-disclosure" className="text-accent hover:text-gold underline underline-offset-4">
                    compensation disclosure
                  </Link>{" "}
                  page.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-foreground font-semibold mt-10 mb-4">The seven steps at a glance</h2>
              <ol className="rpp-process-toc grid gap-2 sm:grid-cols-2 text-foreground text-lg" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map((step) => (
                  <li key={step.number}>
                    <a href={`#step-${step.number}`} className="text-accent hover:text-gold underline underline-offset-4">
                      <span className="font-semibold">{step.number}</span> {step.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* DirectAnswerBlock removed.
          Its answer read "Real Property Planning follows a clear seven-step
          process: initial consultation, property evaluation and pricing
          discussion..." — again describing the hub as performing the work.

          Worth restoring later in neutral form. The question itself
          ("How do estate and probate property sales work in Washington
          State?") is valuable for search and AI answer engines, and can be
          answered without attributing the services to Real Property Planning.
          Ask and I will write that version. */}

        {/* Seven Steps */}
        <section className="pt-10 pb-20 lg:pb-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">The seven steps</h2>
              <div className="grid gap-5 lg:gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    id={`step-${step.number}`}
                    style={{ scrollMarginTop: 110 }}
                    className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start"
                  >
                    {/* WAS text-muted-foreground/30 — a 30% opacity step number,
                      effectively invisible. Now a solid muted tone. */}
                    <span className="text-foreground/70 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground leading-[1.75] m-0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Makes This Process Different — Accordion */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                How Is Selling Estate Property Different From a Standard Home Sale?
              </h2>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                Estate, probate, and senior transition sales differ from a conventional sale in three ways:
              </p>
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    value: "complexity",
                    q: "Why are estate sales more complex?",
                    a: "The decision-maker may not live locally. Legal authority may not yet be established. The property may have been vacant for months. Family members may disagree about timing, pricing, or whether to sell at all.",
                  },
                  {
                    value: "early",
                    q: "Why does an estate-focused broker start earlier than most agents?",
                    a: "Early planning helps avoid the most common and costly mistakes. Work often begins before the property is ready to list: assessing condition, coordinating with attorneys, and helping families agree on a plan.",
                  },
                  {
                    value: "adapt",
                    q: "How does the process adapt to each situation?",
                    a: "Some clients need sale guidance right away. Others need time, planning, family coordination, or help with valuation. The timeline changes to fit: compressed for a court-ordered sale, longer when a family needs time to decide.",
                  },
                ].map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
                  >
                    <AccordionTrigger
                      className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* MidPageCTA removed. Its "Schedule a Consultation" button implied the
          hub books consultations directly — the same attribution problem
          cleaned up elsewhere on this page. */}

        <PageFAQ faqs={faqs} heading="Process FAQs" />

        {/* The Real Estate Side of Estate Administration */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                The Real Estate Side of Estate Administration
              </h2>
              <div className="space-y-5 text-foreground leading-relaxed">
                <p>
                  Selling estate property usually takes more than listing it. These homes often sit vacant for months
                  while legal authority is established, insurance and utility issues need to be managed, and the
                  property's condition may deteriorate. Meanwhile, carrying costs (taxes, insurance, maintenance, and
                  HOA fees) keep adding up.
                </p>
                <p>
                  Because these pressures are so common, a good licensed broker helps{" "}
                  <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">
                    executors
                  </Link>
                  , attorneys, and families build a timeline that accounts for legal proceedings, property
                  preparation, and market conditions, so the sale is timed for the estate's needs rather than for speed alone.
                  Real Property Planning explains how that works; the site's featured broker is one broker who does it, and you can contact the broker directly or hire anyone you choose.
                </p>
                <p>
                  For properties that need work before listing, each potential improvement can be weighed through a{" "}
                  <Link
                    to="/why-valuation-matters"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    return-on-investment
                  </Link>{" "}
                  lens informed by{" "}
                  <Link
                    to="/real-estate-appraiser"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    certified appraisal
                  </Link>{" "}
                  training. A $5,000 kitchen cleanup might add $15,000 in sale price; a $40,000 renovation might add
                  only $20,000. These distinctions matter when estate funds are limited and fiduciary duties require
                  defensible decision-making.
                </p>
                <p>
                  The same issues come up for families and executors across the Puget Sound area: Seattle and Bellevue
                  in King County, Everett and Edmonds in Snohomish County, Tacoma and Puyallup in Pierce County, and
                  Bremerton and Silverdale in Kitsap County. The approach does not change with location: assess the
                  property honestly, plan preparation based on return on investment, price it for its actual condition,
                  and keep everyone informed through the sale.
                </p>
                <p>
                  For{" "}
                  <Link
                    to="/guides/out-of-state-families"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    executors managing property from out of state
                  </Link>
                  , a broker can usually handle the process remotely, using photo updates, digital document signing, and
                  regular calls, so you do not have to travel for every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-base font-semibold text-foreground mb-3">Related Resources</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/probate-estate-sales"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4"
                >
                  Probate &amp; Estate Sales
                </Link>
                <span className="text-foreground" aria-hidden="true">
                  ·
                </span>
                <Link
                  to="/executors"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4"
                >
                  For Executors
                </Link>
                <span className="text-foreground" aria-hidden="true">
                  ·
                </span>
                <Link
                  to="/for-attorneys"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4"
                >
                  For Attorneys
                </Link>
                <span className="text-foreground" aria-hidden="true">
                  ·
                </span>
                <Link
                  to="/why-valuation-matters"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4"
                >
                  Why Valuation Matters
                </Link>
                <span className="text-foreground" aria-hidden="true">
                  ·
                </span>
                <Link
                  to="/senior-transitions"
                  className="text-accent hover:text-gold transition-colors underline underline-offset-4"
                >
                  Senior Transitions
                </Link>
                <span className="text-foreground" aria-hidden="true">
                  ·
                </span>
                <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4">
                  All FAQs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/how-the-process-works" />

        <BackToPreviousPage fallback={BACK_FALLBACK} />

        {/* Bottom CTA removed — the navy "Want to talk through your situation
          and next steps?" band with its "Schedule a Consultation" button.
          The page is now informational end to end. Onward paths remain via
          the Related Resources links and RelatedServices cards above, and
          Contact is in both the header and the footer on every page. */}

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowTheProcessWorks;
