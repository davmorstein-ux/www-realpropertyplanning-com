import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 600,
              color: "#272421",
              lineHeight: 1.15,
              margin: "0 0 0.9rem",
            }}
          >
            What people have said
          </h1>
          <p className="text-foreground text-lg leading-relaxed">
            Every testimonial here was submitted by a real person and published with their permission, credited the way
            they asked to be credited.
          </p>
        </div>

        {TESTIMONIALS.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-background rounded-xl p-7 border border-border relative">
                <Quote
                  className="w-8 h-8 absolute top-6 right-6"
                  style={{ color: "#7f1d1d", opacity: 0.15 }}
                  aria-hidden="true"
                />
                <blockquote className="text-foreground leading-[1.75] mb-5" style={{ fontSize: 17 }}>
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground" style={{ margin: 0 }}>
                    — {t.credit}
                  </p>
                  {t.context && (
                    <p className="text-muted-foreground" style={{ margin: "2px 0 0", fontSize: 15 }}>
                      {t.context}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mb-12">Testimonials will appear here soon.</p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="text-lg font-bold px-8 py-6">
            <Link to="/share-your-experience">Share your experience</Link>
          </Button>

          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;