import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heidiPhoto from "@/assets/heidi-bolton-medicare-advisor-spears-agency.jpg";
import spearsLogo from "@/assets/spears-agency-logo-medicare.png";
import iconPhone3dContact from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconMapPin3dContact from "@/assets/icons/real-estate-location-pin-3d-icon-washington.webp";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
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
      canonical="https://www.realpropertyplanning.com/medicare-providers"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Medicare Providers", url: "https://www.realpropertyplanning.com/medicare-providers" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">Medicare Guidance</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              Medicare Providers in Washington State
            </h1>
            <p className="text-primary-foreground font-semibold text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3">
              Navigating Medicare can feel overwhelming. We help seniors and families in the Greater Seattle area connect
              with trusted Medicare specialists who can guide you through your options with clarity and care.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" className="w-6 h-6 mr-2" loading="lazy" />
                Talk to Our Team
              </Button>
            </Link>
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

      {/* Featured Provider — Spears Agency */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
              Featured Provider
            </p>
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
              Spears Agency — Medicare Specialists
            </h2>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm p-5 sm:p-6">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
                {/* Left: logo + headshot */}
                <div className="flex flex-col items-center shrink-0 gap-4">
                  <img
                    src={spearsLogo}
                    alt="Spears Agency logo"
                    className="w-[120px] h-auto object-contain"
                    loading="lazy"
                  />
                  <img
                    src={heidiPhoto}
                    alt="Photo of Heidi Bolton, Medicare Advisor at Spears Agency"
                    className="w-[150px] h-[150px] rounded-full object-cover border-2 border-border shadow-sm"
                    loading="lazy"
                  />
                </div>

                {/* Right: content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Agency block */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Spears Agency</h3>
                  <p className="text-foreground text-base leading-relaxed mb-5">
                    The Spears Agency is located in Monroe, WA, but we are licensed and serve clients in WA, ID, AZ, OR, &amp; NV. We are recognized in the top 5% of agencies nationwide within our carrier network because we lead with education, and offer reliable coverage solutions based on client needs.
                  </p>

                  {/* Advisor block */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Heidi Bolton — Medicare Advisor, Spears Agency
                  </h3>
                  <p className="text-foreground text-base leading-relaxed mb-4">
                    Heidi Bolton has an extensive background in Medicare where she specializes in helping individuals navigate Medicare with clarity and confidence — whether you're turning 65, retiring, losing employer coverage, reviewing your current plan, or just answering general questions about your coverage throughout the year. Medicare can feel overwhelming, but Heidi simplifies the process and gives you peace of mind about your decisions.
                  </p>
                  <p className="text-foreground text-base leading-relaxed mb-4">
                    Heidi believes strongly in doing what's right for her clients — not what's easiest or most profitable. She takes the time to truly understand your unique situation, answer your questions, and present options that make sense for your needs and budget. Her clients are treated like family, given honest advice and year-round support.
                  </p>
                  <p className="text-foreground text-base leading-relaxed mb-5">
                    Part of what makes Medicare tricky are the penalties that can happen if you don't follow Medicare's rules — rules the average person isn't aware of. This is why planning ahead matters. Heidi wants to connect with clients as they approach age 65 to make sure you're receiving accurate information and can avoid potential Medicare penalties.
                  </p>

                  {/* Contact block */}
                  <div className="space-y-2 text-base">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <img src={iconPhone3dContact} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0" loading="lazy" />
                      <a href="tel:+13608376089" className="text-accent hover:text-gold underline-offset-4 hover:underline font-semibold text-lg">(360) 837-6089</a>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="w-5 h-5 flex items-center justify-center shrink-0 text-base" aria-hidden="true">🌐</span>
                      <a href="https://spearsagencyllc.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline-offset-4 hover:underline">spearsagencyllc.com</a>
                    </div>
                    <div className="flex items-start gap-2 justify-center md:justify-start">
                      <img src={iconMapPin3dContact} alt="" aria-hidden="true" className="w-5 h-5 object-contain shrink-0 mt-0.5" loading="lazy" />
                      <span className="text-foreground">14655 Fryelands Blvd SE, Ste 123, Monroe, WA 98272</span>
                    </div>
                  </div>
                </div>
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
              Medicare specialist on your team means one less thing to worry about, and one more area where you can feel
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
                  <AccordionTrigger className="text-left text-foreground font-semibold text-base md:text-lg py-5 hover:no-underline">
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

      {/* Featured Providers */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Featured Medicare Providers
            </h2>
            <div className="bg-background border border-border rounded-lg p-10">
              <p className="text-foreground text-lg font-semibold mb-2">
                Trusted providers coming soon.
              </p>
              <p className="text-foreground text-base">
                Check back shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default MedicareProviders;
