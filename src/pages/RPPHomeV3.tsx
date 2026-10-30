import Header from "@/components/Header";
import AskBox from "@/components/AskBox";
/* Imported as module assets rather than referenced from public/. The same
   files sat in public/ and returned 404 in production despite being committed
   and valid — newly added binaries were not making it into the deployed
   build. Importing routes them through Vite's asset pipeline, which is the
   path every working icon on this site already uses: the file is emitted with
   a content hash and the URL is resolved at build time, so it cannot silently
   go missing. */
/* rpp-hero-2037 (Oct 29, 2026): the 2035/2036 cuts straightened. David saw the
   hero "slightly tilted to the right": the wall corner, window and door frames
   leaned about 0.8 degrees (tops to the right). Fixed with a 0.75-degree shear,
   which straightens the verticals without tilting the room's horizontals, then
   8px trimmed from each side and scaled back to size. Same crops as before:
   desktop band 1920x420 / 3840x840, phone 2100x752 from x=1740 of the band. */
/* rpp-hero-2041 (Oct 29, 2026, David): the taller laptop hero. Same entryway,
   recomposed at 2.4:1 with a plain left wall for the slogan (the mirror was
   removed on purpose). Used above 900px only; phones keep the 2037 crop below.
   1942x809 is the largest file David had; a ~3840px version would be sharper
   on high-density laptop screens if one is ever made. */
import heroDesktop from "@/assets/hero/rpp-hero-2041.webp";
import heroDesktop1280 from "@/assets/hero/rpp-hero-2041-1280.webp";
/* Phone crop zoomed out (Oct 28, 2026, David chose option "B"): cut wider
   from the same 2035 render, 2100x752 from x=1740 of the 3840 band (was
   1876 wide from x=1964), right edge kept, same 1200x430 shape, so the image
   is no taller and the journey tiles stay on the first screen. More of the
   room's left side shows (full mirror, plant, table); the door is a little
   smaller. */
import heroMobile from "@/assets/hero/rpp-hero-2037-mobile.webp";
import heroMobile1800 from "@/assets/hero/rpp-hero-2037-mobile-1800.webp";
/* A true 900px copy (Oct 7, 2026): the srcSet below called the 1200px file
   "900w", so phones downloaded more than they needed. */
import heroMobile900 from "@/assets/hero/rpp-hero-2037-mobile-900.webp";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tilePlanning from "@/assets/tiles/tile-planning-ahead.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals.webp";
/* 640px copies (Oct 6, 2026): the tiles show at about 180px wide on phones and
   260px on desktop (half the 1040px grid below 1024px), so the full-size files
   were two to four times what most screens used. */
import tilePlanningSm from "@/assets/tiles/tile-planning-ahead-640.webp";
import tileHelpingSm from "@/assets/tiles/tile-helping-loved-one-640.webp";
import tileEstateSm from "@/assets/tiles/tile-handling-estate-640.webp";
import tileProfessionalsSm from "@/assets/tiles/tile-find-professionals-640.webp";
const TILE_SMALL: Record<string, string> = {
  [tilePlanning]: tilePlanningSm,
  [tileHelping]: tileHelpingSm,
  [tileEstate]: tileEstateSm,
  [tileProfessionals]: tileProfessionalsSm,
};
import HomepagePopularResources from "@/components/HomepagePopularResources";
import HomepageTestimonials from "@/components/HomepageTestimonials";
import HomepageFAQ from "@/components/HomepageFAQ";
import HomeTileIntro from "@/components/HomeTileIntro";
import AboutTheHub from "@/components/AboutTheHub";
import RppArrow from "@/components/RppArrow";
import { formatCurrency } from "@/lib/careTypes";
import { CARE_CALCULATORS, careTypeFor } from "@/lib/careCalculators";
import { BarChart3, MapPin, Search, Wrench, type LucideIcon } from "lucide-react";
import { careIconFor } from "@/lib/careIcons";
import calcPhotoCare from "@/assets/home/calc-photo-care.webp";
import calcPhotoRemodel from "@/assets/home/calc-photo-remodel.webp";
import calcPhotoCare480 from "@/assets/home/calc-photo-care-480.webp";
import calcPhotoCare800 from "@/assets/home/calc-photo-care-800.webp";
import calcPhotoRemodel480 from "@/assets/home/calc-photo-remodel-480.webp";
import calcPhotoRemodel800 from "@/assets/home/calc-photo-remodel-800.webp";
/* Oct 27, 2026 (performance): the photo panel is about 360px wide on a laptop and the
   screen width on a phone; the 1200px file was being sent to every screen. */
const CALC_PHOTO_SIZES = "(max-width: 768px) 100vw, 360px";

/* Calculator cards, Oct 27, 2026 (David, from a ChatGPT layout): a photo on each card and an
   icon on every line. Care icons (src/lib/careIcons.ts) take each option's own colour; the
   remodel steps use amber. No navy icons (David: too much navy on the site). */
const REMODEL_LINES: [LucideIcon, string][] = [
  [Search, "Look up your house by address"],
  [Wrench, "Enter what you would spend (or spent) on each part"],
  [BarChart3, "See two values: a broker's and an appraiser's"],
  [MapPin, "Built from recent local home sales"],
];

const HERO_WIDE_CSS = `
/* LAPTOP HERO (Oct 29, 2026, David approved the mock-up after several rounds).
   Above 900px only; phones and anything 900px or narrower are untouched.
   - Taller 2.4:1 photo (rpp-hero-2041) under a 40% cream wash, so the slogan
     and tiles lead and the door still shows.
   - Slogan "Where transitions begin" in Playfair Display (the only serif on
     the site), "transitions" in the door red, "begin" stepped under it.
   - The h1 (the plain description) sits under the slogan as a smaller line:
     it stays the page's headline for search engines and tells a first-time
     visitor what the site is.
   - The four tiles move up so the line where each tile's photo meets its
     white label sits on the hero's bottom edge. The grid's negative top
     margin is the photo height computed from the column width: photos are
     1160x793, 4 columns, 24px gaps, plus the tile's 1px border. If the gap,
     column count or photo shape changes, change the calc with it.
   - "What brings you here today?" moves under the tiles (flex order).
   - Titles 18px; one line from 1270px up (narrower windows can wrap).
   - Layered "floating" shadow and a thin white edge on each tile.
   No backticks in this block. */
html body main p.rpp-hero-slogan.rpp-hero-slogan { display: none !important; }
/* Headline line breaks: phones show two lines ("Senior transition, probate &
   estate" / "guidance for Washington families."); laptops show three
   ("Senior transition," / "probate & estate guidance" / "for Washington
   families.") by joining the two spans and turning these breaks on. */
html body main h1#rpp-tagline br.rpp-br-wide { display: none; }
@media (min-width: 901px) {
  html body main .rpp-hero-figure img.rpp-hero-img.rpp-hero-img { aspect-ratio: 1942 / 809 !important; }
  html body main div.rpp-hero-figure.rpp-hero-figure::after {
    content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
    background: linear-gradient(180deg, rgba(250,248,244,0.52) 0%, rgba(250,248,244,0.40) 45%, rgba(250,248,244,0.55) 100%);
  }
  html body main .rpp-hero-figure > div.rpp-hero-scrim.rpp-hero-scrim {
    z-index: 2; left: 3.9% !important; top: 7.5% !important; max-width: 46% !important;
  }
  html body main p.rpp-hero-slogan.rpp-hero-slogan {
    display: block !important;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
    font-weight: 600 !important;
    font-size: clamp(40px, 4.2vw, 64px) !important;
    line-height: 1.04 !important;
    letter-spacing: -0.005em !important;
    color: #272421 !important;
    margin: 0 !important;
    max-width: none !important;
    text-align: left !important;
    text-shadow: 0 0 22px rgba(250,248,244,0.9);
  }
  html body main p.rpp-hero-slogan.rpp-hero-slogan em {
    font-family: inherit !important; font-style: italic !important; font-weight: 500 !important;
    font-size: inherit !important; color: #B0274F !important;
  }
  html body main p.rpp-hero-slogan.rpp-hero-slogan span.rpp-hero-slogan-end {
    display: inline-block !important; padding-left: 3.25em;
    font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important;
    line-height: inherit !important; color: inherit !important;
  }
  /* Oct 29, 2026 evening (David): the description dropped lower and enlarged,
     so it reads as its own line rather than a caption tucked under the slogan. */
  html body main h1#rpp-tagline { margin: clamp(26px, 2.6vw, 44px) 0 0 !important; text-align: left !important; }
  html body main h1#rpp-tagline span.rpp-tagline-line-v2.rpp-tagline-line-v2 {
    display: block !important;
    font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
    font-size: clamp(19px, 1.85vw, 28px) !important;
    font-weight: 500 !important;
    line-height: 1.35 !important;
    letter-spacing: 0 !important;
    color: #2f2a26 !important;
    text-shadow: 0 0 16px rgba(250,248,244,0.95) !important;
  }
  html body main .rpp-hero-scrim span.rpp-tagline-rule.rpp-tagline-rule { display: none !important; }
  html body main h1#rpp-tagline.rpp-head3 span.rpp-tagline-line-v2.rpp-tagline-line-v2 { display: inline !important; }
  html body main h1#rpp-tagline.rpp-head3 br.rpp-br-wide { display: inline; }

  html body main section#rpp-start-here { padding-top: 0 !important; position: relative; z-index: 3; }
  html body main div.rpp-funnel-block {
    display: flex; flex-direction: column;
    --rpp-gw: min(1120px, 84vw, calc(100vw - 3rem));
  }
  html body main div.rpp-funnel-block > div.rpp-funnel-head.rpp-funnel-head { order: 2; margin: 2.25rem 0 0 !important; }
  html body main div.rpp-funnel-block > div.rpp-funnel-grid.rpp-funnel-grid {
    order: 1;
    width: var(--rpp-gw); max-width: none !important;
    grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    column-gap: 24px !important; row-gap: 24px !important;
    margin: calc(-1 * ((var(--rpp-gw) - 72px) / 4 * 793 / 1160)) auto 0 !important;
  }
  /* FLOATING TILES (Oct 29, 2026 evening, David: the thin white edge read as
     a frame, not depth). No border; five stacked shadows from tight to very
     wide and soft; and a blurred "ground shadow" oval a little below each
     tile, so the gap between tile and shadow reads as hovering. The oval is
     the link's ::after at z-index -1 (it paints above the section's cream
     because the section is its own stacking context). No border also means
     the seam calc above has no +1px. */
  html body main .rpp-funnel-grid div.rpp-jt.rpp-jt {
    border: 0 !important;
    border-radius: 16px;
    box-shadow: 0 1px 1px rgba(39,36,33,0.08), 0 2px 4px rgba(39,36,33,0.08), 0 8px 16px rgba(39,36,33,0.10), 0 18px 36px rgba(39,36,33,0.14), 0 36px 72px rgba(39,36,33,0.18);
  }
  html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link { position: relative; }
  html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link::after {
    content: ""; position: absolute; left: 10%; right: 10%; bottom: -26px; height: 22px;
    border-radius: 50%; z-index: -1; pointer-events: none; filter: blur(4px);
    background: radial-gradient(ellipse at center, rgba(39,36,33,0.30) 0%, rgba(39,36,33,0.12) 45%, rgba(39,36,33,0) 72%);
    transition: transform 0.18s ease, opacity 0.18s ease;
  }
  @media (hover: hover) {
    /* Hover: the tile rises a little and its ground shadow spreads and fades,
       as a lifted object's would. */
    html body main .rpp-funnel-grid .group:hover div.rpp-jt.rpp-jt {
      border-color: transparent;
      box-shadow: 0 2px 2px rgba(39,36,33,0.08), 0 4px 8px rgba(39,36,33,0.08), 0 12px 24px rgba(39,36,33,0.12), 0 26px 52px rgba(39,36,33,0.16), 0 48px 96px rgba(39,36,33,0.20);
    }
    html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link:hover::after { transform: scaleX(1.06); opacity: 0.75; }
  }
  html body main .rpp-funnel-grid div.rpp-jt-label.rpp-jt-label { padding: 16px 12px 18px 14px; }
  html body main .rpp-funnel-grid span.rpp-jt-row.rpp-jt-row { gap: 8px; }
  html body main .rpp-funnel-grid span.rpp-jt-arrow.rpp-jt-arrow { flex: 0 0 30px; width: 30px; height: 30px; }
  html body main .rpp-funnel-grid .rpp-jt span.rpp-jt-title.rpp-jt-title.rpp-jt-title { font-size: 18px !important; }
}
@media (min-width: 1270px) {
  html body main .rpp-funnel-grid .rpp-jt span.rpp-jt-title.rpp-jt-title.rpp-jt-title { white-space: nowrap; }
}
`;

const tileMeta = [
  { key: "planAhead", href: "/planning-before-a-crisis", bgColor: "#8A4214", imgSrc: tilePlanning },
  { key: "helpingParent", href: "/helping-an-aging-parent", bgColor: "#246044", imgSrc: tileHelping },
  { key: "handlingEstate", href: "/estate-probate-inherited-property", bgColor: "#25597e", imgSrc: tileEstate },
  {
    key: "needProfessional",
    href: "/building-your-professional-team",
    bgColor: "#662D56",
    imgSrc: tileProfessionals,
  },
] as const;



const RPPHomeV3 = () => {
  const { t, i18n } = useTranslation();
  /* English headline breaks into three lines on laptops (Oct 29, 2026, David);
     other languages keep their two translated lines. */
  const head3 = (i18n.resolvedLanguage || i18n.language || "en").startsWith("en");

  /* Every value on this tile derives from CARE_CALCULATORS — the same list the
     calculator hub and the switcher strip read. The list shown here used to be
     "care types not currently rotating", which after the rotation was removed
     left an arbitrary subset: it omitted adult family homes, assisted living
     and memory care while advertising options the hub does not cover. */
  const careOptions = CARE_CALCULATORS.map((o) => ({ option: o, care: careTypeFor(o) }));

  return (
    <>
      <SEOHead title={t("seo.title")} description={t("seo.description")} canonical="https://realpropertyplanning.com" />
      <HomeTileIntro />
      <Header />

      <main id="main-content">
        <style dangerouslySetInnerHTML={{ __html: HERO_WIDE_CSS }} />
        {/* ── Hero ── height driven by content, image is a background layer ── */}
        <div
          className="rpp-hero-figure"
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* <picture>, not one <img> with a mixed srcSet (Oct 25, 2026). The
              desktop band (5.27:1) and the phone crop (2.79:1) are different
              shapes. With both in one srcSet the <img> carried only the
              desktop width/height, and iPhone Safari drew the phone crop at
              the desktop shape: squashed to about half its height, the door
              short and wide. Each <source> now carries its own width/height,
              and index.css sets the matching aspect-ratio per breakpoint as a
              backstop. The 900px split matches the tagline breakpoint. */}
          <picture>
          <source
            media="(max-width: 900px)"
            srcSet={`${heroMobile900} 900w, ${heroMobile} 1200w, ${heroMobile1800} 1800w`}
            sizes="100vw"
            width={1200}
            height={430}
          />
          <img
            id="rpp-hero-image"
            /* rpp-hero-2035 (Oct 27, 2026, night): David's re-render that keeps the sunlight
               reflected on the navy wall (2034 had lost it). Same 4340x1450 size. At David's
               request every crop keeps the whole right side of the scene: the laptop band is the
               full width (no trim), so the mirror starts at 53% and clears the headline; the
               phone crop is anchored to the right edge (left window to the plant, mirror out).
               Left wall blended toward cream behind the headline as before.

/* rpp-hero-2034 (Oct 27, 2026, evening): David's final render, 4340x1450 from a real
               upscaler, much sharper than 2033 (garden, trim and rug). Same 1920x420 band and
               1200x430 phone shape. The band is cut 3945 wide from x=285 (trimmed ~10% so the
               door is a little larger), still shrunk to 1920 and 3840, never enlarged. Left wall
               blended 55% toward cream behind the headline as before; the mirror starts at 52%
               of the width, clear of the text.

/* rpp-hero-2033 (Oct 27, 2026): David's new entryway render, upscaled with a real
               upscaler to 4096x1368 (the 2032 file was soft: an AI enlargement of a small
               render). Same scene and colours. The desktop band is now 1920x420 (4.57:1, was
               1920x364) at David's choice, so the ceiling above the door AND the floor and rug
               both show; the hero is about 40px taller on a laptop. 3840x840 for sharp screens,
               both shrunk from the source, never enlarged. Phone crops keep 1200x430.
               The headline overlays the left wall on laptops; that wall had dappled sun and
               measured only 5.0:1 behind the charcoal text, and David saw it "fighting the
               wall". The left half is blended 55% toward cream, full to 36% of the width and
               feathered out by 50% (before the mirror): now 8.6:1 at its weakest, 9.7:1
               median. Phone crops are untouched (the headline sits below the image there).

               rpp-hero-2032 (Oct 22, 2026): the same 2031 render, upscaled by the
               owner to 8000px because the hero looked soft on high-resolution
               screens. Same crops (aligned to 2031 by image matching), the same
               55% cream blend on the left wall (tagline contrast 6.2:1 at the
               1st percentile, 7.4:1 median), and the left window's garbled view
               replaced with the right window's. A 3840px desktop file serves
               high-DPI screens and an 1800px phone file serves large phones
               (with only 1200w, a 430px phone at 3x picked the DESKTOP crop).
               sizes stays "(min-width: 901px) 1920px, 100vw".

               rpp-hero-2031 (Oct 18, 2026): the owner's new entryway render with
               a magenta door matching the logo, and (same evening, his idea) a navy
               accent wall behind the door to echo the logo's A — regenerated in
               ChatGPT so the wall carries the room's light rather than a flat fill.
               Final render (Oct 18, 21:30): matching windows, clean trim, sunlight
               on the navy wall; tagline contrast 7.33:1 minimum. Same 1920x364 band and the same
               mobile crops. The render was warmer than 2030, so the left wall
               (the tagline's column) was blended 55% toward cream, feathered out
               before the mirror; navy on it measures 7.25:1 at its weakest
               (2030 was 5.2:1; 7.1:1 with the navy-wall render). Re-measure if the artwork changes again.

               rpp-hero-2030 (Oct 4, 2026): the same entryway photograph, recut
               by the owner with more headroom — the lantern, ceiling line,
               rug and right-hand planter are no longer clipped. Desktop
               1920x364 (5.27:1); mobile 1200x430, cropped from the right so
               the console, door and planter all show. The notes below
               describe rpp-hero-2029, the previous cut of this image.

               rpp-hero-2029 (Sept 2026): photographic entryway — cream wall,
               console with mirror and olive branches, open brick-red front
               door (#B0352A, the AFH Club logo door) onto a garden path.
               Cut from a true panorama render, so the whole room fits the
               band with nothing amputated. The left ~50% is plain sunlit
               wall, and that column is the tagline's home. Navy on that
               wall measures ~9:1. Mobile file is a 2.79:1 crop of the SAME
               render centred on the door.

               Replaced rpp-hero-2028, the watercolour of an open door on a
               stone path; that art's notes below still describe the layout
               rules, which are unchanged.

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
            srcSet={`${heroDesktop1280} 1280w, ${heroDesktop} 1942w`}
            /* Above 900px always the full desktop artwork (Oct 21, 2026). With
               sizes="100vw" a 901-1200px window at 1x picked the 1200w MOBILE
               crop, which has no plain wall on the left, so the headline sat
               on the mirror. Below 900px the headline stacks under the image,
               so the tighter crops are fine there. */
            sizes="100vw"
            width={1942}
            /* Must match the file. The intrinsic ratio is what reserves
               space before the image loads; a stale value here causes the
               page to jump as it arrives. 1920x364 is the artwork's own
               5.27:1 shape (was 1920x340 before Oct 4, 2026). This number has been wrong after an art swap
               more than once; change it in the same commit as the images,
               every time.

               PREVIOUS ARTWORK WAS 4.66:1 (1920x412). The 2028 replacement
               is a shorter band, so the hero is about 72px shorter at full
               width. */
            height={809}
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
            /* No decoding="async" (Oct 7, 2026): this is the largest thing on the
               first screen, and async decoding let the browser paint without it
               and show it a frame or more later. The build also adds a preload
               for it in <head> (heroPreload in vite.config.ts). */
          />
          </picture>
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
              /* Oct 24, 2026: 17% (was 6%). The header now casts a stone
                 ledge shadow onto the photo, and at 6% the headline sat ~30px
                 under it, crowding it. 17% gives ~70px of air at full width
                 and still ends well above the dappled lower wall (block ends
                 near 50%; the clean column ends at 64%). Still top-anchored —
                 centring would put it over the busy sunlight. */
              top: "17%",
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
            {/* Slogan (Oct 29, 2026, David): laptops and wider only (hidden at
                900px and below in HERO_WIDE_CSS). A <p>, not a heading: the h1
                below stays the page's real headline for search engines. */}
            <p className="rpp-hero-slogan">
              {t("hero.sloganStart")} <em>{t("hero.sloganAccent")}</em>
              <br />
              <span className="rpp-hero-slogan-end">{t("hero.sloganEnd")}</span>
            </p>
            <h1 id="rpp-tagline" className={head3 ? "rpp-head3" : undefined} style={{ textAlign: "left", margin: 0 }}>
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
                  fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#272421",
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
                {head3 ? (
                  <>
                    {t("hero.headA")}
                    <br className="rpp-br-wide" /> {t("hero.headB")}
                  </>
                ) : (
                  t("hero.taglineLine1")
                )}
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
                  fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                  fontSize: "clamp(28px, 4.4vw, 62px)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: "#272421",
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
                {head3 ? (
                  <>
                    {t("hero.headC")}
                    <br className="rpp-br-wide" /> {t("hero.headD")}
                  </>
                ) : (
                  t("hero.taglineLine2")
                )}
              </span>
            </h1>
            <span className="rpp-tagline-rule" aria-hidden="true" />
          </div>
        </div>

        {/* ── Three short points under the artwork (Oct 21, 2026, David chose
            "Option 2" over a sentence): replaced the beige box holding a
            two-line lead sentence, which read weak. Brick-red checks echo the
            door; made larger and thicker Oct 23, 2026 (David: "a bit weak").
            Oct 24, 2026: David said the strip still looked weak (words nearly
            invisible, ticks cheap) — now charcoal bold text, garnet badge
            checks, hairline dividers, and its own solid cream so the faint
            logo wallpaper no longer shows through behind the words.
            door. The class names avoid "btn"/"cta" substrings on purpose. */}
        {/* The four homepage points (Oct 25, 2026): checks, numbers and links in
            one row. They replaced the "What this hub includes" pills lower down,
            which said the same things. See HomepagePoints.tsx. */}
        {/* Oct 27, 2026 (David chose layout "C" from a phone mock-up): on
            phones the points move BELOW the four journey tiles, so "What
            brings you here today?" and all four tile photos fit on the first
            screen. This copy shows above 760px only; the second copy, after
            the tile grid, shows at 760px and below. Breakpoint matches the
            points' own one-column breakpoint in index.css. */}
        {/* Oct 27, 2026 (later): the points moved again, into the "about" section
            (AboutTheHub.tsx), right under "...a free, independent place to start." */}

        {/* ── Funnel Tiles ─────────────────────────────────────────── */}
        {/* Sections from here down sit on a lighter cream (#faf8f4, David Sept 23:
            "more alive"). The hero band and the lead-line strip above stay
            #f5f2ec because the artwork's paper field was colour-matched to it. */}
        <section id="rpp-start-here" style={{ backgroundColor: "#faf8f4", padding: "2.5rem 0 4rem" }}>
          <div className="rpp-start-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
            {/* 2rem, was 0.5rem. With the global h1-h4 margin-bottom of
                0.4rem that left roughly 14px between a 56px heading and the
                tile tops, so the heading read as a label stuck to the tiles
                rather than one introducing them. */}
            {/* Heading + tiles wrapper (Oct 29, 2026): above 900px HERO_WIDE_CSS
                makes this a flex column and puts the heading UNDER the tiles,
                which sit on the hero's bottom edge. Phones keep heading-first. */}
            <div className="rpp-funnel-block">
            <div className="rpp-funnel-head" style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2
                className="rpp-funnel-heading"
                style={{
                  fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  color: "#272421",
                  margin: 0,
                }}
              >
                {t("funnel.heading")}
              </h2>
              {/* "Choose where to begin" (and the phone-only "Select a topic to
                  get started") removed Oct 21, 2026 at David's call: the
                  question and the four tiles say it already. */}
            </div>


            {/* Tiles sit in a narrower column with wider gaps so the row reads
                as four objects with air around them, not a strip (David, Sept 23). */}
            {/* Phones: 2 x 2 at half width (owner, Oct 5, 2026: the four stacked
                full-width tiles were too large). Tablet stays 2-up, desktop 4-up. */}
            <div className="rpp-funnel-grid grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-9 mb-5" style={{ maxWidth: 1040, margin: "0 auto 1.25rem" }}>
              {tileMeta.map(({ key, href, bgColor, imgSrc }) => {
                const title = t(`funnel.tiles.${key}.title`);
                const imgAlt = t(`funnel.tiles.${key}.imgAlt`);
                return (
                  <Link
                    key={key}
                    to={href}
                    data-home-tile={key}
                    data-pulse
                    className="group block rpp-jt-link"
                    style={{ textDecoration: "none", ["--tile" as string]: bgColor }}
                  >
                    {/* JOURNEY TILE (Oct 29, 2026, David: the site "looks dated"; he
                        approved a flatter mock-up). White card, full-bleed photo,
                        white label with a short rule and a thin ring arrow in the
                        tile's colour. Replaces the Oct 4 bevelled 3D frame (thick
                        coloured band, inset highlights, heavy shadow). Live text,
                        so search engines, screen readers and translations still
                        read it. Classes are rpp-jt-*: no card/tile/cta/btn/section
                        substrings, which index.css restyles. */}
                    <div className="rpp-jt">
                      <div className="rpp-jt-photo">
                        {/* width/height are the photos' real 1160x793 shape, so the
                            browser reserves the space before they load. */}
                        <img
                          src={TILE_SMALL[imgSrc] ?? imgSrc}
                          srcSet={TILE_SMALL[imgSrc] ? `${TILE_SMALL[imgSrc]} 640w, ${imgSrc} 1160w` : undefined}
                          sizes="(max-width: 1023px) 50vw, 260px"
                          alt={imgAlt}
                          loading="lazy"
                          width={1160}
                          height={793}
                          className="rpp-funnel-img"
                        />
                      </div>
                      <div className="rpp-jt-label">
                        <span className="rpp-jt-rule" aria-hidden="true" />
                        <span className="rpp-jt-row">
                          <span className="rpp-jt-title">{title}</span>
                          <span className="rpp-jt-arrow" aria-hidden="true">
                            <RppArrow size="100%" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            </div>


            {/* ── Scoped styles ───────────────────────────────────────
                text-transform lives in classes rather than inline styles:
                a global [style*="text-transform: uppercase"] selector in
                index.css forces font-weight 600 on anything declaring it
                inline. Doubled class names beat the global
                "main p font-size !important" rule. */}
            <style dangerouslySetInnerHTML={{ __html: `
  /* FUNNEL TILE PHOTOS. The four photos are 1160x793 (1.46:1), and the box
     takes that same shape at every width, so nothing is ever cropped.

     It used to be a fixed 190px tall. That only suits a tile about 277px wide.
     Full-width on a phone (~350px) and two-up on a tablet (~350px) the box
     became 1.85:1 and object-fit: cover cut a fifth off every photo's height,
     clipping heads. Four-up near 1024px (~229px wide) it went the other way
     and trimmed the sides. At the common 1280px desktop the new height is
     187px against the old 190px, so desktop looks the same as before.

     If the photos are ever replaced with a different shape, change the ratio
     here and the width/height attributes on the <img> together.

     Doubled class + !important because index.css carries global img rules. */
  /* JOURNEY TILES (Oct 29, 2026). Flat white cards: the photo carries the
     colour, the tile's own colour appears only as the short rule above the
     title and the ring arrow. Lift + coloured border on hover (computers only),
     the double pulse on click. Equal heights across a row. */
  .rpp-jt-link.rpp-jt-link { height: 100%; }
  .rpp-jt {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #ffffff;
    border: 1px solid #e4ddd1;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(28,25,23,0.06), 0 8px 20px -12px rgba(28,25,23,0.22);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  @media (hover: hover) {
    .group:hover .rpp-jt { transform: translateY(-2px); border-color: var(--tile); box-shadow: 0 2px 4px rgba(28,25,23,0.08), 0 14px 28px -14px rgba(28,25,23,0.30); }
    .group:hover .rpp-jt-arrow.rpp-jt-arrow { transform: translateX(2px); }
  }
  .rpp-jt-link:focus-visible .rpp-jt { outline: 3px solid var(--tile); outline-offset: 3px; }
  .rpp-jt-photo { line-height: 0; }
  .rpp-jt-label.rpp-jt-label {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 16px 18px 18px;
  }
  .rpp-jt-rule.rpp-jt-rule { display: block; width: 28px; height: 3px; border-radius: 2px; background: var(--tile); margin: 0 0 12px; }
  .rpp-jt-row.rpp-jt-row { flex: 1 1 auto; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  /* index.css forces spans in links to 16px regular: restate size and weight. */
  html body main .rpp-jt span.rpp-jt-title.rpp-jt-title {
    font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
    font-size: 22px !important;
    /* 800, not 700 (David, Oct 29, 2026: heavier so the labels stand out
       and read more easily). DM Sans is a variable font, so 800 is a true
       weight, not a synthetic bold. */
    font-weight: 800 !important;
    line-height: 1.22 !important;
    color: #1c1917 !important;
    letter-spacing: -0.005em;
  }
  .rpp-jt-arrow.rpp-jt-arrow { flex: 0 0 34px; width: 34px; height: 34px; color: var(--tile); display: inline-flex; transition: transform 0.18s ease; }
  .rpp-jt-arrow svg { width: 100%; height: 100%; vertical-align: 0 !important; }

  /* PHONES (under 640px): 2 x 2, about 165px wide each. Title 18px (the
     site's minimum for this audience); the arrow stays, smaller, in the
     label's bottom-right corner, with the last line kept clear of it. */
  @media (max-width: 639px) {
    /* index.css forces every multi-column grid to one column on phones with
       [class*="grid-cols-"]:not(...) at (0,2,0), which beats its own
       .grid-cols-2 exception, so the 2 x 2 needs a stronger selector. */
    .rpp-funnel-grid.rpp-funnel-grid.rpp-funnel-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
    .rpp-jt { border-radius: 12px; }
    .rpp-jt-label.rpp-jt-label { padding: 10px 10px 11px 12px; position: relative; }
    .rpp-jt-rule.rpp-jt-rule { width: 22px; margin-bottom: 6px; }
    /* A block row: the title is inline text, so the row's own line-height
       (main's 1.7 at 16px = 28px) sets the line spacing. Pin it to the title's. */
    html body main .rpp-jt .rpp-jt-row.rpp-jt-row { display: block; font-size: 18px !important; line-height: 1.2 !important; }
    html body main .rpp-jt span.rpp-jt-title.rpp-jt-title { font-size: 18px !important; line-height: 1.2 !important; }
    html body main .rpp-jt span.rpp-jt-title.rpp-jt-title::after { content: ""; display: inline-block; width: 26px; height: 1px; }
    .rpp-jt-arrow.rpp-jt-arrow { position: absolute; right: 9px; bottom: 11px; width: 20px; height: 20px; }
  }

  .rpp-funnel-img.rpp-funnel-img {
    display: block !important;
    width: 100% !important;
    height: auto !important;
    aspect-ratio: 1160 / 793;
    object-fit: cover;
  }

  /* WAS a fixed 2.25rem, which is why this heading read as weak: it stayed
     36px on a 1920px monitor while everything around it scaled. index.css
     carries a clamp for the same doubled selector, but this block is later in
     document order at equal specificity, so THIS value won and the clamp never
     applied. Both now carry the same clamp — change them together or neither. */
  .rpp-funnel-heading.rpp-funnel-heading {
    font-size: clamp(2.25rem, 3.2vw, 3.5rem) !important;
  }

  /* "Choose where to begin" under the heading (owner, Oct 1, 2026: "off
     center and too small"). Sitewide paragraph rules gave it a left-aligned
     max-width box, so it sat left of the centered heading. Doubled class beats
     index.css's "main p" rules. */
  .rpp-funnel-sub.rpp-funnel-sub {
    text-align: center !important;
    max-width: none !important;
    margin: 0.75rem auto 0 !important;
    font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
    font-size: clamp(20px, 1.7vw, 26px) !important;
    font-weight: 500 !important;
    color: #1B3A6B !important;
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
                /* Calm pass (owner, Oct 8, 2026): hairline border, no dark red
                   frame, no shadow. The filled button below still marks it as
                   clickable. */
                border: 1px solid #e2dbcf;
                border-radius: 14px;
                padding: 1.35rem 1.6rem;
                box-shadow: none;
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
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 16px !important;
                font-weight: 700;
                color: #B0352A;
                line-height: 1.3;
                margin-bottom: 2px;
              }
              .rpp-coc-range {
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 30px;
                font-weight: 700;
                color: #B0352A;
                line-height: 1.15;
                white-space: nowrap;
              }
              .rpp-coc-rangeper {
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
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
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 17px !important;
                font-weight: 700;
                /* Calm pass (Oct 8, 2026): one colour for all six, not six hues. */
                color: #272421 !important;
                line-height: 1.35;
              }
              /* Figure carries the option's colour too, so name and number
                 read as one row. They were charcoal so the figures formed a
                 comparable column; matching them was the explicit choice. */
              .rpp-coc-opt-figure {
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 18px !important;
                font-weight: 700;
                color: #272421 !important;
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

                 Flat navy (David, Oct 21 2026; was cobalt). White on #1B3A6B measures 11.6:1,
                 and higher on the darker hover — the
                 label has to survive the global card rule that repaints spans
                 inside rounded cards, hence the !important on colour. */
              .rpp-coc-cta.rpp-coc-cta {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                background: #1B3A6B !important;
                color: #ffffff !important;
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 19px !important;
                font-weight: 700 !important;
                letter-spacing: 0.01em;
                padding: 14px 30px !important;
                min-height: 52px;
                border: 0 !important;
                border-radius: 8px;
                white-space: nowrap;
                text-decoration: none !important;
                box-shadow: none;
                transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
              }
              .rpp-coc-card:hover .rpp-coc-cta.rpp-coc-cta {
                background: #142c52 !important;
              }
              /* Oct 27, 2026 (David): the two calculator buttons take different colours, and
                 neither is navy: Cost of Care teal #0b6a7a (6.26:1 with white), the remodel
                 card amber #8a5300 (6.33:1), matching its icons. Hover darkens each. */
              a.rpp-coc-card:not(.rpp-rmv-card) .rpp-coc-cta.rpp-coc-cta { background: #0b6a7a !important; }
              a.rpp-coc-card:not(.rpp-rmv-card):hover .rpp-coc-cta.rpp-coc-cta { background: #08515d !important; }
              a.rpp-coc-card.rpp-rmv-card .rpp-coc-cta.rpp-coc-cta { background: #8a5300 !important; }
              a.rpp-coc-card.rpp-rmv-card:hover .rpp-coc-cta.rpp-coc-cta { background: #6b4000 !important; }
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
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 15px !important;
                font-weight: 700;
                color: #1B3A6B;
                background: transparent;
                border: 2px solid #1B3A6B;
                border-radius: 6px;
                cursor: pointer;
              }
              .rpp-coc-pause:hover { background: rgba(27, 58, 107,0.06); }
              .rpp-coc-pause:focus-visible { outline: 3px solid #d1a847; outline-offset: 2px; }
              .rpp-coc-dots { display: inline-flex; gap: 7px; }
              .rpp-coc-dot {
                width: 11px; height: 11px; padding: 0;
                border-radius: 50%;
                border: 1px solid #1B3A6B;
                background: transparent;
                cursor: pointer;
              }
              .rpp-coc-dot.is-current { background: #1B3A6B; }

              /* Remodel calculator card: the cost-of-care heading size comes from
                 index.css rules keyed to that card's href, so this one sets its own. */
              main h3.rpp-rmv-heading.rpp-rmv-heading {
                font-size: 40px !important;
                font-weight: 900 !important;
                line-height: 1.1 !important;
                margin: 0 !important;
              }
              .rpp-rmv-card .rpp-coc-opt-name { font-weight: 600 !important; }
              main h3.rpp-rmv-heading.rpp-rmv-heading, main h3.rpp-rmv-heading span { white-space: normal !important; }
              /* Oct 27, 2026: the longer name ("What's My Home Worth After Remodeling?") was cut
                 to "...Worth After…" by a sitewide card rule that clamps headings to two lines. */
              /* Oct 27, 2026 (David: the titles "don't stick out enough"): the h3s were set to 900
                 but their two coloured spans were forced to regular 400 by the sitewide rule for
                 spans inside cards, so the titles rendered light. */
              html body main a.rpp-coc-card h3.coc-heading span,
              html body main a.rpp-coc-card h3.rpp-rmv-heading span { font-weight: 800 !important; letter-spacing: -0.01em; }
              html body main h3.rpp-rmv-heading.rpp-rmv-heading { display: block !important; -webkit-line-clamp: unset !important; overflow: visible !important; font-size: 36px !important; }
              @media (max-width: 640px) {
                html body main h3.rpp-rmv-heading.rpp-rmv-heading { font-size: 24px !important; }
                .rpp-rmv-card .rpp-coc-cta.rpp-coc-cta { white-space: normal; padding: 14px 22px !important; }
              }

              /* PHOTO CARDS (Oct 27, 2026, David, from a ChatGPT layout): a photo panel on
                 each calculator card, left on the cost card and right on the remodel card,
                 and an icon on every line. Phones: the photo becomes a short strip on top.
                 "rpp-calc-photo" avoids the index.css class-name traps (card, tile, btn, cta). */
              .rpp-coc-card.rpp-calc-photo-card {
                display: grid !important;
                grid-template-columns: minmax(0, 31%) minmax(0, 1fr);
                padding: 0 !important;
                overflow: hidden;
              }
              .rpp-coc-card.rpp-calc-photo-card.rpp-calc-photo-right { grid-template-columns: minmax(0, 1fr) minmax(0, 31%); }
              .rpp-calc-photo-right > .rpp-calc-photo { order: 2; }
              .rpp-calc-photo-card > .rpp-coc-layout.rpp-coc-layout { padding: 1.5rem 1.75rem; }
              .rpp-calc-photo.rpp-calc-photo { position: relative; min-height: 100%; }
              .rpp-calc-photo.rpp-calc-photo img {
                position: absolute !important;
                inset: 0;
                width: 100% !important;
                height: 100% !important;
                max-width: none !important;
                object-fit: cover !important;
                object-position: 50% 60%;
                display: block;
              }
              .rpp-calc-sub.rpp-calc-sub {
                font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
                font-size: 18px !important;
                font-weight: 500 !important;
                line-height: 1.45;
                color: #1c1917 !important;
                max-width: 30ch;
              }
              .rpp-calc-photo-card .rpp-coc-options.rpp-coc-options li { justify-content: flex-start; align-items: center; }
              .rpp-calc-photo-card .rpp-coc-options.rpp-coc-options li .rpp-coc-opt-name { flex: 1 1 auto; }
              .rpp-calc-icon.rpp-calc-icon {
                flex: none;
                width: 26px !important;
                height: 26px !important;
              }
              /* !important and the extra classes: index.css repaints any element whose inline
                 style holds certain hex colours (the "faint text" and gold rules), which turned
                 three of these icons charcoal. */
              html body main .rpp-coc-options svg.rpp-calc-icon.rpp-calc-icon { color: var(--ic, #272421) !important; }
              html body main .rpp-coc-options svg.rpp-calc-icon.rpp-calc-icon-remodel { color: #8a5300 !important; }
              @media (max-width: 768px) {
                .rpp-coc-card.rpp-calc-photo-card,
                .rpp-coc-card.rpp-calc-photo-card.rpp-calc-photo-right { grid-template-columns: 1fr; }
                .rpp-calc-photo-right > .rpp-calc-photo { order: 0; }
                .rpp-calc-photo.rpp-calc-photo { aspect-ratio: 2.6 / 1; min-height: 0; }
                .rpp-calc-photo-card > .rpp-coc-layout.rpp-coc-layout { padding: 1.1rem 1.25rem 1.25rem; }
              }
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

            ` }} />

            {/* ── Ask a question (Oct 8, 2026): answers from the guides themselves ── */}
            {/* Top margin (Oct 21, 2026, David): the box sat ~16px under the
                tiles, and the tile pulse grows them 3% into that gap. */}
            <div style={{ margin: "clamp(40px, 4vw, 56px) 0 4.5rem" }}>
              <AskBox />
              {/* My Real Property Plan (Oct 18, 2026): the guided alternative to asking. */}
              <p className="rpp-myplan-link" style={{ maxWidth: 860, margin: "18px auto 0", fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontSize: 19, lineHeight: 1.5, color: "#1c1917" }}>
                Not sure what to ask?{" "}
                <Link to="/my-plan" className="rpp-heading-link" style={{ color: "#1B3A6B", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3, fontSize: 19 }}>
                  Get a free step-by-step plan for your situation <RppArrow />
                </Link>
              </p>
            </div>

            {/* ── What is Real Property Planning? ──────────────────── */}
            <AboutTheHub />

            {/* ── Cost of Care Calculator — two columns ──────────────── */}
            <div>
              <a href="/cost-of-care-calculator" className="rpp-coc-card rpp-calc-photo-card group marquee-hover">
                <div className="rpp-calc-photo" aria-hidden="true">
                  <img src={calcPhotoCare800} srcSet={`${calcPhotoCare480} 480w, ${calcPhotoCare800} 800w, ${calcPhotoCare} 1200w`} sizes={CALC_PHOTO_SIZES} alt="" width={1200} height={800} loading="lazy" decoding="async" />
                </div>
                <div className="rpp-coc-layout">
                  <div className="rpp-coc-left">
                    <h3
                      className="coc-heading"
                      style={{
                        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      <span style={{ color: "#272421" }}>{t("costOfCare.headingPart1")}</span>{" "}
                      <span style={{ color: "#14283a" }}>{t("costOfCare.headingPart2")}</span>
                    </h3>

                    {/* Oct 27, 2026: a plain sentence about what the tool does replaced the
                        red "$3,145 – $13,155 / month" range line. */}
                    <span className="rpp-calc-sub">See typical monthly costs in Washington for six care options.</span>

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
                    {careOptions.map(({ option, care }) => {
                      const Icon = careIconFor(option.slug);
                      return (
                      <li key={option.slug}>
                        <Icon className="rpp-calc-icon" aria-hidden="true" strokeWidth={1.9} style={{ ["--ic" as string]: option.color }} />
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
                      );
                    })}
                  </ul>
                </div>
              </a>

              {/* ── What's My Remodel Worth? (Oct 14, 2026, owner) ── same card as the
                  cost of care calculator above, for King County homeowners. */}
              <a href="/whats-my-remodel-worth" className="rpp-coc-card rpp-rmv-card rpp-calc-photo-card rpp-calc-photo-right group marquee-hover" style={{ marginTop: "1.5rem" }}>
                <div className="rpp-calc-photo" aria-hidden="true">
                  <img src={calcPhotoRemodel800} srcSet={`${calcPhotoRemodel480} 480w, ${calcPhotoRemodel800} 800w, ${calcPhotoRemodel} 1200w`} sizes={CALC_PHOTO_SIZES} alt="" width={1200} height={800} loading="lazy" decoding="async" />
                </div>
                <div className="rpp-coc-layout">
                  <div className="rpp-coc-left">
                    <h3 className="rpp-rmv-heading" style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", margin: 0, lineHeight: 1.1 }}>
                      {/* Renamed Oct 27, 2026 (David): "What's My Remodel Worth?" read as the
                          remodel's cost. */}
                      <span style={{ color: "#272421" }}>What's My Home Worth</span>{" "}
                      <span style={{ color: "#14283a" }}>After Remodeling?</span>
                    </h3>
                    <span className="rpp-calc-sub">See how much value a remodel could add to your home in King, Snohomish &amp; Pierce Counties.</span>
                    <span className="rpp-coc-cta">Try the calculator</span>
                  </div>
                  <ul className="rpp-coc-options">
                    {REMODEL_LINES.map(([Icon, line]) => (
                      <li key={line}>
                        <Icon className="rpp-calc-icon rpp-calc-icon-remodel" aria-hidden="true" strokeWidth={1.9} />
                        <span className="rpp-coc-opt-name">{line}</span>
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
