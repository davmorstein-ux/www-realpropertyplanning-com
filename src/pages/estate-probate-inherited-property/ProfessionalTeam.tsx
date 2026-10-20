import EstateSubPageLayout, { SubH2, P, Divider } from "@/components/EstateSubPageLayout";
import ProfessionalNetworkCard from "@/components/ProfessionalNetworkCard";
import { professionalNetworkCategories } from "@/components/professional-network-tiles-data";

const DISCLAIMER =
  "The information on this page is for general guidance only and does not constitute legal, tax, or financial advice. Please consult licensed professionals for guidance specific to your situation.";

// Pull the same tile images already used on the homepage / professional network.
const findTile = (title: string) => {
  for (const cat of professionalNetworkCategories) {
    const t = cat.tiles.find((x) => x.title === title);
    if (t) return t;
  }
  throw new Error(`Tile not found: ${title}`);
};

const teamTiles = [
  { ...findTile("Real Estate Brokers"), title: "Real Estate Broker" },
  { ...findTile("Real Estate Appraisers"), title: "Certified Residential Appraiser" },
  { ...findTile("Elder Law Attorneys"), title: "Elder Law Attorney" },
  { ...findTile("Senior Move Managers"), title: "Senior Move Manager" },
  { ...findTile("Financial Planners"), title: "Financial Planner or CPA" },
  { ...findTile("Senior Living Advisors"), title: "Senior Living Advisor" },
];

const ProfessionalTeam = () => (
  <EstateSubPageLayout
    seoTitle="Your Estate Administration Team: Who You Need and Why | Real Property Planning"
    seoDescription="Estate administration requires the right professionals working together. Here's who you need, what each one does, and how to assemble the right team."
    canonicalPath="/estate-probate-inherited-property/professional-team"
    breadcrumbName="Building Your Professional Team"
    bandTitle="BUILDING YOUR PROFESSIONAL TEAM"
    disclaimer={DISCLAIMER}
    hideHero
  >
    <SubH2>The Right Team Makes Everything Easier.</SubH2>
    <P>
      Estate administration touches legal, financial, real estate, and logistical territory. Having the right professionals in place — and coordinated — prevents costly mistakes and protects everyone involved.
    </P>

    <Divider />

    <SubH2>Why a Coordinated Team Matters</SubH2>
    <P>
      Families navigating an estate often make the mistake of dealing with each professional in isolation — consulting the attorney but not the CPA, engaging a real estate agent without getting an appraisal first, making property decisions before legal authority is established.
    </P>
    <P>
      A coordinated team — where the right professionals are engaged at the right time, and communicate with each other — is the difference between a smooth administration and a chaotic one.
    </P>
    <P>Here's who typically needs to be involved.</P>

    <Divider />

    {/* Professional team tiles — same card as the professional network.
        Oct 20, 2026 (David: "too large"): kept inside the text column instead
        of breaking out of it with negative margins (the grid ran 1,344px wide
        on a 1,280px screen, each tile 432 x 400). Two across on phones,
        three on tablets and desktop. */}
    <div className="not-prose">
      <div className="rpp-m2 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5" style={{ maxWidth: 720, margin: "0 auto" }}>
        {teamTiles.map((tile) => (
          <ProfessionalNetworkCard key={tile.title} tile={tile} />
        ))}
      </div>
    </div>

    <Divider />

    <SubH2>How Real Property Planning Can Help</SubH2>
    <P>
      Real Property Planning is a free resource for families navigating estate administration. It explains what each of these professionals does. Its Find a Professional page lists independent professionals the site's owner has met with personally; you contact and hire them directly, and you are free to choose anyone.
    </P>
  </EstateSubPageLayout>
);

export default ProfessionalTeam;
