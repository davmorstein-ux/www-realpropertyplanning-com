import { Link } from "react-router-dom";
import logoBright from "@/assets/real-property-planning-logo-bright-seattle.webp";

const HomepageHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center" style={{ backgroundColor: "#0a1628" }}>
      <div className="flex flex-col items-center px-6 lg:px-8 py-1 lg:py-1 w-full max-w-6xl mx-auto text-center">
        {/* Logo — fixed-height wrapper prevents CLS; image overflows to show full artwork */}
        <div className="w-[588px] md:w-[726px] lg:w-[864px] max-w-[85vw] mb-1 relative" style={{ height: "clamp(259px, 35vw, 415px)" }}>
          {/* SVG overlay behind the logo */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none", zIndex: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="100%" height="100%" fill="transparent" />
          </svg>
          <img
            src={logoBright}
            alt="Real Property Planning logo"
            className="w-full h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 1 }}
            width={1600}
            height={1050}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Tagline — serves as the page H1 */}
        <h1 className="text-[22px] md:text-[28px] tracking-[0.08em] leading-relaxed mb-8 text-white font-medium">
          Guiding Families Through Life's Most Important Transitions
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <a href="tel:2069003015" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg font-bold tracking-wide shadow-lg hover:brightness-110 transition-all min-w-[240px]"
              style={{ height: "54px", fontSize: "18px", padding: "0 2rem", backgroundColor: "#2563eb", color: "#ffffff" }}>
              Call (206) 900-3015
            </button>
          </a>
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-lg font-bold tracking-wide hover:bg-white/10 transition-all min-w-[240px]"
              style={{ height: "54px", fontSize: "18px", padding: "0 2rem", backgroundColor: "transparent", color: "#ffffff", border: "2px solid rgba(255,255,255,0.5)" }}>
              Send a Message
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
