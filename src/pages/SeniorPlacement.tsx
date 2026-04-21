import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import GoldCheckItem from "@/components/GoldCheckItem";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import seniorHousingComparison from "@/assets/senior-housing-comparison.webp";

const housingOptions = [
  {
    title: "Independent Living",
    body: "For seniors who are largely self-sufficient but want community, convenience, and freedom from home maintenance. No medical care provided on-site.",
  },
  {
    title: "Assisted Living",
    body: "For seniors who need help with daily activities such as bathing, dressing, medication, and meals. Staff available around the clock.\n\nHundreds of licensed communities across Washington State.",
  },
  {
    title: "Memory Care",
    body: "Specialized care for seniors living with Alzheimer's or other forms of dementia. Secure environments, structured routines, and trained staff.",
  },
  {
    title: "Adult Family Home",
    body: "A residential home — typically 2 to 6 residents — licensed by Washington State to provide personal care. Often more affordable and intimate than larger facilities. Common throughout King, Snohomish, Pierce, and Kitsap Counties.",
  },
  {
    title: "Skilled Nursing Facility",
    body: "For seniors requiring 24-hour medical care and supervision. Usually short-term after hospitalization, though some seniors transition to long-term care.",
  },
];

const signs = [
  "Frequent falls or balance problems at home",
  "Difficulty managing medications safely",
  "Declining hygiene or nutrition",
  "Isolation and withdrawal from social activity",
  "Unsafe driving or getting lost in familiar places",
  "Caregiver burnout among family members",
  "The home becoming unmanageable — stairs, maintenance, yard work",
];

const team = [
  {
    role: "Senior Placement Advisor",
    body: "Assesses needs, tours communities, and recommends the right housing match. Real Property Planning maintains referral relationships with trusted placement advisors throughout the Puget Sound region.",
  },
  {
    role: "Real Estate Broker & Appraiser",
    body: "Evaluates the home, coordinates preparation, prices it accurately, and manages the sale. David Stein holds both credentials — rare in this field.",
  },
  {
    role: "Senior Move Manager",
    body: "Helps the senior sort, pack, donate, and move belongings with patience and sensitivity. Real Property Planning works with HB Move Management, a division of Hansen Bros. Moving & Storage.",
  },
  {
    role: "Elder Law Attorney",
    body: "Advises on Medicaid planning, powers of attorney, trusts, and the legal structure of the transition.",
  },
  {
    role: "Financial Planner or CPA",
    body: "Plans how home sale proceeds will fund care costs and advises on tax implications.",
  },
];

const faqs = [
  {
    q: "How do we know which type of senior housing is right for our parent?",
    a: "A placement advisor can assess your parent's current needs and match them to the right level of care. Real Property Planning can connect you with trusted advisors in your area.",
  },
  {
    q: "How much does senior placement cost in Washington State?",
    a: "Placement advisor services are typically free to families — advisors are compensated by the communities they place residents into. Care costs vary: adult family homes often range from $3,500–$6,000 per month, assisted living from $4,000–$8,000, and memory care from $5,000–$10,000 or more.",
  },
  {
    q: "Do we have to sell the house to pay for care?",
    a: "Not always — but for many families the home is the primary asset available to fund care. An elder law attorney and financial planner can help evaluate all options including bridge loans and Medicaid planning.",
  },
  {
    q: "Can David Stein start working on the home before placement is finalized?",
    a: "Yes. David can assess the home, develop a pricing strategy, and begin coordinating preparation before the senior has moved — so the home is ready to list the moment the family is ready.",
  },
  {
    q: "How far in advance should we start planning?",
    a: "As early as possible. Even if a move is 6–12 months away, starting the real estate conversation early prevents rushed decisions and protects the estate's financial outcome.",
  },
];

const SeniorPlacement = () => {
  return (
    <>
      <SEOHead
        title="Senior Placement in Washington State | David Stein | Real Property Planning"
        description="David Stein helps Washington State families navigate senior placement and the sale of the family home. Licensed Broker & Certified Appraiser serving King, Snohomish, Pierce & Kitsap Counties."
        canonical="https://www.realpropertyplanning.com/senior-placement"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Services", url: "https://www.realpropertyplanning.com/services" },
          { name: "Senior Placement", url: "https://www.realpropertyplanning.com/senior-placement" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-3 md:pt-4 pb-14 md:pb-16 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Senior Placement
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-4 leading-tight">
                Senior Placement in Washington State
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl font-medium mb-6">
                Helping families find the right housing — and handle the home that comes with it.
              </p>
              <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                When a parent or loved one can no longer safely stay in their home, families face two decisions at once: where does mom or dad go next, and what happens to the house? Real Property Planning connects both — coordinating trusted senior placement advisors alongside the real estate expertise needed to sell the family home on the family's timeline.
              </p>
              <p className="text-gold font-bold text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                David Stein — Real Property Planning — (206) 900-3015
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Talk to David
                  </Button>
                </Link>
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Call (206) 900-3015
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: What Is Senior Placement */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                What Is Senior Placement?
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                Senior placement is the process of identifying and moving an older adult into the right housing option for their current level of care — whether that is independent living, assisted living, memory care, or an adult family home.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                A senior placement advisor assesses the senior's physical, cognitive, and emotional needs, then matches them to communities or homes that fit. Real Property Planning works directly alongside placement advisors to make sure the real estate side — the home being left behind — is handled with the same care.
              </p>
            </div>
          </div>
        </section>

        {/* Senior Housing Comparison Chart */}
        <section style={{ background: "transparent", backgroundColor: "transparent", backgroundImage: "none" }}>
          <div className="w-full" style={{ background: "transparent", backgroundColor: "transparent", backgroundImage: "none" }}>
            <img
              src={seniorHousingComparison}
              alt="Senior Housing Options Side by Side comparison chart — Independent Living, Assisted Living, Memory Care, and Adult Family Home in Washington State"
              className="w-full h-auto block"
              loading="lazy"
              style={{ background: "transparent", backgroundColor: "transparent", mixBlendMode: "multiply", border: "none", boxShadow: "none" }}
            />
          </div>
        </section>

        {/* Section 2: Housing Options */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 text-center">
                Housing Options Explained
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {housingOptions.map((opt) => (
                  <div
                    key={opt.title}
                    className="card-3d p-6 bg-card flex flex-col"
                  >
                    <h3 className="font-serif text-xl text-red-800 font-bold mb-3 text-center min-h-14 flex items-start justify-center">
                      {opt.title}
                    </h3>
                    <p className="text-foreground/85 text-base leading-relaxed whitespace-pre-line">
                      {opt.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Signs */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Signs It May Be Time to Make a Move
              </h2>
              <ul className="space-y-4 mb-8">
                {signs.map((sign) => (
                  <GoldCheckItem key={sign}>{sign}</GoldCheckItem>
                ))}
              </ul>
              <p className="italic text-foreground/85 text-base md:text-lg leading-relaxed border-l-4 border-gold pl-5">
                If two or more of these describe your situation, a conversation with a placement advisor and a real estate professional is a practical next step — not a commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How They Work Together */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                How Senior Placement and Real Estate Work Together
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                The cost of senior care — which can range from $3,000 to $10,000 or more per month in Washington State — is often funded in whole or in part by proceeds from selling the family home. That means the timing of the home sale directly affects when and where a senior can move.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                David Stein coordinates the real estate side of this transition with the care side — working alongside placement advisors, care managers, attorneys, and financial planners to make sure the home sells at the right time, for the right price, without disrupting the senior's move into their new setting. For families ready to take the next step, <Link to="/sell-house-fund-senior-living" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">learn how to sell a parent's house to fund senior living</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Who Is Involved */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Who Is Involved in a Senior Placement
              </h2>
              <ul className="space-y-6">
                {team.map((member) => (
                  <li key={member.role} className="border-l-4 border-gold pl-5">
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      <span className="font-bold text-foreground">{member.role}</span>
                      <span className="text-foreground/85"> — {member.body}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Serving Families */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Serving Families Throughout Washington State
              </h2>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                Real Property Planning supports senior placement transitions throughout King County, Snohomish County, Pierce County, and Kitsap County — including Seattle, Bellevue, Kirkland, Redmond, Everett, Edmonds, Tacoma, Puyallup, Bremerton, and Silverdale.
              </p>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                For families coordinating from out of state, the entire process can be managed remotely — with regular updates, photo documentation, and digital signing at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/85 text-base md:text-lg leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 8: Affiliations */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
                Professional Affiliations
              </h2>
              <AffiliationBadgeGrid />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
                Ready to Talk?
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed mb-8">
                Most families start with a single question. David Stein is happy to hear it — no pressure, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Call (206) 900-3015
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default SeniorPlacement;
