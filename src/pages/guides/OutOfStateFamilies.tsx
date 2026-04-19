import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const challenges = [
  "Coordinating property access, vendor appointments, and inspections from a different time zone",
  "Making decisions about a property you may not have visited recently or ever seen in its current condition",
  "Managing cleanout of decades of personal belongings without being there to sort through them",
  "Communicating with attorneys, co-executors, beneficiaries, and vendors across distances",
  "Understanding the local market, neighborhood dynamics, and realistic buyer expectations",
  "Handling unexpected property issues — plumbing failures, security concerns, weather damage — from a distance",
];

const howWeHelp = [
  "Visit the property, take detailed photos and video, and provide an honest assessment of condition and value",
  "Coordinate cleanout crews, repair vendors, landscapers, and staging teams on your behalf",
  "Provide regular photo updates and status reports so you always know what is happening",
  "Manage the listing, marketing, showings, and negotiations without requiring you to travel",
  "Communicate with your attorney, CPA, and other stakeholders to keep everyone aligned",
  "Handle inspection responses, appraisal coordination, and closing logistics remotely",
];

const faqs = [
  { question: "Do I need to fly to Washington to sell the property?", answer: "In most cases, no. Our team handles property access, vendor coordination, preparation, marketing, and the sale process on your behalf. Many clients manage the entire process remotely through phone calls, email updates, and photo reports. If you do visit, our team can maximize that visit to cover key decisions efficiently." },
  { question: "How do I sign documents if I am not in Washington?", answer: "Washington allows remote notarization and electronic signatures for most real estate transactions. Our team works with title companies experienced in remote closings to ensure the paperwork process is smooth and convenient regardless of your location." },
  { question: "What if I need someone to manage the property before it is ready to sell?", answer: "Our team can coordinate ongoing property management needs during the estate administration period — including securing the property, maintaining insurance, managing utilities, and addressing maintenance issues as they arise." },
  { question: "Can our team help me find local attorneys or other professionals?", answer: "Yes. Our team maintains professional relationships with probate attorneys, CPAs, senior move managers, and other service providers throughout Washington State. We can provide referrals when clients need local professional support." },
];

const jsonLd = articleSchema({
  headline: "How Out-of-State Families Can Manage a Washington Property Sale",
  description: "Practical guidance for remote executors, trustees, and family members managing the sale of inherited or estate property in Washington State from a distance.",
  url: "/guides/out-of-state-families",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Out-of-state executor", "Remote property management", "Washington property sale", "Estate coordination", "Inherited property"],
});

const OutOfStateFamilies = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Out-of-State Families Can Manage a Washington Property Sale | Real Property Planning"
      description="Practical guidance for remote executors, trustees, heirs, and families managing the sale of inherited or estate property in Washington State from out of state."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Out-of-State Families", url: "/guides/out-of-state-families" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How Out-of-State Families Can Manage a Washington Property Sale
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Written for out-of-state executors, trustees, and heirs responsible for a Washington State estate property they cannot manage in person. If you have been named executor, trustee, or heir for an estate that includes property in Washington State — but you live somewhere else — you face a unique set of challenges. The property may need assessment, preparation, and sale, and you need someone on the ground you can trust to handle it.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Real Property Planning regularly works with out-of-state clients who need experienced, reliable local coordination for estate and inherited property throughout Washington State.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Makes Remote Property Sales Challenging?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Managing a property sale from a distance introduces challenges that local sellers do not face:
          </p>
          <ul className="space-y-4">
            {challenges.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How Our Team Provides Boots-on-the-Ground Support</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Our team serves as your local point of contact throughout the entire process — from first property visit through closing day:
          </p>
          <ul className="space-y-4">
            {howWeHelp.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Proof callout */}
    <section className="py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ProofCallout
            quote="Our team guided our family through a very difficult time with professionalism and genuine compassion. His valuation perspective and market knowledge were incredibly helpful."
            attribution="Estate Attorney, Seattle"
            context="Out-of-state estate coordination"
            variant="accent"
          />
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Managing a Property From Out of State?"
      body="Our team provides hands-on local coordination so you can manage the sale from wherever you are — with confidence and clear communication."
      buttonText="Schedule a Conversation"
      microcopy="No pressure. Just practical guidance for your situation."
    />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Should You Do First?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If you are an out-of-state executor, trustee, or family member responsible for Washington property, the best first step is a phone conversation. Our team can learn about your situation, answer initial questions, and outline what needs to happen — often before you need to make any firm decisions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From there, our team visits the property, provides a detailed condition report with photos, and develops a realistic plan for preparation and sale. You stay informed at every step without needing to manage the details yourself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn more about the full <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">sale process from consultation to closing</Link>, or explore guidance specifically for <Link to="/executors" className="text-accent hover:text-gold underline underline-offset-4">executors and personal representatives</Link>.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/what-executors-should-do" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What Executors Should Do First</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/inherited-house-washington" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">What to Do With an Inherited House</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/guides/how-probate-real-estate-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How Probate Sales Work</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Out-of-State Property FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "What Executors Should Do First", description: "A practical guide to the first 30 days of managing estate property.", href: "/guides/what-executors-should-do" },
        { title: "How Probate Real Estate Works", description: "Understand the legal process and key decisions for selling property through probate.", href: "/guides/how-probate-real-estate-works" },
        { title: "Appraisal vs. CMA: Which Do You Need?", description: "When a formal appraisal is required versus a comparative market analysis.", href: "/guides/appraisal-vs-cma" },
      ]}
    />

    <RelatedServices currentPath="/guides/out-of-state-families" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">Need Local Help With a Washington Property?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">Our team provides hands-on local coordination and clear communication — no matter where you are.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Conversation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default OutOfStateFamilies;
