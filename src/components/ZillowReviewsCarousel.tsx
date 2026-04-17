import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Anday", date: "3/5/2026", title: "Bought a Single Family home in 2025 in Holly, Everett, WA.", text: "Our team is an excellent person to work with and above all an expert on the field. I have enjoyed his honest and professional recommendations and he always has a room to listen and so patient, a highly recommend to work with. He has deep knowledge on history of the property, comparable market analysis and is open to any time of the days." },
  { name: "Rashmi Mishra", date: "2/13/2026", title: "Bought a Condo home in 2025 in Olympic hills, Seattle, WA.", text: "If you are reading this, it truly means you were meant to cross paths with Dave. Buying a home is such a personal journey, and having someone you can genuinely trust makes all the difference. Dave was always present, quick to respond, incredibly knowledgeable, thoughtful, resourceful and most importantly reliable. His care, patience, and dedication went far beyond expectations, and I'm deeply grateful to have had him by our side through such an important milestone." },
  { name: "Sunil K Yadav", date: "2/3/2026", title: "Bought a Condo home in 2025 in Olympic hills, Seattle, WA.", text: "Our team is extremely knowledgeable and was instrumental in helping us find the right home. Buying a home involves many complex steps and important decisions, and Our team has a deep understanding of every aspect of the process. He took the time to explain each detail clearly, answered all our questions with patience, and made sure we felt confident at every stage. His professionalism, responsiveness, and commitment truly set him apart. We felt well supported throughout the entire journey, and we highly recommend our team to anyone looking to buy a home." },
  { name: "jkassmeier", date: "2/2/2026", title: "Bought a Single Family home in 2026 in Woodinville, WA.", text: "I can't recommend Dave highly enough. From start to finish, he was kind, honest, sincere, and incredibly knowledgeable—not only about the entire home-buying process, but also about local resources and the community as a whole. Dave was always responsive, patient with my questions, and clear in his explanations, which made what could have been a stressful process feel manageable and even enjoyable. What truly sets him apart was how much he genuinely cared—not just about finding me a home, but about finding me the right home. I never felt rushed or pushed; instead, I felt supported and understood every step of the way. If you're looking for someone who is professional, trustworthy, and truly has your best interests at heart, Dave is the agent you want." },
  { name: "Remy Shriver", date: "2/1/2026", title: "Bought a Single Family home in 2025 in Bothell, WA.", text: "Our team was a fantastic person to work with. His patience and expertise made him the right fit for finding our family home. We spent the better half of a year looking for the right house, and he in no way rushed us or made us feel like we had to settle for a second rate home. We found the perfect place and he did all the work to get the deal done the way we wanted it. Highly highly highly recommend!!" },
  { name: "zuser20160825084735703", date: "1/15/2026", title: "WA 98072.", text: "I really enjoyed working with Dave on this transaction. He is enthusiastic, responsive, and genuinely dedicated to taking great care of his clients. Throughout the process, it was clear how much he cares about doing the right thing, and that level of commitment truly makes a difference. It was a pleasure collaborating with him. I appreciated his energy, professionalism, and willingness to stay engaged every step of the way. I look forward to working with him again in the near future." },
  { name: "dannylharris", date: "12/6/2024", title: "Sold a home in 2024 in Woodinville, WA.", text: "Dave did a fantastic job. He was always on top of things and always there to help with things that needed to be done. He is a very professional person and well prepared. We have sold eight houses in our 52 years and he is the best realtor we have ever had. You will not be disappointed if you use him as your agent. Dan Harris." },
  { name: "longoliza", date: "9/6/2024", title: "Bought a Single Family home in 2024 in Bothell, WA.", text: "Dave is an unbelievable agent - and that's actually not a hyperbole. He combines his deep knowledge of home construction and DIY improvements, keen ability to conduct thorough research of the market, extremely personable and very personal approach, and an uncanny level of care and understanding of other's needs, and he delivers results. No matter the outcome of your first conversation with him, I can guarantee you that you will not regret having reached out to Real Property Planning. -Jed & Elizabeth Espiritu" },
  { name: "Tinna Pamanian", date: "9/6/2024", title: "Bought a home in 2023.", text: "We had a great experience with Dave, from his ability to listen to our needs all the way through the process of purchase. He was responsive and efficient! Looking forward to working with Dave again on our business purchase." },
  { name: "bnbebee", date: "8/31/2024", title: "Bought and sold a Single Family home in 2024 in Duvall, WA.", text: "Our team helped us both buy and sell our homes. He was outstanding. He goes above and beyond for his clients. He is very knowledgeable and personable. We would highly recommend our team for any real estate needs." },
  { name: "Jacob Anderson", date: "5/31/2023", title: "Bought a Single Family home in 2023 in Bothell, WA.", text: "Dave did a fantastic job in helping my wife and I find and purchase our first home. His knowledge, insight, and experience were invaluable in the search and eventual negotiations. He was highly involved during the entire closing process and was always available to answer questions at the drop of a dime. Couldn't be happier with our experience with him!" },
  { name: "Jon Harkness", date: "2/7/2023", title: "Sold a Single Family home in 2023 in Woodinville, WA.", text: "Dave has gone above and beyond all expectations in being my selling agent. He helped find and facilitate a slew of contractors, scheduling and logistics around items necessary to get the house sold. I really cannot exaggerate the amount of time and effort that Dave put in over the last several months to help with getting everything ready, and I cannot thank him enough for his work." },
];

const ZillowReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const review = reviews[current];

  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: "hsl(220 45% 10%)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "hsl(42 55% 55%)" }}>
                Reviews from Zillow
              </span>
              <span className="text-lg">⭐</span>
              <span className="font-bold text-white text-lg">5.0</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
              What Clients Are Saying
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-10 w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white/80" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-10 w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white/80" />
            </button>

            {/* Card */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating
                  ? direction === "right"
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:p-10 text-center">
                {/* Stars */}
                <div className="flex items-center justify-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(42,55%,55%)] text-[hsl(42,55%,55%)]" />
                  ))}
                </div>

                {/* Title */}
                <p className="text-white/60 text-sm mb-4 italic">{review.title}</p>

                {/* Body */}
                <p className="text-white/90 text-base md:text-[17px] leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Attribution */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "right" : "left")}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-[hsl(42,55%,55%)]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Zillow link */}
          <div className="text-center mt-6">
            <a
              href="https://www.zillow.com/profile/dstein2112#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white/70 underline underline-offset-4 transition-colors"
            >
              See all reviews on Zillow →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZillowReviewsCarousel;
