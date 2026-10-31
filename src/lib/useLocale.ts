"use client";

import { useSyncExternalStore } from "react";

export type Locale = "en" | "pt-br";

const STORAGE_KEY = "locale";
const CHANGE_EVENT = "locale-change";

/**
 * A choice saved by the language toggle wins; otherwise follow the browser
 * language (any Portuguese variant → pt-br, everything else → en).
 */
function getLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "pt-br") return saved;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt-br" : "en";
}

function getServerLocale(): Locale {
  return "pt-br";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

export function setLocale(locale: Locale): void {
  localStorage.setItem(STORAGE_KEY, locale);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: locale }));
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getLocale, getServerLocale);
}
