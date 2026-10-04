# Design brief — Moksha Motorsports, IIT Gandhinagar

## What the site is for

Moksha is the student motorsports club of IIT Gandhinagar; it designs, builds and
races an electric off-road buggy for the SAE eBaja competition. Two people arrive
here: a first-year student deciding whether to walk into the workshop, and a
company deciding whether to fund the car. A student should leave wanting to build
with the team; a sponsor should leave believing the club is organised, visible and
worth backing.

## Routes

- `/` — the way in. Entry with the machine on it and two doors, what eBaja asks of
  a team, the car as a datasheet, the six build disciplines, the shape of a season,
  and one split naming the two audiences.
- `/car` — the machine. Entry, three decisions the rest of the car follows from,
  the systems in assembly order, the headline sheet, and the season as a timeline.
- `/team` — the club. Entry, how the club is arranged, the crews as a board, how a
  newcomer learns, and the institute's support.
- `/sponsors` — the case for backing it. Entry with the car and its sponsor panels,
  why student motorsport is worth the money, where sponsorship goes, how partners
  are recognised, and how a conversation starts.
- `*` — not found.

There is no contact page and no form. Nothing on this site could receive a message
yet, so the sponsors page says exactly that instead of offering an input that
swallows what a visitor types.

## Palette

Asphalt dark, workshop light, one mark green. Everything is in `src/theme.css` in
`oklch()`, in roles rather than as a list:

- **Ground** `--background` is a near-black neutral with a hint of blue; the whole
  site is dark, deliberately, the way a pit garage at night is dark. There is no
  `prefers-color-scheme` override.
- **Workshop light** `--workshop` and `--workshop-raised` are the second ground —
  warm paper white with its own ink, muted ink and hairline. Light bands are where
  the build and the club are explained, so the page reads as dark garage, lit bench,
  dark garage again.
- **Accent** `--primary` is the one saturated colour — the green of the club's own
  M, `oklch(0.79 0.155 165)` — reserved for primary actions, race numbers, the mark
  and the detail edges. Two or three uses a screen, never more. On the lit bench,
  where the bright green would be a 1.7:1 headline, the same hue is taken dark as
  `--primary-ink` (`oklch(0.5 0.13 165)`); `text-primary` is dark-ground ink only,
  and it is never set on a pale ground.
- **Depth** comes from radial glows built on `color-mix()` of the accent, and from
  diagonal cuts between grounds — never from a hairline around every block.
- **Brand ground** `--brand-ground` is the one band a page is allowed to shout
  with: the club's own green taken dark and half-saturated, so
  `--brand-ground-foreground` white clears 4.5:1 on it (9:1). It carries a race
  number the size of the section and a diagonal stripe texture. One band per
  page, at the point where the subject turns — never on a fixed cycle.

Contrast: ink on ground, ink on card, muted ink on `--secondary` and `--card`,
workshop ink on paper, workshop muted on paper, accent on ground and accent-ink on
paper all clear 4.5:1 for body text; hairlines clear 3:1 on the ground they sit on.
The bright accent is a dark-ground colour by construction: the one rule that keeps
this palette legible is that `text-primary` and `--primary` hairlines are never
placed on `--workshop` or `--workshop-raised`. On the bench, the accent is an edge
only, or it is `--primary-ink`.

## Faces

Two families, three weights, loaded together in `src/fonts.css`:

- **Barlow Condensed** (`--font-heading`, `--font-label`) — 500/600/700. A condensed
  grotesque, which is how a workshop stencil and a race number are drawn. Headings
  run uppercase at 1.02 leading with `-0.01em` tracking; labels are `race-label`,
  uppercase at `0.14em` tracking.
- **Inter** (`--font-body`) — 400/500/600. Body copy, because the car and the season
  need explaining in sentences rather than in shouted fragments.

The scale is fluid via `clamp()`; body sits at 1rem/1.65 and the display steps top
out at `clamp(2.75rem, 8vw, 5.5rem)` on the home entry.

## Brand mark

`src/components/Brand.tsx` — the club's own mark, the stencil keyline **M** the
team paints on the car: one `currentColor` path with a slit cut through each leg
and the right stem running the full height, so it is unmistakably this club's
letter and not a generic wordmark square. It sits on the accent as a badge —
accent square, `--primary-foreground` keyline, sized by height so the 34×46
proportions are never stretched — beside the wordmark set in Barlow Condensed
uppercase with `0.16em` tracking and "IIT Gandhinagar" under it as a label.
`Crest.tsx` is the same path at full size, used as a graphic on the closing band,
and `public/favicon.svg` is the same drawing, 32×32, near-black ground and accent
keyline. No mark is drawn that the club does not own.

**One icon weight across the whole site: Lucide at `stroke-width={1.5}`** (2 in the
header's menu controls, where 1.5 disappears at 20px). Icons are only used where
they name a system or a crew; they never repeat a heading.

## Imagery

The site draws its own machine **and** shows the club's own photographs. Three
answers, and no picture from a library:

1. **The team's own photographs** — `public/images/buggy-roadside.webp` and
   `buggy-rear-axle.webp`, the actual car on campus with its sponsor panel on the
   nose. The home and team entries carry one, the car page carries the out-of-body
   three-quarter with the suspension and rear axle exposed, and the sponsors page
   leads with the panel a sponsor is buying. Nothing is captioned as a mock-up,
   because nothing here is one.
2. **`BuggySide.tsx`** — a side elevation of the car in inline SVG: raked frame, roll
   hoop, exposed double wishbones and coilovers, the battery box low between the
   axles, a rear motor, an accent 01 panel. Built from `currentColor` and the
   tokens, so it takes the ground it is dropped on. It sits *over* the photograph
   on the home and car entries — the real machine behind, the drawing in front —
   and it is the visual centre of the 404.

   **`BuggyBuild.tsx`** is the same elevation split into six build stages — frame,
   roll hoop, wishbones and coilovers, wheels, pack and motor, cockpit and livery —
   drawn one stage at a time as the section carrying it passes the viewport. The
   machine sticks to the top of its column on desktop while the six steps scroll
   past it, and a readout names the step on the frame in words as well as in
   geometry. Scroll position is read once per frame and written to one number that
   every stage derives from, so scrolling back up un-builds the car correctly rather
   than replaying a queue; under `prefers-reduced-motion` the car is drawn complete
   and the steps simply colour as they pass.
3. **Spec panels and race numerals** — `SpecPanel.tsx`, `Figure` and the `race-number`
   utility. The car and the season are presented the way a team presents them: a
   datasheet and a number board.

No stock photographs: the subject is a specific student-built machine, and a
library photograph of somebody else's off-road car would be a claim the club
cannot stand behind. `Crest.tsx` is that mark at full size, used as a graphic on
the closing band rather than as a second logo.

## Motion

Small, and mostly on arrival. `src/theme.css` holds three named animations: the
entry settles with `rise-in` (one gesture, once, on the hero copy and the picture
beside it); the glow behind the machine breathes with `pulse-glow`, slow enough to
read as light rather than movement; and the drawn car drifts a few pixels on the
spot with `idle-drift`. All three animate `transform` and `opacity` only, all
three are cancelled under `prefers-reduced-motion`, and nothing moves after the
page has settled. Hover states are colour transitions at or under
`--motion-fast`.

## Voice

Real, specific copy with no invented figures. No lap times, no horsepower, no
placement, no testimonial and no sponsorship price appear anywhere — the pages say
plainly where a real number would live (the season logbook) and why it is not on the
site. Team roles are described as crews with general responsibilities rather than as
named people, because the club has not supplied names.

## Shell

A fixed top bar: badge left, four destinations centre, "Join the crew" right; at
360 the destinations collapse into one button that opens the list full-width, with
the action button inside it. The footer carries the badge, the club's one-line
description, two link columns and the institute line. Both live in `Shell.tsx`.
