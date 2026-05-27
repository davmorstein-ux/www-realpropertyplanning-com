import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroIcon from "@/assets/icons/estate-financial-planning-icon-washington.webp";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import newYorkLifeLogo from "@/assets/new-york-life-logo.webp";

const featuredProviders = [
  {
    name: "Tiffany Lane",
    title: "Financial Professional",
    company: "New York Life — Seattle General Office",
    specialty: "Retirement planning, estate planning, downsizing, and legacy protection for seniors and their families",
    photo: tiffanyPhoto,
    alt: "Photo of Tiffany Lane, Financial Professional at New York Life — Seattle General Office",
    href: "https://www.newyorklife.com/agent/tcford",
    logo: newYorkLifeLogo,
    logoAlt: "New York Life logo",
    external: true,
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

const helpRows = [
  { text: "Reviews inherited assets and helps beneficiaries understand their financial options after a loss" },
  { text: "Advises on estate taxes, stepped-up basis, and capital gains implications when selling inherited property" },
  { text: "Helps older adults plan financially for assisted living, long-term care costs, and housing transitions" },
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
    <>
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
        <section className="bg-primary py-12 md:py-16">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight">
                Financial Planners & Advisors
              </h1>
            </div>
          </div>
        </section>


        {/* Featured tiles — immediately below hero band */}
        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {featuredProviders.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
                  className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        <img
                          src={p.photo}
                          alt={p.alt}
                          className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                          loading="lazy"
                        />
                        <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                          {p.name}
                        </h3>
                        <p className="text-foreground text-sm mb-1">{p.title}</p>
                        <p className="text-foreground text-sm font-semibold mb-3">{p.company}</p>
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={p.logoAlt || `${p.company} logo`}
                            className="h-24 w-auto max-w-[360px] object-contain mb-4"
                            loading="lazy"
                          />
                        )}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.specialty}</p>

                        <span className="gold-cta mt-auto">
                          Learn More
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Introductory line */}
        <section className="pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Trusted financial professionals helping seniors and families plan with confidence through every stage of life's transitions.
              </p>
            </div>
          </div>
        </section>

        {/* Explanatory content — below tiles */}
        <section className="pb-12 md:pb-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                A financial planner or advisor can be an important part of the support team during major life transitions. For older adults and their families, they help clarify financial decisions related to retirement income, long-term care, housing changes, estate planning, and the costs involved in downsizing or relocation.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                Their role is to look at the bigger financial picture and help clients make informed choices that align with their goals, resources, and family circumstances. In situations involving a move, a change in living arrangement, or the administration of an estate, a financial planner or advisor can help bring structure and confidence to what may otherwise feel overwhelming.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                What makes a good financial planner or advisor especially valuable is their ability to explain options clearly and help families move forward with practical, well-informed decisions. That kind of guidance can be especially reassuring when coordinating with real estate, legal, and estate professionals.
              </p>
            </div>
          </div>
        </section>



        {/* How a Financial Planner Helps Your Family */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">
                How a Financial Planner Helps Your Family
              </h2>
              <div className="space-y-6">
                {helpRows.map((row, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-gold text-2xl leading-none mt-0.5 shrink-0" aria-hidden="true">•</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-background">
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

        {/* Related Professionals */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
                Families Often Also Work With
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  to="/professionals/probate-attorneys"
                  className="bg-card rounded-xl border border-border p-5 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-gold">
                    Probate & Estate Attorneys
                  </h3>
                </Link>
                <Link
                  to="/professionals/care-managers"
                  className="bg-card rounded-xl border border-border p-5 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-gold">
                    Care Managers & Social Workers
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-14 lg:py-20 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Not sure who you need? We're happy to help point you in the right direction.
              </p>
              <Link to="/contact">
                <span className="gold-cta inline-flex items-center gap-2 text-base">
                  Get in Touch
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Inquiry */}
        <section className="bg-muted/50">
          <div className="container px-6 lg:px-8">
            <hr className="border-border" />
            <div className="py-10 max-w-2xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-2">
                Are you a financial planner or advisor serving Western Washington families?
              </p>
              <p className="text-base text-muted-foreground/70 mb-4">
                If you work with families navigating estate settlement, inherited property, or senior housing transitions, we'd like to learn more about your practice.
              </p>
              <Link
                to="/contact?subject=Professional+Listing+Inquiry+%E2%80%94+Financial+Planners+%26+Advisors"
                className="text-gold text-base font-medium underline underline-offset-4 hover:text-gold-dark transition-colors"
              >
                Inquire about being listed →
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <RelatedServices currentPath="/professionals/financial-planners" />
        <BackToProfessionalsButton />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default FinancialPlanners;
