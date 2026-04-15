import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoBright from "@/assets/real-property-planning-logo-bright-seattle.webp";

const LINE1 = "Washington's Professional Hub for Seniors, Families & Estate Transitions";
const TYPING_DURATION = 10000; // ms
const FADE_DELAY = 2000; // ms after typing completes

const HomepageHero = () => {
  const [charCount, setCharCount] = useState(0);
  const [showLine2, setShowLine2] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReducedMotion(true);
      setCharCount(LINE1.length);
      setShowLine2(true);
      return;
    }

    const interval = TYPING_DURATION / LINE1.length;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setCharCount(i);
      if (i >= LINE1.length) {
        clearInterval(timer);
        setTimeout(() => setShowLine2(true), FADE_DELAY);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center" style={{ backgroundColor: "#0a1628" }}>
      <div className="flex flex-col items-center px-6 lg:px-8 py-1 lg:py-1 w-full max-w-6xl mx-auto text-center">
        {/* Logo — fixed-height wrapper prevents CLS; image overflows to show full artwork */}
        <div className="w-[588px] md:w-[726px] lg:w-[864px] max-w-[85vw] mb-1 relative" style={{ height: "clamp(259px, 35vw, 415px)" }}>
          <img
            src={logoBright}
            alt="Real Property Planning — probate and estate real estate guidance in Washington State"
            className="w-full h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 1 }}
            width={1600}
            height={1050}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* H1 — typewriter animation */}
        <h1
          className="text-[22px] md:text-[28px] tracking-[0.08em] leading-relaxed mb-2 text-white font-medium pt-6"
          aria-label={LINE1}
        >
          <span aria-hidden="true">
            {LINE1.slice(0, charCount)}
            {!prefersReducedMotion && charCount < LINE1.length && (
              <span className="inline-block w-[2px] h-[1.1em] bg-white/80 align-middle ml-[1px] animate-[blink_0.7s_steps(1)_infinite]" />
            )}
          </span>
        </h1>

        {/* Warm subheading — fades in after typing */}
        <p
          className="text-[20px] md:text-[24px] tracking-[0.04em] leading-relaxed mb-6 pb-6 text-white/80 font-bold"
          style={{
            opacity: showLine2 ? 1 : 0,
            transition: prefersReducedMotion ? "none" : "opacity 3s ease-in-out",
          }}
        >
          Connecting Families and Professionals When It Matters Most
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

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HomepageHero;
