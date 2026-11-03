import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, UL, Divider } from "@/components/PlanningSubPageLayout";
import WhichGuide from "@/components/WhichGuide";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const First30Days = () => (
  <ExecutorSubPageLayout
    seoTitle="Your First 30 Days as Executor | Real Property Planning"
    seoDescription="The weeks immediately after a death are overwhelming. Here's a clear, prioritized list of what actually needs to happen first — and what can wait."
    canonicalPath="/executor-responsibilities-first-steps/first-30-days"
    breadcrumbName="Your First 30 Days"
    bandTitle="YOUR  FIRST  30  DAYS"
    disclaimer={DISCLAIMER}
  >
    <WhichGuide group="executorFirstSteps" className="!py-0 mb-8" />

    <SubH2>You Don't Have to Do Everything at Once</SubH2>
    <P>
      Not everything has to happen immediately. The first 30 days are about securing, notifying and stabilizing, not resolving everything.
    </P>
    <P>
      Most people named executor or personal representative have never done the job before, and many are grieving at the same time. The steps below are grouped by week.
    </P>

    <Divider />

    <SubH2>Week 1: Secure and Locate</SubH2>

    <SubH3>Secure the property</SubH3>
    <P>
      If the deceased owned a home, make sure it is locked, safe, and protected. Change the locks if needed. Tell the homeowner's insurance company about the death. Policies may require prompt notice, and an unoccupied home may need additional coverage.
    </P>

    <SubH3>Locate the will</SubH3>
    <P>
      Find the original signed will. Check home files and safe deposit boxes, and ask the person's attorney. The original matters: courts generally do not accept copies.
    </P>

    <SubH3>Identify and secure financial accounts</SubH3>
    <P>
      Locate bank statements, investment accounts, and any other financial documents. Do not close accounts yet, but note what exists and where.
    </P>

    <SubH3>Do not distribute anything yet</SubH3>
    <P>
      Distributing assets to heirs too early can make the executor personally liable. Even if the will is clear, distribute nothing until the estate has been properly administered.
    </P>

    <Divider />

    <SubH2>Week 2: Notify</SubH2>

    <SubH3>File the will with the court</SubH3>
    <P>
      In Washington State, the will is filed with the Superior Court. The petitioner may choose any county, and within four months a party can ask to move the case to the county where the person lived (RCW 11.96A.050). Filing the will is required (RCW 11.20.010); probate itself begins when someone petitions the court, if probate is needed.
    </P>

    <SubH3>Obtain death certificates</SubH3>
    <P>
      You will need several certified copies. Banks, title companies, government agencies and insurance companies require them. Order more than you think you need.
    </P>

    <SubH3>Notify Social Security</SubH3>
    <P>
      If the deceased was receiving Social Security benefits, notify the Social Security Administration promptly. Social Security does not pay benefits for the month of death, so a payment received for that month must be returned.
    </P>

    <SubH3>Notify financial institutions</SubH3>
    <P>
      Tell banks, investment firms and retirement account custodians about the death, and start the process of transferring or closing accounts.
    </P>

    <SubH3>Notify the post office</SubH3>
    <P>
      Forward mail to an address where you can monitor it for bills, financial statements, and other important correspondence.
    </P>

    <Divider />

    <SubH2>Weeks 3–4: Stabilize</SubH2>

    <SubH3>Continue paying necessary bills</SubH3>
    <P>
      Keep paying the mortgage, utilities and insurance on estate property from estate funds. An unpaid mortgage can lead to foreclosure, and lapsed insurance can leave the property unprotected.
    </P>

    <SubH3>Inventory assets and debts</SubH3>
    <P>
      Begin a written list of everything the estate owns and owes. This inventory will be required as part of the probate process and is essential for making distribution decisions later.
    </P>

    <SubH3>Meet with an estate attorney</SubH3>
    <P>
      If you haven't met with one yet, do it now. Washington probate has specific requirements and deadlines, and an experienced probate or estate planning attorney can explain what this estate requires.
    </P>

    <SubH3>Assess the real property</SubH3>
    <P>
      If the estate includes a home or other real estate, start considering what to do with it. A professional appraisal establishes the date-of-death value, which matters for tax purposes and for equitable distribution among heirs.
    </P>

    <Divider />

    <SubH2>What Can Wait</SubH2>
    <UL>
      <li>Selling the home (unless there is financial urgency)</li>
      <li>Resolving disagreements among heirs</li>
      <li>Distributing personal property</li>
      <li>Closing the estate</li>
    </UL>
    <P>All of these matter, but they come after the stabilization steps above.</P>

    <Divider />

    <SubH2>Need Help With the Real Estate Side?</SubH2>
    <P>
      For the real estate itself, you can contact the site's featured broker or featured certified appraiser directly, or hire any licensed professional you choose.
    </P>
  </ExecutorSubPageLayout>
);

export default First30Days;
