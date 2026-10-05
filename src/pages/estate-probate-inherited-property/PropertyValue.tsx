import EstateSubPageLayout, { SubH2, P } from "@/components/EstateSubPageLayout";
import { Link } from "react-router-dom";

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
    {/* Oct 4, 2026 (Question Map step 8): the full explanation moved to
        /date-of-death-valuation-property-appraisals, the page whose address
        matches the search. This step keeps a short summary. */}
    <SubH2>Before Any Decision Is Made, Know What the Property Is Worth</SubH2>
    <P>
      Estate property needs a value as of the date of death. It sets the heirs' tax basis for a later sale, goes into
      the estate inventory the personal representative must prepare within three months of appointment, feeds any
      estate tax return, and gives the heirs an independent number to divide the estate by.
    </P>
    <P>
      For those purposes, a certified appraisal holds up where an online estimate or a broker's market analysis may
      not. The appraisal values the house as it stood on the date of death, and it is easiest to support when it is
      done soon after.
    </P>
    <P>
      <strong>
        The full explanation, with the questions families ask:{" "}
        <Link to="/date-of-death-valuation-property-appraisals" className="underline underline-offset-2">
          Date-of-Death Valuation &amp; Property Appraisals
        </Link>
        .
      </strong>
    </P>
  </EstateSubPageLayout>
);

export default PropertyValue;
