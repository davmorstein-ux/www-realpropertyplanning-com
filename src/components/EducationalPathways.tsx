import { Link } from "react-router-dom";
import iconBookOpen3d from "@/assets/icons/icon-book-open-3d.png";
import iconArrowRight3d from "@/assets/icons/icon-arrow-right-3d.png";

interface Pathway {
  title: string;
  description: string;
  href: string;
}

interface EducationalPathwaysProps {
  heading?: string;
  eyebrow?: string;
  pathways?: Pathway[];
  background?: "bg-background" | "bg-secondary" | "bg-warm-bg";
}

const defaultPathways: Pathway[] = [
  {
    title: "How Does Probate Real Estate Work in Washington?",
    description: "An overview of the probate sale process, court requirements, and what executors and attorneys need to know.",
    href: "/guides/how-probate-real-estate-works",
  },
  {
    title: "What Should an Executor Do Before Selling an Inherited Home?",
    description: "Practical first steps for executors and personal representatives — from securing the property to understanding value.",
    href: "/guides/what-executors-should-do",
  },
  {
    title: "What Is the Difference Between an Appraisal and a CMA?",
    description: "Why the distinction matters for estate property, probate sales, and trust-related real estate decisions.",
    href: "/guides/appraisal-vs-cma",
  },
  {
    title: "How Do Senior Transition Sales Differ From Ordinary Home Sales?",
    description: "What families should expect when helping a parent or loved one sell a longtime home.",
    href: "/guides/senior-transition-differences",
  },
  {
    title: "How Can an Out-of-State Family Manage a Washington Property Sale?",
    description: "Guidance for executors, trustees, and family members coordinating a sale from a distance.",
    href: "/guides/out-of-state-families",
  },
  {
    title: "What to Do With an Inherited House in Washington State",
    description: "Options, decision factors, and practical guidance when you inherit property in Washington.",
    href: "/guides/inherited-house-washington",
  },
];

const EducationalPathways = ({
  heading = "Helpful Guides & Resources",
  eyebrow = "Learn More",
  pathways = defaultPathways,
  background = "bg-warm-bg",
}: EducationalPathwaysProps) => (
  <section className={`py-16 lg:py-24 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are the questions that come up most often — from executors trying to understand the process, families weighing their options, and professionals looking for reliable information.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pathways.map((p, i) => (
            <Link
              key={i}
              to={p.href}
              className="card-3d group block p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <img src={iconBookOpen3d} alt="" aria-hidden="true" className="w-7 h-7 object-contain shrink-0 mt-0.5" loading="lazy" />
                <h3 className="font-serif text-base text-foreground font-semibold leading-snug group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 pl-10">
                {p.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors pl-10">
                Read more
                <img src={iconArrowRight3d} alt="" aria-hidden="true" className="w-4 h-4 ml-1.5 object-contain group-hover:translate-x-1 transition-transform" loading="lazy" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationalPathways;
