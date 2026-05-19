import { Link } from "react-router-dom";
import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.webp";

const tiles = [
  {
    iconSrc: seniorIcon,
    iconAlt: "Helping an aging parent — senior transitions and family guidance",
    title: "Helping an Aging Parent",
    description:
      "When a parent or loved one needs more support — with care, downsizing, or figuring out where to live next.",
    cta: "Start Here",
    href: "/helping-aging-parents",
  },
  {
    iconSrc: probateIcon,
    iconAlt: "Handling an inherited home — executors and families settling an estate",
    title: "Handling an Inherited Home",
    description:
      "When you've lost a loved one and now have a house, an estate, and a lot of unfamiliar decisions to work through.",
    cta: "See Next Steps",
    href: "/estate-probate-inherited-property",
  },
  {
    iconSrc: proIcon,
    iconAlt: "Working with trusted professionals — attorneys, planners, and specialists",
    title: "Working With Trusted Professionals",
    description:
      "Meet the attorneys, planners, and specialists who can help your family move forward with confidence and clarity.",
    cta: "Meet the Team",
    href: "/building-your-trusted-professional-team",
  },
];

const HomepageFunnel = () => (
  <section id="guided-entry" className="bg-warm-bg py-20 md:py-28 lg:py-36">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
        <h2
          className="font-serif text-navy"
          style={{
            fontSize: "clamp(24px, 2.4vw, 32px)",
            lineHeight: 1.3,
            fontWeight: 500,
            margin: "0 0 14px 0",
            letterSpacing: "-0.005em",
          }}
        >
          Which of these best describes your situation right now?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Pick what feels closest to where you are &mdash; we&rsquo;ll guide you from there.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch max-w-6xl mx-auto">
        {tiles.map(({ iconSrc, iconAlt, title, description, cta, href }) => (
          <Link
            key={title}
            to={href}
            aria-label={`${title} — ${description} — ${cta}`}
            className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <div className="card-3d-blue__inner h-full">
              <div className="card-3d-blue__face h-full">
                <div
                  className="flex h-full flex-col items-center text-center"
                  style={{ padding: "36px 26px 32px" }}
                >
                  <img
                    src={iconSrc}
                    alt={iconAlt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      maxWidth: "160px",
                      height: "160px",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 18px",
                      background: "transparent",
                    }}
                  />
                  <h3 className="font-serif font-semibold text-navy mb-4" style={{ fontSize: "26px", lineHeight: 1.2 }}>
                    {title}
                  </h3>
                  <p className="text-foreground mb-7" style={{ fontSize: "17px", lineHeight: 1.6 }}>
                    {description}
                  </p>
                  <span
                    className="gold-cta mt-auto"
                    style={{ padding: "14px 26px", fontSize: "16px", minHeight: 52 }}
                  >
                    {cta}
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
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
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFunnel;
