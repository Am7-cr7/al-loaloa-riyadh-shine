/**
 * Central business data for Al-Loaloa (اللمسة الذهبية).
 * Every phone / WhatsApp / social reference in the app reads from here,
 * so contact details only ever need to change in one place.
 */

export const SITE = {
  nameAr: "اللمسة الذهبية",
  nameEn: "Al-Loaloa",
  city: "الرياض",
  /** Human readable phone number (displayed) */
  phoneDisplay: "+966 55 494 5482",
  /** tel: href */
  phoneHref: "tel:+966554945482",
  /** WhatsApp deep link with a pre-filled Arabic message */
  whatsapp:
    "https://wa.me/966554945482?text=" +
    encodeURIComponent("السلام عليكم، أرغب بحجز خدمة غسيل وتلميع بالبخار 🚗"),
  whatsappPlain: "https://wa.me/966554945482",
  social: {
    snapchat: "https://www.snapchat.com/add/lulwariyadh?share_id=qZyloaBMTbY&locale=ar-EG",
    facebook: "https://www.facebook.com/share/19EJnmxxgJ/",
    tiktok: "https://www.tiktok.com/@lulwacarwash?_r=1&_t=ZS-99lDslwGiff",
  },
} as const;

/** Primary navigation used by both the header and the footer. */
export const NAV = [
  { to: "/", label: "الرئيسية" },
  { to: "/services", label: "الخدمات" },
  { to: "/gallery", label: "قبل وبعد" },
  { to: "/faq", label: "الأسئلة الشائعة" },
] as const;
