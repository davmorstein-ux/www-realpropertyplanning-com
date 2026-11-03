import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const ThurstonCounty = () => (
  <CountyPageTemplate
    countyName="Thurston County"
    countyPath="/thurston-county"
    countySlug="thurston-county"
    seoTitle="Thurston County Probate & Estate Real Estate | Real Property Planning"
    seoDescription="Probate, inherited property, and senior transitions across Thurston County — Olympia, Lacey, Tumwater, Yelm, and surrounding communities."
    cities={[
      "Olympia", "Lacey", "Tumwater", "Yelm", "Rainier",
      "Tenino", "Bucoda", "Rochester",
    ]}
    localInsight={`As the state capital region, Thurston County has a mix of government-connected homeowners, longtime residents, and retirees. Estate property transitions here are often unhurried, with families who prefer careful planning to aggressive timelines. ${FEATURED_BROKER.Role} is both a licensed broker and a certified appraiser, and works at the pace the estate needs.`}
    whoIHelp={`${FEATURED_BROKER.Role} works with executors managing estate property in Olympia and Lacey, trustees overseeing trust-owned homes in established Capitol-area neighborhoods, attorneys handling probate filings in Thurston County Superior Court, and retirees planning a move out of a longtime family residence.`}
    whyCredentialsMatter={`Thurston County's mix of government housing, established neighborhoods, and rural acreage makes valuation harder than it looks. As a licensed broker and certified appraiser, ${FEATURED_BROKER.role} assesses properties based on actual condition and local buyer demand, not aspirational pricing that can lead to months of unnecessary market time. For executors and trustees with fiduciary obligations, that discipline matters.`}
    marketOverview={`Thurston County's real estate market balances affordability with quality of life, attracting retirees, government employees, and families seeking more space than the Puget Sound metro offers. Property types range from established Olympia neighborhoods near Capitol Lake to newer developments in Lacey and rural acreage around Yelm and Rainier. Estate properties often reflect decades of ownership: homes that may need updating or a condition-based assessment to price accurately. ${FEATURED_BROKER.Role}'s appraisal background helps families set realistic expectations in a market where overpricing can mean months of unnecessary delay.`}
    localParagraph={`Thurston County property transitions often move deliberately. A retiree downsizing from a longtime Olympia home, an executor managing a parent's property in Lacey, and a family coordinating from out of the area on inherited acreage near Tumwater all benefit from patience and local knowledge. ${FEATURED_BROKER.Role}'s familiarity with Thurston County neighborhoods, buyer expectations, and seasonal market patterns helps families plan a timeline that works for the estate.`}
    clientTypes={[
      "Executors managing estate property in Olympia, Lacey, or Tumwater after a parent's death",
      "Attorneys handling probate filings in Thurston County Superior Court who need property coordination",
      "Trustees overseeing trust-owned homes in established Olympia neighborhoods",
      "Retirees and their families planning a move from a longtime Thurston County residence",
      "Out-of-area heirs who need local help with inherited property near the state capital",
      "Financial planners advising clients on estate property decisions in the South Sound region",
    ]}
    typicalSituations={[
      "Inherited homes in established Olympia neighborhoods where families want a measured approach",
      "Probate property in Lacey or Tumwater requiring coordination with the estate attorney and court timeline",
      "Retiree transitions from longtime family homes to smaller residences or senior communities",
      "Estate properties with decades of accumulated belongings needing organized cleanout and preparation",
      "Multi-heir situations where family members want clear information on pricing and realistic timelines",
      "Rural or semi-rural properties near Yelm or Rainier with their own market positioning considerations",
    ]}
    countySpecificFaqs={[
      {
        question: "How does selling a retiree's longtime Olympia home differ from a standard sale?",
        answer: `Retiree transitions in Olympia often involve decades of accumulated belongings and a home that has been well kept but may need updating for today's buyers, on top of the emotional side of leaving. ${FEATURED_BROKER.Role} helps families organize the process at a manageable pace and prepare the property to sell well when the time comes.`,
      },
      {
        question: "What should I expect when selling estate property through Thurston County probate court?",
        answer: `Thurston County probate sales require coordination between the personal representative, the estate attorney, and the court timeline. ${FEATURED_BROKER.Role} works within these structures, providing property assessments, pricing recommendations, and sale management that align with legal requirements. ${FEATURED_BROKER.pronoun.Subject} keeps all parties updated as the process moves forward.`,
      },
      {
        question: "Is it worth investing in repairs before selling an inherited home in Lacey?",
        answer: `It depends on the property's condition and local buyer expectations in Lacey. Some improvements, like fresh paint, carpet replacement, or addressing deferred maintenance, can improve the sale price meaningfully. Others may not justify the cost or delay. ${FEATURED_BROKER.Role}'s appraisal background helps ${FEATURED_BROKER.pronoun.object} evaluate which investments are likely to pay off in this specific market.`,
      },
      {
        question: "Can you get help with a rural property near Yelm or Rainier?",
        answer: `Yes. Rural and semi-rural properties in southern Thurston County raise their own valuation questions: acreage, well and septic systems, outbuildings, and access issues that suburban-focused agents may not be equipped to assess. ${FEATURED_BROKER.Role}'s certified appraiser credentials and experience with non-standard properties apply directly to these situations.`,
      },
      {
        question: "How does the state government presence in Olympia affect the real estate market?",
        answer: `The government employment base creates a stable buyer pool in Thurston County, which can be an advantage for estate sales. However, it also means the market moves at a steadier pace than faster-growing metro areas. ${FEATURED_BROKER.Role} helps executors and families set expectations that match Thurston County's market rather than assumptions borrowed from Seattle or Tacoma.`,
      },
    ]}
    aeoQuestion="How do practical probate and estate sale strategies work in Thurston County?"
    aeoAnswer={`Thurston County's government-employment-driven market creates a steady buyer pool that behaves differently from faster-growing metro areas. ${FEATURED_BROKER.Role} provides practical estate sale strategy based on Thurston County's market, helping executors and families set realistic expectations and plan each step.`}
    aeoSupportBullets={[
      "Pricing strategy calibrated to Thurston County's steady, government-influenced market",
      "Practical preparation guidance focused on buyer expectations in Olympia, Lacey, and Tumwater",
      "Step-by-step coordination for families managing estate property from a distance",
    ]}
  />
);

export default ThurstonCounty;
