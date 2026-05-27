import { Link } from "react-router-dom";
import danBartelPhoto from "@/assets/providers/real-estate-lenders-dan-bartel-washington.webp";
import jeffMcGinnisPhoto from "@/assets/providers/real-estate-lenders-jeff-mcginnis-washington.webp";
import hansWestermarkPhoto from "@/assets/providers/real-estate-lenders-hans-westermark-washington.webp";

interface Lender {
  name: string;
  title: string;
  company: string;
  photo: string;
  alt: string;
}

const lenders: Lender[] = [
  {
    name: "Daniel Bartel",
    title: "Retirement Mortgage Specialist",
    company: "C2 Financial",
    photo: danBartelPhoto,
    alt: "Photo of Daniel Bartel",
  },
  {
    name: "Jeff McGinnis",
    title: "Senior Loan Officer",
    company: "CrossCountry Mortgage",
    photo: jeffMcGinnisPhoto,
    alt: "Photo of Jeff McGinnis",
  },
  {
    name: "Hans Westermark",
    title: "President & Senior Loan Officer",
    company: "Family First Mortgage",
    photo: hansWestermarkPhoto,
    alt: "Photo of Hans Westermark",
  },
];

const HomepageFeaturedLenders = () => (
  <section className="py-12 md:py-16 bg-secondary" aria-labelledby="featured-mortgage-lenders">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
          Mortgage Lending
        </p>
        <h2
          id="featured-mortgage-lenders"
          className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3"
        >
          Featured Mortgage Lenders
        </h2>
        <p className="text-foreground text-lg leading-relaxed">
          Trusted financing professionals supporting Washington families with reverse mortgages, retirement planning, and home loans.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {lenders.map((l) => (
          <Link
            key={l.name}
            to="/lenders-and-financing-specialists"
            aria-label={`${l.name}, ${l.title} at ${l.company} — Learn more`}
            className="interior-tile tile-white group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <div className="tile-white__inner h-full">
              <div className="tile-white__face h-full">
                <div className="flex h-full flex-col items-center text-center p-6">
                  <img
                    src={l.photo}
                    alt={l.alt}
                    className="w-28 h-28 rounded-full object-cover border-2 border-border shadow-sm mb-4"
                    loading="lazy"
                  />
                  <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-1">
                    {l.name}
                  </h3>
                  <p className="text-foreground text-sm mb-1">{l.title}</p>
                  <p className="text-foreground text-sm font-semibold mb-5">{l.company}</p>
                  <span className="gold-cta mt-auto">
                    Learn More
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/lenders-and-financing-specialists"
          className="inline-flex items-center gap-2 text-navy font-semibold underline-offset-4 hover:underline"
        >
          View all financing specialists →
        </Link>
      </div>
    </div>
  </section>
);

export default HomepageFeaturedLenders;
