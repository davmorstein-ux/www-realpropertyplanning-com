import { useEffect, useState } from "react";

const HomepageHero = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 769 : false
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const id = "rpp-preview-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };

  return (
    <div style={{ ...fontBody, background: "#0b1220", color: "#fff" }}>
      {/* ===== Hero ===== */}
      <section
        style={{
          position: "relative",
          height: isMobile ? "50vh" : "55vh",
          width: "100%",
          backgroundImage: "url('/hero-photo.webp')",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "center 30%" : "center",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "center",
            padding: "0 24px 50px",
          }}
        >
          {/* Content moved to trust bar */}
        </div>
      </section>

      {/* ===== Trust Bar ===== */}
      <section className="bg-navy" style={{ background: "#1a2f4e", padding: isMobile ? "16px 20px" : "28px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', 'Georgia', serif",
              color: "#f0c040",
              fontSize: "4rem",
              fontWeight: 900,
              textAlign: "center",
              margin: 0,
              letterSpacing: "0.04em",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Senior Transitions · Estate Sales · Probate
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: "#ffffff",
              opacity: 1,
              fontSize: "1.2rem",
              fontWeight: 400,
              textAlign: "center",
              marginTop: 8,
              marginBottom: 4,
              lineHeight: 1.5,
            }}
          >
            When life brings its biggest transitions — probate, estate sales, senior housing, downsizing —<br />Real Property Planning connects families, seniors, executors, and professionals with the right people and resources.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              color: "#ffffff",
              opacity: 1,
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
              marginTop: 12,
              marginBottom: isMobile ? 14 : 22,
              lineHeight: 1.5,
              letterSpacing: "0.05em",
            }}
          >
            A free-to-use hub <span style={{ color: "#f0c040" }}>·</span> Built for families <span style={{ color: "#f0c040" }}>·</span> Trusted by professionals
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomepageHero;
