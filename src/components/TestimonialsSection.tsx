import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Theron",
    text: "Dave was extremely helpful in the purchase of our new house. He was always available for whenever your time schedule worked. I would recommend Dave to anyone buying or selling.",
  },
  {
    name: "Darrien",
    text: "I had an awesome experience with Dave and his team! We were first time home buyers so we really enjoyed that they really had our back, especially when things got a bit tricky. Super grateful for his help throughout our journey.",
  },
  {
    name: "Cameron",
    text: "Dave did an outstanding job helping me with the purchase of my property. Very knowledgeable and very involved in all aspects of the purchasing process. Very friendly and always gave great advice.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-bold tracking-wider uppercase mb-3 text-base">
            Client Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-4">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Read verified reviews from families and clients I've had the privilege of helping.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-8 shadow-sm border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="font-semibold text-foreground">— {t.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-navy-dark text-primary-foreground font-semibold"
          >
            <a
              href="https://www.zillow.com/profile/dstein2112#reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Read More Reviews on Zillow
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
