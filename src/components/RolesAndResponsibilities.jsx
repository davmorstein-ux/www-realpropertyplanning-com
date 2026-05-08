import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .p2-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .p2-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .p2-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; padding-top: 10px; }
  .p2-tile { width: 100%; cursor: pointer; text-decoration: none; display: block; }
  .p2-card { width: 100%; height: 420px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease; overflow: visible; }
  .p2-tile:hover .p2-card { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .p2-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .p2-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p2-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p2-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p2-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p2-imgwrap { width: 100%; height: 220px; flex-shrink: 0; overflow: visible; perspective: 800px; perspective-origin: 50% 100%; }
  .p2-img { display: block; width: 100%; height: 220px; object-fit: contain; object-position: bottom center; transform-origin: bottom center; transform: rotateX(40deg); transition: transform 0.6s cubic-bezier(.33,1,.68,1); }
  .p2-tile:hover .p2-img { transform: rotateX(0deg); }
  .p2-body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .p2-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .p2-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .p2-tile:hover .p2-pill, .p2-tile:hover .p2-title { opacity: 0; }
  .p2-hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; }
  .p2-tile:hover .p2-hover { opacity: 1; }
  .p2-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .p2-footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .p2-label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .p2-arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .p2-tile:hover .p2-arrow { background: #1a3a6b; }
  .p2-arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .p2-tile:hover .p2-arrow svg { stroke: #fff; }
  .p2-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .p2-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .p2-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .p2-bar-btn:hover { background: #d4b87a; }
  .p2-heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .p2-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .p2-h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const P2Tile = ({ pill, title, tagline, provider, imgSrc, href }) => (
  <a className="p2-tile" href={href}>
    <div className="p2-card">
      <div className="p2-corner tl" /><div className="p2-corner tr" />
      <div className="p2-corner bl" /><div className="p2-corner br" />
      <div className="p2-imgwrap">
        <img className="p2-img" src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="p2-body">
        <span className="p2-pill">{pill}</span>
        <div className="p2-title">{title}</div>
        <div className="p2-hover">
          <div className="p2-tagline">{tagline}</div>
        </div>
      </div>
      <div className="p2-footer">
        <span className="p2-label">{provider}</span>
        <div className="p2-arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const tiles = [];

const RolesAndResponsibilities = () => (
  <div className="p2-wrap">
    <style>{styles}</style>
    <div className="p2-section">
      <div className="p2-heading">
        <span className="p2-eyebrow">Washington State</span>
        <h2 className="p2-h2">Roles &amp; Responsibilities</h2>
      </div>
      <div className="p2-grid">
        <P2Tile pill="Roles & Responsibilities" title="Executors" tagline="Understanding the Executor's Role" provider="Information & Featured Providers" imgSrc="/tiles/set2/executors.webp" href="/executors" />
        <P2Tile pill="Roles & Responsibilities" title="Trustees" tagline="Managing Trust Assets & Obligations" provider="Information & Featured Providers" imgSrc="/tiles/set2/trustees.webp" href="/trustees" />
        <P2Tile pill="Estate Planning" title="Wills" tagline="What Every Will Should Include" provider="Information & Featured Providers" imgSrc="/tiles/set2/wills.webp" href="/wills" />
        <P2Tile pill="Education" title="Probate Terms" tagline="Key Terms Every Family Should Know" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-terms.webp" href="/terminology" />
        <P2Tile pill="Education" title="The Probate Process" tagline="Step-by-Step Guide to Probate" provider="Information & Featured Providers" imgSrc="/tiles/set2/the-probate-process.webp" href="/how-the-process-works" />
        <P2Tile pill="Real Estate" title="Probate Estate Sales" tagline="Selling an Inherited Property the Right Way" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-estate-sales.webp" href="/probate-estate-sales" />
        <P2Tile pill="Real Estate" title="Title & Escrow" tagline="Protecting Ownership Through Closing" provider="Information & Featured Providers" imgSrc="/tiles/set2/title-escrow.webp" href="/title-and-escrow" />
        <P2Tile pill="Estate Planning" title="Power of Attorney" tagline="Granting Authority to Act on Your Behalf" provider="Information & Featured Providers" imgSrc="/tiles/set2/power-of-attorney.webp" href="/power-of-attorney" />
      </div>
      <div className="p2-bar">
        <div className="p2-bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
        <button className="p2-bar-btn">Find Help →</button>
      </div>
    </div>
  </div>
);

export default RolesAndResponsibilities;
