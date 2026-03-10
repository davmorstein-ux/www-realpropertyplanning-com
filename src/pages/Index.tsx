import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, Mail, Scale, Heart, Home, FileText, Clock, Shield, 
  CheckCircle, Users, Briefcase, ArrowRight, ChevronRight,
  Star, Award, Building, Handshake, MapPin
} from "lucide-react";
import daveHeadshot from "@/assets/dave-headshot.jpg";
import daveHeadshot2 from "@/assets/dave-headshot-2.jpg";
import coupleWritingWill from "@/assets/couple-writing-will.png";
import logo from "@/assets/logo.png";
import expRealtyLogo2 from "@/assets/exp-realty-logo-2.png";

const services = [
  {
    icon: Scale,
    title: "Probate Real Estate",
    description: "Guidance for properties involved in probate, estate administration, and inherited real estate matters.",
    link: "/probate-estate-sales"
  },
  {
    icon: Building,
    title: "Estate Property Sales",
    description: "Strategic support for preparing, pricing, marketing, and selling real property held by an estate or trust.",
    link: "/probate-estate-sales"
  },
  {
    icon: Heart,
    title: "Senior Real Estate Transitions",
    description: "Professional help for downsizing, relocation, assisted living transitions, and family home sales.",
    link: "/senior-transitions"
  },
  {
    icon: FileText,
    title: "Valuation Insight",
    description: "Broker and state certified appraiser experience to help inform important property decisions.",
    link: "/why-valuation-matters"
  },
  {
    icon: Handshake,
    title: "Attorney & Fiduciary Collaboration",
    description: "A reliable real estate resource for attorneys, trustees, fiduciaries, and referral partners.",
    link: "/for-attorneys"
  },
  {
    icon: Home,
    title: "Property Preparation Coordination",
    description: "Help coordinating clean-out, repairs, staging, hauling, and other pre-sale services.",
    link: "/how-the-process-works"
  }
];

const trustIndicators = [
  "20+ Years of Experience",
  "Professional Real Estate Broker",
  "State Certified Appraiser",
  "Estate, Probate & Trust Guidance",
  "Senior Transition Support",
  "Trusted by Attorneys & Families"
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Review the property, timeline, parties involved, and current circumstances."
  },
  {
    step: "02",
    title: "Property Assessment",
    description: "Evaluate condition, marketability, likely buyer profile, and possible sale approaches."
  },
  {
    step: "03",
    title: "Value & Strategy Guidance",
    description: "Discuss pricing considerations, as-is versus improvement options, timing, and likely next steps."
  },
  {
    step: "04",
    title: "Preparation Coordination",
    description: "Coordinate clean-out, repairs, vendor access, staging, and sale-readiness as needed."
  },
  {
    step: "05",
    title: "Marketing & Sale Execution",
    description: "Launch with a strategic sales plan designed to attract qualified buyers and maximize exposure."
  },
  {
    step: "06",
    title: "Transaction Management",
    description: "Guide the transaction from listing through closing with consistent communication and oversight."
  }
];

const serviceAreas = [
  {
    county: "King County",
    href: "/counties/king",
    cities: "Seattle, Bellevue, Kirkland, Redmond, Renton, Kent, Federal Way & more"
  },
  {
    county: "Snohomish County",
    href: "/counties/snohomish",
    cities: "Everett, Edmonds, Lynnwood, Marysville, Lake Stevens, Mukilteo & more"
  },
  {
    county: "Pierce County",
    href: "/counties/pierce",
    cities: "Tacoma, Puyallup, Lakewood, University Place, Bonney Lake & more"
  },
  {
    county: "Kitsap County",
    href: "/counties/kitsap",
    cities: "Bremerton, Silverdale, Poulsbo, Bainbridge Island, Port Orchard & more"
  }
];

const homepageFaqs = [
  {
    question: "Who helps sell inherited homes in Washington State?",
    answer: "David Stein is a licensed real estate broker and state certified appraiser who helps families, executors, trustees, and personal representatives sell inherited homes throughout King, Snohomish, Pierce, and Kitsap Counties. He provides practical guidance on property value, preparation strategy, and market positioning.",
    link: "/faq"
  },
  {
    question: "Can a house be sold during probate in Washington?",
    answer: "In many cases, yes — but the answer depends on legal authority, estate structure, and documentation. David Stein helps clients prepare for the real estate side of probate sales by evaluating the property, understanding market value, and building a sale strategy.",
    link: "/faq"
  },
  {
    question: "What should I do first if I inherited a house?",
    answer: "Start by understanding who has legal authority, the property's condition, and whether there are title or occupancy issues. David helps clients in Western Washington evaluate inherited property with a clear, practical process.",
    link: "/faq"
  },
  {
    question: "Why does valuation expertise matter in a probate property sale?",
    answer: "Pricing mistakes can create major problems — too high and the property stalls, too low and value is lost. David's dual background as a broker and certified appraiser helps clients understand what affects value and how buyers will respond.",
    link: "/why-valuation-matters"
  },
  {
    question: "How does David Stein work with attorneys and trustees?",
    answer: "David serves as a real estate and valuation resource during important property transitions, providing experienced market perspective, practical sale planning, and clear communication that professional advisors need.",
    link: "/for-attorneys"
  }
];

const audiences = [
  "Estate planning attorneys",
  "Probate attorneys",
  "Executors",
  "Personal representatives",
  "Estate administrators",
  "Trustees",
  "Fiduciaries",
  "CPAs",
  "Financial planners",
  "Adult children helping parents transition",
  "Seniors planning a move",
  "Families selling inherited property"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "David Stein — Real Property Planning",
  "description": "Probate real estate, inherited property, trust-owned real estate, and estate sale guidance in King, Snohomish, Pierce, and Kitsap Counties, Washington.",
  "url": "https://realpropertyplanning.com",
  "telephone": "+12069003015",
  "email": "david@realpropertyplanning.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PO Box 1462",
    "addressLocality": "Woodinville",
    "addressRegion": "WA",
    "postalCode": "98072",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "King County, Washington" },
    { "@type": "AdministrativeArea", "name": "Snohomish County, Washington" },
    { "@type": "AdministrativeArea", "name": "Pierce County, Washington" },
    { "@type": "AdministrativeArea", "name": "Kitsap County, Washington" }
  ],
  "knowsAbout": [
    "Probate real estate",
    "Inherited property sales",
    "Trust-owned real estate",
    "Estate property sales",
    "Senior real estate transitions",
    "Real estate appraisal"
  ],
  "sameAs": [
    "https://www.zillow.com/profile/dstein2112"
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homepageFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate, Inherited Property & Estate Sale Guidance in Western Washington | David Stein"
        description="David Stein provides probate real estate, inherited property, trust-owned real estate, and estate sale guidance in King, Snohomish, Pierce, and Kitsap Counties. Licensed Washington real estate broker and state certified appraiser."
        jsonLd={jsonLd}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)' }}>
         <div className="container px-6 lg:px-8 pt-20">
            <div>
              {/* Logo & Headshot */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
                <img src={logo} alt="Real Property Planning Logo" className="h-[280px] sm:h-[400px] md:h-[512px] lg:h-[640px] w-auto" />
                <div className="flex flex-col items-center">
                  <img src={daveHeadshot2} alt="David Stein — Licensed Real Estate Broker and State Certified Appraiser in Washington" className="h-[180px] sm:h-[220px] md:h-[256px] lg:h-[320px] w-auto rounded-2xl object-cover shadow-lg" />
                  <div className="mt-3 flex flex-col items-center">
                    <div className="flex items-center gap-3">
                      <p className="font-serif text-lg font-semibold text-foreground">David Stein</p>
                      <img src={expRealtyLogo2} alt="eXp Realty" className="h-6 md:h-7 w-auto" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">License #113972</p>
                  </div>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-foreground font-bold leading-[1.08] mb-5 text-center">
                Probate Real Estate, Inherited Property & Estate Sale Guidance in Western Washington
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-[760px] mx-auto mb-8 text-center">
                David Stein helps attorneys, executors, trustees, and families navigate the sale of probate property, inherited homes, trust-owned real estate, and estate properties across King, Snohomish, Pierce, and Kitsap Counties.
              </p>

              <div className="flex flex-wrap justify-center gap-3.5 mb-8">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-foreground hover:bg-foreground/90 text-background font-bold px-6 rounded-xl text-base h-[52px]"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link to="/probate-estate-sales">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border bg-card text-foreground hover:bg-muted font-bold px-6 rounded-xl text-base h-[52px]"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {["Probate Property", "Inherited Homes", "Trust Real Estate", "Estate Sales"].map((tag) => (
                  <span 
                    key={tag}
                    className="bg-card border border-border rounded-full px-4 py-2.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Card below */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-3xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <h2 className="font-serif text-[28px] font-bold text-foreground mb-5">
                  A professional resource during complex property transitions
                </h2>
                <div className="grid gap-3.5">
                  {[
                    "Guidance for executors and personal representatives",
                    "Coordination with attorneys and trusted advisors",
                    "Property valuation, preparation, and sale strategy",
                    "Discreet, compassionate, and experienced representation"
                  ].map((item, i) => (
                    <div key={i} className="px-4 py-3.5 bg-secondary rounded-xl text-muted-foreground text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-ivory border-y border-border py-6">
        <div className="container px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Experienced Guidance for Probate, Estate & Trust Property Decisions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Real estate tied to estate settlement, probate, trust administration, or senior housing transitions requires more than a typical home sale approach. These situations often involve legal timelines, multiple stakeholders, property condition questions, and emotionally difficult decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                David Stein helps bring clarity and structure to the real estate side of the process — serving as a capable, calm, and responsive professional who can help coordinate the next steps with care and discretion.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/how-the-process-works">
                  <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                    How the Process Works <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/executors">
                  <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                    Guide for Executors <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                <img
                  src={coupleWritingWill}
                  alt="A couple writing a will together, planning their estate"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-muted-foreground text-sm italic mt-4 text-center">
                A will is essential to ensure your assets are distributed according to your wishes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Specialized Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
              Probate, Estate & Senior Real Estate Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <service.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/probate-estate-sales">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                Explore All Services
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              Serving King, Snohomish, Pierce & Kitsap Counties
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              Local market expertise across four Western Washington counties for probate, estate, and trust property transitions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Link key={index} to={area.href} className="group">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <h3 className="font-serif text-xl text-primary-foreground font-semibold group-hover:text-gold transition-colors">
                      {area.county}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/60 text-sm">
                    {area.cities}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/counties">
              <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View All Cities We Serve
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
                Clients & Partners
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Who David Stein Works With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                David Stein serves clients and referral partners who need experienced real estate guidance during complex property transitions across Western Washington.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {audiences.map((audience, index) => (
                  <div key={index} className="flex items-center gap-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-foreground text-sm">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-lg p-10 lg:p-12">
              <Award className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                Why Professionals Refer David Stein
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm">
                Estate-related real estate decisions require careful judgment, discretion, and coordination. David brings a steady, experienced approach to each matter.
              </p>
              <ul className="space-y-3">
                {[
                  "Over 20 years of relevant experience",
                  "Professional real estate broker",
                  "State certified appraiser",
                  "High-trust communication style",
                  "Practical guidance from consultation through closing"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-primary-foreground/90 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/attorney-referral">
                  <Button size="sm" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                    Referral Resource <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              A Clear Process During a Complex Time
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border">
                <span className="text-gold font-serif text-3xl font-semibold">{item.step}</span>
                <h3 className="font-serif text-lg text-foreground font-semibold mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/how-the-process-works">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                Learn More About the Process
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Attorney Feature */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              A Real Estate Resource Attorneys and Fiduciaries Can Refer With Confidence
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Attorneys, fiduciaries, and trustees need a real estate professional who understands communication, timelines, discretion, and sound judgment. David works collaboratively with professional advisors to help manage the real estate component of estate and senior transitions.
            </p>
            <Link to="/for-attorneys">
              <Button className="bg-gold hover:bg-gold-light text-navy font-semibold">
                For Attorneys & Fiduciaries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview — Natural-Language AI-Style Questions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
              Questions People Ask About Probate & Inherited Property
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-5">
            {homepageFaqs.map((faq, index) => (
              <Link key={index} to={faq.link} className="block group">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-gold/30 transition-colors">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2 group-hover:text-gold transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/faq">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-primary-foreground">
                View All FAQs
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Need Guidance on a Probate, Estate, Trust, or Senior Property Matter?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Start with a confidential conversation. David Stein provides experienced, practical guidance tailored to the property, the circumstances, and the people involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold px-8 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Speak With David Stein
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-navy text-navy hover:bg-navy hover:text-primary-foreground w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact David Stein
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default Index;
