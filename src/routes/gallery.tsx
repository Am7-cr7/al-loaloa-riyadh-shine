import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/BeforeAfter";
import { GALLERY, SHOWCASE } from "@/lib/content";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "معرض الأعمال قبل وبعد | اللؤلؤة الرياض" },
      {
        name: "description",
        content:
          "شاهد نتائج التنظيف العميق بالبخار للمقاعد والفرش والكنسول — صور حقيقية قبل وبعد من عملائنا في الرياض.",
      },
      { property: "og:title", content: "معرض قبل وبعد | اللؤلؤة" },
      {
        property: "og:description",
        content: "نتائج حقيقية لتنظيف السيارات بالبخار في الرياض.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12 text-center">
        <span className="text-sm font-bold text-gold">معرض الأعمال</span>
        <h1 className="mt-2 text-4xl font-extrabold">قبل وبعد</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          صور حقيقية من أعمالنا — اسحب الفاصل لمشاهدة الفرق.
        </p>
      </header>

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

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {SHOWCASE.map((s) => (
          <figure key={s.title} className="overflow-hidden rounded-2xl border border-gold/25">
            <img
              src={s.src}
              alt={s.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="bg-surface/60 p-3 text-center text-sm text-muted-foreground">
              {s.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="panel mt-12 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-extrabold">نبي سيارتك تكون التالية</h2>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <WhatsAppButton location="gallery_cta" full />
          <CallButton location="gallery_cta" full />
        </div>
      </div>
    </div>
  );
}
