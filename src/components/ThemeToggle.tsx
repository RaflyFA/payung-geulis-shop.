// src/components/ThemeToggle.tsx

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Pastikan komponen sudah "mounted" di client sebelum menampilkan UI
  // Ini untuk menghindari hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Tampilkan tombol placeholder selagi menunggu
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9"
        disabled={true}
      />
    );
  }

  // Tampilkan tombol yang sesungguhnya
  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9" // Sedikit lebih kecil agar pas di navbar
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
