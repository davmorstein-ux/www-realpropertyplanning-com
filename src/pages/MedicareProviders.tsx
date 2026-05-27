import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heidiPhoto from "@/assets/heidi-bolton-medicare-advisor-spears-agency.webp";
import spearsLogo from "@/assets/spears-agency-logo-medicare.webp";

import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToProfessionalsButton from "@/components/BackToProfessionalsButton";
import HeroBandTitle from "@/components/HeroBandTitle";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

interface Provider {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
  href: string;
  specialty: string;
  logo?: string;
  logoAlt?: string;
}

const providers: Provider[] = [
  {
    name: "Heidi Bolton",
    title: "Medicare Advisor",
    company: "Spears Agency",
    photo: heidiPhoto,
    alt: "Photo of Heidi Bolton, Medicare Advisor at Spears Agency",
    href: "https://spearsagencyllc.com",
    specialty: "Medicare planning and coverage guidance for individuals turning 65, retiring, or reviewing existing coverage",
    logo: spearsLogo,
    logoAlt: "Spears Agency logo",
  },
];


const faqs = [
  {
    q: "What is the difference between Medicare and Medicaid?",
    a: "Medicare is a federal health insurance program primarily for people age 65 and older, regardless of income. Medicaid is a joint federal and state program that helps cover healthcare costs for people with limited income and resources. Some people qualify for both programs simultaneously — known as 'dual eligibility' — which can provide more comprehensive coverage.",
  },
  {
    q: "When should I enroll in Medicare?",
    a: "Most people become eligible for Medicare at age 65. Your Initial Enrollment Period begins three months before the month you turn 65 and extends three months after. Missing this window can result in late enrollment penalties that increase your premiums permanently. If you are still working and have employer coverage, special rules may apply — a Medicare specialist can help you navigate the timing.",
  },
  {
    q: "What does Medicare cover in Washington State?",
    a: "Medicare Part A covers hospital stays, skilled nursing facility care, hospice, and some home health services. Part B covers doctor visits, outpatient care, preventive services, and medical equipment. Washington State residents may also access additional benefits through Medicare Advantage (Part C) plans offered by private insurers, which often include vision, dental, and hearing coverage.",
  },
  {
    q: "Can I change my Medicare plan?",
    a: "Yes. During the Annual Enrollment Period (October 15 – December 7 each year), you can switch between Original Medicare and Medicare Advantage, change your Part D prescription drug plan, or enroll in a new Medicare Advantage plan. There is also a Medicare Advantage Open Enrollment Period from January 1 – March 31 where you can switch Advantage plans or return to Original Medicare.",
  },
  {
    q: "What is a Medicare Advantage plan?",
    a: "Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. These plans include all Part A and Part B benefits and often add extras like dental, vision, hearing, and fitness programs. Many also include prescription drug coverage. Plans vary by region, so the options available in Washington State may differ from other states.",
  },
  {
    q: "How do I find a Medicare specialist near me?",
    a: "A licensed Medicare specialist or insurance broker can help you compare plans, understand costs, and enroll in the right coverage for your situation. Look for someone who is licensed in Washington State, represents multiple carriers, and has experience working with seniors in transition. We are building a directory of trusted Medicare providers across Washington — check back soon.",
  },
  {
    q: "Does Medicare cover senior living or memory care facilities?",
    a: "Medicare does not cover long-term custodial care in assisted living or memory care facilities. However, it may cover short-term skilled nursing care (up to 100 days) following a qualifying hospital stay. For long-term care, families often explore Medicaid, long-term care insurance, or private pay options. A Medicare specialist can help clarify what is and is not covered in your specific situation.",
  },
];

const MedicareProviders = () => (
  <>
    <SEOHead
      title="Medicare Providers in Washington State | Real Property Planning"
      description="Connect with trusted Medicare specialists in Washington State. Learn about Medicare Parts A, B, C, and D, enrollment timing, and how Medicare planning fits into senior life transitions."
      canonical="https://realpropertyplanning.com/medicare-providers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Medicare Providers", url: "https://realpropertyplanning.com/medicare-providers" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <HeroBandTitle>Medicare Providers in Washington State</HeroBandTitle>
      <section className="py-10 md:py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed mb-6">
              Navigating Medicare can feel overwhelming. We help seniors and families in the Greater Seattle area connect
              with trusted Medicare specialists who can guide you through your options with clarity and care.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" className="w-6 h-6 mr-2" loading="lazy" />
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Medicare Providers */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {providers.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name}, ${p.title} at ${p.company} — Learn more`}
                  className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="tile-white__inner h-full">
                    <div className="tile-white__face h-full">
                      <div className="flex h-full flex-col items-center text-center p-6">
                        <img
                          src={p.photo}
                          alt={p.alt}
                          className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                          loading="lazy"
                        />
                        <h2 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                          {p.name}
                        </h2>
                        <p className="text-foreground text-sm mb-1">{p.title}</p>
                        <p className="text-foreground text-sm font-semibold mb-3">{p.company}</p>
                        {p.logo && (
                          <img
                            src={p.logo}
                            alt={p.logoAlt || `${p.company} logo`}
                            className="h-12 w-auto max-w-[180px] object-contain mb-4"
                            loading="lazy"
                          />
                        )}
                        <p className="text-muted-foreground text-sm italic mb-5">{p.specialty}</p>

                        <span className="gold-cta mt-auto">
                          Learn More
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Is Medicare */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Is Medicare?
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Medicare is the federal health insurance program for Americans age 65 and older, as well as certain younger
              people with disabilities. It is divided into four parts, each covering different aspects of healthcare:
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Part A — Hospital Insurance</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Covers inpatient hospital stays, skilled nursing facility care, hospice care, and some home health
                  services. Most people do not pay a premium for Part A if they or their spouse paid Medicare taxes while
                  working.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Part B — Medical Insurance</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Covers doctor visits, outpatient care, preventive services, medical equipment, and some home health
                  services. Part B requires a monthly premium, which is income-based.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Part C — Medicare Advantage</h3>
                <p className="text-foreground text-base leading-relaxed">
                  An alternative to Original Medicare offered through private insurers. These plans bundle Part A, Part B,
                  and often Part D together, frequently adding dental, vision, and hearing benefits. Plan availability and
                  costs vary by county in Washington State.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Part D — Prescription Drug Coverage</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Covers prescription medications through private insurance plans approved by Medicare. Each plan has its
                  own list of covered drugs (formulary) and cost structure. Enrolling on time is important — late enrollment
                  can result in permanent premium penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Medicare & Life Transitions */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Medicare and Life Transitions
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Major life changes often bring Medicare decisions to the forefront. Whether a loved one is moving into senior
              living, recovering from surgery, managing an estate after a loss, or transitioning from employer coverage to
              retirement, the right Medicare plan can make a meaningful difference in both care quality and cost.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              During these transitions, families are often juggling multiple responsibilities at once — coordinating with
              attorneys, managing property, supporting aging parents, and navigating unfamiliar systems. Having a trusted
              Medicare specialist on yDavid Stein means one less thing to worry about, and one more area where you can feel
              confident the right decisions are being made.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              We believe Medicare planning belongs alongside the other essential services families need during times of
              change — legal guidance, financial planning, real estate support, and senior care coordination. That is why we
              are building a network of trusted Medicare providers who understand the unique needs of seniors and families in
              Washington State.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6 bg-secondary"
                >
                  <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5" style={{ fontSize: '20px', fontWeight: '700' }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
      <BackToProfessionalsButton />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default MedicareProviders;
