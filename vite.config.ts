import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Hapus 'componentTagger' jika Anda tidak tahu itu apa,
// atau pastikan impornya benar jika Anda menggunakannya.
// import componentTagger from "vite-plugin-react-component-tagger"; // <-- Cek baris ini

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Hati-hati dengan 'componentTagger()' ini,
    // jika ini menyebabkan error, hapus saja untuk sementara
    // mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
