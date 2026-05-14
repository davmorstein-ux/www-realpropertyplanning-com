import EstateSubPageLayout, { SubH2, P, Divider } from "@/components/EstateSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult licensed professionals for guidance specific to your situation.";

const ProfessionalTeam = () => (
  <EstateSubPageLayout
    seoTitle="Building Your Professional Team | Real Property Planning"
    seoDescription="Estate administration requires the right professionals working together. Here's who you need, what each one does, and how to assemble the right team."
    canonicalPath="/estate-probate-inherited-property/professional-team"
    breadcrumbName="Building Your Professional Team"
    bandTitle="BUILDING YOUR PROFESSIONAL TEAM"
    disclaimer={DISCLAIMER}
  >
    <SubH2>The Right Team Makes Everything Easier.</SubH2>
    <P>
      Estate administration touches legal, financial, real estate, and logistical territory. Having the right professionals in place — and coordinated — prevents costly mistakes and protects everyone involved.
    </P>

    <Divider />

    <SubH2>Why a Coordinated Team Matters</SubH2>
    <P>
      Families navigating an estate often make the mistake of dealing with each professional in isolation — consulting the attorney but not the CPA, engaging a real estate agent without getting an appraisal first, making property decisions before legal authority is established.
    </P>
    <P>
      A coordinated team — where the right professionals are engaged at the right time, and communicate with each other — is the difference between a smooth administration and a chaotic one.
    </P>
    <P>Here's who typically needs to be involved.</P>

    <Divider />

    <SubH2>Probate Attorney</SubH2>
    <P>
      <strong>What they do:</strong> File the will with the court, open the probate estate, guide the executor through legal requirements and deadlines, handle creditor notifications, prepare accountings, and close the estate. For contested situations, they represent the executor.
    </P>
    <P><strong>When to engage:</strong> Within the first two weeks after the death — before any major decisions are made.</P>
    <P><strong>What to look for:</strong> Experience with Washington State probate, and familiarity with the county where the estate is being administered.</P>

    <Divider />

    <SubH2>CPA or Tax Professional</SubH2>
    <P>
      <strong>What they do:</strong> File the deceased's final personal income tax return, file any required estate income tax returns, advise on Washington State and federal estate tax exposure, and help heirs understand the tax implications of what they inherit.
    </P>
    <P><strong>When to engage:</strong> Early in the process — estate tax deadlines are strict and some decisions need to be made before assets are distributed.</P>
    <P><strong>What to look for:</strong> Experience with estate and trust taxation specifically, not just personal tax returns.</P>

    <Divider />

    <SubH2>Certified Residential Appraiser</SubH2>
    <P>
      <strong>What they do:</strong> Establish the fair market value of real property as of the date of death. This valuation is used for estate tax filings, stepped-up basis calculations, equitable distribution among heirs, and probate court inventory requirements.
    </P>
    <P><strong>When to engage:</strong> Within the first 30–60 days after the death, before any decisions are made about the property.</P>
    <P>
      <strong>Why it matters:</strong> An online estimate is not acceptable for legal or tax purposes. Only a certified appraiser's report meets the standard required by courts, the IRS, and Washington State tax authorities.
    </P>

    <Divider />

    <SubH2>Real Estate Broker — Estate Specialist</SubH2>
    <P>
      <strong>What they do:</strong> Advise on property condition and preparation, provide a market analysis, list and market the property, negotiate offers, and coordinate closing. Estate sales have unique dynamics — multiple decision-makers, emotional complexity, occupied or cluttered properties, and timelines driven by legal proceedings rather than market conditions.
    </P>
    <P><strong>When to engage:</strong> Once the decision to sell has been made — or earlier, for an honest assessment of condition and likely value before that decision is finalized.</P>
    <P><strong>What to look for:</strong> Experience specifically with estate and senior transition sales, not just standard residential transactions.</P>

    <Divider />

    <SubH2>Estate Liquidator</SubH2>
    <P>
      <strong>What they do:</strong> Manage the cleanout and sale of personal property — furniture, household items, collectibles, and other belongings — through an estate sale, online auction, or direct purchase.
    </P>
    <P><strong>When to engage:</strong> Before the property is listed for sale, and after family members have taken items of personal significance.</P>
    <P><strong>What to look for:</strong> Licensed, bonded professionals with verifiable references and transparent fee structures.</P>

    <Divider />

    <SubH2>Senior Move Manager</SubH2>
    <P>
      <strong>What they do:</strong> Coordinate the physical transition of a surviving senior — packing, moving, and setting up a new home — with sensitivity to the emotional and logistical complexity of a major life change.
    </P>
    <P><strong>When to engage:</strong> When a surviving spouse or family member is transitioning out of the family home to a new living situation.</P>

    <Divider />

    <SubH2>How Real Property Planning Can Help</SubH2>
    <P>
      Real Property Planning serves as a coordinating resource for families navigating estate administration. We can connect you with experienced professionals across all of these disciplines in Washington State — so you don't have to search for each one separately while also managing an estate.
    </P>
  </EstateSubPageLayout>
);

export default ProfessionalTeam;
