const CostOfCareTeaser = () => (
  <a
    href="/cost-of-care-calculator"
    style={{
      display: "block",
      position: "relative",
      borderRadius: 10,
      overflow: "hidden",
      border: "2px solid #1a2744",
      boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      textDecoration: "none",
      height: "100%",
      minHeight: 96,
    }}
  >
    <img
      src="/cost-of-care-teaser-v3.webp"
      alt="Cost of Care Calculator — compare Washington senior care costs to national averages"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
      }}
      loading="lazy"
    />
  </a>
);

export default CostOfCareTeaser;