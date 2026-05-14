import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM Sans:wght@400;500;600;700&display=swap');
  .pawrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .pasection { font-family: 'DM Sans', sans-serif; padding: 0 40px 64px; }
  .pagrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
  .patile { width: 100%; cursor: pointer; text-decoration: none; display: block; }
  .pacard { width: 100%; height: 380px; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease, transform .4s ease; overflow: hidden; }
  .patile:hover .pacard { box-shadow: 0 16px 40px rgba(18,36,63,.25); transform: translateY(-6px); }
  .pacorner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .pacorner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pacorner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .pacorner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .pacorner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .paimgbox { width: 100%; height: 220px; flex-shrink: 0; background: #FDFAF5; display: flex; align-items: flex-start; justify-content: center; overflow: hidden; transition: transform .4s ease; }
  .patile:hover .paimgbox { transform: scale(1.03); }
  .paimg { display: block; width: 100%; height: 220px; object-fit: contain; object-position: top center; }
  .pabody { flex: 1; padding: 12px 10px 0; overflow: hidden; position: relative; }
  .papill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .patitle { font-family: 'DM Sans', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .patile:hover .papill, .patile:hover .patitle { opacity: 0; }
  .pahover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .1s; z-index: 30; }
  .patile:hover .pahover { opacity: 1; }
  .patagline { font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .pafooter { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .palabel { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .paarrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .patile:hover .paarrow { background: #1a3a6b; }
  .paarrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .patile:hover .paarrow svg { stroke: #fff; }
  .pabar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .pabar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .pabar-btn { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .pabar-btn:hover { background: #d4b87a; }
  .paheading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .paeyebrow { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .pah2 { font-family: 'DM Sans', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const PATile = ({ pill, title, tagline, imgSrc, href }) => (
  <a className="patile" href={href}>
    <div className="pacard">
      <div className="pacorner tl" /><div className="pacorner tr" />
      <div className="pacorner bl" /><div className="pacorner br" />
      <div className="paimgbox">
        <img className="paimg" src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="pabody">
        <span className="papill">{pill}</span>
        <div className="patitle">{title}</div>
        <div className="pahover">
          <div className="patagline">{tagline}</div>
        </div>
      </div>
      <div className="pafooter">
        <span className="palabel">Information & Featured Providers</span>
        <div className="paarrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const FeaturedAttorneys = () => (
  <div className="pawrap">
    <style>{styles}</style>
    <div className="pasection">
      <div className="paheading">
        <span className="paeyebrow">Washington State</span>
        <h2 className="pah2">Featured Attorneys</h2>
      </div>
      <div className="pagrid">
        <PATile pill="Legal Services" title="Divorce Attorneys" tagline="Legal Guidance Through Divorce & Property Division" imgSrc="/tiles/attorneys/divorce-attorneys.webp" href="/for-attorneys" />
        <PATile pill="Legal Services" title="Elder Law Attorneys" tagline="Protecting Seniors' Rights & Long-Term Planning" imgSrc="/tiles/attorneys/elder-law-attorneys.webp" href="/for-attorneys" />
        <PATile pill="Legal Services" title="Family Law Attorneys" tagline="Compassionate Legal Support for Families in Transition" imgSrc="/tiles/attorneys/family-law-attorneys.webp" href="/for-attorneys" />
        <PATile pill="Legal Services" title="Probate Attorneys" tagline="Expert Guidance Through the Probate Process" imgSrc="/tiles/attorneys/probate-attorneys.webp" href="/for-attorneys" />
        <PATile pill="Legal Services" title="Real Estate Attorneys" tagline="Protecting Your Interests in Every Property Transaction" imgSrc="/tiles/attorneys/real-estate-attorneys.webp" href="/for-attorneys" />
        <PATile pill="Legal Services" title="Estate Planning Attorneys" tagline="Planning Today for Peace of Mind Tomorrow" imgSrc="/tiles/attorneys/estate-planning-attorneys.webp" href="/for-attorneys" />
      </div>
      <div className="pabar">
        <div className="pabar-text"><strong>Are you an attorney serving estate, probate or senior transition clients?</strong> Join Washington State's most trusted referral network.</div>
        <button className="pabar-btn">Get Featured →</button>
      </div>
    </div>
  </div>
);

export default FeaturedAttorneys;
