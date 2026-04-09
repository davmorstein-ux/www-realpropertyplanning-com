import CountyPageTemplate from "@/components/CountyPageTemplate";

const ClarkCounty = () => (
  <CountyPageTemplate
    countyName="Clark County"
    countyPath="/clark-county-probate-estate-real-estate"
    countySlug="clark-county"
    cities={[
      "Vancouver", "Camas", "Washougal", "Battle Ground", "Ridgefield",
      "La Center", "Woodland", "Brush Prairie", "Hockinson", "Yacolt",
    ]}
    localInsight="Clark County sits at the Washington-Oregon border, making property transitions here uniquely complex. Families often navigate cross-state legal, tax, and logistical considerations while managing inherited homes. David Stein's dual credentials as a licensed broker and certified appraiser bring clarity to estate property decisions in a market shaped by proximity to Portland and rapid suburban growth."
    whoIHelp="David works with executors managing inherited homes in Vancouver and Camas, trustees overseeing trust property in rapidly growing communities like Ridgefield and Battle Ground, attorneys handling cross-border probate complexities, and families coordinating from Portland or further away. Clark County's position at the Washington-Oregon border adds layers of complexity that benefit from David's structured, experienced approach."
    whyCredentialsMatter="Clark County's rapid growth and cross-border buyer dynamics create pricing challenges that standard market analysis often misses. As a licensed broker and certified appraiser, David can evaluate how Portland-area demand, Washington's tax advantages, and neighborhood-level growth patterns affect a specific property's value — giving executors and trustees the well-supported pricing decisions their fiduciary roles require."
    marketOverview="Clark County's real estate market has evolved rapidly over the past decade, driven by population growth and its position as a lower-tax alternative to Portland, Oregon. Neighborhoods range from established Vancouver subdivisions to newer developments in Ridgefield and Battle Ground. Estate properties here vary widely — from mid-century homes near downtown Vancouver to rural acreage in the eastern foothills. Accurate pricing requires understanding how cross-border buyer dynamics, local school boundaries, and neighborhood-level demand patterns affect value — especially for properties with deferred maintenance or non-standard condition."
    localParagraph="Clark County's cross-state dynamics create unique considerations for estate property sales. Many families find themselves coordinating between Washington and Oregon legal frameworks, managing property from Portland or further away, and navigating a market where buyer expectations shift significantly between urban Vancouver, suburban Camas, and rural Battle Ground. David's familiarity with these distinctions — combined with appraisal-informed pricing — helps executors and families position properties effectively regardless of condition or location within the county."
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
      "Estate homes in rapidly growing areas like Ridgefield where pricing has shifted significantly",
      "Senior transitions from longtime family homes near downtown Vancouver or Salmon Creek",
      "Multi-heir estates where family members live in different states and disagree on timing or strategy",
      "Properties with deferred maintenance in older Clark County neighborhoods needing realistic assessment",
    ]}
  />
);

export default ClarkCounty;
