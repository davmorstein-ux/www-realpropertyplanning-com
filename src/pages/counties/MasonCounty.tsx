import CountyPageTemplate from "@/components/CountyPageTemplate";

const MasonCounty = () => (
  <CountyPageTemplate
    countyName="Mason County"
    countyPath="/mason-county"
    countySlug="mason-county"
    heroH1="Mason County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — experienced guidance for families throughout Mason County."
    belowHeroHeading="Serving Every Corner of Mason County"
    seoTitle="Probate & Estate Real Estate in Mason County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Mason County, Washington. Serving Shelton, Belfair, Union & Hood Canal communities."
    cities={["Shelton", "Belfair", "Union", "Hoodsport", "Allyn"]}
    localInsight="Mason County's Hood Canal waterfront, Shelton's small-city character, and the surrounding rural communities create a varied market for estate and transition properties. Waterfront premiums, rural acreage, and limited comparable sales all call for experienced, on-the-ground guidance."
    aeoQuestion="How does probate real estate work in Mason County?"
    aeoAnswer="Mason County probate is administered through the Mason County Superior Court in Shelton. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors and families through every step of the process."
  />
);

export default MasonCounty;
