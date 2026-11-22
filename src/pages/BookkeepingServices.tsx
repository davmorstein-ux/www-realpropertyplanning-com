import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { NICOLE_GUZMAN_JOHNSON } from "@/data/afhProfessionals";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackLink from "@/components/BackLink";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderContact from "@/components/ProviderContact";
import ProviderHoverPanel from "@/components/ProviderHoverPanel";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import RppArrow from "@/components/RppArrow";
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

/* Nicole's details live in src/data/afhProfessionals.ts, because she also appears
   on AFH Club's Find a Professional page. Edit them there, not here. */
const providers: Provider[] = [
  {
    ...NICOLE_GUZMAN_JOHNSON,
    alt: NICOLE_GUZMAN_JOHNSON.photoAlt,
    href: NICOLE_GUZMAN_JOHNSON.website,
  },
];

/* FAQ CONTENT IS DELIBERATELY GENERAL. AFH Club only (Nov 22, 2026: moved
   from the family side and rewritten for adult family home owners).
   These answers describe how bookkeeping works for an AFH. They do not give
   tax, legal, or accounting advice, and they do not describe any service Real
   Property Planning performs: the site provides no services, and never "we". */
const faqs = [
  {
    q: "What is the difference between a bookkeeper and a CPA?",
    a: "A bookkeeper keeps the day-to-day records of the home: recording what comes in and goes out, reconciling the bank and card accounts, and keeping the books current. A CPA is a licensed accountant who prepares and signs tax returns and gives formal accounting and tax advice. Most AFH owners need both. Clean books from a bookkeeper make the CPA's work at tax time faster, cheaper and more accurate.",
  },
  {
    q: "What is a Certified QuickBooks ProAdvisor?",
    a: "A Certified QuickBooks ProAdvisor has completed Intuit's certification program for QuickBooks setup, reporting and troubleshooting. For an AFH owner, that usually means help setting up accounts that match how the home is actually paid, fixing past entries, and producing monthly reports that are easy to read.",
  },
  {
    q: "Should each adult family home have its own books?",
    a: "If you own or operate more than one home, tracking each one separately is what shows which home is carrying the others: its own resident income, its own staffing cost, its own rent or mortgage. Whether each home should also be its own business entity or bank account is a question for your CPA or attorney.",
  },
  {
    q: "Why do buyers ask for my books when I sell my AFH?",
    a: "When an adult family home is sold as a business, the price of the business rests on what it earns. Buyers, and the lenders financing them, usually ask for profit and loss statements and tax returns for recent years, and they compare them. Missing months, mixed personal and business spending, or numbers that do not match the tax returns can lower offers or stall the financing.",
  },
  {
    q: "How do I choose a bookkeeper for an AFH?",
    a: "Look for someone who understands income that arrives from several sources, such as Medicaid payments through ProviderOne and private pay, and a business where caregiver wages are the largest cost. Ask which software they use, how often you will hear from them, what a typical month looks like, and how they handle a backlog if your books have fallen behind.",
  },
];

const BookkeepingServices = () => (
  <>
    <SEOHead
      title="Bookkeeping for Adult Family Home Owners in Washington | AFH Club"
      description="Bookkeeping for Washington adult family home owners: tracking ProviderOne and private-pay income, caregiver payroll and expenses, books for more than one home, and the records buyers and lenders ask for when an AFH is sold. An independent bookkeeper to contact directly."
      canonical="https://realpropertyplanning.com/afh-club/bookkeeping-services"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Bookkeeping for AFH Owners", url: "https://realpropertyplanning.com/afh-club/bookkeeping-services" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle as="h1">Bookkeeping for Adult Family Home Owners</HeroBandTitle>

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
                <div key={p.name} className="interior-tile interior-tile--wide tile-white group block h-full focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 relative">
                  {/* The whole card is one link via this invisible overlay; a card that was itself
                      a link put the phone and email links inside a link, which is invalid HTML
                      and broke hydration (Oct 4, 2026). ProviderContact sits above it. */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name}, ${p.title} at ${p.company}: Learn more`}
                    className="absolute inset-0 z-0 rounded-[inherit] focus-visible:outline-none"
                  />
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
                          <RppArrow />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What a Bookkeeper Does for an AFH (Nov 22, 2026: rewritten for AFH owners) */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">What a Bookkeeper Does for an AFH</h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              An adult family home is a small business with a few large, steady numbers: resident income, caregiver wages,
              and the cost of the house. Bookkeeping keeps those numbers current, so you know where the home stands each month
              instead of finding out at tax time.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Resident Income</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Medicaid payments through ProviderOne, private pay, and any other sources are recorded separately for each resident, so you can see what has been paid, what is still owed, and what each bed brings in.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Caregiver Payroll and Expenses</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Staffing is usually the largest cost in an AFH. Wages, payroll taxes, food, supplies, utilities and repairs are recorded in their own accounts, so a rise in any of them shows up early.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Monthly Reconciliation</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Bank and card statements are matched against the books every month. That is how a missed payment or a duplicated charge gets caught while it is still small.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Reports You Can Use</h3>
                <p className="text-foreground text-base leading-relaxed">
                  A monthly profit and loss statement shows whether the home is making money at its current occupancy, and what an empty bed costs. Clean books also give your CPA a finished starting point at tax time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When the books matter most */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              When the Books Matter Most
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              <strong>Selling the home or the business.</strong> The value of an AFH business rests on what it earns, and
              buyers and their lenders check that against your records and tax returns. Organized books from the last few
              years make the business easier to value and easier to finance.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              <strong>Running more than one home.</strong> Separate books for each home show which one is doing well and
              which one needs attention, instead of one combined number that hides both.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              <strong>Borrowing or refinancing.</strong> A lender looking at an AFH wants to see that the income covers the
              loan. Current, reconciled books answer that question quickly.
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
      <BackLink to="/afh-club/find-a-professional" label="AFH Club professionals" center />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default BookkeepingServices;
