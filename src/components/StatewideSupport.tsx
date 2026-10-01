import { Link } from "react-router-dom";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";

interface StatewideSupportProps {
  background?: "bg-background" | "bg-secondary" | "bg-cream" | "bg-primary";
}

const StatewideSupport = ({ background = "bg-secondary" }: StatewideSupportProps) => {
  const isDark = background === "bg-primary";

  return (
    <section className={`py-16 lg:py-24 ${background}`}>
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={mappin3d}
              alt=""
              aria-hidden="true"
              className="w-12 h-12 object-contain shrink-0"
             loading="lazy" sizes="(max-width: 768px) 90px, 90px" decoding="async" width={1024} height={1024} />
            <div>
              <h2
                className={`font-serif text-3xl md:text-4xl font-semibold ${
                  isDark ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                Serving Clients Throughout Washington State
              </h2>
            </div>
          </div>

          <p
            className={`text-sm font-semibold uppercase tracking-widest mb-8 ${
              isDark ? "text-gold/70" : "text-gold-dark"
            }`}
          >
            Local Expertise. Statewide Support.
          </p>

          <div
            className={`text-[17px] leading-[1.85] space-y-5 ${
              isDark ? "text-primary-foreground/80" : "text-foreground/85"
            }`}
          >
            <p>
              Real Property Planning is a free resource throughout Washington State for executors, families, attorneys, and fiduciaries working through probate real estate, inherited homes, and major property transitions.
            </p>
            <p>
              The guides here cover all of Washington, and the featured broker works statewide.
            </p>
            <p>
              For situations outside Washington, {FEATURED_BROKER.role} can connect families with a licensed broker anywhere in the country through {FEATURED_BROKER.brokerage}'s nationwide network.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "King County", href: "/king-county" },
              { label: "Snohomish County", href: "/snohomish-county" },
              { label: "Pierce County", href: "/pierce-county" },
              { label: "Kitsap County", href: "/kitsap-county" },
            ].map((county) => (
              <Link
                key={county.href}
                to={county.href}
                className="premium-pill-3d group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span className="premium-pill-3d__face text-base group-hover:text-foreground">
                  {county.label}
                </span>
              </Link>
            ))}
            <Link
              to="/counties"
              className="premium-pill-3d group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="premium-pill-3d__face text-base text-accent group-hover:text-foreground">
                + All Counties →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatewideSupport;
