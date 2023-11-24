/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@types": "/src/types",
      "@assets": "/src/assets",
    },
  },
  test: {
    environment: "jsdom",
    reporters: ["verbose", "html"],
    coverage: {
      provider: "v8",
      reporter: ["html"],
    },
  },
});
