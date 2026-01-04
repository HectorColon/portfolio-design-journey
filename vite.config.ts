import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Manually assign NODE_ENV based on mode if not already set
  process.env.NODE_ENV = process.env.NODE_ENV || mode;

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // Make NODE_ENV available in frontend code
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    },
  };
});
