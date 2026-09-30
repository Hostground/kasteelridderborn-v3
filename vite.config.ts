// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Skip Nitro/server bundle when building for static hosting (cPanel/Apache).
  // Triggered by: `bun run build:static`
  nitro: process.env.STATIC_BUILD === "1" ? false : undefined,
  // Use relative asset paths for static hosting so the site works when opened
  // from file:// or served from a subdirectory on cPanel/Apache.
  vite: process.env.STATIC_BUILD === "1" ? { base: "./" } : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
