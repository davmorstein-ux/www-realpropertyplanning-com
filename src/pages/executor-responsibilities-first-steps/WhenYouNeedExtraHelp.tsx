import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, P, UL, Divider } from "@/components/PlanningSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const WhenYouNeedExtraHelp = () => (
  <ExecutorSubPageLayout
    seoTitle="When You Need Extra Help as Executor | Real Property Planning"
    seoDescription="Some estates are straightforward. Others involve complexity that no executor should navigate alone. Here's how to recognize when you need more support — and where to find it."
    canonicalPath="/executor-responsibilities-first-steps/when-you-need-extra-help"
    breadcrumbName="When You Need Extra Help"
    bandTitle="WHEN  YOU  NEED  EXTRA  HELP"
    disclaimer={DISCLAIMER}
  >
    <SubH2>Most Estates Are Manageable. Some Are Not.</SubH2>
    <P>
      A simple estate — a clear will, cooperative heirs, minimal debts, no real property — can often be administered without enormous difficulty, especially with good legal guidance.
    </P>
    <P>
      But many estates aren't simple. And the ones that aren't can become genuinely overwhelming for an executor who is also grieving, working, and managing their own life.
    </P>
    <P>Here are the situations that typically require additional professional support.</P>

    <Divider />

    <SubH2>Complex or Large Estates</SubH2>
    <P>
      Estates that involve significant assets — multiple properties, business interests, investment portfolios, or substantial retirement accounts — require careful coordination among attorneys, CPAs, financial advisors, and appraisers.
    </P>
    <P>
      The tax implications alone can be significant: Washington State has its own estate tax with a relatively low exemption, and federal estate tax may also apply for larger estates. Decisions made early in the administration process can have major consequences for how much ultimately passes to heirs.
    </P>
    <P>
      If you are administering an estate with assets of meaningful size or complexity, assembling an experienced professional team early is not optional — it's essential.
    </P>

    <Divider />

    <SubH2>Family Conflict and Contested Estates</SubH2>
    <P>
      Few things are more painful than family conflict over an estate. It happens more often than most people expect — and it can turn a difficult process into an exhausting, expensive one.
    </P>
    <P>Common flashpoints include:</P>
    <UL>
      <li>Heirs who disagree about whether to sell or keep the family home</li>
      <li>Disputes about the fairness of how assets are distributed</li>
      <li>Questions about the validity of the will</li>
      <li>Concerns that one family member unduly influenced the deceased</li>
      <li>Disagreements about the value of assets</li>
    </UL>
    <P>As executor, you are caught in the middle — legally obligated to administer the estate fairly while personally connected to the people involved.</P>
    <P>
      In these situations, an experienced probate attorney is essential. In some cases, a mediator can help resolve disputes without litigation. Real Property Planning can help connect you with both.
    </P>

    <Divider />

    <SubH2>Out-of-State Property</SubH2>
    <P>
      If the estate includes real property located in another state, a separate probate proceeding — called "ancillary probate" — may be required in that state. This means working with attorneys licensed in that jurisdiction, in addition to your Washington State attorney.
    </P>
    <P>Out-of-state property also requires local professional support for appraisal, maintenance, and eventual sale. Real Property Planning can help identify the right professionals in other markets.</P>

    <Divider />

    <SubH2>A Missing or Disputed Will</SubH2>
    <P>
      If no will can be found, the estate is "intestate" and Washington State law determines how assets are distributed — which may not reflect the deceased's actual wishes. If a will is found but its validity is contested, court proceedings may follow.
    </P>
    <P>Both situations require experienced legal counsel. Do not attempt to navigate a contested or intestate estate without an attorney.</P>

    <Divider />

    <SubH2>An Overwhelmed or Reluctant Executor</SubH2>
    <P>
      Sometimes the person named as executor simply cannot do the job — whether because of geographic distance, personal capacity, emotional state, or the demands of their own life. This is more common than people admit, and it is not a failure.
    </P>
    <P>
      Washington State law allows an executor to resign and have a successor appointed. Alternatively, a professional fiduciary — a licensed individual or company that serves as executor for a fee — can be engaged to handle some or all of the administration.
    </P>
    <P>
      If you are feeling overwhelmed, talk to your attorney about your options. The estate and the heirs are better served by an executor who asks for help than by one who struggles through alone.
    </P>

    <Divider />

    <SubH2>Real Property Planning Is Here to Help</SubH2>
    <P>
      Whether you need an appraisal, a referral to a probate attorney, help navigating the sale of an estate home, or simply someone to talk through the situation with — Real Property Planning is a resource for executors and families across Washington State.
    </P>
  </ExecutorSubPageLayout>
);

export default WhenYouNeedExtraHelp;
