import CountyPageTemplate from "@/components/CountyPageTemplate";

const ThurstonCounty = () => (
  <CountyPageTemplate
    countyName="Thurston County"
    countyPath="/thurston-county-probate-estate-real-estate"
    countySlug="thurston-county"
    cities={[
      "Olympia", "Lacey", "Tumwater", "Yelm", "Rainier",
      "Tenino", "Bucoda", "Rochester",
    ]}
    localInsight="As the state capital region, Thurston County has a distinctive mix of government-connected homeowners, longtime residents, and retirees. Estate properties here often involve thoughtful, unhurried transitions — families who want careful guidance rather than aggressive timelines. David Stein's dual credentials as a licensed broker and certified appraiser provide the steady, informed approach that Thurston County families value."
    marketOverview="Thurston County's real estate market balances affordability with quality of life, attracting retirees, government employees, and families seeking more space than the Puget Sound metro offers. Property types range from established Olympia neighborhoods near Capitol Lake to newer developments in Lacey and rural acreage around Yelm and Rainier. Estate properties often reflect decades of ownership — well-loved homes that may need updating or condition-based assessment to price accurately. David's appraisal discipline helps families set realistic expectations in a market where overpricing can mean months of unnecessary delay."
    localParagraph="Thurston County families often approach property transitions with care and deliberation. Whether it is a retiree downsizing from a longtime Olympia home, an executor managing a parent's property in Lacey, or a family coordinating from out of the area on inherited acreage near Tumwater, the process benefits from patience and local awareness. David's familiarity with Thurston County neighborhoods, buyer expectations, and seasonal market rhythms helps families move forward at a pace that feels right — without sacrificing outcome."
    clientTypes={[
      "Executors managing estate property in Olympia, Lacey, or Tumwater after a parent's passing",
      "Attorneys handling probate filings in Thurston County Superior Court who need property coordination",
      "Trustees overseeing trust-owned homes in established Olympia neighborhoods",
      "Retirees and their families planning a thoughtful transition from a longtime Thurston County residence",
      "Out-of-area heirs who need local guidance on inherited property near the state capital",
      "Financial planners advising clients on estate property decisions in the South Sound region",
    ]}
    typicalSituations={[
      "Inherited homes in established Olympia neighborhoods where families want a measured, careful approach",
      "Probate property in Lacey or Tumwater requiring coordination with the estate attorney and court timeline",
      "Retiree transitions from longtime family homes to smaller residences or senior communities",
      "Estate properties with decades of accumulated belongings needing organized cleanout and preparation",
      "Multi-heir situations where family members want clear guidance on pricing and realistic timeline expectations",
      "Rural or semi-rural properties near Yelm or Rainier with unique market positioning considerations",
    ]}
  />
);

export default ThurstonCounty;
