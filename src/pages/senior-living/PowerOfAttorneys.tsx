import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import RelatedServices from "@/components/RelatedServices";
import DisclaimerSection from "@/components/DisclaimerSection";

const PowerOfAttorneys = () => (
  <>
    <SEOHead
      title="Power of Attorney & Senior Housing Transitions | Real Property Planning"
      description="Understanding how power of attorney authority connects to real estate decisions during senior transitions in Washington State."
      canonical="https://www.realpropertyplanning.com/senior-living/power-of-attorneys"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://www.realpropertyplanning.com" },
        { name: "Senior Living & Relocation", url: "https://www.realpropertyplanning.com/senior-living-and-relocation" },
        { name: "Power of Attorneys", url: "https://www.realpropertyplanning.com/senior-living/power-of-attorneys" },
      ]}
    />
    <Header />
    <main>
      <section className="bg-secondary py-14 md:py-20">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">Senior Living</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Power of Attorneys
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              When a loved one can no longer make decisions about their property, a Power of Attorney may be the legal tool that allows a trusted family member or agent to act on their behalf — including selling the family home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                What Is a Power of Attorney?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                A Power of Attorney (POA) is a legal document that grants one person — the "agent" or "attorney-in-fact" — the authority to act on behalf of another person (the "principal") in legal, financial, or real estate matters.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                In the context of senior transitions, a POA is often used when a parent or loved one is no longer able to manage their own affairs due to cognitive decline, illness, or incapacity. The agent may be called upon to make decisions about selling, maintaining, or transferring real property.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Types of Power of Attorney
              </h2>
              <div className="space-y-4">
                <div className="card-3d px-6 py-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">General Power of Attorney</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Grants broad authority over financial and legal matters, including real estate transactions. Becomes void if the principal becomes incapacitated.
                  </p>
                </div>
                <div className="card-3d px-6 py-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Durable Power of Attorney</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Remains in effect even if the principal becomes incapacitated. This is the most commonly used form for senior transitions and estate planning.
                  </p>
                </div>
                <div className="card-3d px-6 py-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Limited (Special) Power of Attorney</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Grants authority for a specific task or time period — such as selling a particular property or handling a single transaction.
                  </p>
                </div>
                <div className="card-3d px-6 py-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Springing Power of Attorney</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    Only takes effect when a specific condition is met, such as the principal being declared incapacitated by a physician.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                How Power of Attorney Connects to Real Estate
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                When a senior is transitioning to assisted living, memory care, or another setting, the family home often needs to be sold to fund care or simplify the estate. If the homeowner is unable to sign documents or make decisions, the agent acting under a valid POA can step in to:
              </p>
              <ul className="space-y-2 text-muted-foreground text-base leading-relaxed list-disc pl-6">
                <li>List and sell the property</li>
                <li>Sign listing agreements and closing documents</li>
                <li>Coordinate property preparation and repairs</li>
                <li>Accept or negotiate offers on behalf of the principal</li>
                <li>Work with title companies, lenders, and real estate professionals</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Important Considerations in Washington State
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  <strong className="text-foreground">Recording requirements:</strong> In Washington, a POA used for real estate transactions must typically be recorded with the county auditor's office where the property is located.
                </p>
                <p>
                  <strong className="text-foreground">Title company acceptance:</strong> Not all title companies accept every POA. It's important to verify that the document meets current legal standards and will be accepted at closing.
                </p>
                <p>
                  <strong className="text-foreground">Legal counsel:</strong> Families should always work with a qualified attorney to draft, review, or update a Power of Attorney — especially when real estate is involved.
                </p>
                <p>
                  <strong className="text-foreground">Timing matters:</strong> A POA must be executed while the principal still has mental capacity. Once incapacity has occurred without a valid POA in place, the family may need to pursue guardianship through the courts — a more costly and time-consuming process.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                How David Supports Families in These Situations
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                While I do not provide legal advice, I work closely with families and their attorneys when a property needs to be sold under POA authority. I understand the documentation requirements, the coordination involved, and the sensitivity these situations require. My role is to provide accurate property valuation, thoughtful preparation guidance, and steady communication throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <RelatedServices currentPath="/senior-living/power-of-attorneys" />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default PowerOfAttorneys;
