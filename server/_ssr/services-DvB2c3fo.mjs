import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as SERVICES } from "./content-0bCQN-eX.mjs";
import { o as Sparkles, y as Check } from "../_libs/lucide-react.mjs";
import { n as WhatsAppButton, t as CallButton } from "./CtaButtons-CFa1em26.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DvB2c3fo.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold text-gold",
						children: "الخدمات"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold",
						children: "باقاتنا بالتفصيل"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "كل الباقات تُنفَّذ في موقعك داخل الرياض بمعدات بخار احترافية."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `panel flex flex-col overflow-hidden rounded-2xl ${s.featured ? "ring-1 ring-gold/60" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.alt,
						width: 1024,
						height: 768,
						loading: "lazy",
						className: "h-56 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-7 text-gold" }), s.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground",
									children: "الأكثر طلباً"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-xl font-bold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-7 text-muted-foreground",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm",
								children: s.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-whatsapp" }),
										" ",
										f
									]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
									location: `service_${s.title}`,
									label: s.cta,
									full: true
								})
							})
						]
					})]
				}, s.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-12 rounded-3xl p-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold",
						children: "محتار في الباقة المناسبة؟"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "كلّمنا ونرشّح لك الأنسب حسب حالة سيارتك."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							location: "services_cta",
							full: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
							location: "services_cta",
							full: true
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
