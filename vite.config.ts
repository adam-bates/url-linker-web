import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") && !id.includes("react-dom")) {
              return "vendor_react";
            } else {
              return "vendor";
            }
          }
        },
      },
    },
  },
  plugins: [react()],
});
