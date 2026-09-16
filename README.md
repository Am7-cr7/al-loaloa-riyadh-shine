# Al-Loaloa: Riyadh Shine

Act as a Senior Principal Frontend Engineer. Build a complete, production-ready, zero-error React web application for "Al-Loaloa" (اللؤلؤة) - a mobile steam car wash and detailing service operating in Riyadh, Saudi Arabia.

Use the provided screenshot as a baseline design reference, but ensure the architecture follows the strict production specifications detailed below.

### 1. TECH STACK & CONFIGURATION
- **Framework:** React 18, Vite, TypeScript.
- **Styling:** Tailwind CSS, Shadcn UI components, Lucide Icons.
- **Routing:** `react-router-dom` v7 with routes: `/`, `/services`, `/gallery`, `/faq`, `/privacy-policy`.
- **Hosting:** Hostinger Apache SPA. Automatically generate a `.htaccess` file in `/public` with fallback rewrites to `index.html`.

### 2. BUSINESS DATA & SOCIAL LINKS (HARDCODE THESE)
- **Phone & WhatsApp Number:** `+966 53 264 0488` (Format WhatsApp links to `https://wa.me/966532640488`).
- **Snapchat:** `https://www.snapchat.com/add/lulwariyadh?share_id=qZyloaBMTbY&locale=ar-EG` (Username: lulwariyadh)
- **Facebook:** `https://www.facebook.com/share/19EJnmxxgJ/`
- **TikTok:** `https://www.tiktok.com/@lulwacarwash?_r=1&_t=ZS-99lDslwGiff`
- *Note: Place these contact details and social links strategically in the Header, Footer, and Floating Buttons.*

### 3. REAL ANALYTICS & PIXEL TRACKING (IMPLEMENT DIRECTLY)
Create a centralized tracking config and inject the exact following IDs into the application (using standard tracking scripts in document head and firing event clicks on CTAs):
- **Google Analytics 4 (GA4):** `@secret:GOOGLE_ANALYTICS_MEASUREMENT_ID `
- **Google Tag Manager (GTM):** `GTM-NKGNF2HL`
- **Meta Pixel:** `1117048000774799`
- **Snapchat Pixel:** `bf312e98-ef1f-4e9e-83f1-ae9dec782159`
- **TikTok Pixel:** `DAEVOJ3C77UES974LUKG`
- *Fire tracking events specifically when users click WhatsApp, Call, or Social Media links.*

### 4. COMPLETE UI & PAGES STRUCTURE
- **Color Theme:** Modern Luxury Dark Slate/Black (#0B0F17) with Gold/Yellow accents (#D4AF37) and dedicated WhatsApp Green (#25D366) for primary CTAs.
- **RTL & SEO:** Document HTML `dir="rtl"` and `lang="ar"`. Use 'Cairo' or 'Tajawal' fonts. Include `/public/robots.txt` and `/public/sitemap.xml`.
- **Hero Section:**
  - Headline: "نرجع لسيارتك لمعة الوكالة"
  - Sub-headline: "تلميع وغسيل عميق بالبخار في موقعك"
  - CTAs: Primary Green WhatsApp button ("تواصل عبر واتساب") & Outline Gold Phone button ("اتصل الآن").
  - Value Badges: "الرياض | خدمة متنقلة", "فريق محترف", "مواد معتمدة".
- **Interactive Features:** 
  - Functional Before/After Image Comparison Slider.
  - Services Grid with detailed package cards.
  - FAQ section built with Shadcn Accordion.
  - Persistent Floating Action Buttons (WhatsApp & Call) pinned at bottom.

### 5. CODE QUALITY & DEVELOPER EXPERIENCE
- Add detailed inline code comments explaining the tracking functions and component structure.
- Produce 100% clean TypeScript with ZERO lint errors, zero build errors, and properly resolved `@/` aliases. Ensure it is immediately ready for export.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f63b596-6871-4d10-859d-6606949a1ff6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
