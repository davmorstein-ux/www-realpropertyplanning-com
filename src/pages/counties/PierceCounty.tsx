import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const PierceCounty = () => (
  <CountyPageTemplate
    countyName="Pierce County"
    countyPath="/pierce-county"
    countySlug="pierce-county"
    seoTitle="Probate & Estate Real Estate in Pierce County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Pierce County. Serving Tacoma, Puyallup, Gig Harbor, Lakewood & more."
    heroH1="Inherited Homes in Tacoma, Gig Harbor, and Across Pierce County"
    heroSubheading={`Tacoma's North End craftsmans, Gig Harbor waterfronts, and Puyallup family homes each face a different buyer pool. ${FEATURED_BROKER.Role} gives each estate property an honest condition assessment and a price set for its part of Pierce County.`}
    cities={[
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ]}
    localInsight={`Pierce County's housing inventory leans older than its King County neighbors, and a significant share of estate properties here are mid-century or pre-war homes carrying years of deferred maintenance. The plan depends on the neighborhood: a Stadium District craftsman with original woodwork is a different conversation than a Lakewood rambler or a Gig Harbor view lot. ${FEATURED_BROKER.Role} works with older Pierce County homes, sets realistic preparation budgets, and prices to what buyers in that submarket will actually pay.`}
    localExpertiseHeading={`${FEATURED_BROKER.Role}'s Pierce County Experience`}
    localExpertiseBody={[
      `${FEATURED_BROKER.Role} works with estate properties across Pierce County, from Tacoma's historic neighborhoods and Gig Harbor's waterfront properties to Puyallup's family communities and Lakewood's established residential areas. As both a licensed broker and a Washington State Certified Residential Appraiser, ${FEATURED_BROKER.role} prices Pierce County estate properties for their condition and neighborhood rather than on county-wide averages that may not apply.`,
    ]}
    aeoQuestion="How do probate and estate property sales work in Pierce County?"
    aeoAnswer={`The process follows Washington State probate law: establish legal authority, assess the property, set a pricing and preparation plan, list, and close. The specifics depend on where the property sits within Pierce County. A waterfront property in Gig Harbor faces a very different buyer pool than a Tacoma craftsman or a Puyallup family home. ${FEATURED_BROKER.Role}'s approach is location-specific and condition-adjusted, so the plan reflects the actual market for that property.`}
    aeoSupportFaqs={[
      {
        question: "What makes Pierce County estate sales different from King County sales?",
        answer: `Pierce County's market has different price points, different buyer demographics, and different neighborhood dynamics than King County, though some border communities like Auburn and Milton share characteristics of both. Pierce County also has its own probate court procedures and local title and legal resources, which ${FEATURED_BROKER.role} is familiar with.`,
      },
      {
        question: `How does ${FEATURED_BROKER.role} handle older Tacoma homes with significant deferred maintenance?`,
        answer: `By weighing the cost of each repair against what it is likely to add to the price. Tacoma has a significant inventory of older craftsman and mid-century homes, many of which are estate properties. ${FEATURED_BROKER.Role} evaluates each potential improvement for return on investment, helps families decide what to address and what to sell as-is, and coordinates independent local vendors for cleanout, repairs, and preparation.`,
      },
    ]}
    communitiesIntro={`${FEATURED_BROKER.Role} serves families, executors, and professionals throughout Pierce County, including:`}
    closingCtaBody={[
      `If an estate property in Pierce County has just come to you, or a probate sale there is already under way, a short conversation with ${FEATURED_BROKER.name} can start with what the house would sell for today and which repairs, if any, are worth paying for.`,
    ]}
    countySpecificFaqs={[
      {
        question: "How do I handle a probate property in Tacoma that needs significant repairs?",
        answer: `Many Tacoma estate homes, especially in the North End and Stadium District, combine character features with decades of deferred maintenance. ${FEATURED_BROKER.Role} evaluates whether targeted repairs will raise the sale price enough to justify the cost and delay, or whether selling as-is to a buyer who values the home's character and location is the better plan. ${FEATURED_BROKER.pronoun.Possessive} appraisal background grounds this analysis in market data rather than guesswork.`,
      },
      {
        question: "Is pricing a Gig Harbor waterfront home different from pricing a home in Lakewood?",
        answer: `Significantly. Gig Harbor waterfront properties attract a premium buyer pool with different expectations than Lakewood's value-oriented market. ${FEATURED_BROKER.Role}'s dual credentials as a broker and appraiser allow ${FEATURED_BROKER.pronoun.object} to assess waterfront premiums, view adjustments, and condition factors specific to each micro-market, so each property is priced for its actual buyer pool.`,
      },
      {
        question: "What if the heirs disagree about whether to fix up or sell the Pierce County property as-is?",
        answer: `Heir disagreements about preparation strategy are common in Pierce County estates. ${FEATURED_BROKER.Role} provides an objective, condition-based analysis of what specific improvements are likely to return and what the as-is value looks like, so every heir is working from the same figures rather than from assumptions.`,
      },
      {
        question: "Can a Pierce County estate sale be managed if I live out of state?",
        answer: `Yes. ${FEATURED_BROKER.Role} coordinates Pierce County estate sales for executors and trustees who live in Seattle, Portland, California, and elsewhere. That covers property access, vendor coordination, cleanout supervision, and the full sale process, with regular updates so you can fulfill your fiduciary role without repeated travel to the area.`,
      },
      {
        question: "How long does it typically take to sell an inherited home in Pierce County?",
        answer: `Timeline depends on property condition, location within the county, and preparation decisions. A well-priced home in University Place or Puyallup may sell in weeks, while a Tacoma property needing significant preparation could take longer. ${FEATURED_BROKER.Role} helps set realistic timeline expectations based on the specific property and current market conditions rather than generic averages.`,
      },
    ]}
  />
);

export default PierceCounty;
