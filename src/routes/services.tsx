import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "خدمات وباقات الغسيل والتلميع | اللؤلؤة الرياض" },
      {
        name: "description",
        content:
          "باقات غسيل خارجي بالبخار، تنظيف داخلي عميق، تلميع وبوليش، وباقة الوكالة الشاملة — خدمة متنقلة في الرياض.",
      },
      { property: "og:title", content: "خدمات وباقات اللؤلؤة" },
      {
        property: "og:description",
        content: "باقات عناية بالسيارات بالبخار تصلك في موقعك بالرياض.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12 text-center">
        <span className="text-sm font-bold text-gold">الخدمات</span>
        <h1 className="mt-2 text-4xl font-extrabold">باقاتنا بالتفصيل</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          كل الباقات تُنفَّذ في موقعك داخل الرياض بمعدات بخار احترافية.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className={`panel flex flex-col rounded-2xl p-7 ${
              s.featured ? "ring-1 ring-gold/60" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <Sparkles className="size-7 text-gold" />
              {s.featured && (
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">
                  الأكثر طلباً
                </span>
              )}
            </div>
            <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
            <p className="mt-1 font-bold text-gold">{s.price}</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="size-4 text-whatsapp" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <WhatsAppButton location={`service_${s.title}`} full />
            </div>
          </article>
        ))}
      </div>

      <div className="panel mt-12 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-extrabold">محتار في الباقة المناسبة؟</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          كلّمنا ونرشّح لك الأنسب حسب حالة سيارتك.
        </p>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <WhatsAppButton location="services_cta" full />
          <CallButton location="services_cta" full />
        </div>
      </div>
    </div>
  );
}
