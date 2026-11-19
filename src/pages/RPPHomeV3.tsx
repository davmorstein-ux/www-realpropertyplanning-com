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
/* rpp-hero-2042 (Oct 29, 2026, night): David's wider 2.95:1 version, so a short
   laptop screen shows the whole room (ceiling, full door, floor) and the
   tiles still fit on the first screen. The door's foot sits ~63% down the
   frame, which leaves room for the tiles below it. */
import doorLg from "@/assets/hero/rpp-hero-door-garnet-600.webp";
import doorSm from "@/assets/hero/rpp-hero-door-garnet-300.webp";
/* Oct 31, 2026: all hero files rebuilt from David's 4x upscale of the
   original (8616x2920), so they are sharper; plus a 2880 copy for
   high-resolution laptop screens and a 1370 phone copy for 3x iPhones.
   Same framing and the same phone crop (x 760, y 60, 913x500 at 2154 wide). */
/* Phone crop zoomed out (Oct 28, 2026, David chose option "B"): cut wider
   from the same 2035 render, 2100x752 from x=1740 of the 3840 band (was
   1876 wide from x=1964), right edge kept, same 1200x430 shape, so the image
   is no taller and the journey tiles stay on the first screen. More of the
   room's left side shows (full mirror, plant, table); the door is a little
   smaller. */
/* rpp-hero-2042-mobile (Oct 30, 2026, David chose layout "B" for phones): a
   913x500 crop of the wide 2042 photo, room and door centred, used under the
   slogan, which sits on cream above it. Retired Nov 19, 2026: phones now
   show the whole wide photo (see PHONES, FIRST SCREEN below). */
/* A true 900px copy (Oct 7, 2026): the srcSet below called the 1200px file
   "900w", so phones downloaded more than they needed. */
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tilePlanning from "@/assets/tiles/tile-planning-ahead-v2.webp";
import tileHelping from "@/assets/tiles/tile-helping-loved-one-v2.webp";
import tileEstate from "@/assets/tiles/tile-handling-estate-v2.webp";
import tileProfessionals from "@/assets/tiles/tile-find-professionals-v2.webp";
/* -v2 (Oct 30, 2026): David's re-renders, sharper with more headroom,
   cropped to the same 1160x793 shape (about 2% off the top, 4% off the
   bottom), so no layout changes. 640px copies (Oct 6, 2026): the tiles show at about 180px wide on phones and
   260px on desktop (half the 1040px grid below 1024px), so the full-size files
   were two to four times what most screens used. */
import tilePlanningSm from "@/assets/tiles/tile-planning-ahead-v2-640.webp";
import tileHelpingSm from "@/assets/tiles/tile-helping-loved-one-v2-640.webp";
import tileEstateSm from "@/assets/tiles/tile-handling-estate-v2-640.webp";
import tileProfessionalsSm from "@/assets/tiles/tile-find-professionals-v2-640.webp";
/* 420px copies (Nov 1, 2026): on phones the tiles show about 176px wide, so
   even the 640px files were roughly three times what a phone needs
   (PageSpeed's "Improve image delivery"). About 18 KB each instead of 30-47. */
import tilePlanningXs from "@/assets/tiles/tile-planning-ahead-v2-420.webp";
import tileHelpingXs from "@/assets/tiles/tile-helping-loved-one-v2-420.webp";
import tileEstateXs from "@/assets/tiles/tile-handling-estate-v2-420.webp";
import tileProfessionalsXs from "@/assets/tiles/tile-find-professionals-v2-420.webp";
const TILE_XSMALL: Record<string, string> = {
  [tilePlanning]: tilePlanningXs,
  [tileHelping]: tileHelpingXs,
  [tileEstate]: tileEstateXs,
  [tileProfessionals]: tileProfessionalsXs,
};
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
import { setFetchPriority } from "@/lib/imgPriority";
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

/* DOOR HERO (Nov 19, 2026). Every rule is scoped to .rpp-door-hero and
   written at high specificity with !important because index.css forces
   main h1 to 26px, every h1-h4 margin, and p margins/line-height. */
const DOOR_HERO_CSS = `
html body main div.rpp-door-hero.rpp-door-hero { background: #faf8f4; }
html body main div.rpp-door-hero div.rpp-door-inner.rpp-door-inner {
  width: min(1120px, 84vw, calc(71vw + 8px), calc(100vw - 3rem)); margin: 0 auto; /* same width as the four tiles below, so the edges line up */
  display: grid; grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas: "slogan door" "line door";
  column-gap: clamp(24px, 5vw, 96px); align-items: center;
  padding: clamp(18px, 2.6vw, 40px) 0 clamp(14px, 2vw, 30px);
}
html body main div.rpp-door-hero p.rpp-door-slogan.rpp-door-slogan {
  grid-area: slogan; align-self: end; margin: 0 !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-weight: 800 !important; font-size: clamp(44px, 5.4vw, 80px) !important;
  line-height: 1.02 !important; letter-spacing: -0.02em !important; color: #1c1917 !important;
  text-shadow: 0 1px 1px rgba(40,25,15,0.10), 0 6px 10px rgba(40,25,15,0.12), 0 16px 28px rgba(40,25,15,0.14);
  max-width: none !important; text-align: left !important;
}
html body main div.rpp-door-hero h1#rpp-hero-heading.rpp-door-line {
  grid-area: line; align-self: start; margin: clamp(14px, 1.6vw, 24px) 0 0 !important; padding: 0 !important;
  font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
  font-weight: 500 !important; font-size: clamp(19px, 1.75vw, 25px) !important;
  line-height: 1.45 !important; letter-spacing: 0 !important; color: #2f2b27 !important;
  max-width: 31em; text-align: left !important;
}
html body main div.rpp-door-hero div.rpp-door-inner > picture { /* no class on <picture>: vite.config.ts matches a bare <picture> tag for the preload */ grid-area: door; display: block; line-height: 0; }
html body main div.rpp-door-hero img.rpp-door-img.rpp-door-img {
  display: block; width: auto !important; max-width: none !important;
  height: clamp(260px, 27vw, 400px) !important; aspect-ratio: 600 / 1103;
}
@media (min-width: 901px) {
  /* No photograph any more, so the tiles no longer overlap the hero's bottom edge. */
  html body main div.rpp-funnel-block.rpp-funnel-block > div.rpp-funnel-grid.rpp-funnel-grid.rpp-funnel-grid { margin-top: 0 !important; }
  html body main section#rpp-start-here.rpp-start-here, html body main section#rpp-start-here { padding-top: 0.5rem !important; }
}
@media (max-width: 900px) {
  html body main div.rpp-door-hero div.rpp-door-inner.rpp-door-inner {
    width: calc(100vw - 40px); grid-template-areas: "slogan door" "line line";
    column-gap: 16px; padding: 18px 0 6px;
  }
  html body main div.rpp-door-hero p.rpp-door-slogan.rpp-door-slogan {
    align-self: center; font-size: clamp(34px, 10.4vw, 48px) !important; max-width: 6.4em !important;
  }
  html body main div.rpp-door-hero h1#rpp-hero-heading.rpp-door-line { margin-top: 10px !important; font-size: 18px !important; line-height: 1.4 !important; max-width: none; }
  html body main div.rpp-door-hero img.rpp-door-img.rpp-door-img { height: clamp(118px, 34vw, 170px) !important; }
}
`;

const HERO_WIDE_CSS = `
/* LAPTOP HERO (Oct 29, 2026, David approved the mock-up after several rounds).
   Above 900px only; phones and anything 900px or narrower are untouched.
   - Taller 2.4:1 photo (rpp-hero-2041) under a 40% cream wash, so the slogan
     and tiles lead and the door still shows.
   - Slogan "Your next / chapter begins" in Playfair Display (the only serif
     on the site besides the tile titles), "next" and "chapter" in the door
     red (David, Oct 30, 2026; earlier "Where the next chapter begins" and
     "Where transitions begin").
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
/* PHONES (900px and narrower), Oct 30, 2026, layout "B": the slogan on cream
   above the photo, the photo, then the description under a short centred
   charcoal rule. "next chapter" floats with a smaller cast shadow. */
html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m { display: none !important; }
@media (max-width: 900px) {
  html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m {
    display: block !important;
    background: #f5f2ec;
    margin: 0 !important;
    padding: 18px 18px 14px !important;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
    font-weight: 600 !important;
    font-size: clamp(32px, 9.8vw, 52px) !important;
    line-height: 1.04 !important;
    letter-spacing: -0.005em !important;
    color: #272421 !important;
    text-align: left !important;
    max-width: none !important;
  }
  html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m em {
    display: inline-block; transform: translateY(-2px);
    font-family: inherit !important; font-size: inherit !important;
    font-style: italic !important; font-weight: 500 !important; color: #B0274F !important;
    text-shadow: 4px 9px 4px rgba(70,30,35,0.28), 9px 18px 12px rgba(70,30,35,0.16);
  }
  html body main h1#rpp-tagline { position: relative; padding-top: 14px !important; }
  html body main h1#rpp-tagline::before { content: ""; position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 44px; height: 2px; border-radius: 2px; background: #1c1917; }
}
/* Headline line breaks: phones show two lines ("Senior transition, probate &
   estate" / "guidance for Washington families."); laptops show three
   ("Senior transition," / "probate & estate guidance" / "for Washington
   families.") by joining the two spans and turning these breaks on. */
html body main h1#rpp-tagline br.rpp-br-wide { display: none; }
@media (min-width: 901px) {
  html body main .rpp-hero-figure img.rpp-hero-img.rpp-hero-img { aspect-ratio: 2154 / 730 !important; }
  html body main div.rpp-hero-figure.rpp-hero-figure::after {
    content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
    /* Floor strip behind the tiles faded more (Oct 30, 2026, David: the busy
       wood and rug "directly above the tiles"). Starts below the door's foot
       (about 67% down, level with the tile tops) and deepens to 80-88%. */
    /* Oct 31, 2026 (David, from a ChatGPT review): the wash now varies across
       the width. Left (behind the slogan) keeps its old strength; it eases
       off from about 35% across so the door, navy wall and windows get
       roughly 15% more colour back. The floor fade at the bottom is a
       separate layer, unchanged in shape, so the tiles still sit on a soft
       base. Two layers: bottom fade on top, side-to-side wash beneath. */
    background:
      linear-gradient(180deg, rgba(250,248,244,0) 0%, rgba(250,248,244,0) 62%, rgba(250,248,244,0.30) 70%, rgba(250,248,244,0.74) 82%, rgba(250,248,244,0.84) 100%),
      linear-gradient(90deg, rgba(250,248,244,0.70) 0%, rgba(250,248,244,0.66) 22%, rgba(250,248,244,0.54) 34%, rgba(250,248,244,0.32) 46%, rgba(250,248,244,0.22) 60%, rgba(250,248,244,0.24) 100%);
    /* Oct 31, 2026 (David): left side lighter (0.50 -> 0.70 at the edge),
       fading to the old strength by ~46% across, so the leaf shadows behind
       the slogan and description are softer. Door side unchanged. */
  }
  html body main .rpp-hero-figure > div.rpp-hero-scrim.rpp-hero-scrim {
    z-index: 2; left: 3.9% !important; top: 5% !important; max-width: 46% !important;
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
    /* Floating slogan (Oct 30, 2026, David): a cream glow keeps it legible on
       the wall, then three soft drop shadows below it lift the letters off the
       page, the same light as the floating tiles. */
    /* Flat (Oct 30, 2026, David): "Your" and "begins" sit flat on the wall,
       no shadow or rim. Only the red "next chapter" floats (rule below). */
    text-shadow: none;
  }
  /* Floating "next chapter" (Oct 30, 2026, David): a cast shadow, offset down
     and right with a gap, in a warm dark tone, so the red words read as
     lifted off the wall; they also sit 3px higher. */
  html body main p.rpp-hero-slogan.rpp-hero-slogan em {
    display: inline-block;
    transform: translateY(-3px);
    text-shadow: 6px 14px 5px rgba(70,30,35,0.30), 12px 26px 16px rgba(70,30,35,0.18), 20px 40px 30px rgba(70,30,35,0.10) !important;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important; font-style: italic !important; font-weight: 500 !important;
    font-size: inherit !important; color: #B0274F !important;
  }
  html body main p.rpp-hero-slogan.rpp-hero-slogan span.rpp-hero-slogan-end {
    display: inline-block !important; padding-left: 0;
    font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important;
    line-height: inherit !important; color: inherit !important;
  }
  /* Oct 29, 2026 evening (David): the description dropped lower and enlarged,
     so it reads as its own line rather than a caption tucked under the slogan. */
  html body main h1#rpp-tagline { margin: clamp(20px, 2vw, 36px) 0 0 !important; text-align: left !important; }
  /* Description, calmer (Oct 30, 2026, David: "a bit cluttered"; chose B):
     two even lines, a short door-red rule above it that echoes the slogan's
     red words, medium weight and near-black so it reads on the sunlit wall. */
  html body main h1#rpp-tagline { position: relative; padding-top: 20px !important; }
  /* Rule changed Oct 30, 2026 (David): short charcoal line CENTRED over the
     two description lines (was door red at the left edge). The h1 shrinks to
     its text width so "centre" means the centre of the description. */
  html body main h1#rpp-tagline { width: fit-content; }
  html body main h1#rpp-tagline::before { content: ""; position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 56px; height: 2px; border-radius: 2px; background: #1c1917; }
  html body main h1#rpp-tagline span.rpp-tagline-line-v2.rpp-tagline-line-v2 {
    display: block !important;
    font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
    font-size: clamp(18px, 1.5vw, 23px) !important;
    /* 600 and the site's body near-black (Oct 30, 2026, David: "could be more
       contrast"). The colour already measured 9-13:1 on the wall; the medium
       weight is what read as faint next to the slogan. */
    font-weight: 600 !important;
    line-height: 1.45 !important;
    letter-spacing: 0 !important;
    color: #1c1917 !important;
    text-shadow: 0 0 16px rgba(250,248,244,0.95) !important;
  }
  html body main .rpp-hero-scrim span.rpp-tagline-rule.rpp-tagline-rule { display: none !important; }
  /* Two fixed lines on laptops (Oct 30, 2026, David: the line ran across the
     wall in one long row on his screen). Each span is its own line:
     "Senior transition, probate & estate" / "guidance for families in
     Washington State." The old in-span breaks are off. Before this the
     break depended on the column width, so wide windows got one line. */
  html body main h1#rpp-tagline.rpp-head3 span.rpp-tagline-line-v2.rpp-tagline-line-v2 { display: block !important; white-space: nowrap; }
  html body main h1#rpp-tagline.rpp-head3 br.rpp-br-wide { display: none !important; }

  html body main section#rpp-start-here { padding-top: 0 !important; position: relative; z-index: 3; }
  html body main div.rpp-funnel-block {
    display: flex; flex-direction: column;
    /* 71vw + 8px (Oct 30, 2026, David: the door must never be blocked):
       the tile photos must be no taller than the strip of hero below the
       door's foot. In rpp-hero-2042 the door and threshold end 64% down the
       frame, leaving 36% of the photo's full height (12.2vw) below them;
       a tile photo is (width - 72px) / 4 x 793/1160 tall. Solving for a
       ~12px gap gives this width. Change it with the photo. */
    --rpp-gw: min(1120px, 84vw, calc(71vw + 8px), calc(100vw - 3rem));
  }
  /* Short laptop screens (Oct 29, 2026, night): slightly narrower tiles, so
     the whole tiles fit on the first screen without cropping the photos. */
  @media (max-height: 780px) {
    html body main div.rpp-funnel-block.rpp-funnel-block { --rpp-gw: min(1020px, 76vw, calc(71vw + 8px), calc(100vw - 3rem)); }
  }
  /* HERO TEXT CENTRED IN THE WALL SPACE (Oct 31, 2026, David: an empty band
     opened between the description and the tiles on taller screens). The
     slogan and description stay together as one block, centred vertically
     between the top of the photo and the tops of the tiles, so spare
     height splits evenly above and below. The tile-width variable is
     repeated on the hero (same values) because the tiles' photo height,
     which sets where the tiles start, is calculated from it. This replaces
     the old top-anchored 17%. */
  html body main div.rpp-hero-figure.rpp-hero-figure { --rpp-gw: min(1120px, 84vw, calc(71vw + 8px), calc(100vw - 3rem)); }
  @media (max-height: 780px) {
    html body main div.rpp-hero-figure.rpp-hero-figure { --rpp-gw: min(1020px, 76vw, calc(71vw + 8px), calc(100vw - 3rem)); }
  }
  html body main .rpp-hero-figure > div.rpp-hero-scrim.rpp-hero-scrim.rpp-hero-scrim {
    top: 0 !important;
    bottom: calc((var(--rpp-gw) - 72px) / 4 * 793 / 1160 + 6px) !important;
    justify-content: center !important;
    padding: 14px 0 !important;
  }
  /* Short laptop screens, second part (Oct 30, 2026): the option B tiles are
     taller, so the hero gives up a little of its ceiling (cropped from the
     top only; the door's foot stays above the tiles) until the whole tiles
     fit on the first screen. Taller screens show the full photo. */
  @media (max-height: 860px) {
    html body main .rpp-hero-figure img.rpp-hero-img.rpp-hero-img.rpp-hero-img {
      aspect-ratio: auto !important; object-fit: cover !important; object-position: 50% 100% !important;
      /* Never crops more than 14% (ceiling only), so the top of the door always
         shows; on very short windows the question may then sit just below
         the fold. 182px = the overlapping label (~75px) + gap + "What brings you here today?" (Oct 30, 2026, David: the question should be fully on the first screen). */
      height: max(calc(100vw * 730 / 2154 * 0.86), min(calc(100vw * 730 / 2154), calc(100vh - var(--header-height, 130px) - 182px))) !important;
    }
    /* On the shortest screens the hero text scales with the window height too,
       so the slogan and description never reach the tiles. */
    html body main p.rpp-hero-slogan.rpp-hero-slogan { font-size: clamp(36px, min(4.2vw, 7.2vh), 64px) !important; }
    html body main h1#rpp-tagline { margin-top: clamp(12px, 2.2vh, 30px) !important; }
    html body main h1#rpp-tagline span.rpp-tagline-line-v2.rpp-tagline-line-v2 { font-size: clamp(17px, min(1.5vw, 2.9vh), 23px) !important; }
  }
  html body main div.rpp-funnel-block > div.rpp-funnel-head.rpp-funnel-head { order: 2; margin: 1.1rem 0 0 !important; }
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
  /* Oct 30, 2026 (David chose "option B" plus a higher float): deeper, wider
     shadow and a ground shadow further below the tile, so the gap reads as
     height. The tile itself is not moved, so the photo/label seam stays on
     the hero's bottom edge. */
  html body main .rpp-funnel-grid div.rpp-jt.rpp-jt {
    border: 0 !important;
    border-radius: 16px;
    background: #FBF8F2;
    box-shadow: 0 1px 1px rgba(39,36,33,0.10), 0 4px 8px rgba(39,36,33,0.10), 0 14px 28px rgba(39,36,33,0.16), 0 32px 60px rgba(39,36,33,0.22), 0 60px 110px rgba(39,36,33,0.24);
  }
  html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link { position: relative; }
  html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link::after {
    content: ""; position: absolute; left: 14%; right: 14%; bottom: -44px; height: 20px;
    border-radius: 50%; z-index: -1; pointer-events: none; filter: blur(7px); opacity: 0.85;
    background: radial-gradient(ellipse at center, rgba(39,36,33,0.30) 0%, rgba(39,36,33,0.12) 45%, rgba(39,36,33,0) 72%);
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  html body main .rpp-funnel-grid div.rpp-jt.rpp-jt { transition: transform 0.25s ease, box-shadow 0.25s ease; }
  @media (hover: hover) {
    /* Hover: the tile rises 8px, its shadow deepens, and its ground shadow
       spreads and fades, as a lifted object's would. */
    html body main .rpp-funnel-grid .group:hover div.rpp-jt.rpp-jt {
      transform: translateY(-8px);
      border-color: transparent;
      box-shadow: 0 2px 2px rgba(39,36,33,0.10), 0 6px 12px rgba(39,36,33,0.10), 0 20px 36px rgba(39,36,33,0.16), 0 42px 72px rgba(39,36,33,0.22), 0 76px 130px rgba(39,36,33,0.26);
    }
    html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link:hover::after { transform: scaleX(1.12); opacity: 0.55; }
  }
  @media (prefers-reduced-motion: reduce) {
    html body main .rpp-funnel-grid div.rpp-jt.rpp-jt, html body main .rpp-funnel-grid a.rpp-jt-link.rpp-jt-link::after { transition: none; }
  }
  /* Tile labels (Oct 30, 2026, David). Warm cream, the slogan's serif, one
     line. The short coloured rule above the title is gone ("Is it necessary?
     ... remove it, move the text up"): the title sits at the top of the
     label using the full width, and the round button in the tile's colour
     sits in the label's bottom-right corner. These four homepage tiles only;
     the rest of the site keeps the thin ring arrow. */
  html body main .rpp-funnel-grid div.rpp-jt-label.rpp-jt-label {
    position: relative; display: block !important; background: #FBF8F2;
    padding: 12px 16px 6px; min-height: 0;
  }
  html body main .rpp-funnel-grid span.rpp-jt-rule.rpp-jt-rule { display: none !important; }
  html body main .rpp-funnel-grid span.rpp-jt-row.rpp-jt-row { display: block !important; }
  html body main .rpp-funnel-grid .rpp-jt span.rpp-jt-title.rpp-jt-title.rpp-jt-title {
    display: block;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
    font-weight: 600 !important;
    /* One line, sized from the tile width so the longest title ("Help an
       Aging Parent", about 9.3em) fits the full label width; 24px cap. */
    font-size: clamp(16px, calc(((var(--rpp-gw) - 72px) / 4 - 34px) / 9.3), 24px) !important;
    line-height: 1.15 !important;
    color: #1f1c19 !important;
    letter-spacing: -0.005em;
    white-space: nowrap;
    /* leaves the bottom row free for the button */
    margin-bottom: 31px;
  }
  /* Arrow (Oct 31, 2026, David): back to the sitewide thin ring with the
     chevron, in the tile's colour, instead of the solid round button. Four
     solid colour dots were the loudest thing in the row; the ring keeps the
     colour coding at a fraction of the weight and matches every other
     arrow on the site. */
  html body main .rpp-funnel-grid span.rpp-jt-arrow.rpp-jt-arrow {
    position: absolute; right: 10px; bottom: 7px;
    width: 30px; height: 30px; border-radius: 50%;
    background: transparent; color: var(--tile); display: inline-flex; align-items: center; justify-content: center;
    box-shadow: none;
  }
  /* Thin dark outline around the whole tile (Oct 30, 2026, David: it adds to
     the floating effect; a crisp edge separates the tile from the room). */
  html body main .rpp-funnel-grid div.rpp-jt.rpp-jt { outline: 1px solid rgba(39,36,33,0.42); outline-offset: -1px; }
}
/* PHONES AND TABLETS (900px and narrower), Oct 31, 2026 (David): the same
   look as the laptop tiles. Warm cream, serif title, no coloured rule, thin
   ring arrow in the tile's colour, thin dark outline and a floating shadow
   scaled down for the 2 x 2 grid. */
@media (max-width: 900px) {
  html body main .rpp-funnel-grid div.rpp-jt.rpp-jt {
    border: 0 !important; border-radius: 14px; background: #FBF8F2;
    outline: 1px solid rgba(39,36,33,0.30); outline-offset: -1px;
    box-shadow: 0 1px 1px rgba(39,36,33,0.10), 0 3px 6px rgba(39,36,33,0.10), 0 10px 20px rgba(39,36,33,0.14), 0 22px 40px rgba(39,36,33,0.14);
  }
  html body main .rpp-funnel-grid div.rpp-jt-label.rpp-jt-label { background: #FBF8F2; }
  html body main .rpp-funnel-grid span.rpp-jt-rule.rpp-jt-rule { display: none !important; }
  html body main .rpp-funnel-grid .rpp-jt span.rpp-jt-title.rpp-jt-title.rpp-jt-title {
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
    font-weight: 600 !important; color: #1f1c19 !important; letter-spacing: -0.005em;
  }
}
/* Small laptops and tablets in landscape (901-1199px): tiles about
   165-210px wide; titles may wrap there. */
@media (min-width: 901px) and (max-width: 1199px) {
  html body main .rpp-funnel-grid div.rpp-jt-label.rpp-jt-label { padding: 12px 12px 10px; }
  html body main .rpp-funnel-grid .rpp-jt span.rpp-jt-title.rpp-jt-title.rpp-jt-title { font-size: 17px !important; white-space: normal; margin-bottom: 36px; }
}
/* SLOGAN, THREE LINES (Oct 31, 2026, David). "Your" / "next chapter" in a
   bolder red italic (Playfair 700 italic) / "begins." A gold swoosh under the
   red line replaces the short charcoal rule over the description on laptops.
   Only the red line keeps the floating shadow; no 3D lettering. */
html body main p.rpp-hero-slogan span.rpp-sl-line,
html body main p.rpp-hero-slogan-m span.rpp-sl-line { display: block !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; white-space: nowrap; }
/* Oct 31, 2026 (David): "Your" 10% smaller and tucked closer to "next
   chapter", so the red line leads and the two read as one headline. */
/* Nov 1, 2026 (David's refinement): "Your" a further 12% smaller
   (0.9em -> 0.792em) and the gap to "next chapter" tightened slightly. */
html body main p.rpp-hero-slogan span.rpp-sl-box > span.rpp-sl-line:first-child.rpp-sl-line,
html body main p.rpp-hero-slogan-m span.rpp-sl-box > span.rpp-sl-line:first-child.rpp-sl-line { font-size: 0.792em !important; margin-bottom: -0.15em !important; }
html body main p.rpp-hero-slogan span.rpp-sl-mid { padding-left: 0.42em; }
html body main p.rpp-hero-slogan-m span.rpp-sl-mid { padding-left: 0.3em; }
html body main p.rpp-hero-slogan.rpp-hero-slogan em,
html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m em { font-weight: 700 !important; color: #A51F36 !important; }
html body main svg.rpp-sl-swoosh { display: block; width: 6.9em; height: 0.26em; margin: 0.04em 0 0.08em 0.3em; overflow: visible; }
html body main p.rpp-hero-slogan-m svg.rpp-sl-swoosh { width: 6.6em; margin-left: 0.2em; }
@media (min-width: 901px) {
  html body main h1#rpp-tagline::before { display: none !important; }
  html body main h1#rpp-tagline { padding-top: 0 !important; }
  /* Three lines are taller than two: about 20% smaller than the two-line
     version, and capped by window height so it never reaches the tiles. */
  /* Two lines again (Oct 31, 2026, David dropped "begins."): "Your" /
     "next chapter", so the slogan goes back up to about its two-line size,
     still capped by window height. */
  html body main p.rpp-hero-slogan.rpp-hero-slogan.rpp-hero-slogan { font-size: clamp(36px, min(4.1vw, 7vh), 62px) !important; line-height: 1.0 !important; }
  html body main h1#rpp-tagline.rpp-head3 { margin-top: clamp(10px, 1.4vw, 24px) !important; }
}
/* SLOGAN (Oct 31, 2026, David): "Your next chapter", no "begins.", no
   period. Two lines: heavy near-black "Your", bold red italic "next
   chapter" with the arched gold swoosh under it. The staircase notes below
   describe the earlier three-line version; the step-right rule no longer
   matches anything.
   SLOGAN, STAIRCASE (Oct 31, 2026, David's reference). Flat, no shadow;
   heavy near-black "Your" and "begins." (Playfair 800); bold red italic
   "next chapter" spanning the full width; "begins." steps right, flush with
   the end of "chapter"; an arched gold swoosh runs behind the tail of the
   "p". The box is as wide as the red line, so nothing gets wider. */
html body main p.rpp-hero-slogan span.rpp-sl-box.rpp-sl-box,
html body main p.rpp-hero-slogan-m span.rpp-sl-box.rpp-sl-box { display: inline-block !important; text-align: left; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; line-height: inherit !important; color: inherit !important; }
html body main p.rpp-hero-slogan.rpp-hero-slogan span.rpp-sl-line.rpp-hero-slogan-end.rpp-hero-slogan-end { display: block !important; }
html body main p.rpp-hero-slogan.rpp-hero-slogan.rpp-hero-slogan,
html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m.rpp-hero-slogan-m { font-weight: 800 !important; color: #1c1917 !important; }
html body main p.rpp-hero-slogan span.rpp-sl-mid.rpp-sl-mid,
html body main p.rpp-hero-slogan-m span.rpp-sl-mid.rpp-sl-mid { padding-left: 0; position: relative; z-index: 1; }
html body main p.rpp-hero-slogan.rpp-hero-slogan span.rpp-sl-line:last-child,
html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m span.rpp-sl-line:last-child { text-align: right; }
html body main p.rpp-hero-slogan.rpp-hero-slogan.rpp-hero-slogan em,
html body main p.rpp-hero-slogan-m.rpp-hero-slogan-m.rpp-hero-slogan-m em { text-shadow: none !important; transform: none; font-weight: 700 !important; color: #A51F36 !important; }
/* Gold underline under "next chapter" removed Nov 1, 2026 (David): the
   lettering stands on its own. The SVG is gone from both slogans. */
/* PHONES, FIRST SCREEN (Nov 19, 2026, David chose it from a mock-up:
   "Hero: whole photo, full width", slogan below). Replaces the Nov 12
   layout "B" (slogan beside a half-width photo), which cropped the photo
   to a tall sliver around the door.
   - Phones show the ENTIRE wide photo, the same picture as laptops
     (rpp-hero-2042 / -1280, 2154x730), uncropped across the full width:
     about 132px tall on a 390px phone. David asked for the whole image,
     not the old 913x500 phone crop, which cut off both sides of the room.
     The -mobile files are no longer used by this page.
   - "Your next chapter" on ONE centred line under the strip (same Playfair
     slogan and red as before; only the arrangement changed).
   - The tiles themselves are unchanged (David chose "hero only").
   - No added text: a "free, independent place to start" line and a
     "written by" line were mocked under the headline and David dropped
     both (not necessary; the homepage names no one). Do not re-add.
   No backticks in this block. */
/* Nov 13, 2026, every width: the tile section ends with the full-width About
   band, so it carries no bottom padding (a global rule was adding some). */
html body main section#rpp-start-here.rpp-start-here, html body main section#rpp-start-here { padding-bottom: 0 !important; }
@media (max-width: 900px) {
  html body main div.rpp-hero-figure.rpp-hero-figure { display: grid !important; grid-template-columns: minmax(0, 1fr); background: #f5f2ec; }
  html body main div.rpp-hero-figure > picture { grid-column: 1; grid-row: 1; display: block; min-width: 0; }
  html body main .rpp-hero-figure img.rpp-hero-img.rpp-hero-img.rpp-hero-img { aspect-ratio: auto !important; width: 100% !important; height: auto !important; aspect-ratio: 2154 / 730 !important; object-fit: cover !important; object-position: 50% 50% !important; }
  html body main div.rpp-hero-figure p.rpp-hero-slogan-m.rpp-hero-slogan-m.rpp-hero-slogan-m { grid-column: 1; grid-row: 2; align-self: center; padding: 8px 12px 0 !important; text-align: center !important; font-size: clamp(28px, 8.8vw, 52px) !important; line-height: 1.05 !important; }
  html body main div.rpp-hero-figure p.rpp-hero-slogan-m.rpp-hero-slogan-m span.rpp-sl-line.rpp-sl-line { display: inline !important; text-align: center !important; white-space: nowrap; }
  html body main div.rpp-hero-figure p.rpp-hero-slogan-m.rpp-hero-slogan-m.rpp-hero-slogan-m em { display: inline !important; }
  html body main .rpp-hero-figure > div.rpp-hero-scrim.rpp-hero-scrim.rpp-hero-scrim { grid-column: 1; grid-row: 3; }
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
        {/* ── Hero (Nov 19, 2026, David's "door" concept) ──────────────────
            Replaces the entryway photograph. Cream ground, the slogan in DM
            Sans 800 with a soft layered shadow so it seems to float, the
            description as the page's h1, and a garnet front door opening
            OUTWARD toward the viewer (like the logo's door) onto a garden path.
            The door art is David's ChatGPT render, recoloured to the logo's
            garnet (#8F1A2B sampled from rpp-logo-v30), transparent PNG,
            trimmed: rpp-hero-door-garnet-300/-600.webp (854x1570 source).
            The <picture> keeps id="rpp-hero-image" because vite.config.ts
            reads it to add the LCP preload links. Styles: DOOR_HERO_CSS. */}
        <style dangerouslySetInnerHTML={{ __html: DOOR_HERO_CSS }} />
        <div className="rpp-door-hero">
          <div className="rpp-door-inner">
            <p className="rpp-door-slogan">
              {t("hero.sloganStart")} {t("hero.sloganAccent")} {t("hero.sloganAccent2")}.
            </p>
            <h1 id="rpp-hero-heading" className="rpp-door-line">
              {head3 ? t("hero.doorLine") : `${t("hero.taglineLine1")} ${t("hero.taglineLine2")}`}
            </h1>
            <picture>
              <source media="(max-width: 900px)" srcSet={`${doorSm} 300w, ${doorLg} 600w`} sizes="100px" width={300} height={552} />
              <img
                id="rpp-hero-image"
                className="rpp-door-img"
                src={doorLg}
                srcSet={`${doorSm} 300w, ${doorLg} 600w`}
                sizes="(min-width: 901px) 240px, 100px"
                width={600}
                height={1103}
                alt={t("hero.doorAlt")}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
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
        {/* Bottom padding 0 (Nov 13, 2026): the section now ends with the About
            band, which is full-width and coloured, so 4rem of cream under it
            read as an empty strip before the guides. */}
        <section id="rpp-start-here" style={{ backgroundColor: "#faf8f4", padding: "2.5rem 0 0" }}>
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
                          srcSet={TILE_SMALL[imgSrc] ? `${TILE_XSMALL[imgSrc]} 420w, ${TILE_SMALL[imgSrc]} 640w, ${imgSrc} 1160w` : undefined}
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

          </div>
        </section>

        <HomepagePopularResources />
        {/* ── Calculators (moved Nov 13, 2026, David, after the first-time-visitor
            audit): the two calculator cards used to sit above "The guides people
            open most". The guides answer what most visitors arrive with, so they
            now come first and the calculators follow in their own section. The
            card styles are the style blocks in the section above; they are not
            scoped to it. ── */}
        <section id="rpp-home-calculators" style={{ backgroundColor: "#faf8f4", padding: "3.5rem 0 4rem" }}>
          <div className="rpp-start-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
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
                  <div className="rpp-coc-figs">
                  {/* Oct 31, 2026 (outside review): say plainly these are estimates. */}
                  <span className="rpp-coc-est">Typical monthly cost in Washington (estimates)</span>
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
        {/* <HomepageTestimonials /> — hidden until real testimonials are collected */}
        <HomepageFAQ />
      </main>
      <Footer />
    </>
  );
};

export default RPPHomeV3;
