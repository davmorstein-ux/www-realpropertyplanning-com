import EstateSubPageLayout, { SubH2, P, Divider } from "@/components/EstateSubPageLayout";
import ProfessionalNetworkCard from "@/components/ProfessionalNetworkCard";
import { professionalNetworkCategories } from "@/components/professional-network-tiles-data";
import professionalTeamHero from "@/assets/professional-team-hero.png";

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
    seoTitle="Building Your Professional Team | Real Property Planning"
    seoDescription="Estate administration requires the right professionals working together. Here's who you need, what each one does, and how to assemble the right team."
    canonicalPath="/estate-probate-inherited-property/professional-team"
    breadcrumbName="Building Your Professional Team"
    bandTitle="BUILDING YOUR PROFESSIONAL TEAM"
    disclaimer={DISCLAIMER}
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

    {/* Professional team tiles — same premium card used on the homepage / professional network */}
    <div className="not-prose -mx-4 md:-mx-16 lg:-mx-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {teamTiles.map((tile) => (
          <ProfessionalNetworkCard key={tile.title} tile={tile} />
        ))}
      </div>
    </div>

    <Divider />

    <SubH2>How Real Property Planning Can Help</SubH2>
    <P>
      Real Property Planning serves as a coordinating resource for families navigating estate administration. We can connect you with experienced professionals across all of these disciplines in Washington State — so you don't have to search for each one separately while also managing an estate.
    </P>
  </EstateSubPageLayout>
);

export default ProfessionalTeam;
