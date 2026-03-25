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
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge.jpg";
import naepcLogo from "@/assets/naepc-logo.png";
import expRealtyLogo from "@/assets/exp-realty-logo.png";
import ServiceNavTiles from "@/components/ServiceNavTiles";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

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
  { question: "What counties does David Stein serve?", answer: "David serves King, Snohomish, Pierce, Skagit, and Kitsap Counties throughout Western Washington.", link: "/counties" },
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
        title="Senior Relocation & Estate Property Sales | David Stein | Puget Sound"
        description="David Stein, real estate broker serving the Puget Sound region — specializing in senior relocation, estate and inherited property sales, probate real estate, and trust property sales in King, Snohomish, and Pierce counties."
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
        <div className="absolute inset-0 bg-black/25" />

        <div className="container relative z-10 px-6 lg:px-8 py-20 lg:py-24 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[54px] text-white font-bold leading-[1.1] mb-5" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.25)' }}>
              Guiding Families Through Life's Most Important Property Decisions
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 mx-auto max-w-2xl" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>
              Probate &amp; estate property sales · Senior transitions · Western Washington
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="relative bg-gradient-to-b from-[hsl(43_56%_58%)] to-[hsl(43_50%_42%)] text-white font-semibold px-12 py-5 h-auto rounded-xl text-lg tracking-wide shadow-[0_4px_16px_-2px_hsl(43_50%_30%/0.45),0_1px_3px_0_hsl(43_50%_30%/0.25),inset_0_1px_0_0_hsl(43_60%_72%/0.5)] hover:shadow-[0_8px_24px_-4px_hsl(43_50%_30%/0.5),0_2px_6px_0_hsl(43_50%_30%/0.3),inset_0_1px_0_0_hsl(43_60%_72%/0.6)] hover:-translate-y-0.5 active:translate-y-px active:shadow-[0_2px_8px_-2px_hsl(43_50%_30%/0.4),inset_0_1px_2px_0_hsl(43_40%_30%/0.2)] transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 border border-[hsl(43_45%_50%/0.3)]"
              >
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICE NAV TILES — Immediately after hero
      ═══════════════════════════════════════════════════ */}
      <ServiceNavTiles />

      {/* ═══════════════════════════════════════════════════
          ABOUT DAVID — Two-column with headshot + credentials
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-center">
            {/* Left — Headshot */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 shadow-xl">
                <img
                  src={daveHeadshot2}
                  alt="David Stein, probate real estate specialist and certified appraiser"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right — Bio + credentials + badges */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-3">
                Meet David Stein
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                With over 20 years of experience as both a licensed real estate broker and certified residential appraiser, David brings rare dual expertise to every engagement — providing calm, knowledgeable guidance during life's most important property decisions.
              </p>
              <div className="mb-5 space-y-3">
                <p className="text-base font-semibold tracking-[0.02em] text-foreground">David Stein</p>
                <p className="flex items-center text-sm font-semibold text-foreground md:text-base">
                  <img src={iconLicense3d} alt="" aria-hidden="true" className="mr-2 h-[22px] w-[22px] shrink-0 object-contain" />
                  Licensed Real Estate Broker
                </p>
                <p className="flex items-center text-sm font-semibold text-foreground md:text-base">
                  <img src={iconAppraiser3d} alt="" aria-hidden="true" className="mr-2 h-[22px] w-[22px] shrink-0 object-contain" />
                  WA Certified Residential Appraiser
                </p>
              </div>
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Professional Memberships &amp; Affiliations</p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
                <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center">
                  <img src={alcaLogo} alt="Aging Life Care Association Corporate Partner" className="max-h-11 w-auto object-contain" loading="lazy" />
                </a>
                <span className="flex h-14 items-center justify-center">
                  <img src={naosaBadge} alt="National Association of Senior Advocates - Best Real Estate Agent 2026" className="max-h-11 w-auto object-contain" loading="lazy" />
                </span>
                <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center">
                  <img src={naepcLogo} alt="National Association of Estate Planners & Councils" className="max-h-11 w-auto object-contain" loading="lazy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Three warm cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-warm-bg">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              How We Help
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Specialized Real Estate Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                iconSrc: iconServiceProbate,
                title: "Probate & Estate Property Sales",
                body: "Experienced guidance for selling inherited homes, trust-owned real estate, and estate property across Western Washington.",
                link: "/probate-estate-sales",
              },
              {
                iconSrc: iconServiceSenior,
                title: "Senior Transitions & Downsizing",
                body: "Thoughtful real estate support for families navigating a move from a longtime home to assisted living or smaller housing.",
                link: "/senior-transitions",
              },
              {
                iconSrc: iconServiceValuation,
                title: "Valuation-Informed Strategy",
                body: "As both a broker and certified appraiser, David provides pricing grounded in professional valuation expertise — not guesswork.",
                link: "/why-valuation-matters",
              },
            ].map((card, i) => (
              <Link key={i} to={card.link} className="group">
                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="mx-auto mb-6 flex h-32 w-40 items-center justify-center md:h-36 md:w-44">
                    <img
                      src={card.iconSrc}
                      alt={card.title}
                      className="block max-h-full max-w-full object-contain mix-blend-multiply"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {card.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              You don't need to have everything figured out. If any of these sound familiar, it's a good time to have a conversation.
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
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-8 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Warm background with quote cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-warm-bg">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              What Clients Are Saying
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Trusted During Important Transitions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 relative">
                <Quote className="w-10 h-10 text-gold/15 absolute top-6 right-6" />
                <p className="text-foreground text-lg leading-[1.8] italic mb-6 pr-8">
                  "{t.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground font-medium text-sm">{t.attribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Serving Western Washington & the Puget Sound Region
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, i) => (
              <Link key={i} to={area.href} className="group">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={mappin3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0" />
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
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold focus-visible:ring-gold">
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
                Start a Conversation
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-10">
                Whether you're an attorney, executor, trustee, or family member — David is here to help you navigate the real estate side of your situation with care and clarity.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-primary-foreground/60">Phone</p>
                  <a href="tel:2069003015" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="mr-2 h-[22px] w-[22px] shrink-0 object-contain" />
                    <span className="text-lg font-semibold">(206) 900-3015</span>
                  </a>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <a href="mailto:david@realpropertyplanning.com" className="mt-1 inline-flex items-center text-primary-foreground transition-colors hover:text-gold">
                    <img src={iconEmail3d} alt="" aria-hidden="true" className="mr-2 h-[22px] w-[22px] shrink-0 object-contain" />
                    <span className="text-lg font-semibold">david@realpropertyplanning.com</span>
                  </a>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Serving</p>
                  <div className="mt-1 inline-flex items-center text-primary-foreground">
                    <img src={mappin3d} alt="" aria-hidden="true" className="mr-2 h-[22px] w-[22px] shrink-0 object-contain" />
                    <span className="text-lg font-semibold">Western Washington &amp; Puget Sound</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <img src={expRealtyLogo} alt="eXp Realty" className="h-6 w-auto opacity-50" loading="lazy" />
                <span className="text-primary-foreground/40 text-sm">License #113972</span>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-6">
                Send a Message
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>
                <Button className="w-full bg-gold hover:bg-gold-light text-foreground font-semibold py-3 h-auto rounded-lg text-base">
                  Send a Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          FAQ PREVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-warm-bg">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Answers to Questions About Estate & Inherited Property
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
