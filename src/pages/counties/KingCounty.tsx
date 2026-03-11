import CountyPageTemplate from "@/components/CountyPageTemplate";

const KingCounty = () => (
  <CountyPageTemplate
    countyName="King County"
    countyPath="/counties/king"
    cities={[
      "Seattle", "Bellevue", "Kirkland", "Redmond", "Bothell", "Shoreline",
      "Mercer Island", "Kenmore", "Woodinville", "Sammamish", "Issaquah",
      "Renton", "Kent", "Auburn", "Federal Way", "Burien", "Tukwila",
      "SeaTac", "Maple Valley", "Covington", "Newcastle", "Medina",
      "Clyde Hill", "Snoqualmie", "North Bend", "Duvall", "Vashon Island",
    ]}
  />
);

export default KingCounty;
