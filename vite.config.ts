import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/',
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        crawlLinks: true,
        outputPath: '/index.html',
      },
    },
    server: { entry: "server" },
  },
});
