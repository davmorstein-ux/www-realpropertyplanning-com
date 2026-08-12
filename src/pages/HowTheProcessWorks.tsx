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
    text: "Every engagement begins with a conversation about the property, the people involved, and the circumstances driving the decision. A licensed broker listens to understand the full picture — legal authority, family dynamics, timeline pressures, and financial goals. Whether you are an executor managing your first estate, an attorney referring a client, or a family navigating a senior transition, this conversation establishes the foundation for everything that follows.",
  },
  {
    number: "02",
    title: "Property Review and Pricing Discussion",
    text: "A licensed broker visits the property to assess its condition, identify features that affect value, and evaluate what the market is likely to see. The assessment draws on certified appraisal experience — giving you a realistic pricing perspective that accounts for deferred maintenance, outdated systems, unusual layouts, and condition-related factors that automated tools consistently miss.",
  },
  {
    number: "03",
    title: "Coordination of Cleanout, Repairs, and Vendor Management",
    text: "Many estate and inherited homes need significant work before they are ready for the market. Personal belongings need to be sorted and removed. Deferred repairs need to be addressed. Landscaping, cleaning, and sometimes light staging are needed to present the property effectively. A broker experienced in estate property coordinates this process — scheduling vendors, managing timelines, and overseeing the work so you do not have to be on-site or manage contractors yourself.",
  },
  {
    number: "04",
    title: "Listing Preparation and Marketing Strategy",
    text: "Once the property is ready, your listing broker develops a marketing plan tailored to the home's specific strengths, target buyer profile, and local market conditions. This includes professional photography, compelling listing descriptions, strategic pricing, and targeted exposure through MLS, online platforms, and agent networks.",
  },
  {
    number: "05",
    title: "Offer Review, Negotiation, and Contract Management",
    text: "When offers arrive, your broker reviews each one thoroughly — evaluating not just the price, but the terms, contingencies, financing strength, and closing timeline. The options are presented clearly, and your broker negotiates on your behalf to protect the estate's interests. In multi-offer situations, a broker helps you navigate competing bids with a strategy focused on certainty of closing and net proceeds.",
  },
  {
    number: "06",
    title: "Escrow and Closing Coordination",
    text: "From accepted offer to closing day, your broker manages the transaction details — inspection responses, appraisal coordination, title issues, repair negotiations, and communication with all parties including the buyer's agent, escrow officer, and your attorney if applicable. A broker tracks deadlines, anticipates problems, and keeps the transaction moving toward a successful close.",
  },
  {
    number: "07",
    title: "Post-Sale Support",
    text: "After closing, a good broker remains available for questions about final documentation, tax-related inquiries you may want to discuss with your CPA, or any loose ends related to the property. For families managing ongoing estate matters or additional properties, that continuity and single point of contact matters for future real estate needs.",
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
      "No. Many clients — especially executors and trustees — are managing property from out of state. A local broker can provide hands-on coordination and keep you informed through regular updates, so you can participate in decisions without needing to be physically present.",
  },
  {
    question: "What happens if the property needs major repairs?",
    answer:
      "Repair decisions are best evaluated with a practical, cost-benefit perspective. Some improvements meaningfully increase sale price; others are not worth the cost or delay. A broker can coordinate vendors, obtain estimates, and help you decide which investments make sense based on the property's market position and your timeline.",
  },
  {
    question: "How is an estate-focused broker different from a regular real estate agent?",
    answer:
      "Most agents focus on listing and selling. A broker who specialises in estate property starts earlier — with property assessment, valuation analysis, preparation coordination, and family communication — and continues through closing and beyond. Appraisal credentials, where a broker holds them, add pricing depth that standard agents cannot offer.",
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
        <HeroBandTitle as="h1">How the Process Works</HeroBandTitle>

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
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
              <div className="grid gap-5 lg:gap-6">
                {steps.map((step) => (
                  <div
                    key={step.number}
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
                Estate, probate, and senior transition sales are fundamentally different from conventional transactions.
                Here's why:
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
                    a: "Early planning prevents the most common and costly mistakes. Work often begins before the property is ready to list — assessing condition, coordinating with attorneys, and helping families align on strategy.",
                  },
                  {
                    value: "adapt",
                    q: "How does the process adapt to each situation?",
                    a: "Some clients need immediate sale guidance. Others need time, planning, family coordination, or valuation-related clarity. The process adapts — whether that means a compressed timeline for a court-ordered sale or a longer runway for family decision-making.",
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
                  Selling estate property is rarely as simple as putting a sign in the yard. These homes often sit
                  vacant for months while legal authority is established, insurance and utility issues need to be
                  managed, and the property's condition may deteriorate. Meanwhile, carrying costs — taxes, insurance,
                  maintenance, and HOA fees — continue to accumulate.
                </p>
                <p>
                  Real Property Planning exists because these pressures are so common, and connects{" "}
                  <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">
                    executors
                  </Link>
                  , attorneys, and families develop a timeline that accounts for legal proceedings, property
                  preparation, and market conditions — so the sale happens at the right time, not just the fastest time.
                </p>
                <p>
                  For properties that need work before listing, each potential improvement is evaluated through a{" "}
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
                  Families and executors throughout the Puget Sound area — from Seattle and Bellevue in King County to
                  Everett and Edmonds in Snohomish County, Tacoma and Puyallup in Pierce County, and Bremerton and
                  Silverdale in Kitsap County — face these same challenges. The right approach is the same regardless of
                  location: assess the property honestly, develop a preparation strategy based on return on investment,
                  price it correctly for its actual condition, and manage the sale with clear communication throughout.
                </p>
                <p>
                  For{" "}
                  <Link
                    to="/guides/out-of-state-families"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    executors managing property from out of state
                  </Link>
                  , the entire process can be handled remotely — with photo updates, digital document signing, and
                  regular calls to keep you informed without requiring you to travel for every step.
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
