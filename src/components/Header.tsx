import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <span className="font-serif text-xl md:text-2xl text-primary-foreground font-medium">
              Real Property <span className="text-gold">Planning</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Service Areas
            </a>
            <Button 
              size="sm"
              className="bg-gold hover:bg-gold-light text-primary font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2">
                Services
              </a>
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2">
                About
              </a>
              <a href="#areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2">
                Service Areas
              </a>
              <Button 
                className="bg-gold hover:bg-gold-light text-primary font-semibold w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
