import EstateSubPageLayout, { SubH2, SubH3, P, UL, Divider } from "@/components/EstateSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const ProbateAndLegalAuthority = () => (
  <EstateSubPageLayout
    seoTitle="Understanding Probate & Legal Authority | Real Property Planning"
    seoDescription="What is probate, and do you need it? Who has legal authority to make decisions about the estate? Plain-language answers for Washington State families."
    canonicalPath="/estate-probate-inherited-property/probate-and-legal-authority"
    breadcrumbName="Understanding Probate & Legal Authority"
    bandTitle="UNDERSTANDING PROBATE & LEGAL AUTHORITY"
    disclaimer={DISCLAIMER}
  >
    <SubH2>Who Has the Authority to Make Decisions?</SubH2>
    <P>
      Understanding probate and legal authority is the foundation of everything else. Without it, nothing can move forward — and mistakes made here are costly to undo.
    </P>

    <Divider />

    <SubH2>What Probate Is — and What It Isn't</SubH2>
    <P>
      Probate is the court-supervised process of administering a deceased person's estate. It involves validating the will, appointing an executor, notifying creditors, paying debts, and ultimately distributing assets to heirs.
    </P>
    <P>
      Probate is not a punishment, and it's not always something to be feared. In Washington State, the probate process is relatively straightforward for most estates — though it does take time, typically six months to a year or more for an average estate.
    </P>
    <P>
      Not everything goes through probate. Assets that pass by beneficiary designation — life insurance, retirement accounts, accounts designated as "payable on death" — transfer directly to the named beneficiary outside of probate. Assets held in joint tenancy pass automatically to the surviving owner. Assets held in a properly funded living trust also pass outside of probate.
    </P>
    <P>
      What typically does go through probate: assets owned solely in the deceased's name, including real property, bank accounts without beneficiary designations, and personal property of significant value.
    </P>

    <Divider />

    <SubH2>Do You Need Probate in Washington State?</SubH2>
    <P>Washington State has two main paths:</P>
    <P>
      <strong>Full probate</strong> — required when the estate includes real property titled solely in the deceased's name, or when significant assets don't have beneficiary designations or co-owners. A personal representative (executor) is appointed by the court and administers the estate under court supervision.
    </P>
    <P>
      <strong>Small estate affidavit</strong> — available for estates with total assets under a certain threshold (consult an attorney for current limits). Allows heirs to collect assets without full probate proceedings.
    </P>
    <P>An experienced probate attorney can quickly tell you which applies to your situation.</P>

    <Divider />

    <SubH2>Who Has Legal Authority Over the Estate</SubH2>
    <P>This is the question that determines what can and cannot happen:</P>
    <P>
      <strong>If there is a will:</strong> The person named as executor (called "personal representative" in Washington State) has authority — but only after being formally appointed by the court. Being named in the will alone is not sufficient. The will must be filed with the Superior Court in the county where the deceased lived, and the court must issue Letters Testamentary before the executor can legally act.
    </P>
    <P>
      <strong>If there is a trust:</strong> The named trustee has authority over assets held in the trust, generally without court involvement.
    </P>
    <P>
      <strong>If there is no will:</strong> The court will appoint an administrator, typically the closest next of kin, to administer the estate under Washington's intestacy laws.
    </P>
    <P>
      <strong>If no one has authority:</strong> If there is no will, no trust, and no one with legal authority, the family cannot legally sell property, access accounts, or make binding decisions without a court order. This situation — while fixable — is time-consuming and expensive to resolve.
    </P>

    <Divider />

    <SubH2>The Personal Representative's Role</SubH2>
    <P>The personal representative (executor) in Washington State is responsible for:</P>
    <UL>
      <li>Filing the will with the Superior Court</li>
      <li>Notifying beneficiaries and creditors</li>
      <li>Inventorying and appraising estate assets</li>
      <li>Paying valid debts and taxes</li>
      <li>Filing final tax returns</li>
      <li>Distributing assets to heirs</li>
      <li>Closing the estate</li>
    </UL>
    <P>
      This is a fiduciary role — meaning the personal representative is legally required to act in the best interests of the estate and its beneficiaries, not their own interests.
    </P>

    <Divider />

    <SubH2>Common Legal Questions Families Have</SubH2>
    <SubH3>Do we need probate before selling the home?</SubH3>
    <P>
      If the home was titled solely in the deceased's name, yes — probate (or at minimum a court order) is typically required before the property can be sold. A title company will not insure the sale without proper legal authority.
    </P>
    <SubH3>What if siblings disagree about selling?</SubH3>
    <P>
      The personal representative has the legal authority and responsibility to administer the estate — including making decisions about property — based on the will and Washington State law, not by consensus among heirs. If heirs cannot agree, the court can order a partition sale.
    </P>
    <SubH3>How long does probate take in Washington State?</SubH3>
    <P>
      A straightforward estate typically takes six months to a year. More complex estates — contested wills, significant debts, multiple properties, out-of-state assets — can take longer.
    </P>

    <Divider />

    <SubH2>Getting the Right Legal Help</SubH2>
    <P>
      Real Property Planning can connect you with experienced probate and estate attorneys across Washington State who work specifically with families in this situation.
    </P>
  </EstateSubPageLayout>
);

export default ProbateAndLegalAuthority;
