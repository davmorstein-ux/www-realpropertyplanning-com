import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "We just lost a parent and inherited a house in Washington — what's the first thing we should do?",
    a: "Before anything else, identify whether the property will pass through probate or outside of it (through a trust, joint tenancy, or beneficiary designation). That single question determines what authority you need before listing, what your timeline looks like, and which professionals belong on the team. A short conversation usually clarifies it.",
  },
  {
    q: "Do we have to wait for probate to finish before we can sell the house?",
    a: "Almost never. In Washington, once Letters Testamentary or Letters of Administration are issued, the personal representative typically has authority to list and sell — often within weeks of opening probate, not at the end of it. Preparation work (assessment, cleanout planning, market analysis) can happen during the waiting period so the property is ready the moment authority is granted.",
  },
  {
    q: "We live out of state. Can you really handle the whole property without us flying out?",
    a: "Yes — this is one of the most common situations we handle. We assess the property in person, send photo and video updates, coordinate cleanout and repair vendors, manage the listing and showings, and walk you through every offer by phone or video.",
  },
  {
    q: "My siblings and I disagree about whether to sell or what it's worth. How do you handle that?",
    a: "Disagreement among heirs is almost always rooted in working from different numbers. We provide one shared, documented, valuation-grounded analysis everyone can see — comparable sales, condition adjustments, and likely net-to-estate at different price points. Most family disagreements resolve within a meeting or two once everyone is looking at the same data.",
  },
];

const HomepageFAQ = () => {
  return (
    <section style={{ padding: "4rem 0 5rem", background: "#f5f2ec" }}>
      <style>{`
        .faq-heading {
          font-family: 'Cormorant Garamond', Georgia, serif !important;
          font-size: clamp(34px, 3.5vw, 48px) !important;
          font-weight: 700 !important;
          color: #1a2744 !important;
          text-align: center !important;
          margin: 0 0 2.5rem !important;
          line-height: 1.15 !important;
        }
        .faq-item {
          background: #ffffff !important;
          border: 2px solid #7f1d1d !important;
          border-left: 6px solid #7f1d1d !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          transition: border-color 0.2s ease !important;
          margin-bottom: 1.1rem !important;
        }
        .faq-item:hover {
          border-color: #5c1414 !important;
        }
        .faq-item [data-state="open"] {
          border-left-color: #1a2744 !important;
        }
        .faq-item:has([data-state="open"]) {
          background: #f7e9e9 !important;
        }
        .homepage-faq-trigger {
          padding: 1.5rem 1.75rem !important;
          min-height: 80px !important;
          gap: 1.1rem !important;
        }
        .homepage-faq-trigger span.faq-q-text {
          font-family: 'Cormorant Garamond', Georgia, serif !important;
          font-size: 24px !important;
          font-weight: 700 !important;
          color: #1a2744 !important;
          line-height: 1.35 !important;
          text-align: left !important;
        }
        .homepage-faq-trigger [data-lucide], .homepage-faq-trigger svg {
          width: 28px !important;
          height: 28px !important;
          color: #7f1d1d !important;
          flex-shrink: 0 !important;
        }
        .homepage-faq-answer {
          font-family: Inter, system-ui, sans-serif !important;
          font-size: 20px !important;
          color: #2d3a4a !important;
          line-height: 1.75 !important;
          padding: 0 1.75rem 1.75rem 1.75rem !important;
          border-top: 1px solid #e8e0d0 !important;
          padding-top: 1.25rem !important;
        }
      `}</style>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="faq-heading">Common Questions</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="faq-item" style={{ border: "none" }}>
              <AccordionTrigger className="homepage-faq-trigger">
                <span className="faq-q-text">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="homepage-faq-answer">{faq.a}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default HomepageFAQ;
