import ProfessionalNetworkCard from "./ProfessionalNetworkCard";
import { professionalNetworkCategories } from "./professional-network-tiles-data";

/**
 * Full Professional Network grid — finalized 30-tile premium ecosystem.
 * Lives on /building-your-trusted-professional-team.
 */
const ProfessionalNetworkGrid = () => {
  return (
    <section className="py-14 lg:py-20 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-serif text-[28px] md:text-4xl lg:text-[44px] font-semibold text-navy leading-tight mb-4">
            The Full Professional Network
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            A coordinated ecosystem of attorneys, financial advisors, housing specialists, and property professionals — organized so you can find the right help at the right moment.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 max-w-7xl mx-auto">
          {professionalNetworkCategories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-6 md:mb-8">
                <h3 className="font-serif text-[22px] md:text-[28px] text-navy font-semibold leading-tight mb-2">
                  {cat.label}
                </h3>
                <p className="text-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                  {cat.tagline}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {cat.tiles.map((tile) => (
                  <ProfessionalNetworkCard key={tile.href} tile={tile} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalNetworkGrid;
