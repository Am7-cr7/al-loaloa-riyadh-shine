/** Static Arabic content: service packages, FAQ and gallery items. */

import backseatBefore from "@/assets/backseat-before.jpg.asset.json";
import backseatAfter from "@/assets/backseat-after.jpg.asset.json";
import sedanBefore from "@/assets/sedan-before.jpg.asset.json";
import sedanAfter from "@/assets/sedan-after.jpg.asset.json";
import seatAfter from "@/assets/seat-after.jpg.asset.json";
import consoleAfter from "@/assets/console-after.jpg.asset.json";
import pkgExterior from "@/assets/pkg-exterior.jpg";
import pkgInterior from "@/assets/pkg-interior.jpg";
import pkgPolish from "@/assets/pkg-polish.jpg";
import pkgFull from "@/assets/pkg-full.jpg";

export type Service = {
  title: string;
  /** Call-to-action shown where a price used to be (no figures on the site). */
  cta: string;
  desc: string;
  image: string;
  /** Descriptive alt text for the package photo. */
  alt: string;
  features: readonly string[];
  featured?: boolean;
};

export const SERVICES: readonly Service[] = [
  {
    title: "غسيل خارجي بالبخار",
    cta: "تواصل لمعرفة السعر",
    desc: "غسيل بالبخار موفر للماء مع تنظيف الجنوط والإطارات وتلميع الزجاج.",
    image: pkgExterior,
    alt: "فني محترف بزي العمل ينظف هيكل سيارة فاخرة سوداء بجهاز البخار",
    features: ["بخار عالي الحرارة", "تنظيف الجنوط", "تلميع الزجاج", "تجفيف بمناشف مايكروفايبر"],
  },
  {
    title: "تنظيف داخلي عميق",
    cta: "احجز الآن",
    desc: "تنظيف المقاعد والسجاد والكنسول وإزالة البقع والروائح بالبخار.",
    image: pkgInterior,
    alt: "فني تنظيف سيارات ينظف مقاعد وكنسول سيارة فاخرة بالبخار من الداخل",
    features: ["شفط شامل", "إزالة البقع", "تعقيم بالبخار", "معطر داخلي"],
    featured: true,
  },
  {
    title: "تلميع وبوليش",
    cta: "تواصل لمعرفة السعر",
    desc: "إزالة الخدوش السطحية وإعادة اللمعان الأصلي لطلاء سيارتك.",
    image: pkgPolish,
    alt: "فني تلميع يستخدم ماكينة بوليش على غطاء محرك سيارة فاخرة لامعة",
    features: ["تلميع 3 مراحل", "إزالة الخدوش الخفيفة", "حماية شمعية", "لمعة الوكالة"],
  },
  {
    title: "باقة الوكالة الشاملة",
    cta: "احجز الآن",
    desc: "داخلي وخارجي وتلميع كامل — سيارتك كأنها خرجت من المعرض.",
    image: pkgFull,
    alt: "فني يضع مادة حماية على مقعد جلد بيج في سيارة فاخرة",
    features: ["كل الخدمات السابقة", "تنظيف المحرك", "حماية الجلد", "خدمة في موقعك"],
  },
] as const;

export const FAQS = [
  {
    q: "هل الخدمة متنقلة فعلاً؟",
    a: "نعم، نصل إليك في أي حي داخل الرياض — منزلك أو مقر عملك — بمعداتنا الخاصة دون الحاجة لأي شيء منك.",
  },
  {
    q: "كم تستغرق الخدمة؟",
    a: "الغسيل الخارجي من 30 إلى 45 دقيقة، والتنظيف الداخلي العميق من ساعة إلى ساعتين حسب حالة السيارة.",
  },
  {
    q: "هل البخار آمن على الفرش والجلد؟",
    a: "نستخدم أجهزة بخار بحرارة مضبوطة ومواد معتمدة آمنة على جميع أنواع الأقمشة والجلود.",
  },
  {
    q: "هل تحتاجون ماء أو كهرباء من الموقع؟",
    a: "لا، نأتي بكل ما نحتاجه. الخدمة موفرة للماء وتستهلك كمية قليلة جداً مقارنة بالغسيل التقليدي.",
  },
  {
    q: "ما هي طرق الدفع؟",
    a: "نقبل الدفع نقداً، بطاقة مدى، والتحويل البنكي بعد انتهاء الخدمة مباشرة.",
  },
  {
    q: "هل تعملون طوال الأسبوع؟",
    a: "نعم، خدمتنا متاحة 24 ساعة / 7 أيام. تواصل معنا عبر واتساب لحجز الموعد المناسب لك.",
  },
] as const;

export const GALLERY = [
  {
    title: "المقعد الخلفي",
    before: backseatBefore.url,
    after: backseatAfter.url,
  },
  {
    title: "مقاعد أمامية جلد",
    before: sedanBefore.url,
    after: sedanAfter.url,
  },
] as const;

export const SHOWCASE = [
  { src: seatAfter.url, title: "إزالة بقع عميقة من الفرش" },
  { src: consoleAfter.url, title: "تنظيف الكنسول الأوسط" },
] as const;
