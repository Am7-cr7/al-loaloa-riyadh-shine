import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ShieldCheck, Sparkles, Truck, Users, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { BeforeAfter } from "@/components/BeforeAfter";
import { GALLERY, SERVICES, FAQS } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "غسيل وتلميع سيارات بالبخار متنقل بالرياض | مغسلة اللؤلؤة" },
      {
        name: "description",
        content:
          "مغسلة اللؤلؤة: غسيل وتلميع سيارات بالبخار يصلك في موقعك بالرياض — تنظيف داخلي عميق، بوليش، وحماية الجلد على يد فريق محترف. متاحون 24 ساعة، احجز عبر واتساب الآن.",
      },
      {
        name: "keywords",
        content:
          "غسيل سيارات بالبخار الرياض, مغسلة متنقلة الرياض, تلميع سيارات الرياض, تنظيف داخلي للسيارة, بوليش سيارات, حماية جلد السيارة, غسيل سيارات في الموقع, مغسلة اللؤلؤة",
      },
      { property: "og:title", content: "غسيل وتلميع سيارات بالبخار متنقل بالرياض | مغسلة اللؤلؤة" },
      {
        property: "og:description",
        content: "تلميع وغسيل عميق بالبخار في موقعك — الرياض، خدمة متنقلة على مدار الساعة.",
      },
      { property: "og:url", content: "/" },
      {
        name: "twitter:title",
        content: "غسيل وتلميع سيارات بالبخار متنقل بالرياض | مغسلة اللؤلؤة",
      },
      {
        name: "twitter:description",
        content: "تلميع وغسيل عميق بالبخار في موقعك — الرياض، خدمة متنقلة على مدار الساعة.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const BADGES = [
  { icon: Truck, label: "الرياض | خدمة متنقلة" },
  { icon: Users, label: "فريق محترف" },
  { icon: ShieldCheck, label: "مواد معتمدة" },
];

function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="سيارة فاخرة بعد التلميع بالبخار"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
          <span className="panel inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-gold">
            <Clock className="size-4" /> خدمة متاحة 24 ساعة / 7 أيام
          </span>

          <h1 className="mt-8 text-4xl leading-tight font-extrabold md:text-6xl">
            نرجع لسيارتك <span className="text-gradient-gold">لمعة الوكالة</span>
          </h1>
          <p className="mt-5 text-xl font-bold text-gold-soft md:text-2xl">
            تلميع وغسيل عميق بالبخار في موقعك
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            عناية فاخرة للسيارات عند باب بيتك في الرياض — أينما كنت.
          </p>

          <div className="mx-auto mt-9 flex max-w-md flex-col gap-3">
            <WhatsAppButton location="hero" full />
            <CallButton location="hero" full />
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
            {BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-gold" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Services preview ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          eyebrow="خدماتنا"
          title="باقات تناسب كل سيارة"
          sub="اختر الباقة المناسبة وسنصل إليك في الوقت الذي يناسبك."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`panel overflow-hidden rounded-2xl transition hover:-translate-y-1 ${
                s.featured ? "ring-1 ring-gold/60" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <Sparkles className="size-7 text-gold" />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.desc}</p>
                <WhatsAppButton
                  location={`home_service_${s.title}`}
                  label={s.cta}
                  full
                  className="mt-5 px-4 py-3 text-sm"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex rounded-xl border border-gold/50 px-6 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            تفاصيل كل الباقات
          </Link>
        </div>
      </section>

      {/* ---------------- Before / After ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          eyebrow="النتائج"
          title="قبل وبعد"
          sub="اسحب الفاصل لترى الفرق الحقيقي بعد التنظيف بالبخار."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {GALLERY.map((g) => (
            <div key={g.title}>
              <BeforeAfter before={g.before} after={g.after} alt={g.title} />
              <p className="mt-3 text-center text-sm font-semibold text-muted-foreground">
                {g.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Why us ---------------- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle eyebrow="لماذا اللؤلؤة؟" title="جودة تستحق سيارتك" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Truck,
              t: "نصل إليك",
              d: "خدمة متنقلة تغطي جميع أحياء الرياض دون أن تغادر مكانك.",
            },
            {
              icon: Star,
              t: "لمعة الوكالة",
              d: "تلميع احترافي بمواد معتمدة يعيد بريق الطلاء الأصلي.",
            },
            {
              icon: ShieldCheck,
              t: "آمن وموفر للماء",
              d: "تقنية البخار تنظف بعمق وتعقّم مع استهلاك أقل للماء.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="panel rounded-2xl p-6">
              <Icon className="size-7 text-gold" />
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FAQ teaser ---------------- */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionTitle eyebrow="أسئلة شائعة" title="كل ما تحتاج معرفته" />
        <Accordion type="single" collapsible className="w-full">
          {FAQS.slice(0, 4).map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="panel rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-extrabold md:text-3xl">
            جاهزين نوصل لك <span className="text-gradient-gold">اليوم</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            احجز موعدك خلال ثوانٍ عبر واتساب أو اتصل بنا مباشرة.
          </p>
          <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
            <WhatsAppButton location="footer_cta" full />
            <CallButton location="footer_cta" full />
          </div>
        </div>
      </section>
    </>
  );
}

/** Small shared section heading. */
export function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <span className="text-sm font-bold tracking-wide text-gold">{eyebrow}</span>}
      <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}
