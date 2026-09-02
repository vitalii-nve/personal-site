# Vitalii Balitskyi — Personal Engineering Portfolio

A dark, industrial single-page portfolio for a System Engineering Lead, built as the home route of the existing TanStack Start app. All content is static in code so it can be edited later (including swapping placeholder photos and project text).

## Design system (src/styles.css)

- Dark-only theme defined as `:root` tokens (converted to oklch): background `#0c0e11`, card `#13161b`, border `#252a33`, accent/gold `#c8a44e`, headings `#f5f3ef`, body `#e2e0dc`, dimmed `#8a8780`, muted `#5c5952`.
- Extra tokens: `--gold-tint` (card/callout background, gold at low opacity), section-number label style (11px uppercase, wide tracking, gold).
- Fonts loaded via `<link>` in `src/routes/__root.tsx` head (no remote @import): **Libre Baskerville** (400/700 + italic) for headings/serif, **DM Mono 300** for all body/mono text. Registered as `--font-serif` / `--font-mono` theme tokens.
- Film grain: fixed full-viewport overlay using an inline SVG noise (feTurbulence) data-URI at very low opacity, `pointer-events: none`, above content but below nothing interactive.

## Page structure (src/routes/index.tsx + src/components/portfolio/*.tsx)

Single-page scroll, fixed frosted-glass top nav (dark translucent + backdrop blur), sections separated by 1px border lines, full-width container with 24px side padding. Each numbered section uses the shared header pattern: gold number + serif title + hairline extending to the right edge.

1. **Nav** — left "V. Balitskyi" in serif; right uppercase mono links (About, Experience, Expertise, Portfolio, Education, Publications, Contact) with gold text + gold-tinted background on hover; links hidden on mobile; anchor-scrolling to section ids.
2. **Hero** — two-column grid. Left: gold label "SYSTEM ENGINEERING LEAD · DENMARK", serif headline "Turning breakthrough science into *scalable* hardware." (italic gold on "scalable"), two dim mono intro paragraphs, three stat counters (10+ Years, 7 Publications, 5.0 GPA) with large serif numbers. Right: generated portrait placeholder, greyscale filter lifting on hover, gold border on hover. Subtle radial gold glow top-right. Staggered fade-up entrance animation on load.
3. **About (01)** — two-column: three dim mono career-story paragraphs; right column has italic serif pull quote with gold left border, then Location / Focus Areas / Education detail blocks separated by hairlines, gold uppercase labels.
4. **Experience (02)** — three stacked role cards (border-separated): 180px left column (uppercase muted date range, gold company, small muted location), right column with serif role title, mono description, optional "Key result" callout (gold left border, gold-tinted bg), row of uppercase gold tags on gold-tinted chips. Roles: Mechanical Engineering Group Lead @ ATLANT 3D (Nov 2024–Present), Mechanical Engineer & Team Lead @ ATLANT 3D (Jun 2022–Oct 2024), Mechanical Engineer / System Integrator @ Materials Research Centre (Dec 2016–Apr 2022). Hover: card slides right.
5. **Expertise (03)** — three-column card grid (Strategic / Technical / Analytical), each with gold uppercase category label and 4 skills prefixed with ›. Hover: gold top-line sweeps left→right, border turns gold, card lifts 2px.
6. **Portfolio (04)** — NEW. Two-column grid of 4 project cards (2x2 on desktop, stacked on mobile). Each card: generated project image on top (greyscale→color + subtle zoom on hover, gold border), then serif project title, dim mono description, and gold tag row. Placeholder projects drawn from the ATLANT 3D / materials-science background (e.g. atomic-layer 3D printing system, precision motion platform, vacuum deposition tooling, lithography R&D rig) so the user can later swap in real photos/text by editing one data array in the component.
7. **Education (05)** — two-column: gold "UNIVERSITY" label left; right serif school name (National Technical University of Ukraine 'Kyiv Polytechnic Institute'), two degree lines with gold 5.0/5.0 GPA highlights.
8. **Publications (06)** — vertical stack of 7 cards (years 2024, 2023, 2023, 2022, 2018, 2017, 2017): serif muted year column, serif title + dim mono description. Hover: gold border + 4px right slide.
9. **Contact** — centered: serif "Let's Talk", subtitle about consulting/advisory/deep-tech, three gold-outline SVG-icon buttons (Email, Phone, LinkedIn) that fill gold with dark text on hover.
10. **Footer** — centered tiny uppercase muted: "© 2026 Vitalii Balitskyi · Greve, Denmark".

## Images to generate (saved to src/assets/, imported in code)

- Portrait placeholder: dignified greyscale-friendly professional figure/abstraction, portrait orientation.
- 4 project images (landscape, dark industrial/lab aesthetic matching the palette).

## Responsive

Nav links hidden on mobile; all grids collapse to one column; hero photo moves above text; stat counters wrap.

## SEO

`src/routes/index.tsx` gets its own `head()`: title "Vitalii Balitskyi — System Engineering Lead", description, og:title/og:description, og:type, twitter:card. Root route fonts preconnect + stylesheet links.

## Technical details

- Components: `src/components/portfolio/` — Nav, Hero, SectionHeader, About, Experience, Expertise, Portfolio (data-driven project array), Education, Publications, Contact, Footer; index.tsx composes them.
- Animations via CSS keyframes/transitions in styles.css (fade-up stagger via animation-delay utilities; hover sweeps via pseudo-elements) — no animation libraries needed.
- All colors through the new semantic tokens (`bg-background`, `text-gold` via `--color-gold`, etc.); no hardcoded color utilities in components.
- No backend/database needed — content lives in typed data arrays inside components for easy editing.
