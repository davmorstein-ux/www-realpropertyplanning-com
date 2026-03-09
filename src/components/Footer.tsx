const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-serif text-xl text-primary-foreground font-medium mb-4 block">
              Puget Sound <span className="text-gold">Probate</span> Realty
            </span>
            <p className="text-primary-foreground/60 text-sm">
              The trusted authority in probate and estate real estate for the greater Puget Sound region.
            </p>
          </div>
          
          <div>
            <h4 className="text-primary-foreground font-medium mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>King County</li>
              <li>Snohomish County</li>
              <li>Pierce County</li>
              <li>Kitsap County</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-primary-foreground font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>(206) 555-0123</li>
              <li>expert@pugetsoundprobate.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} Puget Sound Probate Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
