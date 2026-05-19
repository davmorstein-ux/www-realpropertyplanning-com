import { Link } from "react-router-dom";
import seniorIcon from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import probateIcon from "@/assets/icons/probate-property-home-icon-washington.webp";
import proIcon from "@/assets/icons/professional-network-nodes-icon-washington.webp";
import planningIcon from "@/assets/icons/estate-wills-planning-icon-washington.webp";

const tiles = [
  {
    iconSrc: planningIcon,
    iconAlt: "Planning ahead — prepare before a crisis",
    title: "Planning Ahead",
    description: "Prepare your family and your property — before a crisis arrives.",
    cta: "Start Planning",
    href: "/planning-before-a-crisis",
  },
  {
    iconSrc: seniorIcon,
    iconAlt: "Helping a loved one — senior transitions and family guidance",
    title: "Helping a Loved One",
    description: "Support an aging parent with care, housing, and next-step decisions.",
    cta: "See How",
    href: "/helping-aging-parents",
  },
  {
    iconSrc: probateIcon,
    iconAlt: "Handling an estate — executors and inherited property",
    title: "Handling an Estate",
    description: "Guidance for executors and families managing an inherited home.",
    cta: "Get Steps",
    href: "/estate-probate-inherited-property",
  },
  {
    iconSrc: proIcon,
    iconAlt: "Find professionals — attorneys, CPAs, lenders, and specialists",
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
          You're in the Right Place
        </h2>
        <p className="text-foreground leading-relaxed" style={{ fontSize: "20px" }}>
          Whether you're planning ahead, helping a loved one, or settling an estate — we'll guide you from here.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch max-w-6xl mx-auto">
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
                  style={{ padding: "28px 20px 26px" }}
                >
                  <img
                    src={iconSrc}
                    alt={iconAlt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                      height: "120px",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 16px",
                      background: "transparent",
                    }}
                  />
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
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFunnel;
