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
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, getCommonSituations, getWhyLocalMatters, getWhyBrokerAppraiser, isTier1City } from "@/lib/service-areas-data";
import type { CityData } from "@/lib/service-areas-data";

interface CityPageTemplateProps {
  city: CityData;
}

const CityPageTemplate = ({ city }: CityPageTemplateProps) => {
  const tier1 = isTier1City(city.slug);
  const situations = getCommonSituations(city.name, city);
  const whyLocal = getWhyLocalMatters(city.name, city.county, city);
  const whyBrokerAppraiser = getWhyBrokerAppraiser(city.name, city);

  const tone = city.tone || "suburban";
  const whoHeadings: Record<string, string> = {
    premium: `Who Relies on Real Property Planning in ${city.name}`,
    urban: `Clients and Partners We Serve in ${city.name}`,
    suburban: `Who We Work With in ${city.name}`,
    waterfront: `Families and Professionals We Help in ${city.name}`,
    smalltown: `Who Reaches Out in ${city.name}`,
    military: `Who We Support in ${city.name}`,
    rural: `Who We Help in ${city.name}`,
  };
  const situationHeadings: Record<string, string> = {
    premium: `When ${city.name} Families and Professionals Reach Out`,
    urban: `Common Property Transition Situations in ${city.name}`,
    suburban: `When Do People in ${city.name} Need Help With Property Transitions?`,
    waterfront: `Situations That Bring ${city.name} Families to Real Property Planning`,
    smalltown: `When ${city.name} Residents Need Property Guidance`,
    military: `Property Situations We Handle in ${city.name}`,
    rural: `When Families in ${city.name} Need Help With Property`,
  };

  // Tone-specific FAQ generation for unique content per city
  const toneFaqSets: Record<string, { question: string; answer: string }[]> = {
    premium: [
      {
        question: `What should an executor consider before listing a high-value home in ${city.name}?`,
        answer: `High-value ${city.name} properties require precise pricing, targeted marketing, and careful preparation decisions. David's appraisal background helps executors understand the property's realistic market position based on condition, neighborhood, and current buyer expectations — avoiding the costly mistakes that come from relying on automated estimates in a premium market.`,
      },
      {
        question: `How does David price estate properties in ${city.name}'s competitive market?`,
        answer: `David combines his licensed broker experience with certified appraiser training to evaluate each ${city.name} property individually — assessing condition, lot characteristics, neighborhood demand, and recent comparable sales. This dual perspective produces pricing that is both competitive and defensible, which is especially important when fiduciary obligations are involved.`,
      },
      {
        question: `Can David manage the sale of a ${city.name} property if the family lives out of state?`,
        answer: `Yes. David frequently coordinates ${city.name} estate sales for executors and trustees who live elsewhere. He handles property access, vendor management, preparation, showings, and the full sale process — providing detailed updates so distant family members can fulfill their responsibilities without repeated travel.`,
      },
      {
        question: `What preparation is worth investing in before selling an inherited ${city.name} home?`,
        answer: `In ${city.name}'s premium market, buyers expect a certain standard — but not every improvement delivers a return. David evaluates which targeted preparations will meaningfully improve the sale outcome and which are better left for the buyer, ensuring the estate's resources are spent wisely.`,
      },
      {
        question: `How do multi-heir situations get handled when selling property in ${city.name}?`,
        answer: `David provides objective, data-supported analysis that helps all parties understand the property's realistic value and the tradeoffs involved in different sale strategies. His clear communication and neutral approach help families navigate disagreements and reach practical decisions together.`,
      },
    ],
    urban: [
      {
        question: `How does probate affect selling a home in ${city.name}?`,
        answer: `Probate property sales in ${city.name} require legal authority — typically letters testamentary — before the home can be listed. David coordinates with the estate attorney and personal representative to manage property assessment, preparation, pricing, and sale, ensuring the process meets legal requirements while moving at a practical pace.`,
      },
      {
        question: `What challenges do executors face with older homes in ${city.name}?`,
        answer: `Older ${city.name} homes often have character features that add value alongside deferred maintenance that affects pricing. David's appraisal background helps him distinguish between what adds value and what needs honest disclosure, ensuring the property is priced to attract the right buyers in ${city.name}'s active market.`,
      },
      {
        question: `Is it better to sell an inherited ${city.name} property as-is or invest in updates?`,
        answer: `It depends on the property's condition, location within ${city.name}, and the current buyer expectations for that neighborhood. David evaluates each situation individually, recommending targeted preparation when the likely return justifies the investment — and advising against it when selling as-is is the stronger strategy.`,
      },
      {
        question: `Can David help coordinate a ${city.name} estate sale from a distance?`,
        answer: `Yes. David handles the full process locally — from securing the property and coordinating cleanout to managing preparation, listing, and sale. He keeps distant executors and family members informed with regular updates so you can manage your role without needing to be on-site.`,
      },
      {
        question: `How does David's appraiser background benefit ${city.name} estate sales?`,
        answer: `As a certified residential appraiser and licensed broker, David evaluates properties based on actual condition and ${city.name}-specific market data — not automated estimates that miss condition issues, neighborhood nuances, and property-specific factors that directly affect value.`,
      },
    ],
    suburban: [
      {
        question: `What are the first steps when selling an inherited home in ${city.name}?`,
        answer: `Start by securing the property and confirming your legal authority to act. Then get a realistic assessment of the home's condition and market value. David can visit the property, evaluate what needs attention, and help you develop a clear plan — whether you are local or managing from a distance.`,
      },
      {
        question: `How does David determine the right price for an estate property in ${city.name}?`,
        answer: `David uses his dual credentials as a licensed broker and certified appraiser to evaluate each ${city.name} property based on its actual condition, lot characteristics, and neighborhood-level market data. This approach produces pricing that reflects reality — helping families avoid both overpricing that delays the sale and underpricing that leaves money behind.`,
      },
      {
        question: `What if family members disagree about selling the ${city.name} property?`,
        answer: `David provides objective, condition-based analysis and clear market data that helps all family members understand the property's realistic value and the implications of different decisions. His neutral, experienced approach often helps families find common ground based on facts rather than emotions.`,
      },
      {
        question: `Does David help with the cleanout and preparation of ${city.name} estate homes?`,
        answer: `Yes. David coordinates the full preparation process — from organizing cleanout vendors to assessing which repairs or updates are worth the investment. He manages these logistics so executors and families can focus on the broader estate administration without getting overwhelmed by property details.`,
      },
      {
        question: `How long does it usually take to sell an inherited property in ${city.name}?`,
        answer: `Timeline varies based on the property's condition, the preparation needed, and current market conditions in ${city.name}. David helps set realistic expectations from the start — outlining a practical timeline that accounts for cleanout, preparation, listing, and the sale process so there are no surprises along the way.`,
      },
    ],
    waterfront: [
      {
        question: `How is pricing a waterfront or water-view home in ${city.name} different?`,
        answer: `Waterfront properties in ${city.name} involve unique valuation factors — shoreline type, view corridors, bulkhead condition, and water access all affect value in ways that automated tools miss. David's certified appraiser credentials give him the training to evaluate these features accurately, producing pricing that reflects the property's actual position in ${city.name}'s waterfront market.`,
      },
      {
        question: `What should a trustee know about selling waterfront property in ${city.name}?`,
        answer: `Trustees managing waterfront property in ${city.name} have fiduciary obligations that require documented, defensible pricing decisions. David's dual broker-appraiser credentials provide the kind of valuation discipline that supports these obligations — evaluating condition, view premiums, and market position with professional precision.`,
      },
      {
        question: `Can David help sell an inherited ${city.name} home if the family lives elsewhere?`,
        answer: `Yes. Many of David's ${city.name} clients manage from Seattle, Portland, or out of state. He coordinates all on-site activities — property access, vendor management, preparation, and the full sale process — providing regular updates so you can manage from a distance without repeated trips.`,
      },
      {
        question: `What preparation is worthwhile before listing an estate home in ${city.name}?`,
        answer: `It depends on the property's condition and what ${city.name} buyers expect. David evaluates which improvements are likely to improve the sale outcome and which are better left for the buyer — using his appraisal background to make recommendations based on return on investment rather than assumptions.`,
      },
      {
        question: `How does the local buyer pool in ${city.name} affect estate property sales?`,
        answer: `${city.name}'s buyer pool has specific preferences shaped by the community's character — waterfront access, walkability, and neighborhood feel all matter. David understands what local buyers prioritize and positions estate properties to appeal to the right audience, even when the property needs condition-related adjustments.`,
      },
    ],
    smalltown: [
      {
        question: `What should I know about selling an inherited home in a community like ${city.name}?`,
        answer: `Smaller communities like ${city.name} have more focused buyer pools, which means accurate pricing is especially important. David's appraisal background helps him set prices that reflect local demand and property condition — avoiding the extended market time that comes from overpricing in a smaller market.`,
      },
      {
        question: `How does David handle estate sales in ${city.name} when the family lives far away?`,
        answer: `David manages the entire process locally — from property assessment and cleanout coordination to preparation, listing, and sale. He provides regular updates by phone and email so you can manage your executor or trustee responsibilities from wherever you are, without needing frequent trips to ${city.name}.`,
      },
      {
        question: `Is it worth making repairs to an inherited home in ${city.name} before selling?`,
        answer: `It depends on the property's condition and what ${city.name} buyers expect. David evaluates which improvements are likely to improve the sale price enough to justify the cost and delay — and which are better left for the buyer. His appraisal training ensures these recommendations are based on data, not guesswork.`,
      },
      {
        question: `Does David work with local attorneys on ${city.name} probate cases?`,
        answer: `Yes. David coordinates with estate attorneys on probate sales, providing property assessments, market analysis, and structured sale management that aligns with court requirements. Attorneys appreciate David's clear communication and consistent follow-through on the real estate side of estate administration.`,
      },
      {
        question: `What makes selling estate property in ${city.name} different from selling in a larger city?`,
        answer: `${city.name}'s smaller market means properties may take longer if overpriced, and the buyer pool has specific expectations shaped by the community's character. David's local market awareness and appraisal discipline help him position estate properties realistically — attracting qualified buyers without unnecessary time on market.`,
      },
    ],
    military: [
      {
        question: `What should military families in ${city.name} know about managing inherited property?`,
        answer: `Military families often face deployment timelines, relocations, and distance challenges when dealing with inherited property. David provides full-service coordination — handling property assessment, preparation, and sale while keeping families informed regardless of where they are stationed. His structured approach works well for families who need reliable execution without being able to manage on-site.`,
      },
      {
        question: `How does David price estate property in ${city.name}'s market?`,
        answer: `David uses his dual credentials as a licensed broker and certified appraiser to evaluate each ${city.name} property based on condition, neighborhood demand, and comparable sales. This discipline-based approach produces pricing that is accurate and defensible — important for executors and trustees who need well-supported decisions.`,
      },
      {
        question: `Can David coordinate a ${city.name} property sale if I am stationed elsewhere?`,
        answer: `Yes. David regularly works with military families and service members managing property transitions from a distance. He handles property access, vendor coordination, preparation, and the complete sale process — providing consistent updates so you stay informed without needing to travel to ${city.name}.`,
      },
      {
        question: `What preparation should be done before listing an inherited ${city.name} home?`,
        answer: `David evaluates the property's condition and the local market expectations to recommend targeted preparation that improves the sale outcome. In ${city.name}, where buyer expectations are shaped by practical value, his appraisal background helps identify which improvements are worthwhile and which are not.`,
      },
      {
        question: `How long does it take to sell estate property in ${city.name}?`,
        answer: `Timeline depends on the property's condition, preparation needs, and current market activity in ${city.name}. David sets realistic expectations from the beginning and provides a structured timeline covering cleanout, preparation, listing, and sale — so you know what to expect at every stage.`,
      },
    ],
    rural: [
      {
        question: `How do you value a rural or acreage property near ${city.name}?`,
        answer: `Rural properties near ${city.name} involve factors that standard residential valuation tools handle poorly — acreage, outbuildings, well and septic systems, and access considerations all affect value. David's certified appraiser credentials give him the training to evaluate these non-standard features and produce pricing that reflects what rural-market buyers will actually pay.`,
      },
      {
        question: `What challenges come with selling an inherited property near ${city.name}?`,
        answer: `Inherited rural properties often involve unique characteristics — deferred maintenance on outbuildings, well or septic concerns, access road conditions, or zoning restrictions. David assesses these factors honestly, helping families understand the property's realistic value and the preparation steps that will meaningfully affect the sale outcome.`,
      },
      {
        question: `Can David help if the inherited property near ${city.name} has agricultural elements?`,
        answer: `Yes. Properties with agricultural zoning, farmland, or agricultural outbuildings require specialized assessment. David's appraiser credentials and experience with non-standard properties allow him to evaluate these features accurately and market the property to the right buyer pool.`,
      },
      {
        question: `What should I do first with an inherited rural property near ${city.name}?`,
        answer: `Secure the property, confirm your legal authority to act, and get a realistic property assessment. David can visit the property, evaluate its condition and unique features, and outline a clear path forward — whether that means preparing for sale, addressing immediate maintenance concerns, or developing a timeline that works for your situation.`,
      },
      {
        question: `How does David manage a rural ${city.name}-area estate sale from a distance?`,
        answer: `David handles all on-site coordination — property access, condition assessment, vendor management, and the full sale process. Rural properties often require more hands-on coordination than suburban homes, and David's local presence ensures nothing falls through the cracks while keeping distant family members informed at every step.`,
      },
    ],
  };

  const faqs = city.localFaqs || toneFaqSets[tone] || toneFaqSets.suburban;

  const clientTypes = city.localClientTypes || [
    `Executors and personal representatives managing estate property in ${city.name}`,
    `Attorneys and fiduciaries seeking a reliable real estate partner in ${city.county}`,
    `Seniors and families preparing to transition from a longtime ${city.name} home`,
    `Trustees managing trust-owned real estate in ${city.name}`,
    `Out-of-state heirs who need local coordination for an inherited property`,
    `CPAs and financial planners advising clients on property-related decisions`,
  ];

  const heroIntro = city.heroIntro ||
    `Real Property Planning provides experienced real estate guidance for probate sales, estate property, senior transitions, and related situations in ${city.name} and throughout ${city.county}. David Stein combines over 20 years of experience as a licensed broker and state-certified residential appraiser to help clients make well-informed decisions about value, preparation, timing, and sale strategy.`;

  const defaultWhoIHelp = `David Stein works with executors, trustees, attorneys, fiduciaries, and families in ${city.name} who are navigating a property situation connected to probate, an estate, a trust, or a senior transition. Whether you are local or managing from a distance, David provides the hands-on coordination and honest guidance that these situations require.`;

  const defaultWhyCredentials = `In ${city.name}, property values and buyer expectations can shift significantly from one neighborhood to the next. David's dual credentials as a licensed broker and state-certified residential appraiser allow him to evaluate a property's actual condition, assess its realistic market value, and guide the sale with the kind of precision that estate, probate, and trust situations demand.`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Probate & Estate Real Estate Services in ${city.name}, WA | Real Property Planning`}
        description={city.descriptor
          ? `${city.descriptor} — Real Property Planning provides probate, estate, and senior transition guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein.`
          : `Real Property Planning provides probate, estate, senior transition, and valuation-informed real estate guidance in ${city.name}, ${city.county}. Licensed broker and certified appraiser David Stein serves clients throughout Washington State.`
        }
        noindex={!tier1}
      />
      <BreadcrumbSchema
        items={[
          { name: "Counties", url: "/counties" },
          { name: city.county, url: `/${city.countySlug}` },
          { name: city.name, url: `/cities/${city.slug}` },
        ]}
      />
      <Header />

      {/* Hero — unique H1 + city-specific intro */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {city.name}, {city.county}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              {city.heroHeading || `Real Estate Guidance for Important Property Transitions in ${city.name}`}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {heroIntro}
            </p>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question={`How do probate and estate property sales work in ${city.name}?`}
        answer={`David Stein provides hands-on real estate guidance for executors, trustees, attorneys, and families selling probate, inherited, and trust-held property in ${city.name}, ${city.county}. As a licensed broker and certified residential appraiser with 20+ years of experience, he evaluates each property's condition, develops accurate pricing, coordinates preparation, and manages the full sale process.`}
        supportSteps={[
          { label: "Evaluate", desc: "Property assessment and valuation-informed pricing" },
          { label: "Prepare", desc: "Cleanout, repairs, and vendor coordination" },
          { label: "Sell", desc: "Marketing, negotiation, and closing" },
        ]}
      />

      {/* Who I Help + Why Credentials — combined compact section */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                Who Does David Stein Help in {city.name}?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {city.whoIHelp || defaultWhoIHelp}
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl text-foreground font-semibold mb-3">
                Why Does Broker and Appraiser Experience Matter Here?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {city.whyCredentialsMatter || defaultWhyCredentials}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOILERPLATE MOVED LOWER --- */}
      <TrustStrip />

      {/* Who We Work With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {whoHeadings[tone]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Many of the people David works with in {city.name} are navigating something they haven't been through before:
            </p>
            <ul className="space-y-4">
              {clientTypes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              {situationHeadings[tone]}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              These are the kinds of circumstances that typically lead to a conversation:
            </p>
            <ul className="space-y-4">
              {situations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading={`Need Guidance on a ${city.name} Property?`}
        body="A brief conversation is usually the fastest way to get clarity on your options and next steps."
        buttonText="Schedule a Conversation"
      />

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              What David Can Help With in {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
              The right approach depends on the situation. Here are the areas where David's experience is most relevant:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/cities/${city.slug}/${service.slug}`}
                  className="card-3d group p-6"
                >
                  <h3 className="font-serif text-lg text-foreground font-medium mb-2 group-hover:text-gold transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With a Broker/Appraiser */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Work With a Broker and Appraiser Who Understands {city.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {whyBrokerAppraiser}
            </p>
          </div>
        </div>
      </section>

      {/* Why Local Knowledge Matters */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Does Local Knowledge Matter for Property Transitions in {city.name}?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {whyLocal}
            </p>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading={`${city.name} Property Transition FAQ`} />

      {/* Internal Links — City-specific */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Parent county */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3">County Hub</p>
              <div className="flex flex-wrap gap-3">
                <Link to={`/counties/${city.countySlug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                  {`Estate and probate property services in ${city.county}`}
                </Link>
              </div>
            </div>

            {/* Sibling city pages */}
            {(() => {
              const countyData = counties.find(c => c.slug === city.countySlug);
              const siblings = countyData?.cities.filter(c => c.slug !== city.slug).slice(0, 8) || [];
              if (siblings.length === 0) return null;
              return (
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Nearby Communities</p>
                  <div className="flex flex-wrap gap-3">
                    {siblings.map((c, i) => (
                      <span key={c.slug}>
                        {i > 0 && <span className="text-muted-foreground/40 mr-3">·</span>}
                        <Link to={`/cities/${c.slug}`} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                          {`Property transition guidance in ${c.name}`}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Service pages */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3">Related Services</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Selling probate property in Washington</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Guidance for executors and personal representatives</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/trustees" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Guidance for trustees managing real estate</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Real estate partner for probate and estate attorneys</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior transition and relocation support</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why appraisal-informed pricing matters</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the estate property process works</Link>
              </div>
            </div>

            {/* Educational guides */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3">Educational Guides</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How probate real estate sales work in Washington</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">First steps for executors with a house to sell</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What to do with an inherited house in Washington</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Managing inherited property from out of state</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/sell-inherited-house-as-is-or-fix" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Sell inherited house as-is or fix it up?</Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/guides/taxes-selling-inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Tax considerations when selling inherited property</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={`/cities/${city.slug}`} />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to Talk About Your {city.name} Property?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              David can walk you through your situation and help you figure out a practical path forward.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default CityPageTemplate;
