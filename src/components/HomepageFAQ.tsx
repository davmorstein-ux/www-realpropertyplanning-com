import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "We just lost a parent and inherited a house in Washington — what's the first thing we should do?",
    a: "Before anything else, identify whether the property will pass through probate or outside of it (through a trust, joint tenancy, or beneficiary designation). That single question determines what authority you need before listing, what your timeline looks like, and which professionals belong on the team. A short conversation usually clarifies it.",
    accent: "#7f1d1d",
  },
  {
    q: "Do we have to wait for probate to finish before we can sell the house?",
    a: "Almost never. In Washington, once Letters Testamentary or Letters of Administration are issued, the personal representative typically has authority to list and sell — often within weeks of opening probate, not at the end of it. Preparation work (assessment, cleanout planning, market analysis) can happen during the waiting period so the property is ready the moment authority is granted.",
    accent: "#5c6e9e",
  },
  {
    q: "We live out of state. Can you really handle the whole property without us flying\u00A0out?",
    a: "Yes — this is one of the most common situations we handle. We assess the property in person, send photo and video updates, coordinate cleanout and repair vendors, manage the listing and showings, and walk you through every offer by phone or video.",
    accent: "#c47c2b",
  },
  {
    q: "My siblings and I disagree about whether to sell or what it's worth. How do you handle that?",
    a: "Disagreement among heirs is almost always rooted in working from different numbers. We provide one shared, documented, valuation-grounded analysis everyone can see — comparable sales, condition adjustments, and likely net-to-estate at different price points. Most family disagreements resolve within a meeting or two once everyone is looking at the same data.",
    accent: "#7a4f8a",
  },
];

const NAVY = "#1a2744";

const HomepageFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "4rem 0 5rem", background: "#f5f2ec" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(34px, 3.5vw, 48px)",
            fontWeight: 700,
            color: NAVY,
            textAlign: "center",
            margin: "0 0 2.5rem",
            lineHeight: 1.15,
          }}
        >
          Common Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? `${faq.accent}14` : "#ffffff",
                  border: `2px solid ${faq.accent}`,
                  borderLeft: `6px solid ${isOpen ? NAVY : faq.accent}`,
                  borderRadius: "10px",
                  boxShadow: "none",
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
                    padding: "1.25rem 1.75rem",
                    height: "148px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: NAVY,
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={26}
                    color={faq.accent}
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
                      padding: "0 1.75rem 1.75rem",
                      borderTop: "1px solid #e8e0d0",
                      paddingTop: "1.25rem",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "22px",
                      color: "#2d3a4a",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
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

export default HomepageFAQ;
