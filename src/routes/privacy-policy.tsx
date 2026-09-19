import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية | اللؤلؤة" },
      {
        name: "description",
        content:
          "سياسة الخصوصية الخاصة بموقع اللؤلؤة لغسيل وتلميع السيارات المتنقل في الرياض وطريقة استخدام بيانات الزوار.",
      },
      { property: "og:title", content: "سياسة الخصوصية | اللؤلؤة" },
      {
        property: "og:description",
        content: "كيف نتعامل مع بياناتك عند استخدام موقع اللؤلؤة.",
      },
      { property: "og:url", content: "https://alloaloariyadh.com/privacy-policy" },
      { name: "twitter:url", content: "https://alloaloariyadh.com/privacy-policy" },
      { property: "og:image", content: "https://alloaloariyadh.com/og-image.jpg" },
      { name: "twitter:image", content: "https://alloaloariyadh.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://alloaloariyadh.com/privacy-policy" }],
  }),
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 leading-8">
      <h1 className="text-3xl font-extrabold">سياسة الخصوصية</h1>

      <h2 className="mt-8 text-xl font-bold text-gold">المعلومات التي نجمعها</h2>
      <p className="mt-2 text-muted-foreground">
        لا يطلب هذا الموقع تسجيل حساب ولا يجمع بيانات شخصية مباشرة. عند تواصلك معنا عبر واتساب أو
        الهاتف نستخدم معلوماتك (الاسم، رقم الجوال، الموقع) لتنفيذ الخدمة فقط.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gold">ملفات تعريف الارتباط والتحليلات</h2>
      <p className="mt-2 text-muted-foreground">
        نستخدم أدوات قياس مثل Google Analytics و Google Tag Manager وبكسل Meta و Snapchat و TikTok
        لفهم أداء الموقع وتحسين إعلاناتنا. هذه الأدوات قد تستخدم ملفات تعريف ارتباط لجمع بيانات
        مجهولة الهوية مثل الصفحات التي تمت زيارتها ونوع الجهاز.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gold">مشاركة البيانات</h2>
      <p className="mt-2 text-muted-foreground">
        لا نبيع بياناتك ولا نشاركها مع أي جهة خارجية باستثناء مزودي خدمات التحليلات المذكورين أعلاه.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gold">حقوقك</h2>
      <p className="mt-2 text-muted-foreground">
        يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، كما يمكنك طلب حذف بياناتك بالتواصل معنا.
      </p>

      <h2 className="mt-8 text-xl font-bold text-gold">التواصل</h2>
      <p className="mt-2 text-muted-foreground">
        لأي استفسار حول الخصوصية تواصل معنا على{" "}
        <a href={SITE.phoneHref} dir="ltr" className="text-gold">
          {SITE.phoneDisplay}
        </a>
        .
      </p>
    </article>
  );
}
