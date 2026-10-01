import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackLead } from "@/lib/tracking";
import { ThemeToggle } from "./ThemeToggle";

/** Sticky site header: menu, quick contact icons and the brand mark. */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="القائمة"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg text-foreground transition hover:text-gold md:hidden"
          >
            {open ? <Menu className="size-6" /> : <Menu className="size-6" />}
          </button>

          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            onClick={() => trackLead("whatsapp", "header")}
            className="grid size-10 place-items-center rounded-full text-whatsapp transition hover:brightness-125"
          >
            <WhatsAppIcon className="size-6" />
          </a>
          <a
            href={SITE.phoneHref}
            aria-label="اتصال"
            onClick={() => trackLead("call", "header")}
            className="grid size-10 place-items-center rounded-full text-gold transition hover:brightness-125"
          >
            <Phone className="size-6" />
          </a>

          <nav className="hidden items-center gap-6 ps-4 text-sm font-semibold md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
                className="transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="font-display text-2xl font-extrabold text-gradient-gold">
            {SITE.nameAr}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-gold/15 bg-background px-4 py-4 md:hidden">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">القائمة</span>
            <button
              type="button"
              aria-label="إغلاق"
              onClick={() => setOpen(false)}
              className="text-muted-foreground"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-3 text-base font-semibold">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <SocialLinks location="header_menu" className="mt-5" />
        </div>
      )}
    </header>
  );
}
