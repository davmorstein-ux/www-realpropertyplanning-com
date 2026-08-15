
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";

/**
 * Privacy policy.
 *
 * DRAFTED FROM A CODE AUDIT, NOT FROM A TEMPLATE. Every disclosure below
 * corresponds to something the site actually does as of 2026-08-13:
 *
 *   Google Analytics 4      index.html, gtag G-0X2GPKCW65 — loads on every
 *                           page, before any consent step
 *   Google Fonts            index.html stylesheet link — Google receives the
 *                           visitor's IP on every page load
 *   Contact form            Contact.tsx — name, email, phone, message, sent
 *                           via the send-contact-email Supabase edge function
 *   Testimonials            ShareYourExperience.tsx — same edge function
 *   Cloudflare Turnstile    bot check on both forms
 *   Supabase                edge functions and client; client is configured
 *                           with storage: localStorage
 *   YouTube                 ProviderVideoModal.tsx — youtube-nocookie.com,
 *                           the privacy-preserving variant, loaded only when
 *                           a reader opens a video
 *   sessionStorage          main.tsx — a single "rpp-chunk-reloaded" flag for
 *                           recovering from a failed chunk load. Not tracking.
 *
 * IF YOU CHANGE WHAT THE SITE COLLECTS, CHANGE THIS PAGE. A policy that
 * describes the wrong thing is worse than no policy: it is a written statement
 * that turns out to be inaccurate.
 *
 * REVIEW STATUS: drafted, NOT reviewed by counsel. Washington's My Health My
 * Data Act is drawn broadly enough that a site where people enquire about
 * dementia care and nursing homes may fall within it, and that act carries a
 * private right of action. This page is a good-faith, accurate description of
 * current practice — it is not a substitute for a lawyer reading it.
 */

const UPDATED = "August 13, 2026";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Real Property Planning"
        description="How Real Property Planning handles information collected through this website, including contact forms, analytics, and third-party services."
        canonical="https://realpropertyplanning.com/privacy"
        /* Deliberately not indexed away — a findable privacy policy is part of
           the point. Linked from the footer and from every form. */
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">Privacy Policy</HeroBandTitle>

        <section className="pt-6 md:pt-8 pb-12 md:pb-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto rpp-privacy">
              <p className="rpp-privacy-updated">Last updated: {UPDATED}</p>

              <p>
                Real Property Planning is an educational resource. This page explains what
                information this website collects, why, and what happens to it. It is written to
                be read, not to be skimmed past — if anything here is unclear, please ask.
              </p>

              <h2>The short version</h2>
              <p>
                We do not sell your information, and we do not share it with anyone for their own
                marketing. Most visitors never give us any personal information at all. If you fill
                in a form, we use what you send to reply to you.
              </p>

              <h2>Information you give us</h2>
              <p>
                <strong>Contact form.</strong> If you use the contact form, we collect your name,
                email address, phone number, and your message. This is sent to us by email so that
                we can respond. We keep this correspondence so we have a record of what was
                discussed.
              </p>
              <p>
                <strong>Testimonials.</strong> If you submit a testimonial, we collect what you
                provide in that form. Submitting a testimonial does not publish it — nothing appears
                on the site unless it is reviewed first.
              </p>
              <p>
                <strong>Newsletter.</strong> If you subscribe, we collect your email address and
                which page you subscribed from. Subscribing requires confirming through a link we
                email you. Every message we send includes an unsubscribe link, and we act on
                unsubscribe requests promptly.
              </p>

              <h2>Information collected automatically</h2>
              <p>
                <strong>Analytics.</strong> This site uses Google Analytics to understand which
                pages people find useful. It records things like which pages were viewed, roughly
                where in the world the visitor is, and what kind of device was used. It sets cookies
                in your browser to do this. We use this to improve the site, not to identify
                individuals.
              </p>
              <p>
                <strong>Fonts.</strong> The typefaces on this site are served by Google Fonts. Your
                browser requests them from Google, which means Google receives your IP address when
                a page loads.
              </p>
              <p>
                <strong>Spam prevention.</strong> Our forms use Cloudflare Turnstile to tell people
                apart from automated bots. It examines browser characteristics to make that
                judgement.
              </p>
              <p>
                <strong>Video.</strong> Some pages offer videos. These are embedded through
                YouTube's privacy-enhanced mode, which does not set tracking cookies unless you
                actually play the video.
              </p>

              <h2>What we do not do</h2>
              <ul>
                <li>We do not sell your personal information.</li>
                <li>We do not share your information with other businesses for their marketing.</li>
                <li>
                  We do not use what you tell us in a form to target advertising to you.
                </li>
              </ul>
              <p>
                Real Property Planning lists professionals as an educational resource. If you decide
                to contact one of them, that is your choice and you are giving your information to
                them directly — we do not pass it along to them on your behalf.
              </p>

              <h2>Health-related information</h2>
              <p>
                Many people come to this site while making decisions about care for themselves or a
                family member. If you tell us about a health condition or care need in a form, we
                treat that as sensitive. We use it only to respond to you. We do not
                sell it, and we do not use it for advertising. You are never required to share
                health details to use this site, and we would encourage you to share only what is
                necessary.
              </p>

              <h2>Your choices</h2>
              <p>
                You can ask us what information we hold about you, ask us to correct it, or ask us
                to delete it. You can unsubscribe from the newsletter at any time using the link in
                any message. Most browsers let you block or delete cookies, and browser-level "Do
                Not Track" or Global Privacy Control signals can limit analytics.
              </p>
              <p>
                Washington residents have specific rights regarding consumer health data under
                state law, including the right to withdraw consent and to have such data deleted.
                To exercise any of these, contact us using the details below.
              </p>

              <h2>Children</h2>
              <p>
                This site is intended for adults. We do not knowingly collect information from
                anyone under 16.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                If what we collect changes, this page changes with it, and the date at the top will
                be updated.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy, or requests about your information, can be sent to{" "}
                <a href="mailto:contact@realpropertyplanning.com">
                  contact@realpropertyplanning.com
                </a>
                . Real estate brokerage services referenced on this site are provided by David
                Stein, a licensed Washington real estate broker with eXp Realty, and appraisal
                services by David Stein, a Washington certified residential appraiser.
              </p>
            </div>
          </div>
        </section>

        {/* Doubled class selectors and end-of-block placement: index.css sets
            font-size and colour on bare p / h2 / li with !important, so a single
            class loses. Body text is 18px rather than the site's 17px because
            this page is dense and read by people who need it to be readable. */}
        <style>{`
          .rpp-privacy.rpp-privacy p,
          .rpp-privacy.rpp-privacy li {
            font-family: "DM Sans", system-ui, sans-serif !important;
            font-size: 18px !important;
            line-height: 1.65 !important;
            color: #272421 !important;
            margin: 0 0 16px !important;
          }
          .rpp-privacy.rpp-privacy h2 {
            font-family: 'DM Sans', system-ui, sans-serif !important;
            font-size: 26px !important;
            font-weight: 600 !important;
            color: #272421 !important;
            margin: 32px 0 12px !important;
          }
          .rpp-privacy.rpp-privacy ul {
            margin: 0 0 16px 24px !important;
            list-style: disc !important;
          }
          .rpp-privacy.rpp-privacy li { margin: 0 0 8px !important; }
          .rpp-privacy.rpp-privacy a {
            color: hsl(355 45% 30%) !important;
            text-decoration: underline !important;
          }
          .rpp-privacy.rpp-privacy .rpp-privacy-updated {
            font-size: 16px !important;
            color: #6b635b !important;
            margin: 0 0 24px !important;
          }
        `}</style>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
