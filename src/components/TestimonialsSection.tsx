import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";

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
  {
    text: "David's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. He made a complicated situation feel manageable.",
    label: "Professional Referral",
    situation: "Probate property sale coordination",
  },
];

const verifiedReviews = [
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
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
            What Clients Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-5">
            Trusted During Important Property Transitions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Clients describe working with Real Property Planning as calm, organized, and reassuring. Whether the situation involves probate, an inherited home, a trust, or a senior transition, the experience is consistently professional and well-coordinated.
          </p>
        </div>

        {/* Featured Reviews — Premium Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
          {featuredReviews.map((review, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 border border-border relative">
              <Quote className="w-10 h-10 text-gold/20 absolute top-8 right-8" />
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-[1.8] mb-6 text-[17px] italic">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{review.label}</p>
                <p className="text-muted-foreground text-sm">{review.situation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Reviews */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {verifiedReviews.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-xl p-7 border border-border relative"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">
                "{t.text}"
              </p>
              <p className="font-semibold text-foreground text-sm">— {t.name}</p>
            </div>
          ))}
        </div>

        {/* Zillow CTA */}
        <div className="text-center mb-20">
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:border-gold hover:text-gold"
          >
            <a
              href="https://www.zillow.com/profile/dstein2112#reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read More Reviews on Zillow
            </a>
          </Button>
        </div>

        {/* Review Submission Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-2 text-xs">
              Share Your Experience
            </p>
            <h3 className="font-serif text-2xl text-foreground font-semibold mb-2">
              Leave a Review
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              If Real Property Planning helped you with a property transition, your feedback is appreciated.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-foreground text-lg font-medium">
                  Thank you. Your review has been submitted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
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
                    <label className="block text-sm font-medium text-foreground mb-1.5">Role or Relationship</label>
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your Review</label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    maxLength={2000}
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7"
                >
                  Submit Review
                </Button>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  This form is for website feedback and review submissions.
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
