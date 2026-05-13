import ExecutorSubPageLayout from "@/components/ExecutorSubPageLayout";
import { SubH2, SubH3, P, UL, Divider } from "@/components/PlanningSubPageLayout";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult a licensed Washington State probate attorney for guidance specific to your situation.";

const PropertyDecisions = () => (
  <ExecutorSubPageLayout
    seoTitle="What to Do With Real Estate in the Estate | Real Property Planning"
    seoDescription="The family home is often the largest and most complicated asset in an estate. Here's what executors need to know about real property decisions."
    canonicalPath="/executor-responsibilities-first-steps/property-decisions"
    breadcrumbName="What to Do With the Property"
    bandTitle="WHAT  TO  DO  WITH  THE  PROPERTY"
    disclaimer={DISCLAIMER}
  >
    <SubH2>Why Real Property Deserves Special Attention</SubH2>
    <P>
      In most estates, real property — the family home, a rental, a vacation property — is the single largest asset. It's also the most complicated to handle. Unlike a bank account, which can be transferred with paperwork, real property requires appraisal, maintenance, insurance, and ultimately either transfer or sale.
    </P>
    <P>Getting it right matters enormously — both financially and for the relationships among heirs.</P>

    <Divider />

    <SubH2>Step 1: Get a Professional Appraisal</SubH2>
    <P>
      The first thing an executor should do with real property is establish its fair market value as of the date of death. This is called the date-of-death appraisal, and it matters for several reasons:
    </P>
    <UL>
      <li><strong>Estate tax purposes</strong> — Washington State has its own estate tax. The value of real property is a key input.</li>
      <li><strong>Stepped-up basis</strong> — Heirs who inherit property receive a "stepped-up" cost basis equal to the date-of-death value. This significantly reduces capital gains taxes when the property is eventually sold. Without a professional appraisal, this number is harder to defend to the IRS.</li>
      <li><strong>Equitable distribution</strong> — If the property is being divided among multiple heirs, everyone needs an agreed-upon value to work from.</li>
    </UL>
    <P>A certified residential appraiser provides a defensible, court-acceptable valuation. An online estimate does not.</P>

    <Divider />

    <SubH2>Step 2: Protect the Property</SubH2>
    <P>While the estate is being administered, the property must be maintained and protected. This means:</P>
    <UL>
      <li>Keeping homeowner's insurance active — notify the insurer of the death and confirm coverage for a vacant property, as standard policies may not cover unoccupied homes</li>
      <li>Continuing to pay the mortgage if one exists — a missed payment can trigger late fees or, eventually, foreclosure</li>
      <li>Maintaining utilities at a level that protects the property (heat in winter, for example)</li>
      <li>Securing the property and addressing any immediate maintenance issues</li>
    </UL>
    <P>Neglecting a property during the administration period can reduce its value and create liability for the executor.</P>

    <Divider />

    <SubH2>Step 3: Decide What Happens Next</SubH2>
    <P>There are generally three paths for estate real property:</P>

    <SubH3>Sell the property</SubH3>
    <P>
      The most common outcome. Proceeds are distributed among heirs according to the will or, if there is no will, according to Washington State intestacy law. Before selling, consider whether the property needs preparation — cleaning, repairs, staging — and factor those costs and timelines into planning.
    </P>

    <SubH3>Transfer the property to one or more heirs</SubH3>
    <P>
      If one heir wants to keep the property, they can buy out the others at the appraised value, or heirs can agree to take the property as part of their share. This requires clear documentation and typically involves an attorney.
    </P>

    <SubH3>Rent the property temporarily</SubH3>
    <P>
      Sometimes the right answer is to rent the property while longer-term decisions are made. This requires the executor to act as a landlord — which has its own responsibilities — and should be evaluated carefully.
    </P>

    <Divider />

    <SubH2>When Heirs Disagree</SubH2>
    <P>
      Co-ownership of inherited property is one of the most common sources of family conflict in estate administration. One heir wants to sell, another wants to keep it, a third can't afford to buy the others out.
    </P>
    <P>
      As executor, you have a legal obligation to act in the best interest of the estate — not to broker a compromise that makes everyone happy. If heirs cannot agree, the court can order a partition sale. Working with an experienced real estate professional who understands this dynamic can help move things forward without unnecessary conflict.
    </P>

    <Divider />

    <SubH2>Getting the Right Help</SubH2>
    <P>
      Real Property Planning connects executors with experienced residential appraisers, real estate brokers who specialize in estate sales, and probate attorneys across Washington State.
    </P>
  </ExecutorSubPageLayout>
);

export default PropertyDecisions;
