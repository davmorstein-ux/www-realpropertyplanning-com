import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import { useTranslation } from "react-i18next";

/**
 * PAGE-SCOPED STYLES
 *
 * Two rules in index.css were breaking this page:
 *
 * 1. TINY TEXT
 *      main [style*="letter-spacing"],
 *      main [class*="uppercase"] { font-size: max(0.875rem, 14px) !important; }
 *    0.875rem IS 14px, so max() always returns 14px — the rule reads like a
 *    floor but behaves as a fixed size. Any element carrying letterSpacing or
 *    textTransform in its inline style was flattened to 14px, including the
 *    teal band's h2 and the hero eyebrow.
 *    Fixed here by moving those declarations OUT of the inline style objects
 *    and into the classes below, so the selectors no longer match.
 *
 * 2. DARK TEXT ON THE TEAL BAND
 *      body p:not(nav *)...   { color: #3d3833 !important }
 *      body h2, body h3, body h4 { color: #1B3A6B !important }
 *    The section sets color: #ffffff, but that reaches children only by
 *    inheritance, and inheritance loses to any rule targeting the element
 *    directly. Hence brown paragraphs and a near-black heading on teal.
 *
 * Deleting the revision-2 block from index.css is the real fix for #2. These
 * styles make the page correct either way.
 */
const PAGE_CSS = `
  .rpp-afh-eyebrow.rpp-afh-eyebrow {
    font-size: 20px !important;
    font-family: 'DM Sans', sans-serif !important;
    font-weight: 700 !important;
    letter-spacing: 0.22em !important;
    text-transform: uppercase !important;
    color: #481216 !important;
  }
  .rpp-afh-kicker.rpp-afh-kicker {
    font-size: 15px !important;
    font-weight: 700 !important;
    letter-spacing: 0.15em !important;
    text-transform: uppercase !important;
  }
  /* Lead kicker only — the one above "More ways of doing business".
     A MODIFIER, not a change to .rpp-afh-kicker: that class is used six times
     on this page, including an inline span in a card and two left-aligned
     eyebrows, so enlarging and centring the shared class would have altered
     all of them. */
  .rpp-afh-kicker.rpp-afh-kicker-lead {
    font-size: clamp(16px, 1.4vw, 19px) !important;
    font-weight: 800 !important;
    letter-spacing: 0.16em !important;
    text-align: center !important;
    display: block !important;
    width: 100% !important;
    line-height: 1.45 !important;
  }
  .rpp-afh-marketplace h2,
  .rpp-afh-marketplace p,
  .rpp-afh-marketplace h2 span,
  .rpp-afh-marketplace p span {
    color: #ffffff !important;
    opacity: 1 !important;
  }
  .rpp-afh-marketplace h2.rpp-afh-marketplace-heading {
    font-family: 'DM Sans', system-ui, sans-serif !important;
    font-size: clamp(28px, 4vw, 40px) !important;
    font-weight: 600 !important;
    letter-spacing: -0.01em !important;
    line-height: 1.2 !important;
    margin: 0 0 12px !important;
  }
  .rpp-afh-marketplace p {
    font-size: 19px !important;
    line-height: 1.7 !important;
  }
  /* Buttons sit ON the dark band and must not be swept white by the rule
     above — the solid one would become white on white. */
  .rpp-afh-marketplace .rpp-afh-btn-solid,
  .rpp-afh-marketplace .rpp-afh-btn-solid span {
    color: #1F4A34 !important;
  }
  .rpp-afh-marketplace .rpp-afh-btn-outline,
  .rpp-afh-marketplace .rpp-afh-btn-outline span {
    color: #ffffff !important;
  }
  .rpp-afh-marketplace a { text-decoration: none !important; }

  /* ---- Paths + Network sections (added with the professional network) ---- */
  .rpp-afh-paths h2,
  .rpp-afh-paths h3,
  .rpp-afh-network h2,
  .rpp-afh-network h3 { color: #280a0c !important; }
  .rpp-afh-paths p,
  .rpp-afh-network p { color: #302b26 !important; }
  .rpp-afh-paths li,
  .rpp-afh-network li { color: #302b26 !important; }

  .rpp-afh-disclosure p {
    color: #4a453f !important;
    font-size: 16px !important;
    line-height: 1.7 !important;
  }
  .rpp-afh-disclosure strong { color: #302b26 !important; }

  /* ── HERO ────────────────────────────────────────────────────────────────
     The badge is gone; the hero is the photograph, with the wordmark set as
     LIVE TEXT over it rather than baked into the file.

     Why not just use the artwork with its text baked in: the words are the
     page's H1. As pixels they give no H1 to search engines or screen readers,
     they cannot translate into the other seven locales, they do not grow when
     a reader enlarges their browser font, and at phone width the subtitle
     rendered under 3px tall. All four are fixed by setting the type in CSS.

     The section paints its own #192A19 — the green sampled from the artwork —
     and the photograph sits to the RIGHT and fades into it. That guarantees
     the text is always on flat green at every width, instead of depending on
     where a background crop happens to land.

     The house-A cannot be set in type, so it stays an image. The H1 still
     contains the real string "AFH CLUB"; the letter A is visually hidden and
     the glyph sits in its place, so assistive tech reads the whole word. */
  .rpp-afh-hero {
    position: relative;
    /* Flush against the navy band beneath it — no stray baseline gap. */
    display: block;
    margin-bottom: 0;
    background-color: #192A19;
    /* LIGHT scrim, and deliberately so. The artwork already carries its own
       green gradient — the left 35% of the file measures 31-34 brightness and
       only opens up after 45%. The previous stops (solid to 34%, clear at 72%)
       laid a second scrim on top of that one, which is what buried the house.

       Not removed entirely: at narrower widths background-size: cover crops
       from the LEFT, which is exactly where the file's own green sits, so
       without this the wordmark could land on the photograph. This layer is
       insurance for those widths, not the primary scrim. */
    background-image: linear-gradient(
        to right,
        rgba(25, 42, 25, 0.90) 0%,
        rgba(25, 42, 25, 0.72) 30%,
        rgba(25, 42, 25, 0.25) 42%,
        rgba(25, 42, 25, 0) 52%
      ),
      url("/afh-club-hero.webp");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%, cover;
    /* Bottom padding is deliberately small: the band below butts straight up
       against the hero, so any spare space here shows as a white gap. */
    /* Left padding tracks the viewport so the wordmark holds the same
       position the artwork had — text starting ~6.5% in — instead of drifting
       toward the middle as the screen widens. */
    padding: 30px clamp(20px, 6.5vw, 150px) 40px;
  }
  /* index.css has:
       #main-content > section:first-child { padding-top/bottom: 0 !important }
     This hero IS that first child, so both paddings were being stripped —
     which is why the rule ended up sitting on the bottom edge. Same id +
     element, plus a doubled class, so this out-specifies it. Do not remove.
     Flex centring puts the wordmark in the middle of the visible green rather
     than low in the box. */
  #main-content > section.rpp-afh-hero.rpp-afh-hero {
    display: flex !important;
    align-items: center !important;
    /* Hero height comes from HERE, not from the image. The photo is a
       background at cover, so a shorter file just scales up to fill the same
       box — cropping the artwork does nothing for height.
       Content needs ~280px (title, two subtitle lines, rule, padding), so this
       is close to the floor without crowding. */
    min-height: clamp(220px, 16vw, 300px) !important;
    /* No header offset here. The header sits in normal flow directly above
       this section, so reserving --header-height on top of it double-counted
       and was part of why the hero read as too tall. */
    padding-top: 34px !important;
    padding-bottom: 44px !important;
    margin-bottom: 0 !important;
  }
  .rpp-afh-hero-inner {
    /* margin: 0, NOT 0 auto. Auto-centring inside a 1180px box is what pushed
       the wordmark to roughly 25% from the left on wide screens and left the
       dead space beside it. */
    max-width: 1180px;
    margin: 0;
  }
  .rpp-afh-hero h1.rpp-afh-hero-title {
    display: flex;
    align-items: center;
    /* em, NOT px. Every other dimension in this lockup scales with font-size,
       so a fixed gap makes the wordmark's width/size ratio drift as the type
       shrinks — 2% of the width at 106px, 7% at 34px. That drift is what threw
       the rule's length off on phones, since the rule is derived from that
       ratio. 0.132em equals the original 14px at 106px type. */
    gap: 0.132em;
    font-family: 'DM Sans', system-ui, sans-serif !important;
    /* Derived by rendering DM Sans and matching the artwork, not estimated.
       Artwork "F" cap height is 75px in a 1999px frame -> 106px type = 5.30vw.
       Letter gaps measure 31px and the word gap 69px, so letter-spacing and
       word-spacing are set separately; a single tracking value spreads "AFH"
       and "CLUB" evenly and loses the artwork's grouping. */
    font-size: clamp(34px, 5.3vw, 106px) !important;
    font-weight: 300 !important;
    letter-spacing: 0.180em !important;
    /* NEGATIVE, and correctly so. letter-spacing already applies to the space
       character, on top of the space's own advance width. A positive value
       here triple-counts the gap and blows "AFH" and "CLUB" apart. Solved
       against the artwork's measured 69px word gap. */
    word-spacing: -0.121em !important;
    line-height: 1 !important;
    color: #F3F0EA !important;
    margin: 0 0 10px !important;
    padding: 0 !important;
  }
  .rpp-afh-hero-glyph {
    height: 0.98em;
    width: auto;
    display: block;
    flex-shrink: 0;
  }
  /* The "A" the glyph replaces — present for screen readers and search, not
     painted. Not display:none, which would remove it from the accessible name. */
  .rpp-afh-hero-a {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .rpp-afh-hero-sub {
    font-family: 'DM Sans', system-ui, sans-serif !important;
    /* Same derivation: cap height 14px -> 19px type = 0.95vw, letter gap 13px,
       word gap 32px. */
    font-size: clamp(11px, 0.95vw, 19px) !important;
    font-weight: 400 !important;
    /* 0.5157em, solved so line 2 ("FAMILY HOME RESOURCE NETWORK") measures
       exactly as wide as the wordmark above it — so the K of NETWORK, the B of
       CLUB, and the right end of the rule all land on the same edge.
       The subtitle is 0.95vw and the title 5.3vw, and the title measures 5.64x
       its own size, so line 2 has to be 5.2/(0.95/5.3) = 29.01em wide. Re-solved
       when the wordmark changed to mixed case. */
    letter-spacing: 0.4248em !important;
    /* Solved against the artwork's measured 32px word gap — see the note on
       the title above for why this is far smaller than it looks like it
       should be. */
    word-spacing: 0.272em !important;
    text-transform: uppercase !important;
    color: #F3F0EA !important;
    margin: 0 0 12px !important;
    padding: 0 !important;
    /* Exactly two lines, split in JS below rather than left to the wrapper.
       text-wrap: balance evens the lines but does NOT control how many there
       are — that follows from the available width, which is how this ended up
       at three. nowrap on each line pins it at two in every locale. */
    max-width: none;
    white-space: nowrap;
  }
  /* Rule under the subtitle. ONE VALUE — change here only. Currently the
     artwork's orange; switch to the door colour if those should match. */
  .rpp-afh-hero-rule {
    /* Spans the width of "AFH CLUB" rather than an arbitrary fraction.
       The wordmark measures 679px wide at 106px type in the artwork, a ratio
       so multiplying the title's own clamp by that ratio keeps the rule locked
       to the wordmark at every viewport width as the type scales.
       5.2, re-solved for the mixed-case "AFH Club": lowercase letters are
       narrower than caps, so the wordmark lost 7.7% of its width. */
    width: calc(clamp(34px, 5.3vw, 106px) * 5.2);
    max-width: 100%;
    height: 2px;
    background: #C0703C;
    border: 0;
    /* Space above so it clears the type, and the section's bottom padding
       keeps it off the edge of the hero. */
    margin: 16px 0 0 !important;
  }
  @media (max-width: 860px) {
    .rpp-afh-hero {
      background-image: linear-gradient(
          to bottom,
          #192A19 0%,
          #192A19 58%,
          rgba(25, 42, 25, 0.5) 78%,
          rgba(25, 42, 25, 0) 100%
        ),
        url("/afh-club-hero-mobile.webp");
      background-position: bottom center;
      background-size: auto 100%, cover;
      padding: 24px 20px 124px;
    }
    .rpp-afh-hero-sub { letter-spacing: 0.3em !important; word-spacing: 0.15em !important; }
    /* Tighter A-to-F gap on small screens. At phone type sizes the 0.132em gap
       reads as a space between two separate marks rather than one lockup.

       The rule below MUST move with it: the orange line's width is derived
       from the wordmark's width, and narrowing this gap narrows the wordmark
       by exactly the amount removed (0.132 - 0.06 = 0.072em), so the
       multiplier drops from 5.2 to 5.13. Change one without the other and the
       line stops lining up with the b of Club. */
    .rpp-afh-hero h1.rpp-afh-hero-title { gap: 0.06em; }
    .rpp-afh-hero-rule { width: calc(clamp(34px, 5.3vw, 106px) * 5.13); }
  }
  @media (max-width: 480px) {
    /* Both lines are nowrap, so tracking has to come down or the longer line
       runs past the edge. */
    .rpp-afh-hero-sub {
      font-size: 10px !important;
      letter-spacing: 0.16em !important;
      word-spacing: 0.1em !important;
    }
  }

  /* Lane cells — 3 across, 2 rows. Was six full-width rows, which made six
     short sentences into a long scroll and forced the eye down the page one
     item at a time. The point of this section is breadth, so the reader should
     be able to take all six in at once.
     All six cube files share an identical canvas and content bounding box, so
     a fixed aspect-ratio box aligns every cell without per-image nudging. Do
     not re-crop one of them individually. */
  .rpp-afh-lane-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px 26px;
    max-width: 1040px;
    margin: 0 auto;
  }
  .rpp-afh-lane-row {
    display: block;
  }
  .rpp-afh-cube-img {
    display: block;
    width: 100%;
    max-width: 172px;
    height: auto;
    /* Matches the files (620x515), so each cell reserves its space before the
       image arrives and the grid does not reflow as six lazy images load. */
    aspect-ratio: 620 / 515;
    margin: 0 0 12px -10px;
  }
  /* Titles are baked into the artwork, so the heading is carried here for
     assistive tech and search rather than painted. Not display:none, which
     would drop it from the accessibility tree entirely. */
  .rpp-afh-lane-row h3.rpp-afh-lane-heading {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    margin: 0 !important;
    padding: 0 !important;
  }
  .rpp-afh-lane-row p {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 18px !important;
    line-height: 1.6 !important;
    color: #302b26 !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 0 !important;
  }
  @media (max-width: 900px) {
    .rpp-afh-lane-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 560px) {
    .rpp-afh-lane-list { grid-template-columns: minmax(0, 1fr); gap: 26px; }
    .rpp-afh-cube-img { max-width: 140px; }
    .rpp-afh-lane-row p { font-size: 17px !important; }
  }

  /* Destination cards — replaced the carousel.
     A carousel showed two of five at a time, moved on its own, and hid the
     rest behind arrows and dots. For a readership that is largely older
     adults, content that moves or hides is the wrong default; these are five
     links and all five should simply be visible. */
  .rpp-afh-dest-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    max-width: 1040px;
    margin: 0 auto;
  }
  .rpp-afh-dest-card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e2dcd4;
    border-radius: 6px;
    overflow: hidden;
    text-decoration: none !important;
    transition: box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease;
  }
  .rpp-afh-dest-card:hover {
    border-color: #b13a44;
    box-shadow: 0 6px 18px rgba(39, 36, 33, 0.13);
    transform: translateY(-2px);
  }
  .rpp-afh-dest-card:focus-visible {
    outline: 3px solid #b13a44;
    outline-offset: 3px;
  }
  .rpp-afh-dest-card img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }
  .rpp-afh-dest-body { padding: 18px 20px 20px; }
  .rpp-afh-dest-card h3 {
    font-family: 'DM Sans', system-ui, sans-serif !important;
    font-size: 21px !important;
    font-weight: 700 !important;
    line-height: 1.3 !important;
    color: #280a0c !important;
    margin: 0 0 8px !important;
  }
  .rpp-afh-dest-card p {
    font-family: 'DM Sans', sans-serif !important;
    font-size: 17px !important;
    line-height: 1.6 !important;
    color: #302b26 !important;
    margin: 0 !important;
  }
  @media (max-width: 900px) {
    .rpp-afh-dest-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 560px) {
    .rpp-afh-dest-grid { grid-template-columns: minmax(0, 1fr); }
  }
`;

const CATEGORY_META = [
  { key: "resources", href: "/afh-club/resources", img: "/afh-resources.webp", placeholder: "#3f3a35" },
  { key: "listings", href: "/afh-club/listings", img: "/afh-listings.webp", placeholder: "#3e3934" },
  {
    key: "management",
    href: "/afh-club/management-companies",
    img: "/afh-management-companies.webp",
    placeholder: "#3c3732",
  },
  { key: "broker", href: "/afh-club/real-estate-broker", img: "/afh-real-estate-broker.webp", placeholder: "#3a3530" },
  {
    key: "calculators",
    href: "/afh-club/calculators",
    img: "/__l5e/assets-v1/f6d8b31f-90b0-4639-a379-feeff961e81c/afh-cost-calculator-v2.webp",
    placeholder: "#433d37",
  },
] as const;

const AFHClub = () => {
  const { t } = useTranslation();
  const categories = CATEGORY_META.map((c) => ({
    title: t(`afhClubPage.categories.${c.key}.title`),
    description: t(`afhClubPage.categories.${c.key}.description`),
    href: c.href,
    img: c.img,
    placeholder: c.placeholder,
  }));
  return (
    <>
      <SEOHead
        title={t("afhClubPage.seo.title")}
        description={t("afhClubPage.seo.description")}
        canonical="https://realpropertyplanning.com/afh-club"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        ]}
      />
      <Header />
      <style>{PAGE_CSS}</style>
      <main id="main-content">
        {/* Hero — photograph with the wordmark set as live text over it. */}
        <section className="rpp-afh-hero">
          <div className="rpp-afh-hero-inner">
            <h1 className="rpp-afh-hero-title">
              <img
                src="/afh-club-glyph.png"
                alt=""
                aria-hidden="true"
                className="rpp-afh-hero-glyph"
                width={200}
                height={194}
              />
              <span>
                <span className="rpp-afh-hero-a">A</span>FH Club
              </span>
            </h1>
            <p className="rpp-afh-hero-sub">
              {(() => {
                // Split into two lines at the most even word boundary. Done
                // here rather than with a hard-coded <br> so it stays correct
                // for the other seven locales, whose strings differ in length.
                const text = t("afhClubPage.hero.subtitle", {
                  defaultValue: "Adult Family Home Marketplace",
                });
                const words = String(text).trim().split(/\s+/);
                if (words.length < 2) return text;
                let cut = 1;
                let best = Infinity;
                for (let i = 1; i < words.length; i++) {
                  const diff = Math.abs(
                    words.slice(0, i).join(" ").length -
                      words.slice(i).join(" ").length
                  );
                  if (diff < best) {
                    best = diff;
                    cut = i;
                  }
                }
                return (
                  <>
                    {words.slice(0, cut).join(" ")}
                    <br />
                    {words.slice(cut).join(" ")}
                  </>
                );
              })()}
            </p>
            <hr className="rpp-afh-hero-rule" />
          </div>
        </section>

        {/* Welcome band removed. It sat directly beneath a hero that already
            says "AFH Club" in 106px type and repeated the same words, costing
            ~77px of height to add nothing. It was also the same green as the
            hero, so it read as an extension of it rather than a divider.

            To bring it back, restore:
              <HeroBandTitle as="h2">{t("afhClubPage.welcomeBanner")}</HeroBandTitle>
            The afhClubPage.welcomeBanner key is still present in all eight
            locale files, and the h2 band styling is still in index.css. */}

        {/* ==================================================================
            MORE WAYS TO CLOSE — audience lanes.
            Ordered by stated priority: sellers, buyers, investors, lessees.
            Reads as options unlocked, not as a roster of professionals.
           ================================================================== */}
        <section className="rpp-afh-paths" style={{ background: "#ffffff", padding: "72px 24px 16px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p className="rpp-afh-kicker rpp-afh-kicker-lead" style={{ color: "#b13a44", marginBottom: 20 }}>
              Buying, selling, and leasing in Washington State
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 3.6vw, 44px)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 18px",
                textAlign: "center",
              }}
            >
              More ways of doing business
            </h2>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 23px)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                maxWidth: 760,
                margin: "0 auto 52px",
                textAlign: "center",
              }}
            >
              AFH Club connects owners, buyers, and operators of Washington adult family homes with the
              professionals a transaction requires.
            </p>

            <div className="rpp-afh-lane-list">
              {[
                {
                  title: "Selling",
                  body: "Sell the home and the business together, or separate them and sell each to the buyer best suited to it.",
                },
                {
                  title: "Retiring",
                  body: "Step back without selling at all. A management company can run the home while the asset stays in your name.",
                },
                {
                  title: "Buying",
                  body: "Being new is not a disqualifier. Management support can cover the experience gap, and financing paths exist for qualified buyers.",
                },
                {
                  title: "Investing",
                  body: "Owners often talk to a broker long before they are ready to list, so homes become available before they reach the public market.",
                },
                {
                  title: "Leasing",
                  body: "Keep the property in your name and collect income while a licensed operator runs the business inside it.",
                },
                {
                  title: "Managing",
                  body: "An independent management company can take on staffing, compliance, and daily operations, whether you own one home or several.",
                },
              ].map((lane) => (
                <div key={lane.title} className="rpp-afh-lane-row">
                  <img
                    src={`/afh-cube-${lane.title.toLowerCase()}.webp`}
                    alt=""
                    aria-hidden="true"
                    className="rpp-afh-cube-img"
                    width={620}
                    height={515}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h3 className="rpp-afh-lane-heading">{lane.title}</h3>
                    <p>{lane.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            WHERE TO GO NEXT — five destinations, all visible.
            Sits below "More ways of doing business" on purpose: explain what
            the Club is, then offer the links. The carousel used to run before
            any explanation, so a first-time visitor was asked to navigate
            before being told what they were navigating.
           ================================================================== */}
        <section style={{ background: "#ffffff", padding: "8px 24px 64px" }}>
          <div className="rpp-afh-dest-grid">
            {categories.map((c) => (
              <Link key={c.href} to={c.href} className="rpp-afh-dest-card">
                <img
                  src={c.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  style={{ backgroundColor: c.placeholder }}
                />
                <div className="rpp-afh-dest-body">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ==================================================================
            THE NETWORK — described as capabilities held by INDEPENDENT
            professionals, never as staff or as services RPP provides.
            This wording is what keeps the page consistent with the neutral-hub
            architecture used across the rest of the site. Do not change
            "independent" to "our" / "we" / "my team".
           ================================================================== */}
        <section className="rpp-afh-network" style={{ background: "#ffffff", padding: "64px 24px 72px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p className="rpp-afh-kicker" style={{ color: "#b13a44", marginBottom: 14, textAlign: "center" }}>
              Who you get access to
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 40px)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 700,
                lineHeight: 1.2,
                margin: "0 0 18px",
                textAlign: "center",
              }}
            >
              Five kinds of professional, one point of contact
            </h2>
            <p
              style={{
                fontSize: "clamp(18px, 1.9vw, 21px)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.8,
                maxWidth: 720,
                margin: "0 auto 48px",
                textAlign: "center",
              }}
            >
              Each of these is an independent business with its own licensing and its own client
              relationships. You are introduced to the ones your situation actually calls for, and you
              engage them directly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  n: "01",
                  title: "Residential real estate brokerage",
                  who: "David Stein \u2014 eXp Realty, WA broker license #133972",
                  body: "Listing, marketing, and sale of the real property itself, including homes marketed quietly to buyers already in the network.",
                },
                {
                  n: "02",
                  title: "Appraisal and valuation",
                  who: "David Stein \u2014 Stein Appraisal, WA certified residential appraiser #1702080",
                  body: "Independent valuation of the real estate. Appraisal and brokerage are kept on separate transactions \u2014 the same property is never both appraised and brokered by the same person.",
                },
                {
                  n: "03",
                  title: "Business and lease brokerage",
                  who: "Independent commercial broker",
                  body: "Represents buyers and sellers of the business itself, and negotiates commercial leases. This is what makes it possible to treat the operation and the building as two separate, separately sellable assets.",
                },
                {
                  n: "04",
                  title: "Adult family home management",
                  who: "Independent management company",
                  body: "Runs the day-to-day operation. For sellers, a way to keep the asset without the work. For buyers, a way to meet operational expectations while gaining experience.",
                },
                {
                  n: "05",
                  title: "Capital partners",
                  who: "Independent investors",
                  body: "There are investors interested in backing qualified buyers of adult family homes. Availability, structure, and terms vary by deal and are discussed individually. Nothing about these arrangements is offered or described on this site.",
                },
              ].map((row, i) => (
                <div
                  key={row.n}
                  style={{
                    display: "flex",
                    gap: 26,
                    alignItems: "flex-start",
                    padding: "28px 0",
                    borderTop: i === 0 ? "1px solid #dfc9cb" : "none",
                    borderBottom: "1px solid #dfc9cb",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#b13a44",
                      lineHeight: 1,
                      width: 54,
                      paddingTop: 4,
                    }}
                    aria-hidden="true"
                  >
                    {row.n}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: "clamp(21px, 2.1vw, 26px)",
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontWeight: 700,
                        lineHeight: 1.3,
                        margin: "0 0 6px",
                      }}
                    >
                      {row.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 17,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        lineHeight: 1.6,
                        margin: "0 0 10px",
                      }}
                    >
                      {row.who}
                    </p>
                    <p
                      style={{
                        fontSize: 18,
                        fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ------------------------------------------------------------------
                REQUIRED DISCLOSURE. David receives compensation from some of the
                parties described above, so this block is not optional and should
                not be moved below the fold or reduced in size.
               ------------------------------------------------------------------ */}
            <div
              className="rpp-afh-disclosure"
              style={{
                marginTop: 40,
                background: "#f7f4ef",
                border: "1px solid #dfc9cb",
                borderLeft: "4px solid #481216",
                borderRadius: 4,
                padding: "26px 28px",
              }}
            >
              <p style={{ margin: "0 0 12px" }}>
                <strong>How this works, and how people are paid.</strong> Real Property Planning is an
                educational hub. It is not a brokerage, a management company, or an investment firm, and
                it does not employ the professionals described above. Each is an independent business
                that you engage directly and on your own terms.
              </p>
              <p style={{ margin: "0 0 12px" }}>
                Real estate brokerage services are provided by David Stein, a licensed Washington broker,
                through eXp Realty. Appraisal services are provided by David Stein through Stein
                Appraisal. David Stein may receive compensation, including referral fees or commission
                splits, in connection with some of the introductions described on this page. You are
                always free to work with professionals of your own choosing.
              </p>
              <p style={{ margin: 0 }}>
                Nothing on this page is an offer to sell or a solicitation of an offer to buy any
                security, nor is it financial, legal, or tax advice. Any financing or investment
                arrangement is negotiated solely between you and that party, and you should consult your
                own attorney and accountant before entering into one.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#fff", padding: "48px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <p className="rpp-afh-kicker" style={{ color: "#b13a44", marginBottom: 12 }}>
              {t("afhClubPage.marketplace.eyebrow")}
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                color: "#302b26",
                marginBottom: 16,
              }}
            >
              {t("afhClubPage.marketplace.heading")}
            </h2>
            <p
              style={{
                fontSize: 18,
                fontFamily: "'DM Sans', sans-serif",
                color: "#4a453f",
                maxWidth: 600,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              {t("afhClubPage.marketplace.description")}
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/afh-club/listings"
                style={{
                  display: "inline-block",
                  background: "#302b26",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  padding: "14px 32px",
                  borderRadius: 3,
                  textDecoration: "none",
                }}
              >
                {t("afhClubPage.marketplace.browseListings")}
              </Link>
              <Link
                to="/afh-submit"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#302b26",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  padding: "14px 32px",
                  borderRadius: 3,
                  textDecoration: "none",
                  border: "2px solid #302b26",
                }}
              >
                {t("afhClubPage.marketplace.submitListing")}
              </Link>
            </div>

            {/* Directory of every licensed home, not just those for sale. Uses a
              defaultValue so it reads correctly in all locales without needing a
              new key added to each of the eight translation files. */}
            <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.7 }}>
              <Link
                to="/afh-club/homes"
                style={{ color: "#302b26", textDecoration: "underline", textUnderlineOffset: 4, fontWeight: 600 }}
              >
                {t("afhClubPage.marketplace.browseDirectory", {
                  defaultValue: "Or browse every licensed adult family home in Washington by city →",
                })}
              </Link>
            </p>
          </div>
        </section>

        {/* Browse by city */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 56px" }}>
          <p className="rpp-afh-kicker" style={{ textAlign: "center", color: "#4a453f", marginBottom: 14 }}>
            {t("afhClubPage.browseByCity")}
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { name: "Seattle", href: "/afh-club/for-sale/seattle-wa" },
              { name: "Kirkland", href: "/afh-club/for-sale/kirkland-wa" },
              { name: "Renton", href: "/afh-club/for-sale/renton-wa" },
              { name: "Bellevue", href: "/afh-club/for-sale/bellevue-wa" },
              { name: "Auburn", href: "/afh-club/for-sale/auburn-wa" },
              { name: "Lynnwood", href: "/afh-club/for-sale/lynnwood-wa" },
              { name: "Edmonds", href: "/afh-club/for-sale/edmonds-wa" },
              { name: "Everett", href: "/afh-club/for-sale/everett-wa" },
              { name: "Marysville", href: "/afh-club/for-sale/marysville-wa" },
              { name: "Mukilteo", href: "/afh-club/for-sale/mukilteo-wa" },
              { name: "Puyallup", href: "/afh-club/for-sale/puyallup-wa" },
              { name: "Lakewood", href: "/afh-club/for-sale/lakewood-wa" },
              { name: "Bonney Lake", href: "/afh-club/for-sale/bonney-lake-wa" },
            ].map((c) => (
              <Link
                key={c.href}
                to={c.href}
                style={{
                  display: "inline-block",
                  background: "#f7f4ef",
                  color: "#302b26",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "8px 16px",
                  borderRadius: 20,
                  textDecoration: "none",
                  border: "1px solid #dfc9cb",
                }}
              >
                {c.name}, WA
              </Link>
            ))}
          </div>
        </section>

        {/* Category list */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 38px)",
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              marginBottom: 48,
            }}
          >
            {t("afhClubPage.exploreHeading")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {categories.map((cat, i) => (
              <Link
                key={cat.href}
                to={cat.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 24,
                  padding: "22px 0",
                  borderBottom: "1px solid #dfc9cb",
                  borderTop: i === 0 ? "1px solid #dfc9cb" : "none",
                  textDecoration: "none",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(184,115,51,0.04)")
                }
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 90,
                    height: 120,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: cat.placeholder,
                    boxShadow: "0 2px 12px rgba(10,22,40,0.12)",
                  }}
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    width={90}
                    height={120}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                    loading="lazy"
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2vw, 24px)",
                      fontWeight: 700,
                      color: "#280a0c",
                      margin: "0 0 8px",
                      lineHeight: 1.3,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(18px, 1.8vw, 20px)",
                      color: "#302b26",
                      margin: "0 0 12px",
                      lineHeight: 1.65,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {cat.description}
                  </p>
                  <span
                    className="rpp-afh-kicker"
                    style={{ color: "#481216", display: "inline-flex", alignItems: "center", gap: 5 }}
                  >
                    {t("afhClubPage.exploreLabel")}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* What is an AFH */}
        <section style={{ background: "#f7f4ef", padding: "80px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p className="rpp-afh-eyebrow" style={{ margin: "0 0 16px" }}>
              {t("afhClubPage.whatIsAfh.eyebrow")}
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 3.5vw, 42px)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 700,
                color: "#280a0c",
                lineHeight: 1.2,
                margin: "0 0 20px",
              }}
            >
              {t("afhClubPage.whatIsAfh.heading")}
            </h2>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: "0 0 22px",
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph1")}
            </p>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: "0 0 22px",
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph2")}
            </p>
            <p
              style={{
                fontSize: "clamp(19px, 2vw, 22px)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                color: "#302b26",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {t("afhClubPage.whatIsAfh.paragraph3")}
            </p>
          </div>
        </section>

        {/* Featured: AFH Marketplace */}
        <section
          className="rpp-afh-marketplace"
          style={{
            /* Dark green, flat. Was a teal gradient; a gradient makes the
               band's apparent width shift with screen size, so it read as a
               different band on different pages. One colour, like the navy
               band component.

               The 1px rule along the top edge matches the homepage hero band:
               #14161A, a very dark neutral rather than true black. Against a
               field this deep, pure black reads as a hole rather than an edge.
               borderTop rather than a wrapper or pseudo-element, so it is part
               of the band's own box and cannot drift out of alignment. */
            background: "#1F4A34",
            borderTop: "1px solid #14161A",
            padding: "56px 24px",
            color: "#ffffff",
          }}
        >
          <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
            {/* Size, weight and letter-spacing now live in the class. Keeping
                letterSpacing inline made this h2 match
                  main [style*="letter-spacing"] { font-size: 14px !important }
                and collapse from clamp(28px, 4vw, 40px) to 14px. */}
            <h2 className="rpp-afh-marketplace-heading">{t("afhClubPage.readyToBuySell.heading")}</h2>
            <p style={{ margin: "0 auto 28px", maxWidth: 640 }}>{t("afhClubPage.readyToBuySell.description")}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link
                to="/afh-club/listings"
                className="rpp-afh-btn-solid"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  minHeight: 52,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                }}
              >
                {t("afhClubPage.readyToBuySell.browseListings")}
              </Link>
              <Link
                to="/afh-submit"
                className="rpp-afh-btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  fontSize: 16,
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  minHeight: 52,
                  border: "2px solid rgba(255,255,255,0.85)",
                }}
              >
                {t("afhClubPage.readyToBuySell.sellYourAfh")}
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default AFHClub;
