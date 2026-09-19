import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/content";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة | اللؤلؤة لغسيل السيارات بالبخار" },
      {
        name: "description",
        content:
          "إجابات عن الخدمة المتنقلة، مدة التنفيذ، أمان البخار على الفرش والجلد، وطرق الدفع في الرياض.",
      },
      { property: "og:title", content: "الأسئلة الشائعة | اللؤلؤة" },
      {
        property: "og:description",
        content: "كل ما تحتاج معرفته عن خدمة الغسيل بالبخار المتنقلة في الرياض.",
      },
      { property: "og:url", content: "https://alloaloariyadh.com/faq" },
      { name: "twitter:url", content: "https://alloaloariyadh.com/faq" },
      { property: "og:image", content: "https://alloaloariyadh.com/og-image.jpg" },
      { name: "twitter:image", content: "https://alloaloariyadh.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://alloaloariyadh.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <header className="mb-10 text-center">
        <span className="text-sm font-bold text-gold">الدعم</span>
        <h1 className="mt-2 text-4xl font-extrabold">الأسئلة الشائعة</h1>
      </header>

      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`}>
            <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="panel mt-12 rounded-3xl p-8 text-center">
        <h2 className="text-xl font-extrabold">ما لقيت إجابتك؟</h2>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <WhatsAppButton location="faq_cta" full />
          <CallButton location="faq_cta" full />
        </div>
      </div>
    </div>
  );
}
