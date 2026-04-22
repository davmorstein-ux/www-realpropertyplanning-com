import SmartSearchBar from "./SmartSearchBar";
import ServiceNavTileCard from "./ServiceNavTileCard";
import { tileCategories } from "./service-nav-tiles-data";

const ServiceNavTiles = () => {
  return (
    <section className="pt-3 pb-20 lg:pt-4 lg:pb-28 bg-secondary">
      <div className="mx-auto max-w-[3300px] px-0 sm:px-1 lg:px-2">

        {/* 1. Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold font-serif text-foreground tracking-tight mb-3">
          How can we help today?
        </h2>

        {/* 2. Search bar */}
        <div className="text-center mb-4">
          <SmartSearchBar searchOnly />
        </div>

        {/* 3. Oval prompt buttons — 2 rows of 2 */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <SmartSearchBar pillsOnly />
        </div>

        {tileCategories.map((category) => (
          <div key={category.label} className="mb-20 last:mb-0">
            <div className="mx-auto max-w-[1200px] mb-10 mt-8">
              <div className="bg-navy rounded-lg px-6 py-4">
                <h3
                  className="text-center text-primary-foreground tracking-[0.12em] uppercase leading-none font-bold text-xl"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.5rem)" }}
                >
                  {category.label}
                </h3>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-start justify-items-center gap-0 sm:grid-cols-3 isolate">
              {category.tiles.map((tile, i) => (
                <ServiceNavTileCard key={tile.href + tile.title} tile={tile} index={i} />
              ))}
              {category.tiles.length % 3 !== 0 &&
                Array.from({ length: 3 - (category.tiles.length % 3) }).map((_, i) => (
                  <div key={`placeholder-${i}`} className="invisible pointer-events-none" aria-hidden="true">
                    <ServiceNavTileCard
                      tile={category.tiles[0]}
                      index={category.tiles.length + i}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceNavTiles;
