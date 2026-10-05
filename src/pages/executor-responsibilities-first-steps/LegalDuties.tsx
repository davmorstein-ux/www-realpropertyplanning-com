import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, UL, Divider } from "@/components/PlanningSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const LegalDuties = () => (
  <ExecutorSubPageLayout
    seoTitle="Understanding Your Legal Duties as Executor | Real Property Planning"
    seoDescription="What are you actually responsible for as an executor or trustee? A plain-language overview of the legal obligations Washington State executors need to understand."
    canonicalPath="/executor-responsibilities-first-steps/legal-duties"
    breadcrumbName="Understanding Your Legal Duties"
    bandTitle="UNDERSTANDING  YOUR  LEGAL  DUTIES"
    disclaimer={DISCLAIMER}
  >
    <SubH2>The Role of an Executor</SubH2>
    <P>
      An executor (called a "personal representative" in Washington State) is the person legally responsible for administering a deceased person's estate. This means collecting assets, paying debts, filing taxes, and ultimately distributing what remains to the heirs — all in accordance with the will and Washington State law.
    </P>
    <P>
      A trustee has a similar role but manages assets held in a trust, often over a longer period of time and according to the specific terms of the trust document.
    </P>
    <P>
      Both roles carry fiduciary duties — meaning you are legally required to act in the best interests of the estate and its beneficiaries, not your own.
    </P>

    <Divider />

    <SubH2>Your Core Legal Duties</SubH2>

    <SubH3>Duty of Loyalty</SubH3>
    <P>
      You must act solely in the interest of the estate and its beneficiaries. You cannot favor yourself, use estate assets for personal benefit, or make decisions that advantage one heir over another without proper authorization.
    </P>

    <SubH3>Duty of Care</SubH3>
    <P>
      You are expected to manage estate assets with the same care a reasonable, prudent person would use with their own property. This means protecting assets, maintaining property, and making sound decisions — not letting things deteriorate through neglect.
    </P>

    <SubH3>Duty to Inform and Account</SubH3>
    <P>
      Beneficiaries have the right to be kept informed. You are generally required to provide an accounting of estate assets, debts, and distributions — and to respond to reasonable requests for information from heirs.
    </P>

    <SubH3>Duty to Follow the Will</SubH3>
    <P>
      Your job is to carry out the instructions in the will, not to interpret or override them. If the will says the house goes to one heir and the savings account to another, that is what must happen — regardless of what you personally think is fair.
    </P>

    <SubH3>Duty to Pay Debts Before Distributing Assets</SubH3>
    <P>
      Before anything is distributed to heirs, the estate's legitimate debts must be paid. This includes final medical bills, credit card balances, mortgages, taxes, and the costs of administering the estate itself. Distributing assets before debts are settled can make you personally liable for those debts.
    </P>

    <Divider />

    <SubH2>Personal Liability — What Executors Need to Know</SubH2>
    <P>
      This is the part most people don't realize until it's too late: executors can be held personally liable for mistakes made in administering the estate.
    </P>
    <P>
      If you distribute assets before paying debts and there isn't enough left to cover those debts, creditors may come after you personally. If you fail to file required tax returns, the IRS can pursue you. If you favor one heir unfairly, other beneficiaries can sue.
    </P>
    <P>
      This is not meant to be alarming — most estates are administered without incident. But it is the reason why working with a probate attorney, even briefly, is strongly recommended for any estate of meaningful size or complexity.
    </P>

    <Divider />

    <SubH2 id="executor-fees">Can the Executor Be Paid?</SubH2>
    <P>
      Yes. Washington has no fee schedule or percentage for personal representatives. The rule depends on the will:
    </P>
    <UL>
      <li>
        <strong>If the will sets the compensation,</strong> that amount is the executor's full pay, unless the executor
        formally renounces it before qualifying and asks the court to set a fee instead.
      </li>
      <li>
        <strong>If the will is silent,</strong> the executor is entitled to compensation the court considers "just and
        reasonable" for the work actually done. Keeping a simple log of hours and tasks makes that easy to support.
      </li>
      <li>
        <strong>An executor who fails in their duties</strong> can have their fee reduced or denied altogether by the
        court.
      </li>
    </UL>
    <P>
      An executor who is also an heir can choose to take no fee. A fee is taxable income to the executor, while an inheritance
      generally is not, so when the executor would receive the money either way, waiving the fee can leave more in the
      family. A CPA can confirm whether that holds for your estate.
    </P>
    <P>
      <strong>How heirs can question the fees.</strong> In most Washington estates, which are settled without court
      supervision, the executor files a declaration of completion listing the fees paid to the executor, the attorney,
      appraisers and accountants. Heirs who have not yet received their full share have 30 days after it is filed to ask the court
      to review whether the fees are reasonable; if no one does, the fees are approved.
    </P>
    <P>
      <span className="text-[15px]">
        Sources:{" "}
        <a
          href="https://app.leg.wa.gov/RCW/default.aspx?cite=11.48.210"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          RCW 11.48.210
        </a>{" "}
        (compensation);{" "}
        <a
          href="https://app.leg.wa.gov/RCW/default.aspx?cite=11.68.110"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          RCW 11.68.110
        </a>{" "}
        (declaration of completion and fee review).
      </span>
    </P>

    <Divider />

    <SubH2>When Probate Is Required in Washington State</SubH2>
    <P>
      Not all estates go through probate. Assets that pass by beneficiary designation (retirement accounts, life insurance), assets held in joint tenancy, and assets held in a properly funded trust typically pass outside of probate.
    </P>
    <P>
      But if the deceased owned real property in their name alone, or had significant assets without beneficiary designations, probate is likely required. Washington State has a simplified probate process for smaller estates, and a full probate process for larger or more complex ones. An attorney can quickly tell you which applies.
    </P>

    <Divider />

    <SubH2>When to Get Professional Help</SubH2>
    <P>
      Every executor should at minimum consult with a Washington State probate attorney before beginning administration. For estates that involve:
    </P>
    <UL>
      <li>Real property</li>
      <li>Business interests</li>
      <li>Significant debts or contested creditors</li>
      <li>Disagreements among heirs</li>
      <li>Out-of-state assets</li>
      <li>A surviving spouse with community property interests</li>
    </UL>
    <P>…professional guidance isn't optional — it's essential.</P>
    <P>
      Real Property Planning does not refer clients to attorneys. Choose a Washington-licensed probate attorney yourself; you can confirm any lawyer's license with the Washington State Bar Association (wsba.org).
    </P>
  </ExecutorSubPageLayout>
);

export default LegalDuties;
