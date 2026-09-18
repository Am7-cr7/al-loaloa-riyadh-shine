# إصلاحات SEO وOpen Graph النهائية قبل الإنتاج

الموقع يعمل بلا أخطاء تشغيل. هذه 4 إصلاحات دقيقة للتهيئة النهائية — دون أي تغيير في الواجهة.

## 1. روابط خريطة الموقع مطلقة
`public/sitemap.xml`: كل `<loc>` حالياً نسبي (`/services` …) — تحويلها جميعاً إلى `https://alloaloariyadh.com/...`.

## 2. robots.txt
إلحاق السطر التالي في نهاية `public/robots.txt`:
`Sitemap: https://alloaloariyadh.com/sitemap.xml`

## 3. نطاق JSON-LD (LocalBusiness)
في `src/routes/__root.tsx`: تحديث `@id` من `https://alloaloa.sa/#business` إلى `https://alloaloariyadh.com/#business` وإضافة حقل `url` بنفس النطاق.

## 4. وسوم Open Graph لكل الصفحات الفرعية
إضافة إلى رؤوس `/services` و`/gallery` و`/faq` و`/privacy-policy`:
- `og:url` و`twitter:url` مطلقة لكل صفحة (مثل `https://alloaloariyadh.com/services`)
- `og:image` و`twitter:image` = `https://alloaloariyadh.com/og-image.jpg`

## تحقق
`bunx tsgo --noEmit` نظيف + فحص الصفحات والوسوم عبر المتصفح بلا أخطاء.
