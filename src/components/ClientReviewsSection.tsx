import { Quote, Star, ExternalLink } from "lucide-react";

interface ClientReview {
  text: string;
  highlights?: string[];
  attribution?: string;
  contextTag: string;
}

interface ClientReviewsSectionProps {
  reviews: ClientReview[];
  heading?: string;
  subheading?: string;
  background?: "bg-background" | "bg-secondary" | "bg-cream";
  showZillowLink?: boolean;
}

const highlightText = (text: string, highlights?: string[]) => {
  if (!highlights || highlights.length === 0) return text;
  let result = text;
  highlights.forEach((phrase) => {
    result = result.replace(
      new RegExp(`(${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"),
      "**$1**"
    );
  });
  const parts = result.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const ClientReviewsSection = ({
  reviews,
  heading = "Client Reviews & Experiences",
  subheading = "Real feedback from clients and professionals who have worked with our team during probate, estate, and senior transition situations.",
  background = "bg-secondary",
  showZillowLink = true,
}: ClientReviewsSectionProps) => (
  <section className={`py-16 lg:py-24 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <p className="section-eyebrow">Reviews & Experiences</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="card-3d p-6 md:p-7 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-gold/15 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review text with highlights */}
              <p className="text-foreground/90 text-[15px] leading-[1.8] italic mb-5 pr-6 flex-1">
                "{highlightText(review.text, review.highlights)}"
              </p>

              {/* Footer */}
              <div className="border-t border-border pt-3 mt-auto">
                {review.attribution && (
                  <p className="text-muted-foreground text-sm font-medium mb-1.5">
                    — {review.attribution}
                  </p>
                )}
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 rounded-full px-2.5 py-0.5">
                  {review.contextTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {showZillowLink && (
          <div className="text-center mt-8">
            <a
              href="https://www.zillow.com/profile/dstein2112#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-accent hover:text-gold underline underline-offset-4 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
              See more reviews on Zillow →
            </a>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default ClientReviewsSection;
