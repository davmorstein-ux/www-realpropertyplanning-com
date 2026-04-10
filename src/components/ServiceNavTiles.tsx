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
          <div key={category.label} className="mb-20 last:mb-0">
            <div className="mx-auto max-w-[1200px] mb-10 mt-8">
              <div className="bg-navy rounded-lg px-6 py-3">
                <h3 className="text-center text-xl sm:text-2xl lg:text-[1.65rem] font-serif font-bold text-primary-foreground tracking-wide">
                  {category.label}
                </h3>
              </div>
            </div>
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
