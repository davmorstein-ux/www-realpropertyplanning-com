import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { davidSteinPerson } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import StatewideSupport from "@/components/StatewideSupport";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GoldCheck3D from "@/components/GoldCheck3D";

import daveHeadshot from "@/assets/david-stein-real-estate-agent-seattle.webp";
import davidSteinPresidentHeadshot from "@/assets/david-stein-president-headshot-2025-v5.jpg";
import AgentCredentialBlock from "@/components/AgentCredentialBlock";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconEmail3d from "@/assets/icons/real-estate-email-contact-icon-washington.webp";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About David Stein | Real Property Planning | Kirkland, Washington"
        description="David Stein is a licensed real estate broker and Washington State Certified Residential Appraiser specializing in probate, estate, and senior transition real estate throughout the Puget Sound region."
        jsonLd={{
          "@context": "https://schema.org",
          ...davidSteinPerson,
          description:
            "David Stein is a licensed Washington State real estate broker and certified residential appraiser specializing in probate, estate, and senior transition real estate throughout the Puget Sound region.",
          image: "https://realpropertyplanning.com/dave-headshot.jpg",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "About", url: "/about" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
                About David Stein
              </h1>
              <p className="text-lg md:text-xl text-gold leading-relaxed mt-3 font-medium tracking-wide">
                President of Real Property Planning
              </p>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mt-4 font-serif italic">
                Broker. Appraiser. Builder of a Better Process.
              </p>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Leadership headshot — David Stein */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <figure className="max-w-[260px] mx-auto text-center">
              <img
                src={davidSteinPresidentHeadshot}
                alt="David Stein, President of Real Property Planning"
                width={260}
                height={325}
                loading="lazy"
                className="w-[260px] h-[325px] mx-auto rounded-2xl object-cover object-top shadow-sm"
              />
              <figcaption className="mt-5">
                <p className="font-serif text-2xl text-foreground font-semibold leading-tight">
                  David Stein
                </p>
                <p className="text-muted-foreground text-base mt-1">
                  President of Real Property Planning
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Why I Created Real Property Planning — vision & mission */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.18em] text-gold font-semibold mb-4">
                Vision &amp; Mission
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
                Why I Created Real Property Planning
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
                <p>
                  Real Property Planning was created to be something the industry has long been
                  missing: a calm, trustworthy, and genuinely practical resource for the moments
                  when a home becomes part of a much larger life transition.
                </p>
                <p>
                  After years of walking alongside families through probate sales, estate
                  appraisals, and senior moves, I kept seeing the same pattern. People weren't
                  short on options — they were short on clarity. Executors didn't know which step
                  came first. Adult children didn't know who to trust. Attorneys and CPAs needed a
                  real estate partner who understood the legal and emotional weight of the work,
                  not just the transaction.
                </p>
                <p>
                  So I built Real Property Planning as a platform — a place where seniors,
                  families, executors, trustees, and the professionals who serve them can find
                  honest guidance, plain-English answers, and a coordinated team of specialists
                  for the road ahead. The goal isn't to put any one person at the center. The goal
                  is to make the path forward feel less heavy for the people walking it.
                </p>
                <p className="font-serif italic text-xl text-foreground border-l-4 border-gold pl-6 py-2">
                  This work is personal to me. My hope is that this resource brings clarity,
                  steadiness, and a little more peace of mind to every family and professional who
                  finds it.
                </p>
                <p className="text-base text-muted-foreground pt-2">
                  — David Stein, President, Real Property Planning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Short Version */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                  The Short Version
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    David Stein is a licensed Washington State real estate broker and a{" "}
                    <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">
                      Washington State Certified Residential Appraiser
                    </Link>{" "}
                    with over 20 years of experience in both disciplines. He lives in Kirkland, Washington, and serves families, executors, attorneys, CPAs, financial planners, and senior care professionals throughout the{" "}
                    <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">
                      Puget Sound region
                    </Link>{" "}
                    — specializing in{" "}
                    <Link to="/probate-estate-sales" className="text-accent hover:text-gold underline underline-offset-4">
                      probate real estate
                    </Link>, {" "}
                    <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">
                      inherited property
                    </Link>, estate sales, and{" "}
                    <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">
                      senior housing transitions
                    </Link>.
                  </p>
                  <p>
                    He founded Real Property Planning after years of working through probate and senior transition situations and noticing the same problem every time: too many moving parts, too many professionals working in silos, and families left trying to coordinate it all on their own. This site is his answer to that problem.
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
                  <img
                    src={daveHeadshot}
                    alt="David Stein licensed real estate broker and certified appraiser Kirkland Washington"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
                <AgentCredentialBlock />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How David Got Here */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                How David Got Here
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  David didn't set out to specialize in probate and senior transitions. He came to it the way most meaningful things happen — through experience.
                </p>
                <p>
                  He spent 15 years as a contractor before transitioning into real estate. He also built and ran an e-commerce business selling commercial access control and surveillance equipment — which gave him an early, practical understanding of how to build systems that connect people with what they need. That instinct — identify the gap, build the solution — is what eventually led to Real Property Planning.
                </p>
                <p>
                  The shift toward probate and estate work started with a handful of transactions that were more complex than usual. Rather than find them frustrating, David found them fascinating. He started looking more closely at what families were actually going through in those situations — the confusion, the coordination challenges, the decisions being made without enough information — and something clicked.
                </p>
                <blockquote className="border-l-4 border-gold/40 pl-6 py-2 my-8 italic text-foreground/90 text-lg">
                  "I kept seeing the same void. Families were dealing with attorneys, appraisers, real estate agents, senior care professionals, and cleanout crews — all separately, all at different times, none of them coordinating with each other. Someone needed to connect those dots."
                </blockquote>
                <p>
                  That realization became Real Property Planning — a resource hub designed to give families, professionals, and seniors a single place to find guidance, make connections, and navigate one of life's most complicated transitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: It's Personal, Too */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                It's Personal, Too
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  For David, this work has never been purely professional.
                </p>
                <p>
                  When his mother passed away after a battle with cancer, she left behind very little of tangible value — no will, no estate plan, just a car and some furniture that still needed to be dealt with. Even that small process had its complications. It was a quiet reminder that no transition, however simple it looks from the outside, is actually simple when you're the one going through it.
                </p>
                <p>
                  His father, now 93 years old and still serving as president of the Wayne Adult Community Center in New Jersey — presiding over city council meetings once a month — is a daily reminder that aging doesn't mean slowing down. And his brother, who has lived in a group home for years due to a condition called Agenesis of the Corpus Callosum, gave David a firsthand understanding of what it means to navigate care systems, group living environments, and the decisions families make when a loved one needs a different kind of support.
                </p>
                <p>
                  These experiences don't make David an expert in every dimension of what his clients are going through. But they make him someone who genuinely understands the weight of it.
                </p>
                <p>
                  As more people discover Real Property Planning and reach out, the same thing keeps happening: they tell David they wish this site had existed years ago — when they were going through something similar and didn't know where to turn. That feedback is what keeps the work moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Before Real Estate */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Before Real Estate
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  David graduated from Rutgers University and moved to the Pacific Northwest in 1987 — drawn to the region and never left. Before real estate, he spent 15 years in construction and contracting, which gave him a working knowledge of how homes are actually built, what deferred maintenance really means, and how to assess a property's condition with a trained eye rather than a checklist.
                </p>
                <p>
                  He also ran a successful e-commerce business selling commercial access control and security systems — an experience that taught him how to build something from scratch, how to connect buyers with exactly what they need, and how to think about a website as a tool rather than a brochure.
                </p>
                <p>
                  Both of those backgrounds show up every day in how he works. The contractor's eye for condition. The builder's instinct for systems. The entrepreneur's comfort with complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Real Property Planning Exists */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Why Real Property Planning Exists
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Real Property Planning wasn't built to be a typical real estate website. It was built to be an ecosystem — a place where anyone touched by the world of estate property, probate, senior transitions, or inherited real estate could find honest guidance, make trusted connections, and understand their options without feeling overwhelmed.
                </p>
                <p>
                  The families who come here are usually not in an easy moment. They're managing grief, responsibility, family dynamics, and financial decisions they've never faced before — often all at once. The professionals who come here are looking for reliable resources and collaborative partners, not just referral lists.
                </p>
                <p>
                  David built this site for both of them. And he built it to meet{" "}
                  <a
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-gold underline underline-offset-4"
                  >
                    WCAG 2.1 AA accessibility standards
                  </a>{" "}
                  — because some of the people who need it most are seniors who deserve a site that's easy to navigate with confidence.
                </p>
                <p>
                  Every day is an opportunity to meet new people and do something meaningful. When David sees a void, he figures out how to fill it. That's what happened here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Credentials & Affiliations */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
                Credentials &amp; Affiliations
              </h2>

              <div className="space-y-10">
                {/* Licenses */}
                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-4">
                    Licenses &amp; Certifications
                  </h3>
                  <ul className="space-y-3">
                    {[
                      <>Licensed Real Estate Broker — Washington State #113972 |{" "}
                        <a href="https://www.exprealty.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">eXp Realty</a>
                      </>,
                      "Washington State Certified Residential Appraiser — #1702080",
                      "20+ years of experience in both disciplines",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <GoldCheck3D size={18} className="mt-1 shrink-0" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Memberships */}
                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-4">
                    Professional Memberships
                  </h3>
                  <ul className="space-y-3">
                    {[
                      <>Corporate Partner,{" "}
                        <a href="https://www.aginglifecare.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a> (ALCA)
                      </>,
                      "Member, National Association of Estate Planners & Councils (NAEPC)",
                      "Recognized Member, National Association of Senior Advocates — Best Real Estate Agent 2026",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <GoldCheck3D size={18} className="mt-1 shrink-0" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Based In */}
                <div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-4">
                    Based In
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Kirkland, Washington",
                      <>Serving clients throughout the{" "}
                        <Link to="/counties" className="text-accent hover:text-gold underline underline-offset-4">Puget Sound region</Link> and Washington State
                      </>,
                      <>National referral connections through{" "}
                        <a href="https://www.exprealty.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">eXp Realty</a>
                      </>,
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <AffiliationBadgeGrid />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: What Clients Say */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                What Clients Say About Working With David
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                David's clients consistently describe the same experience: he goes further than expected, stays involved longer than required, and communicates in a way that makes complicated situations feel manageable. Many become friends. Most say they'd call him first if they ever had to do it again.
              </p>
              <div className="space-y-8">
                {[
                  {
                    quote: "We appreciated David's patience, thoughtful communication, and realistic guidance throughout the sale of our family property.",
                    attribution: "— Family Review",
                  },
                  {
                    quote: "Real Property Planning brought clarity, professionalism, and calm guidance during a very difficult property transition.",
                    attribution: "— Margaret T., Executor, King County",
                  },
                  {
                    quote: "I was completely overwhelmed as a first-time executor. David walked me through every step and made the entire process feel manageable.",
                    attribution: "— Robert K., Personal Representative, Snohomish County",
                  },
                ].map((review, i) => (
                  <blockquote
                    key={i}
                    className="border-l-4 border-gold/40 pl-6 py-2"
                  >
                    <p className="text-foreground/90 text-lg italic leading-relaxed mb-2">
                      "{review.quote}"
                    </p>
                    <footer className="text-muted-foreground text-sm font-medium">
                      {review.attribution}
                    </footer>
                  </blockquote>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  <Link to="/testimonials" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">
                    Read More Client Reviews
                  </Link>
                  <span className="text-muted-foreground/40">·</span>
                  <a
                    href="https://www.zillow.com/profile/dstein2112#reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm"
                  >
                    See Reviews on Zillow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: A Note on How David Works */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                A Note on How David Works
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  David will tell you he's a little quirky. He's also direct, genuinely enthusiastic about this work, and tends to stay in people's lives longer than a typical transaction would require. He asks a lot of questions — not to delay, but because he actually wants to understand your situation before offering advice.
                </p>
                <p>
                  When you leave a conversation with David, the goal is that you feel three things: valued, clear on what comes next, and a little more energized than when you started. Whether he ends up being the right fit for your situation or simply points you toward someone who is, you'll walk away with more than you came with.
                </p>
                <p className="font-medium text-foreground">
                  That's the point of all of this.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/about-david-stein" />

        {/* Closing CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                Ready to Talk?
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
                Most people start with a single question. David is happy to hear it.
              </p>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Reach out directly — by phone, email, or the{" "}
                <Link to="/contact" className="text-gold hover:text-gold/80 underline underline-offset-4">
                  contact form
                </Link>. He responds personally, usually within one business day.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                    Call (206) 900-3015
                  </Button>
                </a>
                <a href="mailto:david@realpropertyplanning.com">
                  <Button variant="gold" size="lg" className="px-8">
                    Send a Message
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/60 mt-6">
                <img src={iconEmail3d} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy" />
                <a href="mailto:david@realpropertyplanning.com" className="hover:text-gold transition-colors">
                  david@realpropertyplanning.com
                </a>
              </div>
              <p className="text-primary-foreground/50 text-base mt-6">
                There's no pressure, no obligation, and no sales pitch. Just an honest conversation about your situation.
              </p>
            </div>
          </div>
        </section>

        <StatewideSupport background="bg-secondary" />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
