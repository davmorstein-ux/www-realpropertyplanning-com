import CountyPageTemplate from "@/components/CountyPageTemplate";

const PierceCounty = () => (
  <CountyPageTemplate
    countyName="Pierce County"
    countyPath="/counties/pierce"
    cities={[
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ]}
    localInsight="Pierce County's real estate market stretches from Tacoma's historic neighborhoods to Gig Harbor's waterfront properties — with wide variation in home values, buyer expectations, and property condition. David Stein works with executors, families, and attorneys throughout Pierce County, bringing practical experience with older homes, estate cleanouts, and realistic pricing in a market that rewards informed preparation."
    localParagraph="Estate properties in Pierce County frequently involve older homes with character details and deferred maintenance — the kind of properties that automated valuation tools consistently misprice. Tacoma's North End and Stadium District homes attract a different buyer than properties in Puyallup or Lakewood, and Gig Harbor waterfront listings demand specialized marketing. David's appraisal background helps him price each property based on its actual condition and specific market context, not generic comps from across the county."
    typicalSituations={[
      "Older Tacoma homes with character features but significant deferred maintenance",
      "Inherited properties in University Place or Fircrest needing condition assessment before listing",
      "Gig Harbor waterfront or view homes with unique valuation and marketing needs",
      "Family coordination for estate properties in Puyallup or Bonney Lake",
      "Trust-owned homes in Lakewood where the trustee needs sale planning guidance",
      "Senior transitions from longtime Pierce County homes to smaller residences",
    ]}
  />
);

export default PierceCounty;
