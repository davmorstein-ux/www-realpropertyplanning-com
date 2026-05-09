import React from 'react';

const sections = [
  {
    title: "Professionals & Services",
    href: "/professionals-services",
    img: "/tiles/set1/attorneys.webp",
    blurb: "Connect with vetted attorneys, CPAs, lenders, brokers, and senior care advisors.",
  },
  {
    title: "Roles & Responsibilities",
    href: "/roles",
    img: "/tiles/set2/executors.webp",
    blurb: "Understand the duties of executors, trustees, and personal representatives.",
  },
  {
    title: "Planning & Next Steps",
    href: "/planning",
    img: "/tiles/set3/senior-living-options.webp",
    blurb: "Senior living options, home pricing, and the calm steps to take next.",
  },
];

const HomepageNav = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');

        .hn-section { font-family: 'Montserrat', sans-serif; padding: 56px 20px 64px; max-width: 1300px; margin: 0 auto; }
        .hn-heading { text-align: center; margin-bottom: 36px; }
        .hn-question { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: #8B1A1A; line-height: 1.2; text-align: center; margin: 0 0 12px; }
        .hn-subhead { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 500; color: #1B2B4B; line-height: 1.6; max-width: 640px; margin: 0 auto; }

        .hn-grid { display: grid; grid-template-columns: 1fr; gap: 20px; max-width: 720px; margin: 0 auto; }

        .hn-card { display: flex; flex-direction: column; background: #FDFAF5; border-radius: 16px; border: 2px solid rgba(184,154,90,0.40); box-shadow: 0 8px 24px rgba(18,36,63,0.15); overflow: hidden; text-decoration: none; cursor: pointer; transition: box-shadow 0.3s ease, transform 0.3s ease; color: inherit; }
        .hn-card:hover, .hn-card:focus-visible { box-shadow: 0 18px 40px rgba(18,36,63,0.25); transform: translateY(-4px); border-color: #b89a5a; outline: none; }

        .hn-img { display: block; width: 100%; height: 180px; object-fit: contain; background: #FDFAF5; flex-shrink: 0; padding: 16px; }
        .hn-body { padding: 20px 22px 8px; flex: 1; text-align: center; }
        .hn-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: #8B1A1A; line-height: 1.25; margin: 0 0 10px; }
        .hn-blurb { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 400; color: #1B2B4B; line-height: 1.6; margin: 0; }

        .hn-footer { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 16px 22px 22px; }
        .hn-cta { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 14px 26px; border-radius: 12px; background: linear-gradient(180deg, #d4af6a 0%, #b89a5a 100%); color: #12243F; font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 700; letter-spacing: 0.02em; box-shadow: 0 4px 12px rgba(18,36,63,0.18); transition: transform 0.25s ease, box-shadow 0.25s ease; width: 100%; max-width: 320px; }
        .hn-card:hover .hn-cta { transform: translateX(2px); box-shadow: 0 6px 16px rgba(18,36,63,0.28); }
        .hn-cta svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }

        @media (min-width: 768px) {
          .hn-section { padding: 64px 32px 72px; }
          .hn-question { font-size: 38px; margin-bottom: 14px; }
          .hn-subhead { font-size: 20px; }
          .hn-heading { margin-bottom: 44px; }
          .hn-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: none; }
          .hn-img { height: 220px; }
          .hn-title { font-size: 28px; }
        }
      `}</style>
      <div className="hn-section">
        <div className="hn-heading">
          <h2 className="hn-question">Advice and Answers</h2>
        </div>
        <div className="hn-grid">
          {sections.map((s) => (
            <a key={s.title} className="hn-card" href={s.href} aria-label={`${s.title} — ${s.blurb}`}>
              <img className="hn-img" src={s.img} alt="" aria-hidden="true" loading="lazy" />
              <div className="hn-body">
                <div className="hn-title">{s.title}</div>
                <p className="hn-blurb">{s.blurb}</p>
              </div>
              <div className="hn-footer">
                <span className="hn-cta">
                  Explore
                  <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageNav;
