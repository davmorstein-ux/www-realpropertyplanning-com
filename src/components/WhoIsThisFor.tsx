import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FamilyIcon = () => (
  <svg viewBox="0 0 96 96" width={120} height={120} aria-hidden="true" className="drop-shadow-lg">
    <defs>
      <linearGradient id="wif-fam-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5C572" />
        <stop offset="100%" stopColor="#C9892B" />
      </linearGradient>
      <linearGradient id="wif-fam-gloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
        <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="wif-fam-shade" cx="50%" cy="100%" r="80%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <filter id="wif-fam-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.28" />
      </filter>
    </defs>
    <g filter="url(#wif-fam-shadow)">
      <rect x="6" y="6" width="84" height="84" rx="20" fill="url(#wif-fam-bg)" />
      <rect x="6" y="56" width="84" height="34" rx="20" fill="url(#wif-fam-shade)" />
      <rect x="10" y="10" width="76" height="32" rx="16" fill="url(#wif-fam-gloss)" />
    </g>
    {/* House */}
    <path d="M48 28 L72 48 L68 48 L68 70 L54 70 L54 58 L42 58 L42 70 L28 70 L28 48 L24 48 Z" fill="#fff" />
    {/* Two adult figures */}
    <circle cx="34" cy="76" r="4" fill="#fff" />
    <circle cx="62" cy="76" r="4" fill="#fff" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 96 96" width={120} height={120} aria-hidden="true" className="drop-shadow-lg">
    <defs>
      <linearGradient id="wif-net-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3E5A8E" />
        <stop offset="100%" stopColor="#1A2B52" />
      </linearGradient>
      <linearGradient id="wif-net-gloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
        <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <radialGradient id="wif-net-shade" cx="50%" cy="100%" r="80%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <filter id="wif-net-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.28" />
      </filter>
    </defs>
    <g filter="url(#wif-net-shadow)">
      <rect x="6" y="6" width="84" height="84" rx="20" fill="url(#wif-net-bg)" />
      <rect x="6" y="56" width="84" height="34" rx="20" fill="url(#wif-net-shade)" />
      <rect x="10" y="10" width="76" height="32" rx="16" fill="url(#wif-net-gloss)" />
    </g>
    {/* Network nodes */}
    <line x1="48" y1="32" x2="26" y2="58" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <line x1="48" y1="32" x2="70" y2="58" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <line x1="26" y1="58" x2="70" y2="58" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <line x1="48" y1="32" x2="48" y2="72" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    <circle cx="48" cy="32" r="7" fill="#F5C572" stroke="#fff" strokeWidth="2" />
    <circle cx="26" cy="58" r="6" fill="#fff" />
    <circle cx="70" cy="58" r="6" fill="#fff" />
    <circle cx="48" cy="72" r="6" fill="#fff" />
  </svg>
);

const WhoIsThisFor = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-semibold">
            Who Is This For?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Tile 1: Families & Individuals */}
          <div className="card-3d p-8 md:p-10 lg:p-12 flex flex-col items-center text-center bg-white">
            <div className="mb-6 flex justify-center">
              <FamilyIcon />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-4">
              Families &amp; Individuals
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-sm">
              Help with senior transitions, housing, and next steps
            </p>
            <Link to="/senior-transitions" className="mt-auto">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto rounded-lg text-base md:text-lg">
                Start Here
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Tile 2: Professionals */}
          <div className="card-3d p-8 md:p-10 lg:p-12 flex flex-col items-center text-center bg-white">
            <div className="mb-6 flex justify-center">
              <NetworkIcon />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-4">
              Professionals
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-sm">
              Connect, collaborate, and support your clients
            </p>
            <Link to="/professional-network" className="mt-auto">
              <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto rounded-lg text-base md:text-lg">
                Explore Network
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
