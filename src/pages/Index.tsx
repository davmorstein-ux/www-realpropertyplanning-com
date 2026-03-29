import GoldCheck3D from "@/components/GoldCheck3D";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { realEstateAgentSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Quote } from "lucide-react";
import iconEmail3d from "@/assets/icons/icon-email-3d.png";
import iconLicense3d from "@/assets/icons/icon-license-3d.png";
import iconAppraiser3d from "@/assets/icons/icon-appraiser-3d.png";
import mappin3d from "@/assets/mappin-3d.png";
import iconServiceProbate from "@/assets/icons/icon-service-probate.png";
import iconServiceSenior from "@/assets/icons/icon-service-senior.png";
import iconServiceValuation from "@/assets/icons/icon-service-valuation.png";
import daveHeadshot2 from "@/assets/dave-headshot-2.jpg";
import heroPnwHome from "@/assets/hero-pnw-home.jpg";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import StatewideSupport from "@/components/StatewideSupport";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import WhatToExpect from "@/components/WhatToExpect";
import LeadMagnetBlock from "@/components/LeadMagnetBlock";
import HomepageLeadForm from "@/components/HomepageLeadForm";
import AppraiserAdvantage from "@/components/AppraiserAdvantage";
import OutOfStateBlock from "@/components/OutOfStateBlock";
import TrustAndResults from "@/components/TrustAndResults";
import MidPageCTA from "@/components/MidPageCTA";
import EducationalPathways from "@/components/EducationalPathways";
import SituationFinderBlock from "@/components/SituationFinderBlock";
import ListenButton from "@/components/ListenButton";
import GuidedEntryPanel from "@/components/GuidedEntryPanel";
import StickyMobileCallButton from "@/components/StickyMobileCallButton";
import WhatHappensNext from "@/components/WhatHappensNext";

const serviceAreas = [
  { county: "King County", href: "/counties/king", cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Federal Way & more" },
  { county: "Snohomish County", href: "/counties/snohomish", cities: "Everett, Edmonds, Lynnwood, Marysville, Lake Stevens, Mukilteo & more" },
  { county: "Pierce County", href: "/counties/pierce", cities: "Tacoma, Puyallup, Lakewood, University Place, Bonney Lake & more" },
  { county: "Kitsap County", href: "/counties/kitsap", cities: "Bremerton, Silverdale, Poulsbo, Bainbridge Island, Port Orchard & more" },
];

const homepageFaqs = [
  { question: "Do I need probate before selling an inherited home in Washington?", answer: "It depends on how the property is titled and the estate structure. In many cases, probate or letters testamentary are required before a sale can proceed. Real Property Planning helps families and executors understand what's needed and how to move forward efficiently.", link: "/faq" },
  { question: "What is probate real estate?", answer: "Probate real estate refers to property that must be sold as part of settling a deceased person's estate. The process involves court oversight, specific timelines, and legal requirements that differ from a standard home sale.", link: "/faq" },
  { question: "Do I need a specialized agent to sell a probate property?", answer: "Yes — probate sales involve unique legal and procedural requirements. An agent with probate experience helps avoid costly delays, court complications, and pricing errors.", link: "/faq" },
  { question: "What areas does David Stein serve?", answer: "David serves clients throughout Washington State, with deep experience in King, Snohomish, Pierce, Skagit, and Kitsap counties. Through eXp Realty's referral network, he can also connect clients with trusted brokers across the U.S. and internationally.", link: "/counties" },
  { question: "What is the difference between a real estate broker and a certified appraiser?", answer: "A broker facilitates the sale of property, while a certified appraiser provides independent valuations. David holds both credentials, giving clients professional pricing insight grounded in appraisal methodology — not just market guesswork.", link: "/why-valuation-matters" },
  { question: "Can you help if the property needs repairs before sale?", answer: "Yes. David advises families on whether to sell as-is or invest in targeted improvements, based on a valuation-informed analysis of likely return.", link: "/how-the-process-works" },
  { question: "How do senior transitions work?", answer: "David helps families coordinate the sale of a longtime family home when a senior is moving to assisted living, independent living, or a smaller residence — with sensitivity to emotional and logistical complexity.", link: "/senior-transitions" },
  { question: "Do you work with attorneys and fiduciaries?", answer: "Yes. David regularly works alongside probate attorneys, estate attorneys, trustees, and professional fiduciaries to ensure the real estate component of estate administration is handled accurately and efficiently.", link: "/for-attorneys" },
  { question: "How is an estate property priced?", answer: "David uses his background as a certified residential appraiser to inform pricing — evaluating condition, comparable sales, and market trends to set a defensible and competitive list price.", link: "/why-valuation-matters" },
];

const testimonials = [
  { text: "David guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful.", attribution: "— Estate Attorney, Seattle" },
  { text: "We didn't know where to start. David made the entire process manageable and kept us informed every step of the way.", attribution: "— Executor, Snohomish County" },
  { text: "David's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable.", attribution: "— Family Member, King County" },
];

const jsonLd = realEstateAgentSchema;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-jsonld", "true");
    script.textContent = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <SEOHead
        title="Probate, Estate & Senior Transition Real Estate | David Stein | Washington State"
        description="David Stein is a Washington State real estate broker specializing in probate, estate, and senior transition real estate — with a strong focus in Western Washington and the Puget Sound region. Referral connections available nationwide and internationally through eXp Realty."
        jsonLd={jsonLd}
      />
      <Header />

      {/* ═══════════════════════════════════════════════════
          HERO — Full-width PNW home with overlay panel
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background image */}
        <img
          src={heroPnwHome}
          alt="Beautiful Pacific Northwest home surrounded by trees"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.3), 0 0 40px rgba(0,0,0,0.2)' }}>
              Real Estate Guidance for Probate, Inherited Property &amp; Life Transitions
            </h1>
          </div>
          <a href="tel:+12069003015" className="mt-10">
            <Button
              variant="gold"
              size="lg"
              className="px-10 py-5 h-auto text-lg tracking-wide"
            >
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Call (206) 900-3015
            </Button>
          </a>
          <Link
            to="/contact"
            className="mt-5 relative overflow-hidden inline-flex items-center justify-center rounded-[12px] px-8 py-4 min-h-[56px] font-bold text-lg tracking-[0.01em] text-white no-underline transition-all duration-200 ease-out bg-gradient-to-b from-[#1a6b6a] to-[#144f4e] border border-[rgba(10,60,58,0.5)] shadow-[0_3px_0_rgba(10,50,48,0.7),0_8px_18px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(5,30,28,0.2)] hover:-translate-y-[2px] hover:brightness-[1.06] hover:shadow-[0_5px_0_rgba(10,50,48,0.7),0_12px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] active:translate-y-[1px] active:shadow-[0_2px_0_rgba(10,50,48,0.7),0_4px_10px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[rgba(46,82,161,0.35)]"
          >
            <span className="pointer-events-none absolute left-[8%] top-0 h-[46%] w-[84%] rounded-full bg-gradient-to-b from-white/20 to-white/0" />
            <span className="relative z-10">Request a Call Back</span>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO WE CAN HELP + CTA — Consolidated dark section
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" id="who-we-help-section">
            <div className="flex justify-center mb-5">
              <ListenButton targetId="who-we-help-section" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-bold mb-8">
              Who We Can Help
            </h2>
            <ul className="space-y-3 text-left max-w-xl mx-auto mb-8">
              {[
                "Executors and personal representatives trying to settle an estate — often while grieving and managing family expectations at the same time",
                "Families with an inherited property who aren't sure whether to sell, keep, or fix it up — and need honest guidance, not a sales pitch",
                "Seniors and their families facing a move from a longtime home, with all the emotion and logistics that come with it",
                "Attorneys and fiduciaries who need a real estate partner they can hand the property piece to — and trust that it's handled right",
                "Out-of-state family members trying to coordinate a Washington property sale from across the country, without anyone local they can rely on",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-primary-foreground/90 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              If any of that sounds familiar, you're not alone — and you don't have to figure it out by yourself. The goal is to protect value, reduce stress, and give you a clear path forward with someone who's been through it before.
            </p>



            {/* Premium gold divider */}
            <div className="premium-divider my-14 lg:my-[72px]">
              <span className="premium-divider-dot" />
            </div>

            <div className="text-primary-foreground/80 text-[17px] leading-[1.85] space-y-5 max-w-2xl mx-auto text-left" id="intro-section">
              <p>
                Real Property Planning works alongside attorneys, executors, trustees, and families who are dealing with probate, inherited property, or a senior transition — situations where the real estate piece can feel especially uncertain.
              </p>
              <p>
                David Stein has spent more than 20 years working as both a licensed real estate broker and certified residential appraiser. That combination matters because it means pricing decisions are grounded in methodology, not just market opinion. His deepest experience is in Western Washington and the Puget Sound region.
              </p>
              <p>
                For clients who need help outside Washington, David connects them with trusted eXp Realty brokers across the country and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICE NAV TILES — Immediately after hero
      ═══════════════════════════════════════════════════ */}
      <ServiceNavTiles />

      <StatewideSupport background="bg-cream" />

      {/* ═══════════════════════════════════════════════════
          ABOUT DAVID — Two-column with headshot + credentials
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          {/* 1. Headshot */}
          <div className="flex justify-center mb-5">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl">
              <img
                src={daveHeadshot2}
                alt="David Stein, probate real estate specialist and certified appraiser"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2. Name */}
          <p className="text-2xl md:text-[1.65rem] font-bold text-foreground">David Stein</p>

          {/* 3. Title */}
          <p className="text-lg md:text-xl font-semibold text-foreground/80 mt-1">President, Real Property Planning</p>

          {/* 5. Experience text */}
          <div className="mt-8 text-left sm:text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 20 years, David has worked as both a licensed real estate broker and certified residential appraiser — a combination that's uncommon in the industry. It means the pricing advice you get is grounded in professional methodology, not a best guess.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              His practice is focused on executors, attorneys, trustees, and families across Washington State, with his deepest roots in Western Washington and the Puget Sound region.
            </p>
          </div>

          {/* 6. Licensing */}
          <div className="mt-8 space-y-2">
            <p className="flex items-center justify-center text-base font-semibold text-foreground">
              <img src={iconLicense3d} alt="" aria-hidden="true" className="mr-3 h-10 w-10 shrink-0 object-contain" />
              Licensed Real Estate Broker — License #113972
            </p>
            <p className="flex items-center justify-center text-base font-semibold text-foreground">
              <img src={iconAppraiser3d} alt="" aria-hidden="true" className="mr-3 h-10 w-10 shrink-0 object-contain mix-blend-multiply" />
              WA Certified Residential Appraiser — #1702080
            </p>
          </div>

          {/* 7. Phone + Email on one line */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-base text-muted-foreground">
            <a href="tel:2069003015" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="h-8 w-8 object-contain shrink-0" />
              (206) 900-3015
            </a>
            <a href="mailto:david@realpropertyplanning.com" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
              <img src={iconEmail3d} alt="" aria-hidden="true" className="h-12 w-12 object-contain shrink-0" />
              david@realpropertyplanning.com
            </a>
          </div>

          {/* 8–10. Centered lower block: brokerage row + memberships + badges */}
          <div className="mt-6 w-full flex flex-col items-center">
            {/* 8. eXp logo + addresses + Equal Housing badge — 3-col grid for true centering */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-4">
              <div className="flex items-center justify-center sm:justify-end">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-7 w-auto opacity-70" loading="lazy" />
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed text-center">
                <p>PO Box 1462, Woodinville, WA 98072</p>
                <p>Office: 1455 NW Leary Way, Seattle, WA 98107</p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <img src="/badges/equal-housing-badge.png" alt="Equal Housing Opportunity" className="h-[5.25rem] w-auto opacity-70" loading="lazy" />
              </div>
            </div>

            {/* 9. Memberships heading with divider lines */}
            <div className="mt-12 mb-4 flex items-center justify-center gap-3 w-full max-w-xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-muted-foreground/60 to-muted-foreground/60" />
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">Professional Memberships &amp; Affiliations</p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-muted-foreground/60 to-muted-foreground/60" />
            </div>

            {/* 10. Badge row */}
            <AffiliationBadgeGrid />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Three warm cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-warm-bg">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Real Estate Services Built for Complex Situations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconSrc: iconServiceProbate,
                title: "Probate & Estate Property Sales",
                body: "When a property is part of an estate, the decisions aren't always straightforward. David works with executors and families to handle inherited homes, trust-owned real estate, and probate sales across Washington.",
                link: "/probate-estate-sales",
              },
              {
                iconSrc: iconServiceSenior,
                title: "Senior Transitions & Downsizing",
                body: "Selling a home your family has lived in for decades is different from a typical sale. David works with families to coordinate the move, the property preparation, and the sale — so no one has to figure it out alone.",
                link: "/senior-transitions",
              },
              {
                iconSrc: iconServiceValuation,
                title: "Valuation-Informed Strategy",
                body: "One of the most common mistakes in estate and senior sales is mispricing the property. David's appraisal background means pricing is built on real data and methodology — not just what feels right.",
                link: "/why-valuation-matters",
              },
            ].map((card, i) => (
              <Link key={i} to={card.link} className="card-3d group flex flex-col items-center text-center p-8">
                  <div className="mb-6 flex h-48 w-full items-center justify-center md:h-[13.5rem]">
                    <img
                      src={card.iconSrc}
                      alt={card.title}
                      className="block max-h-full max-w-[16.5rem] object-contain mix-blend-multiply mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {card.body}
                  </p>
              
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST & RESULTS — Credentials, testimonials, case snapshots
      ═══════════════════════════════════════════════════ */}
      <TrustAndResults />

      {/* ═══════════════════════════════════════════════════
          WHAT TO EXPECT — 4-step process
      ═══════════════════════════════════════════════════ */}
      <WhatToExpect />

      {/* ═══════════════════════════════════════════════════
          APPRAISER ADVANTAGE
      ═══════════════════════════════════════════════════ */}
      <AppraiserAdvantage />

      {/* ═══════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════ */}
      <MidPageCTA
        heading="Have Questions About Your Situation?"
        body="A short, no-pressure conversation to understand what you're facing and talk through next steps."
        microcopy="Most people feel better just having a plan. Let's start there."
        buttonText="Schedule a 20‑Minute Consultation"
        variant="dark"
      />

      {/* ═══════════════════════════════════════════════════
          OUT-OF-STATE SUPPORT
      ═══════════════════════════════════════════════════ */}
      <OutOfStateBlock />

      {/* ═══════════════════════════════════════════════════
          WHEN SHOULD YOU CALL ME
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
              When Should You Call Me?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most people don't call with a plan — they call because something happened and they're not sure what to do next. If any of these sound familiar, that's a good reason to reach out.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "You've been named an executor and aren't sure where to start",
                "You're handling an inherited home and need guidance",
                "You're working with an attorney and real estate is part of the process",
                "You're helping a parent or family member transition out of their home",
                "You're trying to decide whether to sell as-is or make improvements",
                "You want a clear understanding of what the property is worth",
                "You simply want to talk through your situation before making any decisions",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light px-8 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-10 h-10 mr-2.5 object-contain shrink-0" style={{ background: 'transparent' }} />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SITUATION FINDER — Situation-based entry points
      ═══════════════════════════════════════════════════ */}
      <SituationFinderBlock />

      {/* ═══════════════════════════════════════════════════
          LEAD MAGNET — Executor checklist
      ═══════════════════════════════════════════════════ */}
      <LeadMagnetBlock />

      {/* ═══════════════════════════════════════════════════
          AREAS SERVED — Navy background with county cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
        {/* Subtle PNW watermark */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 20 L130 80 L160 140 H40 L70 80 Z' fill='%23fff'/%3E%3Cpath d='M100 50 L120 90 L140 130 H60 L80 90 Z' fill='%23fff'/%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }} />
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-base">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Serving Clients Throughout Washington State
            </h2>
            <p className="text-primary-foreground/60 text-base max-w-2xl mx-auto">
              Based in Washington with deep experience across Western Washington and the Puget Sound region. Through eXp Realty's referral network, David can also connect clients with trusted brokers across the U.S. and internationally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Link key={i} to={area.href} className="group">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-12 h-12 object-contain shrink-0" />
                    <h3 className="font-serif text-xl text-primary-foreground font-semibold group-hover:text-gold transition-colors">
                      {area.county}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/70 text-[15px]">{area.cities}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/counties">
 <Button variant="gold" size="lg"className="hover:-light focus-visible:ring-gold">
                View All Service Areas
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT — Navy/dark background with form
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-navy-dark">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Contact info */}
            <div>
               <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
                Not Sure Where to Start? That's Normal.
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">
                Most people who reach out aren't sure exactly what they need — they just know the property is part of the picture and they want to talk it through with someone who's been through it before.
              </p>
              <p className="text-primary-foreground/60 text-base leading-relaxed mb-3">
                <strong className="text-primary-foreground/80">What happens next:</strong> David typically responds within one business day, often sooner.
              </p>
              <p className="text-primary-foreground/60 text-base leading-relaxed mb-10">
                The conversation is confidential, practical, and no-obligation. The goal is to understand your situation and talk through what makes sense.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-[15px] text-primary-foreground/60">Phone</p>
                  <a href="tel:2069003015" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="mr-3 h-14 w-14 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">(206) 900-3015</span>
                  </a>
                </div>
                <div>
                  <p className="text-[15px] text-primary-foreground/60">Email</p>
                  <a href="mailto:david@realpropertyplanning.com" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="mr-3 h-14 w-14 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">david@realpropertyplanning.com</span>
                  </a>
                </div>
                <div>
                  <p className="text-[15px] text-primary-foreground/60">Serving</p>
                  <div className="mt-1 inline-flex items-center text-primary-foreground">
                    <img src={mappin3d} alt="" aria-hidden="true" className="mr-3 h-11 w-11 shrink-0 object-contain" />
                    <span className="text-lg font-semibold">Washington State &amp; Beyond</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-6 w-auto opacity-50" loading="lazy" />
                <span className="text-primary-foreground/40 text-[15px]">Broker License #113972 · Appraiser #1702080</span>
              </div>
            </div>

            {/* Right — Lead capture form */}
            <HomepageLeadForm />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          EDUCATIONAL PATHWAYS
      ═══════════════════════════════════════════════════ */}
      <EducationalPathways />

      {/* ═══════════════════════════════════════════════════
          FAQ PREVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Answers to Questions About Estate &amp; Inherited Property
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {homepageFaqs.map((faq, index) => (
              <Link key={index} to={faq.link} className="block group">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-gold/30 transition-colors">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/faq">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                View All FAQs <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
