import CountyPageTemplate from "@/components/CountyPageTemplate";

const SpokaneCounty = () => (
  <CountyPageTemplate
    countyName="Spokane County"
    countyPath="/spokane-county-probate-estate-real-estate"
    countySlug="spokane-county"
    cities={[
      "Spokane", "Spokane Valley", "Liberty Lake", "Cheney", "Medical Lake",
      "Airway Heights", "Deer Park", "Millwood", "Otis Orchards",
    ]}
    localInsight="Spokane County is Eastern Washington's largest population center, and estate properties here frequently involve families managing from across the state or out of state entirely. David Stein provides on-the-ground coordination, valuation-informed pricing, and structured guidance for executors and families navigating inherited property in a market that operates very differently from the Puget Sound region."
    marketOverview="Spokane County's real estate market features more moderate price points than Western Washington, but with significant variation between neighborhoods. A South Hill craftsman, a Spokane Valley ranch home, and a rural property near Deer Park each sit in distinct micro-markets with different buyer pools and pricing dynamics. Estate properties often carry decades of deferred maintenance, and automated valuation tools consistently miss the condition-based adjustments that matter most in this market. David's appraisal background ensures pricing reflects actual property condition and realistic buyer expectations."
    localParagraph="Whether the property is a well-maintained home in the South Hill, a mid-century ranch in Spokane Valley, or a rural homestead near Cheney, Spokane County estate sales demand someone who understands the local buyer landscape. David works with families coordinating from Seattle, Portland, and across the country — providing the hands-on property management and clear communication that distance makes essential. His understanding of Spokane County neighborhoods, seasonal market patterns, and condition-based pricing helps clients avoid the costly missteps that come from relying on generic market data."
    clientTypes={[
      "Out-of-state executors managing an inherited Spokane property from Seattle, Portland, or beyond",
      "Attorneys handling probate cases in Spokane County Superior Court who need reliable property coordination",
      "Trustees overseeing trust-owned homes in Spokane Valley, Liberty Lake, or the South Hill",
      "Families navigating multi-heir decisions on a longtime family home in established Spokane neighborhoods",
      "CPAs advising clients on inherited property tax implications in Eastern Washington",
      "Senior living professionals coordinating transitions from longtime Spokane County residences",
    ]}
    typicalSituations={[
      "Inherited homes in South Hill or Manito where families live hours or states away",
      "Probate property in Spokane Valley needing full coordination from cleanout through closing",
      "Estate homes with significant deferred maintenance requiring honest condition-based pricing",
      "Multi-heir situations where siblings in different cities disagree on sale approach or timeline",
      "Senior transitions from established Spokane neighborhoods to assisted living or family care",
      "Rural or semi-rural properties near Cheney or Deer Park with unique valuation considerations",
    ]}
  />
);

export default SpokaneCounty;
