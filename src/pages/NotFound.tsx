import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Page Not Found | Real Property Planning"
        description="The page you're looking for doesn't exist. Return to the homepage or browse our guides and resources."
      />
      <Header />
      <main id="main-content" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-base">
              Page Not Found
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground font-semibold leading-tight mb-6">
              We couldn't find that page
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              The page you're looking for may have been moved, renamed, or no longer exists. 
              Use the links below to get back on track.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/">
                <Button variant="navy3d" size="lg">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Homepage
                </Button>
              </Link>
              <Link to="/guides-and-resources">
                <Button variant="outline3d" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Guides &amp; Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
