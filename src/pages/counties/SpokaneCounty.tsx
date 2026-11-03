import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const SpokaneCounty = () => (
  <CountyPageTemplate
    countyName="Spokane County"
    countyPath="/spokane-county"
    countySlug="spokane-county"
    cities={[
      "Spokane", "Spokane Valley", "Liberty Lake", "Cheney", "Medical Lake",
      "Airway Heights", "Deer Park", "Millwood", "Otis Orchards",
    ]}
    localInsight={`Spokane County is Eastern Washington's largest population center, and estate properties here often belong to families who live elsewhere in the state or out of state. ${FEATURED_BROKER.Role} provides on-the-ground coordination and condition-based pricing for executors and families with inherited property in a market that works very differently from the Puget Sound region.`}
    whoIHelp={`${FEATURED_BROKER.Role} works with out-of-state executors managing inherited Spokane homes, trustees overseeing trust-owned properties in Spokane Valley and Liberty Lake, attorneys handling probate cases in Spokane County Superior Court, and families coordinating senior transitions from longtime residences on the South Hill or in established neighborhoods. Distance is a factor in most of these situations, and ${FEATURED_BROKER.pronoun.subject} provides the local presence and communication that managing a property from afar requires.`}
    whyCredentialsMatter={`Spokane County's more moderate price points and neighborhood-level markets make accurate, condition-based pricing essential. As a licensed broker and certified appraiser, ${FEATURED_BROKER.role} can assess deferred maintenance, functional obsolescence, and what buyers in a given neighborhood expect. Mispricing costs executors and trustees either way: months on the market, or value left on the table.`}
    marketOverview={`Spokane County's real estate market has more moderate price points than Western Washington, with significant variation between neighborhoods. A South Hill craftsman, a Spokane Valley ranch home, and a rural property near Deer Park each sit in separate micro-markets with different buyer pools and pricing. Estate properties often carry decades of deferred maintenance, and automated valuation tools often miss the condition-based adjustments that matter most in this market. ${FEATURED_BROKER.Role}'s appraisal background helps pricing reflect actual property condition and realistic buyer expectations.`}
    localParagraph={`A well-maintained home on the South Hill, a mid-century ranch in Spokane Valley, and a rural homestead near Cheney each call for someone who knows the local buyers. ${FEATURED_BROKER.Role} can work with families coordinating from Seattle, Portland, or farther away, handling the property locally and keeping them informed. ${FEATURED_BROKER.pronoun.Possessive} knowledge of Spokane County neighborhoods, seasonal market patterns, and condition-based pricing helps clients avoid the costly mistakes that come from relying on generic market data.`}
    clientTypes={[
      "Out-of-state executors managing an inherited Spokane property from Seattle, Portland, or beyond",
      "Attorneys handling probate cases in Spokane County Superior Court who need reliable property coordination",
      "Trustees overseeing trust-owned homes in Spokane Valley, Liberty Lake, or the South Hill",
      "Families making multi-heir decisions on a longtime family home in established Spokane neighborhoods",
      "CPAs advising clients on inherited property tax implications in Eastern Washington",
      "Senior living professionals coordinating transitions from longtime Spokane County residences",
    ]}
    typicalSituations={[
      "Inherited homes in South Hill or Manito where families live hours or states away",
      "Probate property in Spokane Valley needing full coordination from cleanout through closing",
      "Estate homes with significant deferred maintenance requiring honest condition-based pricing",
      "Multi-heir situations where siblings in different cities disagree on sale approach or timeline",
      "Senior transitions from established Spokane neighborhoods to assisted living or family care",
      "Rural or semi-rural properties near Cheney or Deer Park with unusual valuation considerations",
    ]}
    countySpecificFaqs={[
      {
        question: "How do I sell an inherited home in Spokane if I live on the west side of the state?",
        answer: `${FEATURED_BROKER.Role} handles the process locally, from the initial property assessment and securing the home to coordinating cleanout, managing preparation, and overseeing the sale through closing. ${FEATURED_BROKER.pronoun.Subject} provides regular phone and email updates so you can carry out your executor or trustee role from Seattle, Portland, or wherever you are without repeated trips to Spokane.`,
      },
      {
        question: "Is the Spokane real estate market different enough from Seattle to affect how I price an estate home?",
        answer: `Yes. Spokane's buyer expectations, price points, and seasonal patterns are fundamentally different from the Puget Sound region. Overpricing based on western Washington assumptions is a common mistake among out-of-area executors. ${FEATURED_BROKER.Role}'s local market knowledge and appraisal training help pricing reflect Spokane's actual conditions rather than Seattle-based expectations.`,
      },
      {
        question: "What should I know about selling a South Hill craftsman that has been in the family for decades?",
        answer: `South Hill craftsmen appeal to Spokane buyers, but decades of ownership often means deferred maintenance that needs an honest assessment. ${FEATURED_BROKER.Role} evaluates which character features add value and which condition issues need disclosure or repair, so the home can be priced for buyers who value its age and character while accounting for realistic condition adjustments.`,
      },
      {
        question: `Does ${FEATURED_BROKER.role} work with probate attorneys in Spokane County?`,
        answer: `Yes. ${FEATURED_BROKER.Role} works with probate attorneys handling estate cases in Spokane County Superior Court. ${FEATURED_BROKER.pronoun.Subject} provides property assessments, market analysis, and structured sale management that fit court requirements and fiduciary obligations, covering the real estate side of estate administration.`,
      },
      {
        question: "How do seasonal patterns affect selling estate property in Spokane County?",
        answer: `Spokane's market has more pronounced seasonal patterns than western Washington. Winter conditions can slow showings, while spring and early summer typically bring stronger buyer activity. ${FEATURED_BROKER.Role} helps executors and trustees plan timing, weighing market conditions against estate administration deadlines and family readiness.`,
      },
    ]}
    aeoQuestion="What should you know about selling inherited property in Spokane County?"
    aeoAnswer={`Spokane County's seasonal market patterns, wide-ranging property values, and the frequency of out-of-area ownership make estate property sales here different from western Washington. ${FEATURED_BROKER.Role} provides practical guidance on pricing, preparation, and timing for executors and trustees deciding what to do with an inherited home.`}
    aeoSupportFaqs={[
      { question: "How does distance affect Spokane County estate sales?", answer: `Executors often live outside the area. ${FEATURED_BROKER.Role} coordinates the full process locally (property assessment, cleanout, preparation, and sale) with regular updates so you can manage from a distance.` },
      { question: "Does Spokane's seasonal market matter for timing?", answer: `Yes. Spokane has more pronounced seasonal patterns than western Washington. ${FEATURED_BROKER.Role} helps plan the timing of a sale with estate deadlines in mind.` },
    ]}
  />
);

export default SpokaneCounty;
