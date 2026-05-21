import React from 'react';

const tileData = [
  { pill: "Roles & Responsibilities", title: "Executors", tagline: "Understanding the Executor's Role", img: "/tiles/set2/executors.webp", href: "/executors" },
  { pill: "Roles & Responsibilities", title: "Trustees", tagline: "Managing Trust Assets & Obligations", img: "/tiles/set2/trustees.webp", href: "/trustees" },
  { pill: "Estate Planning", title: "Wills", tagline: "What Every Will Should Include", img: "/tiles/set2/wills.webp", href: "/wills" },
  { pill: "Education", title: "Probate Terms", tagline: "Key Terms Every Family Should Know", img: "/tiles/set2/probate-terms.webp", href: "/terminology" },
  { pill: "Education", title: "The Probate Process", tagline: "Step-by-Step Guide to Probate", img: "/tiles/set2/the-probate-process.webp", href: "/how-the-process-works" },
  { pill: "Real Estate", title: "Probate Estate Sales", tagline: "Selling an Inherited Property the Right Way", img: "/tiles/set2/probate-estate-sales.webp", href: "/probate-estate-sales" },
  { pill: "Real Estate", title: "Title & Escrow", tagline: "Protecting Ownership Through Closing", img: "/tiles/set2/title-escrow.webp", href: "/title-and-escrow" },
  { pill: "Estate Planning", title: "Power of Attorney", tagline: "Granting Authority to Act on Your Behalf", img: "/tiles/set2/power-of-attorney.webp", href: "/power-of-attorney" },
];

const RolesAndResponsibilities = () => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        .r2-section { font-family: 'DM Sans', sans-serif !important; padding: 0 40px 64px; }
        .r2-heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
        .r2-eyebrow { font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
        .r2-h2 { font-family: 'DM Sans', serif !important; font-size: 40px !important; font-weight: 700 !important; color: #12243F; line-height: 1.15; margin: 0; }
        .r2-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
        .r2-card { display: flex; flex-direction: column; width: 100%; height: 380px !important; min-height: 380px !important; max-height: 380px !important; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,0.40); box-shadow: 0 2px 8px rgba(0,0,0,0.08); overflow: hidden; position: relative; transition: box-shadow 0.4s ease, transform 0.4s ease; text-decoration: none; cursor: pointer; }
        .r2-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.10) !important; transform: translateY(-6px); }
        .r2-img { display: block !important; width: 100% !important; height: 215px !important; min-height: 215px !important; max-height: 215px !important; object-fit: contain !important; object-position: center center !important; flex-shrink: 0 !important; background: #FDFAF5; }
        .r2-body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
        .r2-pill { display: block !important; font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.18em; text-transform: uppercase; color: #b89a5a !important; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity 0.15s ease; }
        .r2-title { font-family: 'DM Sans', serif !important; font-weight: 700 !important; font-size: 26px !important; color: #12243F !important; line-height: 1.15; transition: opacity 0.15s ease; }
        .r2-card:hover .r2-pill, .r2-card:hover .r2-title { opacity: 0; }
        .r2-hover { position: absolute; inset: 0; background: rgba(10,20,46,0.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity 0.28s ease 0.1s; z-index: 30; }
        .r2-card:hover .r2-hover { opacity: 1; }
        .r2-tagline { font-family: 'DM Sans', sans-serif !important; font-weight: 600 !important; font-size: 14px !important; color: #FFF !important; text-align: center; line-height: 1.5; }
        .r2-footer { height: 52px !important; flex-shrink: 0 !important; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,0.28); background: #FDFAF5; gap: 8px; justify-content: space-between; }
        .r2-label { font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.04em; text-transform: uppercase; color: #1a3a6b !important; line-height: 1.4; flex: 1; }
        .r2-arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.25s; flex-shrink: 0; }
        .r2-card:hover .r2-arrow { background: #1a3a6b; }
        .r2-arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke 0.25s; }
        .r2-card:hover .r2-arrow svg { stroke: #fff; }
        .r2-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .r2-bar-text { font-family: 'DM Sans', sans-serif !important; font-size: 14px !important; color: #c8d5e8; line-height: 1.6; }
        .r2-bar-btn { font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; }
      `}</style>
      <div className="r2-section">
        <div className="r2-heading">
          <span className="r2-eyebrow">Washington State</span>
          <h2 className="r2-h2">Roles &amp; Responsibilities</h2>
        </div>
        <div className="r2-grid">
          {tileData.map((tile, i) => (
            <a key={tile.title} className="r2-card" href={tile.href}>
              <img className="r2-img" src={tile.img} alt={tile.title} loading="lazy" />
              <div className="r2-body">
                <span className="r2-pill">{tile.pill}</span>
                <div className="r2-title">{tile.title}</div>
                <div className="r2-hover">
                  <div className="r2-tagline">{tile.tagline}</div>
                </div>
              </div>
              <div className="r2-footer">
                <span className="r2-label">Information &amp; Featured Providers</span>
                <div className="r2-arrow">
                  <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="r2-bar">
          <div className="r2-bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
          <button className="r2-bar-btn">Find Help →</button>
        </div>
      </div>
    </>
  );
};

export default RolesAndResponsibilities;
