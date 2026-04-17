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
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const faqs = [
  { question: "Can you list a house for sale while probate is still open?", answer: "Yes. In Washington State, once the executor or personal representative has been granted letters testamentary by the court, they have the authority to list and sell the property — even while other aspects of the estate are still being settled." },
  { question: "Does the court have to approve the sale?", answer: "In most cases under Washington's nonintervention powers, the executor can sell without court approval. However, if the estate is under court supervision, the sale may require a hearing and confirmation. The estate attorney can clarify which applies." },
  { question: "What if one heir does not want to sell?", answer: "The executor's duty is to the estate as a whole, not to any single beneficiary's preference. If the will directs a sale or the estate needs liquidity, the executor generally has the authority to proceed. Clear communication and documentation are important." },
  { question: "How long does it take to sell a house during probate?", answer: "The timeline varies widely. Once legal authority is granted, the property itself may take 30 to 90 days to prepare and sell, depending on condition, market, and family coordination. The probate process itself can add several months." },
  { question: "Should you get an appraisal before selling during probate?", answer: "A professional valuation or appraisal is strongly recommended. It protects the executor from claims of selling below market value, supports fair distribution among heirs, and provides documentation for court or tax purposes." },
];

const jsonLd = articleSchema({
  headline: "Can You Sell a House During Probate in Washington State?",
  description: "Yes — once the executor has court-issued authority. Learn how the process works, what to expect, and how to avoid common mistakes when selling property during probate in Washington.",
  url: "/guides/sell-house-during-probate-washington",
  datePublished: "2026-03-28",
  dateModified: "2026-03-28",
  about: ["Probate real estate", "Selling during probate", "Washington probate", "Executor authority", "Estate property sale"],
});

const SellHouseDuringProbateWashington = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Can You Sell a House During Probate in Washington State? | Real Property Planning"
      description="Yes — once the executor has court-issued authority. Learn how the process works, what to expect, and how to avoid common mistakes when selling during probate."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Sell a House During Probate in WA", url: "/guides/sell-house-during-probate-washington" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Can You Sell a House During Probate in Washington State?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Yes. In Washington State, you can sell a house during probate — but only after the court has granted the executor or personal representative legal authority through letters testamentary.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This guide explains how the process works, what authority is needed, and how to avoid the most common mistakes families make during a probate sale.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* What This Means in Practice */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What This Means in Practice</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Many families assume that nothing can happen with a property until probate is completely finished. That is not accurate. Once the court appoints an executor and issues letters testamentary, the executor has the legal standing to list, market, negotiate, and close on a sale — often while other aspects of the estate are still being resolved.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In Washington, most estates operate under what is called "nonintervention powers." This means the executor can manage and sell estate assets without needing court approval for each transaction. This is a significant advantage — it allows the sale to proceed on a normal market timeline rather than waiting for a court hearing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, the executor must still act in the best interest of the estate and its beneficiaries. That means getting a fair price, documenting decisions, and communicating with heirs throughout the process.
          </p>
        </div>
      </div>
    </section>

    {/* Common Mistakes to Avoid */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Selling during probate is not complicated — but there are specific mistakes that can create real problems:
          </p>
          <ul className="space-y-4">
            {[
              "Listing the property before receiving letters testamentary — title companies will not close without proper documentation",
              "Accepting an offer from a family member or neighbor without a professional valuation — this can expose the executor to claims of undervaluing the asset",
              "Failing to communicate with all heirs before listing — even when the executor has full authority, surprises create conflict",
              "Skipping property preparation because of urgency — a small investment in presentation often returns significantly more at sale",
              "Assuming the estate attorney will manage the real estate process — attorneys handle the legal framework, but the property sale itself requires real estate expertise",
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

    {/* Factors That Affect the Decision */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Factors That Affect the Decision</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every probate sale is shaped by a combination of legal, financial, and family factors. Here are the most important ones:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Type of probate authority.</strong> Nonintervention powers give the executor broad discretion. Court-supervised estates may require a petition and hearing before the sale can close. Understanding which type applies to your situation is essential.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Property condition.</strong> Estate homes often need some level of preparation — cleanout, minor repairs, or staging. The condition directly affects pricing, time on market, and net proceeds to the estate.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Heir expectations.</strong> If beneficiaries have different opinions about timing, pricing, or whether to sell at all, the executor needs clear communication and documentation. A professional <Link to="/why-valuation-matters" className="text-accent hover:text-gold underline underline-offset-4">property valuation</Link> provides an objective basis for decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Market timing.</strong> While you cannot always control when the property is ready, understanding current market conditions helps set realistic expectations for price and timeline.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Dealing With a Probate Property?"
      body="A short conversation with our team can help you understand where you are in the process and what steps make sense next."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    {/* How to Think Through This Situation */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How to Think Through This Situation</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If you are an executor trying to decide whether to move forward with a sale during probate, here is a practical framework:
          </p>
          <ol className="space-y-4 list-decimal list-inside text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">Confirm your authority</strong> — verify that letters testamentary have been issued and confirm whether you have nonintervention powers</li>
            <li><strong className="text-foreground">Get a professional assessment</strong> — have a broker with estate property experience evaluate the home's condition and market value</li>
            <li><strong className="text-foreground">Communicate with heirs</strong> — share the assessment results and proposed timeline before listing</li>
            <li><strong className="text-foreground">Coordinate with the estate attorney</strong> — ensure the sale aligns with the overall estate administration plan</li>
            <li><strong className="text-foreground">Prepare the property thoughtfully</strong> — identify what level of preparation will yield the best return without unnecessary delay</li>
          </ol>
        </div>
      </div>
    </section>

    {/* When to Get Professional Guidance */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When to Get Professional Guidance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Selling a house during probate is not the same as a typical real estate transaction. The legal requirements, family dynamics, and fiduciary responsibilities add layers of complexity that most real estate professionals rarely encounter.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Working with a broker who understands probate real estate — including valuation, coordination with attorneys, and communication with multiple stakeholders — can make the difference between a smooth process and a stressful one.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you are unsure about timing, pricing, or how to handle the property, a conversation early in the process is far more valuable than waiting until problems arise.
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
            <Link to="/guides/executor-sell-house-before-probate-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Can an Executor Sell Before Probate?</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Real Estate Works</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Selling During Probate FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "How Long Does It Take to Sell a Probate Property?", description: "Understand the realistic timeline for probate property sales in Washington State.", href: "/guides/how-long-sell-probate-property" },
        { title: "What Should an Executor Do First With a House?", description: "A practical guide to the first decisions an executor needs to make about estate property.", href: "/guides/executor-first-steps-house" },
        { title: "How Probate Real Estate Works in Washington", description: "Understand the legal process, timeline, and key decisions involved.", href: "/guides/how-probate-real-estate-works" },
      ]}
    />

    <RelatedServices currentPath="/guides/sell-house-during-probate-washington" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear Next Step</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">If you're working through this situation and want help thinking it through, a short conversation can often bring clarity.</p>
          <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SellHouseDuringProbateWashington;
