import EstateSubPageLayout, { SubH2, P, UL, Divider } from "@/components/EstateSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const FirstSteps = () => (
  <EstateSubPageLayout
    seoTitle="First Steps After a Death | Real Property Planning"
    seoDescription="The early days after a loved one passes are overwhelming. Here are the calm, practical first steps to take — before any major decisions need to be made."
    canonicalPath="/estate-probate-inherited-property/first-steps"
    breadcrumbName="First Steps After a Death"
    bandTitle="FIRST STEPS AFTER A DEATH"
    disclaimer={DISCLAIMER}
  >
    <SubH2>You Don't Have to Know Everything Yet</SubH2>
    <P>
      The early days after a death are not the time for big decisions. They're the time for a few calm, practical steps that protect everyone involved.
    </P>

    <Divider />

    <SubH2>Start Here — Before Anything Else</SubH2>
    <P>
      When a loved one passes away, the pressure to act can feel immediate and overwhelming. Family members have questions. There may be a home to think about. Legal paperwork feels urgent.
    </P>
    <P>Most of it can wait. A few things cannot.</P>

    <Divider />

    <SubH2>Secure the Property</SubH2>
    <P>
      If the deceased owned a home, the first priority is making sure it is physically secure. Lock the doors. If there is any question about who has keys, change the locks. Check that windows are closed and the home is protected.
    </P>
    <P>
      Notify the homeowner's insurance company of the death promptly. Standard policies may not cover a vacant home, and a lapse in coverage at this stage can be costly.
    </P>

    <Divider />

    <SubH2>Locate Important Documents</SubH2>
    <P>Before anything else can happen, certain documents need to be found:</P>
    <UL>
      <li><strong>The original will</strong> — not a copy. The original signed document is required by the court. Check home files, safe deposit boxes, and with the person's attorney.</li>
      <li><strong>Trust documents</strong> — if the deceased had a living trust, locate the trust agreement.</li>
      <li><strong>Financial account statements</strong> — bank accounts, investment accounts, retirement accounts.</li>
      <li><strong>Life insurance policies</strong> — note the insurance company and policy numbers.</li>
      <li><strong>Property deeds</strong> — for the home and any other real estate.</li>
      <li><strong>Vehicle titles</strong></li>
    </UL>
    <P>Do not close any accounts yet. Simply locate and document what exists.</P>

    <Divider />

    <SubH2>Identify Who Has Legal Authority</SubH2>
    <P>
      This is one of the most important early steps — and one that families often skip. Before anyone can make decisions about property, sign documents, or access financial accounts, someone needs to have the legal authority to do so.
    </P>
    <P>That authority comes from one of the following:</P>
    <UL>
      <li>A <strong>durable power of attorney</strong> — if the person is still living but incapacitated</li>
      <li>Being named as <strong>executor or personal representative</strong> in the will</li>
      <li>Being named as <strong>trustee</strong> in a trust</li>
      <li>A <strong>court order</strong> appointing a guardian or conservator</li>
    </UL>
    <P>
      Without legal authority, even adult children cannot legally sell a home, access bank accounts, or make binding decisions about the estate. Clarifying who has authority — early — prevents significant problems later.
    </P>

    <Divider />

    <SubH2>Obtain Death Certificates</SubH2>
    <P>
      You will need more certified copies of the death certificate than you expect. Order at least 10–12. They are required by banks, investment firms, the Social Security Administration, insurance companies, the court, and title companies. Running out and having to reorder causes delays.
    </P>

    <Divider />

    <SubH2>Notify Key Parties</SubH2>
    <P>In the first week or two, notify:</P>
    <UL>
      <li><strong>Social Security Administration</strong> — benefits paid after the date of death must be returned</li>
      <li><strong>Medicare and any supplemental insurance</strong></li>
      <li><strong>Financial institutions</strong> — to flag accounts and begin the transfer process</li>
      <li><strong>The post office</strong> — forward mail so nothing important is missed</li>
    </UL>

    <Divider />

    <SubH2>Do Not Distribute Anything Yet</SubH2>
    <P>
      Even if the will is clear and the family is in agreement, nothing should be distributed to heirs until the estate has been properly administered and all debts have been identified and paid. Distributing assets prematurely can create personal liability for the executor.
    </P>

    <Divider />

    <SubH2>When to Get Legal Help</SubH2>
    <P>
      Consult with a Washington State probate attorney as early as possible — ideally within the first two weeks. They can confirm whether probate is required, explain the filing deadlines, and walk you through what the administration process looks like for this specific estate.
    </P>
    <P>
      Real Property Planning can connect you with experienced probate attorneys across Washington State.
    </P>
  </EstateSubPageLayout>
);

export default FirstSteps;
