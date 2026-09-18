# مراجعة الموقع — ملاحظات وإصلاحات

## النتيجة العامة
الموقع يعمل بلا أخطاء تشغيل: لا أخطاء وحدة التحكم، لا أخطاء TypeScript، والبناء نظيف. التتبع والموافقة على الكوكيز يعملان كما صُمما. لكن توجد 4 ملاحظات جودة تستحق الإصلاح قبل النشر:

## الملاحظات (خطأ / تحسين)

1. **خريطة الموقع غير صالحة (خطأ SEO حقيقي)**
   `public/sitemap.xml` يستخدم روابط نسبية (`<loc>/</loc>`) بينما معيار sitemap يشترط روابط مطلقة. Google سيرفض أو يتجاهل الملف.
   → تحويل كل `<loc>` إلى `https://alloaloariyadh.com/...`.

2. **robots.txt ناقص سطر الخريطة**
   → إضافة `Sitemap: https://alloaloariyadh.com/sitemap.xml`.

3. **نطاق قديم في بيانات LocalBusiness**
   حقل `@id` في JSON-LD داخل `src/routes/__root.tsx` ما زال يشير إلى `https://alloaloa.sa/#business` بينما النطاق الحالي هو `alloaloariyadh.com` — تضارب يربك محركات البحث.
   → تحديثه إلى `https://alloaloariyadh.com/#business`.

4. **بيانات Open Graph موجودة فقط على الصفحة الرئيسية**
   الصفحات الأخرى (`/services`, `/gallery`, `/faq`, `/privacy-policy`) تملك عنواناً ووصفاً خاصاً لكنها لا تضيف `og:url`/`og:image` ذاتية الإشارة — عند مشاركة أي منها سيلتقط المشارِك صورة/رابطاً غير مضمون.
   → إضافة `og:url` + `og:image` (+twitter المقابل) لكل صفحة.

## ملاحظات مقصودة (لا تُغيَّر)
- تحميل سكربت GA4 مع «رفض افتراضي» للتخزين قبل موافقة الزائر هو نمط Consent Mode v2 الرسمي من Google — ليس خطأ.
- تبديل الوضع الفاتح/الداكن مع `suppressHydrationWarning` مقصود لمنع وميض الثيم.

## خطوات التنفيذ
1. تعديل `public/sitemap.xml` (روابط مطلقة).
2. تعديل `public/robots.txt` (سطر Sitemap).
3. تعديل `@id` في `src/routes/__root.tsx`.
4. إضافة og/twitter url+image في رؤوس الصفحات الأربع الأخرى.
5. تحقق: `bunx tsgo --noEmit` + فحص الصفحات بلا أخطاء.
