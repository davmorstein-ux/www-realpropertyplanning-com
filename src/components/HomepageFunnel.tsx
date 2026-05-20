import { Link } from "react-router-dom";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.png";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.png";
import tileEstate from "@/assets/tiles/tile-handling-estate.png";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.png";

const tiles = [
  {
    imgSrc: tilePlanning,
    imgAlt: "Older couple reviewing an estate plan together at home",
    title: "I Want to Plan Ahead",
    description: "Prepare your family and your property — before a crisis arrives.",
    cta: "Start Planning",
    href: "/planning-before-a-crisis",
  },
  {
    imgSrc: tileHelping,
    imgAlt: "Adult daughter hugging her senior mother on a couch",
    title: "I need a Professional",
    description: "Support an aging parent with care, housing, and next-step decisions.",
    cta: "See How",
    href: "/helping-aging-parents",
  },
  {
    imgSrc: tileEstate,
    imgAlt: "Family reviewing an estate property plan with documents",
    title: "Handling an Estate",
    description: "Guidance for executors and families managing an inherited home.",
    cta: "Get Steps",
    href: "/estate-probate-inherited-property",
  },
  {
    imgSrc: tileProfessionals,
    imgAlt: "Man at a laptop browsing trusted professional resources",
    title: "Find Professionals",
    description: "Connect with vetted attorneys, CPAs, lenders, and senior specialists.",
    cta: "Meet the Team",
    href: "/building-your-trusted-professional-team",
  },
];

const HomepageFunnel = () => (
  <section id="guided-entry" className="bg-warm-bg py-20 md:py-28">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
        <h2
          className="font-serif text-navy"
          style={{
            fontSize: "clamp(28px, 3vw, 40px)",
            lineHeight: 1.25,
            fontWeight: 500,
            margin: "0 0 16px 0",
            letterSpacing: "-0.005em",
          }}
        >
          Your Resource For Estate & Probate Properties, Along With Senior Transitions
        </h2>
        <p className="text-foreground leading-relaxed text-2xl font-bold" style={{ fontSize: "20px" }}>
          Select the box below that best describes your situation:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch max-w-6xl mx-auto">
        {tiles.map(({ imgSrc, imgAlt, title, description, cta, href }) => (
          <Link
            key={title}
            to={href}
            aria-label={`${title} — ${description} — ${cta}`}
            className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <div className="card-3d-blue__inner h-full">
              <div className="card-3d-blue__face h-full" style={{ padding: 0, overflow: "hidden" }}>
                <div className="flex h-full flex-col">
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      margin: 0,
                    }}
                  />
                  <div
                    className="flex flex-1 flex-col items-center text-center"
                    style={{ padding: "24px 20px 26px" }}
                  >
                    <h3 className="font-serif font-semibold text-navy mb-3" style={{ fontSize: "22px", lineHeight: 1.2 }}>
                      {title}
                    </h3>
                    <p className="text-foreground mb-6" style={{ fontSize: "16px", lineHeight: 1.55 }}>
                      {description}
                    </p>
                    <span
                      className="gold-cta mt-auto"
                      style={{ padding: "12px 20px", fontSize: "15px", minHeight: 52 }}
                    >
                      {cta}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFunnel;
