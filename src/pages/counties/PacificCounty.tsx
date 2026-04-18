import CountyPageTemplate from "@/components/CountyPageTemplate";

const PacificCounty = () => (
  <CountyPageTemplate
    countyName="Pacific County"
    countyPath="/pacific-county"
    countySlug="pacific-county"
    heroH1="Pacific County, WA"
    heroSubheading="Probate, estate, and senior transition real estate — experienced guidance for families throughout Pacific County."
    belowHeroHeading="Serving Every Corner of Pacific County"
    seoTitle="Probate & Estate Real Estate in Pacific County, WA | Real Property Planning"
    seoDescription="Experienced probate real estate, inherited home sales, and senior transition guidance throughout Pacific County, Washington. Serving Long Beach, Raymond, South Bend & coastal communities."
    cities={["Long Beach", "Raymond", "South Bend", "Ilwaco", "Naselle"]}
    localInsight="Pacific County's Long Beach Peninsula, Raymond, and South Bend communities offer coastal and rural properties that attract a specific buyer pool. Estate sales here require pricing calibrated to the local market and buyer demographics — not broad regional averages."
    aeoQuestion="How does probate real estate work in Pacific County?"
    aeoAnswer="Pacific County probate is administered through the Pacific County Superior Court in South Bend. Personal representatives must receive Letters Testamentary before listing or selling estate property. Real Property Planning supports executors and families through every step of the process."
  />
);

export default PacificCounty;
