import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import nicoleJohnsonPhoto from "@/assets/providers/nicole-guzman-johnson-bookkeeper-books-on-the-rock.webp";
import booksOnTheRockLogo from "@/assets/providers/books-on-the-rock-bookkeeping-logo.webp";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import ProviderHoverPanel from "@/components/ProviderHoverPanel";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Provider {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  href: string;
  specialty: string;
  phone?: string;
  email?: string;
  /* The Books on The Rock logo is a transparent PNG at 1996x1206 source. It is
     trimmed to its ink bounds and exported at 715x432 — 3x the max-h-36 (144px)
     the card renders it at, so it stays sharp on retina. Alpha is preserved;
     do NOT flatten it onto white, because the card background is white on
     desktop and cream elsewhere and a baked-in white box would show. An
     earlier 106x58 thumbnail was rejected as unusable at card size. */
  logo?: string;
  logoAlt?: string;
  bio?: string;
  videoUrl?: string;
}

const providers: Provider[] = [
  {
    name: "Nicole Guzman Johnson",
    title: "Owner, Certified QuickBooks ProAdvisor",
    company: "Books on The Rock, LLC",
    photo: nicoleJohnsonPhoto,
    logo: booksOnTheRockLogo,
    logoAlt: "Books on The Rock, LLC logo",
    alt: "Photo of Nicole Guzman Johnson, Owner and Certified QuickBooks ProAdvisor at Books on The Rock, LLC",
    href: "https://booksontherockllc.com",
    phone: "(225) 361-7916",
    email: "njohnson.bk@booksontherockllc.com",
    specialty:
      "Organized, personalized bookkeeping and QuickBooks Online support for small- and medium-sized business owners across Washington State. Hablo español.",
    bio: "Nicole Guzman Johnson is the owner of Books on The Rock LLC and a Certified QuickBooks ProAdvisor who helps small- and medium-sized business owners gain clarity and confidence in their finances.\n\nThrough organized, personalized bookkeeping and QuickBooks Online support, Nicole helps clients stay current with their books, understand their financial position, and make informed decisions. Her goal is to reduce the stress of managing financial records so business owners can focus on serving their clients and growing their business.\n\nBased in Everett, Washington. Bookkeeping services built on a firm foundation. Hablo español.",
  },
];

/* FAQ CONTENT IS DELIBERATELY GENERAL.
   These answers describe how bookkeeping works as a discipline and how it
   intersects with estate and transition work. They do not give tax, legal, or
   accounting advice, and they do not describe any service Real Property
   Planning performs — RPP refers, it does not provide. Keep any future
   additions to that same standard. */
const faqs = [
  {
    q: "What is the difference between a bookkeeper and a CPA?",
    a: "A bookkeeper maintains the day-to-day financial records of a business — recording transactions, reconciling accounts, tracking receivables and payables, and keeping the books current and accurate. A CPA is a licensed accountant who can prepare and sign tax returns, perform audits, and provide formal accounting opinions. The two roles are complementary rather than interchangeable: clean books from a bookkeeper make a CPA's work faster, cheaper, and more accurate at tax time.",
  },
  {
    q: "What is a Certified QuickBooks ProAdvisor?",
    a: "A Certified QuickBooks ProAdvisor has completed Intuit's certification program covering QuickBooks setup, reporting, and troubleshooting. The certification indicates demonstrated proficiency with the software specifically — how to configure a chart of accounts, structure recurring transactions, correct historical errors, and produce reports that a business owner can actually read and act on.",
  },
  {
    q: "Why do bookkeeping records matter when settling an estate?",
    a: "If the person who died owned a business or held rental property, the executor inherits responsibility for its financial records. Incomplete or disorganized books make it harder to value the business, file a final return, identify outstanding obligations, and distribute assets accurately. Getting those records into order early is often the difference between a straightforward settlement and a prolonged one.",
  },
  {
    q: "How does bookkeeping fit alongside estate and transition planning?",
    a: "Families going through a major transition are frequently coordinating several professionals at once — an attorney, a CPA, a real estate broker, sometimes a care manager. A bookkeeper keeps the underlying financial record accurate so each of those advisors is working from the same numbers. That reduces duplicated effort and the corrections that surface late in a process, when they are most expensive.",
  },
  {
    q: "How do I choose a bookkeeper?",
    a: "Look for someone whose experience matches the size and complexity of your operation, who is comfortable with the software you already use, and who explains your financial position in language you understand rather than only producing reports. Ask how often you will hear from them, what a typical month looks like, and how they handle a backlog if your books have fallen behind.",
  },
];

const BookkeepingServices = () => (
  <>
    <SEOHead
      title="Bookkeeping Services in Washington State | Real Property Planning"
      description="Connect with trusted bookkeepers and Certified QuickBooks ProAdvisors in Washington State. Learn how organized financial records support business owners, executors, and families navigating estate and life transitions."
      canonical="https://realpropertyplanning.com/bookkeeping-services"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Bookkeeping Services", url: "https://realpropertyplanning.com/bookkeeping-services" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle as="h1">Bookkeeping Services in Washington State</HeroBandTitle>

      {/* Featured Bookkeepers */}
      <section className="pt-10 md:pt-12 pb-12 md:pb-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* WIDTH IS SET BY A CLASS ON THE CARD, NOT BY THIS WRAPPER.
                index.css line ~1054 gives .interior-tile
                  max-width: 260px !important
                so any max-width on this container is ignored — an earlier
                attempt at max-w-xl (576px) here did nothing at all. The only
                lever is .interior-tile--wide, which raises the cap to 360px.

                260px minus the tile's own 16px side padding leaves ~228px of
                content, and index.css floors .text-sm at 17px (18px on mobile)
                for the site's accessibility minimum — so "Books on The Rock,
                LLC" wrapped. At 360px it fits on one line. */}
            <div
              className={
                providers.length === 1
                  ? "flex justify-center"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
              }
            >
              {providers.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
                  className="interior-tile interior-tile--wide tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        {/* Hover trigger covers photo/name/title/company only —
                            deliberately NOT the contact links below, so reaching
                            for a phone number does not open the bio panel. */}
                        <ProviderHoverPanel
                          name={p.name}
                          title={p.title}
                          company={p.company}
                          photo={p.photo}
                          photoAlt={p.alt}
                          logo={p.logo}
                          logoAlt={p.logoAlt}
                          bio={p.bio}
                          specialty={p.specialty}
                          videoUrl={p.videoUrl}
                          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                          <img
                            src={p.photo}
                            alt={p.alt}
                            className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                          <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">{p.name}</h2>
                          <p className="text-foreground text-sm mb-1">{p.title}</p>
                          <p className="text-foreground text-sm font-semibold mb-3">{p.company}</p>
                        </ProviderHoverPanel>
                        <ProviderContact phone={p.phone} email={p.email} providerName={p.name} providerCompany={p.company} />
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={p.logoAlt || `${p.company} logo`}
                            className="h-auto max-h-36 w-auto max-w-full object-contain mb-4"
                            loading="lazy"
                            sizes="100vw"
                            decoding="async"
                          />
                        )}
                        <p className="text-muted-foreground text-sm italic mb-5">{p.specialty}</p>

                        <span className="gold-cta mt-auto">
                          Learn More
                          <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
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
        </div>
      </section>

      {/* What a Bookkeeper Does */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">What a Bookkeeper Does</h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Bookkeeping is the ongoing work of keeping a business's financial records accurate and current. It is
              routine by design — and that routine is what makes everything downstream possible.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Recording and Categorizing</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Every transaction a business makes is recorded and assigned to the right account. Consistent
                  categorization is what allows a report to answer a question rather than raise one.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Reconciliation</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Bank and credit card statements are matched against the books each month. Reconciliation is how errors
                  and omissions get caught while they are still small and easy to correct.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Reporting</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Profit and loss statements, balance sheets, and cash flow reports turn a year of transactions into a
                  picture an owner can act on. A good bookkeeper produces reports you can actually read.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Preparing for Tax Time</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Clean books hand your CPA a finished starting point instead of a reconstruction project. That usually
                  means a faster return, fewer questions, and a smaller bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping and Life Transitions */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Bookkeeping and Life Transitions
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Financial records rarely feel urgent until they suddenly are. When a business owner dies, retires, or
              becomes unable to manage their own affairs, someone else inherits the books — often a family member with
              no history with them and no obvious place to start.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Executors settling an estate that includes a business or rental property face this directly. The business
              has to be valued, a final return has to be filed, outstanding obligations have to be identified, and
              assets have to be distributed accurately. Every one of those steps rests on the underlying record being
              complete.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Families in transition are usually coordinating several professionals at once — an attorney, a CPA, a real
              estate broker, sometimes a care manager. A bookkeeper keeps the financial record accurate so every advisor
              is working from the same numbers, which is why bookkeeping belongs alongside the other services families
              need during periods of change.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-secondary">
                  <AccordionTrigger
                    className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5"
                    style={{ fontSize: "20px", fontWeight: "700" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
      <BackToProfessionalsButton />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default BookkeepingServices;
