import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as MoveHorizontal } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BeforeAfter-BeCMTGmA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Before/After comparison slider.
* The "after" image sits on top and is clipped with inset() based on the
* handle position (percentage). Works with mouse, touch and keyboard.
*/
function BeforeAfter({ before, after, alt }) {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const move = (0, import_react.useCallback)((clientX) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const raw = (clientX - rect.left) / rect.width * 100;
		setPos(Math.min(100, Math.max(0, raw)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		dir: "ltr",
		className: "relative aspect-[4/3] w-full touch-none overflow-hidden rounded-2xl border border-gold/25 select-none",
		onMouseDown: (e) => {
			dragging.current = true;
			move(e.clientX);
		},
		onMouseMove: (e) => dragging.current && move(e.clientX),
		onMouseUp: () => dragging.current = false,
		onMouseLeave: () => dragging.current = false,
		onTouchStart: (e) => move(e.touches[0].clientX),
		onTouchMove: (e) => move(e.touches[0].clientX),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: before,
				alt: `${alt} — قبل`,
				loading: "lazy",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: after,
				alt: `${alt} — بعد`,
				loading: "lazy",
				className: "absolute inset-0 size-full object-cover",
				style: { clipPath: `inset(0 0 0 ${pos}%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 rounded-md bg-background/80 px-3 py-1 text-xs font-bold text-foreground",
				children: "قبل"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-md bg-gold px-3 py-1 text-xs font-bold text-primary-foreground",
				children: "بعد"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-y-0 w-0.5 bg-gold",
				style: { left: `${pos}%` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "slider",
					"aria-label": "مقارنة قبل وبعد",
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-valuenow": Math.round(pos),
					onKeyDown: (e) => {
						if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
						if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
					},
					className: "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-gold)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveHorizontal, {
						className: "size-5",
						"aria-hidden": true
					})
				})
			})
		]
	});
}
//#endregion
export { BeforeAfter as t };
