import { Link } from "react-router-dom";
import redSphere from "@/assets/property-accent-sphere-washington.webp";
import { useLayoutEffect, useRef, useState, useCallback, useMemo } from "react";

interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

// Master link catalog — used to assemble per-context selections.
const ALL: Record<string, RelatedLink> = {
  forAttorneys: { href: "/for-attorneys", label: "For Attorneys & Fiduciaries", description: "How we support attorneys with the real estate workstream on probate, trust, and family-law matters." },
  executors: { href: "/executors", label: "For Executors", description: "A clear roadmap for personal representatives managing estate real property in Washington." },
  trustees: { href: "/trustees", label: "For Trustees", description: "Defensible pricing and sale coordination for trust-held real estate." },
  probateSales: { href: "/probate-estate-sales", label: "Probate & Estate Sales", description: "How probate property sales actually run on a Washington court timeline." },
  seniorTransitions: { href: "/senior-transitions", label: "Senior Home Sales", description: "Selling a longtime home during a move to assisted living, memory care, or a smaller residence." },
  forCpas: { href: "/for-cpas", label: "For CPAs", description: "Property guidance for CPAs advising clients through estate or life transitions." },
  forFinancialPlanners: { href: "/for-financial-planners", label: "For Financial Planners", description: "How we work with financial planners whose clients face housing decisions." },
  whyValuation: { href: "/why-valuation-matters", label: "Why Valuation Matters", description: "Why pricing built on appraisal discipline holds up where automated estimates do not." },
  howProcess: { href: "/how-the-process-works", label: "How the Process Works", description: "The seven-step workflow from first call through closing." },
  moveElderly: { href: "/how-to-move-elderly-parents", label: "How to Move Elderly Parents", description: "A practical guide for adult children planning a parent's housing transition." },
  counties: { href: "/counties", label: "Counties We Serve", description: "Service-area hubs across Washington State." },
  transitionResources: { href: "/transition-resources", label: "Transition Resources", description: "A starting point for families navigating a major housing transition." },
  faq: { href: "/faq", label: "FAQ", description: "Common questions about probate property, valuation, and senior transitions." },
  contact: { href: "/contact", label: "Contact David", description: "Start a confidential conversation about a specific property." },
  resources: { href: "/resources", label: "Professional Resources", description: "Trusted attorneys, CPAs, and senior-care professionals across Washington." },
  poa: { href: "/senior-living/power-of-attorneys", label: "Power of Attorneys", description: "How POA authority connects to real estate decisions during senior transitions." },

  // Guides
  guideHowProbateWorks: { href: "/guides/how-probate-real-estate-works", label: "How Probate Real Estate Works", description: "Letters, court timing, and what executors can and can't do before they're issued." },
  guideExecutorFirstSteps: { href: "/guides/executor-first-steps-house", label: "First Steps with the House", description: "What to secure, document, and avoid in the first two weeks." },
  guideInheritedHouse: { href: "/guides/inherited-house-washington", label: "Inherited House in Washington", description: "Sell, rent, or keep — how to think through an inherited property." },
  guideOutOfState: { href: "/guides/out-of-state-families", label: "Handling It from Out of State", description: "Coordinating a Washington estate sale when no one local is available." },
  guideSellDuringProbate: { href: "/guides/sell-house-during-probate-washington", label: "Selling During Probate", description: "Court timing, fiduciary defensibility, and price approvals." },
  guideHowLong: { href: "/guides/how-long-sell-probate-property", label: "How Long Does It Take?", description: "Realistic Washington probate sale timelines." },
  guideTaxes: { href: "/guides/taxes-selling-inherited-house-washington", label: "Taxes on an Inherited House", description: "Step-up basis, capital gains, and what to ask your CPA." },
  guideAppraisalVsCma: { href: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA", description: "Which document the situation actually requires." },
  guideHeirsDisagree: { href: "/guides/heirs-disagree-selling", label: "When Heirs Disagree", description: "Working through sibling buyouts and conflicting positions." },
  guideRepairs: { href: "/guides/estate-property-repairs-before-sale", label: "Repairs Before Sale", description: "Which repairs the estate should pay for — and which it shouldn't." },
  guideAsIs: { href: "/guides/sell-inherited-house-as-is-or-fix", label: "As-Is or Fix Up?", description: "How to decide on prep work for an inherited property." },
  guidePricing: { href: "/guides/pricing-house-trust-estate", label: "Pricing a Trust or Estate House", description: "Defensible pricing methodology for fiduciary sales." },
  guideAppraisalBefore: { href: "/guides/appraisal-before-selling", label: "Should You Get an Appraisal First?", description: "When an appraisal pays for itself before listing." },

  // Resources
  resAttorneys: { href: "/resources/probate-estate-attorneys", label: "Probate & Estate Attorneys", description: "How to find and work with a Washington probate attorney." },
  resCpas: { href: "/resources/cpas-financial-advisors", label: "CPAs & Financial Advisors", description: "When to bring tax and financial advisors into an estate sale." },
  resEstateSale: { href: "/resources/estate-sale-companies", label: "Estate Sale Companies", description: "When a contents sale makes sense before listing the home." },
  resPrep: { href: "/resources/property-preparation-services", label: "Property Preparation Services", description: "Cleanout, repairs, and pre-list trades we coordinate with." },
  resMoving: { href: "/resources/moving-relocation-services", label: "Moving & Relocation Services", description: "Senior-friendly movers and downsizing support." },
  resSeniorMove: { href: "/resources/senior-move-managers", label: "Senior Move Managers", description: "Specialists who plan and run a senior household move." },
  resSeniorLiving: { href: "/resources/senior-living-communities", label: "Senior Living Communities", description: "Independent, assisted, memory-care, and adult-family-home options." },
  resChecklist: { href: "/resources/washington-executors-10-step-checklist", label: "Executor's 10-Step Checklist", description: "A printable starting point for new personal representatives." },

  // Senior living
  slAdultFamily: { href: "/senior-living/adult-family-homes", label: "Adult Family Homes", description: "Small-residence licensed care in Washington State." },
  slAssisted: { href: "/senior-living/assisted-living-communities", label: "Assisted Living", description: "Communities that combine housing with daily-living support." },
  slIndependent: { href: "/senior-living/independent-living", label: "Independent Living", description: "Active-senior communities without daily care." },
  slMemoryCare: { href: "/senior-living/memory-care", label: "Memory Care", description: "Specialized communities for dementia and Alzheimer's." },
  slSkilled: { href: "/senior-living/nursing-and-skilled-care", label: "Nursing & Skilled Care", description: "Higher-acuity options when medical needs increase." },

  // Hubs
  guidesHub: { href: "/guides-and-resources", label: "All Guides & Resources", description: "The full educational library." },
  testimonials: { href: "/testimonials", label: "Client Stories", description: "How families have navigated these transitions." },
};

interface RelatedServicesProps {
  currentPath: string;
  /** Optional override — if provided, ignores path-based selection. */
  links?: Array<keyof typeof ALL>;
  /** Optional heading override. */
  heading?: string;
  /** Optional intro override. */
  intro?: string;
}

interface SpherePosition {
  key: string;
  left: number;
  top: number;
  row: number;
  col: number;
}

/** Pick contextually relevant links based on the page's URL pattern. */
function pickContextual(currentPath: string): { keys: Array<keyof typeof ALL>; heading: string; intro: string } {
  const p = currentPath;

  // Guides — recommend other guides + the matching service hub.
  if (p.startsWith("/guides/")) {
    if (p.includes("executor") || p.includes("first-steps") || p.includes("what-executors")) {
      return { keys: ["guideHowProbateWorks", "guideOutOfState", "executors"], heading: "Related Guides for Executors", intro: "More step-by-step guides for personal representatives." };
    }
    if (p.includes("probate") || p.includes("how-long") || p.includes("sell-house-during-probate")) {
      return { keys: ["guideExecutorFirstSteps", "guideHowLong", "probateSales"], heading: "More on Probate Real Estate", intro: "Companion guides on Washington probate property sales." };
    }
    if (p.includes("appraisal") || p.includes("pricing") || p.includes("cma")) {
      return { keys: ["guideAppraisalVsCma", "guidePricing", "whyValuation"], heading: "More on Pricing & Valuation", intro: "Related guides on how estate property gets priced." };
    }
    if (p.includes("inherited") || p.includes("taxes") || p.includes("as-is")) {
      return { keys: ["guideTaxes", "guideAsIs", "guideInheritedHouse"], heading: "More for Inheriting a House", intro: "Companion guides for newly-inherited Washington property." };
    }
    if (p.includes("heirs") || p.includes("disagree") || p.includes("out-of-state") || p.includes("repairs")) {
      return { keys: ["guideHeirsDisagree", "guideOutOfState", "guideRepairs"], heading: "Related Family-Coordination Guides", intro: "More on the people-and-property side of estate sales." };
    }
    if (p.includes("senior")) {
      return { keys: ["moveElderly", "seniorTransitions", "resSeniorMove"], heading: "Related Senior-Transition Guides", intro: "More on moving a parent or downsizing a longtime home." };
    }
    return { keys: ["guidesHub", "executors", "probateSales"], heading: "Related Guides", intro: "More guides on Washington estate, probate, and inherited property." };
  }

  // Insights (legacy — most are redirected, but defensive default for any that still render)
  if (p.startsWith("/insights/") || p.startsWith("/insights-guidance/")) {
    return { keys: ["guidesHub", "executors", "probateSales"], heading: "Related Reading", intro: "More articles on the same topic." };
  }

  // Resources — recommend other resources + the matching pro hub.
  if (p.startsWith("/resources/")) {
    if (p.includes("attorney")) return { keys: ["resCpas", "forAttorneys", "resChecklist"], heading: "Other Professional Resources", intro: "More resources for the legal and financial side of an estate." };
    if (p.includes("cpa") || p.includes("financial")) return { keys: ["resAttorneys", "forCpas", "forFinancialPlanners"], heading: "Other Professional Resources", intro: "Related directories of trusted professionals." };
    if (p.includes("estate-sale") || p.includes("preparation") || p.includes("moving")) {
      return { keys: ["resPrep", "resMoving", "resSeniorMove"], heading: "Other Property-Preparation Resources", intro: "Vendors and specialists who help prepare a home for sale." };
    }
    if (p.includes("senior")) return { keys: ["resSeniorLiving", "resSeniorMove", "seniorTransitions"], heading: "Other Senior-Care Resources", intro: "More on senior living, moving, and care planning." };
    if (p.includes("checklist")) return { keys: ["executors", "guideExecutorFirstSteps", "guideHowProbateWorks"], heading: "Companion Resources for Executors", intro: "Use these alongside the checklist." };
    return { keys: ["resAttorneys", "resCpas", "resSeniorLiving"], heading: "Other Resources", intro: "More directories of trusted Washington professionals." };
  }

  // Senior-living sub-pages
  if (p.startsWith("/senior-living/")) {
    if (p.includes("memory")) return { keys: ["slAssisted", "slSkilled", "seniorTransitions"], heading: "Related Senior-Living Options", intro: "Other care-level options families weigh alongside memory care." };
    if (p.includes("assisted")) return { keys: ["slIndependent", "slMemoryCare", "moveElderly"], heading: "Related Senior-Living Options", intro: "Adjacent care levels and the home-sale side of the move." };
    if (p.includes("independent")) return { keys: ["slAssisted", "slAdultFamily", "moveElderly"], heading: "Related Senior-Living Options", intro: "When independent living needs to step up — and how the home factors in." };
    if (p.includes("nursing") || p.includes("skilled")) return { keys: ["slMemoryCare", "slAssisted", "seniorTransitions"], heading: "Related Senior-Living Options", intro: "Other higher-acuity options and the home-sale coordination." };
    if (p.includes("adult-family")) return { keys: ["slAssisted", "slMemoryCare", "moveElderly"], heading: "Related Senior-Living Options", intro: "How adult family homes compare and what happens with the house." };
    if (p.includes("power-of-attorney")) return { keys: ["executors", "trustees", "moveElderly"], heading: "Related Authority & Transition Resources", intro: "POA alongside the broader fiduciary picture." };
    return { keys: ["slAssisted", "slMemoryCare", "seniorTransitions"], heading: "Related Senior-Living Options", intro: "Compare housing levels and the property side of the move." };
  }

  // Counties hub or specific county pages
  if (p === "/counties" || p.endsWith("-county") || p.startsWith("/counties/")) {
    return { keys: ["probateSales", "executors", "guideOutOfState"], heading: "Companion Resources", intro: "Service and guide pages most often used alongside this county." };
  }

  // Cities — local pages link to executors, probate, and out-of-state.
  if (p.startsWith("/cities/") || p.endsWith("-probate-estate-real-estate")) {
    return { keys: ["probateSales", "executors", "guideInheritedHouse"], heading: "Companion Resources", intro: "Most-used pages alongside this local hub." };
  }

  // Attorney sub-pages
  if (p.startsWith("/for-") || p.startsWith("/attorneys/") || p.includes("attorney")) {
    return { keys: ["forAttorneys", "executors", "whyValuation"], heading: "Related Professional Pages", intro: "Adjacent professional and fiduciary resources." };
  }

  // Default catch-all (homepage, contact, about, etc.)
  return { keys: ["probateSales", "seniorTransitions", "executors"], heading: "Related Resources", intro: "Most-visited pages on the site." };
}

const RelatedServices = ({ currentPath, links: linksOverride, heading: headingOverride, intro: introOverride }: RelatedServicesProps) => {
  const { keys, heading, intro } = useMemo(() => {
    if (linksOverride && linksOverride.length > 0) {
      return { keys: linksOverride, heading: headingOverride || "Related Resources", intro: introOverride || "" };
    }
    const ctx = pickContextual(currentPath);
    return { keys: ctx.keys, heading: headingOverride || ctx.heading, intro: introOverride || ctx.intro };
  }, [currentPath, linksOverride, headingOverride, introOverride]);

  const links = useMemo(
    () => keys.map((k) => ALL[k]).filter((l): l is RelatedLink => Boolean(l) && l.href !== currentPath),
    [keys, currentPath]
  );

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

  if (links.length === 0) return null;

  return (
    <section data-nosnippet className="py-14 md:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-2 text-sm">
            {heading}
          </p>
          {intro && (
            <p className="text-muted-foreground text-[15px] mb-8 max-w-2xl">
              {intro}
            </p>
          )}
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
                  loading="lazy"/>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
