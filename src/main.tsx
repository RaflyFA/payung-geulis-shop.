import React from "react"; // <-- Impor React
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes"; // <-- Impor ThemeProvider
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
