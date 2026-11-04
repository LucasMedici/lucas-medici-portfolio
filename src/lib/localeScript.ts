export type Locale = "en" | "pt-br";

export const LOCALE_STORAGE_KEY = "locale";

/** The locale the static HTML is rendered in. */
export const SERVER_LOCALE: Locale = "pt-br";

/** Gives up waiting for the client render and shows the page anyway. */
const REVEAL_FALLBACK_MS = 3000;

/**
 * Runs in <head> before first paint with the same rules as `useLocale`: a
 * saved choice wins, otherwise any Portuguese browser language → pt-br and
 * everything else → en.
 *
 * The static HTML is in pt-br. When the visitor needs another locale, it
 * marks <html data-locale-pending> so the content stays hidden (see
 * globals.css) until React renders the right copy and clears the flag
 * (`useDocumentLocale`), instead of showing Portuguese for a moment. If the
 * scripts never run, the page is revealed after REVEAL_FALLBACK_MS.
 */
export const localeScript = `(function(){try{var d=document.documentElement;var l=localStorage.getItem("${LOCALE_STORAGE_KEY}");if(l!=="en"&&l!=="pt-br"){l=navigator.language.toLowerCase().indexOf("pt")===0?"pt-br":"en"}d.lang=l==="pt-br"?"pt-BR":"en";if(l!=="${SERVER_LOCALE}"){d.dataset.localePending=l;setTimeout(function(){delete d.dataset.localePending},${REVEAL_FALLBACK_MS})}}catch(e){}})();`;
