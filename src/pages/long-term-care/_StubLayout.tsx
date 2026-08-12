import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";

interface Props {
  title: string;
}

const StubLayout = ({ title }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${title} | Real Property Planning`}
        description={`${title} — coming soon. A long-term care resource from Real Property Planning.`}
      />
      <Header />
      <main id="main-content">
<HeroBandTitle as="h1">{title}</HeroBandTitle>

        <section style={{ backgroundColor: "hsl(40 20% 98%)", padding: "48px 24px 64px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.8, color: "hsl(220 25% 22%)" }}>
              This article is coming soon.
            </p>
          </div>
        </section>

        <BackToLongTermCare />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default StubLayout;
