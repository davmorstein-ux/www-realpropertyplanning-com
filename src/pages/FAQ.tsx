import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const softCta = "If you would like to discuss your specific situation, contact us for guidance.";

const faqs = [
  {
    question: "How do executors sell a house in Washington State?",
    answer: `In Washington, an executor typically needs letters testamentary or letters of administration from the probate court before they have legal authority to sell real property. Once authority is established, the executor can engage a real estate broker, prepare the home for sale, and proceed with the listing and transaction. The process involves coordinating legal timelines, property preparation, pricing, and communication with heirs and beneficiaries. Real Property Planning guides executors through each step — from initial property assessment to closing.\n\n${softCta}`,
  },
  {
    question: "What happens to a house during probate?",
    answer: `During probate, the home becomes part of the estate and is managed by the executor or personal representative appointed by the court. The property must be maintained, secured, and insured throughout the process. Depending on the terms of the will and the needs of the estate, the home may be sold to pay debts, distributed to beneficiaries, or held temporarily. Real Property Planning works with executors and attorneys to evaluate the property, develop a plan, and manage the real estate side of the process.\n\n${softCta}`,
  },
  {
    question: "Can a house be sold before probate is completed?",
    answer: `In some cases, yes — but it depends on the estate structure, the court's requirements, and whether the executor has been granted authority to sell. Some properties held in trust or with survivorship rights may not require probate at all. In other situations, the court may need to approve the sale before it can close. Real Property Planning works with estate attorneys to align the real estate timeline with the legal process, so the sale moves forward as efficiently as possible.\n\n${softCta}`,
  },
  {
    question: "How do families move elderly parents into assisted living?",
    answer: `Moving an elderly parent into assisted living involves many moving parts — finding the right community, managing the emotional transition, sorting through a lifetime of belongings, and often selling the family home. Families benefit from working with senior move managers, senior living placement services, and a real estate broker experienced in senior transitions. Real Property Planning provides patient, practical guidance on the property side, coordinating the home sale with the transition timeline so families aren't overwhelmed.\n\n${softCta}`,
  },
  {
    question: "Do I need probate before selling a house in Washington?",
    answer: `It depends on how the property is titled and the estate structure. In many cases, probate or letters testamentary are required before a sale can proceed. Some properties held in trust or with survivorship rights may avoid probate entirely. The legal requirements should be reviewed with an attorney, but on the real estate side, Real Property Planning can help you evaluate the property and prepare a plan so you are ready to move forward once authority is confirmed.\n\n${softCta}`,
  },
  {
    question: "Can a trustee sell trust-owned real estate?",
    answer: `In most cases, yes — as long as the trust document grants the trustee authority to sell. Trust sales often avoid probate court involvement but still require informed pricing, preparation decisions, and communication with beneficiaries. Real Property Planning works with trustees to coordinate the real estate side of the process with care and professionalism.\n\n${softCta}`,
  },
  {
    question: "What if an inherited house needs repairs before sale?",
    answer: `Many inherited homes have deferred maintenance, outdated finishes, or condition issues. Whether to repair, update, or sell as-is depends on the property, the market, and the likely return on investment. Real Property Planning helps families and executors evaluate which improvements are worth making and which are not, based on local market conditions and buyer expectations.\n\n${softCta}`,
  },
  {
    question: "How is a sale price determined for estate property?",
    answer: `Pricing estate property requires understanding condition, location, market trends, buyer demand, and comparable sales. Properties with deferred maintenance, vacancy, or unusual characteristics need more careful analysis. Real Property Planning's dual background as a broker and state certified residential appraiser helps clients avoid the costly mistakes of overpricing or underpricing.\n\n${softCta}`,
  },
  {
    question: "What does an executor need to know before listing a property?",
    answer: `Executors should understand who has legal authority to sell, the property's current condition, whether cleanup or preparation is needed, and what the home is likely worth in its current state. Real Property Planning helps executors evaluate these factors and build a practical plan before listing — reducing surprises and helping the process move forward smoothly.\n\n${softCta}`,
  },
  {
    question: "Can siblings sell an inherited home if they disagree?",
    answer: `Disagreements among siblings about timing, repairs, pricing, or whether to sell at all are common in inherited property situations. Having clear, objective information about the property's condition and market value often helps reduce conflict. Real Property Planning provides a calm, fact-based perspective that helps families move toward a workable decision.\n\n${softCta}`,
  },
  {
    question: "Should an estate property be sold as-is or improved first?",
    answer: `It depends on the property, the local market, and the likely return. Some properties benefit meaningfully from targeted cleanup, paint, flooring, or landscaping. Others are better sold as-is, especially when time or budget constraints make preparation impractical. Real Property Planning helps clients evaluate these options with a practical, market-informed perspective.\n\n${softCta}`,
  },
  {
    question: "How can an attorney or fiduciary refer a client to Real Property Planning?",
    answer: `Attorneys and fiduciaries can reach out directly by phone or through the contact page. Real Property Planning works as a real estate resource for professional referral partners, providing experienced guidance on property value, sale preparation, market strategy, and transaction coordination. The goal is to make the referring professional look well-supported throughout the process.\n\n${softCta}`,
  },
  {
    question: "What counties does Real Property Planning serve?",
    answer: `Real Property Planning serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County throughout Washington State. Each county has its own market dynamics, pricing patterns, and buyer expectations. Local knowledge helps clients make better-informed decisions about probate property, inherited homes, estate sales, and senior transitions.\n\n${softCta}`,
  },
  {
    question: "Can Real Property Planning help with senior transitions and downsizing decisions?",
    answer: `Yes. Real Property Planning works with seniors, adult children, attorneys, and trusted advisors navigating housing transitions including downsizing, moves to assisted living, and the sale of a longtime family home. Real Property Planning provides patient, practical guidance focused on timing, value, preparation, and clear communication throughout the process.\n\n${softCta}`,
  },
  {
    question: "Do I need an appraisal before selling inherited property?",
    answer: `Not always, but understanding the property's true market value is critical — especially in estate situations where pricing must be defensible. A broker with appraisal credentials, like Real Property Planning, can provide valuation-informed pricing that satisfies fiduciary obligations without the cost and delay of a formal appraisal in every case.\n\n${softCta}`,
  },
  {
    question: "Can an executor sell a house before probate is complete?",
    answer: `In some cases, an executor may be able to sell before the full probate process concludes — but it depends on the estate structure, the will, and whether the court has granted authority. Our team works with estate attorneys to align the real estate timeline with legal proceedings so the sale happens at the right time.\n\n${softCta}`,
  },
  {
    question: "What repairs should be done before selling an estate property?",
    answer: `It depends on the property, the budget, and the likely return. Targeted improvements like paint, flooring, and landscaping can increase value significantly. Expensive renovations rarely make financial sense for estate property. Our team evaluates each situation using his appraisal background to recommend only the improvements worth making.\n\n${softCta}`,
  },
  {
    question: "How do siblings decide what to do with an inherited house?",
    answer: `Disagreements among siblings are common and understandable. Clear, objective information about the property's condition and market value helps reduce conflict. Our team provides a calm, data-driven perspective that helps families move toward a workable decision — whether that means selling, keeping, or renting the property.\n\n${softCta}`,
  },
  {
    question: "What should an attorney look for in a probate real estate broker?",
    answer: `Attorneys should look for a broker with probate experience, valuation expertise, clear communication skills, and the ability to coordinate with legal timelines and multiple decision-makers. Real Property Planning's dual credentials as a broker and certified residential appraiser, combined with 20+ years of estate-focused experience, make him a reliable partner for attorneys throughout Washington State.\n\n${softCta}`,
  },
  {
    question: "How do you prepare a senior's home for sale during a move?",
    answer: `Preparing a senior's home typically involves sorting decades of belongings, coordinating cleanout, addressing deferred maintenance, and managing the timeline alongside a care transition. Our team works with families and senior move managers to handle the real estate side with patience and practical planning.\n\n${softCta}`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-faq-page-jsonld]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-page-jsonld", "true");
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-faq-page-jsonld]');
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate FAQ | Real Property Planning"
        description="Answers to common questions about probate real estate, inherited homes, estate sales, trust-owned property, valuation, executors, and senior transitions in Washington."
      />
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Common Questions
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Find answers to common questions about probate real estate, inherited property, estate sales, valuation, executors, trustees, and senior transitions in Washington.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
                >
                  <AccordionTrigger className="text-left font-serif text-base md:text-lg font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Guides</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/appraisal-vs-cma" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Appraisal vs. CMA</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Families</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/senior-transition-differences" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transition Differences</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/faq" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Have a question not listed here?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Our team welcomes confidential conversations with attorneys, executors, trustees, families, and financial professionals. A short call can often clarify your next steps.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Contact us
                </Button>
              </Link>
              <a
                href="https://www.zillow.com/profile/dstein2112#reviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline3d" size="lg" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground">
                  Read Reviews on Zillow
                </Button>
              </a>
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

export default FAQ;
