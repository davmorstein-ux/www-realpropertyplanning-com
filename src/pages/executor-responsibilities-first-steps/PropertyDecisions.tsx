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
      In most estates, real property (the family home, a rental, a vacation property) is the single largest asset and the most complicated to handle. A bank account can be transferred with paperwork. Real property has to be appraised, maintained and insured, and in the end either transferred or sold.
    </P>
    <P>Mistakes with it cost money and can damage relationships among heirs.</P>

    <Divider />

    <SubH2>Step 1: Get a Professional Appraisal</SubH2>
    <P>
      The first step with real property is to establish its fair market value as of the date of death. This is called the date-of-death appraisal, and it matters for several reasons:
    </P>
    <UL>
      <li><strong>Estate tax purposes:</strong> Washington State has its own estate tax, and the value of real property is a key input.</li>
      <li><strong>Stepped-up basis:</strong> Heirs who inherit property receive a "stepped-up" cost basis equal to the date-of-death value. This significantly reduces capital gains taxes when the property is eventually sold. Without a professional appraisal, this number is harder to defend to the IRS.</li>
      <li><strong>Equitable distribution:</strong> If the property is being divided among multiple heirs, everyone needs an agreed-upon value to work from.</li>
    </UL>
    <P>A certified residential appraiser provides a defensible, court-acceptable valuation. An online estimate does not.</P>

    <Divider />

    <SubH2>Step 2: Protect the Property</SubH2>
    <P>While the estate is being administered, the property must be maintained and protected. That means:</P>
    <UL>
      <li>Keeping homeowner's insurance active: notify the insurer of the death and confirm coverage for a vacant property, as standard policies may not cover unoccupied homes</li>
      <li>Continuing to pay the mortgage if there is one, since a missed payment can trigger late fees or, eventually, foreclosure</li>
      <li>Maintaining utilities at a level that protects the property (heat in winter, for example)</li>
      <li>Securing the property and addressing any immediate maintenance issues</li>
    </UL>
    <P>Neglecting a property during the administration period can reduce its value and create liability for the executor.</P>

    <Divider />

    <SubH2>Step 3: Decide What Happens Next</SubH2>
    <P>There are generally three paths for estate real property:</P>

    <SubH3>Sell the property</SubH3>
    <P>
      This is the most common outcome. Proceeds are distributed among heirs according to the will or, if there is no will, according to Washington State intestacy law. Before selling, decide whether the property needs preparation (cleaning, repairs, staging) and build those costs and timelines into the plan.
    </P>

    <SubH3>Transfer the property to one or more heirs</SubH3>
    <P>
      If one heir wants to keep the property, they can buy out the others at the appraised value, or heirs can agree to take the property as part of their share. This requires clear documentation and typically involves an attorney.
    </P>

    <SubH3>Rent the property temporarily</SubH3>
    <P>
      Renting the property can make sense while longer-term decisions are made. The executor then acts as a landlord, with the responsibilities that come with it, so weigh this option carefully.
    </P>

    <Divider />

    <SubH2>When Heirs Disagree</SubH2>
    <P>
      Co-owned inherited property is a frequent source of family conflict in estate administration. One heir wants to sell, another wants to keep it, a third can't afford to buy the others out.
    </P>
    <P>
      As executor, you have a legal obligation to act in the best interest of the estate, not to broker a compromise that makes everyone happy. If heirs cannot agree, during probate the personal representative decides, under the will and the law; partition applies once the house has been distributed and the heirs own it together, when a co-owner can ask the court to divide or sell it (RCW 7.52.010). A real estate professional who has handled disputed estate sales can help move things forward without unnecessary conflict.
    </P>

    <Divider />

    <SubH2>Getting Help</SubH2>
    <P>
      For the real estate itself, you can contact the site's featured broker or featured certified appraiser directly, or hire any licensed professional you choose. For the legal side, choose a Washington-licensed probate attorney yourself.
    </P>
  </ExecutorSubPageLayout>
);

export default PropertyDecisions;
