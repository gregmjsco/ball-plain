import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ball-plain/",
  build: {
    outDir: "dist", // The default build output directory
  },
});
