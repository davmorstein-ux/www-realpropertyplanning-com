import CountyPageTemplate from "@/components/CountyPageTemplate";

const PierceCounty = () => (
  <CountyPageTemplate
    countyName="Pierce County"
    countyPath="/counties/pierce"
    cities={[
      "Tacoma", "Gig Harbor", "University Place", "Puyallup", "Lakewood",
      "Bonney Lake", "Sumner", "Fircrest", "Steilacoom", "DuPont",
      "Orting", "Buckley", "Edgewood", "Milton", "Ruston",
      "Fox Island", "Key Peninsula",
    ]}
  />
);

export default PierceCounty;
