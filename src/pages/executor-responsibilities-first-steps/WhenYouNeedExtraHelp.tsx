import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, P, UL, Divider } from "@/components/PlanningSubPageLayout";
import { FEATURED_BROKER, brokerCredentialSentence } from "@/data/featuredProfessionals";

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
      A simple estate (a clear will, cooperative heirs, few debts, no real property) can often be administered without great difficulty, especially with good legal guidance.
    </P>
    <P>
      Other estates are harder, particularly for an executor who is also grieving, working and managing their own life.
    </P>
    <P>These are the situations that typically require professional help.</P>

    <Divider />

    <SubH2>Complex or Large Estates</SubH2>
    <P>
      Estates with significant assets, such as multiple properties, business interests, investment portfolios or substantial retirement accounts, require careful coordination among attorneys, CPAs, financial advisors and appraisers.
    </P>
    <P>
      The tax implications alone can be significant: Washington State has its own estate tax with a relatively low exemption, and federal estate tax may also apply for larger estates. Decisions made early in the administration process can have major consequences for how much ultimately passes to heirs.
    </P>
    <P>
      If the estate is large or complex, assemble an experienced professional team at the start of the administration, not partway through.
    </P>

    <Divider />

    <SubH2>Family Conflict and Contested Estates</SubH2>
    <P>
      Family conflict over an estate happens more often than most people expect, and it can turn a difficult process into a long, expensive one.
    </P>
    <P>Common flashpoints include:</P>
    <UL>
      <li>Heirs who disagree about whether to sell or keep the family home</li>
      <li>Disputes about the fairness of how assets are distributed</li>
      <li>Questions about the validity of the will</li>
      <li>Concerns that one family member unduly influenced the deceased</li>
      <li>Disagreements about the value of assets</li>
    </UL>
    <P>As executor, you are legally obligated to administer the estate fairly, even though you are personally connected to the people involved.</P>
    <P>
      In these situations, an experienced probate attorney is essential. In some cases, a mediator can help resolve disputes without litigation. Real Property Planning does not refer anyone to attorneys or mediators; choose them yourself, and confirm an attorney's license with the Washington State Bar Association (wsba.org).
    </P>

    <Divider />

    <SubH2>Out-of-State Property</SubH2>
    <P>
      If the estate includes real property in another state, a separate probate proceeding in that state, called "ancillary probate," may be required. That means working with attorneys licensed in that state in addition to your Washington State attorney.
    </P>
    <P>Out-of-state property also needs local help with appraisal, upkeep and the eventual sale. Look for professionals who work in the county where the property is.</P>

    <Divider />

    <SubH2>A Missing or Disputed Will</SubH2>
    <P>
      If no will can be found, the estate is "intestate," and Washington State law determines how assets are distributed. The result may not match what the deceased wanted. If a will is found but its validity is contested, court proceedings may follow.
    </P>
    <P>Both situations require experienced legal counsel. Do not try to handle a contested or intestate estate without an attorney.</P>

    <Divider />

    <SubH2>A Struggling or Reluctant Executor</SubH2>
    <P>
      Sometimes the person named as executor cannot do the job because of distance, personal capacity, emotional state or the demands of their own life. The law allows for this.
    </P>
    <P>
      An executor can ask the court to accept a resignation and appoint a successor. Alternatively, a professional fiduciary (an individual or company that serves as executor for a fee) can be hired to handle some or all of the administration.
    </P>
    <P>
      If you cannot keep up with the work, ask your attorney about these options. Asking for help early serves the estate and the heirs better than falling behind.
    </P>

    <Divider />

    {/* Rewritten. This section previously read "Real Property Planning Is Here
        to Help" and offered appraisals, attorney referrals, and help selling an
        estate home in the hub's name.

        Real Property Planning provides none of those things. It is a neutral
        educational hub; it holds no licenses and performs no services. The
        appraisal and brokerage work belongs to the featured broker personally, under
        his own two licenses, and everything legal belongs to the independent
        attorneys in the directory. Offering licensed services in the hub's
        name is the same misattribution corrected across the attorney pages and
        in MidPageCTA.

        It also matters where it sits. This page is read by executors who have
        just been told the estate is more than they can handle. An unbounded
        offer of help at that moment is the wrong promise to make, and a vague
        one. Naming what is actually on offer, and from whom, is more useful
        than warmth. */}
    <SubH2>Where to Find That Help</SubH2>
    <P>
      Real Property Planning is an educational resource, not a service provider. It holds no licenses and does not handle estates. It offers this library of guidance and a directory of independent Washington professionals: probate attorneys, CPAs, fiduciaries, senior move managers, and estate liquidators.
    </P>
    <P>
      If the estate includes a home, {FEATURED_BROKER.name}, the featured broker on this site, can answer questions about the property directly. {brokerCredentialSentence.replace(/\.$/, "")}, so questions about what the home is worth, what condition it is in, what a date-of-death valuation involves, or what selling it would require are ones {FEATURED_BROKER.pronoun.subject} can speak to. Legal, tax, and care decisions belong with the professionals listed throughout this site.
    </P>
  </ExecutorSubPageLayout>
);

export default WhenYouNeedExtraHelp;
