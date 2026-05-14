import EstateSubPageLayout, { SubH2, P, Divider } from "@/components/EstateSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney and a qualified tax professional for guidance specific to your situation.";

const PropertyValue = () => (
  <EstateSubPageLayout
    seoTitle="Understanding the Property's Value | Real Property Planning"
    seoDescription="Estate property valuation has unique requirements. Here's what a date-of-death appraisal is, why it matters, and how it differs from a standard market estimate."
    canonicalPath="/estate-probate-inherited-property/property-value"
    breadcrumbName="Understanding the Property's Value"
    bandTitle="UNDERSTANDING THE PROPERTY'S VALUE"
    disclaimer={DISCLAIMER}
  >
    <SubH2>Before Any Decision Is Made, Know What the Property Is Worth.</SubH2>
    <P>
      Estate property valuation is not the same as a standard market estimate. Getting it right protects heirs financially and legally.
    </P>

    <Divider />

    <SubH2>Why Valuation Is Different for Estate Property</SubH2>
    <P>
      When a home is being sold in a standard transaction, the owner decides what to list it for, gets feedback from the market, and adjusts. There's flexibility.
    </P>
    <P>
      Estate property valuation is different. There are legal, tax, and fairness obligations that require a defensible, professional number — not an estimate, not a Zillow figure, and not an opinion from a family member who once worked in real estate.
    </P>

    <Divider />

    <SubH2>The Date-of-Death Appraisal</SubH2>
    <P>
      The most important valuation in an estate is the <strong>date-of-death appraisal</strong> — a professional assessment of the property's fair market value as of the exact date the person passed away.
    </P>
    <P><strong>Why it matters:</strong></P>
    <P>
      <strong>Estate tax:</strong> Washington State has its own estate tax with a relatively low exemption. The value of real property is a key input into whether estate tax is owed and how much. An inaccurate valuation can result in underpayment (which triggers penalties) or overpayment (which costs heirs money).
    </P>
    <P>
      <strong>Stepped-up cost basis:</strong> When heirs inherit property, their cost basis for capital gains purposes is "stepped up" to the fair market value at the date of death. This means that if a heir sells the property shortly after inheriting it, they typically owe little or no capital gains tax — even if the property appreciated significantly during the deceased's lifetime. Without a professional appraisal to establish that stepped-up basis, heirs may face larger tax bills when they sell.
    </P>
    <P>
      <strong>Equitable distribution:</strong> If the property is being divided among multiple heirs, everyone needs an agreed-upon professional value to work from. An independent appraisal removes the guesswork and the arguments.
    </P>
    <P>
      <strong>Court requirements:</strong> Probate courts in Washington State require a formal inventory and appraisal of estate assets. A certified appraisal meets that requirement; an online estimate does not.
    </P>

    <Divider />

    <SubH2>Appraisal vs. Comparative Market Analysis (CMA)</SubH2>
    <P>These are often confused — and the distinction matters:</P>
    <P>
      <strong>A professional appraisal</strong> is conducted by a state-certified appraiser, follows established methodology, and produces a written report that is defensible in court, accepted by the IRS, and usable for tax and legal purposes.
    </P>
    <P>
      <strong>A comparative market analysis (CMA)</strong> is typically prepared by a real estate agent to help price a home for listing. It is useful for marketing purposes but is not a certified appraisal and is not acceptable for estate tax filings or probate court.
    </P>
    <P>For estate purposes, you need a certified appraisal — not a CMA.</P>

    <Divider />

    <SubH2>As-Is Condition and Fair Market Value</SubH2>
    <P>
      Estate properties are often appraised in their current condition — which may include deferred maintenance, dated finishes, or items left by the deceased. The appraiser's job is to determine what the property would sell for in that condition, between a willing buyer and a willing seller, with neither under pressure.
    </P>
    <P>
      This "as-is" value is the foundation for all subsequent decisions: whether to sell as-is, invest in improvements, or transfer the property to an heir.
    </P>

    <Divider />

    <SubH2>When to Get an Appraisal</SubH2>
    <P>
      As soon as reasonably possible after the death — ideally within the first 30–60 days. While a retroactive appraisal (performed later but reflecting the date-of-death value) is possible, a contemporaneous appraisal is more defensible and less likely to be challenged.
    </P>

    <Divider />

    <SubH2>Real Property Planning Can Help</SubH2>
    <P>
      Real Property Planning connects families with Washington State certified residential appraisers who specialize in estate valuations — date-of-death appraisals, retrospective appraisals, and current market valuations for properties preparing to sell.
    </P>
  </EstateSubPageLayout>
);

export default PropertyValue;
