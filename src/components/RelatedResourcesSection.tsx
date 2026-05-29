import { Link } from "react-router-dom";

interface Resource {
  title: string;
  href: string;
}

interface RelatedResourcesSectionProps {
  resources: Resource[];
}

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";

const RelatedResourcesSection = ({ resources }: RelatedResourcesSectionProps) => (
  <section className={sectionBase + " bg-secondary"}>
    <div className={contentWrap}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
          Related Resources
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {resources.map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="article-resource-btn"
            >
              {r.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RelatedResourcesSection;
