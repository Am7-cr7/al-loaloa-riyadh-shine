import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as WhatsAppIcon, f as trackLead, o as cn } from "./content-0bCQN-eX.mjs";
import { n as SITE } from "./site-CU9ECXHX.mjs";
import { c as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaButtons-CFa1em26.js
var import_jsx_runtime = require_jsx_runtime();
function WhatsAppButton({ location, className, full, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: SITE.whatsapp,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: () => trackLead("whatsapp", location),
		className: cn("inline-flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-green)] transition hover:brightness-110 active:scale-[0.98]", full && "w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), label ?? "تواصل عبر واتساب"]
	});
}
function CallButton({ location, className, full, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: SITE.phoneHref,
		onClick: () => trackLead("call", location),
		className: cn("inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gold px-7 py-4 text-base font-bold text-gold transition hover:bg-gold hover:text-primary-foreground active:scale-[0.98]", full && "w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
			className: "size-5",
			"aria-hidden": true
		}), label ?? "اتصل الآن"]
	});
}
//#endregion
export { WhatsAppButton as n, CallButton as t };
