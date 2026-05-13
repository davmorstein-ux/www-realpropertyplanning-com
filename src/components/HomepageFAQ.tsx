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
    <section className="py-10 md:py-12 bg-secondary">
      <div className="container px-5 md:px-8">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-serif text-navy mb-6 md:mb-7 text-center font-semibold text-[34px] md:text-[44px] leading-tight">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="homepage-faq-item rounded-xl overflow-hidden transition-colors"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #C9A84C',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <AccordionTrigger className="homepage-faq-trigger text-left px-5 md:px-6 py-4 md:py-5 min-h-[68px] gap-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-navy [&>svg]:shrink-0">
                  <span className="text-base md:text-lg font-bold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-foreground">
                  <div className="homepage-faq-answer">{faq.a}</div>
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
