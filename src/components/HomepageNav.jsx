import React from 'react';

const sections = [
  {
    title: "Professionals & Services",
    href: "/professionals-services",
    img: "/tiles/set1/attorneys.webp",
    items: [
      "Attorneys", "Certified Public Accountants", "Real Estate Brokers",
      "Real Estate Appraisers", "Financial Planners", "Mortgage Lenders",
      "Senior Living Advisors", "Senior Move Managers"
    ]
  },
  {
    title: "Roles & Responsibilities",
    href: "/roles",
    img: "/tiles/set2/executors.webp",
    items: [
      "Executors", "Trustees", "Wills", "Probate Terms",
      "The Probate Process", "Probate Estate Sales", "Title & Escrow", "Power of Attorney"
    ]
  },
  {
    title: "Planning & Next Steps",
    href: "/planning",
    img: "/tiles/set3/senior-living-options.webp",
    items: [
      "Senior Living Options", "Home Values & Pricing", "Senior Home Sales",
      "Paying for Senior Living", "Service Areas", "Guides & Resources",
      "Grey Divorce", "Medicare Providers"
    ]
  },
];

const HomepageNav = () => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        .hn-section { font-family: 'Montserrat', sans-serif; padding: 48px 40px 64px; max-width: 1300px; margin: 0 auto; }
        .hn-heading { text-align: center; margin-bottom: 48px; }
        .hn-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 14px; }
        .hn-h2 { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0 0 16px; }
        .hn-sub { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 500; color: #4a5568; line-height: 1.7; max-width: 760px; margin: 0 auto 32px; }
        .hn-question { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 700; color: #8B1A1A; text-align: center; margin: 0 0 40px; }
        .hn-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .hn-card { display: flex; flex-direction: column; background: #FDFAF5; border-radius: 8px; border: 1px solid rgba(184,154,90,0.40); box-shadow: 0 8px 24px rgba(18,36,63,0.15); overflow: hidden; text-decoration: none; cursor: pointer; transition: box-shadow 0.4s ease, transform 0.4s ease; }
        .hn-card:hover { box-shadow: 0 20px 48px rgba(18,36,63,0.25); transform: translateY(-8px); }
        .hn-img { display: block; width: 100%; height: 260px; object-fit: contain; object-position: center center; background: #FDFAF5; flex-shrink: 0; }
        .hn-body { padding: 24px 28px; flex: 1; }
        .hn-title { font-family: 'Cormorant Garamond', serif; font-size: 34px; font-weight: 700; color: #8B1A1A; line-height: 1.2; margin-bottom: 16px; text-align: center; }
        .hn-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 12px; }
        .hn-item { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 500; color: #4a5568; line-height: 1.4; padding-left: 12px; position: relative; }
        .hn-item::before { content: '›'; position: absolute; left: 0; color: #b89a5a; font-weight: 700; }
        .hn-footer { display: flex; align-items: center; justify-content: space-between; padding: 16px 28px; border-top: 1.5px solid rgba(184,154,90,0.28); background: #FDFAF5; }
        .hn-cta { font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #1a3a6b; }
        .hn-arrow { width: 32px; height: 32px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.25s; flex-shrink: 0; }
        .hn-card:hover .hn-arrow { background: #1a3a6b; }
        .hn-arrow svg { width: 13px; height: 13px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.25s; }
        .hn-card:hover .hn-arrow svg { stroke: #fff; }
      `}</style>
      <div className="hn-section">
        <div className="hn-heading">
          <h2 className="hn-h2">Welcome to Real Property Planning</h2>
          <span className="hn-eyebrow">A free-to-use hub · Built for families · Trusted by professionals</span>
          <p className="hn-sub">Connecting families, seniors, and professionals with the right people and resources.</p>
          <div className="hn-question">What services are you looking for?</div>
        </div>
        <div className="hn-grid">
          {sections.map((s, i) => (
            <a key={s.title} className="hn-card" href={s.href}>
              <img className="hn-img" src={s.img} alt={s.title} loading="lazy" />
              <div className="hn-body">
                <div className="hn-title">{s.title}</div>
                <ul className="hn-list">
                  {s.items.map(item => (
                    <li key={item} className="hn-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="hn-footer">
                <span className="hn-cta">View All {s.title}</span>
                <div className="hn-arrow">
                  <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageNav;
