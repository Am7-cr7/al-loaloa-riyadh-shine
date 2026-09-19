import carSedan from "@/assets/car-sedan.jpg";
import carCrossover from "@/assets/car-crossover.jpg";
import carSuv from "@/assets/car-suv.jpg";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { trackWhatsApp } from "@/lib/tracking";

/**
 * Car category picker — each card deep-links to WhatsApp with a prefilled
 * message naming the category, so the team knows which pricing tier applies.
 * Every click fires the shared Lead/Contact tracking before navigation.
 */

type CarCategory = {
  id: string;
  badge: string;
  image: string;
  imageAlt: string;
  title: string;
  models: string;
  desc: string;
  btnText: string;
  href: string;
};

const CATEGORIES: CarCategory[] = [
  {
    id: "sedan",
    badge: "الأكثر طلباً",
    image: carSedan,
    imageAlt: "سيارة سيدان سوداء بإضاءة ذهبية",
    title: "سيارات السيدان",
    models: "كامري | إلنترا | أكورد | كورولا",
    desc: "غسيل وتلميع بخار متنقل بالرياض. عناية فائقة للهيكل الخارجي والمقصورة.",
    btnText: "تواصل للسعر",
    href: "https://wa.me/966532640488?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة السيدان",
  },
  {
    id: "crossover",
    badge: "الأسرع طلباً",
    image: carCrossover,
    imageAlt: "سيارة كروس أوفر سوداء بإضاءة ذهبية",
    title: "الكروس أوفر",
    models: "RAV4 | توسان | فورد تيريتوري | كريتا",
    desc: "خدمة متكاملة لسيارات الوسط. تنظيف عميق للمقاعد الجلدية وتلميع الواجهة.",
    btnText: "تواصل للسعر",
    href: "https://wa.me/966532640488?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة الكروس أوفر",
  },
  {
    id: "suv",
    badge: "طلب عالي",
    image: carSuv,
    imageAlt: "سيارة جيب عائلي سوداء بإضاءة ذهبية",
    title: "الجيب العالي / العائلي",
    models: "لاند كروزر | باترول | يوكن | تاهو",
    desc: "رعاية فاخرة للمركبات العائلية. تنظيف شامل للصفوف الثلاثة وتلميع الهيكل الضخم.",
    btnText: "تواصل للسعر",
    href: "https://wa.me/966532640488?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة الجيب العائلي",
  },
];

export function CarCategories() {
  return (
    <section className="w-full bg-black py-16" aria-labelledby="car-categories-title">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <span className="text-sm font-bold text-[#D4AF37]">فئات السيارات</span>
          <h2 id="car-categories-title" className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
            اختر نوع سيارتك لتحديد الباقة
          </h2>
        </header>

        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <article
              key={c.id}
              className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#111111] shadow-lg"
            >
              <span className="absolute top-0 right-0 z-10 rounded-bl-lg bg-[#D4AF37] px-3 py-1 text-sm font-bold text-black">
                {c.badge}
              </span>
              <img
                src={c.image}
                alt={c.imageAlt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="text-sm text-gray-400">{c.models}</p>
                <p className="text-sm leading-6 text-gray-300">{c.desc}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(`car_category_${c.id}`)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-bold text-white transition-colors hover:bg-[#1DA851]"
                >
                  <WhatsAppIcon className="size-5" />
                  {c.btnText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
