import { Link } from "react-router-dom";
import mappin3d from "@/assets/mappin-3d.png";

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
            />
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

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "King County", href: "/counties/king" },
              { label: "Snohomish County", href: "/counties/snohomish" },
              { label: "Pierce County", href: "/counties/pierce" },
              { label: "Kitsap County", href: "/counties/kitsap" },
            ].map((county) => (
              <Link
                key={county.href}
                to={county.href}
                className={`px-4 py-2.5 rounded-[14px] text-base font-medium transition-all duration-200 ease-out ${
                  isDark
                    ? "bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-[rgba(255,255,255,0.05)] text-primary-foreground/90 border border-[rgba(255,255,255,0.15)] shadow-[0_2px_0_rgba(0,0,0,0.2),0_4px_10px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-[2px] hover:border-gold/40 hover:text-gold hover:shadow-[0_4px_0_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.15)]"
                    : "bg-gradient-to-b from-white to-[#f0ede8] border-[1.5px] border-[hsl(42_55%_62%/0.5)] text-foreground/80 shadow-[0_2px_0_rgba(160,150,130,0.25),0_4px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-[2px] hover:border-[hsl(42_60%_52%/0.6)] hover:text-gold hover:shadow-[0_4px_0_rgba(160,150,130,0.25),0_8px_14px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.9)]"
                }`}
              >
                {county.label}
              </Link>
            ))}
            <Link
              to="/counties"
              className={`px-4 py-2.5 rounded-[14px] text-base font-medium transition-all duration-200 ease-out ${
                isDark
                  ? "text-gold/80 hover:text-gold border border-gold/25 shadow-[0_2px_0_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-[2px] hover:border-gold/50 hover:shadow-[0_4px_0_rgba(0,0,0,0.15),0_6px_12px_rgba(0,0,0,0.1)]"
                  : "text-gold-dark hover:text-gold border border-gold/30 bg-gradient-to-b from-white to-[#f0ede8] shadow-[0_2px_0_rgba(160,150,130,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-[2px] hover:border-gold/50 hover:shadow-[0_4px_0_rgba(160,150,130,0.2),0_6px_12px_rgba(0,0,0,0.05)]"
              }`}
            >
              + All Counties →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatewideSupport;
