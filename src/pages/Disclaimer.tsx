import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Disclaimer | Real Property Planning"
        description="Real Property Planning is an independent educational hub. We do not provide professional services; featured professionals are independent and not affiliates of Real Property Planning."
      />
      <BreadcrumbSchema items={[{ name: "Disclaimer", url: "/disclaimer" }]} />
      <Header />
      <main id="main-content">
        <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
                Legal
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                Disclaimer
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Real Property Planning is an educational resource only.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8 text-foreground text-[18px] md:text-[19px] leading-[1.75]">
              <p>
                This website is operated by Real Property Planning as an independent informational and educational hub. It is designed to help elderly individuals, their family members, and professionals learn about topics related to probate, estate transitions, senior housing, and related subjects.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  No Services Provided
                </h2>
                <p>
                  Real Property Planning does not provide real estate brokerage, legal, financial, tax, medical, or any other professional services through this website. The information published here is for general educational purposes only and does not constitute professional advice of any kind.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  Independent Professionals
                </h2>
                <p>
                  Professionals, companies, and organizations referenced or featured on this site are entirely independent. They are not employees, contractors, partners, members, or affiliates of Real Property Planning. Their inclusion on this site does not constitute an endorsement, recommendation, or guarantee of their services, qualifications, or conduct. You should independently verify the credentials and suitability of any professional before engaging their services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  No Professional Relationship
                </h2>
                <p>
                  Nothing on this website creates a professional relationship of any kind between you and Real Property Planning, or between you and any professional or company referenced on this site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  No Guarantees
                </h2>
                <p>
                  While Real Property Planning strives to provide accurate and up-to-date information, we make no representations or warranties of any kind regarding the completeness, accuracy, or reliability of any content on this site. Laws, regulations, and professional standards change frequently and may vary by location.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  Consult a Qualified Professional
                </h2>
                <p>
                  Always seek the advice of a qualified attorney, financial advisor, real estate professional, or other licensed expert before making decisions about your property, estate, legal matters, or housing situation.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
                  External Links
                </h2>
                <p>
                  This site may reference or link to third-party websites or resources. Real Property Planning is not responsible for the content, accuracy, or availability of any external sites.
                </p>
              </div>

              <p className="text-muted-foreground text-base pt-4 border-t border-border">
                Last updated: May 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
