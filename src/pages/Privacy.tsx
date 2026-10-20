
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import HeroBandTitle from "@/components/HeroBandTitle";
import { FEATURED_APPRAISER,  FEATURED_BROKER} from "@/data/featuredProfessionals";

/**
 * Privacy policy.
 *
 * DRAFTED FROM A CODE AUDIT, NOT FROM A TEMPLATE. Every disclosure below
 * corresponds to something the site actually does as of 2026-09-30:
 *
 *   Google Analytics 4      index.html, gtag G-0X2GPKCW65 — loads on every
 *                           page, before any consent step
 *   Referral click events   providerTracking.ts — a provider_contact_click
 *                           event when a visitor taps a featured
 *                           professional's phone, email, or website link.
 *                           Records the provider's name, company, which kind
 *                           of link, and the page path. No visitor identity.
 *   Contact-form leads      leadTracking.ts — a generate_lead event after a
 *                           contact message is sent: topic code, which inbox
 *                           (general / broker / appraiser) and the page the
 *                           visitor came from. No name, email, phone or text.
 *   Site action events      siteTracking.ts (Oct 8, 2026) — contact_click
 *                           (any phone/email link: kind, whether it reaches the
 *                           featured professional / site inbox / someone else,
 *                           page path), contact_cta_click (link to the contact
 *                           page: page path, topic code), calculator_used (first
 *                           interaction with a calculator: its path), sign_up
 *                           (newsletter or alert signup confirmed: form tag),
 *                           home_tile_click (which homepage tile: its key and
 *                           path; Oct 20, 2026).
 *                           Never a number, address, typed value or message.
 *   Ask-box questions       AskBox.tsx / siteTracking.ts (Oct 8, 2026) — ask_question:
 *                           the typed question (100 chars, emails and phone numbers
 *                           removed), answered yes/no, answer page, page path.
 *   Referral UTM tags       providerTracking.ts — outbound provider website
 *                           links carry utm_source=realpropertyplanning.com so
 *                           the professional can see the referral in their own
 *                           analytics
 *   Meta Pixel              src/lib/metaPixel.ts (Oct 17, 2026) — ad landing
 *                           pages only (/family-home-planning); PageView and a
 *                           data-free Lead on signup; no automatic events, no
 *                           advanced matching, no tracking of later pages;
 *                           skipped under Global Privacy Control; nothing loads
 *                           until a Pixel ID is set
 *   Planner answers         /family-home-planning — kept in the browser only;
 *                           planner_completed records that it was finished
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
 *   sessionStorage          src/lib/chunkRecovery.ts — one timestamp
 *                           ("rpp-chunk-reload-at") used to recover from a
 *                           failed code-file load without a reload loop.
 *                           Not tracking.
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

const UPDATED = "October 20, 2026";

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
                Real Property Planning does not sell your information or share it with anyone for
                their own marketing. Most visitors never give the site any personal information at
                all. If you fill in a form, what you send is used to reply to you.
              </p>

              <h2>Information you provide</h2>
              <p>
                <strong>Contact form.</strong> If you use the contact form, it collects your name,
                email address, phone number, and your message. These are sent by email to the person
                who will reply. The correspondence is kept as a record of what was discussed.
              </p>
              <p>
                <strong>Testimonials.</strong> If you submit a testimonial, the site collects what
                you provide in that form. Submitting a testimonial does not publish it — nothing appears
                on the site unless it is reviewed first.
              </p>
              <p>
                <strong>Newsletter.</strong> If you subscribe, the site collects your email address
                and which page you subscribed from. Subscribing requires confirming through a link
                sent to your email. Every newsletter includes an unsubscribe link, and unsubscribe
                requests are acted on promptly.
              </p>

              <h2>Information collected automatically</h2>
              <p>
                <strong>Analytics.</strong> This site uses Google Analytics to understand which
                pages people find useful. It records things like which pages were viewed, roughly
                where in the world the visitor is, and what kind of device was used. It sets cookies
                in your browser to do this. It is used to improve the site, not to identify
                individuals.
              </p>
              <p>
                <strong>Referrals to professionals.</strong> When you tap a featured professional's
                phone number, email address, or website link, the site records that a link of that
                kind was clicked, which professional it belonged to, and which page you were on. This
                is used to tell each professional how much interest their listing received. It records the
                click, not you — no name, no phone number, and nothing about what you go on to
                say to them. Links to a professional's own website also carry a tag identifying this
                site as the source, so they can see the referral in their own analytics.
              </p>
              <p>
                <strong>Which pages lead somewhere.</strong> The site also records when a phone number or
                email link anywhere on the site is tapped, when a link to the contact page is
                followed, when a calculator is first used, which of the four "What brings you here
                today?" choices on the homepage is picked, and when a newsletter or alert signup
                goes through, along with the page it happened on. This shows which guides and
                tools people find useful enough to act on. It records the kind of action only:
                never the number or address involved, anything you type into a calculator, or
                your email address.
              </p>
              <p>
                <strong>Questions you ask.</strong> When you use the "Ask a question" box, the question
                you type (its first 100 characters, with anything that looks like an email address or
                phone number removed), whether the site's guides had an answer, and the page you asked
                from are recorded in Google Analytics. They are read to see what visitors want to know
                and which guides to write next. Please don't type names, health details or account numbers
                into the box.
              </p>
              <p>
                <strong>Contact form.</strong> When a message you send through the contact form goes
                through, the site records that a message was sent, its topic (for example "buying or
                selling an adult family home"), which inbox it went to, and the page you were reading
                before you opened the form. This shows which pages people find useful enough to ask a
                question about. It does not record your name, email address, phone number, or anything
                you wrote.
              </p>
              <p>
                <strong>Facebook advertising.</strong> Some pages of this site are advertised on Facebook. Those pages
                only (currently the family home planning page) use Meta's pixel, which tells Meta that
                someone arrived from an ad and whether they signed up, to show which ads are
                useful. It records the page and the fact of a signup. It does not record your email
                address, your answers to the questions on that page, or which other pages of this site
                you go on to read, and it is not used on any page about health or care. If your browser
                sends a Global Privacy Control signal, the pixel does not load. Meta's own use of the
                data is covered by Meta's privacy policy.
              </p>
              <p>
                <strong>Fonts.</strong> The typefaces on this site are served by Google Fonts. Your
                browser requests them from Google, which means Google receives your IP address when
                a page loads.
              </p>
              <p>
                <strong>Spam prevention.</strong> The site's forms use Cloudflare Turnstile to tell people
                apart from automated bots. It examines browser characteristics to make that
                judgement.
              </p>
              <p>
                <strong>Video.</strong> Some pages offer videos. These are embedded through
                YouTube's privacy-enhanced mode, which does not set tracking cookies unless you
                actually play the video.
              </p>

              <h2>What the site does not do</h2>
              <ul>
                <li>It does not sell your personal information.</li>
                <li>It does not share your information with other businesses for their marketing.</li>
                <li>
                  It does not use what you write in a form to target advertising to you.
                </li>
              </ul>
              <p>
                Real Property Planning lists professionals as an educational resource. If you decide
                to contact one of them, that is your choice and you are giving your information to
                them directly. The site does not pass it along to them on your behalf.
              </p>

              <h2>Health-related information</h2>
              <p>
                Many people come to this site while making decisions about care for themselves or a
                family member. If you mention a health condition or care need in a form, it is
                treated as sensitive. It is used only to respond to you. It is never sold and never
                used for advertising. You are never required to share health details to use this
                site; please share only what is necessary.
              </p>

              <h2>Your choices</h2>
              <p>
                You can ask what information the site holds about you, ask for it to be corrected,
                or ask for it to be deleted. You can unsubscribe from the newsletter at any time using the link in
                any message. Most browsers let you block or delete cookies, and browser-level "Do
                Not Track" or Global Privacy Control signals can limit analytics.
              </p>
              <p>
                Washington residents have specific rights regarding consumer health data under
                state law, including the right to withdraw consent and to have such data deleted.
                To exercise any of these, use the contact details below.
              </p>

              <h2>Children</h2>
              <p>
                This site is intended for adults. It does not knowingly collect information from
                anyone under 16.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                If what the site collects changes, this page changes with it, and the date at the
                top will be updated.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy, or requests about your information, can be sent to{" "}
                <a href="mailto:contact@realpropertyplanning.com">
                  contact@realpropertyplanning.com
                </a>
                . Real estate brokerage services referenced on this site are provided by {FEATURED_BROKER.name}, a
                licensed Washington real estate broker with {FEATURED_BROKER.brokerage}, and appraisal services by{" "}
                {FEATURED_APPRAISER.name}, a Washington certified residential appraiser.
              </p>
            </div>
          </div>
        </section>

        {/* Doubled class selectors and end-of-block placement: index.css sets
            font-size and colour on bare p / h2 / li with !important, so a single
            class loses. Body text is 18px rather than the site's 17px because
            this page is dense and read by people who need it to be readable. */}
        <style dangerouslySetInnerHTML={{ __html: `
          .rpp-privacy.rpp-privacy p,
          .rpp-privacy.rpp-privacy li {
            font-family: "DM Sans", "DM Sans Fallback", system-ui, sans-serif !important;
            font-size: 18px !important;
            line-height: 1.65 !important;
            color: #272421 !important;
            margin: 0 0 16px !important;
          }
          .rpp-privacy.rpp-privacy h2 {
            font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
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
            color: #1c1917 !important;
            margin: 0 0 24px !important;
          }
        ` }} />
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
