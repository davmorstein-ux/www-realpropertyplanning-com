import CountyPageTemplate from "@/components/CountyPageTemplate";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

const ClarkCounty = () => (
  <CountyPageTemplate
    countyName="Clark County"
    countyPath="/clark-county"
    countySlug="clark-county"
    cities={[
      "Vancouver", "Camas", "Washougal", "Battle Ground", "Ridgefield",
      "La Center", "Woodland", "Brush Prairie", "Hockinson", "Yacolt",
    ]}
    localInsight={`Clark County sits on the Washington-Oregon border, which adds complexity to property transitions. Families often deal with cross-state legal, tax, and logistical questions while managing inherited homes. ${FEATURED_BROKER.Role} is both a licensed broker and a certified appraiser and works on estate property in a market shaped by its proximity to Portland and by rapid suburban growth.`}
    whoIHelp={`${FEATURED_BROKER.Role} works with executors managing inherited homes in Vancouver and Camas, trustees overseeing trust property in fast-growing communities like Ridgefield and Battle Ground, attorneys handling cross-border probate complexities, and families coordinating from Portland or farther away. Clark County's position on the Washington-Oregon border adds layers to these cases, and ${FEATURED_BROKER.pronoun.possessive} approach is structured with that in mind.`}
    whyCredentialsMatter={`Clark County's rapid growth and cross-border buyer dynamics create pricing challenges that standard market analysis often misses. As a licensed broker and certified appraiser, ${FEATURED_BROKER.role} can evaluate how Portland-area demand, Washington's tax advantages, and neighborhood-level growth patterns affect a specific property's value, giving executors and trustees the well-supported pricing their fiduciary roles require.`}
    marketOverview="Clark County's real estate market has changed rapidly over the past decade, driven by population growth and its position as a lower-tax alternative to Portland, Oregon. Neighborhoods range from established Vancouver subdivisions to newer developments in Ridgefield and Battle Ground. Estate properties here vary widely, from mid-century homes near downtown Vancouver to rural acreage in the eastern foothills. Accurate pricing requires understanding how cross-border buyer dynamics, local school boundaries, and neighborhood-level demand patterns affect value, especially for properties with deferred maintenance or non-standard condition."
    localParagraph={`Clark County's cross-state dynamics raise specific questions for estate property sales. Families may be coordinating between Washington and Oregon legal frameworks, managing property from Portland or farther away, and selling in a market where buyer expectations shift significantly between urban Vancouver, suburban Camas, and rural Battle Ground. ${FEATURED_BROKER.Role}'s familiarity with these distinctions helps executors and families position properties for their condition and location within the county.`}
    clientTypes={[
      "Executors managing inherited homes in Vancouver while coordinating across the Oregon border",
      "Attorneys handling probate cases involving Clark County property with cross-state complexities",
      "Trustees overseeing trust-owned real estate in Camas, Washougal, or Battle Ground",
      "Families relocating from Portland who need to sell a parent's longtime Clark County home",
      "Out-of-state heirs unfamiliar with the Vancouver-Portland metro market dynamics",
      "Senior living professionals helping families transition from established Clark County neighborhoods",
    ]}
    typicalSituations={[
      "Inherited homes in Vancouver where cross-state tax and legal considerations add complexity",
      "Probate property in Camas or Washougal requiring coordination between Washington and Oregon parties",
      "Estate homes in fast-growing areas like Ridgefield where pricing has shifted significantly",
      "Senior transitions from longtime family homes near downtown Vancouver or Salmon Creek",
      "Multi-heir estates where family members live in different states and disagree on timing or strategy",
      "Properties with deferred maintenance in older Clark County neighborhoods needing realistic assessment",
    ]}
    countySpecificFaqs={[
      {
        question: "How does Clark County's proximity to Portland affect estate property sales?",
        answer: `Clark County draws cross-border buyer demand, as many Portland-area residents are drawn by Washington's lack of state income tax. For estate sales, this can mean a larger buyer pool than the local population alone would suggest. However, pricing must account for how different Clark County neighborhoods compete with Portland-area alternatives. ${FEATURED_BROKER.Role} factors these cross-border dynamics into how each property is priced and positioned.`,
      },
      {
        question: "What cross-state complications can arise when selling inherited property in Clark County?",
        answer: `When heirs live in Oregon or the estate involves cross-border legal considerations, families may need to coordinate between Washington and Oregon legal frameworks, tax obligations, and professional advisors. ${FEATURED_BROKER.Role} works alongside the estate's attorney on the real estate side of these situations, so the property sale fits the broader legal and financial picture.`,
      },
      {
        question: "How has rapid growth in Ridgefield and Battle Ground changed estate property values?",
        answer: `Areas like Ridgefield and Battle Ground have seen significant appreciation as Clark County's population has grown. Estate properties in these communities may be worth substantially more than families expect based on older assessments. ${FEATURED_BROKER.Role} provides current, condition-based pricing analysis that accounts for recent market shifts, helping executors avoid both underpricing in appreciating areas and overpricing in neighborhoods where growth has been more moderate.`,
      },
      {
        question: "Should I sell a Vancouver estate home as-is or invest in preparation?",
        answer: `It depends on the property's condition, location within Vancouver, and the current buyer expectations for that neighborhood. A home near downtown Vancouver's revitalized core may benefit from targeted preparation, while a property in a more established subdivision might sell well as-is. ${FEATURED_BROKER.Role} evaluates each situation individually, using ${FEATURED_BROKER.pronoun.possessive} appraisal background to assess which investments are likely to improve the outcome.`,
      },
      {
        question: "Can you get help if the executor lives in Portland and the property is in Clark County?",
        answer: `Yes. ${FEATURED_BROKER.Role} works with executors and trustees based in the Portland area. Even when the property is just across the river, an estate sale still requires on-site coordination: securing the property, supervising cleanout, managing vendors, and handling the listing and sale process. ${FEATURED_BROKER.pronoun.Subject} provides that local presence and keeps you updated throughout.`,
      },
    ]}
    aeoQuestion="How do probate and inherited property sales work in Clark County?"
    aeoAnswer={`Clark County families, many with ties to both sides of the Columbia River, often face cross-state coordination during estate and probate property transitions. ${FEATURED_BROKER.Role} provides clear cross-state communication, hands-on local presence, and full sale management for executors, trustees, and attorneys throughout Clark County.`}
    aeoSupportBullets={[
      "Clear communication with families coordinating across the Portland-Vancouver metro area",
      "Pricing that reflects Clark County's distinct neighborhood and cross-border buyer dynamics",
      "Full coordination from property assessment through closing",
    ]}
  />
);

export default ClarkCounty;
