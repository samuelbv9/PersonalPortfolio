# Samuel Bechar — Personal Site · Handoff

_Last updated: 2026-07-01_

## What this is
A redesign of Samuel Bechar's personal/portfolio site. We explored many directions and
landed on an **editorial "magazine spread"** aesthetic (warm cream, serif display, hairlines).
The new site is **fully built in a single staging file** and is ready to replace the old site
after a final production pass.

## TL;DR current state
- ✅ **`index.html`** (project root) = the finished editorial homepage. This IS the live site now
  (promoted 2026-07-01; the old cyberpunk `index.html` + `main.js` + `styles.css` were moved to
  `_archive-old-site/`). `indexv2.html` no longer exists.
- ✅ **`work/*.html`** = 5 custom project detail pages: fieldnotes, blitz, avitracks, stir, luxpicnics.
- ✅ **Field Notes** is the flagship (`work/fieldnotes.html`) — a real, shipped iOS app on the App
  Store. Listed FIRST under "Apps & Web" on the homepage and set as the default preview. Content +
  App Store screenshots + icon pulled from `~/Desktop/FieldNotes` (app) and `~/Desktop/FieldNotesWebsite`
  (marketing) plus the App Store listing (id 6769180082). Assets in `images/projects/fieldnotes/`
  (`01-feed`, `02-discover` = Paris/Rome, `03-review` = Japan page, `04-profile`, `icon.jpg`).
- ✅ **Homepage work previews are screenshot-forward now** (was plain logos). The three app panes
  (`.pane.app` in `index.html`) show real app screenshots on a warm dark backdrop with the logo as a
  small corner chip: Field Notes = two App Store screenshots; Blitz + AviTracks = one screen in a CSS
  phone frame (`images/projects/blitz/appscreen.jpg`, `images/projects/avitracks/appscreen.jpg`, both
  cropped to remove the iOS status bar). Stir/Lux keep their photos. Mobile `.thumb-m` still uses logos
  (optional follow-up). Blitz's screen was grabbed from a 42s frame of its walkthrough video.
- ✅ **Favicon:** `favicon.svg` at root — ink rounded tile + cream serif "SB". Linked on every page
  (`work/*` use `../favicon.svg`). Replaced the old lime-green cyberpunk "SB" data-URI favicon.
- ✅ Light/dark theme toggle, responsive, works end-to-end.
- ⏳ Not yet done: rest of production pass (SEO/OG image/résumé/mobile-menu). See **TODO** below.

## How to preview
```
cd /Users/samuelbechar/Desktop/PersonalWebsite
python3 -m http.server 4321
# then open http://localhost:4321/indexv2.html
```
Screenshot workflow used this session (macOS): headless Chrome at
`/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless=new --screenshot=... URL`.
Gotchas: the hero is `min-height:100vh`, so to full-page-capture, temporarily
`sed 's/.hero{min-height:100vh/.hero{min-height:auto/'` into a temp copy. Old `--headless`
has a ~500px min width — use `--headless=new` for true mobile widths.

## Files
- `indexv2.html` — **the new site** (staging). Root-relative image paths (`images/…`).
- `work/blitz.html`, `work/avitracks.html`, `work/stir.html`, `work/luxpicnics.html`
  — custom project pages. Image paths are `../images/…`. Back link → `../index.html#work`.
  **Notion content fully migrated (2026-07-01):** all four pages are now complete case studies
  with all text + photos pulled from the old Notion subpages (galleries no longer placeholders).
  AviTracks' Notion page wasn't linked from the old site — the user supplied the URL
  (…/AviTracks-a8f5561daf694d04830a37effcca882b) and it was migrated too (5 screenshots + demo
  video). The demo video is a handheld recording of the simulator, captioned as such.
  New components on these pages: numbered `.sechead`, `.fgrid` photo grids with small-caps
  captions, `.brief` (Problem/Hypothesis/Goal), `.pull` quote, `.chal` list, `.kit` tool list,
  `.phone`+`<video>` demo (Blitz).
- `images/projects/` — stir.jpeg, blitz.jpeg, avitracker.jpg, arize.png (unused now), luxPicnics.jpeg.
- `images/projects/stir/` (10 photos), `images/projects/lux/` (22 photos incl. `cover-picnic.jpeg`
  hero), `images/projects/blitz/` (`walkthrough-web.mp4` 2.1MB 540px H.264 + poster),
  `images/projects/avitracks/` (5 iPhone screenshots + `demo-web.mp4` 2.7MB + poster) — all
  downloaded from Notion, resized ≤1600px and recompressed. The multi-MB originals were
  deleted; Notion still has them if ever needed.
- `images/logos/` — rubrik.jpeg, ally.jpg, avicenna.jpg (not currently used).
- `variants/` — ALL exploration prototypes (delete at the end). Notable:
  `v4-spread.html` was the hero source of truth before assembly;
  `work-index.html` was the work-section prototype; plus many hero/copy labs.
  `variants/health.json` + `variants/*.html` are throwaway.
- **Old site to remove at the end:** `index.html`, `main.js`, `styles.css`.
- **Next.js scaffolding to remove:** `package.json`, `package-lock.json`, `next.config.mjs`,
  `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `.eslintrc.json`, `src/`, `.next/`.
  (These were `git rm`'d in the working tree already per initial status; confirm before deleting.)

## Design system (used in `indexv2.html` and `work/*.html`)
- **Fonts:** Fraunces (display, Google Fonts) + Inter (body). Utility = Inter smallcaps.
- **Aesthetic:** editorial spread. Cream bg, near-black ink, oxblood accent, hairline rules,
  generous whitespace, no border-radius flourishes beyond small image corners.
- **Two accents (deliberate):** `--accent` oxblood (warm) + `--accent2` steel-blue (cool).
  In the hero, `iOS` = steel, `full-stack` = oxblood.
- **Tokens — light:** `--bg #f3efe6 · --paper #faf7f0 · --ink #191713 · --ink-soft #5c574e ·
  --ink-faint #928b7c · --line #ddd6c7 · --line-strong #c9c1ad · --accent #9c3b22 · --accent2 #345b6e`.
- **Tokens — dark:** `--bg #13100c · --paper #1c1813 · --ink #efe6d6 · --ink-soft #a99a83 ·
  --accent #c7984f (brass) · --accent2 #8fb2c4`.
- **Theme toggle:** floating top-right button; sets `data-theme="dark"` on `<html>`,
  persisted in `localStorage.theme`. Present on every page.
- **Logo-on-white images** (blitz/avitracks/arize) use `mix-blend-mode:multiply` on a cream
  tile so the white background dissolves; in dark mode they flip to a white tile
  (`[data-theme="dark"] .pane.logo{background:#fff; …mix-blend-mode:normal}`).

## Page structure (`indexv2.html`)
1. **Hero** (full-height): topbar (`Portfolio` / nav / `San Francisco, CA`), eyebrow
   `Samuel Bechar`, H1 **"iOS & full-stack engineer."**, subline
   _"Building authentication and authorization at Rubrik. Michigan CS '25, based in San Francisco."_,
   then a `SELECTED WORK ↓` hairline cue.
2. **Selected Work** — the signature interaction: a **Contents index (left) + live preview (right)**.
   - Left: departments → **Apps & Web** (Blitz, AviTracks), **Businesses** (Stir, Lux Picnics),
     **Making** (Woodworking — placeholder). Hovering a name updates the right preview.
   - Right: sticky **3:2 landscape** frame that crossfades; caption + description anchored to the
     bottom of the column. JS matches `.pitem` order to `.pane` order by index (see `activate()`).
     **If you reorder/add projects, keep the `.pitem` list order and the `#frame .pane` order in sync.**
   - Default active = first item (Blitz).
3. **Stack** strip (tags).
4. **Experience** — ruled "ledger": Rubrik (2024—), Ally (2023), Avicenna (2022, 2021).
5. **Contact** — big "Let's talk" mailto + GitHub / LinkedIn links. Footer.

## Content / facts
- Role: Software Engineer @ **Rubrik**, on the **Identity & Access Management** team
  (authentication & authorization; product = Rubrik Security Cloud). Stack: Go, Scala, React.
- Education: University of Michigan, CS '25. Location: San Francisco.
- Email: samuel@samuelbechar.com · GitHub: github.com/samuelbechar · LinkedIn: /in/samuelbechar
- Projects kept: **Blitz** (iOS/Swift), **AviTracks** (iOS/HealthKit, client Avicenna Medical),
  **Stir** (coffee-supplement brand), **Lux Picnics** (luxury pop-up events, "As seen on Local 4").
  **Arize was removed** at the user's request.
- **Making** department: **Marquetry is done** (`work/marquetry.html`, written 2026-07-12) — two pieces,
  a finished compass rose and a guinea pig still in progress. Photos + copy from the user's own media in
  `images/projects/marquetry/`; web-sized copies live in that folder's `web/` subdir (originals kept, 69MB).
  The homepage `.pitem` + `.pane` for Marquetry now use a real photo. **Nightstand still shows a
  "Photos coming soon" pane on the homepage even though `work/nightstand.html` is complete** — swap
  `.pane.empty` for `images/projects/nightstand/web/cover.jpg` to fix.
- `images/projects/marquetry/IMG_6598.JPG` is a *reference* image (someone else's rosette), not the
  user's work. Deliberately not used on the page.
- **EXIF GOTCHA (cost an hour, read before touching photos):** the marquetry originals are
  **portrait 3:4** photos stored as landscape pixels with `EXIF orientation=6` (rotate 90° CW).
  Browsers honor that tag; `sips` and image-viewer tools do **not**, so the raw pixels look
  landscape and "upright" and will fool you. Always check with
  `python3` (parse the JPEG APP1 orientation tag) or just render in Chrome and read
  `img.naturalWidth/naturalHeight` — that is the only ground truth. `sips -Z` preserves the tag;
  `sips -c` does too, and crop offsets are in **raw** (unrotated) space, so a crop that looks right
  in a viewer comes out rotated in the browser.
- Because every photo is portrait and the piece itself is square, the marquetry page does **not**
  crop to landscape: `.fgrid` images use `aspect-ratio:3/4`, and the hero + homepage pane use
  `web/plate.jpg` (a square crop of just the finished panel) matted on the paper ground via
  `.pane.plate` / `object-fit:contain`. Do not "fix" these back to `cover`.

## Key user preferences (IMPORTANT — carry these forward)
- Wants **clean, uncluttered, high design**; hates anything that reads templated or **pretentious**.
- **No "founder" language** in the hero. His businesses are **shut down** → refer to them in
  **past tense** only; don't imply they're ongoing.
- Rejected the live "stat widgets" (steps/GitHub/coffee) — read as cheap/generic. Don't reintroduce.
- Copy should be **concrete and a bit dry**, never LinkedIn-influencer. (He rejected
  "I build software. I also build businesses." as cringe.)
- **No em-dashes in copy** (prose, leads, captions, alt text) and no punchy/aphoristic lines —
  he flagged "picking a movie was never the hard part…" as cringe and a pull-quote aphorism was
  cut. Structural dashes (titles, "Next — X" nav, department labels, CSS dash bullets) stay.
- Likes the two-accent (engineer/founder → steel/oxblood) idea and the editorial spread.
- Prefers **projects (Apps & Web) listed before businesses**, then Making.
- Keep it undated where possible (dropped "Portfolio — 2026" → just "Portfolio").

## TODO — production pass (do these, then ship)
1. **Résumé:** add a `resume.pdf` link (nav and/or contact). File not present yet — need from user.
2. **SEO / social:** finalize `<title>`/description, add Open Graph + Twitter meta and an OG image,
   add a **favicon** (old site had an inline SVG "SB" favicon in the original `index.html` — can reuse).
3. **Mobile nav:** the header `nav` currently just `display:none` under 680px. Add a real mobile
   menu (or at least surface Work/Experience/Contact + résumé on mobile).
4. **A11y:** focus-visible states exist on toggle/pitems; do a pass for link focus states + alt text.
   `prefers-reduced-motion` is already respected.
5. **Ship:** rename `indexv2.html` → `index.html` (back up/remove old `index.html`, `main.js`,
   `styles.css`), delete the Next.js scaffolding, delete `variants/` and `HANDOFF`-irrelevant temp files.

## Open copy decisions (ask the user)
- **Experience → Rubrik** line still says _"a configurable multi-approver security feature created
  for **federal customers**"_ — keep or cut "federal customers"?
- **Making** department — keep the "photos coming soon" placeholder live, or hold it out until
  woodworking photos exist?
- **Project pages after the Notion migration** (2026-07-01): all copy on stir/lux/blitz was
  rewritten from the actual Notion write-ups (past tense, dry — per prefs). Things to confirm
  with the user: Blitz "Milestone: MVP on TestFlight"; Lux role now "Ops · Build · Customer
  service" (was "Brand · Ops · Styling") and names his brother Yoel; Stir/Lux dead commerce
  links (stircoffeesupp.com, luxpicnicsaa.com, Instagrams) were deliberately NOT linked —
  only the live Local 4 article + YouTube segment are linked on the Lux page. AviTracks now has
  a "Milestone: Working MVP" meta entry and keeps the Avicenna client link.
