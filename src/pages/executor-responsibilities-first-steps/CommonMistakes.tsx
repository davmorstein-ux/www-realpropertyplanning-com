import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, Divider } from "@/components/PlanningSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const CommonMistakes = () => (
  <ExecutorSubPageLayout
    seoTitle="Common Executor Mistakes — and How to Avoid Them | Real Property Planning"
    seoDescription="Most executor mistakes are avoidable. Here are the ones that trip people up most often — and what to do instead."
    canonicalPath="/executor-responsibilities-first-steps/common-mistakes"
    breadcrumbName="Common Executor Mistakes"
    bandTitle="COMMON  EXECUTOR  MISTAKES"
    disclaimer={DISCLAIMER}
  >
    <SubH2>Why Mistakes Happen</SubH2>
    <P>
      Most executors have never done the job before, and they take it on while grieving and running their own lives. Mistakes are common, and most are made with good intentions.
    </P>
    <P>The mistakes that do the most damage are also the easiest to prevent. These are the seven that come up most often.</P>

    <Divider />

    <SubH2>Mistake 1: Distributing Assets Too Soon</SubH2>
    <P>
      This is the most costly mistake an executor can make, and it happens often. An executor who wants to be helpful hands out assets to heirs before all debts and taxes have been paid.
    </P>
    <P>If there aren't enough assets left to cover those obligations, the executor can be held personally liable for the shortfall.</P>
    <SubH3>What to do instead</SubH3>
    <P>
      Do not distribute anything to heirs until all debts, taxes, and administration expenses have been identified and paid, or until your attorney confirms it is safe to do so.
    </P>

    <Divider />

    <SubH2>Mistake 2: Failing to Notify Creditors Properly</SubH2>
    <P>
      Washington State has a formal process for notifying creditors of a death. If it isn't followed correctly, the estate may remain open to creditor claims long after you thought everything was settled.
    </P>
    <SubH3>What to do instead</SubH3>
    <P>Work with your probate attorney to publish the notice to creditors and follow the statutory timeline for responding to claims. Publishing is optional, but without it creditors have up to 24 months after the death to make claims (RCW 11.40.051).</P>

    <Divider />

    <SubH2>Mistake 3: Not Getting a Professional Appraisal</SubH2>
    <P>
      Some executors skip the formal appraisal and rely on online estimates or informal opinions of value. That can cause problems with estate tax filings, with capital gains calculations for heirs, and with dividing the estate fairly among beneficiaries.
    </P>
    <SubH3>What to do instead</SubH3>
    <P>
      Hire a Washington State certified residential appraiser to establish the date-of-death value of any real property in the estate. The cost is modest compared with the problems it prevents.
    </P>

    <Divider />

    <SubH2>Mistake 4: Letting Property Sit Unprotected</SubH2>
    <P>
      Estate administration can take months or longer, and the property has to be maintained, insured, and secured the whole time. Executors sometimes assume someone else is handling this, or don't think about it at all.
    </P>
    <P>A vacant home with lapsed insurance, deferred maintenance, or unpaid utilities can lose significant value, and an executor can be held responsible.</P>
    <SubH3>What to do instead</SubH3>
    <P>
      Immediately after the death, verify that insurance is in place, utilities are maintained, and the property is secure. Check in regularly. If the home is far away, designate someone locally to keep an eye on it.
    </P>

    <Divider />

    <SubH2>Mistake 5: Treating All Heirs as Decision-Makers</SubH2>
    <P>
      Some executors try to get every heir to agree before taking any action. Nobody wants family conflict, but that isn't how the role works.
    </P>
    <P>
      The executor has the legal authority and responsibility to administer the estate. Heirs are beneficiaries, not co-administrators. Taking direction from heirs rather than the will and the law can create serious problems.
    </P>
    <SubH3>What to do instead</SubH3>
    <P>
      Keep heirs informed and treat them with respect, but make decisions based on your fiduciary duties and your attorney's guidance, not on whoever is most vocal.
    </P>

    <Divider />

    <SubH2>Mistake 6: Waiting Too Long to Get Legal Help</SubH2>
    <P>
      Executors who try to handle everything alone sometimes discover months later that deadlines were missed, filings were incorrect, or early decisions created problems that are now expensive to fix.
    </P>
    <SubH3>What to do instead</SubH3>
    <P>
      Consult a Washington State probate attorney early, even if only for an initial meeting to learn what's required. For most estates, this single step prevents the majority of costly mistakes.
    </P>

    <Divider />

    <SubH2>Mistake 7: Mixing Estate Funds With Personal Funds</SubH2>
    <P>
      Keep estate money separate from your personal accounts. Commingling funds, even briefly and with good intentions, makes the estate accounting much harder and can expose you to personal liability.
    </P>
    <SubH3>What to do instead</SubH3>
    <P>Open a dedicated estate checking account as soon as possible and run all estate income and expenses through it.</P>

    <Divider />

    <SubH2>Finding Professionals</SubH2>
    <P>
      Real Property Planning explains what each of these professionals does. Its Find a Professional page lists independent professionals the site's owner has met with personally; you contact and hire them directly, and you are free to choose anyone.
    </P>
  </ExecutorSubPageLayout>
);

export default CommonMistakes;
