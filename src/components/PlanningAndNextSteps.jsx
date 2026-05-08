import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .p3-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .p3-section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; overflow: visible; }
  .p3-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; padding-top: 25px; overflow: visible; }
  .p3-tile { width: 100%; cursor: pointer; text-decoration: none; display: block; overflow: visible; }
  .p3-card { width: 100%; height: 420px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease; overflow: visible; }
  .p3-tile:hover .p3-card { box-shadow: 0 12px 32px rgba(18,36,63,.22); }
  .p3-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .p3-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p3-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p3-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p3-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p3-imgwrap { width: 100%; height: 220px; flex-shrink: 0; overflow: visible; perspective: 800px; perspective-origin: 50% 100%; }
  .p3-img { display: block; width: 100%; height: 220px; object-fit: contain; object-position: bottom center; transform-origin: bottom center; transform: rotateX(40deg); transition: transform 0.6s cubic-bezier(.33,1,.68,1); }
  .p3-tile:hover .p3-img { transform: rotateX(0deg); }
  .p3-body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .p3-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .p3-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .p3-tile:hover .p3-pill, .p3-tile:hover .p3-title { opacity: 0; }
  .p3-hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; }
  .p3-tile:hover .p3-hover { opacity: 1; }
  .p3-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .p3-footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .p3-label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .p3-arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .p3-tile:hover .p3-arrow { background: #1a3a6b; }
  .p3-arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .p3-tile:hover .p3-arrow svg { stroke: #fff; }
  .p3-bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .p3-bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .p3-bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .p3-bar-btn:hover { background: #d4b87a; }
  .p3-heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .p3-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .p3-h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const P3Tile = ({ pill, title, tagline, provider, imgSrc, href }) => (
  <a className="p3-tile" href={href}>
    <div className="p3-card">
      <div className="p3-corner tl" /><div className="p3-corner tr" />
      <div className="p3-corner bl" /><div className="p3-corner br" />
      <div className="p3-imgwrap">
        <img className="p3-img" src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="p3-body">
        <span className="p3-pill">{pill}</span>
        <div className="p3-title">{title}</div>
        <div className="p3-hover">
          <div className="p3-tagline">{tagline}</div>
        </div>
      </div>
      <div className="p3-footer">
        <span className="p3-label">{provider}</span>
        <div className="p3-arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const tiles = [];

const PlanningAndNextSteps = () => (
  <div className="p3-wrap">
    <style>{styles}</style>
    <div className="p3-section">
      <div className="p3-heading">
        <span className="p3-eyebrow">Washington State</span>
        <h2 className="p3-h2">Planning &amp; Next Steps</h2>
      </div>
      <div className="p3-grid">
        <P3Tile pill="Senior Living" title="Senior Living Options" tagline="Finding the Right Community for You" provider="Information & Featured Providers" imgSrc="/tiles/set3/senior-living-options.webp" href="/senior-living" />
        <P3Tile pill="Real Estate" title="Home Values & Pricing" tagline="Understanding What Your Property Is Worth" provider="Information & Featured Providers" imgSrc="/tiles/set3/home-values-pricing.webp" href="/why-valuation-matters" />
        <P3Tile pill="Real Estate" title="Senior Home Sales" tagline="Selling Your Home With Care & Confidence" provider="Information & Featured Providers" imgSrc="/tiles/set3/senior-home-sales.webp" href="/sell-house-fund-senior-living" />
        <P3Tile pill="Financial" title="Paying for Senior Living" tagline="Planning & Funding Your Next Chapter" provider="Information & Featured Providers" imgSrc="/tiles/set3/paying-for-senior-living.webp" href="/financial-planning" />
        <P3Tile pill="Washington State" title="Service Areas" tagline="Local Expertise Across Washington State" provider="Information & Featured Providers" imgSrc="/tiles/set3/service-areas.webp" href="/counties" />
        <P3Tile pill="Education" title="Guides & Resources" tagline="Practical Tools for Every Step of the Way" provider="Information & Featured Providers" imgSrc="/tiles/set3/guides-resources.webp" href="/resources" />
        <P3Tile pill="Life Transitions" title="Grey Divorce" tagline="Real Estate & Housing After Divorce" provider="Information & Featured Providers" imgSrc="/tiles/set3/grey-divorce.webp" href="/grey-divorce" />
        <P3Tile pill="Senior Planning" title="Medicare Providers" tagline="Coverage Guidance for Seniors & Families" provider="Information & Featured Providers" imgSrc="/tiles/set3/medicare-providers.webp" href="/medicare-providers" />
      </div>
      <div className="p3-bar">
        <div className="p3-bar-text"><strong>Planning ahead?</strong> Connect with experienced professionals across Washington State.</div>
        <button className="p3-bar-btn">Get Started →</button>
      </div>
    </div>
  </div>
);

export default PlanningAndNextSteps;
