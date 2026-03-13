import CountyPageTemplate from "@/components/CountyPageTemplate";

const KingCounty = () => (
  <CountyPageTemplate
    countyName="King County"
    countyPath="/counties/king"
    cities={[
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
      "Issaquah", "Sammamish", "Mercer Island", "Shoreline", "Renton", "Newcastle",
    ]}
    localInsight="King County is Washington's largest and most competitive real estate market. Estate properties here range from Capitol Hill bungalows to Eastside homes valued well over a million dollars — making accurate pricing and experienced coordination especially critical. David Stein's dual broker-appraiser credentials help executors, attorneys, and families avoid costly missteps in a market where pricing nuances can mean tens of thousands of dollars in outcome differences."
    localParagraph="Whether the property is a mid-century rambler in Shoreline, a waterfront home on Mercer Island, or a condominium in downtown Bellevue, King County estate sales demand market-specific knowledge. David works with families coordinating from across the country, attorneys managing complex multi-heir estates, and seniors transitioning from homes they have lived in for decades. His familiarity with King County neighborhoods, buyer expectations, and appraisal standards allows him to price and position each property with confidence."
    typicalSituations={[
      "High-value estate homes on the Eastside where pricing precision is critical",
      "Inherited Seattle properties with deferred maintenance and uncertain market position",
      "Trust-owned condominiums and townhomes requiring coordinated sale planning",
      "Multi-heir estates where siblings disagree about price or timeline",
      "Longtime family homes in Shoreline, Kirkland, or Renton needing full preparation",
      "Senior downsizing from established King County neighborhoods",
    ]}
  />
);

export default KingCounty;
