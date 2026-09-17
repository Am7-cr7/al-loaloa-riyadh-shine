import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/site";

/**
 * Privacy Policy & Terms of Service modal.
 * Wording covers what Meta, TikTok, Snapchat and Google Ads require an
 * advertiser landing page to disclose: what data is collected, which
 * platforms receive it, the purposes, and how to withdraw consent.
 */
export function LegalDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto text-right" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-extrabold">
            سياسة الخصوصية وشروط الاستخدام
          </DialogTitle>
          <DialogDescription>
            آخر تحديث: سبتمبر 2026 — {SITE.nameAr}، الرياض، المملكة العربية السعودية.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm leading-7 text-muted-foreground">
          <section>
            <h3 className="mb-1 font-bold text-foreground">١. البيانات التي نجمعها</h3>
            <p>
              عند تواصلك معنا عبر واتساب أو الهاتف نحصل على اسمك، رقم جوالك، موقع تنفيذ الخدمة
              وتفاصيل طلبك. كما نجمع بيانات استخدام غير مباشرة عند تصفح الموقع مثل الصفحات التي
              زرتها، نوع الجهاز، والمصدر الإعلاني الذي وصلت منه.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">
              ٢. ملفات تعريف الارتباط وأدوات القياس
            </h3>
            <p>
              نستخدم — بعد موافقتك فقط — أدوات قياس وإعلانات من أطراف ثالثة:{" "}
              <strong className="text-foreground">Google Analytics 4 و Google Tag Manager</strong>{" "}
              للتحليلات، و
              <strong className="text-foreground">Meta (Facebook / Instagram) Pixel</strong>،{" "}
              <strong className="text-foreground">TikTok Pixel</strong>، و
              <strong className="text-foreground">Snapchat Pixel</strong> لقياس أداء الحملات
              الإعلانية وإعادة الاستهداف. تُرسل لهذه المنصات بيانات فنية مثل معرّف الكوكيز، عنوان
              IP، نوع المتصفح والصفحات التي زرتها. لا نرسل اسمك أو رقم جوالك إلى أي منصة إعلانية.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">٣. أساس المعالجة وموافقتك</h3>
            <p>
              لا يتم تحميل أي أداة إعلانية أو تحليلية قبل ضغطك على «موافق» في شريط الكوكيز. يمكنك
              تغيير اختيارك أو سحب موافقتك في أي وقت من رابط «إعدادات الكوكيز» أسفل الصفحة، ويسري
              التغيير فوراً. رفض الكوكيز لا يمنعك من استخدام الموقع أو حجز الخدمة.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">٤. مشاركة البيانات والاحتفاظ بها</h3>
            <p>
              لا نبيع بياناتك الشخصية. تُشارك البيانات فقط مع مزوّدي أدوات القياس المذكورين أعلاه
              ووفق سياساتهم، وتُحفظ بيانات التواصل لدينا للمدة اللازمة لتقديم الخدمة ومتابعة الضمان.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">٥. حقوقك</h3>
            <p>
              يحق لك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، وسحب موافقتك على التتبع. راسلنا
              على واتساب {SITE.phoneDisplay} وسنستجيب خلال ٣٠ يوماً.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">٦. شروط الاستخدام</h3>
            <p>
              الخدمة متاحة داخل مدينة الرياض فقط. الأسعار تُحدد بعد معاينة حالة السيارة والاتفاق عبر
              واتساب أو الهاتف، وقد تختلف حسب حجم السيارة ونطاق العمل. يلتزم فريقنا بتنفيذ الخدمة
              بمواد معتمدة وآمنة؛ وفي حال عدم رضاك عن النتيجة تواصل معنا خلال ٢٤ ساعة لإعادة
              المعالجة. المحتوى والصور المعروضة في هذا الموقع مملوكة لـ{SITE.nameAr} ولا يجوز
              استخدامها دون إذن.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold text-foreground">٧. التواصل</h3>
            <p>
              {SITE.nameAr} — الرياض، المملكة العربية السعودية. هاتف وواتساب:{" "}
              <span dir="ltr">{SITE.phoneDisplay}</span>
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
