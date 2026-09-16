import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackCall, trackWhatsApp } from "@/lib/tracking";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Persistent WhatsApp / Call actions pinned to the bottom of every page. */
export function FloatingButtons() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-gold/20 bg-background/90 p-3 backdrop-blur md:inset-x-auto md:start-5 md:bottom-6 md:flex-col md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsApp("floating")}
        aria-label="تواصل عبر واتساب"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 font-bold text-whatsapp-foreground shadow-[var(--shadow-green)] transition hover:brightness-110 md:size-14 md:rounded-full md:py-0"
      >
        <WhatsAppIcon className="size-6" />
        <span className="md:hidden">واتساب</span>
      </a>
      <a
        href={SITE.phoneHref}
        onClick={() => trackCall("floating")}
        aria-label="اتصل الآن"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gold py-3 font-bold text-gold transition hover:bg-gold hover:text-primary-foreground md:size-14 md:rounded-full md:border-0 md:bg-gold md:text-primary-foreground md:shadow-[var(--shadow-gold)] md:py-0"
      >
        <Phone className="size-6" aria-hidden />
        <span className="md:hidden">اتصال</span>
      </a>
    </div>
  );
}
