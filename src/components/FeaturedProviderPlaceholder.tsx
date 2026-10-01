import { Link } from "react-router-dom";

/**
 * "Coming Soon" block for a professional category with nobody listed yet.
 *
 * Sept 30, 2026 (owner): these pages should just say Coming Soon. The old
 * version drew a fake profile card ("Name", "Bio will appear here",
 * "Address", "Phone"), which read as a broken listing. `seeAlso` points to
 * the page where a related professional IS featured, when there is one.
 */
interface Props {
  heading: string;
  /** Kept for existing callers; no longer used (there is no placeholder photo). */
  altLabel?: string;
  seeAlso?: { href: string; label: string };
}

const FeaturedProviderPlaceholder = ({ heading, seeAlso }: Props) => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-6 text-center">{heading}</h2>
        <div className="bg-secondary border border-border rounded-xl p-8 text-center shadow-sm">
          {!seeAlso && (
            <p className="text-foreground text-lg leading-relaxed" style={{ margin: 0 }}>
              Coming soon.
            </p>
          )}
          {seeAlso && (
            <p className="text-foreground text-lg leading-relaxed" style={{ margin: 0 }}>
              <Link to={seeAlso.href} className="text-accent hover:text-gold underline underline-offset-4 font-semibold">
                {seeAlso.label}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProviderPlaceholder;
