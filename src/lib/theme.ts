/** Light / dark theme helpers. The dark theme is the default look. */

export type Theme = "light" | "dark";
const KEY = "alloaloa_theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
  try {
    window.localStorage.setItem(KEY, theme);
  } catch {
    /* ignore */
  }
}

/** Inline script that sets the theme class before paint (no flash). */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${KEY}');if(t!=='light'){t='dark';}document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;
