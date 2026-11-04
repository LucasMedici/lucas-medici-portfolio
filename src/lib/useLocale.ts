"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

import { type Locale, LOCALE_STORAGE_KEY, SERVER_LOCALE } from "@/lib/localeScript";

export type { Locale };

const CHANGE_EVENT = "locale-change";

/**
 * A choice saved by the language toggle wins; otherwise follow the browser
 * language (any Portuguese variant → pt-br, everything else → en).
 * Keep in sync with `localeScript`.
 */
function getLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "en" || saved === "pt-br") return saved;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt-br" : "en";
}

function getServerLocale(): Locale {
  return SERVER_LOCALE;
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

export function setLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: locale }));
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getLocale, getServerLocale);
}

/**
 * Mirrors the rendered locale on <html lang> and, once the copy on screen is
 * in the locale `localeScript` resolved, reveals the page. Runs before paint
 * so the hydration-time pt-br copy is never shown to other locales.
 * Call it from a single component.
 */
export function useDocumentLocale(locale: Locale): void {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale === "pt-br" ? "pt-BR" : "en";
    if (root.dataset.localePending === locale) delete root.dataset.localePending;
  }, [locale]);
}
