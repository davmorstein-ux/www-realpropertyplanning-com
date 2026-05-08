import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .pns-grid-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .pns-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .pns-grid-row { display: grid; gap: 20px; max-width: 1300px; margin: 0 auto 20px; grid-template-columns: repeat(4, 1fr); }
  .pns-tile { width: 100%; display: flex; flex-direction: column; cursor: pointer; }
  .pns-brochure { width: 100%; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; overflow: visible; position: relative; transition: box-shadow .4s ease; }
  .pns-tile:hover .pns-brochure { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .pns-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .pns-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pns-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .pns-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pns-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .pns-card-inner { padding: 0; overflow: visible; flex: 1; display: flex; flex-direction: column; }
  .pns-photo-hinge { width: 100%; display: block; line-height: 0; font-size: 0; overflow: visible; }
  .pns-house-img { display: block; width: 100%; height: 220px; object-fit: cover; border-radius: 5px 5px 0 0; }
  .pns-text-area { height: 120px; overflow: hidden; padding: 10px; flex-shrink: 0; position: relative; display: flex; flex-direction: column; justify-content: flex-start; }
  .pns-static-content { padding: 4px 2px 0; }
  .pns-category-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; transition: opacity .15s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .pns-tile-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 24px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .pns-tile:hover .pns-category-pill, .pns-tile:hover .pns-tile-title { opacity: 0; }
  .pns-hover-panel { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 14px; gap: 12px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; pointer-events: none; overflow: hidden; }
  .pns-tile:hover .pns-hover-panel { opacity: 1; pointer-events: auto; }
  .pns-overlay-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; width: 100%; }
  .pns-tile-footer { height: 50px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .pns-provider-label { font-size: 11px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .pns-arrow-wrap { margin-left: auto; width: 30px; height: 30px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .pns-tile:hover .pns-arrow-wrap { background: #1a3a6b; }
  .pns-arrow-wrap svg { width: 12px; height: 12px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s, transform .25s; }
  .pns-tile:hover .pns-arrow-wrap svg { stroke: #fff; transform: translateX(1px); }
  .pns-provider-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .pns-provider-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .pns-provider-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .pns-provider-bar-btn:hover { background: #d4b87a; }
`;

const PnsTile = ({ pill, title, tagline, cta, provider, imgSrc }) => (
  <div className="pns-tile">
    <div className="pns-brochure">
      <div className="pns-corner tl" /><div className="pns-corner tr" />
      <div className="pns-corner bl" /><div className="pns-corner br" />
      <div className="pns-card-inner">
        <div className="pns-photo-hinge">
          <img className="pns-house-img" src={imgSrc} alt={title} loading="lazy" />
        </div>
        <div className="pns-text-area">
          <div className="pns-static-content">
            <span className="pns-category-pill">{pill}</span>
            <div className="pns-tile-title">{title}</div>
          </div>
          <div className="pns-hover-panel">
            <div className="pns-overlay-tagline">{tagline}</div>
            
          </div>
        </div>
      </div>
      <div className="pns-tile-footer">
        <span className="pns-provider-label">{provider}</span>
        <div className="pns-arrow-wrap">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </div>
);

const PlanningAndNextSteps = () => (
  <div className="pns-grid-wrap">
    <style>{styles}</style>
    <div className="pns-section">
      <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '48px' }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#b89a5a', display: 'block', marginBottom: '10px' }}>Washington State</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 700, color: '#12243F', lineHeight: 1.15, margin: 0 }}>Planning &amp; Next Steps</h2>
      </div>
      <div className="pns-grid-row">
        <PnsTile pill="Senior Living" title="Senior Living Options" tagline="Finding the Right Community for You" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/senior-living-options.webp" />
        <PnsTile pill="Real Estate" title="Home Values & Pricing" tagline="Understanding What Your Property Is Worth" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/home-values-pricing.webp" />
        <PnsTile pill="Real Estate" title="Senior Home Sales" tagline="Selling Your Home With Care & Confidence" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/senior-home-sales.webp" />
        <PnsTile pill="Financial" title="Paying for Senior Living" tagline="Planning & Funding Your Next Chapter" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/paying-for-senior-living.webp" />
        <PnsTile pill="Washington State" title="Service Areas" tagline="Local Expertise Across Washington State" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/service-areas.webp" />
        <PnsTile pill="Education" title="Guides & Resources" tagline="Practical Tools for Every Step of the Way" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/guides-resources.webp" />
        <PnsTile pill="Life Transitions" title="Grey Divorce" tagline="Real Estate & Housing After Divorce" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/grey-divorce.webp" />
        <PnsTile pill="Senior Planning" title="Medicare Providers" tagline="Coverage Guidance for Seniors & Families" cta="Learn More →" provider="Information & Featured Providers" imgSrc="/tiles/set3/medicare-providers.webp" />
      </div>
      <div className="pns-provider-bar">
        <div className="pns-provider-bar-text"><strong>Planning ahead?</strong> Connect with experienced professionals across Washington State.</div>
        <button className="pns-provider-bar-btn">Get Started →</button>
      </div>
    </div>
  </div>
);

export default PlanningAndNextSteps;
