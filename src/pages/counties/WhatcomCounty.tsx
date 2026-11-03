import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const WhatcomCounty = () => (
  <CountyPageTemplate
    countyName="Whatcom County"
    countyPath="/whatcom-county"
    countySlug="whatcom-county"
    cities={[
      "Bellingham", "Lynden", "Ferndale", "Blaine", "Everson",
      "Sumas", "Nooksack", "Birch Bay",
    ]}
    localInsight={`Whatcom County sits on the Canadian border and combines a university town, Bellingham, with rural communities. Estate properties here often involve second homes, waterfront parcels, or longtime family residences, where distance, unusual property features, and a smaller buyer pool make careful pricing essential. ${FEATURED_BROKER.Role} provides the valuation discipline and coordination these situations require.`}
    whoIHelp={`${FEATURED_BROKER.Role} works with executors managing inherited second homes near Birch Bay and Blaine, families handling senior transitions from longtime Bellingham residences, trustees overseeing trust-owned properties in Lynden and Ferndale, and attorneys handling probate cases in Whatcom County Superior Court. For owners managing from Seattle or out of state, ${FEATURED_BROKER.pronoun.subject} can provide local coordination and an honest assessment.`}
    whyCredentialsMatter={`Whatcom County's smaller, more localized market means overpriced properties sit longer and condition issues carry more weight than in faster-paced metro areas. ${FEATURED_BROKER.Role} is both a broker and a certified appraiser, which allows ${FEATURED_BROKER.pronoun.object} to price second homes, waterfront parcels, and rural properties on their actual condition. That helps executors and trustees avoid extended market time and avoidable financial mistakes.`}
    marketOverview={`Whatcom County's real estate market is smaller and more localized than the Puget Sound metro, with buyer expectations that vary significantly between Bellingham's walkable neighborhoods, Lynden's agricultural community, and waterfront properties along Birch Bay. Estate properties in this market often sit longer if overpriced, and condition issues that might be overlooked in a hotter market carry more weight here. ${FEATURED_BROKER.Role}'s appraisal background helps families understand what a property is realistically worth given its condition, location, and the local buyer pool, so it does not sit on the market because of aspirational pricing.`}
    localParagraph={`Whatcom County property transitions often involve unusual circumstances: families managing a second home from Seattle or out of state, inherited properties in smaller communities like Lynden or Ferndale where local market knowledge is essential, or waterfront parcels near Birch Bay that require specialized valuation. ${FEATURED_BROKER.Role} works with executors, attorneys, and families throughout Whatcom County, coordinating the work locally and giving an honest assessment so decisions can be made even when the family cannot be there in person.`}
    clientTypes={[
      "Out-of-area families managing an inherited second home or vacation property in Whatcom County",
      "Attorneys handling probate cases in Whatcom County Superior Court with unusual property types",
      "Executors coordinating the sale of a longtime family home in Bellingham or Lynden from a distance",
      "Trustees overseeing trust-owned waterfront or rural property near Birch Bay or Ferndale",
      "Families selling a parent's home in a smaller Whatcom County community",
      "Senior living professionals helping families transition from established Bellingham residences",
    ]}
    typicalSituations={[
      "Inherited second homes or vacation properties near Birch Bay or the San Juan ferry corridor",
      "Probate property in Bellingham where the executor lives in Seattle, Portland, or out of state",
      "Estate homes in Lynden or Ferndale with agricultural elements or unusual lot characteristics",
      "Senior transitions from longtime homes in Bellingham neighborhoods",
      "Properties with condition issues in a market where realistic pricing is essential for timely sale",
      "Multi-heir situations involving unusual Whatcom County property that requires specialized valuation",
    ]}
    countySpecificFaqs={[
      {
        question: "How do I sell an inherited second home or vacation property near Birch Bay?",
        answer: `Second homes and vacation properties near Birch Bay attract a specific buyer pool, often seasonal residents or retirees seeking waterfront access. ${FEATURED_BROKER.Role} evaluates these properties on their particular features (shoreline type, rental potential, seasonal demand patterns, and condition) so pricing reflects the actual buyer pool rather than year-round residential comparables that may not apply.`,
      },
      {
        question: "What makes selling estate property in Bellingham different from selling in larger markets?",
        answer: `Bellingham's buyer pool is smaller and more localized than Seattle or Tacoma, so overpricing has a more immediate and lasting effect on market time. Estate properties here also tend to attract buyers who value character and community, but they still expect an honest condition assessment. ${FEATURED_BROKER.Role}'s appraisal background helps ${FEATURED_BROKER.pronoun.object} price properties realistically for the Bellingham market.`,
      },
      {
        question: "Can you get help with an inherited property in Lynden that has agricultural elements?",
        answer: `Yes. Properties with agricultural zoning, outbuildings, or acreage near Lynden require specialized valuation that accounts for factors standard residential tools ignore. ${FEATURED_BROKER.Role}'s certified appraiser credentials allow ${FEATURED_BROKER.pronoun.object} to assess these features and market the property to buyers looking for that kind of land.`,
      },
      {
        question: "What should I do first if I inherit a Whatcom County property and live out of state?",
        answer: `The first steps are securing the property and getting a realistic assessment of its condition and market value. ${FEATURED_BROKER.Role} can visit the property, provide an honest evaluation, and outline a plan covering cleanout and preparation through listing and sale. ${FEATURED_BROKER.pronoun.Subject} coordinates the work locally so you do not need to make repeated trips to Whatcom County.`,
      },
      {
        question: "Does the Canadian border proximity affect Whatcom County property values?",
        answer: `The border location can influence buyer interest and market conditions, particularly in Blaine and other northern communities. ${FEATURED_BROKER.Role} considers how cross-border interest, seasonal tourism, and local economic factors shape property values in different parts of Whatcom County, so estate properties are priced on realistic local demand rather than assumptions.`,
      },
    ]}
    aeoQuestion="What should you consider when selling inherited property in Whatcom County?"
    aeoAnswer={`Whatcom County's mix of a university town in Bellingham, border-area demand in Blaine, and rural properties throughout the county creates pricing challenges that call for a hands-on local evaluation. ${FEATURED_BROKER.Role} provides condition-based guidance on preparation and pricing for executors and families.`}
    aeoSupportFaqs={[
      { question: "Why does Whatcom County need specialized pricing analysis?", answer: "Border proximity, seasonal tourism, and rural properties with acreage create pricing conditions that automated tools and standard market analysis often miss." },
      { question: "Can you get help with a Whatcom County property from out of state?", answer: `Yes. ${FEATURED_BROKER.Role} coordinates the full process locally and keeps you informed from property assessment through closing.` },
    ]}
  />
);

export default WhatcomCounty;
