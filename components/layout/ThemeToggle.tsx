"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
      style={{
        borderColor: "var(--border-subtle)",
        background: "var(--glass-light)",
        color: "var(--text-secondary)",
      }}
    >
      {theme === "dark" ? (
        <Sun size={15} />
      ) : (
        <Moon size={15} />
      )}
    </button>
  );
}