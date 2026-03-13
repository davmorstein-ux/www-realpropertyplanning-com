import CountyPageTemplate from "@/components/CountyPageTemplate";

const KingCounty = () => (
  <CountyPageTemplate
    countyName="King County"
    countyPath="/counties/king"
    cities={[
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Woodinville",
      "Issaquah", "Sammamish", "Mercer Island", "Shoreline", "Renton", "Newcastle",
    ]}
    localInsight="From Capitol Hill estates to Eastside family homes, King County properties carry some of the highest values in Washington — making accurate pricing and experienced guidance especially important in probate and estate situations."
    localParagraph="King County is the most active and diverse real estate market in Washington. Estate properties here range from mid-century homes in established neighborhoods to high-value waterfront and view properties. David's combined broker and appraiser experience is particularly valuable in this market, where pricing nuances can mean tens of thousands of dollars in outcome differences. Whether the property is in downtown Seattle, suburban Bellevue, or a quieter Eastside community, David brings the local knowledge and professional judgment these situations require."
    typicalSituations={[
      "High-value probate properties in Seattle and Eastside neighborhoods",
      "Inherited homes in established communities like Shoreline, Kirkland, or Mercer Island",
      "Trust-owned condominiums and townhomes in urban locations",
      "Longtime family homes needing significant preparation before sale",
      "Estate properties with complex title, multi-heir, or court-related considerations",
      "Senior transitions from Eastside family homes to retirement communities",
    ]}
  />
);

export default KingCounty;
