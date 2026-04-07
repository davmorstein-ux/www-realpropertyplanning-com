import { Link } from "react-router-dom";
import redSphere from "@/assets/red-sphere-accent.png";
import { useLayoutEffect, useRef, useState, useCallback } from "react";

const allLinks = [
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries", description: "How we support attorneys and fiduciaries with real estate during probate and estate matters." },
  { href: "/executors", label: "For Executors", description: "A clear roadmap for executors managing estate real property in Washington State." },
  { href: "/probate-estate-sales", label: "Probate & Estate Sales", description: "Guidance for families and fiduciaries navigating property sales during probate." },
  { href: "/senior-transitions", label: "Senior Transitions", description: "Support for families navigating a move from a longtime home." },
  { href: "/for-cpas", label: "For CPAs", description: "Property guidance for CPAs advising clients through estate or life transitions." },
  { href: "/for-financial-planners", label: "For Financial Planners", description: "How we work with financial planners whose clients face housing decisions." },
  { href: "/why-valuation-matters", label: "Why Valuation Matters", description: "Understanding the role of accurate property valuation in estate and transition planning." },
  { href: "/how-the-process-works", label: "How the Process Works", description: "A step-by-step look at how a property sale unfolds from conversation through closing." },
  { href: "/how-to-move-elderly-parents", label: "How to Move Elderly Parents", description: "A compassionate guide for families planning a senior housing transition." },
  { href: "/counties", label: "Counties We Serve", description: "Service areas throughout Washington State." },
  { href: "/transition-resources", label: "Transition Resources", description: "A curated starting point for families and professionals navigating major housing transitions." },
  { href: "/faq", label: "FAQ", description: "Answers to common questions about our services, process, and expertise." },
  { href: "/contact", label: "Contact David", description: "Start a confidential conversation about your property situation." },
  { href: "/resources", label: "Resources", description: "Trusted professionals and service providers for probate, estate, and senior transitions." },
  { href: "/senior-living/power-of-attorneys", label: "Power of Attorneys", description: "Understanding how Power of Attorney authority connects to real estate decisions during senior transitions." },
];

interface RelatedServicesProps {
  currentPath: string;
}

interface SpherePosition {
  key: string;
  left: number;
  top: number;
  row: number;
  col: number;
}

const RelatedServices = ({ currentPath }: RelatedServicesProps) => {
  const links = allLinks.filter((l) => l.href !== currentPath);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [spherePositions, setSpherePositions] = useState<SpherePosition[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [colCount, setColCount] = useState(3);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frameId = 0;

    const measureSpherePositions = () => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>(".card-3d-blue"));

      if (cards.length < 4) {
        setSpherePositions([]);
        return;
      }

      const gridRect = grid.getBoundingClientRect();
      const rows: Array<{
        top: number;
        items: Array<{ rect: DOMRect }>;
      }> = [];

      const sortedCards = cards
        .map((card) => ({ rect: card.getBoundingClientRect() }))
        .sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left);

      sortedCards.forEach((card) => {
        const lastRow = rows[rows.length - 1];
        if (!lastRow || Math.abs(card.rect.top - lastRow.top) > 8) {
          rows.push({ top: card.rect.top, items: [card] });
          return;
        }
        lastRow.items.push(card);
      });

      rows.forEach((row) => row.items.sort((a, b) => a.rect.left - b.rect.left));
      if (rows.length > 0) setColCount(rows[0].items.length);

      const nextPositions: SpherePosition[] = [];

      rows.forEach((row, rowIndex) => {
        const nextRow = rows[rowIndex + 1];
        if (!nextRow) return;

        const intersections = Math.min(row.items.length, nextRow.items.length) - 1;
        if (intersections <= 0) return;

        for (let colIndex = 0; colIndex < intersections; colIndex += 1) {
          const upperLeft = row.items[colIndex];
          const upperRight = row.items[colIndex + 1];
          const lowerLeft = nextRow.items[colIndex];
          const lowerRight = nextRow.items[colIndex + 1];

          const left = (upperLeft.rect.right + upperRight.rect.left) / 2 - gridRect.left;
          const top = (
            Math.max(upperLeft.rect.bottom, upperRight.rect.bottom) +
            Math.min(lowerLeft.rect.top, lowerRight.rect.top)
          ) / 2 - gridRect.top;

          nextPositions.push({
            key: `${rowIndex}-${colIndex}`,
            left,
            top,
            row: rowIndex,
            col: colIndex,
          });
        }
      });

      setSpherePositions(nextPositions);
    };

    const scheduleMeasurement = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(measureSpherePositions);
    };

    scheduleMeasurement();

    const resizeObserver = new ResizeObserver(scheduleMeasurement);
    resizeObserver.observe(grid);
    Array.from(grid.querySelectorAll<HTMLElement>(".card-3d-blue")).forEach((card) => {
      resizeObserver.observe(card);
    });

    window.addEventListener("resize", scheduleMeasurement);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", scheduleMeasurement);
      resizeObserver.disconnect();
    };
  }, [currentPath, links.length]);

  const isSphereNearTile = useCallback(
    (sphere: SpherePosition, tileIndex: number) => {
      const tileRow = Math.floor(tileIndex / colCount);
      const tileCol = tileIndex % colCount;
      const isAdjacentRow = sphere.row === tileRow || sphere.row === tileRow - 1;
      const isAdjacentCol = sphere.col === tileCol || sphere.col === tileCol - 1;
      return isAdjacentRow && isAdjacentCol;
    },
    [colCount]
  );

  return (
    <section data-nosnippet className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-2 text-sm">
            Related Resources
          </p>
          <p className="text-muted-foreground text-[15px] mb-8 max-w-2xl">
            Explore helpful pages for families, executors, and professionals navigating property transitions.
          </p>
          <div className="relative">
            <div ref={gridRef} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="card-3d-blue group block h-full min-h-[252px] sm:min-h-[280px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="card-3d-blue__inner h-full">
                    <div className="card-3d-blue__face h-full">
                      <div className="flex h-full flex-col justify-between px-6 pb-6 pt-10 sm:px-7 sm:pb-7 sm:pt-11">
                        <div>
                          <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]" style={{ textShadow: "0 1px 4px hsla(220, 30%, 15%, 0.25)" }}>
                            {link.label}
                          </h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary/75 transition-colors duration-300 group-hover:text-accent">
                          <span>Learn more</span>
                          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {spherePositions.map((sphere) => {
              const isActive = hoveredIndex !== null && isSphereNearTile(sphere, hoveredIndex);
              return (
                <img
                  key={sphere.key}
                  src={redSphere}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute z-10 hidden sm:block w-[44px] h-[44px] lg:w-[52px] lg:h-[52px]"
                  style={{
                    left: sphere.left,
                    top: sphere.top,
                    transform: "translate(-50%, -50%)",
                    filter: isActive
                      ? "brightness(1.18) drop-shadow(0 0 6px hsla(0, 75%, 50%, 0.35))"
                      : "brightness(1) drop-shadow(0 0 0px transparent)",
                    transition: "filter 0.5s ease",
                  }}
                  draggable={false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
