import CountyPageTemplate from "@/components/CountyPageTemplate";

const PierceCounty = () => (
  <CountyPageTemplate
    countyName="Pierce County"
    countyPath="/counties/pierce"
    cities={[
      "Tacoma", "University Place", "Gig Harbor", "Puyallup", "Bonney Lake",
      "Lakewood", "Sumner", "Fircrest", "Milton",
    ]}
  />
);

export default PierceCounty;
