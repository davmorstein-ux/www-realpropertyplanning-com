import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, Divider } from "@/components/PlanningSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult licensed professionals for guidance specific to your situation.";

const WorkingWithProfessionals = () => (
  <ExecutorSubPageLayout
    seoTitle="Working With Attorneys & Professionals as Executor | Real Property Planning"
    seoDescription="Executors rarely work alone. Here's who you need, in what order, and what to expect from each professional involved in estate administration."
    canonicalPath="/executor-responsibilities-first-steps/working-with-professionals"
    breadcrumbName="Working With Attorneys & Professionals"
    bandTitle="WORKING  WITH  ATTORNEYS  &  PROFESSIONALS"
    disclaimer={DISCLAIMER}
  >
    <SubH2>The Team Around an Estate</SubH2>
    <P>
      No executor should try to navigate a complex estate entirely on their own. The good news is that a small team of experienced professionals can handle most of what needs to happen — and their fees are paid from the estate, not out of your pocket.
    </P>
    <P>Here's who is typically involved and what each one does.</P>

    <Divider />

    <SubH2>The Probate Attorney</SubH2>
    <SubH3>Who they are</SubH3>
    <P>A licensed Washington State attorney who specializes in estate administration and probate court proceedings.</P>
    <SubH3>What they do</SubH3>
    <P>
      File the will with the court, open the probate estate, guide the executor through legal requirements and deadlines, handle creditor notifications, prepare the final accounting, and close the estate. For contested estates or complex situations, they also represent the executor if disputes arise.
    </P>
    <SubH3>When to engage them</SubH3>
    <P>
      As soon as possible — ideally within the first two weeks. Washington State probate has specific filing deadlines, and missing them can create complications.
    </P>
    <SubH3>What to look for</SubH3>
    <P>
      Experience with Washington State probate specifically, and familiarity with the county where the estate is being administered. Real Property Planning can refer you to attorneys who specialize in this work.
    </P>

    <Divider />

    <SubH2>The CPA or Tax Advisor</SubH2>
    <SubH3>Who they are</SubH3>
    <P>A certified public accountant or tax professional with experience in estate and trust taxation.</P>
    <SubH3>What they do</SubH3>
    <P>
      File the deceased's final personal income tax return, file any required estate income tax returns, advise on estate tax exposure (Washington State has its own estate tax with a relatively low exemption), and help minimize tax liability for heirs.
    </P>
    <SubH3>When to engage them</SubH3>
    <P>
      Early in the process — estate tax deadlines are strict, and some planning decisions need to be made before assets are distributed.
    </P>

    <Divider />

    <SubH2>The Residential Appraiser</SubH2>
    <SubH3>Who they are</SubH3>
    <P>A state-certified appraiser who provides independent, professional valuations of real property.</P>
    <SubH3>What they do</SubH3>
    <P>
      Establish the fair market value of real property as of the date of death. This valuation is used for estate tax purposes, for equitable distribution among heirs, and to establish the stepped-up cost basis that reduces capital gains taxes for heirs when property is eventually sold.
    </P>
    <SubH3>When to engage them</SubH3>
    <P>
      Shortly after the death, before any decisions are made about the property. A retroactive appraisal can be done later, but contemporaneous appraisals are more defensible.
    </P>
    <SubH3>Why it matters</SubH3>
    <P>
      An online estimate is not acceptable for tax or legal purposes. Only a certified appraiser's report meets the standard required by courts, the IRS, and Washington State tax authorities.
    </P>

    <Divider />

    <SubH2>The Real Estate Broker</SubH2>
    <SubH3>Who they are</SubH3>
    <P>A licensed Washington State real estate broker with experience in estate sales and senior housing transitions.</P>
    <SubH3>What they do</SubH3>
    <P>
      Advise on property condition and preparation, provide a market analysis of likely sale price, list and market the property, negotiate offers, and coordinate the closing. For estate sales specifically, they understand the unique dynamics — multiple decision-makers, occupied or cluttered homes, emotional complexity, and timelines driven by court schedules.
    </P>
    <SubH3>When to engage them</SubH3>
    <P>
      Once the decision to sell has been made — or even earlier, to get an honest assessment of the property's condition and likely value before that decision is finalized.
    </P>

    <Divider />

    <SubH2>The Financial Advisor</SubH2>
    <SubH3>Who they are</SubH3>
    <P>A licensed financial professional who advises on investment and financial planning.</P>
    <SubH3>What they do</SubH3>
    <P>
      Help heirs understand the financial implications of inheriting assets, advise on retirement account distributions (which have tax implications and required timelines), and help beneficiaries integrate inherited assets into their own financial plans.
    </P>
    <SubH3>When to engage them</SubH3>
    <P>After the estate has been stabilized, and before assets are distributed to heirs.</P>

    <Divider />

    <SubH2>How Real Property Planning Can Help</SubH2>
    <P>
      Real Property Planning serves as a coordinating hub for families navigating estate administration. We can connect you with experienced professionals across all of these disciplines in Washington State — so you don't have to search for each one separately while also managing an estate.
    </P>
  </ExecutorSubPageLayout>
);

export default WorkingWithProfessionals;
