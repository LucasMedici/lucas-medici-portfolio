"use client";

import { useState, useEffect, useSyncExternalStore } from "react";

export type Locale = "en" | "pt-br";

function getLocale(): Locale {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem("locale") as Locale) || "en";
}

let listeners: (() => void)[] = [];

function subscribe(cb: () => void) {
  listeners.push(cb);
  const handler = () => listeners.forEach((l) => l());
  window.addEventListener("locale-change", handler);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
    window.removeEventListener("locale-change", handler);
  };
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getLocale, () => "en" as Locale);
}
