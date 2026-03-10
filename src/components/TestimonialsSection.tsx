import { useState } from "react";
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

const featuredReviews = [
  {
    text: "David brought clarity, professionalism, and calm guidance during a very difficult property transition. His valuation perspective and market knowledge were incredibly helpful.",
    label: "Client Review",
    situation: "Estate-related property transition",
  },
  {
    text: "We appreciated David's patience, thoughtful communication, and realistic guidance throughout the sale of our family property.",
    label: "Family Review",
    situation: "Inherited home and sale preparation",
  },
];

const TestimonialsSection = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim() || rating === 0) return;
    setSubmitted(true);
    setFormData({ name: "", role: "", email: "", review: "" });
    setRating(0);
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-bold tracking-wider uppercase mb-3 text-base">
            Reviews and Feedback
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-4">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            If David Stein helped you with probate property, inherited real estate, trust-owned property, senior transitions, or another important real property decision, your feedback is appreciated.
          </p>
        </div>

        {/* Existing Verified Reviews */}
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

        {/* Featured Reviews */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {featuredReviews.map((review, i) => (
            <div key={i} className="bg-background rounded-xl p-8 border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 italic">
                "{review.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">{review.label}</p>
              <p className="text-muted-foreground text-sm">{review.situation}</p>
            </div>
          ))}
        </div>

        {/* Zillow CTA */}
        <div className="text-center mb-16">
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

        {/* Review Submission Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-xl border border-border p-8 md:p-10">
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-6">
              Leave a Review
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-foreground text-lg font-medium">
                  Thank you. Your review has been submitted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHovered(star)}
                        onMouseLeave={() => setHovered(0)}
                        className="transition p-0.5"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= (hovered || rating)
                              ? "text-gold fill-gold"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Role */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Role or Relationship
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="e.g., Executor, Family Member"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={255}
                    placeholder="name@example.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition"
                  />
                </div>

                {/* Review */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    maxLength={2000}
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7"
                >
                  Submit Review
                </Button>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  This form is for website feedback and review submissions. To publish reviews automatically, connect this section to your preferred form or database service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
