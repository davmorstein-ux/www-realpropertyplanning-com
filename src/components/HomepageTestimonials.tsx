import { Link } from "react-router-dom";
import { featuredTestimonials } from "@/data/testimonials";

const HomepageTestimonials = () => {
  const items = featuredTestimonials(3);
  if (items.length === 0) return null;

  return (
    <section style={{ backgroundColor: "#f5f2ec", padding: "3rem 0 3.5rem" }}>
      <style>{`
        .rpp-tm-quote.rpp-tm-quote {
          font-family: Georgia, 'Cormorant Garamond', serif;
          font-size: 17px !important;
          font-weight: 400 !important;
          line-height: 1.7 !important;
          color: #272421 !important;
          margin: 0 0 1rem !important;
        }
        .rpp-tm-credit.rpp-tm-credit {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #25597e !important;
          margin: 0 !important;
        }
        .rpp-tm-link.rpp-tm-link {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #7f1d1d;
          border-bottom: 2px solid #7f1d1d;
          padding-bottom: 2px;
          text-decoration: none !important;
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 500,
            color: "#272421",
            textAlign: "center",
            margin: "0 0 2rem",
          }}
        >
          What people have said
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {items.map((t) => (
            <div
              key={t.id}
              style={{
                background: "#ffffff",
                border: "1px solid #dfd3d4",
                borderTop: "4px solid #7f1d1d",
                borderRadius: 12,
                padding: "1.5rem 1.5rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <blockquote className="rpp-tm-quote" style={{ flex: 1 }}>
                "{t.quote}"
              </blockquote>
              <p className="rpp-tm-credit">— {t.credit}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/testimonials" className="rpp-tm-link">
            Read more →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageTestimonials;