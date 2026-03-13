import CountyPageTemplate from "@/components/CountyPageTemplate";

const KitsapCounty = () => (
  <CountyPageTemplate
    countyName="Kitsap County"
    countyPath="/counties/kitsap"
    cities={[
      "Bainbridge Island", "Poulsbo", "Silverdale", "Bremerton",
      "Port Orchard", "Kingston", "Suquamish",
    ]}
    localInsight="Kitsap County's peninsula geography creates a distinct real estate market shaped by ferry access, military presence, and the appeal of waterfront and rural living. Bainbridge Island commands premium values with a Seattle commuter buyer pool, while Bremerton, Silverdale, and Port Orchard serve broader audiences. David Stein has worked with estate properties across Kitsap's varied communities — helping families who are often managing the process from the other side of the water."
    localParagraph="Estate properties on the Kitsap Peninsula frequently involve unique circumstances: homes that have been in families for generations, waterfront lots with specialized appraisal considerations, or properties in communities where buyer pools are smaller and more specific than in King County. Many executors managing Kitsap properties live in Seattle or out of state, making David's hands-on local coordination especially valuable. He manages property access, vendor scheduling, preparation, and the full sale process — keeping distant family members informed at every step."
    typicalSituations={[
      "High-value inherited homes on Bainbridge Island with ferry-commuter buyer appeal",
      "Probate properties in Bremerton or Silverdale requiring cleanout and strategic pricing",
      "Waterfront estate homes with unique appraisal and marketing requirements",
      "Properties in Poulsbo or Kingston managed by out-of-area executors or trustees",
      "Longtime family homes on the peninsula where multiple heirs need coordination",
      "Senior transitions from rural Kitsap properties to more accessible housing",
    ]}
  />
);

export default KitsapCounty;
