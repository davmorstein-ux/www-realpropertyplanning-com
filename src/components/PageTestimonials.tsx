import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  attribution: string;
  context?: string;
}

interface PageTestimonialsProps {
  testimonials: Testimonial[];
  heading?: string;
  background?: "bg-background" | "bg-secondary";
}

const PageTestimonials = ({
  testimonials,
  heading = "What Clients Are Saying",
  background = "bg-secondary",
}: PageTestimonialsProps) => (
  <section className={`py-16 lg:py-24 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-10">
          {heading}
        </h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 md:p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold/15 absolute top-6 right-6 md:top-8 md:right-8" />
              <p className="text-foreground text-lg md:text-[19px] leading-relaxed italic mb-5 pr-8">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.attribution}</p>
                {t.context && (
                  <p className="text-muted-foreground text-sm mt-0.5">{t.context}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PageTestimonials;
