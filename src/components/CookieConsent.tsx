import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { getConsent, onConsentChange, resetConsent, setConsent } from "@/lib/consent";
import { LegalDialog } from "@/components/LegalDialog";

/**
 * Cookie consent banner.
 *
 * Advertising and analytics tools stay blocked until the visitor accepts, which
 * is what Meta, TikTok, Snapchat and Google Ads expect from a landing page.
 * "إدارة" opens per-category switches; the choice is stored with the notice
 * version and can be withdrawn later from the footer.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    setVisible(getConsent() === null);
    return onConsentChange((c) => {
      setVisible(c === null);
      if (c === null) setManage(false);
    });
  }, []);

  // Allow the footer link to reopen the banner.
  useEffect(() => {
    const open = () => {
      resetConsent();
      setManage(true);
    };
    window.addEventListener("alloaloa:open-cookie-settings", open);
    return () => window.removeEventListener("alloaloa:open-cookie-settings", open);
  }, []);

  if (!visible) return null;

  const save = (choice: { analytics: boolean; marketing: boolean }) => {
    setConsent(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="إعدادات ملفات تعريف الارتباط"
      className="fixed inset-x-0 bottom-20 z-[60] px-3 md:bottom-4"
    >
      <div className="panel mx-auto max-w-3xl rounded-2xl p-5 shadow-xl">
        <div className="flex items-start gap-3">
          <Cookie className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
          <div className="flex-1">
            <p className="text-sm leading-7 text-muted-foreground">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس أداء حملاتنا الإعلانية عبر Google و
              Meta و TikTok و Snapchat. لن يتم تشغيل أي أداة تتبّع قبل موافقتك.{" "}
              <LegalDialog>
                <button type="button" className="font-bold text-gold underline underline-offset-4">
                  اعرف المزيد
                </button>
              </LegalDialog>
            </p>

            {manage && (
              <div className="mt-4 space-y-3 rounded-xl border border-border p-4 text-sm">
                <label className="flex items-center justify-between gap-3 opacity-70">
                  <span>
                    <span className="font-bold text-foreground">ضرورية</span> — لازمة لعمل الموقع
                  </span>
                  <input type="checkbox" checked disabled className="size-4 accent-current" />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span>
                    <span className="font-bold text-foreground">تحليلية</span> — Google Analytics /
                    Tag Manager
                  </span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="size-4 accent-current"
                  />
                </label>
                <label className="flex items-center justify-between gap-3">
                  <span>
                    <span className="font-bold text-foreground">تسويقية</span> — Meta، TikTok،
                    Snapchat
                  </span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="size-4 accent-current"
                  />
                </label>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  manage ? save({ analytics, marketing }) : save({ analytics: true, marketing: true })
                }
                className="rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
              >
                {manage ? "حفظ الاختيار" : "موافق"}
              </button>
              <button
                type="button"
                onClick={() => setManage((v) => !v)}
                className="rounded-xl border border-gold/50 px-5 py-2.5 text-sm font-bold text-gold transition hover:bg-gold/10"
              >
                إدارة
              </button>
              <button
                type="button"
                onClick={() => save({ analytics: false, marketing: false })}
                className="rounded-xl px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              >
                رفض الكل
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label="إغلاق ورفض"
            onClick={() => save({ analytics: false, marketing: false })}
            className="text-muted-foreground transition hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer helper: re-opens the banner so the visitor can change their mind. */
export function openCookieSettings() {
  window.dispatchEvent(new Event("alloaloa:open-cookie-settings"));
}
