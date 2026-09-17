import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { trackCall } from "@/lib/tracking";
import { SocialLinks } from "./SocialLinks";
import { LegalDialog } from "./LegalDialog";
import { openCookieSettings } from "./CookieConsent";

/** Site footer with contact details, navigation and social links. */
export function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/15 bg-surface/40 pb-28 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold text-gradient-gold">{SITE.nameAr}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            غسيل وتلميع سيارات متنقل بالبخار في الرياض. نصل إليك أينما كنت بمواد معتمدة وفريق محترف.
          </p>
          <SocialLinks location="footer" className="mt-5" />
        </div>

        <div>
          <h3 className="mb-4 font-bold text-foreground">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy-policy" className="transition hover:text-gold">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              {/* Full privacy + terms notice required by the ad platforms */}
              <LegalDialog>
                <button type="button" className="transition hover:text-gold">
                  سياسة الخصوصية وشروط الاستخدام
                </button>
              </LegalDialog>
            </li>
            <li>
              <button
                type="button"
                onClick={openCookieSettings}
                className="transition hover:text-gold"
              >
                إعدادات الكوكيز
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-foreground">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" />
              <a
                href={SITE.phoneHref}
                onClick={() => trackCall("footer")}
                dir="ltr"
                className="transition hover:text-gold"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" /> الرياض — خدمة متنقلة لجميع الأحياء
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-gold" /> متاحون 24 ساعة / 7 أيام
            </li>
          </ul>
        </div>
      </div>

      <p className="border-t border-gold/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.nameAr} — جميع الحقوق محفوظة
      </p>
    </footer>
  );
}
