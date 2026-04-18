import CountyPageTemplate from "@/components/CountyPageTemplate";

const LewisCounty = () => (
  <CountyPageTemplate
    countyName="Lewis County"
    countyPath="/lewis-county"
    countySlug="lewis-county"
    heroH1="Lewis County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — experienced guidance for families throughout Lewis County."
    belowHeroHeading="Serving Every Corner of Lewis County"
    seoTitle="Probate & Estate Real Estate in Lewis County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Lewis County, Washington. Serving Chehalis, Centralia, Morton & surrounding communities."
    cities={["Chehalis", "Centralia", "Morton", "Winlock", "Napavine", "Toledo"]}
    localInsight="Lewis County stretches from Chehalis and Centralia along I-5 to the rural communities of the Cascade foothills. Estate properties here often include older homes, rural acreage, and agricultural parcels that benefit from condition-based pricing and local coordination."
    aeoQuestion="How does probate real estate work in Lewis County?"
    aeoAnswer="Lewis County probate is administered through the Lewis County Superior Court in Chehalis. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors and families through every step of the process."
  />
);

export default LewisCounty;
