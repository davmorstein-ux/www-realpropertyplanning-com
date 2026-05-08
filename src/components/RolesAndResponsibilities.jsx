import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .rr-grid-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .rr-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .rr-grid-row { display: grid; gap: 20px; max-width: 1300px; margin: 30px auto 20px; grid-template-columns: repeat(4, 1fr); }
  .rr-tile { width: 100%; display: flex; flex-direction: column; cursor: pointer; }
  .rr-brochure { width: 100%; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; overflow: visible; position: relative; transition: box-shadow .4s ease; }
  .rr-tile:hover .rr-brochure { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .rr-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .rr-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rr-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rr-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rr-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rr-card-inner { padding: 30px 0 0; overflow: visible; flex: 1; display: flex; flex-direction: column; }
  .rr-photo-hinge { width: 100%; display: block; line-height: 0; font-size: 0; overflow: visible; }
  .rr-house-img { display: block; width: 100%; height: 180px; object-fit: cover; border-radius: 5px 5px 0 0; }
  .rr-text-area { height: 140px; overflow: hidden; padding: 10px; flex-shrink: 0; position: relative; display: flex; flex-direction: column; justify-content: flex-start; }
  .rr-static-content { padding: 4px 2px 0; }
  .rr-category-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; transition: opacity .15s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .rr-tile-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 24px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .rr-tile:hover .rr-category-pill, .rr-tile:hover .rr-tile-title { opacity: 0; }
  .rr-hover-panel { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 14px; gap: 12px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; pointer-events: none; overflow: hidden; }
  .rr-tile:hover .rr-hover-panel { opacity: 1; pointer-events: auto; }
  .rr-overlay-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; width: 100%; }
  .rr-tile-footer { height: 50px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .rr-provider-label { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .rr-arrow-wrap { margin-left: auto; width: 30px; height: 30px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .rr-tile:hover .rr-arrow-wrap { background: #1a3a6b; }
  .rr-arrow-wrap svg { width: 12px; height: 12px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s, transform .25s; }
  .rr-tile:hover .rr-arrow-wrap svg { stroke: #fff; transform: translateX(1px); }
  .rr-provider-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .rr-provider-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .rr-provider-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .rr-provider-bar-btn:hover { background: #d4b87a; }
`;

const RrTile = ({ pill, title, tagline, cta, provider, imgSrc }) => (
  <div className="rr-tile">
    <div className="rr-brochure">
      <div className="rr-corner tl" /><div className="rr-corner tr" />
      <div className="rr-corner bl" /><div className="rr-corner br" />
      <div className="rr-card-inner">
        <div className="rr-photo-hinge">
          <img className="rr-house-img" src={imgSrc} alt={title} loading="lazy" />
        </div>
        <div className="rr-text-area">
          <div className="rr-static-content">
            <span className="rr-category-pill">{pill}</span>
            <div className="rr-tile-title">{title}</div>
          </div>
          <div className="rr-hover-panel">
            <div className="rr-overlay-tagline">{tagline}</div>
            
          </div>
        </div>
      </div>
      <div className="rr-tile-footer">
        <span className="rr-provider-label">{provider}</span>
        <div className="rr-arrow-wrap">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </div>
);

const RolesAndResponsibilities = () => (
  <div className="rr-grid-wrap">
    <style>{styles}</style>
    <div className="rr-section">
      <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '48px' }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#b89a5a', display: 'block', marginBottom: '10px' }}>Washington State</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 700, color: '#12243F', lineHeight: 1.15, margin: 0 }}>Roles &amp; Responsibilities</h2>
      </div>
      <div className="rr-grid-row">
        <RrTile pill="Roles & Responsibilities" title="Executors" tagline="Understanding the Executor's Role" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/executors.webp" />
        <RrTile pill="Roles & Responsibilities" title="Trustees" tagline="Managing Trust Assets & Obligations" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/trustees.webp" />
        <RrTile pill="Estate Planning" title="Wills" tagline="What Every Will Should Include" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/wills.webp" />
        <RrTile pill="Education" title="Probate Terms" tagline="Key Terms Every Family Should Know" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-terms.webp" />
        <RrTile pill="Education" title="The Probate Process" tagline="Step-by-Step Guide to Probate" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/the-probate-process.webp" />
        <RrTile pill="Real Estate" title="Probate Estate Sales" tagline="Selling an Inherited Property the Right Way" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-estate-sales.webp" />
        <RrTile pill="Real Estate" title="Title & Escrow" tagline="Protecting Ownership Through Closing" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/title-escrow.webp" />
        <RrTile pill="Estate Planning" title="Power of Attorney" tagline="Granting Authority to Act on Your Behalf" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/power-of-attorney.webp" />
      </div>
      <div className="rr-provider-bar">
        <div className="rr-provider-bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
        <button className="rr-provider-bar-btn">Find Help →</button>
      </div>
    </div>
  </div>
);

export default RolesAndResponsibilities;
