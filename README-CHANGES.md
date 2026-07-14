# Site-wide color rebrand — navy/gold → charcoal/burgundy

## What changed

**Core tokens** (src/index.css, lines ~284-293): the `--navy` and `--gold` CSS
custom properties that everything else references were repointed:

| Token | Old | New | Contrast on cream |
|---|---|---|---|
| --navy (charcoal) | #1a2744 | #272421 | 14.3:1 |
| --navy-dark | #0f172a-ish | #161412 | 17.0:1 |
| --navy-light | #33415f-ish | #4c4743 | 8.5:1 |
| --gold (burgundy) | #b8963e | #6f2a30 | 9.5:1 |
| --gold-light | lighter gold | #bd757b | 3.3:1 (decorative use only) |
| --gold-dark | #a9822c-ish | #4f171c | 13.2:1 |
| --slate | blue-gray | warm gray | — |

All values pass WCAG AA for normal text (4.5:1) except gold-light, which
was already used only for decorative tints/borders, never text.

Because `text-navy`, `bg-gold`, `border-navy`, etc. are Tailwind classes
that resolve through these CSS variables, this one file change cascades
automatically to every component using the token classes — no need to
touch those files individually.

**Hardcoded hex values** — 990 individual hex color replacements across
81 files, for every place a component had a navy or gold color typed in
directly instead of using the token (a known pattern from Lovable AI
edits). Each was mapped algorithmically:

- Dark, low-saturation blues (structural text/backgrounds, lightness <40%) → charcoal at the same lightness
- Bright/mid-lightness blues (buttons, links, badges — playing an accent role) → burgundy at the same lightness/saturation, so vividness is preserved
- All gold/tan/bronze tones → burgundy at the same lightness

The existing red CTA underline (#7f1d1d) was left untouched — it's not
part of the removed palette, it's the accent you'd already started
rolling out.

## What did NOT change

- Any color outside the blue/navy or gold/tan hue ranges (greens, teals,
  purples used for unrelated semantic UI elsewhere) was left alone.
- No layout, copy, or component logic was touched — this is a pure color
  swap.

## New: numbered roadmap on "Helping an aging parent"

`src/components/ChoiceFlowPage.tsx` now includes:
- A 3-step numbered tracker at the top of every page in the flow (root →
  category → guidance), so it's clear at a glance where you are and how
  much further there is to go.
- Each root-level category card now lists its actual sub-topics (up to 4,
  then "+N more"), so you see the real destinations before clicking
  instead of guessing what's behind "Learn more."

## How to bring this into Lovable

Every file in this zip is a complete replacement — paste each one in
directly over the existing file with the same path. The two highest-
priority files to check first are:
1. `src/index.css` — this alone repaints most of the site
2. `src/components/ChoiceFlowPage.tsx` — the new roadmap feature

## Recommended next step

Do a visual pass through the live preview after pasting these in,
especially:
- The AFH Club pages, which had their own bronze/blue sub-palette that
  got folded into the same charcoal/burgundy system — worth confirming
  it still reads well there
- Any gradients or hover states that might look different now that the
  underlying hues shifted
