import CountyPageTemplate from "@/components/CountyPageTemplate";

const PierceCounty = () => (
  <CountyPageTemplate
    countyName="Pierce County"
    countyPath="/counties/pierce"
    cities={[
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ]}
    localInsight="Pierce County offers a distinct market with wide variation in property types and values — from Gig Harbor waterfront homes to established Tacoma neighborhoods. David brings local awareness and experienced judgment to estate property decisions throughout the county."
    localParagraph="Pierce County's real estate market includes a broad range of property types, values, and buyer expectations. Estate properties in Tacoma may involve older homes with character and deferred maintenance, while Gig Harbor properties often carry higher values and specific buyer expectations. University Place, Puyallup, and Lakewood each have their own market dynamics. David helps families, executors, and attorneys navigate these differences with practical, market-informed guidance."
    typicalSituations={[
      "Probate properties in Tacoma's historic and established neighborhoods",
      "Inherited homes in University Place and Fircrest requiring condition assessment",
      "Waterfront and view properties in Gig Harbor with unique valuation considerations",
      "Estate properties in Puyallup and Bonney Lake involving family coordination",
      "Senior transitions in Lakewood and surrounding communities",
      "Trust-owned homes where the trustee needs sale planning and market strategy",
    ]}
  />
);

export default PierceCounty;
