import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homepageFaqSchema } from "@/lib/schema";

const faqs = [
  {
    q: "What is a probate real estate agent?",
    a: "A probate real estate agent specializes in selling homes that are part of a deceased person's estate. They understand the legal requirements, court timelines, and family sensitivities involved — and work alongside attorneys and executors to get the property sold properly.",
  },
  {
    q: "Do I need a special agent to sell an inherited home in Washington State?",
    a: "Not legally required, but strongly recommended. Probate sales have specific legal steps, documentation requirements, and timelines. An agent with probate experience — especially one who is also a certified appraiser — can save families significant time, money, and stress.",
  },
  {
    q: "What is a senior transition specialist?",
    a: "A senior transition specialist is a real estate professional trained to support older adults and their families when it's time to move from a longtime home. They coordinate the process thoughtfully — from decluttering and downsizing support to finding appropriate housing and selling the home.",
  },
  {
    q: "What is an estate appraisal and why does it matter?",
    a: "An estate appraisal is a certified valuation of a property at the time of the owner's death. It's used to set a fair listing price, satisfy court requirements in probate, calculate estate taxes, and ensure heirs are treated fairly. Courts and the IRS have specific requirements — a certified appraiser ensures your appraisal holds up.",
  },
  {
    q: "How is David Stein different from a regular real estate agent?",
    a: "David holds two credentials most agents don't: he is both a licensed real estate broker and a Washington State Certified Residential Appraiser. This means he can value a home with professional appraisal standards AND help sell it — providing families with integrated guidance they can trust.",
  },
  {
    q: "What areas does Real Property Planning serve?",
    a: "We serve all of Western Washington and the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties — cities like Seattle, Bellevue, Everett, Tacoma, Bainbridge Island, and many more.",
  },
  {
    q: "How do I get started?",
    a: "Simply call (206) 900-3015 or send an email to david@realpropertyplanning.com. There's no pressure — just a calm, honest conversation about your situation.",
  },
];

const HomepageFAQ = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-homepage-faq-jsonld]');
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-homepage-faq-jsonld", "true");
    script.textContent = JSON.stringify(homepageFaqSchema);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-homepage-faq-jsonld]');
      if (s) s.remove();
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-4xl text-foreground font-semibold mb-10 text-center">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground text-lg leading-relaxed">
                  {faq.a}
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
