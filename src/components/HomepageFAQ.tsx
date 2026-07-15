import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQProps {
  faqs?: FAQItem[];
  heading?: string;
  eyebrow?: string;
  id?: string;
  plain?: boolean;
}

const NAVY = "#272421";
const ACCENTS = ["#7f1d1d", "#246044", "#25597e", "#5d2f74"];

const PageFAQ = ({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "Common Questions",
  id = "default",
  plain = false,
}: PageFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  if (safeFaqs.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: safeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section style={{ padding: "4rem 0 5rem", background: "#f5f2ec" }}>
      <Helmet>
        <script type="application/ld+json" data-page-faq-jsonld={id}>
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>
        <p
          style={{
            color: "#6b1b22",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontSize: "15px",
            marginBottom: "0.75rem",
          }}
        >
          {eyebrow}
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(30px, 3.2vw, 42px)",
            fontWeight: 700,
            color: NAVY,
            margin: "0 0 2.5rem",
            lineHeight: 1.15,
          }}
        >
          {heading}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: plain ? "0.5rem" : "1.1rem" }}>
          {safeFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const accent = ACCENTS[i % ACCENTS.length];

            if (plain) {
              return (
                <div key={i} style={{ borderBottom: "1px solid #dfd3d4" }}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, 'Cormorant Garamond', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: NAVY,
                      }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={22}
                      color="#6b1b22"
                      strokeWidth={2.25}
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.2s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        paddingBottom: "1rem",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "18px",
                        color: "#413b36",
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                key={i}
                style={{
                  background: isOpen ? `${accent}14` : "#ffffff",
                  border: `2px solid ${accent}`,
                  borderLeft: `6px solid ${isOpen ? NAVY : accent}`,
                  borderRadius: "10px",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.1rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, 'Cormorant Garamond', serif",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: NAVY,
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    color={accent}
                    strokeWidth={2.25}
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.2s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.4rem",
                      borderTop: "1px solid #e7d1d3",
                      paddingTop: "1rem",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "18px",
                      color: "#413b36",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageFAQ;
