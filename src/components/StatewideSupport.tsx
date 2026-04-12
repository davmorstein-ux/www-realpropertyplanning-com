import { Link } from "react-router-dom";
import mappin3d from "@/assets/real-estate-service-areas-mappin-washington.webp";

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
             loading="lazy"/>
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
              Real Property Planning supports clients throughout Washington State, helping executors, families, attorneys, and fiduciaries work through probate real estate, inherited homes, and major property transitions.
            </p>
            <p>
              While much of the work is concentrated in King, Snohomish, Pierce, and Kitsap Counties, clients are assisted across the entire state when guidance is needed.
            </p>
            <p>
              For situations outside the immediate area, David Stein works through eXp Realty's nationwide and international network to connect clients with trusted professionals — while remaining involved to help ensure consistency, communication, and a smooth overall process.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "King County", href: "/counties/king" },
              { label: "Snohomish County", href: "/counties/snohomish" },
              { label: "Pierce County", href: "/counties/pierce" },
              { label: "Kitsap County", href: "/counties/kitsap" },
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
