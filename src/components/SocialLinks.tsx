import { Facebook, Ghost, Music2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackSocial } from "@/lib/tracking";
import { cn } from "@/lib/utils";

/** Social icon row — every click is reported to the pixels via trackSocial. */
export function SocialLinks({ location, className }: { location: string; className?: string }) {
  const items = [
    { key: "snapchat", label: "سناب شات", href: SITE.social.snapchat, Icon: Ghost },
    { key: "tiktok", label: "تيك توك", href: SITE.social.tiktok, Icon: Music2 },
    { key: "facebook", label: "فيسبوك", href: SITE.social.facebook, Icon: Facebook },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onClick={() => trackSocial(key, location)}
          className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary-foreground"
        >
          <Icon className="size-5" aria-hidden />
        </a>
      ))}
    </div>
  );
}
