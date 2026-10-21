import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { LYNN_LIEDLE } from "@/data/afhProfessionals";

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
  logo?: string;
  logoAlt?: string;
  bio?: string;
  videoUrl?: string;
}

/* Lynn's details live in src/data/afhProfessionals.ts, because she also appears
   on AFH Club's Find a Professional page. Edit them there, not here. */
const providers: Provider[] = [
  {
    ...LYNN_LIEDLE,
    title: "Owner",
    specialty: "Safe removal and cleanup of homes affected by hoarding and biohazard materials, restoring them to a clean, sanitary, livable condition.",
    alt: LYNN_LIEDLE.photoAlt,
    href: LYNN_LIEDLE.website,
  },
];

/* FAQ CONTENT IS DELIBERATELY GENERAL. It describes how this kind of cleanup
   works, not any service Real Property Planning performs: the site provides
   no services. Keep any future additions to that standard, and never "we". */
const faqs = [
  {
    q: "What is biohazard cleanup?",
    a: "Biohazard cleanup is the removal and disinfection of material that can carry disease, such as blood and other bodily fluids, sewage, animal waste, or the aftermath of an unattended death. It is done by crews trained to work with protective equipment, contain the area, dispose of the material properly, and disinfect the surfaces and air that ordinary cleaning would leave contaminated.",
  },
  {
    q: "How is hoarding cleanup different from an ordinary cleanout?",
    a: "A cleanout moves belongings out of a house. Hoarding cleanup often has to deal with what has built up underneath them as well: mold, pests, spoiled food, animal waste, and blocked exits or utilities. It usually goes room by room, sorts what the family wants to keep from what has to go, and ends with sanitizing and deodorizing so the house is safe to live in, show or sell.",
  },
  {
    q: "Can the family keep belongings during a hoarding cleanup?",
    a: "Usually, yes. Families commonly ask the crew to set aside papers, photographs, valuables and anything on a list before items are discarded. Agree on the list, and on who decides when something is unclear, before the work begins.",
  },
  {
    q: "Does insurance pay for this kind of cleanup?",
    a: "Sometimes. A homeowner's policy may cover biohazard cleanup after a covered event, and hoarding cleanup is less often covered. Check the policy and call the insurer before the work starts, and keep the cleanup company's written documentation for the claim and for the estate's records.",
  },
  {
    q: "Should the house be cleaned before it is sold?",
    a: "If the condition is a health hazard, yes: buyers, inspectors and lenders will all react to it, and some loans cannot close on a house that is not safe to occupy. Once the house is clean and sanitary, the broker can advise whether further preparation is worth the cost or whether to sell it as it is.",
  },
];

const HoardingBiohazardCleanup = () => (
  <>
    <SEOHead
      title="Hoarding & Biohazard Cleanup in Washington State | Real Property Planning"
      description="What hoarding and biohazard cleanup involves, when families settling an estate or moving a parent need it, and an independent cleanup professional in Washington State to contact directly."
      canonical="https://realpropertyplanning.com/hoarding-biohazard-cleanup"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Hoarding & Biohazard Cleanup", url: "https://realpropertyplanning.com/hoarding-biohazard-cleanup" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle as="h1">Hoarding &amp; Biohazard Cleanup in Washington State</HeroBandTitle>

      {/* Featured cleanup professional */}
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
                    aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What the cleanup involves */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">What the Cleanup Involves</h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Hoarding and biohazard cleanup restores a house to a clean, sanitary and livable condition while
              protecting the health of everyone who lives in it or works on it.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Assessment and Safety</h3>
                <p className="text-foreground text-base leading-relaxed">
                  The crew first looks for what makes the house unsafe: blocked exits, mold, pests, sewage, sharp
                  objects or structural damage. The plan, and the protective equipment, follow from that.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Sorting and Removal</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Belongings are removed room by room. Papers, photographs, valuables and anything the family has
                  asked to keep are set aside before the rest goes.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Cleaning and Disinfection</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Contaminated surfaces are cleaned and disinfected, and odors are treated at their source rather
                  than covered up.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Safe Disposal</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Biohazard material is bagged, transported and disposed of under the rules that apply to it, not
                  put out with the household trash.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When families need it */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              When Families Need It
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Executors sometimes open the door of an inherited house and find it far fuller, or far less sanitary,
              than anyone in the family knew. Before it can be appraised, shown or sold, it has to be made safe to
              walk through.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              The same can happen when a parent moves to assisted living or an adult family home and the house they
              leave behind has to be emptied, or after an unattended death, when the cleanup is too much, and too
              personal, for the family to do themselves.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              A trained crew does the work safely and discreetly, so the family can focus on the decisions that are
              theirs to make: what to keep, and what happens to the house next.
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

export default HoardingBiohazardCleanup;
