import { Link } from "react-router-dom";
import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.webp";

const tiles = [
  {
    iconSrc: seniorIcon,
    iconAlt: "Helping aging parents — senior transitions and family guidance",
    title: "Helping Aging Parents",
    description:
      "Support for families navigating senior transitions, care decisions, downsizing, and next steps.",
    cta: "Begin Journey",
    href: "/helping-aging-parents",
  },
  {
    iconSrc: probateIcon,
    iconAlt: "Estate and probate guidance — executors, trustees, inherited property",
    title: "Estate & Probate Guidance",
    description:
      "Resources and trusted connections for executors, trustees, inherited property, and estate settlement.",
    cta: "Explore Guidance",
    href: "/estate-probate-inherited-property",
  },
  {
    iconSrc: proIcon,
    iconAlt: "Professional resources — attorneys, fiduciaries, planners, lenders",
    title: "Professional Resources & Referrals",
    description:
      "Connections for attorneys, fiduciaries, planners, lenders, and senior service professionals.",
    cta: "View Resources",
    href: "/building-your-trusted-professional-team",
  },
];

const HomepageFunnel = () => (
  <section id="guided-entry" className="bg-secondary py-14 md:py-20 lg:py-24">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
        <h2
          className="font-serif font-semibold text-navy"
          style={{
            fontSize: "clamp(28px, 3.4vw, 44px)",
            lineHeight: 1.15,
            margin: "0 0 14px 0",
          }}
        >
          Where are you in the process?
        </h2>
        <p className="text-foreground text-lg md:text-xl leading-relaxed">
          Choose the path that best matches your current situation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto">
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
