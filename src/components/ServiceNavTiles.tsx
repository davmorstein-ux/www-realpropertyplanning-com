import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { tileCategories } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-0 sm:px-1 lg:px-2">
        <div className="text-center mb-14">
          <SmartSearchBar />
        </div>

        <h2 className="text-center text-3xl sm:text-4xl lg:text-[2.6rem] font-bold font-serif text-foreground tracking-tight mb-2">
          How can we help today?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-14">
          Choose a service, role, or next step below.
        </p>

        {tileCategories.map((category) => (
          <div key={category.label} className="mb-16 last:mb-0">
            <h3 className="text-center text-2xl sm:text-3xl lg:text-[2rem] font-serif font-bold text-foreground tracking-tight mb-8 mt-4">
              {category.label}
            </h3>
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start gap-0 sm:grid-cols-3 isolate">
              {category.tiles.map((tile, i) => (
                <ServiceNavTileCard key={tile.href + tile.title} tile={tile} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceNavTiles;
