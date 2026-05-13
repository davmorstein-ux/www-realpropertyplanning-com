import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/executor-trustee-hero-washington.webp";
import { articleSchema } from "@/lib/schema";

const tiles = [
  {
    title: "Your First 30 Days",
    description:
      "The immediate steps after being named executor — what to do, what to secure, and what can wait.",
    href: "/executor-responsibilities-first-steps/first-30-days",
  },
  {
    title: "Understanding Your Legal Duties",
    description:
      "What executors and trustees are actually responsible for — and what happens if things go wrong.",
    href: "/executor-responsibilities-first-steps/legal-duties",
  },
  {
    title: "What to Do With the Property",
    description:
      "The home is usually the largest asset. Here's how to handle real estate in an estate.",
    href: "/executor-responsibilities-first-steps/property-decisions",
  },
  {
    title: "Working With Attorneys & Professionals",
    description:
      "Who you need, in what order, and what to expect from each professional involved.",
    href: "/executor-responsibilities-first-steps/working-with-professionals",
  },
  {
    title: "Common Executor Mistakes",
    description:
      "The mistakes that trip people up most often — and how to avoid them.",
    href: "/executor-responsibilities-first-steps/common-mistakes",
  },
  {
    title: "When You Need Extra Help",
    description:
      "Complex estates, family conflict, out-of-state property — when to ask for more support.",
    href: "/executor-responsibilities-first-steps/when-you-need-extra-help",
  },
];

const jsonLd = articleSchema({
  headline: "Serving as Executor & Trustee",
  description:
    "Topics to explore for executors, personal representatives, and trustees navigating estate responsibilities in Washington State.",
  url: "/executor-responsibilities-first-steps",
  datePublished: "2026-05-08",
  dateModified: "2026-05-13",
  about: ["Executor responsibilities", "Probate", "Inherited property", "Estate administration"],
});

const ExecutorResponsibilitiesFirstSteps = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Serving as Executor & Trustee | Real Property Planning"
        description="A guided resource for executors, personal representatives, and trustees navigating estate responsibilities and property decisions in Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Serving as Executor & Trustee", url: "/executor-responsibilities-first-steps" }]} />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Serving as executor and trustee — guidance for Washington families"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>SERVING&nbsp; AS&nbsp; EXECUTOR&nbsp; &amp;&nbsp; TRUSTEE</HeroBandTitle>

        {/* TOPICS TO EXPLORE */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4">
                Topics to Explore
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {tiles.map((t) => (
                <Link
                  key={t.title}
                  to={t.href}
                  className="card-3d-blue block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={t.title}
                >
                  <div className="card-3d-blue__inner h-full relative">
                    <div className="card-3d-blue__face h-full">
                      <div className="flex h-full flex-col items-center text-center" style={{ padding: "28px 22px" }}>
                        <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3">
                          {t.title}
                        </h3>
                        <p className="text-foreground text-[15px] leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExecutorResponsibilitiesFirstSteps;
