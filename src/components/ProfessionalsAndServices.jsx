import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  .p1wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .p1section { font-family: 'DM Sans', sans-serif; padding: 0 40px 64px; }
  .p1grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
  .p1tile { width: 100%; cursor: pointer; text-decoration: none; display: block; }
  .p1card { width: 100%; height: 380px; background: #FFFFFF; border-radius: 16px; border: 2px solid #C9A84C; box-shadow: 0 2px 8px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(201,168,76,0.35); display: flex; flex-direction: column; position: relative; transition: all 0.3s ease; overflow: hidden; }
  .p1tile:hover .p1card { box-shadow: 0 4px 12px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(201,168,76,0.5); transform: translateY(-6px); }
  .p1imgbox { width: 100%; height: 220px; flex-shrink: 0; background: #FFFFFF; display: flex; align-items: flex-start; justify-content: center; overflow: hidden; transition: transform .4s ease; }
  .p1tile:hover .p1imgbox { transform: scale(1.03); }
  .p1img { display: block; width: 100%; height: 220px; object-fit: contain; object-position: top center; }
  .p1body { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .p1pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .p1title { font-family: 'DM Sans', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .p1tile:hover .p1pill, .p1tile:hover .p1title { opacity: 0; }
  .p1hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .1s; z-index: 30; }
  .p1tile:hover .p1hover { opacity: 1; }
  .p1tagline { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .p1footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(201,168,76,0.35); background: #FFFFFF; gap: 8px; justify-content: space-between; }
  .p1label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .p1arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .p1tile:hover .p1arrow { background: #1a3a6b; }
  .p1arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .p1tile:hover .p1arrow svg { stroke: #fff; }
  .p1bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .p1bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .p1bar-btn { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .p1bar-btn:hover { background: #d4b87a; }
  .p1heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .p1eyebrow { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .p1h2 { font-family: 'DM Sans', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const P1Tile = ({ pill, title, tagline, imgSrc, href }) => (
  <a className="p1tile" href={href}>
    <div className="p1card">
      <div className="p1imgbox">
        <img className="p1img" src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="p1body">
        <span className="p1pill">{pill}</span>
        <div className="p1title">{title}</div>
        <div className="p1hover">
          <div className="p1tagline">{tagline}</div>
        </div>
      </div>
      <div className="p1footer">
        <span className="p1label">Information & Featured Providers</span>
        <div className="p1arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const ProfessionalsAndServices = () => (
  <div className="p1wrap">
    <style>{styles}</style>
    <div className="p1section">
      <div className="p1heading">
        <h2 className="p1h2">Choose the Professional that Meets Your Needs</h2>
      </div>
      <div className="p1grid">
        <P1Tile pill="Legal Services" title="Attorneys" tagline="Probate & Estate Attorneys" imgSrc="/tiles/set1/attorneys.webp" href="/for-attorneys" />
        <P1Tile pill="Tax & Accounting" title="Certified Public Accountants" tagline="Expert Tax Guidance for Estate Matters" imgSrc="/tiles/set1/certified-public-accountants.webp" href="/for-cpas" />
        <P1Tile pill="Real Estate" title="Real Estate Brokers" tagline="Selling Estate & Senior Properties" imgSrc="/tiles/set1/real-estate-brokers.webp?v=20260602b" href="/realtor" />
        <P1Tile pill="Real Estate" title="Real Estate Appraisers" tagline="Certified Property Valuations" imgSrc="/tiles/set1/real-estate-appraisers.webp" href="/real-estate-appraiser" />
        <P1Tile pill="Financial Services" title="Financial Planners" tagline="Protecting Wealth Through Transitions" imgSrc="/tiles/set1/financial-planners.webp" href="/for-financial-planners" />
        <P1Tile pill="Lending" title="Mortgage Lenders" tagline="Financing Inherited Real Estate" imgSrc="/tiles/set1/mortgage-lenders.webp" href="/lenders-and-financing-specialists" />
        <P1Tile pill="Senior Services" title="Senior Living Advisors" tagline="Expert Guidance for Senior Living" imgSrc="/tiles/set1/senior-living-advisors.webp" href="/senior-living-advisors" />
        <P1Tile pill="Senior Services" title="Senior Move Managers" tagline="Compassionate Moves for Seniors" imgSrc="/tiles/set1/senior-move-managers.webp" href="/senior-move-managers" />
      </div>
      <div className="p1bar">
        <div className="p1bar-text"><strong>Are you a professional serving estate, probate or senior transition clients?</strong> Join Washington State's most trusted referral network.</div>
        <button className="p1bar-btn">Get Featured →</button>
      </div>
    </div>
  </div>
);

export default ProfessionalsAndServices;
