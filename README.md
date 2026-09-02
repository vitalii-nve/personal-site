# balitskyi.net

Personal site for Vitalii Balitskyi — systems and mechanical engineering for
deep-tech hardware.

Built with TanStack Start, React, TypeScript and Tailwind CSS.

## Development

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Structure

```
src/
  routes/                 TanStack Router file routes
  components/portfolio/   Page sections — content lives in these files
  components/ui/          shadcn/ui primitives
  assets/                 Images
  styles.css              Design tokens and global styles
```

Page content is plain data at the top of each component in
`src/components/portfolio/` — edit the arrays, not the markup.

## Content rules

Claims on this site must be traceable to a public source or to Vitalii's own
record. Project descriptions state role and result only, never mechanism.
No supplier names, unit counts, or mass/power/cost figures.
