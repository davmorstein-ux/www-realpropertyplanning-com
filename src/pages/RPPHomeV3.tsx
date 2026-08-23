import Header from "@/components/Header";
/* Imported as module assets rather than referenced from public/. The same
   files sat in public/ and returned 404 in production despite being committed
   and valid — newly added binaries were not making it into the deployed
   build. Importing routes them through Vite's asset pipeline, which is the
   path every working icon on this site already uses: the file is emitted with
   a content hash and the URL is resolved at build time, so it cannot silently
   go missing. */
import heroDesktop from "@/assets/hero/rpp-hero-2028.webp";
import heroMobile from "@/assets/hero/rpp-hero-2028-mobile.webp";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
import HomepagePopularResources from "@/components/HomepagePopularResources";
import HomepageTestimonials from "@/components/HomepageTestimonials";
import HomepageFAQ from "@/components/HomepageFAQ";
import AboutTheHub from "@/components/AboutTheHub";
import { formatCurrency } from "@/lib/careTypes";
import { CARE_CALCULATORS, careTypeFor } from "@/lib/careCalculators";

const tileMeta = [
  { key: "planAhead", href: "/planning-before-a-crisis", bgColor: "#8A4214", imgSrc: tilePlanning },
  { key: "helpingParent", href: "/helping-an-aging-parent", bgColor: "#246044", imgSrc: tileHelping },
  { key: "handlingEstate", href: "/estate-probate-inherited-property", bgColor: "#25597e", imgSrc: tileEstate },
  {
    key: "needProfessional",
    href: "/building-your-trusted-professional-team",
    bgColor: "#662D56",
    imgSrc: tileProfessionals,
  },
] as const;



const RPPHomeV3 = () => {
  const { t } = useTranslation();

  /* Every value on this tile derives from CARE_CALCULATORS — the same list the
     calculator hub and the switcher strip read. The list shown here used to be
     "care types not currently rotating", which after the rotation was removed
     left an arbitrary subset: it omitted adult family homes, assisted living
     and memory care while advertising options the hub does not cover. */
  const careOptions = CARE_CALCULATORS.map((o) => ({ option: o, care: careTypeFor(o) }));
  const careMonthlyFigures = CARE_CALCULATORS.map((o) => careTypeFor(o).waMonthly);
  const careMonthlyLow = Math.min(...careMonthlyFigures);
  const careMonthlyHigh = Math.max(...careMonthlyFigures);

  return (
    <>
      <SEOHead title={t("seo.title")} description={t("seo.description")} canonical="https://realpropertyplanning.com" />
      <Header />

      <main id="main-content">
        {/* ── Hero ── height driven by content, image is a background layer ── */}
        <div
          className="rpp-hero-figure"
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            id="rpp-hero-image"
            /* rpp-hero-2028: watercolour of an open door on a stone path,
               meadow and sunrise. Painted paper, not a cutout — the left
               ~55% of the frame is open sky and unpainted paper, and that
               column is the tagline's home.

               1920x340, 5.65:1. Shown at its own ratio, NOT cropped. The
               artwork is the crop — see .rpp-hero-img in index.css, which is
               height: auto / object-fit: contain for exactly this reason.

               The field was colour-corrected to #F5F2EC with a luminance-
               masked delta so the paper matches the page while the sunrise
               keeps its warmth. Samples read #F4F1E9 to #F7F1EA. Edge sweep
               is clean on all four sides — no white fringe, no bottom notch.

               Two files, not a srcSet ladder. Desktop carries the paper
               column; the mobile file is a tighter 2.79:1 crop centred on the
               door with no column, because below 900px the tagline stacks
               beneath the image instead of sitting on it.
               102 KB and 76 KB. */
            src={heroDesktop}
            srcSet={`${heroMobile} 900w, ${heroDesktop} 1920w`}
            sizes="100vw"
            width={1920}
            /* Must match the file. The intrinsic ratio is what reserves
               space before the image loads; a stale value here causes the
               page to jump as it arrives. 1920x340 is the artwork's own
               5.65:1 shape. This number has been wrong after an art swap
               more than once; change it in the same commit as the images,
               every time.

               PREVIOUS ARTWORK WAS 4.66:1 (1920x412). The 2028 replacement
               is a shorter band, so the hero is about 72px shorter at full
               width. */
            height={340}
            alt={t("hero.imageAlt")}
            /* IN NORMAL FLOW, NOT ABSOLUTE. The tagline no longer sits on the
               photograph at any width — it stacks beneath it.

               This was the source of every hero problem so far. Overlaid text
               needs a wash to stay legible, the wash has to be tuned to the
               crop, and object-fit: cover crops differently at every viewport
               width, so a wash tuned for desktop lands over the wrong part of
               the picture on a phone. Any change to the artwork restarts that
               work.

               Stacking removes the whole class of problem: the image is shown
               whole and undimmed at every width, and navy on cream is 10:1 and
               cannot drift. The cost is vertical space — roughly 450px of
               image at a 1440px window — which is why the crop is a 3.18:1
               band rather than the original 2.37:1. */
            className="rpp-hero-img block w-full"
            loading="eager"
            /* WAS fetchPriority — React does not recognise the camelCase form
               on a DOM element and drops it with a console warning, so the
               hero never actually received high priority. Lowercase is the
               attribute the browser reads. */
            fetchPriority="high"
            decoding="async"
          />
          {/* Logo + tagline overlay — normal flow, so this content's own
              height determines the hero's height on every screen size.

              The two hero CTA buttons were removed: "Find the Right Starting
              Point" only scrolled to tiles already visible in the same
              viewport, and "Connect with a Specialist" duplicated the
              "I Need a Professional" funnel tile below. */}
          {/* rpp-hero-scrim: the white wash the tagline sits on. Classed so
              index.css can flatten it below 640px — on a phone the hero band is
              a fraction of its desktop height, so the second line of the
              tagline lands near the bottom of this gradient where it is almost
              fully transparent, over the brightest part of the photograph. */}
          {/* Tagline band. Cream, in flow, directly beneath the image — no
              scrim, no overlay, no gradient to maintain. */}
          <div
            className="rpp-hero-scrim"
            style={{
              /* OVERLAY, deliberately — but the justification changed with
                 rpp-hero-2028 and the old one no longer applies. That
                 artwork is NOT a flat field; it is painted paper with real
                 texture. The reason overlay still works is measured, not
                 structural: across the rows this block occupies, #2E5368
                 holds AAA out to 59.8% of frame width, and the box ends at
                 47.95%.

                 top: 6%, NOT 20%. At 20% the block ran to ~76% of band
                 height and line three sat 5px above the grass at 4.69:1.
                 The clean column ends at 64%. At 6% the block ends at 48%
                 and all three lines measure 7.18-7.25:1 on the live render.
                 Anchor to the top; do not centre vertically.

                 maxWidth stays at 43.75%. Narrowing it was considered and is
                 unnecessary: the safe zone reaches 59.8%, which is also the
                 headroom the longer locales need.

                 IF THE ARTWORK IS REPLACED, RE-MEASURE both numbers before
                 assuming the overlay still clears.

                 Below 900px index.css returns this to static flow on cream:
                 the mobile file is a tighter crop with no paper column, and
                 the image is too short there to hold four lines. */
              position: "absolute",
              left: "4.2%",
              top: "6%",
              maxWidth: "43.75%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: 0,
              boxSizing: "border-box",
            }}
          >
            {/* Tagline in #1B3A6B — the same navy used by the homepage
                descriptor and the calculator tile's secondary text. */}
            <h1 id="rpp-tagline" style={{ textAlign: "left", margin: 0 }}>
              <span
                className="rpp-tagline-line-v2"
                style={{
                  display: "block",
                  /* DM Sans, matching the rest of the site. This tagline was
                     the last Cormorant Garamond on the homepage.

                     This exact comment previously claimed Source Serif 4 while
                     the value beneath it said DM Sans, and it stayed wrong
                     long enough to send a debugging session down the wrong
                     path. If you change the value, change these words too.

                     NOTE: index.css carries `main #rpp-tagline
                     .rpp-tagline-line-v2` with !important, which BEATS this
                     inline style. Changing this line alone does nothing —
                     change both or neither. */
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#1B3A6B",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  /* No text shadow. This white glow existed to lift NAVY text
                     off the photograph, back when the tagline was overlaid on
                     it. White letters on the navy band need no lift, and a
                     white shadow behind white type only blurs its own edges —
                     which is what made the tagline look soft and embossed. */
                  /* Was clamp(8px, 1.5vw, 20px), which sat on top of the
                     band padding above and read as one oversized gap. */
                  marginTop: 0,
                }}
              >
                {t("hero.taglineLine1")}
              </span>
              <span
                className="rpp-tagline-line-v2"
                style={{
                  display: "block",
                  /* DM Sans, matching the rest of the site. This tagline was
                     the last Cormorant Garamond on the homepage.

                     This exact comment previously claimed Source Serif 4 while
                     the value beneath it said DM Sans, and it stayed wrong
                     long enough to send a debugging session down the wrong
                     path. If you change the value, change these words too.

                     NOTE: index.css carries `main #rpp-tagline
                     .rpp-tagline-line-v2` with !important, which BEATS this
                     inline style. Changing this line alone does nothing —
                     change both or neither. */
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#1B3A6B",
                  lineHeight: 1,
                  letterSpacing: "0.01em",
                  /* No text shadow. This white glow existed to lift NAVY text
                     off the photograph, back when the tagline was overlaid on
                     it. White letters on the navy band need no lift, and a
                     white shadow behind white type only blurs its own edges —
                     which is what made the tagline look soft and embossed. */
                  /* Was 0.2em — about 6px at 31px — added on top of the
                     1.12 line-height, so the two lines sat further apart than
                     the leading intended and pushed the band taller. */
                  marginTop: 0,
                }}
              >
                {" "}
                {t("hero.taglineLine2")}
              </span>
            </h1>
          </div>
        </div>

        {/* ── Funnel Tiles ─────────────────────────────────────────── */}
        <section id="rpp-start-here" style={{ backgroundColor: "#f5f2ec", padding: "2.5rem 0 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            {/* 2rem, was 0.5rem. With the global h1-h4 margin-bottom of
                0.4rem that left roughly 14px between a 56px heading and the
                tile tops, so the heading read as a label stuck to the tiles
                rather than one introducing them. */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2
                className="rpp-funnel-heading"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  color: "#272421",
                  margin: 0,
                }}
              >
                {t("funnel.heading")}
              </h2>
            </div>

            <p className="block sm:hidden text-center text-base text-navy font-medium mb-4 tracking-wide">
              {t("funnel.mobileHint")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              {tileMeta.map(({ key, href, bgColor, imgSrc }) => {
                const title = t(`funnel.tiles.${key}.title`);
                const imgAlt = t(`funnel.tiles.${key}.imgAlt`);
                return (
                  <Link key={key} to={href} className="group block" style={{ textDecoration: "none" }}>
                    {/* marquee-hover lives HERE, on the rounded div, and only
                        here. A second copy on the Link above drew a second,
                        SQUARE ring around the whole tile — the Link has no
                        border radius for the ring to inherit. */}
                    <div
                      className="marquee-hover group-active:scale-[0.98] transition-transform duration-150"
                      style={{ borderRadius: 10 }}
                    >
                      <div
                        style={{
                          borderRadius: 10,
                          overflow: "hidden",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                        }}
                      >
                        <div style={{ position: "relative" }}>
                          <img
                            src={imgSrc}
                            alt={imgAlt}
                            loading="lazy"
                            style={{ display: "block", width: "100%", height: "190px", objectFit: "cover" }}
                          />
                          <span
                            className="absolute top-3 right-3 sm:hidden rpp-explore-badge"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.88)",
                              color: "#272421",
                              fontSize: 11,
                              fontWeight: 700,
                              fontFamily: "'DM Sans', system-ui, sans-serif",
                              padding: "3px 8px",
                              borderRadius: 20,
                              letterSpacing: "0.04em",
                            }}
                          >
                            {t("funnel.exploreBadge")}
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: bgColor,
                            /* WAS 1.1rem vertical. Two lines of 20px at 1.25 line-height is
                               50px; 1.1rem a side added 35px on top, so a third of
                               the band was empty and the 70px minHeight below never
                               applied. 0.7rem lands a two-line label in a ~72px
                               band, still clearing the floor for one-line locales. */
                            padding: "0.7rem 1.25rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.75rem",
                            minHeight: "70px",
                          }}
                        >
                          <span
                            className="rpp-funnel-cta"
                            style={{
                              fontFamily: "'DM Sans', system-ui, sans-serif",
                              fontSize: 20,
                              fontWeight: 700,
                              color: "#ffffff",
                              lineHeight: 1.25,
                              margin: 0,
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            {title}
                          </span>
                          {/* Arrow is the sitewide CSS ::after (CTA ARROW block
                              in index.css) via the rpp-funnel-cta class on the
                              span above — the hand-placed chevron this replaces
                              was one of the reasons arrows behaved differently
                              from button to button. */}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ── Scoped styles ───────────────────────────────────────
                text-transform lives in classes rather than inline styles:
                a global [style*="text-transform: uppercase"] selector in
                index.css forces font-weight 600 on anything declaring it
                inline. Doubled class names beat the global
                "main p font-size !important" rule. */}
            <style>{`
  .rpp-explore-badge.rpp-explore-badge {
    text-transform: uppercase;
  }

  /* WAS a fixed 2.25rem, which is why this heading read as weak: it stayed
     36px on a 1920px monitor while everything around it scaled. index.css
     carries a clamp for the same doubled selector, but this block is later in
     document order at equal specificity, so THIS value won and the clamp never
     applied. Both now carry the same clamp — change them together or neither. */
  .rpp-funnel-heading.rpp-funnel-heading {
    font-size: clamp(2.25rem, 3.2vw, 3.5rem) !important;
  }

              /* Cost of Care tile — three columns on desktop: heading+CTA on
                 the left, rotating figures in the middle, and the full list
                 of care types on the right. Secondary text throughout uses
                 a single dark blue (#25597e, 7.48:1 on white) so the tile
                 has one supporting color rather than two; the care-type
                 figures stay the only accent colors. */
              .rpp-coc-card.rpp-coc-card {
                display: block;
                background: #ffffff;
                border: 3px solid #7f1d1d;
                border-radius: 12px;
                padding: 1.35rem 1.6rem;
                /* Same lift as the funnel tiles above, so this card belongs
                   to the same visual system instead of sitting flat. */
                box-shadow: 0 2px 12px rgba(0,0,0,0.10);
              }
              /* The whole card is a link, so a global anchor rule underlines
                 every descendant. Strip it explicitly, everywhere. */
              .rpp-coc-card.rpp-coc-card,
              .rpp-coc-card.rpp-coc-card * {
                text-decoration: none !important;
              }
              /* Two columns now, not three. The middle column held rotating
                 figures; with those gone it left a gap, so the range moved in
                 beside the heading and the options list takes the right. */
              .rpp-coc-layout.rpp-coc-layout {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                align-items: center;
              }
              .rpp-coc-rangelabel {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 16px !important;
                font-weight: 700;
                color: #25597e;
                line-height: 1.3;
                margin-bottom: 2px;
              }
              .rpp-coc-range {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 30px;
                font-weight: 700;
                color: #7f1d1d;
                line-height: 1.15;
                white-space: nowrap;
              }
              .rpp-coc-rangeper {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 16px;
                font-weight: 600;
              }
              /* Name left, figure right, on one row per option — the figures
                 line up in a column so they can be compared at a glance. */
              .rpp-coc-options.rpp-coc-options {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin: 0;
                padding: 0 0 0 2rem;
                border-left: 1px solid #f0ece5;
                list-style: none;
              }
              .rpp-coc-options.rpp-coc-options li {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                gap: 1rem;
              }
             /* Each option takes its own colour, matching the calculator
                 pages and the switcher cards. Six distinct hues, all clearing
                 4.5:1 on white — the label always sits beside the figure, so
                 colour reinforces rather than carries the meaning. */
              .rpp-coc-opt-name {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 17px !important;
                font-weight: 700;
                color: var(--opt-color, #25597e) !important;
                line-height: 1.35;
              }
              /* Figure carries the option's colour too, so name and number
                 read as one row. They were charcoal so the figures formed a
                 comparable column; matching them was the explicit choice. */
              .rpp-coc-opt-figure {
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 18px !important;
                font-weight: 700;
                color: var(--opt-color, #272421) !important;
                line-height: 1.35;
                white-space: nowrap;
              }
              /* A filled button, not a text link. It was text-with-an-arrow on
                 the reasoning that the whole card is already clickable, so a
                 button inside it duplicated the affordance. Testing showed the
                 opposite: a reader scanning the homepage did not register the
                 card as clickable at all. The card above it is the same white
                 rounded panel and is NOT clickable, which teaches the eye that
                 this shape is an information panel.

                 A filled shape is the strongest signal available and costs one
                 element. Keep it filled.

                 White on #6b1b22 measures 11.63:1, and 14.43:1 on hover — the
                 label has to survive the global card rule that repaints spans
                 inside rounded cards, hence the !important on colour. */
              .rpp-coc-cta.rpp-coc-cta {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background: #6b1b22 !important;
                color: #ffffff !important;
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 19px !important;
                font-weight: 700 !important;
                letter-spacing: 0.01em;
                padding: 14px 30px !important;
                min-height: 52px;
                border: 0 !important;
                border-radius: 8px;
                white-space: nowrap;
                text-decoration: none !important;
                /* Slight lift and a shadow so it reads as a raised control
                   rather than a coloured rectangle. */
                box-shadow: 0 2px 6px rgba(107, 27, 34, 0.35);
                transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
              }
              .rpp-coc-card:hover .rpp-coc-cta.rpp-coc-cta {
                background: #501419 !important;
                box-shadow: 0 4px 12px rgba(107, 27, 34, 0.45);
                transform: translateY(-1px);
              }
              .rpp-coc-left.rpp-coc-left {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 1.1rem;
              }
              /* Bullets are drawn with ::before rather than list-style,
                 because the <ul> is display:flex and native markers render
                 inconsistently on flex children. */
              /* The descriptor's inline clamp() was being overridden by the
                 global "main p { font-size: ... !important }" rule, so it
                 rendered at a flat 18px. Doubled class + !important wins. */
              .rpp-descriptor-text.rpp-descriptor-text {
                font-size: clamp(21px, 2.6vw, 31px) !important;
                line-height: 1.5 !important;
                font-weight: 400 !important;
                color: #1B3A6B !important;
              }

              /* Rotation controls sit OUTSIDE the card's anchor — a button
                 inside an <a> is invalid markup and would navigate on click
                 instead of pausing. */
              .rpp-coc-controls {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 12px;
                margin-top: 10px;
              }
              .rpp-coc-pause {
                min-height: 44px;
                padding: 6px 16px;
                font-family: 'DM Sans', system-ui, sans-serif;
                font-size: 15px !important;
                font-weight: 700;
                color: #7f1d1d;
                background: transparent;
                border: 2px solid #7f1d1d;
                border-radius: 6px;
                cursor: pointer;
              }
              .rpp-coc-pause:hover { background: rgba(127,29,29,0.06); }
              .rpp-coc-pause:focus-visible { outline: 3px solid #d1a847; outline-offset: 2px; }
              .rpp-coc-dots { display: inline-flex; gap: 7px; }
              .rpp-coc-dot {
                width: 11px; height: 11px; padding: 0;
                border-radius: 50%;
                border: 1px solid #7f1d1d;
                background: transparent;
                cursor: pointer;
              }
              .rpp-coc-dot.is-current { background: #7f1d1d; }

              @media (max-width: 768px) {
                .rpp-coc-layout.rpp-coc-layout {
                  grid-template-columns: 1fr;
                  gap: 1rem;
                  align-items: stretch;
                }
                .rpp-coc-options.rpp-coc-options {
                  border-left: none;
                  border-top: 1px solid #f0ece5;
                  padding: 0.9rem 0 0 0;
                }
                .rpp-coc-card.rpp-coc-card {
                  padding: 1.2rem 1.25rem;
                }
              }

            `}</style>

            {/* ── What is Real Property Planning? ──────────────────── */}
            <AboutTheHub />

            {/* ── Cost of Care Calculator — two columns ──────────────── */}
            <div>
              <a href="/cost-of-care-calculator" className="rpp-coc-card group marquee-hover">
                <div className="rpp-coc-layout">
                  <div className="rpp-coc-left">
                    <h3
                      className="coc-heading"
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      <span style={{ color: "#272421" }}>{t("costOfCare.headingPart1")}</span>{" "}
                      <span style={{ color: "#7f1d1d" }}>{t("costOfCare.headingPart2")}</span>
                    </h3>

                    {/* The range sits with the heading rather than in its own
                        column: alone in the middle it read as a stray figure. */}
                    <div>
                      <div className="rpp-coc-rangelabel">Monthly cost in Washington</div>
                      <div className="rpp-coc-range">
                        {formatCurrency(careMonthlyLow)} &ndash; {formatCurrency(careMonthlyHigh)}
                        <span className="rpp-coc-rangeper"> / month</span>
                      </div>
                    </div>

                    {/* Text and arrow, not a filled box. The whole card is
                        already a link, so a button inside it was a second
                        affordance for the same action — the same reason the
                        in-card links elsewhere were unfilled. */}
                    {/* No icon and no glyph: the sitewide CTA arrow is drawn
                        by CSS (see the CTA ARROW block at the end of
                        index.css). The translated strings used to end with a
                        "→" glyph; those were stripped when the CSS arrow
                        shipped, or every locale would show two arrows. */}
                    <span className="rpp-coc-cta">{t("costOfCare.cta")}</span>
                  </div>

                  {/* Right column: the six options the hub actually covers,
                      each with its figure. Drawn from CARE_CALCULATORS so the
                      tile and the hub can never disagree. This replaces both
                      the rotating figures and the old "other care types" list,
                      which showed an arbitrary subset. */}
                  <ul className="rpp-coc-options">
                    {careOptions.map(({ option, care }) => (
                      <li key={option.slug}>
                        <span
                          className="rpp-coc-opt-name"
                          style={{ ["--opt-color" as string]: option.color }}
                        >
                          {option.shortLabel}
                        </span>
                        <span
                          className="rpp-coc-opt-figure"
                          style={{ ["--opt-color" as string]: option.color }}
                        >
                          {formatCurrency(care.waMonthly)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>

             </div>
          </div>
        </section>

        <HomepagePopularResources />
        {/* <HomepageTestimonials /> — hidden until real testimonials are collected */}
        <HomepageFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV3;
