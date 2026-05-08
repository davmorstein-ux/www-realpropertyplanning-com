import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .p3wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .p3section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .p3grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
  .p3tile { width: 100%; cursor: pointer; text-decoration: none; display: block; }
  .p3card { width: 100%; height: 380px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease, transform .4s ease; overflow: hidden; }
  .p3tile:hover .p3card { box-shadow: 0 16px 40px rgba(18,36,63,.25); transform: translateY(-6px); }
  .p3corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .p3corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p3corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p3corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p3corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p3img { display: block; width: 100%; height: 215px; object-fit: cover; object-position: top center; flex-shrink: 0; transition: transform .4s ease; }
  .p3tile:hover .p3img { transform: scale(1.04); }
  .p3body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .p3pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .p3title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .p3tile:hover .p3pill, .p3tile:hover .p3title { opacity: 0; }
  .p3hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .1s; z-index: 30; }
  .p3tile:hover .p3hover { opacity: 1; }
  .p3tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .p3footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .p3label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .p3arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .p3tile:hover .p3arrow { background: #1a3a6b; }
  .p3arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .p3tile:hover .p3arrow svg { stroke: #fff; }
  .p3bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .p3bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .p3bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .p3bar-btn:hover { background: #d4b87a; }
  .p3heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .p3eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .p3h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const P3Tile = ({ pill, title, tagline, imgSrc, href }) => (
  <a className="p3tile" href={href}>
    <div className="p3card">
      <div className="p3corner tl" /><div className="p3corner tr" />
      <div className="p3corner bl" /><div className="p3corner br" />
      <img className="p3img" src={imgSrc} alt={title} loading="lazy" />
      <div className="p3body">
        <span className="p3pill">{pill}</span>
        <div className="p3title">{title}</div>
        <div className="p3hover">
          <div className="p3tagline">{tagline}</div>
        </div>
      </div>
      <div className="p3footer">
        <span className="p3label">Information & Featured Providers</span>
        <div className="p3arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const PlanningAndNextSteps = () => (
  <div className="p3wrap">
    <style>{styles}</style>
    <div className="p3section">
      <div className="p3heading">
        <span className="p3eyebrow">Washington State</span>
        <h2 className="p3h2">Planning &amp; Next Steps</h2>
      </div>
      <div className="p3grid">
        <P3Tile pill="Senior Living" title="Senior Living Options" tagline="Finding the Right Community for You" imgSrc="/tiles/set3/senior-living-options.webp" href="/senior-living" />
        <P3Tile pill="Real Estate" title="Home Values & Pricing" tagline="Understanding What Your Property Is Worth" imgSrc="/tiles/set3/home-values-pricing.webp" href="/why-valuation-matters" />
        <P3Tile pill="Real Estate" title="Senior Home Sales" tagline="Selling Your Home With Care & Confidence" imgSrc="/tiles/set3/senior-home-sales.webp" href="/sell-house-fund-senior-living" />
        <P3Tile pill="Financial" title="Paying for Senior Living" tagline="Planning & Funding Your Next Chapter" imgSrc="/tiles/set3/paying-for-senior-living.webp" href="/financial-planning" />
        <P3Tile pill="Washington State" title="Service Areas" tagline="Local Expertise Across Washington State" imgSrc="/tiles/set3/service-areas.webp" href="/counties" />
        <P3Tile pill="Education" title="Guides & Resources" tagline="Practical Tools for Every Step of the Way" imgSrc="/tiles/set3/guides-resources.webp" href="/resources" />
        <P3Tile pill="Life Transitions" title="Grey Divorce" tagline="Real Estate & Housing After Divorce" imgSrc="/tiles/set3/grey-divorce.webp" href="/grey-divorce" />
        <P3Tile pill="Senior Planning" title="Medicare Providers" tagline="Coverage Guidance for Seniors & Families" imgSrc="/tiles/set3/medicare-providers.webp" href="/medicare-providers" />
      </div>
      <div className="p3bar">
        <div className="p3bar-text"><strong>Planning ahead?</strong> Connect with experienced professionals across Washington State.</div>
        <button className="p3bar-btn">Get Started →</button>
      </div>
    </div>
  </div>
);

export default PlanningAndNextSteps;
