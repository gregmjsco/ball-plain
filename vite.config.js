import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ball-plain/",
  build: {
    outDir: "dist", // Make sure Vite outputs the build into the dist folder
    rollupOptions: {
      input: "/src/main.jsx", // Ensure this points to your main entry file
    },
  },
});
