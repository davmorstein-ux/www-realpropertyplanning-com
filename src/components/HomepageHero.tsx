import { Link } from "react-router-dom";
import logoBright from "@/assets/logo-rpp-bright.png";

const HomepageHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[320px] md:min-h-[380px] lg:min-h-[420px]" style={{ backgroundColor: "#0a1628" }}>
      <div className="flex flex-col items-center px-6 lg:px-8 py-6 lg:py-8 w-full max-w-6xl mx-auto text-center">
        {/* Logo — explicit container height prevents CLS from percentage margins */}
        <div className="w-[680px] md:w-[840px] lg:w-[1000px] max-w-[85vw] mb-4 relative" style={{ height: "clamp(132px, 20vw, 200px)" }}>
          <img
            src={logoBright}
            alt="Real Property Planning logo"
            className="w-full h-auto absolute top-1/2 left-0 -translate-y-1/2"
            width={1000}
            height={286}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Tagline */}
        <p className="text-[22px] md:text-[28px] tracking-[0.08em] leading-relaxed mb-8 text-white font-medium">
          Guiding Families Through Life's Most Important Transitions
        </p>

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
