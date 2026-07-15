import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import ProviderTile from "@/components/ProviderTile";
import davidSteinPhoto from "@/assets/providers/realtor-david-stein-headshot-seattle.webp";
import expRealtyLogo from "@/assets/providers/exp-realty-brokerage-large-logo-washington.webp";

const REVIEWS = [
  {
    reviewer: "Valeri Sam",
    date: "June 2026",
    title: "Bought a home in 2026.",
    text: "We are so lucky that we met Mr. Dave. As first-time home buyers, we had no idea how the process worked, but he was like a light in the darkness. He patiently showed us every house we wanted to see, and when we finally chose one, he guided us through every step of the process all the way to closing day. Mr. Dave exceeded our expectation. He took the time to explain many aspects of the home-buying process, provided valuable recommendations, and always made sure we felt informed and comfortable. We are truly grateful to God for sending such an amazing person into our lives. We highly recommend Mr. Dave to anyone looking for a knowledgeable, patient, and dedicated real estate professional.",
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
    text: "I was very happy to work with David. He was helping me with all what I needed, I really recommend him for everybody who needs help with new property! Was present always when I needed him, he is very nice and I was working very well with him! I can say I was very lucky to have him.",
  },
  {
    reviewer: "Anday",
    date: "March 2026",
    title: "Bought a Single Family home in 2025 in Holly, Everett, WA.",
    text: "David is an excellent person to work with and above all an expert on the field. I have enjoyed his honest and professional recommendations and he always has a room to listen and is so patient. Highly recommend to work with. He has deep knowledge on history of the property, comparables, and the entire buying process.",
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
      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#ca2b38" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
    <span style={{ fontSize: 16, fontWeight: 700, color: "#ca2b38", marginLeft: 6 }}>5.0</span>
  </div>
);

const Realtor = () => (
  <>
    <SEOHead
      title="Real Estate Broker | Real Property Planning"
      description="Washington State licensed real estate broker serving the Puget Sound region — residential, multi-family, investment, and specialty properties."
      canonical="https://realpropertyplanning.com/realtor"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Real Estate Broker", url: "https://realpropertyplanning.com/realtor" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle>Real Estate Broker</HeroBandTitle>

      {/* Featured provider */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ProviderTile
              name="David Stein"
              title="President, Real Property Planning"
              company="eXp Realty"
              photo={davidSteinPhoto}
              photoAlt="Photo of David Stein"
              logo={expRealtyLogo}
              logoAlt="eXp Realty logo"
              phone="(206) 900-3015"
              email="dave.stein@exprealty.com"
              website="https://davestein.exprealty.com"
              specialty="Probate, estate, and trust property sales across Washington State — working with executors, trustees, and families navigating inherited real estate."
              bio="David Stein is a Washington State licensed real estate broker and Certified Residential Appraiser specializing in Adult Family Home sales, probate and estate properties, and trust-owned real estate across the Puget Sound region.

With over 20 years of experience, David represents buyers and sellers of licensed Adult Family Homes, and works with executors, trustees, personal representatives, and agents under power of attorney navigating the sale of inherited real estate — bringing calm, expert guidance to some of the most complex transactions a family can face.

As a broker with eXp Realty, he combines deep local knowledge with a powerful nationwide network. His dual license as both broker and appraiser is a rare advantage — particularly valuable when an AFH, estate, or trust property must be both accurately valued and strategically sold.

Specialties: Adult Family Home sales · Probate, estate & trust properties · Executors, trustees & families navigating inherited real estate across Washington State."
            />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-muted-foreground text-base leading-relaxed mb-5 space-y-1">
              <p>
                Washington State Licensed Real Estate Broker — David Stein's real estate license is held under eXp
                Realty
              </p>
              <p>Washington State Certified Residential Appraiser — Stein Appraisal</p>
              <p>Real Estate License #6c171e</p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-2">Proud Member of the:</p>
              <ul className="text-muted-foreground text-base leading-relaxed list-disc pl-6 space-y-1">
                <li>ALCA — Aging Life Care Association</li>
                <li>NAOSA — National Association of Senior Advocates</li>
                <li>NAEPC — National Association of Estate Planners &amp; Councils</li>
                <li>NAR — National Association of Realtors®</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zillow Reviews */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Section header */}
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
            {/* Overall rating */}
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

          {/* Review grid */}
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
                {/* Zillow badges */}
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

          {/* View on Zillow CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href="https://www.zillow.com/profile/DaveStein"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
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

      <BackToProfessionalsButton />
    </main>
    <Footer />
  </>
);

export default Realtor;
