"use client";

import { useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/themeScript";

const CHANGE_EVENT = "theme-change";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Also follows OS theme changes while the visitor hasn't picked one manually.
 */
function subscribe(onChange: () => void) {
  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = (event: MediaQueryListEvent) => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;
    applyTheme(event.matches ? "dark" : "light");
  };

  window.addEventListener(CHANGE_EVENT, onChange);
  media.addEventListener("change", onSystemChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    media.removeEventListener("change", onSystemChange);
  };
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getTheme, getServerTheme);
}
