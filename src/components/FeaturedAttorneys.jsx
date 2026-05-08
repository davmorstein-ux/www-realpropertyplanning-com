import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .pa-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .pa-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; overflow: visible; }
  .pa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; padding-top: 25px; overflow: visible; }
  .pa-tile { width: 100%; cursor: pointer; text-decoration: none; display: block; overflow: visible; }
  .pa-card { width: 100%; height: 420px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease; overflow: visible; }
  .pa-tile:hover .pa-card { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .pa-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .pa-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pa-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .pa-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pa-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .pa-imgwrap { width: 100%; height: 220px; flex-shrink: 0; overflow: visible; perspective: 800px; perspective-origin: 50% 100%; }
  .pa-img { display: block; width: 100%; height: 220px; object-fit: contain; object-position: bottom center; transform-origin: bottom center; transform: rotateX(40deg); transition: transform 0.6s cubic-bezier(.33,1,.68,1); }
  .pa-tile:hover .pa-img { transform: rotateX(0deg); }
  .pa-body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .pa-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .pa-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .pa-tile:hover .pa-pill, .pa-tile:hover .pa-title { opacity: 0; }
  .pa-hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; }
  .pa-tile:hover .pa-hover { opacity: 1; }
  .pa-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .pa-footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .pa-label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .pa-arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .pa-tile:hover .pa-arrow { background: #1a3a6b; }
  .pa-arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .pa-tile:hover .pa-arrow svg { stroke: #fff; }
  .pa-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .pa-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .pa-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .pa-bar-btn:hover { background: #d4b87a; }
  .pa-heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .pa-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .pa-h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;

const Tile = ({ pill, title, tagline, imgSrc, href }) => (
  <a className="pa-tile" href={href}>
    <div className="pa-card">
      <div className="pa-corner tl" /><div className="pa-corner tr" />
      <div className="pa-corner bl" /><div className="pa-corner br" />
      <div className="pa-imgwrap">
        <img className="pa-img" src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="pa-body">
        <span className="pa-pill">{pill}</span>
        <div className="pa-title">{title}</div>
        <div className="pa-hover">
          <div className="pa-tagline">{tagline}</div>
        </div>
      </div>
      <div className="pa-footer">
        <span className="pa-label">Information & Featured Providers</span>
        <div className="pa-arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);

const tiles = [
  { pill: "Legal Services", title: "Divorce Attorneys", tagline: "Legal Guidance Through Divorce & Property Division", imgSrc: "/tiles/attorneys/divorce-attorneys.webp", href: "/for-attorneys" },
  { pill: "Legal Services", title: "Elder Law Attorneys", tagline: "Protecting Seniors' Rights & Long-Term Planning", imgSrc: "/tiles/attorneys/elder-law-attorneys.webp", href: "/for-attorneys" },
  { pill: "Legal Services", title: "Family Law Attorneys", tagline: "Compassionate Legal Support for Families in Transition", imgSrc: "/tiles/attorneys/family-law-attorneys.webp", href: "/for-attorneys" },
  { pill: "Legal Services", title: "Probate Attorneys", tagline: "Expert Guidance Through the Probate Process", imgSrc: "/tiles/attorneys/probate-attorneys.webp", href: "/for-attorneys" },
  { pill: "Legal Services", title: "Real Estate Attorneys", tagline: "Protecting Your Interests in Every Property Transaction", imgSrc: "/tiles/attorneys/real-estate-attorneys.webp", href: "/for-attorneys" },
  { pill: "Legal Services", title: "Estate Planning Attorneys", tagline: "Planning Today for Peace of Mind Tomorrow", imgSrc: "/tiles/attorneys/estate-planning-attorneys.webp", href: "/for-attorneys" },
];

const FeaturedAttorneys = () => (
  <div className="pa-wrap">
    <style>{styles}</style>
    <div className="pa-section">
      <div className="pa-heading">
        <span className="pa-eyebrow">Washington State</span>
        <h2 className="pa-h2">Featured Attorneys</h2>
      </div>
      <div className="pa-grid">
        {tiles.map(t => (
          <Tile key={t.title} {...t} />
        ))}
      </div>
      <div className="pa-bar">
        <div className="pa-bar-text"><strong>Are you an attorney serving estate, probate or senior transition clients?</strong> Join Washington State's most trusted referral network.</div>
        <button className="pa-bar-btn">Get Featured →</button>
      </div>
    </div>
  </div>
);

export default FeaturedAttorneys;
