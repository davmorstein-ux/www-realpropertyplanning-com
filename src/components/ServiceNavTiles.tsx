import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { serviceTiles } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-0 sm:px-1 lg:px-2">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4 max-w-3xl mx-auto">
            Guidance for Senior Transitions, Placement, and Property Decisions
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Education, practical guidance, and trusted connections for seniors, families, executors, and professionals navigating housing changes, care transitions, estate matters, and the sale of personal and real property.
          </p>
          <SmartSearchBar />
        </div>

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-0 sm:grid-cols-3">
          {serviceTiles.map((tile) => (
            <ServiceNavTileCard key={tile.href + tile.title} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNavTiles;
