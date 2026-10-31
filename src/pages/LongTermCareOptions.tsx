import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import AFHCarousel from "@/components/AFHCarousel";
/* Oct 31, 2026: David's new square cover images (current branding, no
   old logo), served from the site's own files rather than Lovable asset
   links. 900px for the slider, 400px for the article-list thumbnails. */
import nursingHomesImg from "@/assets/long-term-care/ltc-nursing-homes-v2.webp";
import nursingHomesImgSmall from "@/assets/long-term-care/ltc-nursing-homes-v2-400.webp";
import shortTermImg from "@/assets/long-term-care/ltc-short-term-stays-v2.webp";
import shortTermImgSmall from "@/assets/long-term-care/ltc-short-term-stays-v2-400.webp";
import nurseDelegationImg from "@/assets/long-term-care/ltc-nurse-delegation-v2.webp";
import nurseDelegationImgSmall from "@/assets/long-term-care/ltc-nurse-delegation-v2-400.webp";
import medicaidImg from "@/assets/long-term-care/ltc-medicaid-v2.webp";
import medicaidImgSmall from "@/assets/long-term-care/ltc-medicaid-v2-400.webp";
import waCaresImg from "@/assets/long-term-care/ltc-wa-cares-v2.webp";
import waCaresImgSmall from "@/assets/long-term-care/ltc-wa-cares-v2-400.webp";
import chooseCareImg from "@/assets/long-term-care/ltc-choose-care-settings-v2.webp";
import chooseCareImgSmall from "@/assets/long-term-care/ltc-choose-care-settings-v2-400.webp";
import hospitalDischargeImg from "@/assets/long-term-care/ltc-hospital-discharge-v2.webp";
import hospitalDischargeImgSmall from "@/assets/long-term-care/ltc-hospital-discharge-v2-400.webp";

import RppArrow from "@/components/RppArrow";
const cards = [
  {
    title: "Nursing Homes in Washington State",
    href: "/long-term-care/nursing-homes",
    img: nursingHomesImg,
    thumb: nursingHomesImgSmall,
    placeholder: "#3f3a35",
  },
  {
    title: "Short-Term Nursing Home Stays",
    href: "/long-term-care/short-term-nursing-home-stays",
    img: shortTermImg,
    thumb: shortTermImgSmall,
    placeholder: "#433d37",
  },
  {
    title: "Nurse Delegation Program",
    href: "/long-term-care/nurse-delegation",
    img: nurseDelegationImg,
    thumb: nurseDelegationImgSmall,
    placeholder: "#4b453f",
  },
  {
    title: "Medicaid & Long-Term Care",
    href: "/long-term-care/medicaid-and-long-term-care",
    img: medicaidImg,
    thumb: medicaidImgSmall,
    placeholder: "#433d38",
  },
  {
    title: "WA Cares: Washington's Long-Term Care Insurance",
    href: "/long-term-care/wa-cares",
    img: waCaresImg,
    thumb: waCaresImgSmall,
    placeholder: "#4e4842",
  },
  {
    title: "How to Choose Between Care Settings",
    href: "/long-term-care/how-to-choose-care-settings",
    img: chooseCareImg,
    thumb: chooseCareImgSmall,
    placeholder: "#403a34",
  },
  {
    title: "Planning Your Hospital Discharge",
    href: "/long-term-care/hospital-discharge-planning",
    img: hospitalDischargeImg,
    thumb: hospitalDischargeImgSmall,
    placeholder: "#49433d",
  },
];

const LongTermCareOptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Long-Term Care Options in Washington State | Real Property Planning"
        description="A hub for understanding long-term care options in Washington State — nursing homes, Medicaid, WA Cares, hospital discharge planning, and how to choose the right care setting."
      />
      <Header />
      <main id="main-content">
<HeroBandTitle>{"Long-Term Care Options in Washington State"}</HeroBandTitle>

        <section style={{ backgroundColor: "hsl(40 20% 98%)", padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#1B3A6B",
                marginBottom: 12,
              }}
            >
              Long-Term Care · Washington State
            </p>
            <h1
              style={{
                fontFamily: "'DM Sans', 'DM Sans Fallback', serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "hsl(220 40% 12%)",
                marginBottom: 20,
              }}
            >
              Understanding Long-Term Care in Washington State
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                fontSize: 19,
                fontWeight: 500,
                lineHeight: 1.75,
                color: "hsl(220 35% 18%)",
                marginBottom: 24,
                borderLeft: "4px solid #6b84ad",
                paddingLeft: 20,
              }}
            >
              Long-term care decisions rarely arrive on a comfortable schedule. They often follow a hospital stay, a
              sudden change in health, or a quiet realization that the current setting is no longer working. This hub
              gathers the most important Washington State options in one place — so families can make informed,
              unhurried choices.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                fontSize: 18,
                lineHeight: 1.8,
                color: "hsl(220 25% 22%)",
                marginBottom: 16,
              }}
            >
              Use the guides below to explore nursing homes, short-term stays, the Nurse Delegation Program, Medicaid
              coverage, WA Cares, hospital discharge planning, and tools for finding the right care setting.
            </p>
          </div>
        </section>

        <AFHCarousel categories={cards} aspect={1} />

        {/* All Topics list — matches AFH Resources pattern */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#142c52",
              marginBottom: 8,
            }}
          >
            All Articles
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {cards.map((topic, i) => (
              <Link
                key={topic.href}
                to={topic.href}
                className="group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "22px 0",
                  borderBottom: "1px solid #dfc9cb",
                  borderTop: i === 0 ? "1px solid #dfc9cb" : "none",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,115,51,0.04)")
                }
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 100,
                    height: 100,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: topic.placeholder,
                    boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                  }}
                >
                  <img
                    src={topic.thumb}
                    alt={topic.title}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                    loading="lazy"
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 700,
                      color: "#142c52",
                      margin: "0 0 12px",
                      lineHeight: 1.3,
                      fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                    }}
                  >
                    {topic.title}
                  </h3>
                  <span className="gold-cta">
                    Read Article
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"> <RppArrow />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <BackToResources />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default LongTermCareOptions;
