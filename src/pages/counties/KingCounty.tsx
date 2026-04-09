import CountyPageTemplate from "@/components/CountyPageTemplate";

const KingCounty = () => (
  <CountyPageTemplate
    countyName="King County"
    countyPath="/king-county"
    countySlug="king-county"
    cities={[
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
      "Issaquah", "Sammamish", "Mercer Island", "Shoreline", "Renton", "Newcastle",
    ]}
    localInsight="King County is Washington's largest and most competitive real estate market. Estate properties here range from Capitol Hill bungalows to Eastside homes valued well over a million dollars — making accurate pricing and experienced coordination especially critical. David Stein's dual broker-appraiser credentials help executors, attorneys, and families avoid costly missteps in a market where pricing nuances can mean tens of thousands of dollars in outcome differences."
    whoIHelp="David works with executors settling estates in Seattle's established neighborhoods, trustees managing high-value Eastside properties, attorneys coordinating multi-heir sales across King County, and families navigating senior transitions from longtime homes in Shoreline, Kirkland, or Renton. Whether the property is a mid-century rambler or a lakefront home on Mercer Island, David provides steady, experienced guidance through every stage of the process."
    whyCredentialsMatter="King County's wide range of property values — from modest ramblers to multi-million-dollar estates — makes accurate pricing especially important. As a licensed broker and state-certified residential appraiser, David can evaluate condition, assess realistic market value, and guide the sale with a level of discipline that protects fiduciary interests. In a market this competitive, where overpricing means sitting and underpricing means leaving money behind, that dual perspective is a meaningful advantage."
    marketOverview="King County's real estate market is defined by intense buyer demand, limited inventory, and wide price variation between neighborhoods. A mid-century rambler in Shoreline competes in a fundamentally different market than a waterfront property on Mercer Island or a modern townhome in Kirkland. Estate properties present additional complexity — deferred maintenance, outdated finishes, and condition issues that automated valuation models consistently fail to capture. David's appraisal background allows him to evaluate these properties with the nuance that this market demands, helping clients avoid both underpricing and overpricing."
    localParagraph="Whether the property is a mid-century rambler in Shoreline, a waterfront home on Mercer Island, or a condominium in downtown Bellevue, King County estate sales demand market-specific knowledge. David works with families coordinating from across the country, attorneys managing complex multi-heir estates, and seniors transitioning from homes they have lived in for decades. His familiarity with King County neighborhoods, buyer expectations, and appraisal standards allows him to price and position each property with confidence."
    clientTypes={[
      "Executors managing high-value estate homes on the Eastside where pricing precision is critical",
      "Attorneys referring clients with complex multi-heir Seattle properties",
      "Trustees overseeing trust-owned condominiums and townhomes in Bellevue, Kirkland, or Redmond",
      "Families coordinating from out of state on inherited properties in Shoreline, Renton, or Newcastle",
      "CPAs advising clients on capital gains implications for inherited King County real estate",
      "Senior living professionals helping families transition from established King County neighborhoods",
    ]}
    typicalSituations={[
      "High-value estate homes on the Eastside where pricing precision is critical to fiduciary obligations",
      "Inherited Seattle properties with deferred maintenance and uncertain market position",
      "Trust-owned condominiums and townhomes in Bellevue or Kirkland requiring coordinated sale planning",
      "Multi-heir estates where siblings disagree about price, timeline, or preparation strategy",
      "Longtime family homes in Shoreline, Kirkland, or Renton needing full preparation before listing",
      "Senior downsizing from established King County neighborhoods to assisted living or smaller residences",
    ]}
  />
);

export default KingCounty;
