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

    {/* Professional team tiles — break out of the 3xl article width for a 3-col grid */}
    <div className="not-prose -mx-4 md:-mx-16 lg:-mx-32">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {professionals.map((p) => (
          <Link
            key={p.name}
            to={p.href}
            aria-label={`${p.name} — ${p.role}`}
            className="group block bg-white rounded-xl p-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 transition-transform duration-300 ease-out hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="text-3xl mb-3" aria-hidden="true">
                {p.icon}
              </div>
              <h3
                className="text-navy font-bold text-[20px] leading-snug mb-1 transition-colors duration-300 group-hover:text-gold"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {p.name}
              </h3>
              <p
                className="text-muted-foreground text-[14px] font-medium uppercase tracking-wider mb-3"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {p.role}
              </p>
              <p
                className="text-foreground text-[15px] leading-relaxed"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                {p.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-gold font-semibold text-sm transition-colors duration-300 group-hover:text-[hsl(var(--gold-dark))]">
                Learn more
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
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
