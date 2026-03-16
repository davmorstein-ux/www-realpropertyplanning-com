import CountyPageTemplate from "@/components/CountyPageTemplate";

const SkagitCounty = () => (
  <CountyPageTemplate
    countyName="Skagit County"
    countyPath="/counties/skagit"
    cities={[
      "Mount Vernon", "Burlington", "Anacortes", "Sedro-Woolley",
      "La Conner", "Concrete", "Bow", "Edison",
    ]}
    localInsight="Skagit County's mix of agricultural heritage, small-town charm, and proximity to the I-5 corridor creates a real estate landscape with wide-ranging property types and values. From Anacortes waterfront homes to farmstead properties near Mount Vernon and Burlington, David Stein brings over 20 years of dual expertise as a real estate broker and certified appraiser to help families, executors, and attorneys navigate estate-related property transitions in the Skagit Valley."
    localParagraph="Properties in Skagit County often come with unique considerations — rural acreage, agricultural zoning, waterfront access, or older homes that have been in families for decades. Executors managing Skagit properties may live outside the area, making David's hands-on coordination especially valuable. He manages property access, vendor scheduling, preparation, pricing strategy, and the full sale process — keeping families, attorneys, and fiduciaries informed throughout."
    typicalSituations={[
      "Inherited farmstead or rural properties near Mount Vernon or Burlington requiring specialized valuation",
      "Probate homes in Anacortes with waterfront or view premiums and distinct buyer pools",
      "Trust-owned properties in Sedro-Woolley or La Conner managed by out-of-area trustees",
      "Longtime family homes on acreage where multiple heirs need coordinated guidance",
      "Senior transitions from rural Skagit properties to more accessible housing options",
      "Estate properties with deferred maintenance requiring strategic preparation and pricing",
    ]}
  />
);

export default SkagitCounty;
