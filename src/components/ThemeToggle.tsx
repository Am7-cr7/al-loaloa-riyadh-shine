import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, getStoredTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/** Sleek sun/moon switch for the header. Choice is remembered per browser. */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Read the real value after hydration to avoid an SSR mismatch.
  useEffect(() => setTheme(getStoredTheme()), []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label={theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      title={theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
      className={cn(
        "relative inline-flex h-9 w-16 items-center rounded-full border border-gold/40 bg-secondary transition-colors",
        className,
      )}
    >
      <span
        className={cn(
          "absolute grid size-7 place-items-center rounded-full bg-gold text-primary-foreground shadow-sm transition-all duration-300",
          theme === "dark" ? "start-1" : "start-8",
        )}
      >
        {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </span>
      <Sun className="pointer-events-none absolute end-2 size-4 text-muted-foreground" aria-hidden />
      <Moon
        className="pointer-events-none absolute start-2 size-4 text-muted-foreground"
        aria-hidden
      />
    </button>
  );
}
