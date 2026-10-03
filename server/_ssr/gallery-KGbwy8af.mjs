import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as SHOWCASE, n as GALLERY } from "./content-0bCQN-eX.mjs";
import { n as WhatsAppButton, t as CallButton } from "./CtaButtons-CFa1em26.mjs";
import { t as BeforeAfter } from "./BeforeAfter-BeCMTGmA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-KGbwy8af.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold text-gold",
						children: "معرض الأعمال"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold",
						children: "قبل وبعد"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "صور حقيقية من أعمالنا — اسحب الفاصل لمشاهدة الفرق."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: GALLERY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
					before: g.before,
					after: g.after,
					alt: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm font-semibold text-muted-foreground",
					children: g.title
				})] }, g.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-8 md:grid-cols-2",
				children: SHOWCASE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-2xl border border-gold/25",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.src,
						alt: s.title,
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "bg-surface/60 p-3 text-center text-sm text-muted-foreground",
						children: s.title
					})]
				}, s.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-12 rounded-3xl p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: "نبي سيارتك تكون التالية"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
						location: "gallery_cta",
						full: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
						location: "gallery_cta",
						full: true
					})]
				})]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
