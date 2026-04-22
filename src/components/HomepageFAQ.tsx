import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "We just lost a parent and inherited a house in Washington — what's the first thing we should do?",
    a: "Before anything else, identify whether the property will pass through probate or outside of it (through a trust, joint tenancy, or beneficiary designation). That single question determines what authority you need before listing, what your timeline looks like, and which professionals belong on the team. A short conversation usually clarifies it. We then help you sequence the next steps — securing the home, ordering a date-of-death valuation if needed, and coordinating with the estate attorney before any sale work begins.",
  },
  {
    q: "Do we have to wait for probate to finish before we can sell the house?",
    a: "Almost never. In Washington, once Letters Testamentary or Letters of Administration are issued, the personal representative typically has authority to list and sell — often within weeks of opening probate, not at the end of it. We can also do all of the preparation work (assessment, cleanout planning, repair scoping, market analysis) during the waiting period so the property is ready to list the moment authority is granted.",
  },
  {
    q: "How is your pricing different from a Zillow estimate or a typical agent's CMA?",
    a: "Automated estimates and standard CMAs assume a home is in average market-ready condition. Estate and senior-owned homes rarely are. Because Real Property Planning is also a Washington State Certified Residential Appraiser, every pricing recommendation is built the way an appraiser would build it — adjusting for actual condition, effective age, functional issues, and the specific micro-market — not the way a listing agent guesses at a number to win a meeting.",
  },
  {
    q: "We live out of state. Can you really handle the whole property without us flying out?",
    a: "Yes — this is one of the most common situations we handle. We assess the property in person, send photo and video updates, coordinate cleanout and repair vendors, manage the listing and showings, and walk you through every offer by phone or video. Out-of-state executors and adult children typically never need to travel unless they want to be present for a specific milestone.",
  },
  {
    q: "My siblings and I disagree about whether to sell or what it's worth. How do you handle that?",
    a: "Disagreement among heirs is almost always rooted in working from different numbers. We provide one shared, documented, valuation-grounded analysis that everyone can see — comparable sales, condition adjustments, holding-cost math, and likely net-to-estate at different price points. Most family disagreements resolve within a meeting or two once everyone is looking at the same data instead of guesses.",
  },
  {
    q: "Where in Washington do you actually work?",
    a: "We serve the full Puget Sound region directly — King, Snohomish, Pierce, Kitsap, Skagit, Whatcom, and Thurston Counties — and coordinate statewide for Eastern Washington (Spokane, Yakima, Tri-Cities, Vancouver WA) through vetted local partners. Out-of-state executors with Washington property are explicitly part of who we serve.",
  },
];

const HomepageFAQ = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto">
          <h2 className="font-serif text-[hsl(0,70%,30%)] mb-10 text-center font-bold text-3xl">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
              >
                <AccordionTrigger
                  className="text-left font-serif font-bold text-foreground hover:text-gold hover:no-underline px-6 py-6 min-h-[64px]"
                  style={{ fontSize: "23px", lineHeight: 1.35 }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-foreground/85">
                  <div style={{ fontSize: "19px", lineHeight: 1.7 }}>{faq.a}</div>
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
