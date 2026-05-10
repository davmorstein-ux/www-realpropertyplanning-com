import React from 'react';

const sections = [
  {
    title: "Professionals & Services",
    href: "/professionals-services",
    img: "/tiles/nav/professional-services.png",
    blurb: "Connect with vetted attorneys, CPAs, lenders, brokers, and senior care advisors.",
  },
  {
    title: "Roles & Responsibilities",
    href: "/roles",
    img: "/tiles/nav/roles-and-responsibilities.png",
    blurb: "Understand the duties of executors, trustees, and personal representatives.",
  },
  {
    title: "Planning & Next Steps",
    href: "/planning",
    img: "/tiles/nav/planning-and-next-steps.png",
    blurb: "Senior living options, home pricing, and the calm steps to take next.",
  },
];

const HomepageNav = () => {
  return (
    <section className="py-14 md:py-16 bg-cream">
      <div className="container px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-navy leading-tight">
            Advice and Answers
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {sections.map((s) => (
            <a
              key={s.title}
              href={s.href}
              aria-label={`${s.title} — ${s.blurb}`}
              className="card-3d-blue group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="card-3d-blue__inner h-full relative">
                <div className="card-3d-blue__face h-full">
                  <div className="flex h-full flex-col">
                    <div className="relative w-full overflow-hidden bg-transparent flex items-center justify-center" style={{ aspectRatio: "500 / 445" }}>
                      <img
                        src={s.img}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-center text-center px-6 pt-6 pb-7">
                      <h3 className="font-serif text-[24px] md:text-[26px] font-semibold text-navy leading-snug mb-3 transition-colors duration-300 group-hover:text-accent">
                        {s.title}
                      </h3>
                      <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-6">
                        {s.blurb}
                      </p>
                      <span className="gold-cta mt-auto">
                        Explore
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(14, 30, 62, 0.85)" }}
                >
                  <p className="text-white text-[18px] md:text-[20px] font-medium leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {s.blurb}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-[16px] font-bold tracking-wide"
                    style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}
                  >
                    Explore Guidance
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageNav;
