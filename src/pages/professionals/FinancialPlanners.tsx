import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TiffanyLaneCard from "@/components/TiffanyLaneCard";

// Provider data now lives in TiffanyLaneCard.tsx, reused as a shared component.

const faqs = [
  {
    q: "Do I need a financial advisor when I inherit property?",
    a: "Not always required, but often very helpful. Inheriting real estate comes with tax implications — particularly around capital gains and the stepped-up basis — that a financial advisor can help you understand before you make any decisions about selling or keeping the property.",
  },
  {
    q: 'What is a "stepped-up basis" and why does it matter?',
    a: 'When you inherit a home, its cost basis for tax purposes is "stepped up" to the market value at the time of the original owner\'s death — not what they originally paid. This often significantly reduces or eliminates capital gains tax if you sell the home shortly after inheriting it. A financial advisor or CPA can walk you through how this applies to your situation.',
  },
  {
    q: "What is Washington State's estate tax and who does it affect?",
    a: "Washington State has its own estate tax, separate from the federal one, that applies to estates valued above approximately $2.193 million (as of 2024). This is lower than the federal threshold, meaning some Washington families are affected by the state tax even when no federal estate tax is owed. A financial planner familiar with Washington law can help families plan ahead.",
  },
  {
    q: "How can a financial advisor help with the cost of assisted living?",
    a: "Senior living costs vary widely in the Puget Sound area. A financial advisor can help families understand what's affordable, how to use home sale proceeds, and whether long-term care insurance or other resources apply. Planning early creates more options.",
  },
  {
    q: "What is the difference between a financial planner and a CPA for estate matters?",
    a: "A CPA (Certified Public Accountant) focuses primarily on taxes — filing returns, calculating tax owed, and advising on tax strategy. A financial planner takes a broader view — investments, retirement income, long-term care planning, and overall financial goals. For estate matters, many families benefit from working with both.",
  },
];

const FinancialPlanners = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Financial Planners for Estate & Senior Transitions | Western Washington | Real Property Planning"
        description="Find financial advisors and planners in the Puget Sound region who specialize in inherited assets, estate tax planning, and financial decisions during senior transitions."
        canonical="https://realpropertyplanning.com/professionals/financial-planners"
        jsonLd={faqSchema}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Professionals", url: "https://realpropertyplanning.com/professionals" },
          {
            name: "Financial Planners & Advisors",
            url: "https://realpropertyplanning.com/professionals/financial-planners",
          },
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">Financial Planners & Advisors</HeroBandTitle>

        {/* Featured providers */}
        <TiffanyLaneCard />

        {/* Explanatory content */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
                What Financial Planners & Advisors Do
              </h2>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  A financial planner or advisor can be an important part of the support team during major life
                  transitions. For older adults and their families, they help clarify financial decisions related to
                  retirement income, long-term care, housing changes, estate planning, and the costs involved in
                  downsizing or relocation.
                </p>
                <p>
                  Their role is to look at the bigger financial picture and help clients make informed choices that
                  align with their goals, resources, and family circumstances. In situations involving a move, a change
                  in living arrangement, or the administration of an estate, a financial planner or advisor can help
                  bring structure and confidence to what may otherwise feel overwhelming.
                </p>
                <p>
                  What makes a good financial planner or advisor especially valuable is their ability to explain options
                  clearly and help families move forward with practical, well-informed decisions. That kind of guidance
                  can be especially reassuring when coordinating with real estate, legal, and estate professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">Common Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
                  >
                    <AccordionTrigger
                      className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5"
                      style={{ fontSize: "20px", fontWeight: "700" }}
                    >
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

        <BackToProfessionalsButton />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default FinancialPlanners;
