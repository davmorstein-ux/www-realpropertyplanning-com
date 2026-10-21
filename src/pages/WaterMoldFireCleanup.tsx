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
    specialty: "Biohazard cleanup, water damage cleanup, mold removal and remediation, air duct and coil cleaning, sanitizing, fire damage cleanup and moisture control, restoring the home to a clean, sanitary and livable condition.",
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
    a: "Biohazard cleanup is the removal and disinfection of material that can carry disease, such as blood and other bodily fluids, sewage or animal waste. It is done by crews trained to work in protective equipment, contain the area, dispose of the material properly, and disinfect surfaces that ordinary cleaning would leave contaminated.",
  },
  {
    q: "What is mold remediation?",
    a: "Mold remediation is more than wiping mold off a surface. The affected area is contained so spores do not spread through the house, moldy materials that cannot be cleaned are removed, the rest is cleaned and treated, and the moisture that let mold grow is found and fixed. Without that last step, it comes back.",
  },
  {
    q: "Why do inherited and vacant houses so often have water damage or mold?",
    a: "Nobody is there to notice a slow leak, a failed water heater or a damp crawl space, and a house that sits with the heat turned down holds more moisture. By the time the family walks in, a small problem can have spread. A prompt inspection and dry-out keeps the damage, and the cost, from growing while the estate is being settled.",
  },
  {
    q: "Does insurance pay for water, fire or mold cleanup?",
    a: "Often for sudden events, such as a burst pipe or a fire, and less often for damage that built up slowly or for mold. Many policies also limit coverage once a house has been vacant for a while. Call the insurer before the work starts, and keep the cleanup company's written documentation for the claim and for the estate's records.",
  },
  {
    q: "Should the problem be fixed before the house is sold?",
    a: "Active water damage, mold and smoke odor tend to worry buyers, inspectors and lenders more than almost anything else, and some loans cannot close until they are dealt with. Once the house is clean, dry and sanitary, the broker can advise whether further preparation is worth the cost or whether to sell it as it is.",
  },
  {
    q: "Why clean the air ducts or the heating and cooling coils?",
    a: "Ducts and coils collect dust, debris, smoke residue and sometimes mold, and the system then blows it through every room. Cleaning them is common after water or fire damage, after a long vacancy, and before a parent with breathing problems moves into a home.",
  },
];

const WaterMoldFireCleanup = () => (
  <>
    <SEOHead
      title="Biohazard, water, mold & fire cleanup in Washington State | Real Property Planning"
      description="What water damage, mold, fire damage, biohazard and moisture cleanup involves, when families settling an estate or moving a parent need it, and an independent cleanup professional in Washington State to contact directly."
      canonical="https://realpropertyplanning.com/water-mold-fire-cleanup"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Biohazard, water, mold & fire cleanup", url: "https://realpropertyplanning.com/water-mold-fire-cleanup" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle as="h1">Biohazard, water, mold &amp; fire cleanup in Washington State</HeroBandTitle>

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
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">What the Work Covers</h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Biohazard, water, mold and fire cleanup deals with the damage itself and with what caused it, restoring the home to
              a clean, sanitary and livable condition.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Biohazard Cleanup</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Blood, bodily fluids, sewage and other material that can carry disease are removed by a crew in
                  protective equipment, disposed of under the rules that apply to it, and the area is disinfected.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Water Damage &amp; Cleanup</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Standing water is removed and the structure is dried with fans and dehumidifiers, with moisture readings taken until the walls, floors and framing are dry.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Mold Removal &amp; Remediation</h3>
                <p className="text-foreground text-base leading-relaxed">
                  The affected area is contained, mold is removed and treated, and the moisture that caused it is found so it does not come back.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Air Duct &amp; Coil Cleaning</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Dust, debris, smoke residue and mold are cleaned out of the ducts and the heating and cooling coils, so the system stops spreading them through the house.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Sanitizing</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Surfaces are cleaned and disinfected after water damage, sewage, illness or a long vacancy.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Fire Damage Cleanup</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Soot and smoke residue are cleaned from surfaces and contents, and smoke odor is treated at its source rather than covered up.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Moisture Control</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Crawl spaces, attics and basements are checked and corrected for the dampness, poor ventilation and drainage that lead to mold and rot.
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
              An inherited house that has sat empty is where this usually comes up: a leak nobody saw, a damp crawl
              space, mold behind a wall, or a stale, musty smell. Before the house can be appraised, shown or sold,
              the damage has to be found, dried out and cleaned up.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              It also comes up when a parent moves to assisted living or an adult family home and the house they leave
              behind needs to be made ready, and after a fire or a burst pipe, when the work has to start quickly to
              keep the damage from spreading.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              A trained crew does the work and documents it, so the family has a clear record for the insurer, the
              estate and a future buyer, and can focus on what happens to the house next.
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

export default WaterMoldFireCleanup;
