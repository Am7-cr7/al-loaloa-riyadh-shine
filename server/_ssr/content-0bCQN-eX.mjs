import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-0bCQN-eX.js
var import_jsx_runtime = require_jsx_runtime();
var CONSENT_NOTICE_VERSION = "2026-09-v1";
var STORAGE_KEY = "alloaloa_cookie_consent";
var listeners = /* @__PURE__ */ new Set();
/** Reads the stored decision, or null when the visitor hasn't chosen yet. */
function getConsent() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (parsed.noticeVersion !== "2026-09-v1") return null;
		return parsed;
	} catch {
		return null;
	}
}
/** Persists a decision and notifies every subscriber immediately. */
function setConsent(choice) {
	const state = {
		necessary: true,
		analytics: choice.analytics,
		marketing: choice.marketing,
		decidedAt: (/* @__PURE__ */ new Date()).toISOString(),
		noticeVersion: CONSENT_NOTICE_VERSION
	};
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	} catch {}
	listeners.forEach((fn) => fn(state));
	return state;
}
/** Clears the decision so the banner appears again (withdrawal path). */
function resetConsent() {
	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch {}
	listeners.forEach((fn) => fn(null));
}
function onConsentChange(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
/**
* Analytics & ad pixels — loaded only after cookie consent.
*  - analytics consent → Google Tag Manager + GA4
*  - marketing consent → Meta, TikTok, Snapchat pixels
* `trackLead()` is called on every WhatsApp / call click and reports a
* Lead/Contact conversion to every platform the visitor allowed.
*/
var GA4_ID = "G-FG73JGYH25";
var GTM_ID = "GTM-NKGNF2HL";
var META_PIXEL_ID = "1117048000774799";
var TIKTOK_PIXEL_ID = "DAVTNL3C77U27N8GVRG0";
var SNAP_PIXEL_ID = "bf312e98-ef1f-4e9e-83f1-ae9dec782159";
var w = () => window;
function addScript(src, id) {
	if (document.getElementById(id)) return;
	const s = document.createElement("script");
	s.async = true;
	s.src = src;
	s.id = id;
	document.head.appendChild(s);
}
var analyticsOn = false;
var marketingOn = false;
function initAnalytics() {
	if (analyticsOn) return;
	analyticsOn = true;
	const win = w();
	win.dataLayer = win.dataLayer || [];
	win.gtag = function gtag() {
		win.dataLayer.push(arguments);
	};
	win.gtag("js", /* @__PURE__ */ new Date());
	win.gtag("config", GA4_ID);
	addScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`, "ga4-script");
	win.dataLayer.push({
		"gtm.start": Date.now(),
		event: "gtm.js"
	});
	addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, "gtm-script");
}
function initMarketing() {
	if (marketingOn) return;
	marketingOn = true;
	const win = w();
	if (!win.fbq) {
		const fbq = function(...args) {
			if (fbq.callMethod) fbq.callMethod(...args);
			else fbq.queue.push(args);
		};
		fbq.push = fbq;
		fbq.loaded = true;
		fbq.version = "2.0";
		fbq.queue = [];
		win.fbq = fbq;
		win._fbq = fbq;
		addScript("https://connect.facebook.net/en_US/fbevents.js", "meta-pixel");
	}
	win.fbq("init", META_PIXEL_ID);
	win.fbq("track", "PageView");
	if (!win.snaptr) {
		const snaptr = function(...args) {
			if (snaptr.handleRequest) snaptr.handleRequest(...args);
			else snaptr.queue.push(args);
		};
		snaptr.queue = [];
		win.snaptr = snaptr;
		addScript("https://sc-static.net/scevent.min.js", "snap-pixel");
	}
	win.snaptr("init", SNAP_PIXEL_ID, {});
	win.snaptr("track", "PAGE_VIEW");
	win.TiktokAnalyticsObject = "ttq";
	const ttq = win.ttq || [];
	win.ttq = ttq;
	[
		"page",
		"track",
		"identify",
		"instances",
		"debug",
		"on",
		"off",
		"once",
		"ready",
		"alias",
		"group",
		"enableCookie",
		"disableCookie",
		"holdConsent",
		"revokeConsent",
		"grantConsent"
	].forEach((m) => {
		ttq[m] = (...args) => ttq.push([m, ...args]);
	});
	ttq._i = ttq._i || {};
	ttq._i[TIKTOK_PIXEL_ID] = [];
	ttq._t = ttq._t || {};
	ttq._t[TIKTOK_PIXEL_ID] = Date.now();
	addScript(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${TIKTOK_PIXEL_ID}&lib=ttq`, "tiktok-pixel");
	ttq["page"]();
}
function apply() {
	const c = getConsent();
	if (c?.analytics) initAnalytics();
	if (c?.marketing) initMarketing();
}
/** Call once on app mount. Loads whatever the visitor has already allowed. */
function initTracking() {
	apply();
	onConsentChange(() => apply());
}
/** Lead/Contact conversion — fires on every WhatsApp / call click. */
function trackLead(channel, location) {
	const c = getConsent();
	const win = w();
	if (c?.analytics) {
		win.gtag?.("event", "generate_lead", {
			method: channel,
			location
		});
		win.dataLayer?.push({
			event: "lead_click",
			channel,
			location
		});
	}
	if (c?.marketing) {
		win.fbq?.("track", "Lead", {
			content_name: location,
			channel
		});
		win.fbq?.("track", "Contact");
		(win.ttq?.track)?.("Contact", { content_name: location });
		win.snaptr?.("track", "SIGN_UP", { description: `${channel}:${location}` });
	}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Official WhatsApp glyph as a crisp inline SVG (inherits currentColor). */
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		focusable: "false",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.886-9.885 9.886m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" })
	});
}
var backseat_before_default = "/assets/backseat-before-BvsOFvlf.jpg";
var backseat_after_default = "/assets/backseat-after-DPWktzt8.jpg";
var sedan_before_default = "/assets/sedan-before-C12HxsdY.jpg";
var sedan_after_default = "/assets/sedan-after-BQ1P98GM.jpg";
var seat_after_default = "/assets/seat-after-pISZVsne.jpg";
var console_after_default = "/assets/console-after-D91gbHQK.jpg";
/** Static Arabic content: service packages, FAQ and gallery items. */
var SERVICES = [
	{
		title: "غسيل خارجي بالبخار",
		cta: "تواصل لمعرفة السعر",
		desc: "غسيل بالبخار موفر للماء مع تنظيف الجنوط والإطارات وتلميع الزجاج.",
		image: "/assets/pkg-exterior-DC8ptFJE.jpg",
		alt: "فني محترف بزي العمل ينظف هيكل سيارة فاخرة سوداء بجهاز البخار",
		features: [
			"بخار عالي الحرارة",
			"تنظيف الجنوط",
			"تلميع الزجاج",
			"تجفيف بمناشف مايكروفايبر"
		]
	},
	{
		title: "تنظيف داخلي عميق",
		cta: "احجز الآن",
		desc: "تنظيف المقاعد والسجاد والكنسول وإزالة البقع والروائح بالبخار.",
		image: "/assets/pkg-interior-DNx48Fou.jpg",
		alt: "فني تنظيف سيارات ينظف مقاعد وكنسول سيارة فاخرة بالبخار من الداخل",
		features: [
			"شفط شامل",
			"إزالة البقع",
			"تعقيم بالبخار",
			"معطر داخلي"
		],
		featured: true
	},
	{
		title: "تلميع وبوليش",
		cta: "تواصل لمعرفة السعر",
		desc: "إزالة الخدوش السطحية وإعادة اللمعان الأصلي لطلاء سيارتك.",
		image: "/assets/pkg-polish-XhICqg0B.jpg",
		alt: "فني تلميع يستخدم ماكينة بوليش على غطاء محرك سيارة فاخرة لامعة",
		features: [
			"تلميع 3 مراحل",
			"إزالة الخدوش الخفيفة",
			"حماية شمعية",
			"لمعة الوكالة"
		]
	},
	{
		title: "باقة الوكالة الشاملة",
		cta: "احجز الآن",
		desc: "داخلي وخارجي وتلميع كامل — سيارتك كأنها خرجت من المعرض.",
		image: "/assets/pkg-full-CgR3iZEt.jpg",
		alt: "فني يضع مادة حماية على مقعد جلد بيج في سيارة فاخرة",
		features: [
			"كل الخدمات السابقة",
			"تنظيف المحرك",
			"حماية الجلد",
			"خدمة في موقعك"
		]
	}
];
var FAQS = [
	{
		q: "هل الخدمة متنقلة فعلاً؟",
		a: "نعم، نصل إليك في أي حي داخل الرياض — منزلك أو مقر عملك — بمعداتنا الخاصة دون الحاجة لأي شيء منك."
	},
	{
		q: "كم تستغرق الخدمة؟",
		a: "الغسيل الخارجي من 30 إلى 45 دقيقة، والتنظيف الداخلي العميق من ساعة إلى ساعتين حسب حالة السيارة."
	},
	{
		q: "هل البخار آمن على الفرش والجلد؟",
		a: "نستخدم أجهزة بخار بحرارة مضبوطة ومواد معتمدة آمنة على جميع أنواع الأقمشة والجلود."
	},
	{
		q: "هل تحتاجون ماء أو كهرباء من الموقع؟",
		a: "لا، نأتي بكل ما نحتاجه. الخدمة موفرة للماء وتستهلك كمية قليلة جداً مقارنة بالغسيل التقليدي."
	},
	{
		q: "ما هي طرق الدفع؟",
		a: "نقبل الدفع نقداً، بطاقة مدى، والتحويل البنكي بعد انتهاء الخدمة مباشرة."
	},
	{
		q: "هل تعملون طوال الأسبوع؟",
		a: "نعم، خدمتنا متاحة 24 ساعة / 7 أيام. تواصل معنا عبر واتساب لحجز الموعد المناسب لك."
	}
];
var GALLERY = [{
	title: "المقعد الخلفي",
	before: backseat_before_default,
	after: backseat_after_default
}, {
	title: "مقاعد أمامية جلد",
	before: sedan_before_default,
	after: sedan_after_default
}];
var SHOWCASE = [{
	src: seat_after_default,
	title: "إزالة بقع عميقة من الفرش"
}, {
	src: console_after_default,
	title: "تنظيف الكنسول الأوسط"
}];
//#endregion
export { WhatsAppIcon as a, initTracking as c, setConsent as d, trackLead as f, SHOWCASE as i, onConsentChange as l, GALLERY as n, cn as o, SERVICES as r, getConsent as s, FAQS as t, resetConsent as u };
