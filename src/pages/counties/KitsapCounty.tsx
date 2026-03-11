import CountyPageTemplate from "@/components/CountyPageTemplate";

const KitsapCounty = () => (
  <CountyPageTemplate
    countyName="Kitsap County"
    countyPath="/counties/kitsap"
    cities={[
      "Bremerton", "Silverdale", "Poulsbo", "Bainbridge Island",
      "Port Orchard", "Kingston", "Suquamish", "Indianola",
      "Seabeck", "Hansville", "Keyport",
    ]}
  />
);

export default KitsapCounty;
