import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

const REVIEWS = [
  {
    reviewer: "Valeri Sam",
    date: "June 2026",
    title: "Bought a home in 2026.",
    text: "We are so lucky that we met Mr. Dave. As first-time home buyers, we had no idea how the process worked, but he was like a light in the darkness. He patiently showed us every house we wanted to see, and when we finally chose one, he guided us through every step of the process all the way to closing day. He took the time to explain many aspects of the home-buying process, provided valuable recommendations, and always made sure we felt informed and comfortable. We highly recommend Mr. Dave to anyone looking for a knowledgeable, patient, and dedicated real estate professional.",
  },
  {
    reviewer: "marynakhromava",
    date: "June 2026",
    title: "Bought a Townhouse in 2026 in Maple Leaf, Seattle, WA.",
    text: "We couldn't have asked for a better agent to help us purchase a condo for my parents. David was exceptional from start to finish — incredibly attentive, always responsive, and his knowledge of the market gave us real confidence throughout the entire process.",
  },
  {
    reviewer: "maria610unz",
    date: "June 2026",
    title: "Bought a home in 2026.",
    text: "I was very happy to work with David. He was helping me with all what I needed, I really recommend him for everybody who needs help with new property! Was present always when I needed him. I can say I was very lucky to have him.",
  },
  {
    reviewer: "Anday",
    date: "March 2026",
    title: "Bought a Single Family home in 2025 in Holly, Everett, WA.",
    text: "David is an excellent person to work with and above all an expert on the field. I have enjoyed his honest and professional recommendations and he always has a room to listen and is so patient. He has deep knowledge on history of the property, comparables, and the entire buying process.",
  },
  {
    reviewer: "Rashmi Mishra",
    date: "February 2026",
    title: "Bought a Condo in 2025 in Olympic Hills, Seattle, WA.",
    text: "If you are reading this, it truly means you were meant to cross paths with Dave. Buying a home is such a personal journey, and having someone you can genuinely trust makes all the difference. Dave was always present, quick to respond, incredibly knowledgeable, thoughtful, and resourceful every step of the way.",
  },
  {
    reviewer: "Sunil K Yadav",
    date: "February 2026",
    title: "Bought a Condo in 2025 in Olympic Hills, Seattle, WA.",
    text: "David is extremely knowledgeable and was instrumental in helping us find the right home. Buying a home involves many complex steps and important decisions, and David has a deep understanding of every aspect of the process. He took the time to explain each detail clearly and answered every question we had.",
  },
  {
    reviewer: "jkassmeier",
    date: "February 2026",
    title: "Bought a Single Family home in 2026 in Woodinville, WA.",
    text: "I can't recommend Dave highly enough. From start to finish, he was kind, honest, sincere, and incredibly knowledgeable — not only about the entire home-buying process, but also about local resources and the community as a whole. Dave was always responsive and patient with my questions.",
  },
  {
    reviewer: "Remy Shriver",
    date: "February 2026",
    title: "Bought a Single Family home in 2025 in Bothell, WA.",
    text: "David was a fantastic person to work with. His patience and expertise made him the right fit for finding our family home. We spent the better half of a year looking for the right house, and he in no way rushed us or made us feel like we had to settle for a second rate home.",
  },
  {
    reviewer: "zuser20160825084735703",
    date: "January 2026",
    title: "WA 98072.",
    text: "I really enjoyed working with Dave on this transaction. He is enthusiastic, responsive, and genuinely dedicated to taking great care of his clients. Throughout the process, it was clear how much he cares about doing the right thing, and that level of commitment truly makes a difference.",
  },
  {
    reviewer: "dannylharris",
    date: "December 2024",
    title: "Sold a home in 2024 in Woodinville, WA.",
    text: "Dave did a fantastic job. He was always on top of things and always there to help with things that needed to be done. He is a very professional person and well prepared. We have sold eight houses in our 52 years and he is the best realtor we have ever had. You will not be disappointed.",
  },
  {
    reviewer: "longoliza",
    date: "September 2024",
    title: "Bought a Single Family home in 2024 in Bothell, WA.",
    text: "Dave is an unbelievable agent — and that's actually not a hyperbole. He combines his deep knowledge of home construction and DIY improvements, keen ability to conduct thorough research of the market, an extremely personable approach, and an uncanny level of care and attention for his clients.",
  },
  {
    reviewer: "Tinna Pamanian",
    date: "September 2024",
    title: "Bought a home in 2023.",
    text: "We had a great experience with Dave, from his ability to listen to our needs all the way through the process of purchase. He was responsive and efficient! Looking forward to working with Dave again on our business purchase.",
  },
  {
    reviewer: "bnbebee",
    date: "August 2024",
    title: "Bought and sold a Single Family home in 2024 in Duvall, WA.",
    text: "David helped us both buy and sell our homes. He was outstanding. He goes above and beyond for his clients. He is very knowledgeable and personable. We would highly recommend David for any real estate needs.",
  },
  {
    reviewer: "Alan Vannasy",
    date: "May 2024",
    title: "Sold a Single Family home in 2024 in Woodinville, WA.",
    text: "We had many hurdles to overcome with listing preparation and pre-existing repairs. Dave's foresight when advising us with the necessary pre-inspections and upfront transparency delivered amazing listing results. His level of professionalism definitely created impact with the showing and sale of our home.",
  },
  {
    reviewer: "Jacob Anderson",
    date: "May 2023",
    title: "Bought a Single Family home in 2023 in Bothell, WA.",
    text: "Dave did a fantastic job in helping my wife and I find and purchase our first home. His knowledge, insight, and experience were invaluable in the search and eventual negotiations. He was highly involved during the entire closing process and was always available to answer questions.",
  },
  {
    reviewer: "Jon Harkness",
    date: "February 2023",
    title: "Sold a Single Family home in 2023 in Woodinville, WA.",
    text: "Dave has gone above and beyond all expectations in being my selling agent. He helped find and facilitate a slew of contractors, scheduling and logistics around items necessary to get the house sold. I really cannot exaggerate the amount of time and effort that Dave put in over the course of our listing.",
  },
];

const StarRating = () => (
  <div style={{ display: "flex", gap: 3, alignItems: "center", marginBottom: 8 }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#ca2b38">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
    <span style={{ fontSize: 16, fontWeight: 700, color: "#ca2b38", marginLeft: 6 }}>5.0</span>
  </div>
);

const AFHRealEstateBroker = () => (
  <>
    <SEOHead
      title="AFH Real Estate Broker | AFH Club | Real Property Planning"
      description="Washington State licensed real estate broker specializing in Adult Family Home transactions — CHOW process, AFH valuations, and expert guidance for buyers and sellers."
      canonical="https://realpropertyplanning.com/afh-club/real-estate-broker"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "AFH Real Estate Broker", url: "https://realpropertyplanning.com/afh-club/real-estate-broker" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(18px, 2vw, 20px)",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
              color: "#302b26",
              lineHeight: 1.85,
              maxWidth: 680,
            }}
          >
            Buying or selling an Adult Family Home is unlike any other real estate transaction. The real estate and the
            DSHS license are handled separately, specialty contracts don't transfer automatically, and the CHOW process
            adds complexity that standard residential brokers rarely encounter. You need a broker who understands all of
            it.
          </p>
        </div>
      </section>{" "}
      <HeroBandTitle>AFH Real Estate Broker</HeroBandTitle>
      {/* Featured Broker + Why You Need a Specialist — side by side */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* Left — Provider tile */}
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#481216",
                  margin: "0 0 14px",
                }}
              >
                Featured AFH Broker
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "#280a0c",
                  lineHeight: 1.2,
                  margin: "0 0 20px",
                }}
              >
                Real Property Planning
              </h2>
              <ProviderTile
                name="David Stein"
                title="President, Real Property Planning"
                company="eXp Realty"
                photo={davidSteinPhoto}
                photoAlt="Photo of David Stein, AFH Real Estate Broker"
                logo={expRealtyLogo}
                logoAlt="eXp Realty logo"
                phone="(206) 900-3015"
                email="dave.stein@exprealty.com"
                website="https://davestein.exprealty.com"
                specialty="Adult Family Home transactions, probate, estate, and trust property sales across Washington State."
                bio="David Stein is a Washington State licensed real estate broker and Certified Residential Appraiser with over 20 years of experience in complex property transactions. He brings a rare combination of appraisal expertise and brokerage experience to AFH transactions — understanding both how to value a licensed care facility and how to navigate the CHOW process, DSHS timelines, and specialty contract considerations that define AFH real estate."
              />
              <div
                style={{
                  marginTop: 16,
                  background: "#fff",
                  border: "1px solid #dfc9cb",
                  borderLeft: "4px solid #3f3a35",
                  borderRadius: 6,
                  padding: "18px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  WA Licensed Real Estate Broker · eXp Realty · License #6c171e
                  <br />
                  WA Certified Residential Appraiser · Stein Appraisal
                  <br />
                  Member: ALCA · NAOSA · NAEPC · NAR
                </p>
              </div>
            </div>

            {/* Right — Why You Need a Specialist */}
            <div>
              <p
                style={{
                  fontSize: 14,
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#481216",
                  margin: "0 0 14px",
                }}
              >
                What Makes AFH Real Estate Different
              </p>
              <h3
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "#280a0c",
                  lineHeight: 1.2,
                  margin: "0 0 20px",
                }}
              >
                Why You Need a Specialist
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    title: "The license doesn't transfer",
                    body: "Every AFH sale is a Change of Ownership (CHOW). The buyer must apply for a new DSHS license — requiring an understanding of both the real estate closing timeline and the DSHS licensing timeline simultaneously.",
                  },
                  {
                    title: "Valuing an AFH requires dual expertise",
                    body: "An AFH's value includes the real estate and the licensed business operation — bed capacity, compliance history, specialty contracts, and Medicaid relationships all affect price. A broker who is also a certified appraiser brings a rare combination of skills.",
                  },
                  {
                    title: "Specialty contracts need careful handling",
                    body: "Dementia, ECS, and SBS specialty contracts don't transfer in a CHOW. A knowledgeable broker helps buyers understand what they are actually acquiring and what they will need to independently qualify for.",
                  },
                  {
                    title: "Compliance history matters more than curb appeal",
                    body: "Checking the DSHS AFH Locator, understanding enforcement history, and asking the right due diligence questions before closing protects buyers from inheriting problems not visible in a standard inspection.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1px solid #dfc9cb",
                      borderLeft: "4px solid #b13a44",
                      borderRadius: 6,
                      padding: "20px 22px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 18,
                        fontFamily: "Georgia, serif",
                        fontWeight: 700,
                        color: "#280a0c",
                        margin: "0 0 8px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 16,
                        fontFamily: "'Raleway', sans-serif",
                        color: "#302b26",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Zillow Reviews */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 14,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#7f2028",
                margin: "0 0 14px",
              }}
            >
              Client Reviews
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                color: "#280a0c",
                margin: "0 0 16px",
                lineHeight: 1.2,
              }}
            >
              What Clients Are Saying
            </h2>
            <div style={{ width: 48, height: 3, background: "#7f2028", margin: "0 auto 20px", borderRadius: 1 }} />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#fff",
                border: "1px solid #dfc9cb",
                borderRadius: 8,
                padding: "14px 28px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#ca2b38">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 20, fontFamily: "Georgia, serif", fontWeight: 700, color: "#280a0c" }}>5.0</span>
              <span style={{ fontSize: 18, fontFamily: "'Raleway', sans-serif", color: "#302b26" }}>
                · 16 Reviews on Zillow
              </span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dfc9cb",
                  borderTop: "3px solid #ca2b38",
                  borderRadius: 6,
                  padding: "24px 22px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <StarRating />
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#5e5954",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {review.date} · {review.reviewer}
                </p>
                <p
                  style={{
                    fontSize: 17,
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    color: "#280a0c",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {review.title}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontFamily: "'Raleway', sans-serif",
                    color: "#302b26",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {review.text}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                  {["Local knowledge", "Process expertise", "Responsiveness", "Negotiation skills"].map((badge) => (
                    <span
                      key={badge}
                      style={{
                        fontSize: 11,
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        background: "#edf2ff",
                        color: "#ca2b38",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href="https://www.zillow.com/profile/DaveStein"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "#ca2b38",
                padding: "14px 32px",
                borderRadius: 4,
                textDecoration: "none",
              }}
            >
              View All Reviews on Zillow →
            </a>
          </div>
        </div>
      </section>
      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHRealEstateBroker;
