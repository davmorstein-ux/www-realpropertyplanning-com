import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ExternalLink } from "lucide-react";
import daveHeadshot from "@/assets/dave-headshot.jpg";

const values = [
  "Professionalism",
  "Responsiveness",
  "Clear communication",
  "Sound judgment",
  "Respect for sensitive situations",
  "Practical guidance from start to finish"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              About David Stein
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              About David Stein
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Experienced, professional guidance for estate, probate, trust, and senior real estate matters
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                A Real Estate and Valuation Professional Focused on Important Property Transitions
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  David Stein is a professional real estate broker and state certified appraiser with over 20 years of experience helping people make informed property decisions during significant life transitions.
                </p>
                <p>
                  His work is focused on estate property sales, probate real estate matters, trust-related property transitions, and senior housing changes. These situations often require a careful balance of market knowledge, valuation insight, communication, discretion, and practical coordination.
                </p>
                <p>
                  David works with attorneys, fiduciaries, executors, personal representatives, trustees, seniors, and families who need experienced guidance on property value, sale timing, preparation strategy, and the process of bringing a property to market. His goal is to reduce confusion, protect value, and help clients move forward with confidence.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
                <img
                  src={daveHeadshot}
                  alt="David Stein - Professional Real Estate Broker & State Certified Appraiser"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Bio & Values */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
                Short Professional Bio
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                David Stein is a professional real estate broker and state certified appraiser with over 20 years of experience helping attorneys, executors, trustees, fiduciaries, seniors, and families coordinate, prepare, value, and sell real property related to estate, probate, trust, and senior transitions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Core Values
              </h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-base">
              Professional Affiliations
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Organizations & Memberships
            </h2>
            <ul className="space-y-6">
              {[
                {
                  name: "National Association of Realtors",
                  detail: "Member",
                  url: "https://www.nar.realtor/"
                },
                {
                  name: "Aging Life Care Association — Western Region",
                  detail: null,
                  url: "https://www.aginglifecare.org/ALCAWEB/ALCAWEB/Chapters/Western_Region_Chapter/Western_Region_Chapter_Local_Unit_Groups.aspx"
                },
                {
                  name: "National Association of Senior & Specialty Move Managers",
                  detail: "Associated with members in the Puget Sound area of Washington State",
                  url: "https://www.nasmm.org/"
                },
                {
                  name: "East King County Estate Planning Council",
                  detail: "Membership applied",
                  url: "https://www.ekcepc.org/"
                }
              ].map((org, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <div>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      {org.name}
                      <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                    {org.detail && (
                      <p className="text-muted-foreground text-sm mt-1">{org.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein is available to discuss your property matter and how he may be able to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Contact David Stein
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default About;
