import { Link } from "react-router-dom";

const cards = [
  {
    iconSrc: "",
    iconAlt: "Seniors and families — inherited home and senior housing transitions",
    label: "Seniors & Families",
    description: "Navigating an inherited home, estate sale, or senior housing transition",
    cta: "Start Here",
    href: "/what-should-we-do-first",
  },
  {
    iconSrc: "/images/icon_attorneys_fiduciaries.png",
    iconAlt: "Attorneys and fiduciaries — probate real estate partner",
    label: "Attorneys & Fiduciaries",
    description: "Need a trusted probate real estate partner in Washington State",
    cta: "Learn More",
    href: "/for-attorneys",
  },
  {
    iconSrc: "/images/icon_service_providers.png",
    iconAlt: "Service providers — join our network of vetted professionals",
    label: "Service Providers",
    description: "Join our network of vetted professionals serving seniors and estates",
    cta: "Get Connected",
    href: "/join-the-network",
  },
];

const HomepageFunnel = () => (
  <section className="bg-secondary py-12 md:py-16 lg:py-20">
    <div className="container px-6 lg:px-8">
      <h2
        className="text-center font-bold mb-10 md:mb-14"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#8B0000",
          fontSize: "clamp(1.75rem, 2.5vw, 2rem)",
        }}
      >
        Choose The Topic That Best Fits Your Needs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">

        {cards.map(({ iconSrc, iconAlt, label, description, cta, href }) => (
          <Link
            key={label}
            to={href}
            aria-label={`${label} — ${description} — ${cta}`}
            className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <div className="card-3d-blue__inner h-full relative">
              <div className="card-3d-blue__face h-full">
                <div className="flex h-full flex-col items-center text-center" style={{ padding: "28px 20px" }}>
                  {iconSrc ? (
                    <img
                      src={iconSrc}
                      alt={iconAlt}
                      loading="lazy"
                      style={{ width: "100%", maxWidth: "180px", height: "180px", objectFit: "contain", display: "block", margin: "0 auto 12px auto", background: "transparent", backgroundColor: "transparent" }}
                    />
                  ) : null}
                  <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3">
                    {label}
                  </h3>
                  <p className="text-foreground text-[15px] leading-relaxed mb-6">
                    {description}
                  </p>
                  <span className="gold-cta mt-auto" style={{ padding: "10px 18px" }}>
                    {cta}
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
