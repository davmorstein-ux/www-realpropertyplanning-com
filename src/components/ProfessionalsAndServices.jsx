import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .rpp-grid-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .rpp-section { font-family: 'Montserrat', sans-serif; padding: 0 28px 64px; }
  .rpp-grid-row { display: grid; gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
  .rpp-row-1 { grid-template-columns: repeat(5, 1fr); }
  .rpp-row-2 { grid-template-columns: repeat(5, 1fr); }
  .rpp-row-2-1 .rpp-tile:nth-child(1) { grid-column: 3; }
  .rpp-row-2-2 .rpp-tile:nth-child(1) { grid-column: 2; }
  .rpp-row-2-3 .rpp-tile:nth-child(1) { grid-column: 2; }
  .rpp-row-2-center { grid-template-columns: repeat(5, 1fr); }
  .rpp-row-2-center .rpp-tile:nth-child(1) { grid-column: 2; }
  .rpp-row-2-center .rpp-tile:nth-child(2) { grid-column: 3; }
  .rpp-row-2-center .rpp-tile:nth-child(3) { grid-column: 4; }
  .rpp-tile { perspective: 900px; perspective-origin: 50% 20%; cursor: pointer; width: 100%; }
  .rpp-brochure { width: 100%; height: 380px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); position: relative; transform-origin: bottom center; transform-style: preserve-3d; box-shadow: 0 4px 0 1px rgba(155,132,78,.20), 0 8px 0 1px rgba(130,110,60,.11), 0 20px 44px rgba(18,36,63,.22); display: flex; flex-direction: column; transition: box-shadow .4s ease; }
  .rpp-tile:hover .rpp-brochure { box-shadow: 0 4px 0 1px rgba(155,132,78,.20), 0 8px 0 1px rgba(130,110,60,.11), 0 32px 64px rgba(18,36,63,.30); }
  .rpp-brochure::before { content: ''; position: absolute; inset: 0; background: #F0EAE0; border-radius: 5px; transform: translateY(5px) translateZ(-4px); z-index: -1; }
  .rpp-brochure::after { content: ''; position: absolute; inset: 0; background: #E5DED3; border-radius: 5px; transform: translateY(10px) translateZ(-8px); z-index: -2; }
  .rpp-corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .rpp-corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rpp-corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rpp-corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .rpp-corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .rpp-card-inner { padding: 10px 8px 0; perspective: 700px; perspective-origin: 50% 100%; transform-style: preserve-3d; overflow: visible; flex: 1; display: flex; flex-direction: column; }
  .rpp-photo-hinge { width: 100%; transform-origin: bottom center; transform: rotateX(0deg); transition: transform .72s cubic-bezier(.33,1,.68,1); backface-visibility: hidden; display: block; line-height: 0; font-size: 0; overflow: visible; }
  .rpp-tile:hover .rpp-photo-hinge { transform: rotateX(-33deg); }
  .rpp-house-img { display: block; width: 100%; height: auto; aspect-ratio: 560/420; object-fit: cover; margin: 0; filter: drop-shadow(0 2px 8px rgba(18,36,63,.16)); transition: filter .5s ease; vertical-align: bottom; }
  .rpp-tile:hover .rpp-house-img { filter: drop-shadow(-3px 14px 28px rgba(18,36,63,.40)); }
  .rpp-text-area { position: relative; margin-top: 0; padding-top: 0; height: 130px; flex-shrink: 0; display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
  .rpp-static-content { padding: 12px 10px 0; }
  .rpp-category-pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; transition: opacity .15s ease; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .rpp-tile-title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 24px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .rpp-tile:hover .rpp-category-pill, .rpp-tile:hover .rpp-tile-title { opacity: 0; }
  .rpp-hover-panel { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 14px; gap: 12px; opacity: 0; transition: opacity .28s ease .15s; z-index: 30; pointer-events: none; overflow: hidden; }
  .rpp-tile:hover .rpp-hover-panel { opacity: 1; pointer-events: auto; }
  .rpp-overlay-tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; width: 100%; }
  .rpp-overlay-cta { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .10em; text-transform: uppercase; color: #d4b87a; border-bottom: 1px solid rgba(212,184,122,.6); padding-bottom: 2px; white-space: nowrap; text-decoration: none; transition: color .2s, border-color .2s; flex-shrink: 0; }
  .rpp-overlay-cta:hover { color: #fff; border-color: rgba(255,255,255,.7); }
  .rpp-tile-footer { display: flex; align-items: center; justify-content: space-between; padding: 11px 12px 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; position: relative; z-index: 40; flex-shrink: 0; min-height: 54px; }
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
            <a href="#" className="rpp-overlay-cta">{cta}</a>
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

const ProfessionalsAndServices = () => (
  <div className="rpp-grid-wrap">
    <style>{styles}</style>
    <div className="rpp-section">
      <div className="rpp-grid-row rpp-row-1">
        <RppTile
          pill="Legal Services"
          title="Attorneys"
          tagline="Probate & Estate Attorneys"
          cta="View Featured Attorneys →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/attorneys.webp"
        />
        <RppTile
          pill="Tax & Accounting"
          title="Certified Public Accountants"
          tagline="Expert Tax Guidance for Estate Matters"
          cta="View Featured CPAs →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/certified-public-accountants.webp"
        />
        <RppTile
          pill="Real Estate"
          title="Real Estate Brokers"
          tagline="Selling Estate & Senior Properties"
          cta="View Featured Brokers →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/real-estate-brokers.webp"
        />
        <RppTile
          pill="Real Estate"
          title="Real Estate Appraisers"
          tagline="Certified Property Valuations"
          cta="View Featured Appraisers →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/real-estate-appraisers.webp"
        />
        <RppTile
          pill="Financial Services"
          title="Financial Planners"
          tagline="Protecting Wealth Through Transitions"
          cta="View Featured Planners →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/financial-planners.webp"
        />
      </div>
      <div className="rpp-grid-row rpp-row-2 rpp-row-2-center">
        <RppTile
          pill="Lending"
          title="Mortgage Lenders"
          tagline="Financing Inherited Real Estate"
          cta="View Featured Lenders →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/mortgage-lenders.webp"
        />
        <RppTile
          pill="Senior Services"
          title="Senior Living Advisors"
          tagline="Expert Guidance for Senior Living"
          cta="View Featured Advisors →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/senior-living-advisors.webp"
        />
        <RppTile
          pill="Senior Services"
          title="Senior Move Managers"
          tagline="Compassionate Moves for Seniors"
          cta="View Featured Managers →"
          provider="Information & Featured Providers"
          imgSrc="/tiles/set1/senior-move-managers.webp"
        />
      </div>
      <div className="rpp-provider-bar">
        <div className="rpp-provider-bar-text"><strong>Are you a professional serving estate, probate or senior transition clients?</strong> Join Washington State's most trusted referral network.</div>
        <button className="rpp-provider-bar-btn">Get Featured →</button>
      </div>
    </div>
  </div>
);

export default ProfessionalsAndServices;
