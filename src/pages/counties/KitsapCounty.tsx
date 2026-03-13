import CountyPageTemplate from "@/components/CountyPageTemplate";

const KitsapCounty = () => (
  <CountyPageTemplate
    countyName="Kitsap County"
    countyPath="/counties/kitsap"
    cities={[
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Port Orchard", "Kingston", "Suquamish",
    ]}
    localInsight="Kitsap County's peninsula geography and ferry-connected communities create a unique market with distinct buyer pools. David's experience includes the premium Bainbridge Island market as well as the more diverse Bremerton and Silverdale areas."
    localParagraph="Kitsap County's real estate market is shaped by geography, ferry access, military presence, and the appeal of waterfront and rural living. Bainbridge Island commands premium values, while Bremerton, Silverdale, and Port Orchard serve a broader buyer base. Estate properties in Kitsap often involve unique circumstances — distance from family members managing the estate, waterfront considerations, or properties that have been in families for generations. David provides the local knowledge and professional coordination these situations require."
    typicalSituations={[
      "High-value inherited properties on Bainbridge Island",
      "Probate homes in Bremerton and Silverdale needing cleanout and preparation",
      "Waterfront estate properties with unique valuation and marketing considerations",
      "Properties in Poulsbo and Kingston managed by out-of-area executors",
      "Senior transitions from longtime family homes on the Kitsap Peninsula",
      "Trust-owned real estate requiring coordinated sale planning with fiduciaries",
    ]}
  />
);

export default KitsapCounty;
