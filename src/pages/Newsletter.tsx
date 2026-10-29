import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

/**
 * /newsletter (Oct 16, 2026): both newsletters on one page.
 *
 * Before this the general signup sat on one page out of 170+ and nobody could
 * find it. This page is the short address for business cards, email
 * signatures and outreach, and it is linked from the footer and both the
 * Guides and AFH Club menus. The footer signup is hidden here so the page
 * does not carry three forms.
 *
 * Two lists, kept separate on purpose: families (inherited homes, probate,
 * moving a parent) and adult family home buyers, owners and investors want
 * different email. #afh jumps to the AFH section. The list each form joins is
 * set explicitly; the edge function maps it to a MailerLite group.
 *
 * Promises stay modest: "occasional", no frequency, nothing the site does not
 * already produce. A promise that is missed reads as abandonment.
 *
 * Class names avoid "card", "tile", "btn" and "cta" (sitewide substring rules
 * in index.css); spacing on p/h1/h2 is set with !important because index.css
 * overrides inline margins on every p and heading.
 */

const NAVY = "#1B3A6B";
const GREEN = "#0a5648";
const INK = "#141210";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const PAGE_CSS = `
  .rpp-nl { font-family: ${FONT}; color: ${INK}; }
  .rpp-nl-wrap { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
  .rpp-nl h1.rpp-nl-h1 { font-size: clamp(30px, 4.2vw, 44px) !important; line-height: 1.15 !important; margin: 0 0 12px !important; font-weight: 700; }
  .rpp-nl h2.rpp-nl-h2 { font-size: clamp(24px, 2.8vw, 32px) !important; line-height: 1.25 !important; margin: 0 0 10px !important; font-weight: 700; }
  .rpp-nl p.rpp-nl-p { font-size: 18px !important; line-height: 1.65 !important; margin: 0 0 18px !important; max-width: 720px; }
  .rpp-nl p.rpp-nl-who { font-size: 18px !important; line-height: 1.5 !important; font-weight: 700; margin: 0 0 8px !important; }
  .rpp-nl ul.rpp-nl-list { margin: 0 0 8px !important; padding-left: 24px !important; max-width: 720px; list-style: disc outside !important; }
  .rpp-nl ul.rpp-nl-list li { display: list-item !important; font-size: 18px; line-height: 1.6; margin: 0 0 6px; }
  .rpp-nl .rpp-nl-section { border-top: 1px solid #e5e1da; }
  .rpp-nl .rpp-nl-section .rpp-news.rpp-news { margin: 24px 0 0; max-width: 680px; }
  html body main a.rpp-nl-jump.rpp-nl-jump.rpp-nl-jump { display: inline-block; font-size: 18px !important; font-weight: 700; color: ${GREEN} !important; text-decoration: underline !important; text-underline-offset: 4px; }
`;

const Newsletter = () => (
  <>
    <SEOHead
      title="Newsletters: Washington State Families and AFH Club | Real Property Planning"
      description="Two free, occasional newsletters: one for Washington State (WA) families dealing with inherited homes, probate, senior moves and the cost of care, and one for adult family home buyers, owners and investors."
      canonical="https://realpropertyplanning.com/newsletter"
    />
    <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
    <Header />
    <main id="main-content" className="rpp-nl">
      <div style={{ background: "#faf8f4", borderBottom: `3px solid ${NAVY}` }}>
        <div className="rpp-nl-wrap" style={{ paddingTop: 44, paddingBottom: 34 }}>
          <h1 className="rpp-nl-h1">Newsletters</h1>
          <p className="rpp-nl-p">
            There are two, because they are written for different people. Sign up for one or both. Each is free and
            occasional, you confirm your address before anything is sent, and you can unsubscribe at any time.
          </p>
          <a href="#afh" className="rpp-nl-jump">Skip to the AFH Club newsletter</a>
        </div>
      </div>

      <section className="rpp-nl-section" aria-labelledby="nl-family" style={{ background: "#ffffff" }}>
        <div className="rpp-nl-wrap">
          <h2 className="rpp-nl-h2" id="nl-family" style={{ color: NAVY }}>For Washington families</h2>
          <p className="rpp-nl-who">For anyone handling an inherited home, an estate, or a parent's move into care.</p>
          <ul className="rpp-nl-list">
            <li>New guides and calculators as they are published</li>
            <li>Changes to what care costs in Washington</li>
            <li>Plain answers to the questions families ask most about probate, inherited property and senior moves</li>
          </ul>
          <NewsletterSignup
            list="family"
            source="newsletter-page:family"
            checklist
            copy={{
              heading: "Sign up and get the free checklist",
              body: "The 7-step checklist for Washington families arrives as soon as you sign up, then occasional plain-English notes. No sales pressure.",
              cta: "Send me the checklist",
            }}
          />
        </div>
      </section>

      <section id="afh" className="rpp-nl-section" aria-labelledby="nl-afh" style={{ background: "#faf8f4", scrollMarginTop: "calc(var(--header-height, 120px) + 12px)" }}>
        <div className="rpp-nl-wrap">
          <h2 className="rpp-nl-h2" id="nl-afh" style={{ color: GREEN }}>AFH Club: for adult family home buyers, owners and investors</h2>
          <p className="rpp-nl-who">For people buying, running, selling or investing in an adult family home in Washington.</p>
          <ul className="rpp-nl-list">
            <li>New adult family homes and businesses for sale, and recent sales</li>
            <li>DSHS rate and rule changes that affect owners and buyers</li>
            <li>New editions of the Washington State AFH Market Report and new tools</li>
          </ul>
          <NewsletterSignup
            list="afh"
            source="newsletter-page:afh"
            copy={{
              heading: "Sign up for the AFH Club newsletter",
              body: "New listings, sold prices and DSHS changes, written for operators and buyers rather than families. Occasional.",
              cta: "Subscribe to AFH Club",
            }}
          />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Newsletter;
