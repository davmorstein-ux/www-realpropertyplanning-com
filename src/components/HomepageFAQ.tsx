import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-12 lg:py-16 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[920px] mx-auto">
          <h2 className="font-serif text-navy mb-8 text-center font-semibold text-xl md:text-2xl">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
              >
                <AccordionTrigger
                  className="text-left font-serif font-semibold text-foreground hover:text-gold hover:no-underline px-5 py-5 min-h-[64px]"
                  style={{ fontSize: "19px", lineHeight: 1.4 }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-foreground">
                  <div style={{ fontSize: "18px", lineHeight: 1.7 }}>{faq.a}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
