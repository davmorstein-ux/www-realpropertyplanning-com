import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import AFHCarousel from "@/components/AFHCarousel";
import heroImage from "@/assets/articles-hero-banner.webp";
import nursingHomesImg from "@/assets/long-term-care/Nursing_Homes_in_Washington_State.webp.asset.json";
import shortTermImg from "@/assets/long-term-care/Short_Term_Nursing_Homes.webp.asset.json";
import nurseDelegationImg from "@/assets/long-term-care/Nurse_Delegation_Program.webp.asset.json";
import medicaidImg from "@/assets/long-term-care/Medicaid_and_Long-Term_Care.webp.asset.json";
import waCaresImg from "@/assets/long-term-care/WA_Cares_Washington_s_Long-Term_Care_Insurance.webp.asset.json";
import chooseCareImg from "@/assets/long-term-care/How_to_Choose_Between_Care_Settings.webp.asset.json";
import hospitalDischargeImg from "@/assets/long-term-care/Planning_Your_Hospital_Discharge.webp.asset.json";

const cards = [
  {
    title: "Nursing Homes in Washington State",
    href: "/long-term-care/nursing-homes",
    img: nursingHomesImg.url,
    placeholder: "#3f3a35",
  },
  {
    title: "Short-Term Nursing Home Stays",
    href: "/long-term-care/short-term-nursing-home-stays",
    img: shortTermImg.url,
    placeholder: "#433d37",
  },
  {
    title: "Nurse Delegation Program",
    href: "/long-term-care/nurse-delegation",
    img: nurseDelegationImg.url,
    placeholder: "#4b453f",
  },
  {
    title: "Medicaid & Long-Term Care",
    href: "/long-term-care/medicaid-and-long-term-care",
    img: medicaidImg.url,
    placeholder: "#433d38",
  },
  {
    title: "WA Cares: Washington's Long-Term Care Insurance",
    href: "/long-term-care/wa-cares",
    img: waCaresImg.url,
    placeholder: "#4e4842",
  },
  {
    title: "How to Choose Between Care Settings",
    href: "/long-term-care/how-to-choose-care-settings",
    img: chooseCareImg.url,
    placeholder: "#403a34",
  },
  {
    title: "Planning Your Hospital Discharge",
    href: "/long-term-care/hospital-discharge-planning",
    img: hospitalDischargeImg.url,
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
        <div className="bg-white">
          <img
            src={heroImage}
            alt="Long-Term Care Options in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>{"Long-Term Care Options in Washington State"}</HeroBandTitle>

        <section style={{ backgroundColor: "hsl(40 20% 98%)", padding: "48px 24px 32px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7f2028",
                marginBottom: 12,
              }}
            >
              Long-Term Care · Washington State
            </p>
            <h1
              style={{
                fontFamily: "'DM Sans', serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "hsl(220 40% 12%)",
                marginBottom: 20,
              }}
            >
              Understanding Long-Term Care in Washington
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 19,
                fontWeight: 500,
                lineHeight: 1.75,
                color: "hsl(220 35% 18%)",
                marginBottom: 24,
                borderLeft: "4px solid #c3525c",
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
                fontFamily: "'DM Sans', sans-serif",
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

        <AFHCarousel categories={cards} />

        {/* All Topics list — matches AFH Resources pattern */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#280a0c",
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
                    width: 90,
                    height: 120,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: topic.placeholder,
                    boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                  }}
                >
                  <img
                    src={topic.img}
                    alt={topic.title}
                    width={90}
                    height={120}
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
                      color: "#280a0c",
                      margin: "0 0 12px",
                      lineHeight: 1.3,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {topic.title}
                  </h3>
                  <span className="gold-cta">
                    Read Article
                    <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                      →
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
