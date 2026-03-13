import CountyPageTemplate from "@/components/CountyPageTemplate";

const SnohomishCounty = () => (
  <CountyPageTemplate
    countyName="Snohomish County"
    countyPath="/counties/snohomish"
    cities={[
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek", "Bothell",
      "Snohomish", "Lake Stevens", "Marysville", "Monroe", "Arlington",
    ]}
    localInsight="Snohomish County's mix of waterfront communities, suburban neighborhoods, and rural acreage means every estate property requires a market-specific approach. David's local experience spans the full range — from Edmonds waterfront homes to Lake Stevens family properties."
    localParagraph="Snohomish County continues to grow, with strong demand in communities like Edmonds, Mill Creek, and Mukilteo, while areas like Lake Stevens, Marysville, and Monroe offer different market dynamics. Estate properties here often include longtime family homes with decades of personal belongings, deferred maintenance, and outdated systems. David understands the nuances of this market and helps families and professionals make informed decisions about preparation, timing, and pricing strategy."
    typicalSituations={[
      "Inherited homes in Edmonds and Mukilteo with waterfront or view premiums",
      "Probate properties in Everett and Lynnwood requiring cleanout and preparation",
      "Rural or acreage properties in Snohomish, Monroe, or Arlington",
      "Longtime family homes in Mill Creek and Bothell needing market-readiness planning",
      "Estate sales coordinated with out-of-state executors or multiple heirs",
      "Senior downsizing from suburban family homes to senior living communities",
    ]}
  />
);

export default SnohomishCounty;
