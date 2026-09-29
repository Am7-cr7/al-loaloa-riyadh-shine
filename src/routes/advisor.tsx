import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Sparkles, Upload, X } from "lucide-react";
import { recommendPackage, type AdvisorResult } from "@/lib/advisor.functions";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const Route = createFileRoute("/advisor")({
  component: AdvisorPage,
  head: () => ({
    meta: [
      { title: "مستشار العناية الذكي | اللؤلؤة لغسيل السيارات بالبخار" },
      {
        name: "description",
        content:
          "صف سيارتك أو ارفع صورة لها واحصل فوراً على اقتراح الباقة المناسبة ونصائح عناية مخصصة من مغسلة اللؤلؤة المتنقلة بالرياض.",
      },
      { property: "og:title", content: "مستشار العناية الذكي | اللؤلؤة" },
      {
        property: "og:description",
        content: "اقتراح فوري للباقة المناسبة لسيارتك ونصائح عناية مخصصة.",
      },
      { property: "og:url", content: "https://alloaloariyadh.com/advisor" },
      { name: "twitter:url", content: "https://alloaloariyadh.com/advisor" },
      { property: "og:image", content: "https://alloaloariyadh.com/og-image.jpg" },
      { name: "twitter:image", content: "https://alloaloariyadh.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://alloaloariyadh.com/advisor" }],
  }),
});

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

function AdvisorPage() {
  const [description, setDescription] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const recommend = useServerFn(recommendPackage);
  const mutation = useMutation<AdvisorResult, Error>({
    mutationFn: () => recommend({ data: { description, imageDataUrl } }),
  });

  function onPickFile(file: File | undefined) {
    setFileError(null);
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFileError("الرجاء اختيار ملف صورة.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setFileError("حجم الصورة كبير — الحد الأقصى 4 ميغابايت.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImageDataUrl(String(reader.result));
    reader.readAsDataURL(file);
  }

  const result = mutation.data;
  const waHref = result
    ? `https://wa.me/966532640488?text=${encodeURIComponent(result.whatsappMessage)}`
    : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="mb-10 text-center">
        <span className="text-sm font-bold text-gold">جديد</span>
        <h1 className="mt-2 text-4xl font-extrabold">مستشار العناية الذكي</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          صف سيارتك أو ارفع صورة لها، وسنقترح لك الباقة الأنسب مع نصائح عناية مخصصة.
        </p>
      </header>

      <section className="panel rounded-3xl p-6 md:p-8">
        <label htmlFor="car-desc" className="block text-sm font-bold">
          وصف سيارتك وحالتها
        </label>
        <textarea
          id="car-desc"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="مثال: كامري 2019 لون أبيض، المقاعد قماش وفيها بقع، والطلاء عليه خدوش خفيفة."
          className="mt-3 w-full rounded-xl border border-border bg-background p-4 text-sm text-foreground outline-none focus:border-gold"
        />

        <div className="mt-5">
          <span className="block text-sm font-bold">صورة السيارة (اختياري)</span>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onPickFile(e.target.files?.[0])}
          />
          {imageDataUrl ? (
            <div className="relative mt-3 inline-block">
              <img
                src={imageDataUrl}
                alt="صورة السيارة التي رفعها العميل"
                className="h-40 rounded-xl object-cover"
              />
              <button
                type="button"
                aria-label="إزالة الصورة"
                onClick={() => setImageDataUrl(null)}
                className="absolute -top-2 -left-2 grid size-7 place-items-center rounded-full bg-background text-foreground ring-1 ring-border"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="mt-3 inline-flex items-center gap-2 rounded-xl border border-gold/50 px-5 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              <Upload className="size-4" /> اختر صورة
            </button>
          )}
          {fileError && <p className="mt-2 text-sm text-destructive">{fileError}</p>}
        </div>

        <button
          type="button"
          disabled={mutation.isPending || (!description.trim() && !imageDataUrl)}
          onClick={() => mutation.mutate()}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-bold text-primary-foreground transition hover:brightness-110 disabled:opacity-50"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="size-5 animate-spin" /> جارٍ تحليل سيارتك…
            </>
          ) : (
            <>
              <Sparkles className="size-5" /> اقترح لي الباقة المناسبة
            </>
          )}
        </button>

        {mutation.isError && (
          <p className="mt-4 text-center text-sm text-destructive">
            {mutation.error.message || "تعذّر إنشاء التوصية، حاول مرة أخرى."}
          </p>
        )}
      </section>

      {result && (
        <section className="panel mt-8 rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-extrabold">
            الباقة المقترحة: <span className="text-gradient-gold">{result.recommendedPackage}</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{result.carSummary}</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{result.reason}</p>

          <h3 className="mt-6 font-bold">نصائح للعناية بسيارتك</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
            {result.tips.map((tip) => (
              <li key={tip} className="flex gap-2">
                <Sparkles className="mt-1 size-4 shrink-0 text-gold" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer" /* TRACKING PIXEL PLACEHOLDER: click event */
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-4 font-bold text-white transition hover:brightness-110"
          >
            <WhatsAppIcon className="size-5" /> أرسل التوصية عبر واتساب
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            التوصية إرشادية بالذكاء الاصطناعي — يحدد الفني الباقة النهائية عند المعاينة.
          </p>
        </section>
      )}
    </div>
  );
}
