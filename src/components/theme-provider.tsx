"use client";

import { useEffect } from "react";

const THEME_KEY = "theme";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getResolvedTheme(stored: Theme | null): "light" | "dark" {
  if (stored === "dark") return "dark";
  if (stored === "light") return "light";
  return getSystemTheme();
}

function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    const resolved = getResolvedTheme(stored);
    applyTheme(resolved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const next = getResolvedTheme(
        localStorage.getItem(THEME_KEY) as Theme | null
      );
      applyTheme(next);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return <>{children}</>;
}

export function setTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
  const resolved = getResolvedTheme(theme);
  applyTheme(resolved);
}

export function getTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
}
