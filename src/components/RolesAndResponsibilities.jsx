import React from 'react';

const tileData = [
  { pill: "Roles & Responsibilities", title: "Executors", tagline: "Understanding the Executor's Role", img: "/tiles/set2/executors.webp", href: "/executors" },
  { pill: "Roles & Responsibilities", title: "Trustees", tagline: "Managing Trust Assets & Obligations", img: "/tiles/set2/trustees.webp", href: "/trustees" },
  { pill: "Estate Planning", title: "Wills", tagline: "What Every Will Should Include", img: "/tiles/set2/wills.webp", href: "/wills" },
  { pill: "Education", title: "Probate Terms", tagline: "Key Terms Every Family Should Know", img: "/tiles/set2/probate-terms.webp", href: "/terminology" },
  { pill: "Education", title: "The Probate Process", tagline: "Step-by-Step Guide to Probate", img: "/tiles/set2/the-probate-process.webp", href: "/how-the-process-works" },
  { pill: "Real Estate", title: "Probate Estate Sales", tagline: "Selling an Inherited Property the Right Way", img: "/tiles/set2/probate-estate-sales.webp", href: "/probate-estate-sales" },
  { pill: "Real Estate", title: "Title & Escrow", tagline: "Protecting Ownership Through Closing", img: "/tiles/set2/title-escrow.webp", href: "/title-and-escrow" },
  { pill: "Estate Planning", title: "Power of Attorney", tagline: "Granting Authority to Act on Your Behalf", img: "/tiles/set2/power-of-attorney.webp", href: "/power-of-attorney" },
];

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '380px',
  background: '#FDFAF5',
  borderRadius: '5px',
  border: '1px solid rgba(184,154,90,0.40)',
  boxShadow: '0 8px 24px rgba(18,36,63,0.15)',
  overflow: 'hidden',
  position: 'relative',
  transition: 'box-shadow 0.4s ease, transform 0.4s ease',
  textDecoration: 'none',
  cursor: 'pointer',
};

const imgStyle = {
  display: 'block',
  width: '100%',
  height: '215px',
  objectFit: 'contain',
  objectPosition: 'center center',
  flexShrink: 0,
  background: '#FDFAF5',
};

const bodyStyle = {
  flex: 1,
  padding: '12px 10px 0',
  overflow: 'hidden',
  position: 'relative',
};

const pillStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#b89a5a',
  marginBottom: '5px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontFamily: "'Montserrat', sans-serif",
};

const titleStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: '26px',
  color: '#12243F',
  lineHeight: 1.15,
};

const footerStyle = {
  height: '52px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  borderTop: '1.5px solid rgba(184,154,90,0.28)',
  background: '#FDFAF5',
  gap: '8px',
  justifyContent: 'space-between',
};

const labelStyle = {
  fontSize: '10px',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#1a3a6b',
  lineHeight: 1.4,
  flex: 1,
  fontFamily: "'Montserrat', sans-serif",
};

const RolesAndResponsibilities = () => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: '0 40px 64px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap');`}</style>
      <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '48px' }}>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b89a5a', display: 'block', marginBottom: '10px' }}>Washington State</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 700, color: '#12243F', lineHeight: 1.15, margin: 0 }}>Roles &amp; Responsibilities</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1300px', margin: '0 auto 20px' }}>
        {tileData.map((tile, i) => (
          <a
            key={tile.title}
            href={tile.href}
            style={{
              ...cardStyle,
              boxShadow: hovered === i ? '0 16px 40px rgba(18,36,63,0.25)' : '0 8px 24px rgba(18,36,63,0.15)',
              transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img style={imgStyle} src={tile.img} alt={tile.title} loading="lazy" />
            <div style={bodyStyle}>
              <span style={{ ...pillStyle, opacity: hovered === i ? 0 : 1 }}>{tile.pill}</span>
              <div style={{ ...titleStyle, opacity: hovered === i ? 0 : 1 }}>{tile.title}</div>
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(10,20,46,0.97)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '14px', opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.28s ease', zIndex: 30,
              }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '14px', color: '#FFF', textAlign: 'center', lineHeight: 1.5 }}>{tile.tagline}</div>
              </div>
            </div>
            <div style={footerStyle}>
              <span style={labelStyle}>Information &amp; Featured Providers</span>
              <div style={{ marginLeft: 'auto', width: '28px', height: '28px', border: '1.5px solid #1a3a6b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hovered === i ? '#1a3a6b' : 'transparent', transition: 'background 0.25s', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" style={{ width: '11px', height: '11px', stroke: hovered === i ? '#fff' : '#1a3a6b', fill: 'none', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div style={{ maxWidth: '1300px', margin: '36px auto 0', background: '#1a3a6b', borderRadius: '8px', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <div style={{ fontSize: '14px', color: '#c8d5e8', lineHeight: 1.6 }}><strong>Need guidance navigating probate or an estate transition?</strong> Our network of trusted professionals is here to help.</div>
        <button style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', background: '#b89a5a', color: '#fff', border: 'none', borderRadius: '4px', padding: '12px 24px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Find Help →</button>
      </div>
    </div>
  );
};

export default RolesAndResponsibilities;
