# Portfolio Refresh: Content & Positioning for Consulting Clients

Refocus the site from a credentials portfolio to a client-conversion page for systems-engineering consulting, while applying a modern visual refresh that still feels premium and technical.

## Goal

Position Vitalii Balitskyi as the go-to advisor for deep-tech hardware companies that need to turn complex R&D into scalable, production-ready systems. The site should make a prospect think "this person solves our problem" within 10 seconds and have one clear way to start a conversation.

## Content & messaging changes

### 1. Reframe the hero around client outcomes

Replace the current headline with a client-problem-first promise. Current: "Turning breakthrough science into scalable hardware." Keep the spirit, but make it the answer to a specific question.

Options to test:

- "I help deep-tech hardware teams turn fragile prototypes into production-ready systems."
- "System engineering for companies building the next generation of precision hardware."
- "From first sketch to repeatable manufacturing: mechanical systems for atomic-scale tech."

Add a one-line descriptor below that names the target client (semiconductor, photonics, advanced materials, deposition/vacuum tooling) and a primary CTA: "Book a 20-minute call" or "Tell me about your project".

### 2. Add a "Services" or "How I Help" section

Place it right after the hero. Use a 3-column bento-style grid:

- **System Architecture & Reviews** — audit existing designs, define subsystem interfaces, de-risk the architecture before major tooling spend.
- **Prototype-to-Production Pathway** — design for manufacture, assembly, vacuum/motion/thermal compatibility, and supplier hand-off.
- **Team & Process Advisory** — build design-review culture, mentor mechanical teams, align R&D with program timelines.

Each card: gold icon, short title, 2–3 sentence description, plus a link to a relevant project or publication.

### 3. Turn projects into mini case studies

The current portfolio cards show what was built. Reframe each card around the business outcome:

- **Problem** the client/team had.
- **What was built** (keep the technical detail).
- **Outcome** — even directional metrics are fine: "40% faster assembly", "from prototype to production-ready platform", "repeatable positioning across units".

If real project data is not available, write the cards in outcome-first language and leave placeholders for metrics to be filled in later.

### 4. Add social proof / trust signals

Consulting buyers need third-party validation. Add a lightweight section after projects or before contact with 2–3 elements:

- A short quote/testimonial from a colleague, manager, or collaborator (placeholder if not available).
- Client or company logos (ATLANT 3D, Materials Research Centre, plus any partners/universities).
- A "Selected by" or "Trusted by" label above the logos.

If no testimonial is available, use a peer endorsement placeholder and note it must be approved before publishing.

### 5. Sharpen the "About" section for authority

Cut the current about copy from 3 paragraphs to 1 short story + 3 proof bullets. Emphasize the combination of hands-on engineering + team leadership + published research — this is the rare mix consulting clients pay for.

### 6. Make the contact section a clear offer

Change "Let's Talk" to a specific next step. Examples:

- "Start a project conversation"
- "Get a free 20-minute system review"
- "Tell me what you're building"

Add a simple contact form (name, email, company, project summary) alongside the email/phone/LinkedIn buttons. Form submissions route to the existing email placeholder or a backend handler if needed.

### 7. Reorder sections for the consulting journey

New order:

1. Hero + CTA
2. Services / How I Help
3. Portfolio (case-study cards)
4. Testimonials / Logos
5. Experience (kept, but shorter)
6. Expertise
7. Publications
8. Education
9. Contact

## Visual refresh suggestions

Keep the dark industrial palette, but modernize the layout and motion to match 2025–2026 premium portfolio trends.

### 1. Hero bento or asymmetric split

Replace the two-column hero with a bento-grid hero: large headline top-left, portrait top-right, stat card + CTA card bottom-left, services teaser bottom-right. This is a strong current trend for consulting portfolios and uses the same assets.

### 2. Kinetic typography in the headline

Use a very large headline (5xl/6xl) with a weight/contrast animation on load. Keep Libre Baskerville for the headline; add a subtle type reveal or word-highlight animation on the key word ("scalable", "production-ready", or "systems").

### 3. Scroll-driven section reveals

Replace the static fade-up with a scroll-linked reveal: section numbers slide in from the left, hairlines draw left-to-right, content fades up. Implement with CSS scroll-driven animations (`animation-timeline: view()`) where supported, with a fallback to the existing fade-up keyframes.

### 4. Card hover states with depth

- Project cards: lift + shadow + gold border + image zoom + colorize.
- Services cards: top gold line sweep + subtle background glow.
- Experience cards: keep the right-slide but add a gold accent line on the left.

### 5. Subtle ambient motion

Add a slow, looping grain shift or a very subtle radial pulse behind the hero portrait to make the dark theme feel alive without being distracting.

### 6. Mobile-first nav update

Replace the hidden nav on mobile with a bottom-sheet or full-screen overlay menu with large serif links. The current desktop nav is fine; mobile currently has no navigation at all.

## SEO & metadata

- Keep the existing title and description; update the description to mention "consulting" and "advisory" if that becomes the primary positioning.
- Add a canonical tag and Open Graph image if one is generated.
- Add schema.org `Person` structured data with job title, worksFor, alumniOf, and sameAs links.

## Technical implementation

- No backend or database needed; keep everything static and editable.
- Add a new `Services.tsx` component and a `Testimonials.tsx` component.
- Refactor `Portfolio.tsx` to accept a case-study-shaped data object.
- Update `index.tsx` to render the new section order.
- Update `styles.css` with CSS scroll-driven animations and refined hover utilities.
- Keep generated images; add one Open Graph image if not present.

## Success criteria

- A new visitor can state what Vitalii does and who he helps within 10 seconds.
- There is exactly one primary action above the fold and one at the bottom of the page.
- The portfolio projects read like outcomes, not just descriptions.
- The visual refresh feels premium, modern, and consistent with the dark industrial identity.
- Lighthouse performance stays at 90+ after the refresh.

## Out of scope

- Real testimonials or client logos (will use placeholders; user must approve/supply real ones).
- Actual booking/calendar integration (CTA can link to email or a simple form).
- Blog or content hub (can be added later).
