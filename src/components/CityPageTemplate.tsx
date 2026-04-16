import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";
import { counties } from "@/lib/service-areas-data";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, isTier1City } from "@/lib/service-areas-data";
import type { CityData } from "@/lib/service-areas-data";
import heroIcon from "@/assets/icons/real-estate-service-areas-map-icon-washington.webp";

// Tone-specific FAQ sets — now meaningfully varied per tone, not generic per city
const toneFaqSets: Record<string, (city: CityData) => { question: string; answer: string }[]> = {
  premium: (city) => [
    { question: `What pricing approach works in a high-value ${city.name} estate?`, answer: `In a market where blocks and views can swing value by six figures, an automated estimate is not a starting point. We anchor pricing in a documented, appraisal-style condition adjustment — the same logic the buyer's lender appraiser will apply — so the number in the court file is the number the market will actually support.` },
    { question: `How are sibling buyout valuations handled for a ${city.name} property?`, answer: `When one heir wants to keep the home and others want to be cashed out, the price has to be defensible to everyone — and to the attorney drafting the buyout. We provide a written, independent valuation that all parties can rely on, separate from any listing conversation.` },
    { question: `Does David coordinate with high-net-worth advisors involved in the estate?`, answer: `Yes. Estate planning attorneys, CPAs, and trust officers are routinely part of these files in ${city.name}. We deliver written status updates so every advisor on the team is reading from the same page.` },
  ],
  urban: (city) => [
    { question: `Can a ${city.name} estate property be listed before probate is fully open?`, answer: `Generally no — a personal representative needs Letters Testamentary or Letters of Administration before listing. We use the gap to handle the date-of-death valuation, secure the home, and prep the marketing file so listing day isn't day one of the work.` },
    { question: `How does ${city.name}'s urban market affect inherited condos and townhomes?`, answer: `HOA estoppels, resale certificates, and special assessments routinely surface mid-transaction on urban estate sales. We pull these documents early and price the unit with the actual HOA reality factored in — not a generic per-square-foot comp.` },
    { question: `What about long-vacant ${city.name} homes that have not been touched in years?`, answer: `Common, especially in older neighborhoods. We start with a condition triage — what is structural, what is cosmetic, what is buyer-pool eliminating — and only recommend repairs where the return on the estate's spend is documented in writing.` },
  ],
  suburban: (city) => [
    { question: `Where do most ${city.name} families start when a parent's house needs to sell?`, answer: `Usually with one practical question: do we sort the house first, or get a value first. We do the value walk-through first because it shapes every other decision — what to keep, what to repair, and how fast to move. The cleanout coordination follows.` },
    { question: `How are repair-vs-as-is decisions made on a ${city.name} suburban estate home?`, answer: `Each repair recommendation gets a documented return estimate. In ${city.name}'s buyer pool, certain updates pay back at sale and others do not — paint and flooring usually do, deeper kitchen and bath work usually does not. The goal is to leave money in the estate, not in the renovation.` },
    { question: `Can multiple adult children stay in the loop without one person carrying all the calls?`, answer: `Yes. Updates go to a single email thread that includes every named heir and the estate attorney, so no one feels behind and no one has to be the messenger.` },
  ],
  waterfront: (city) => [
    { question: `What makes valuing a ${city.name} waterfront estate different?`, answer: `Shoreline classification, view corridors, bulkhead condition, dock or buoy rights, and tidelands all materially shift value — and most are invisible to automated estimates. We document each on-site so the price the estate brings to the table can defend itself.` },
    { question: `How are out-of-town heirs kept informed during a ${city.name} waterfront sale?`, answer: `Photo and video walk-throughs of dock, bulkhead, and shoreline conditions, plus written summaries of every offer. Heirs who haven't been to the property in years can still make confident decisions.` },
    { question: `Are there preparation items unique to ${city.name} waterfront listings?`, answer: `Often: bulkhead inspection records, septic compliance for shoreline lots, and any HPA or shoreline permit history. We surface these before listing so buyer due diligence does not derail the sale.` },
  ],
  smalltown: (city) => [
    { question: `Will a ${city.name} estate home actually sell — or sit on the market for months?`, answer: `Smaller markets are unforgiving of overpricing. We price to the actual ${city.name} buyer pool — based on closed comps and condition — rather than to a wider regional average that won't materialize as showings.` },
    { question: `What if the ${city.name} home has been in the family for forty years and barely updated?`, answer: `Very common here. We separate the "needs to be done before listing" items from the "buyer is going to redo this anyway" items, so the estate isn't paying for renovation a buyer wouldn't pay extra for.` },
    { question: `Can the whole ${city.name} sale be handled without family driving out repeatedly?`, answer: `Yes. On-site coordination, vendor management, and offer review are all handled locally with written and video updates to the family.` },
  ],
  military: (city) => [
    { question: `What do military families in ${city.name} need to know about an inherited home?`, answer: `Distance and timeline are usually the binding constraints — PCS dates rarely line up with probate timelines. We work to whatever window you actually have, handling on-site work and reporting back in the format your schedule allows.` },
    { question: `How is pricing handled for ${city.name} homes near base?`, answer: `Buyer demand near military communities is more cyclical than the broader market. We track active listing absorption in the specific submarket and price the estate property to where the buyers actually are right now, not where they were last quarter.` },
    { question: `Can David coordinate the entire ${city.name} sale while I'm stationed elsewhere?`, answer: `Yes — full on-site coordination, vendor management, showings, and offer review with structured written updates to wherever you are.` },
  ],
  rural: (city) => [
    { question: `How do you value acreage and outbuildings on a property near ${city.name}?`, answer: `Rural valuation requires looking at acreage usability, well and septic age and condition, outbuilding utility, and access. We document each on-site rather than relying on automated estimates that treat rural parcels like suburban lots.` },
    { question: `What surfaces most often on inherited rural properties around ${city.name}?`, answer: `Deferred maintenance, unrecorded fence-line and access agreements, and wells or septics nearing end of service life. We flag these before listing so they become disclosure items, not deal-killers.` },
    { question: `Can a ${city.name}-area rural estate sale be coordinated remotely?`, answer: `Yes. On-site walk-throughs, vendor coordination for property cleanup, and structured updates make remote rural estate sales workable for out-of-area heirs.` },
  ],
};

interface CityPageTemplateProps {
  city: CityData;
}

const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const tier1 = isTier1City(city.slug);
  const tone = city.tone || "suburban";

  const faqGenerator = toneFaqSets[tone] || toneFaqSets.suburban;
  const faqs = city.localFaqs || faqGenerator(city);

  const heroIntro = city.heroIntro ||
    `Experienced real estate guidance for probate, estate, and senior transitions in ${city.name}, ${city.county}. Licensed broker and certified appraiser.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={city.seoTitle || `Probate & Estate Real Estate in ${city.name}, WA | Real Property Planning`}
        description={city.seoDescription || (city.descriptor
          ? `${city.descriptor} — Probate, estate, and senior transition guidance in ${city.name}, ${city.county}.`
          : `Probate, estate, and senior transition real estate guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein.`
        )}
        noindex={!tier1}
      />
      <BreadcrumbSchema items={[
        { name: "Counties", url: "/counties" },
        { name: city.county, url: `/${city.countySlug}` },
        { name: city.name, url: `/cities/${city.slug}` },
      ]} />
      <Header />
      <main id="main-content">

      {/* Hero — concise */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
              {city.name}, {city.county}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold leading-tight mb-4">
              {city.heroHeading || `Property Transition Guidance in ${city.name}`}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {heroIntro}
            </p>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question={city.aeoQuestion || `How do probate and estate property sales work in ${city.name}?`}
        answer={city.aeoAnswer || `Real Property Planning provides hands-on guidance for executors, trustees, attorneys, and families selling property in ${city.name}. Each property is carefully evaluated, and the full sale process is coordinated with licensed broker and certified appraiser expertise.`}
        supportBullets={city.aeoSupportBullets}
        supportFaqs={city.aeoSupportFaqs}
        supportSteps={!city.aeoSupportBullets && !city.aeoSupportFaqs ? [
          { label: "Evaluate", desc: "Property assessment and pricing" },
          { label: "Prepare", desc: "Cleanout and vendor coordination" },
          { label: "Sell", desc: "Marketing, negotiation, closing" },
        ] : undefined}
      />

      <TrustStrip />

      {/* What we handle locally — narrative replacing the duplicated services grid */}
      <section className="py-14 lg:py-18 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-4">
              How an Estate Sale Tends to Run in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {city.localKnowledge ||
                `Most ${city.name} calls start with a property the heirs haven't been inside in months — or years — and a personal representative trying to sort court timing, repairs, and pricing all at once. The first conversation is short and concrete: who has authority, what condition the home is actually in, and what's already been touched.`}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              From there, we run the date-of-death walk-through, line up cleanout and pre-list work that{" "}
              <Link to={`/${city.countySlug}`} className="text-accent hover:text-gold underline underline-offset-4">{city.county}</Link>{" "}
              buyers actually pay extra for, build a written pricing analysis the estate file can defend, and handle the sale through closing. If you're earlier than that — still figuring out what was inherited — start with the{" "}
              <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold underline underline-offset-4">inherited house in Washington guide</Link>{" "}
              or the{" "}
              <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executor roadmap</Link>.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} to={`/cities/${city.slug}/${service.slug}`} className="text-accent hover:text-gold underline underline-offset-4">
                  {service.shortName} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PageFAQ faqs={faqs} heading={`${city.name} FAQ`} />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary-foreground font-semibold mb-4">
              Ready to Talk About Your {city.name} Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-6">
              David can walk you through your situation and help you figure out next steps.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links — compact */}
      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">County</p>
              <Link to={`/counties/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                {city.county}
              </Link>
            </div>
            {(() => {
              const countyData = counties.find(c => c.slug === city.countySlug);
              const siblings = countyData?.cities.filter(c => c.slug !== city.slug).slice(0, 6) || [];
              if (siblings.length === 0) return null;
              return (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Nearby</p>
                  <div className="flex flex-wrap gap-2">
                    {siblings.map((c, i) => (
                      <span key={c.slug}>
                        {i > 0 && <span className="text-muted-foreground/40 mr-2">·</span>}
                        <Link to={`/cities/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{c.name}</Link>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">Guides</p>
              <div className="flex flex-wrap gap-2">
                <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Works</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">First Steps for Executors</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Inherited House Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/cities/${city.slug}`} />
      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default CityPageTemplate;
