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

const softCta = "If you would like to discuss your specific situation, contact David for guidance.";

const faqs = [
  {
    question: "Do I need probate before selling a house in Washington?",
    answer: `It depends on how the property is titled and the estate structure. In many cases, probate or letters testamentary are required before a sale can proceed. Some properties held in trust or with survivorship rights may avoid probate entirely. The legal requirements should be reviewed with an attorney, but on the real estate side, David Stein can help you evaluate the property and prepare a plan so you are ready to move forward once authority is confirmed.\n\n${softCta}`,
  },
  {
    question: "Can a trustee sell trust-owned real estate?",
    answer: `In most cases, yes — as long as the trust document grants the trustee authority to sell. Trust sales often avoid probate court involvement but still require informed pricing, preparation decisions, and communication with beneficiaries. David Stein works with trustees to coordinate the real estate side of the process with care and professionalism.\n\n${softCta}`,
  },
  {
    question: "What if an inherited house needs repairs before sale?",
    answer: `Many inherited homes have deferred maintenance, outdated finishes, or condition issues. Whether to repair, update, or sell as-is depends on the property, the market, and the likely return on investment. David Stein helps families and executors evaluate which improvements are worth making and which are not, based on local market conditions and buyer expectations.\n\n${softCta}`,
  },
  {
    question: "How is a sale price determined for estate property?",
    answer: `Pricing estate property requires understanding condition, location, market trends, buyer demand, and comparable sales. Properties with deferred maintenance, vacancy, or unusual characteristics need more careful analysis. David Stein's dual background as a broker and state certified residential appraiser helps clients avoid the costly mistakes of overpricing or underpricing.\n\n${softCta}`,
  },
  {
    question: "What does an executor need to know before listing a property?",
    answer: `Executors should understand who has legal authority to sell, the property's current condition, whether cleanup or preparation is needed, and what the home is likely worth in its current state. David Stein helps executors evaluate these factors and build a practical plan before listing — reducing surprises and helping the process move forward smoothly.\n\n${softCta}`,
  },
  {
    question: "Can siblings sell an inherited home if they disagree?",
    answer: `Disagreements among siblings about timing, repairs, pricing, or whether to sell at all are common in inherited property situations. Having clear, objective information about the property's condition and market value often helps reduce conflict. David Stein provides a calm, fact-based perspective that helps families move toward a workable decision.\n\n${softCta}`,
  },
  {
    question: "Should an estate property be sold as-is or improved first?",
    answer: `It depends on the property, the local market, and the likely return. Some properties benefit meaningfully from targeted cleanup, paint, flooring, or landscaping. Others are better sold as-is, especially when time or budget constraints make preparation impractical. David Stein helps clients evaluate these options with a practical, market-informed perspective.\n\n${softCta}`,
  },
  {
    question: "How can an attorney or fiduciary refer a client to David?",
    answer: `Attorneys and fiduciaries can reach David directly by phone or through the contact page. David works as a real estate resource for professional referral partners, providing experienced guidance on property value, sale preparation, market strategy, and transaction coordination. His goal is to make the referring professional look well-supported throughout the process.\n\n${softCta}`,
  },
  {
    question: "What counties does David serve?",
    answer: `David Stein serves clients throughout King County, Snohomish County, Pierce County, and Kitsap County in Western Washington. Each county has its own market dynamics, pricing patterns, and buyer expectations. David's local knowledge helps clients make better-informed decisions about probate property, inherited homes, estate sales, and senior transitions.\n\n${softCta}`,
  },
  {
    question: "Can David help with senior transitions and downsizing decisions?",
    answer: `Yes. David works with seniors, adult children, attorneys, and trusted advisors navigating housing transitions including downsizing, moves to assisted living, and the sale of a longtime family home. He provides patient, practical guidance focused on timing, value, preparation, and clear communication throughout the process.\n\n${softCta}`,
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
        title="FAQ | Probate Real Estate, Inherited Property & Estate Sales | David Stein"
        description="Answers to common questions about probate real estate, inherited homes, estate sales, trust-owned property, valuation, executors, and senior transitions in Washington."
      />
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Common Questions
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Frequently Asked Questions
            </h1>
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

      <RelatedServices currentPath="/faq" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Have a question not listed here?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default FAQ;
