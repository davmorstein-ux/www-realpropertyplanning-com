import CountyPageTemplate from "@/components/CountyPageTemplate";

const SnohomishCounty = () => (
  <CountyPageTemplate
    countyName="Snohomish County"
    countyPath="/counties/snohomish"
    cities={[
      "Everett", "Edmonds", "Lynnwood", "Bothell", "Mill Creek",
      "Mukilteo", "Snohomish", "Lake Stevens", "Marysville", "Arlington",
      "Mountlake Terrace", "Brier", "Woodway", "Stanwood", "Monroe",
      "Sultan", "Granite Falls",
    ]}
  />
);

export default SnohomishCounty;
