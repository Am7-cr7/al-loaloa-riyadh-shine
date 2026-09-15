import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackCall, trackWhatsApp } from "@/lib/tracking";
import { cn } from "@/lib/utils";

/**
 * Shared CTA anchors. Each one fires its conversion event (with the calling
 * section name) before the browser follows the link.
 */

type Props = { location: string; className?: string; full?: boolean };

export function WhatsAppButton({ location, className, full }: Props) {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(location)}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-green)] transition hover:brightness-110 active:scale-[0.98]",
        full && "w-full",
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden />
      تواصل عبر واتساب
    </a>
  );
}

export function CallButton({ location, className, full }: Props) {
  return (
    <a
      href={SITE.phoneHref}
      onClick={() => trackCall(location)}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gold px-7 py-4 text-base font-bold text-gold transition hover:bg-gold hover:text-primary-foreground active:scale-[0.98]",
        full && "w-full",
        className,
      )}
    >
      <Phone className="size-5" aria-hidden />
      اتصل الآن
    </a>
  );
}
