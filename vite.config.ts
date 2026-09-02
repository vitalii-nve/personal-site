import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Static build for GitHub Pages.
//
// tanstackStart prerenders every route to HTML at build time, so the <head>
// metadata is baked into the markup rather than applied client-side. Nitro's
// github_pages preset writes the result to .output/public.
//
// Override the target with NITRO_PRESET when deploying somewhere else, e.g.
//   NITRO_PRESET=cloudflare_module npm run build
const preset = process.env["NITRO_PRESET"] ?? "github_pages";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // src/server.ts wraps the SSR entry to turn swallowed 500s into a
      // readable error page. Used during prerendering.
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    nitro({ preset }),
    viteReact(),
  ],
  resolve: {
    // Duplicate copies of React or the TanStack packages break hooks and
    // router context at runtime.
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/react-query",
    ],
  },
});
