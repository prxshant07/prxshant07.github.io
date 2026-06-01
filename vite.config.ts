// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: '/', 
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        crawlLinks: true, 
        // CRITICAL: Explicitly force the output file name and location
        outputPath: 'index.html', 
      },
    },
    server: { entry: "server" },
  },
  // Ensure Vite doesn't put things in dist/client
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});   
