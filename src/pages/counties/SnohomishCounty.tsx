import CountyPageTemplate from "@/components/CountyPageTemplate";

const SnohomishCounty = () => (
  <CountyPageTemplate
    countyName="Snohomish County"
    countyPath="/counties/snohomish"
    cities={[
      "Everett", "Edmonds", "Lynnwood", "Mukilteo", "Mill Creek", "Bothell",
      "Snohomish", "Lake Stevens", "Marysville", "Monroe", "Arlington",
    ]}
    localInsight="Snohomish County spans waterfront communities like Edmonds and Mukilteo, established suburbs like Mill Creek and Bothell, and growing towns like Lake Stevens and Monroe — each with its own buyer pool and pricing dynamics. David Stein has worked with estate properties across this full range, helping executors and families navigate the local market with realistic expectations and a clear plan."
    localParagraph="Estate and inherited homes in Snohomish County often include longtime family properties with decades of accumulated belongings, outdated systems, and deferred repairs. Some sit in highly desirable neighborhoods where the lot value alone drives strong buyer interest; others require careful preparation and strategic pricing to attract the right buyers. David provides hands-on coordination — managing cleanout vendors, assessing repair-versus-sell-as-is decisions, and communicating consistently with out-of-state executors who cannot be on-site."
    typicalSituations={[
      "Waterfront or view properties in Edmonds and Mukilteo requiring specialized marketing",
      "Probate homes in Everett or Lynnwood that need cleanout, repairs, and preparation",
      "Rural acreage properties in Snohomish, Monroe, or Arlington with unique appraisal considerations",
      "Estate sales in Mill Creek or Bothell coordinated with out-of-state family members",
      "Inherited homes where siblings disagree about whether to sell or hold",
      "Senior transitions from suburban family homes to smaller residences or care communities",
    ]}
  />
);

export default SnohomishCounty;
