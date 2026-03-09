import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-gold font-medium tracking-wider uppercase mb-3 text-sm">
            Client Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Read verified reviews from families, attorneys, and executors I've had the privilege of helping.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          
          <p className="text-foreground text-lg mb-6 text-center max-w-xl">
            See what clients are saying about working with David Stein on their probate and estate property transactions.
          </p>
          
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
              Read Reviews on Zillow
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
