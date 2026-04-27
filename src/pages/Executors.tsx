import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconExecutors from "@/assets/icons/probate-executors-services-icon-washington.webp";
import CTASection from "@/components/CTASection";

const jsonLd = articleSchema({
  headline: "Executor's Guide to Selling Estate Property in Washington State",
  description: "Practical, fiduciary-aware real estate support for Washington personal representatives — first steps, court timing, pricing defensibility, and out-of-state coordination.",
  url: "/executors",
  datePublished: "2025-01-15",
  dateModified: "2026-04-16",
  about: ["Executors", "Personal representatives", "Washington probate", "Estate property", "Fiduciary duty"],
});

const executorFaqs = [
  {
    question: "I was just named executor. What are the first three things I should do about the house?",
    answer: "First: secure it — change locks if anyone has access who shouldn't, confirm insurance is in force (vacant-home riders matter), and forward the mail. Second: don't throw anything away yet. Even if the house looks like it needs an immediate cleanout, important documents, life insurance papers, and original deeds are often inside. Third: get a date-of-death valuation on the calendar before condition starts to change. We can walk you through all three on the first call.",
  },
  {
    question: "Do I have personal liability if the house sells for less than someone thinks it was worth?",
    answer: "A personal representative who acts prudently and in good faith is generally protected — but \"prudently\" is judged by the documentation in your file. That is why we lead with a written, valuation-based pricing analysis, document marketing exposure, log every offer, and put the rationale for the accepted price in writing. If a beneficiary later questions the sale, your file already has the answer. This is also a question for your estate attorney; we coordinate directly with them.",
  },
  {
    question: "Can I make repairs to the house before probate is fully open?",
    answer: "Emergency and preservation work — roof leaks, frozen pipes, securing the property — is usually appropriate and reimbursable from the estate. Discretionary updates (kitchens, bathrooms, paint) generally should wait until you have authority and a documented decision that the spend is in the estate's interest. We help you draw that line and document the reasoning either way.",
  },
  {
    question: "What if a beneficiary wants to buy the house from the estate instead of selling on the open market?",
    answer: "This is common and entirely workable, but it requires a defensible price, written disclosure to all beneficiaries, and (in some Washington probates) court approval. We provide the independent valuation that supports the price and coordinate with your attorney on the disclosure and approval steps. Skipping this process is one of the most common ways executors get sued years later.",
  },
  {
    question: "I live in another state. Do I have to fly out to handle this?",
    answer: "Almost never. Out-of-state executors are one of our most common client situations. We do the in-person walk-through, coordinate vendors and cleanout, send photo and video updates, manage showings, and present every offer by phone or video. Most out-of-state PRs only travel if they choose to, not because they have to.",
  },
  {
    question: "How is being an executor different from being a trustee?",
    answer: "Both are fiduciary roles, but an executor (personal representative) is appointed by a court to administer a probate estate, while a trustee administers a trust outside of court supervision. Trust real estate sales typically don't require Letters or court approval, but the fiduciary duty to beneficiaries — and the need for defensible pricing — is just as real. We have separate guidance for trustees on the Trustees page.",
  },
];

const Executors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Executor's Guide to Selling Estate Property in WA"
      description="Practical, fiduciary-aware help for Washington personal representatives — securing the home, court-aligned timing, and defensible pricing."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "For Executors", url: "/executors" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-1.5 md:mb-2">
            <img src={iconExecutors} alt="Executor and personal representative real estate guidance Washington State" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
          </div>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            For Executors &amp; Personal Representatives
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
            You Were Named Executor. The House Doesn't Have to Be Yours to Figure Out Alone.
          </h1>
          <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            This page is for court-appointed and family executors managing inherited or estate property in Washington State. Most personal representatives have never sold an estate home before — and many are doing it from another state, while grieving, while siblings are calling, while the carrying costs keep running. Real Property Planning takes the property workstream off your plate: securing the home, the date-of-death valuation, the cleanout, the pricing your file can defend, and the sale itself.
          </p>
          <p className="text-primary-foreground/70 text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto mb-5">
            Local across <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4 transition-colors">King, Snohomish, Pierce, and Kitsap Counties</Link>, with full out-of-state PR support statewide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Get Executor Guidance
              </Button>
            </Link>
            <Link to="/resources/washington-executors-10-step-checklist">
              <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold">
                10-Step Executor Checklist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Quick orientation links — replaces the lonely "more information" link */}
    <section className="py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Where executors usually start</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-base">
            <Link to="/guides/executor-first-steps-house" className="text-accent hover:text-gold underline underline-offset-4">First steps with the house</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/sell-house-during-probate-washington" className="text-accent hover:text-gold underline underline-offset-4">Selling during probate in WA</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/executor-sell-before-probate" className="text-accent hover:text-gold underline underline-offset-4">Can I sell before probate?</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold underline underline-offset-4">Handling it from out of state</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/heirs-disagree-selling" className="text-accent hover:text-gold underline underline-offset-4">When heirs disagree</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={executorFaqs} heading="What Washington Executors Most Often Ask" eyebrow="For Personal Representatives" id="executors-main" />

    <PageFAQ
      faqs={[
        {
          question: "What does an executor need to do before listing an inherited home in Washington?",
          answer: "Before listing, an executor should secure the property (locks, insurance, mail forwarding), confirm Letters Testamentary or Letters of Administration have been issued by the court, obtain a date-of-death valuation for tax and accounting purposes, and coordinate with the estate attorney on whether court approval is required for the sale. Real Property Planning handles the property-side steps so the legal workstream stays clean.",
        },
        {
          question: "What is the difference between date-of-death value and listing price?",
          answer: "The date-of-death value is the fair market value of the home on the day the decedent passed — it sets the new tax basis for the estate and heirs. The listing price is what the home is offered for today, based on current market conditions, condition, and comparable sales. The two numbers are often different, especially if months have passed or the market has shifted, and both should be documented separately in the estate file.",
        },
        {
          question: "How long does it typically take to sell a home through probate in Washington State?",
          answer: "Most Washington probate sales close within 60 to 120 days from listing, though the full timeline depends on whether the personal representative has Nonintervention Powers, the home's condition, and how quickly cleanout and preparation can be completed. Real Property Planning sequences the work so the property is ready to list as soon as the estate is positioned to sell.",
        },
        {
          question: "Can an executor sell a home without court approval in Washington?",
          answer: "Yes, in most Washington probates. If the personal representative has been granted Nonintervention Powers (which is the default in most solvent estates), the home can typically be sold without separate court approval for the sale itself. Confirm this with the estate attorney before signing a listing agreement, since intervention probates and certain estate situations still require court confirmation.",
        },
      ]}
      heading="Common Executor Questions"
      eyebrow="Quick Answers"
      id="executors-quick"
    />

    <CTASection
      eyebrow="For Executors"
      heading="Tell Me What's Happening with the House"
      body="Most executors call the first time without a plan — just a situation. That's the right time to call. We'll talk through where the estate stands, what the property needs first, and how to keep your fiduciary file clean from day one."
      callLabel="Call our team — (206) 900-3015"
      messageLabel="Email About an Estate"
      microcopy="Confidential. No commitment. We can also coordinate directly with your estate attorney."
    />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default Executors;
