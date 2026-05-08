import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .rpp-grid-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .rpp-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .rpp-grid-row { display: grid; gap: 20px; max-width: 1300px; margin: 30px auto 20px; }
  .rpp-row-1 { grid-template-columns: repeat(4, 1fr); }
  .rpp-row-2 { grid-template-columns: repeat(4, 1fr); }
  .rpp-row-2-1 { grid-template-columns: repeat(4, 1fr); }
  .rpp-row-2-2 { grid-template-columns: repeat(4, 1fr); }
  .rpp-row-2-3 { grid-template-columns: repeat(4, 1fr); }
  .rpp-row-2-center { grid-template-columns: repeat(4, 1fr); }
  .rpp-tile { width: 100%; display: flex; flex-direction: column; cursor: pointer; }
  .rpp-brochure { width: 100%; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; overflow: visible; position: relative; transition: box-shadow .4s ease; }
  .rpp-tile:hover .rpp-brochure { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .rpp-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .rpp-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rpp-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rpp-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rpp-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rpp-card-inner { padding: 30px 0 0; overflow: visible; flex: 1; display: flex; flex-direction: column; }
  .rpp-photo-hinge { width: 100%; display: block; line-height: 0; font-size: 0; overflow: visible; }
  .rpp-house-img { display: block; width: 100%; height: 200px; object-fit: cover; object-position: top center; border-radius: 5px 5px 0 0; }
  .rpp-text-area { height: 120px; overflow: hidden; padding: 10px; flex-shrink: 0; position: relative; display: flex; flex-direction: column; justify-content: flex-start; }
  .rpp-static-content { padding: 4px 2px 0; }
  .rpp-category-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; transition: opacity .15s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .rpp-tile-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 24px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .rpp-tile:hover .rpp-category-pill, .rpp-tile:hover .rpp-tile-title { opacity: 0; }
  .rpp-hover-panel { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 14px; gap: 12px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; pointer-events: none; overflow: hidden; }
  .rpp-tile:hover .rpp-hover-panel { opacity: 1; pointer-events: auto; }
  .rpp-overlay-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; width: 100%; }
  .rpp-tile-footer { height: 50px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .rpp-provider-label { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .rpp-arrow-wrap { margin-left: auto; width: 30px; height: 30px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .rpp-tile:hover .rpp-arrow-wrap { background: #1a3a6b; }
  .rpp-arrow-wrap svg { width: 12px; height: 12px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s, transform .25s; }
  .rpp-tile:hover .rpp-arrow-wrap svg { stroke: #fff; transform: translateX(1px); }
  .rpp-provider-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .rpp-provider-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .rpp-provider-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .rpp-provider-bar-btn:hover { background: #d4b87a; }
`;


const RppTile = ({ pill, title, tagline, cta, provider, imgSrc }) => (
  <div className="rpp-tile">
    <div className="rpp-brochure">
      <div className="rpp-corner tl" /><div className="rpp-corner tr" />
      <div className="rpp-corner bl" /><div className="rpp-corner br" />
      <div className="rpp-card-inner">
        <div className="rpp-photo-hinge">
          <img className="rpp-house-img" src={imgSrc} alt={title} loading="lazy" />
        </div>
        <div className="rpp-text-area">
          <div className="rpp-static-content">
            <span className="rpp-category-pill">{pill}</span>
            <div className="rpp-tile-title">{title}</div>
          </div>
          <div className="rpp-hover-panel">
            <div className="rpp-overlay-tagline">{tagline}</div>
            
          </div>
        </div>
      </div>
      <div className="rpp-tile-footer">
        <span className="rpp-provider-label">{provider}</span>
        <div className="rpp-arrow-wrap">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </div>
);

const RolesAndResponsibilities = () => (
  <div className="rpp-grid-wrap">
    <style>{styles}</style>
    <div className="rpp-section">
      <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '48px' }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#b89a5a', display: 'block', marginBottom: '10px' }}>Washington State</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 700, color: '#12243F', lineHeight: 1.15, margin: 0 }}>Roles &amp; Responsibilities</h2>
      </div>
      <div className="rpp-grid-row rpp-row-1">
        <RppTile pill="Roles & Responsibilities" title="Executors" tagline="Understanding the Executor's Role" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/executors.webp" />
        <RppTile pill="Roles & Responsibilities" title="Trustees" tagline="Managing Trust Assets & Obligations" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/trustees.webp" />
        <RppTile pill="Estate Planning" title="Wills" tagline="What Every Will Should Include" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/wills.webp" />
        <RppTile pill="Education" title="Probate Terms" tagline="Key Terms Every Family Should Know" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-terms.webp" />
        <RppTile pill="Education" title="The Probate Process" tagline="Step-by-Step Guide to Probate" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/the-probate-process.webp" />
        <RppTile pill="Real Estate" title="Probate Estate Sales" tagline="Selling an Inherited Property the Right Way" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/probate-estate-sales.webp" />
        <RppTile pill="Real Estate" title="Title & Escrow" tagline="Protecting Ownership Through Closing" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/title-escrow.webp" />
        <RppTile pill="Estate Planning" title="Power of Attorney" tagline="Granting Authority to Act on Your Behalf" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set2/power-of-attorney.webp" />
      </div>
      <div className="rpp-provider-bar">
        <div className="rpp-provider-bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
        <button className="rpp-provider-bar-btn">Find Help →</button>
      </div>
    </div>
  </div>
);

export default RolesAndResponsibilities;
