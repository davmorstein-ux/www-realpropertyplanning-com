import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import PlanningSubPageLayout, {
  SubH2,
  P,
  Divider,
} from "@/components/PlanningSubPageLayout";

const LegalDocuments = () => (
  <PlanningSubPageLayout
    seoTitle="The Legal Documents That Matter Most | Real Property Planning"
    seoDescription="Four documents that protect your family's ability to act when it matters most — explained in plain language for Washington State families."
    canonicalPath="/planning-before-a-crisis/legal-documents"
    breadcrumbName="Legal Documents"
    bandTitle="THE LEGAL  DOCUMENTS  THAT  MATTER  MOST"
    disclaimer="The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State attorney for estate planning documents."
  >
    <SubH2>Why These Documents Matter</SubH2>
    <P>
      Without the right documents, a family can lose the ability to sell or manage a parent's house the moment the parent can no longer sign. These are the four that come up most often when Washington families sell a home or move a parent into care. This is general guidance, not legal advice; a Washington estate planning attorney should draft them and oversee the signing.
    </P>

    <Divider />

    <SubH2>1. Durable Power of Attorney (Financial)</SubH2>
    <P><strong>What it is:</strong> A document that authorizes a named person, called the "agent" or "attorney-in-fact," to handle someone else's financial matters.</P>
    <P><strong>Why it matters for real estate:</strong> If a parent becomes incapacitated without one, no one can sign real estate documents, use their accounts or make financial decisions for them, including selling their home, unless a court appoints a conservator (chapter 11.130 RCW), which takes time and money. Adult children have no automatic authority to act for a parent.</P>
    <P><strong>The "durable" part matters:</strong> In Washington, a power of attorney ends when the person becomes incapacitated unless the document says it continues (RCW 11.125.040). Only a <em>durable</em> power of attorney, one that says so in writing, still works at the point it is most likely to be needed.</P>
    <P><strong>Washington State note:</strong> A Washington power of attorney must be signed and dated, and either notarized or signed by two qualified witnesses: people who are not related to you or your agent and are not your caregivers (RCW 11.125.050). For anything involving real estate, have it notarized: title companies usually record the power of attorney with the deed, and the statute's rules requiring banks and others to accept a power of attorney apply to notarized ones. An estate planning attorney can ensure yours is properly executed.</P>

    <Divider />

    <SubH2>2. Healthcare Power of Attorney &amp; Healthcare Directive</SubH2>
    <P><strong>What it is:</strong> Two related documents. A healthcare power of attorney names someone to make medical decisions for you if you can't. A healthcare directive (sometimes called a living will or advance directive) records your own wishes: which treatments you want or don't want in different circumstances.</P>
    <P><strong>Why it matters:</strong> These documents are separate from financial authority. Someone with a financial power of attorney cannot automatically make healthcare decisions. Without a healthcare power of attorney, Washington law lets close family consent to medical care in a set priority order (RCW 7.70.065), but naming the person yourself avoids confusion and disagreement. A trusted person needs both the financial and the healthcare power of attorney to act fully on your behalf.</P>
    <P><strong>In a hospital:</strong> doctors need to know quickly who can make decisions. A signed healthcare power of attorney answers that question before anyone has to ask.</P>

    <Divider />

    <SubH2>3. A Current Will or Trust</SubH2>
    <P><strong>What it is:</strong> A will specifies what happens to a person's assets after death, and who is responsible for carrying out those wishes (the executor). A trust accomplishes similar goals but can also be structured to take effect during a person's lifetime and to transfer assets outside of the probate process.</P>
    <P><strong>Why it matters for property:</strong> Without a will, Washington law decides who inherits, which may not match what the person wanted. A will records those wishes. A funded trust, one that actually holds the property, can pass it to heirs without probate, which saves time, legal fees and court involvement. A recorded transfer on death deed, joint tenancy with right of survivorship, or a community property agreement can also pass property outside probate.</P>
    <P><strong>Is a will enough, or is a trust better?</strong> That depends on the size and complexity of the estate, the family, and what the person wants. An estate planning attorney can say which fits.</P>
    <P><strong>Keep it current:</strong> A will or trust written decades ago may no longer match the person's wishes, the family, or the law. Review it every few years and after any marriage, divorce, death or move.</P>

    <Divider />

    <SubH2>4. Beneficiary Designations</SubH2>
    <P><strong>What they are:</strong> The named recipients on life insurance, retirement accounts (IRAs, 401(k)s) and some bank or investment accounts, who receive those assets directly at death.</P>
    <P><strong>Why they matter:</strong> Beneficiary designations pass assets <em>outside</em> of a will. In most cases the designation controls, whatever the will says. Washington's "superwill" law (chapter 11.11 RCW) lets a later will redirect some accounts, but only if it names them specifically, so review the designations themselves rather than relying on the will.</P>
    <P><strong>What to review:</strong> Life insurance policies, retirement accounts, and any accounts designated as "payable on death" (POD) or "transfer on death" (TOD). Check that they still name the right people, especially after a divorce or a death in the family.</P>

    <Divider />

    <SubH2>Finding the Right Estate Planning Attorney</SubH2>
    <P>
      The right professional to help with all four of these documents is a Washington State estate planning attorney. The site doesn't make referrals. The people listed below are ones the site's founder has met in person. Choose any Washington-licensed attorney and check their license with the Washington State Bar Association (wsba.org).
    </P>
    <P>
      With these documents in place, the people you chose can sign for the house when the time comes, without a court case first.
    </P>
  </PlanningSubPageLayout>
);

export default LegalDocuments;
