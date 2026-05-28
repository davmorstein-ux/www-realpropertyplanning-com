import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import newYorkLifeLogo from "@/assets/new-york-life-logo.webp";

type Contact = { name: string; role?: string; photo: string; alt: string };

type Provider = {
  company: string;
  website: string;
  logo: string;
  logoAlt: string;
  contacts: Contact[];
  specialty: string;
  phones: { label: string; href: string }[];
  email?: string;
};

const providers: Provider[] = [
  {
    company: "New York Life — Seattle General Office",
    website: "https://www.newyorklife.com/agent/tcford",
    logo: newYorkLifeLogo,
    logoAlt: "New York Life logo",
    contacts: [
      {
        name: "Tiffany Lane",
        role: "Financial Professional",
        photo: tiffanyPhoto,
        alt: "Tiffany Lane — Financial Professional, New York Life Seattle General Office",
      },
    ],
    specialty:
      "Retirement planning, estate planning, downsizing, and legacy protection for seniors and their families.",
    phones: [{ label: "(206) 999-2116", href: "tel:+12069992116" }],
  },
];

const faqs = [
  {
    q: "Do I need a financial advisor when I inherit property?",
    a: "Not always required, but often very helpful. Inheriting real estate comes with tax implications — particularly around capital gains and the stepped-up basis — that a financial advisor can help you understand before you make any decisions about selling or keeping the property.",
  },
  {
    q: 'What is a "stepped-up basis" and why does it matter?',
    a: "When you inherit a home, its cost basis for tax purposes is \"stepped up\" to the market value at the time of the original owner's death — not what they originally paid. This often significantly reduces or eliminates capital gains tax if you sell the home shortly after inheriting it. A financial advisor or CPA can walk you through how this applies to your situation.",
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
          { name: "Financial Planners & Advisors", url: "https://realpropertyplanning.com/professionals/financial-planners" },
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">Financial Planners & Advisors</HeroBandTitle>

        {/* Featured providers */}
        <section className="py-10 md:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {providers.map((p) => (
                <div
                  key={p.company}
                  className="interior-tile interior-tile--wide tile-white block h-full"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        <img
                          src={p.logo}
                          alt={p.logoAlt}
                          className="h-[120px] md:h-[144px] w-auto object-contain mb-4"
                          loading="lazy"
                        />

                        <div className="flex justify-center gap-5 mb-3">
                          {p.contacts.map((c) => (
                            <div key={c.name} className="flex flex-col items-center">
                              <img
                                src={c.photo}
                                alt={c.alt}
                                className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full object-cover border-2 border-border shadow-sm"
                                loading="lazy"
                              />
                              <p className="text-foreground font-semibold text-sm mt-2">{c.name}</p>
                              {c.role && (
                                <p className="text-muted-foreground text-xs">{c.role}</p>
                              )}
                            </div>
                          ))}
                        </div>

                        <h2 className="font-serif text-lg md:text-xl text-navy font-semibold leading-snug mb-3">
                          {p.company}
                        </h2>

                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                          {p.specialty}
                        </p>

                        <div className="w-full space-y-1.5 text-sm mb-5">
                          {p.phones.map((ph) => (
                            <div key={ph.href} className="flex items-center gap-2 justify-center">
                              <a
                                href={ph.href}
                                className="text-accent hover:text-gold underline-offset-4 hover:underline font-medium"
                              >
                                {ph.label}
                              </a>
                            </div>
                          ))}
                          {p.email && (
                            <div className="flex items-center gap-2 justify-center">
                              <a
                                href={`mailto:${p.email}`}
                                className="text-accent hover:text-gold underline-offset-4 hover:underline break-all"
                              >
                                {p.email}
                              </a>
                            </div>
                          )}
                        </div>

                        <div className="mt-auto w-full pt-2">
                          <a
                            href={p.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Learn more about ${p.company} (opens in a new tab)`}
                            className="gold-cta"
                          >
                            Learn More
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explanatory content */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
                What Financial Planners & Advisors Do
              </h2>
              <div className="text-muted-foreground text-base md:text-lg leading-relaxed space-y-4">
                <p>
                  A financial planner or advisor can be an important part of the support team during major life transitions. For older adults and their families, they help clarify financial decisions related to retirement income, long-term care, housing changes, estate planning, and the costs involved in downsizing or relocation.
                </p>
                <p>
                  Their role is to look at the bigger financial picture and help clients make informed choices that align with their goals, resources, and family circumstances. In situations involving a move, a change in living arrangement, or the administration of an estate, a financial planner or advisor can help bring structure and confidence to what may otherwise feel overwhelming.
                </p>
                <p>
                  What makes a good financial planner or advisor especially valuable is their ability to explain options clearly and help families move forward with practical, well-informed decisions. That kind of guidance can be especially reassuring when coordinating with real estate, legal, and estate professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-[900px] mx-auto">
              <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">
                Common Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5" style={{ fontSize: '20px', fontWeight: '700' }}>
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
