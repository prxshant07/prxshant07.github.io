import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/', // Correct for username.github.io
  tanstackStart: {
    // Enable SPA Mode for Static Hosting
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        crawlLinks: true, // Automatically finds and prerenders linked routes
        outputPath: '/index.html',
      },
    },
    // Keep your existing server entry config (it won't be used in SPA build but safe to keep)
    server: { entry: "server" },
  },
});   
