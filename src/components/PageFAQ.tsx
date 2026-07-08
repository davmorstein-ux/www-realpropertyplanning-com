import { Helmet } from "react-helmet-async";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  faqs: FAQItem[];
  heading?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  id?: string;
  plain?: boolean;
}

const PageFAQ = ({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "Common Questions",
  eyebrowClassName = "text-base",
  id = "default",
  plain = false,
}: PageFAQProps) => {
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

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <Helmet>
        <script type="application/ld+json" data-page-faq-jsonld={id}>
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>
      <style>{`
        .rpp-faq-item {
          background-color: #ffffff !important;
          border: 1px solid #e0dbd2 !important;
          border-left: 5px solid #b8963e !important;
          border-radius: 14px !important;
          box-shadow: 0 3px 14px rgba(26,39,68,0.07) !important;
          transition: box-shadow 0.2s ease, border-left-color 0.2s ease !important;
        }
        .rpp-faq-item:hover {
          box-shadow: 0 8px 24px rgba(26,39,68,0.13) !important;
        }
        .rpp-faq-item[data-state="open"] {
          border-left-color: #7f1d1d !important;
          box-shadow: 0 8px 24px rgba(26,39,68,0.13) !important;
        }
        .rpp-faq-badge {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 34px !important;
          height: 34px !important;
          border-radius: 50% !important;
          background-color: #f5f2ec !important;
          color: #b8963e !important;
          flex-shrink: 0 !important;
        }
        main section .rpp-faq-eyebrow-large {
          font-size: 42px !important;
        }
      `}</style>
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <p className={`text-gold font-bold tracking-[0.2em] uppercase mb-3 ${eyebrowClassName}`}>{eyebrow}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">{heading}</h2>
          <Accordion type="single" collapsible className={plain ? "space-y-1" : "space-y-4"}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className={plain ? "bg-transparent border-0 rounded-none shadow-none" : "rpp-faq-item overflow-hidden"}
              >
                <AccordionTrigger
                  className={
                    plain
                      ? "text-left font-serif text-foreground hover:text-gold hover:no-underline bg-transparent border-0 rounded-none shadow-none"
                      : "text-left font-serif text-foreground hover:text-gold hover:no-underline gap-4"
                  }
                  style={{ padding: "14px 20px", fontSize: "20px", fontWeight: "700" }}
                >
                  {plain ? (
                    faq.question
                  ) : (
                    <span className="flex items-center gap-4">
                      <span className="rpp-faq-badge">
                        <HelpCircle size={18} strokeWidth={2.25} aria-hidden="true" />
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  )}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed"
                  style={!plain ? { paddingLeft: "70px" } : undefined}
                >
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
