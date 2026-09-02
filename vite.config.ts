import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Static build.
//
// TanStack Start ships its own prerenderer (start-plugin-core/vite/prerender)
// and writes the HTML into the client build output directory. Do NOT also add
// the `nitro` vite plugin: it creates a second, competing build environment and
// runs its own prerender pass before the server bundle exists, which yields
// "Prerendered 0 routes" and a failing `nitro` environment.
export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    // Vite 8 resolves tsconfig paths natively.
    tsconfigPaths: true,
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
