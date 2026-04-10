import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User } from "lucide-react";

interface HelpRow {
  icon: string;
  text: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface RelatedProfession {
  title: string;
  href: string;
}

interface Professional {
  name: string;
  photo?: string;
  firm: string;
  counties: string[];
  bio: string;
  phone?: string;
  website?: string;
  email?: string;
}

interface ProfessionPageTemplateProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  subheadline?: string;
  helpHeadline: string;
  helpRows: HelpRow[];
  professionals?: Professional[];
  faqs: FAQItem[];
  relatedProfessions: RelatedProfession[];
  professionLabel: string;
}

const ProfessionPageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  subheadline = "Serving families across Western Washington",
  helpHeadline,
  helpRows,
  professionals = [],
  faqs,
  relatedProfessions,
  professionLabel,
}: ProfessionPageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={metaTitle} description={metaDescription} />
      <BreadcrumbSchema
        items={[
          { name: "Professionals", url: "/professionals" },
          { name: title, url: "" },
        ]}
      />
      <Header />

      {/* SECTION 1: Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-[2.625rem] text-primary-foreground font-semibold leading-tight mb-4">
              {title}
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              {subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What This Professional Does */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">
              {helpHeadline}
            </h2>
            <div className="space-y-6">
              {helpRows.map((row, i) => (
                <div key={i} className="flex items-start gap-5">
                  <span className="text-3xl shrink-0 leading-none mt-1">{row.icon}</span>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured Professionals */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">
              Featured Professionals
            </h2>
            {professionals.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {professionals.map((pro) => (
                  <div
                    key={pro.name}
                    className="bg-card rounded-xl border border-border shadow-sm p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {pro.photo ? (
                        <img
                          src={pro.photo}
                          alt={pro.name}
                          className="w-[100px] h-[100px] rounded-full object-cover shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-[100px] h-[100px] rounded-full bg-muted flex items-center justify-center shrink-0">
                          <User className="w-10 h-10 text-muted-foreground/50" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-xl text-foreground">
                          {pro.name}
                        </h3>
                        <p className="text-base text-muted-foreground">{pro.firm}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {pro.counties.map((c) => (
                            <span
                              key={c}
                              className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      {pro.bio}
                    </p>
                    <div className="flex flex-wrap gap-4 text-base">
                      {pro.phone && (
                        <a
                          href={`tel:${pro.phone.replace(/\D/g, "")}`}
                          className="text-gold font-medium underline underline-offset-2 hover:text-gold-dark transition-colors"
                        >
                          {pro.phone}
                        </a>
                      )}
                      {pro.website && (
                        <a
                          href={pro.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold font-medium underline underline-offset-2 hover:text-gold-dark transition-colors"
                        >
                          Website
                        </a>
                      )}
                      {pro.email && (
                        <a
                          href={`mailto:${pro.email}`}
                          className="text-gold font-medium underline underline-offset-2 hover:text-gold-dark transition-colors"
                        >
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-8 text-center">
                <p className="text-muted-foreground text-lg">
                  Featured professionals coming soon. We're building a curated list of trusted specialists in this area.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-[1.75rem] text-foreground font-semibold mb-10">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors"
                >
                  <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground text-lg leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 5: Related Professionals */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
              Families Often Also Work With
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProfessions.map((rp) => (
                <Link
                  key={rp.href}
                  to={rp.href}
                  className="bg-card rounded-xl border border-border p-5 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-lg group-hover:text-gold">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Footer CTA */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Not sure who you need? We're happy to help point you in the right direction.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Inquiry — subtle */}
      <section className="bg-muted/50">
        <div className="container px-6 lg:px-8">
          <hr className="border-border" />
          <div className="py-10 max-w-2xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-2">
              Are you a {professionLabel.toLowerCase()} serving Western Washington families?
            </p>
            <p className="text-base text-muted-foreground/70 mb-4">
              If you work with families navigating estate settlement, inherited property, or senior housing transitions, we'd like to learn more about your practice.
            </p>
            <Link
              to={`/contact?subject=Professional+Listing+Inquiry+—+${encodeURIComponent(title)}`}
              className="text-gold text-base font-medium underline underline-offset-4 hover:text-gold-dark transition-colors"
            >
              Inquire about being listed →
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ProfessionPageTemplate;
