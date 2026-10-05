# Pages rules

Moved from the root AGENTS.md (Oct 5, 2026) to keep it short. Section numbers match the original.

## 6. Adding a page: the full checklist

1. The page in `src/pages/`.
2. `src/App.tsx`: the lazy import and the `<Route>`.
3. `public/sitemap.xml`: alphabetical, same format as neighbours. Then run
   `node scripts/check-sitemap.mjs`; it must report no drift. This is the one
   file to edit: the build splits it into `sitemap-main.xml`,
   `sitemap-afh-club.xml` and `sitemap-afh-directory.xml` behind a sitemap
   index at `/sitemap.xml` (dist only, see the end of `vite.config.ts`).
   Also put the page on a visitor site map in `src/data/siteMaps.ts`, unless a
   header menu, the guide library or the calculator index already lists it;
   `src/test/siteMaps.test.ts` fails on any live page on neither map.
4. `vite.config.ts`: a route-metadata entry (title, description, h1, quick
   answer, intro, FAQs) so crawlers get real content.
5. If it is an AFH Club guide: the grid **and** the carousel in
   `src/pages/AFHResources.tsx` (two separate lists), with a 3:4 cover at
   1024 x 1365 WebP in `public/`. **Name the file `something-cover.webp`.** A
   rule in `index.css` gives every image with `-cover` in its filename a
   thin edge (2px at 40% dark), which light covers need to stay distinct from the cream
   page. Older cover art not named that way gets it via the `rpp-cover-edge`
   class. Do not add borders to covers by hand.
6. If it is an AFH Club calculator: a tile in `src/pages/AFHCalculators.tsx`,
   and the "AFH Calculators" card description, which lives in `src/i18n/locales/en.json` (key `calculators.description`).
7. If buyers should find it from listings: `src/data/afhBuyerGuides.ts`.
8. `npm run build`, `npm test`, then look at it at 390px and at desktop width.
