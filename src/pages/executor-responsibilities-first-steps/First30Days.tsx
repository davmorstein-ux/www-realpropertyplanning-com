import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, UL, Divider } from "@/components/PlanningSubPageLayout";

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
    <SubH2>You Don't Have to Do Everything at Once</SubH2>
    <P>
      Being named executor or personal representative of an estate is an honor — and a significant responsibility. It's also something most people have never done before, often while also grieving.
    </P>
    <P>
      The good news: not everything has to happen immediately. The first 30 days are about securing, notifying, and stabilizing — not resolving everything.
    </P>

    <Divider />

    <SubH2>Week 1 — Secure and Locate</SubH2>

    <SubH3>Secure the property</SubH3>
    <P>
      If the deceased owned a home, make sure it is locked, safe, and protected. Change the locks if needed. Notify the homeowner's insurance company of the death — policies may require prompt notification, and an unoccupied home may need additional coverage.
    </P>

    <SubH3>Locate the will</SubH3>
    <P>
      Find the original signed will. Check home files, safe deposit boxes, and with the person's attorney. The original document matters — copies are generally not accepted by courts.
    </P>

    <SubH3>Identify and secure financial accounts</SubH3>
    <P>
      Locate bank statements, investment accounts, and any other financial documents. Do not close accounts yet — but note what exists and where.
    </P>

    <SubH3>Do not distribute anything yet</SubH3>
    <P>
      Even if the will is clear, nothing should be distributed to heirs until the estate has been properly administered. Distributing assets prematurely can create personal liability for the executor.
    </P>

    <Divider />

    <SubH2>Week 2 — Notify</SubH2>

    <SubH3>File the will with the court</SubH3>
    <P>
      In Washington State, the will must be filed with the Superior Court in the county where the deceased lived. This begins the probate process if one is required.
    </P>

    <SubH3>Obtain death certificates</SubH3>
    <P>
      You will need multiple certified copies — typically 8 to 12. These are required by banks, title companies, government agencies, and insurance companies. Order more than you think you need.
    </P>

    <SubH3>Notify Social Security</SubH3>
    <P>
      If the deceased was receiving Social Security benefits, notify the Social Security Administration promptly. Benefits paid after the date of death must be returned.
    </P>

    <SubH3>Notify financial institutions</SubH3>
    <P>
      Contact banks, investment firms, and retirement account custodians to notify them of the death and begin the process of transferring or closing accounts.
    </P>

    <SubH3>Notify the post office</SubH3>
    <P>
      Forward mail to an address where you can monitor it for bills, financial statements, and other important correspondence.
    </P>

    <Divider />

    <SubH2>Week 3–4 — Stabilize</SubH2>

    <SubH3>Continue paying necessary bills</SubH3>
    <P>
      Mortgage payments, utilities, and insurance on estate property should continue to be paid from estate funds. An unpaid mortgage can lead to foreclosure; lapsed insurance can leave property unprotected.
    </P>

    <SubH3>Inventory assets and debts</SubH3>
    <P>
      Begin a written list of everything the estate owns and owes. This inventory will be required as part of the probate process and is essential for making distribution decisions later.
    </P>

    <SubH3>Meet with an estate attorney</SubH3>
    <P>
      If you haven't already, now is the time. Washington State probate has specific requirements and deadlines. An experienced estate planning or probate attorney can walk you through what's required for this specific estate.
    </P>

    <SubH3>Assess the real property</SubH3>
    <P>
      If the estate includes a home or other real estate, begin thinking about what will need to happen with it. A professional appraisal establishes the date-of-death value, which matters for tax purposes and for equitable distribution among heirs.
    </P>

    <Divider />

    <SubH2>What Can Wait</SubH2>
    <UL>
      <li>Selling the home (unless there is financial urgency)</li>
      <li>Resolving disagreements among heirs</li>
      <li>Distributing personal property</li>
      <li>Closing the estate</li>
    </UL>
    <P>These are all important — but they come after the stabilization steps above are complete.</P>

    <Divider />

    <SubH2>Need Help Navigating the Real Estate Side?</SubH2>
    <P>
      Real Property Planning connects families and professionals with experienced real estate and appraisal resources across Washington State.
    </P>
  </ExecutorSubPageLayout>
);

export default First30Days;
