import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  #roles-section { overflow: visible; }
  #roles-section .r2-wrap { overflow: visible; }
  #roles-section .r2-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  #roles-section .r2-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; overflow: visible; }
  #roles-section .r2-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; overflow: visible; padding-top: 25px; }
  #roles-section .r2-tile { display: block; width: 100%; cursor: pointer; overflow: visible; text-decoration: none; color: inherit; }
  #roles-section .r2-card { width: 100%; height: 400px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease; overflow: visible; }
  #roles-section .r2-tile:hover .r2-card { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  #roles-section .r2-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  #roles-section .r2-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  #roles-section .r2-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  #roles-section .r2-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  #roles-section .r2-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  #roles-section .r2-img { display: block; width: 100%; height: 210px; object-fit: cover; object-position: top center; flex-shrink: 0; }
  #roles-section .r2-body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  #roles-section .r2-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  #roles-section .r2-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  #roles-section .r2-tile:hover .r2-pill, #roles-section .r2-tile:hover .r2-title { opacity: 0; }
  #roles-section .r2-hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; }
  #roles-section .r2-tile:hover .r2-hover { opacity: 1; }
  #roles-section .r2-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  #roles-section .r2-footer { height: 50px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; gap: 8px; justify-content: space-between; }
  #roles-section .r2-label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  #roles-section .r2-arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  #roles-section .r2-tile:hover .r2-arrow { background: #1a3a6b; }
  #roles-section .r2-arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  #roles-section .r2-tile:hover .r2-arrow svg { stroke: #fff; }
  #roles-section .r2-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  #roles-section .r2-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  #roles-section .r2-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  #roles-section .r2-bar-btn:hover { background: #d4b87a; }
  #roles-section .r2-heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  #roles-section .r2-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  #roles-section .r2-h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;

const Tile = ({ pill, title, tagline, provider, imgSrc, href }) => (
  <a className="r2-tile" href={href} aria-label={`Open ${title}`}>
    <div className="r2-card">
      <div className="r2-corner tl" /><div className="r2-corner tr" />
      <div className="r2-corner bl" /><div className="r2-corner br" />
      <img className="r2-img" src={imgSrc} alt={title} loading="lazy" />
      <div className="r2-body">
        <span className="r2-pill">{pill}</span>
        <div className="r2-title">{title}</div>
        <div className="r2-hover">
          <div className="r2-tagline">{tagline}</div>
        </div>
      </div>
      <div className="r2-footer">
        <span className="r2-label">{provider}</span>
        <div className="r2-arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);

const tiles = [
  { pill: "Roles & Responsibilities", title: "Executors", tagline: "Understanding the Executor's Role", imgSrc: "/tiles/set2/executors.webp", href: "/roles/executors" },
  { pill: "Roles & Responsibilities", title: "Trustees", tagline: "Managing Trust Assets & Obligations", imgSrc: "/tiles/set2/trustees.webp", href: "/roles/trustees" },
  { pill: "Estate Planning", title: "Wills", tagline: "What Every Will Should Include", imgSrc: "/tiles/set2/wills.webp", href: "/roles/wills" },
  { pill: "Education", title: "Probate Terms", tagline: "Key Terms Every Family Should Know", imgSrc: "/tiles/set2/probate-terms.webp", href: "/roles/probate-terms" },
  { pill: "Education", title: "The Probate Process", tagline: "Step-by-Step Guide to Probate", imgSrc: "/tiles/set2/the-probate-process.webp", href: "/roles/probate-process" },
  { pill: "Real Estate", title: "Probate Estate Sales", tagline: "Selling an Inherited Property the Right Way", imgSrc: "/tiles/set2/probate-estate-sales.webp", href: "/roles/probate-estate-sales" },
  { pill: "Real Estate", title: "Title & Escrow", tagline: "Protecting Ownership Through Closing", imgSrc: "/tiles/set2/title-escrow.webp", href: "/roles/title-escrow" },
  { pill: "Estate Planning", title: "Power of Attorney", tagline: "Granting Authority to Act on Your Behalf", imgSrc: "/tiles/set2/power-of-attorney.webp", href: "/roles/power-of-attorney" },
];

const RolesAndResponsibilities = () => (
  <div id="roles-section">
    <div className="r2-wrap">
      <style>{styles}</style>
      <div className="r2-section">
        <div className="r2-heading">
          <span className="r2-eyebrow">Washington State</span>
          <h2 className="r2-h2">Roles &amp; Responsibilities</h2>
        </div>
        <div className="r2-grid">
          {tiles.map(t => (
            <Tile key={t.title} pill={t.pill} title={t.title} tagline={t.tagline} provider="Information & Featured Providers" imgSrc={t.imgSrc} href={t.href} />
          ))}
        </div>
        <div className="r2-bar">
          <div className="r2-bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
          <button className="r2-bar-btn">Find Help →</button>
        </div>
      </div>
    </div>
  </div>
);

export default RolesAndResponsibilities;
