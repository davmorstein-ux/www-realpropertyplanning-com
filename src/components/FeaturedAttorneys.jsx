import React from 'react';
import { Link } from 'react-router-dom';

const TILES = [
  { pill: "Legal Services", title: "Divorce Attorneys", tagline: "Legal Guidance Through Divorce & Property Division", imgSrc: "/tiles/attorneys/divorce-attorneys.webp", href: "/for-attorneys/divorce-attorneys" },
  { pill: "Legal Services", title: "Elder Law Attorneys", tagline: "Protecting Seniors' Rights & Long-Term Planning", imgSrc: "/tiles/attorneys/elder-law-attorneys.webp", href: "/for-attorneys/elder-law-attorneys" },
  { pill: "Legal Services", title: "Family Law Attorneys", tagline: "Compassionate Legal Support for Families in Transition", imgSrc: "/tiles/attorneys/family-law-attorneys.webp", href: "/for-attorneys/family-law-attorneys" },
  { pill: "Legal Services", title: "Probate Attorneys", tagline: "Expert Guidance Through the Probate Process", imgSrc: "/tiles/attorneys/probate-attorneys.webp", href: "/for-attorneys/probate-attorneys" },
  { pill: "Legal Services", title: "Real Estate Attorneys", tagline: "Protecting Your Interests in Every Property Transaction", imgSrc: "/tiles/attorneys/real-estate-attorneys.webp", href: "/for-attorneys/real-estate-attorneys" },
  { pill: "Legal Services", title: "Estate Planning Attorneys", tagline: "Planning Today for Peace of Mind Tomorrow", imgSrc: "/tiles/attorneys/estate-planning-attorneys.webp", href: "/for-attorneys/estate-planning-attorneys" },
];

const FeaturedAttorneys = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="block mb-2 text-[13px] font-bold tracking-[0.18em] uppercase text-gold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Washington State
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sans" style={{ color: "#12243F" }}>
            Featured Attorneys
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {TILES.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              aria-label={`${s.title} — ${s.tagline}`}
              className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="card-3d-blue__inner h-full relative">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col">
                    <div className="relative w-full overflow-hidden bg-transparent flex items-center justify-center" style={{ aspectRatio: "500 / 312" }}>
                      <img
                        src={s.imgSrc}
                        alt={s.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col items-center text-center overflow-hidden" style={{ padding: "16px" }}>
                      <span
                        className="block mb-2 text-[11px] font-bold tracking-[0.18em] uppercase transition-opacity duration-200 group-hover:opacity-0"
                        style={{ color: "#b89a5a", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {s.pill}
                      </span>
                      <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3 flex items-start justify-center transition-opacity duration-200 group-hover:opacity-0">
                        {s.title}
                      </h3>
                      <span className="gold-cta mt-auto transition-opacity duration-200 group-hover:opacity-0" style={{ padding: "10px 16px" }}>
                        Learn More
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: "rgba(10, 20, 46, 0.97)",
                          zIndex: 10,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "1.25rem 1.5rem",
                          transition: "opacity 0.28s ease 0.1s",
                        }}
                      >
                        <h3 className="font-serif text-white text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                          {s.title}
                        </h3>
                        <p className="text-white/90 text-[14px] leading-relaxed mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {s.tagline}
                        </p>
                        <span
                          className="inline-flex items-center gap-2 text-[15px] font-bold tracking-wide"
                          style={{ color: "#C9A84C", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Learn More
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAttorneys;
