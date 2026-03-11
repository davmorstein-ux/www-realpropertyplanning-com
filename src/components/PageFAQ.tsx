import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  faqs: FAQItem[];
  heading?: string;
  eyebrow?: string;
}

const PageFAQ = ({ faqs, heading = "Frequently Asked Questions", eyebrow = "Common Questions" }: PageFAQProps) => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-page-faq-jsonld]');
    if (existingScript) existingScript.remove();

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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-faq-jsonld", "true");
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-page-faq-jsonld]');
      if (s) s.remove();
    };
  }, [faqs]);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">{eyebrow}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
            {heading}
          </h2>
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
                <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PageFAQ;
