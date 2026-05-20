import PlanningSubPageLayout, {
  SubH2,
  P,
  UL,
  Divider,
} from "@/components/PlanningSubPageLayout";

const HowWeCanHelp = () => (
  <PlanningSubPageLayout
    seoTitle="How This Resource Helps | Real Property Planning"
    seoDescription="Real Property Planning is an educational resource hub for seniors, families, executors, and professionals navigating housing transitions and estate property in Washington State."
    canonicalPath="/planning-before-a-crisis/how-we-can-help"
    breadcrumbName="How This Resource Helps"
    bandTitle="HOW THIS RESOURCE HELPS"
    disclaimer="Real Property Planning is an educational resource hub. It does not employ professionals or provide legal, tax, financial, real estate, or care services directly. Information on this site is for general guidance only and is not a substitute for advice from licensed professionals."
  >
    <SubH2>What This Site Is</SubH2>
    <P>
      Real Property Planning is an educational resource hub for people navigating senior housing transitions, estate property, and inherited homes in Washington State. The site does not provide services directly. Instead, it offers clear information and a directory of featured providers and professionals so visitors can understand their options and decide who to contact next.
    </P>

    <Divider />

    <SubH2>Who This Site Is For</SubH2>
    <UL>
      <li><strong>Seniors</strong> thinking through what their next chapter could look like</li>
      <li><strong>Adult children</strong> helping aging parents plan or manage a transition</li>
      <li><strong>Executors, personal representatives, and trustees</strong> responsible for real property</li>
      <li><strong>Attorneys, CPAs, financial advisors, and care professionals</strong> looking for relevant resources to share with clients</li>
    </UL>

    <Divider />

    <SubH2>What You'll Find Here</SubH2>
    <UL>
      <li><strong>Educational guides</strong> on probate, inherited property, senior housing options, and planning ahead</li>
      <li><strong>Plain-language explanations</strong> of key legal, financial, and real estate terms</li>
      <li><strong>A directory of featured providers and professionals</strong> across Washington State — including estate planning and elder law attorneys, CPAs, financial planners, senior living advisors, move managers, real estate brokers, and certified residential appraisers</li>
      <li><strong>Checklists and next-step prompts</strong> to help visitors organize their thinking</li>
    </UL>

    <Divider />

    <SubH2>How to Use This Site</SubH2>
    <UL>
      <li><strong>Learn.</strong> Read the guides that match your situation to better understand the options and decisions ahead.</li>
      <li><strong>Compare.</strong> Use the explanations and checklists to think through what matters most to your family.</li>
      <li><strong>Connect.</strong> Browse the featured providers and professionals and reach out directly to the ones that fit your needs.</li>
    </UL>

    <Divider />

    <SubH2>Areas Covered</SubH2>
    <P>
      The featured providers listed on this site work throughout Washington State, with particularly strong coverage in Western Washington and the Puget Sound region — including Seattle, Bellevue, Kirkland, Redmond, Mercer Island, Issaquah, Everett, Edmonds, Lynnwood, Mukilteo, Mill Creek, Tacoma, University Place, Gig Harbor, Puyallup, Bainbridge Island, Poulsbo, Silverdale, Bremerton, Mount Vernon, Burlington, and Anacortes.
    </P>

    <Divider />

    <SubH2>A Note on Scope</SubH2>
    <P>
      Real Property Planning is an informational platform only. It does not perform legal work, financial planning, care coordination, estate administration, move management, real estate brokerage, or appraisal services. Decisions about your situation should be made with licensed professionals you select and engage directly.
    </P>
  </PlanningSubPageLayout>
);

export default HowWeCanHelp;
