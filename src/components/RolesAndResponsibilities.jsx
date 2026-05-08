import React from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');
  .p2wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .p2section { font-family: 'Montserrat', sans-serif; padding: 0 40px 64px; }
  .p2grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 0 auto 20px; }
  .p2tile { width: 100%; cursor: pointer; text-decoration: none; display: block; }
  .p2card { width: 100%; background: #FDFAF5; border-radius: 5px; border: 1px solid rgba(184,154,90,.40); box-shadow: 0 8px 24px rgba(18,36,63,.15); display: flex; flex-direction: column; position: relative; transition: box-shadow .4s ease, transform .4s ease; }
  .p2tile:hover .p2card { box-shadow: 0 16px 40px rgba(18,36,63,.25); transform: translateY(-6px); }
  .p2corner { position: absolute; width: 14px; height: 14px; pointer-events: none; z-index: 50; }
  .p2corner.tl { top: 8px; left: 8px; border-top: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p2corner.tr { top: 8px; right: 8px; border-top: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p2corner.bl { bottom: 8px; left: 8px; border-bottom: 1.5px solid #b89a5a; border-left: 1.5px solid #b89a5a; }
  .p2corner.br { bottom: 8px; right: 8px; border-bottom: 1.5px solid #b89a5a; border-right: 1.5px solid #b89a5a; }
  .p2img { width: 100%; height: auto; object-fit: contain; object-position: top center; display: block; }
  .p2tile:hover .p2img { transform: scale(1.03); }
  .p2body { padding: 12px 10px 0; overflow: hidden; position: relative; height: 100px; flex-shrink: 0; }
  .p2pill { display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; margin-bottom: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: opacity .15s ease; }
  .p2title { font-family: 'Cormorant Garamond', serif; font-weight: 700; font-size: 22px; color: #12243F; line-height: 1.15; transition: opacity .15s ease; }
  .p2tile:hover .p2pill, .p2tile:hover .p2title { opacity: 0; }
  .p2hover { position: absolute; inset: 0; background: rgba(10,20,46,.97); display: flex; align-items: center; justify-content: center; padding: 14px; opacity: 0; transition: opacity .28s ease .1s; z-index: 30; }
  .p2tile:hover .p2hover { opacity: 1; }
  .p2tagline { font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 14px; color: #FFF; text-align: center; line-height: 1.5; }
  .p2footer { height: 52px; flex-shrink: 0; display: flex; align-items: center; padding: 0 12px; border-top: 1.5px solid rgba(184,154,90,.28); background: #FDFAF5; border-radius: 0 0 5px 5px; gap: 8px; justify-content: space-between; }
  .p2label { font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #1a3a6b; line-height: 1.4; flex: 1; }
  .p2arrow { margin-left: auto; width: 28px; height: 28px; border: 1.5px solid #1a3a6b; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background .25s; flex-shrink: 0; }
  .p2tile:hover .p2arrow { background: #1a3a6b; }
  .p2arrow svg { width: 11px; height: 11px; stroke: #1a3a6b; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
  .p2tile:hover .p2arrow svg { stroke: #fff; }
  .p2bar { max-width: 1300px; margin: 36px auto 0; background: #1a3a6b; border-radius: 8px; padding: 20px 32px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
  .p2bar-text { font-size: 14px; color: #c8d5e8; line-height: 1.6; }
  .p2bar-btn { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .08em; background: #b89a5a; color: #fff; border: none; border-radius: 4px; padding: 12px 24px; cursor: pointer; white-space: nowrap; transition: background .2s; }
  .p2bar-btn:hover { background: #d4b87a; }
  .p2heading { text-align: center; margin-bottom: 40px; padding-top: 48px; }
  .p2eyebrow { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #b89a5a; display: block; margin-bottom: 10px; }
  .p2h2 { font-family: 'Cormorant Garamond', serif; font-size: 40px; font-weight: 700; color: #12243F; line-height: 1.15; margin: 0; }
`;


const P2Tile = ({ pill, title, tagline, imgSrc, href }) => (
  <a className="p2tile" href={href}>
    <div className="p2card">
      <div className="p2corner tl" /><div className="p2corner tr" />
      <div className="p2corner bl" /><div className="p2corner br" />
      <img className="p2img" src={imgSrc} alt={title} loading="lazy" />
      <div className="p2body">
        <span className="p2pill">{pill}</span>
        <div className="p2title">{title}</div>
        <div className="p2hover">
          <div className="p2tagline">{tagline}</div>
        </div>
      </div>
      <div className="p2footer">
        <span className="p2label">Information & Featured Providers</span>
        <div className="p2arrow">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  </a>
);


const RolesAndResponsibilities = () => (
  <div className="p2wrap">
    <style>{styles}</style>
    <div className="p2section">
      <div className="p2heading">
        <span className="p2eyebrow">Washington State</span>
        <h2 className="p2h2">Roles &amp; Responsibilities</h2>
      </div>
      <div className="p2grid">
        <P2Tile pill="Roles & Responsibilities" title="Executors" tagline="Understanding the Executor's Role" imgSrc="/tiles/set2/executors.webp" href="/executors" />
        <P2Tile pill="Roles & Responsibilities" title="Trustees" tagline="Managing Trust Assets & Obligations" imgSrc="/tiles/set2/trustees.webp" href="/trustees" />
        <P2Tile pill="Estate Planning" title="Wills" tagline="What Every Will Should Include" imgSrc="/tiles/set2/wills.webp" href="/wills" />
        <P2Tile pill="Education" title="Probate Terms" tagline="Key Terms Every Family Should Know" imgSrc="/tiles/set2/probate-terms.webp" href="/terminology" />
        <P2Tile pill="Education" title="The Probate Process" tagline="Step-by-Step Guide to Probate" imgSrc="/tiles/set2/the-probate-process.webp" href="/how-the-process-works" />
        <P2Tile pill="Real Estate" title="Probate Estate Sales" tagline="Selling an Inherited Property the Right Way" imgSrc="/tiles/set2/probate-estate-sales.webp" href="/probate-estate-sales" />
        <P2Tile pill="Real Estate" title="Title & Escrow" tagline="Protecting Ownership Through Closing" imgSrc="/tiles/set2/title-escrow.webp" href="/title-and-escrow" />
        <P2Tile pill="Estate Planning" title="Power of Attorney" tagline="Granting Authority to Act on Your Behalf" imgSrc="/tiles/set2/power-of-attorney.webp" href="/power-of-attorney" />
      </div>
      <div className="p2bar">
        <div className="p2bar-text"><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
        <button className="p2bar-btn">Find Help →</button>
      </div>
    </div>
  </div>
);

export default RolesAndResponsibilities;
