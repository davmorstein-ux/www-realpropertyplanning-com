import CountyPageTemplate from "@/components/CountyPageTemplate";

const SanJuanCounty = () => (
  <CountyPageTemplate
    countyName="San Juan County"
    countyPath="/san-juan-county"
    countySlug="san-juan-county"
    heroH1="San Juan County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — experienced guidance for families managing island property in the San Juans."
    belowHeroHeading="Serving Every Corner of San Juan County"
    seoTitle="Probate & Estate Real Estate in San Juan County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout San Juan County, Washington. Serving Friday Harbor, Eastsound, Lopez Island & the San Juan Islands."
    cities={["Friday Harbor", "Eastsound", "Lopez Island", "Deer Harbor"]}
    localInsight="The San Juan Islands are one of Washington's most distinctive and sought-after real estate markets. Estate properties on San Juan, Orcas, Lopez, and the smaller islands require specialized valuation and coordination for families managing from the mainland or out of state."
    aeoQuestion="How does probate real estate work in San Juan County?"
    aeoAnswer="San Juan County probate is administered through the San Juan County Superior Court in Friday Harbor. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors and families through every step of the process — including the ferry logistics and mainland coordination island estates require."
  />
);

export default SanJuanCounty;
