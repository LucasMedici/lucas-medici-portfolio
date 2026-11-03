export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const THEME_CHANGE_EVENT = "theme-change";

/**
 * Runs in <head> before first paint: a saved choice wins, otherwise follow
 * the OS/browser preference. Setting `data-theme` this early avoids a flash
 * of the wrong theme.
 *
 * It also keeps `data-theme` on <html> afterwards. When hydration fails (for
 * example because a browser extension injected markup), React re-creates the
 * tree on the client and strips every attribute it did not render from
 * <html>, `data-theme` included, which silently dropped the visitor's theme.
 * The observer puts it back and tells `useTheme` to re-read it.
 */
export const themeScript = `(function(){try{var d=document.documentElement;var r=function(){var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t};r();new MutationObserver(function(){if(!d.dataset.theme){r();window.dispatchEvent(new Event("${THEME_CHANGE_EVENT}"))}}).observe(d,{attributes:true,attributeFilter:["data-theme"]})}catch(e){}})();`;
