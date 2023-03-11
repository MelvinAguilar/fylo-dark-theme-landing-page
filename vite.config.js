import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    VitePWA({
      manifest: {
        name: "fylo-dark-theme-landing-page",
        short_name: "fylo-dark-theme-landing-page",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#1C2431",
      },
    }),
  ],
});
