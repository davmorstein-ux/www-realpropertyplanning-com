import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";
import contactHero from "@/assets/contact-hero-soundview-coffee.webp";

import scottPhoto from "@/assets/providers/elder-law-scott-schill-mercer-island.webp";
import tiffanyPhoto from "@/assets/tiffany-lane-financial-planner-new-york-life-seattle.webp";
import lauraPhoto from "@/assets/providers/laura-silverstein-aging-life-care-manager-washington.webp";
import jennipherPhotoAsset from "@/assets/providers/jennipher-ama-family-first-at-home.webp.asset.json";
import nicolePhotoAsset from "@/assets/providers/nicole-aging-wisdom.webp.asset.json";
import ericPhoto from "@/assets/providers/senior-movers-eric-rovner-washington.webp";
import tinaBarilPhoto from "@/assets/providers/senior-movers-tina-baril-washington.webp";
import meriannPhoto from "@/assets/meriann-roberts-ginnys-girls-owner.webp";
import abbyPhoto from "@/assets/abby-durr-silver-age-senior-living-advisor.webp";
import purpleGroupPhoto from "@/assets/providers/cpa-purple-group-tenly-jessica-seattle.webp";

const jennipherPhoto = jennipherPhotoAsset.url;
const nicolePhoto = nicolePhotoAsset.url;

interface Professional {
  name: string;
  role: string;
  company: string;
  specialty: string;
  photo: string;
  href: string;
}

interface CategoryGroup {
  category: string;
  professionals: Professional[];
}

const groups: CategoryGroup[] = [
  {
    category: "Aging Life Care Management",
    professionals: [
      {
        name: "Laura A. Silverstein, MSW",
        role: "Aging Life Care Manager",
        company: "Silver & Sage Consulting, LLC",
        specialty: "Care coordination and advocacy for older adults and families navigating aging-related decisions.",
        photo: lauraPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Jennipher Ama",
        role: "President, RN, CMC",
        company: "Family First at Home",
        specialty: "Registered nurse and certified care manager supporting families through in-home care planning.",
        photo: jennipherPhoto,
        href: "/aging-life-care-managers",
      },
      {
        name: "Nicole Amico Kane, MSW, LICSW, CMC",
        role: "Director of Care Management",
        company: "Aging Wisdom",
        specialty: "Certified care manager specializing in complex family dynamics and long-term care planning.",
        photo: nicolePhoto,
        href: "/aging-life-care-managers",
      },
    ],
  },
  {
    category: "Senior Move Management",
    professionals: [
      {
        name: "Eric Rovner",
        role: "Vice President of Marketing",
        company: "HB Move Management · Hansen Bros. Moving",
        specialty: "Full-service senior relocation and move management throughout the Puget Sound region.",
        photo: ericPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Tina Baril",
        role: "Owner",
        company: "Monarch Transitions · Senior Move Managers",
        specialty: "Compassionate move management and downsizing support for older adults and their families.",
        photo: tinaBarilPhoto,
        href: "/senior-move-managers",
      },
      {
        name: "Meriann Roberts",
        role: "Owner",
        company: "Ginny's Girls Estate Services",
        specialty: "Estate sales, downsizing, and move-out services for families in transition.",
        photo: meriannPhoto,
        href: "/senior-move-managers",
      },
    ],
  },
  {
    category: "Senior Living Advisors",
    professionals: [
      {
        name: "Abby Durr",
        role: "Owner & Founder",
        company: "Silver Age Senior Living Advisors",
        specialty: "Free, personalized guidance matching families with the right senior living community.",
        photo: abbyPhoto,
        href: "/senior-living-advisors",
      },
    ],
  },
  {
    category: "Elder Law",
    professionals: [
      {
        name: "Scott R. Schill",
        role: "Elder Law Attorney",
        company: "S.R. Schill & Associates — Financial and Longevity Advisors",
        specialty: "Elder law, Medicaid planning, and long-term care legal strategy in Washington State.",
        photo: scottPhoto,
        href: "/for-elder-law-attorneys",
      },
    ],
  },
  {
    category: "Financial Planning",
    professionals: [
      {
        name: "Tiffany Lane",
        role: "Financial Professional",
        company: "New York Life — Seattle General Office",
        specialty: "Financial planning for families navigating major life and estate transitions.",
        photo: tiffanyPhoto,
        href: "/for-financial-planners",
      },
    ],
  },
  {
    category: "CPAs & Tax Planning",
    professionals: [
      {
        name: "Tenly Krakoff & Jessica Simons, CPAs",
        role: "Co-Founders",
        company: "The Purple Group",
        specialty: "Tax planning, estate and trust taxation, and financial strategy for individuals and families.",
        photo: purpleGroupPhoto,
        href: "/for-cpas",
      },
    ],
  },
];

const wrap = { maxWidth: 1080, margin: "0 auto" };

const FeaturedProfessionals = () => (
  <>
    <SEOHead
      title="Featured Professionals | Real Property Planning"
      description="Meet the independent professionals in Real Property Planning's network — aging life care managers, senior move managers, senior living advisors, elder law attorneys, financial planners, and CPAs serving Washington State families."
      canonical="https://realpropertyplanning.com/featured-professionals"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Featured Professionals", url: "https://realpropertyplanning.com/featured-professionals" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
        <div style={{ lineHeight: 0 }}>
          <img
            src={contactHero}
            alt="Seniors enjoying coffee at a waterfront café in Washington State — Real Property Planning's professional network"
            className="w-full h-auto block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1983}
            height={583}
          />
          <HeroBandTitle as="h1">Featured Professionals</HeroBandTitle>
        </div>
      </section>
      <section style={{ background: "#edf0f3", padding: "40px 24px 56px", borderBottom: "3px solid #7f1d1d" }}>
        <div style={wrap}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            Our Professional Network
          </p>
          <p style={{ fontSize: 18, fontFamily: "'Raleway', sans-serif", color: "#302b26", lineHeight: 1.85, margin: 0, maxWidth: 680 }}>
            Real Property Planning connects families with independent, trusted specialists across Washington State.
            Each professional below is featured elsewhere on this site — click through to learn more and see their
            full profile.
          </p>
        </div>
      </section>

      {/* Groups */}
      {groups.map((group) => (
        <section key={group.category} style={{ padding: "56px 24px", borderBottom: "1px solid #e7e0da" }}>
          <div style={wrap}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#292521",
                margin: "0 0 28px",
              }}
            >
              {group.category}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {group.professionals.map((pro) => (
                <Link
                  key={pro.name}
                  to={pro.href}
                  className="marquee-hover"
                  style={{
                    display: "block",
                    background: "#ffffff",
                    border: "1px solid #e7e0da",
                    borderRadius: 10,
                    padding: 24,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 14 }}>
                    <img
                      src={pro.photo}
                      alt={`Photo of ${pro.name}`}
                      style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: 16, color: "#292521", margin: "0 0 2px" }}>
                        {pro.name}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "#7f1d1d", margin: 0 }}>{pro.role}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, fontWeight: 600, color: "#5a5147", margin: "0 0 10px" }}>
                    {pro.company}
                  </p>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "#5a5147", lineHeight: 1.6, margin: 0 }}>
                    {pro.specialty}
                  </p>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, fontWeight: 700, color: "#7f1d1d", margin: "14px 0 0" }}>
                    View Full Profile →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
    <CTASection />
    <DisclaimerSection />
    <Footer />
  </>
);

export default FeaturedProfessionals;
