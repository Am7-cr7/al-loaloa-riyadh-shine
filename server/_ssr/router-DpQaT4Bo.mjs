import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as WhatsAppIcon, c as initTracking, d as setConsent, f as trackLead, l as onConsentChange, o as cn, s as getConsent, t as FAQS, u as resetConsent } from "./content-0bCQN-eX.mjs";
import { n as SITE, t as NAV } from "./site-CU9ECXHX.mjs";
import { _ as Clock, c as Phone, d as Moon, f as Menu, g as Cookie, h as Facebook, i as Sun, l as Music2, m as Ghost, p as MapPin, t as X } from "../_libs/lucide-react.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DpQaT4Bo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DcGTD_ZD.css";
/** Social icon row — click tracking removed (see placeholders). */
function SocialLinks({ location, className }) {
	const items = [
		{
			key: "snapchat",
			label: "سناب شات",
			href: SITE.social.snapchat,
			Icon: Ghost
		},
		{
			key: "tiktok",
			label: "تيك توك",
			href: SITE.social.tiktok,
			Icon: Music2
		},
		{
			key: "facebook",
			label: "فيسبوك",
			href: SITE.social.facebook,
			Icon: Facebook
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center gap-3", className),
		children: items.map(({ key, label, href, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": label,
			onClick: () => trackLead("social", `${location}_${label}`),
			className: "grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5",
				"aria-hidden": true
			})
		}, key))
	});
}
var KEY = "alloaloa_theme";
function getStoredTheme() {
	if (typeof window === "undefined") return "dark";
	try {
		const v = window.localStorage.getItem(KEY);
		if (v === "light" || v === "dark") return v;
	} catch {}
	return "dark";
}
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.classList.toggle("light", theme === "light");
	root.style.colorScheme = theme;
	try {
		window.localStorage.setItem(KEY, theme);
	} catch {}
}
/** Inline script that sets the theme class before paint (no flash). */
var THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${KEY}');if(t!=='light'){t='dark';}document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;
/** Sleek sun/moon switch for the header. Choice is remembered per browser. */
function ThemeToggle({ className }) {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => setTheme(getStoredTheme()), []);
	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggle,
		role: "switch",
		"aria-checked": theme === "dark",
		"aria-label": theme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن",
		title: theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن",
		className: cn("relative inline-flex h-9 w-16 items-center rounded-full border border-gold/40 bg-secondary transition-colors", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute grid size-7 place-items-center rounded-full bg-gold text-primary-foreground shadow-sm transition-all duration-300", theme === "dark" ? "start-1" : "start-8"),
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
				className: "pointer-events-none absolute end-2 size-4 text-muted-foreground",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
				className: "pointer-events-none absolute start-2 size-4 text-muted-foreground",
				"aria-hidden": true
			})
		]
	});
}
/** Sticky site header: menu, quick contact icons and the brand mark. */
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/15 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "القائمة",
						onClick: () => setOpen((v) => !v),
						className: "grid size-10 place-items-center rounded-lg text-foreground transition hover:text-gold md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.whatsapp,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "واتساب",
						onClick: () => trackLead("whatsapp", "header"),
						className: "grid size-10 place-items-center rounded-full text-whatsapp transition hover:brightness-125",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.phoneHref,
						"aria-label": "اتصال",
						onClick: () => trackLead("call", "header"),
						className: "grid size-10 place-items-center rounded-full text-gold transition hover:brightness-125",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 ps-4 text-sm font-semibold md:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							activeProps: { className: "text-gold" },
							inactiveProps: { className: "text-muted-foreground" },
							activeOptions: { exact: item.to === "/" },
							className: "transition hover:text-gold",
							children: item.label
						}, item.to))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-2xl font-extrabold text-gradient-gold",
					children: SITE.nameAr
				})]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-gold/15 bg-background px-4 py-4 md:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "القائمة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "إغلاق",
						onClick: () => setOpen(false),
						className: "text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-3 text-base font-semibold",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						activeProps: { className: "text-gold" },
						className: "py-1",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {
					location: "header_menu",
					className: "mt-5"
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
/**
* Privacy Policy & Terms of Service modal.
* Wording covers what Meta, TikTok, Snapchat and Google Ads require an
* advertiser landing page to disclose: what data is collected, which
* platforms receive it, the purposes, and how to withdraw consent.
*/
function LegalDialog({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] max-w-2xl overflow-y-auto text-right",
			dir: "rtl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-xl font-extrabold",
				children: "سياسة الخصوصية وشروط الاستخدام"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
				"آخر تحديث: سبتمبر 2026 — ",
				SITE.nameAr,
				"، الرياض، المملكة العربية السعودية."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-sm leading-7 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "١. البيانات التي نجمعها"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "عند تواصلك معنا عبر واتساب أو الهاتف نحصل على اسمك، رقم جوالك، موقع تنفيذ الخدمة وتفاصيل طلبك. كما نجمع بيانات استخدام غير مباشرة عند تصفح الموقع مثل الصفحات التي زرتها، نوع الجهاز، والمصدر الإعلاني الذي وصلت منه." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٢. ملفات تعريف الارتباط وأدوات القياس"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"نستخدم — بعد موافقتك فقط — أدوات قياس وإعلانات من أطراف ثالثة:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Google Analytics 4 و Google Tag Manager"
						}),
						" ",
						"للتحليلات، و",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Meta (Facebook / Instagram) Pixel"
						}),
						"،",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "TikTok Pixel"
						}),
						"، و",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "Snapchat Pixel"
						}),
						" لقياس أداء الحملات الإعلانية وإعادة الاستهداف. تُرسل لهذه المنصات بيانات فنية مثل معرّف الكوكيز، عنوان IP، نوع المتصفح والصفحات التي زرتها. لا نرسل اسمك أو رقم جوالك إلى أي منصة إعلانية."
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٣. أساس المعالجة وموافقتك"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "لا يتم تحميل أي أداة إعلانية أو تحليلية قبل ضغطك على «موافق» في شريط الكوكيز. يمكنك تغيير اختيارك أو سحب موافقتك في أي وقت من رابط «إعدادات الكوكيز» أسفل الصفحة، ويسري التغيير فوراً. رفض الكوكيز لا يمنعك من استخدام الموقع أو حجز الخدمة." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٤. مشاركة البيانات والاحتفاظ بها"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "لا نبيع بياناتك الشخصية. تُشارك البيانات فقط مع مزوّدي أدوات القياس المذكورين أعلاه ووفق سياساتهم، وتُحفظ بيانات التواصل لدينا للمدة اللازمة لتقديم الخدمة ومتابعة الضمان." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٥. حقوقك"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"يحق لك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها، وسحب موافقتك على التتبع. راسلنا على واتساب ",
						SITE.phoneDisplay,
						" وسنستجيب خلال ٣٠ يوماً."
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٦. شروط الاستخدام"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"الخدمة متاحة داخل مدينة الرياض فقط. الأسعار تُحدد بعد معاينة حالة السيارة والاتفاق عبر واتساب أو الهاتف، وقد تختلف حسب حجم السيارة ونطاق العمل. يلتزم فريقنا بتنفيذ الخدمة بمواد معتمدة وآمنة؛ وفي حال عدم رضاك عن النتيجة تواصل معنا خلال ٢٤ ساعة لإعادة المعالجة. المحتوى والصور المعروضة في هذا الموقع مملوكة لـ",
						SITE.nameAr,
						" ولا يجوز استخدامها دون إذن."
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-1 font-bold text-foreground",
						children: "٧. التواصل"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						SITE.nameAr,
						" — الرياض، المملكة العربية السعودية. هاتف وواتساب:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							dir: "ltr",
							children: SITE.phoneDisplay
						})
					] })] })
				]
			})]
		})]
	});
}
/**
* Cookie consent banner.
*
* Advertising and analytics tools stay blocked until the visitor accepts, which
* is what Meta, TikTok, Snapchat and Google Ads expect from a landing page.
* "إدارة" opens per-category switches; the choice is stored with the notice
* version and can be withdrawn later from the footer.
*/
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [manage, setManage] = (0, import_react.useState)(false);
	const [analytics, setAnalytics] = (0, import_react.useState)(true);
	const [marketing, setMarketing] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setVisible(getConsent() === null);
		return onConsentChange((c) => {
			setVisible(c === null);
			if (c === null) setManage(false);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const open = () => {
			resetConsent();
			setManage(true);
		};
		window.addEventListener("alloaloa:open-cookie-settings", open);
		return () => window.removeEventListener("alloaloa:open-cookie-settings", open);
	}, []);
	if (!visible) return null;
	const save = (choice) => {
		setConsent(choice);
		setVisible(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-label": "إعدادات ملفات تعريف الارتباط",
		className: "fixed inset-x-0 bottom-20 z-[60] px-3 md:bottom-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel mx-auto max-w-3xl rounded-2xl p-5 shadow-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, {
						className: "mt-1 size-5 shrink-0 text-gold",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-7 text-muted-foreground",
								children: [
									"نستخدم ملفات تعريف الارتباط لتحسين تجربتك وقياس أداء حملاتنا الإعلانية عبر Google و Meta و TikTok و Snapchat. لن يتم تشغيل أي أداة تتبّع قبل موافقتك.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "font-bold text-gold underline underline-offset-4",
										children: "اعرف المزيد"
									}) })
								]
							}),
							manage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3 rounded-xl border border-border p-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between gap-3 opacity-70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "ضرورية"
										}), " — لازمة لعمل الموقع"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: true,
											disabled: true,
											className: "size-4 accent-current"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "تحليلية"
										}), " — Google Analytics / Tag Manager"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: analytics,
											onChange: (e) => setAnalytics(e.target.checked),
											className: "size-4 accent-current"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: "تسويقية"
										}), " — Meta، TikTok، Snapchat"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: marketing,
											onChange: (e) => setMarketing(e.target.checked),
											className: "size-4 accent-current"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => manage ? save({
											analytics,
											marketing
										}) : save({
											analytics: true,
											marketing: true
										}),
										className: "rounded-xl bg-gold px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110",
										children: manage ? "حفظ الاختيار" : "موافق"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setManage((v) => !v),
										className: "rounded-xl border border-gold/50 px-5 py-2.5 text-sm font-bold text-gold transition hover:bg-gold/10",
										children: "إدارة"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => save({
											analytics: false,
											marketing: false
										}),
										className: "rounded-xl px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground",
										children: "رفض الكل"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "إغلاق ورفض",
						onClick: () => save({
							analytics: false,
							marketing: false
						}),
						className: "text-muted-foreground transition hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			})
		})
	});
}
/** Footer helper: re-opens the banner so the visitor can change their mind. */
function openCookieSettings() {
	window.dispatchEvent(new Event("alloaloa:open-cookie-settings"));
}
/** Site footer with contact details, navigation and social links. */
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 border-t border-gold/15 bg-surface/40 pb-28 md:pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-extrabold text-gradient-gold",
						children: SITE.nameAr
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-7 text-muted-foreground",
						children: "غسيل وتلميع سيارات متنقل بالبخار في الرياض. نصل إليك أينما كنت بمواد معتمدة وفريق محترف."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {
						location: "footer",
						className: "mt-5"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-bold text-foreground",
					children: "روابط سريعة"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "transition hover:text-gold",
							children: item.label
						}) }, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy-policy",
							className: "transition hover:text-gold",
							children: "سياسة الخصوصية"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalDialog, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "transition hover:text-gold",
							children: "سياسة الخصوصية وشروط الاستخدام"
						}) }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: openCookieSettings,
							className: "transition hover:text-gold",
							children: "إعدادات الكوكيز"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-bold text-foreground",
					children: "تواصل معنا"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.phoneHref,
								onClick: () => trackLead("call", "footer"),
								dir: "ltr",
								className: "transition hover:text-gold",
								children: SITE.phoneDisplay
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-gold" }), " الرياض — خدمة متنقلة لجميع الأحياء"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-gold" }), " متاحون 24 ساعة / 7 أيام"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-gold/10 py-5 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				SITE.nameAr,
				" — جميع الحقوق محفوظة"
			]
		})]
	});
}
/** Persistent WhatsApp / Call actions pinned to the bottom of every page. */
function FloatingButtons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-gold/20 bg-background/90 p-3 backdrop-blur md:inset-x-auto md:start-5 md:bottom-6 md:flex-col md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: SITE.whatsapp,
			target: "_blank",
			rel: "noopener noreferrer",
			onClick: () => trackLead("whatsapp", "floating"),
			"aria-label": "تواصل عبر واتساب",
			className: "flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 font-bold text-whatsapp-foreground shadow-[var(--shadow-green)] transition hover:brightness-110 md:size-14 md:rounded-full md:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "md:hidden",
				children: "واتساب"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: SITE.phoneHref,
			onClick: () => trackLead("call", "floating"),
			"aria-label": "اتصل الآن",
			className: "flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-gold py-3 font-bold text-gold transition hover:bg-gold hover:text-primary-foreground md:size-14 md:rounded-full md:border-0 md:bg-gold md:text-primary-foreground md:shadow-[var(--shadow-gold)] md:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className: "size-6",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "md:hidden",
				children: "اتصال"
			})]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gradient-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "الصفحة غير موجودة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "الرابط الذي فتحته غير متاح أو تم نقله."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-bold text-primary-foreground",
						children: "العودة للرئيسية"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold text-foreground",
					children: "تعذّر تحميل الصفحة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "حدث خطأ غير متوقع. يمكنك المحاولة مرة أخرى."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-gold px-4 py-2 text-sm font-bold text-primary-foreground",
						children: "إعادة المحاولة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground",
						children: "الرئيسية"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "اللمسة الذهبية"
			},
			{
				name: "theme-color",
				content: "#0B0F17"
			},
			{
				property: "og:site_name",
				content: "اللمسة الذهبية"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "ar_SA"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;700;900&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		],
		scripts: [
			{ children: THEME_INIT_SCRIPT },
			{ children: `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('DAVTNL3C77U27N8GVRG0');
  ttq.page();
}(window, document, 'ttq');` },
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": ["LocalBusiness", "AutoWash"],
					"@id": "https://alloaloariyadh.com/#business",
					url: "https://alloaloariyadh.com/",
					name: "مغسلة اللمسة الذهبية",
					alternateName: "Al-Loaloa Mobile Car Wash",
					description: "غسيل وتلميع سيارات بالبخار متنقل في الرياض — تنظيف داخلي عميق، بوليش، وحماية الجلد في موقعك على مدار الساعة.",
					telephone: "+966554945482",
					priceRange: "$$",
					currenciesAccepted: "SAR",
					paymentAccepted: "نقداً، مدى، تحويل بنكي",
					areaServed: {
						"@type": "City",
						name: "الرياض"
					},
					address: {
						"@type": "PostalAddress",
						addressLocality: "الرياض",
						addressRegion: "منطقة الرياض",
						addressCountry: "SA"
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: 24.7136,
						longitude: 46.6753
					},
					openingHoursSpecification: [{
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday"
						],
						opens: "00:00",
						closes: "23:59"
					}],
					sameAs: [
						"https://www.snapchat.com/add/lulwariyadh",
						"https://www.facebook.com/share/19EJnmxxgJ/",
						"https://www.tiktok.com/@lulwacarwash"
					]
				})
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	(0, import_react.useEffect)(() => initTracking(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingButtons, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Ca4n8v_c.mjs");
var Route$4 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({
		meta: [
			{ title: "غسيل وتلميع سيارات بالبخار متنقل بالرياض | مغسلة اللمسة الذهبية" },
			{
				name: "description",
				content: "مغسلة اللمسة الذهبية: غسيل وتلميع سيارات بالبخار يصلك في موقعك بالرياض — تنظيف داخلي عميق، بوليش، وحماية الجلد على يد فريق محترف. متاحون 24 ساعة، احجز عبر واتساب الآن."
			},
			{
				name: "keywords",
				content: "غسيل سيارات بالبخار الرياض, مغسلة متنقلة الرياض, تلميع سيارات الرياض, تنظيف داخلي للسيارة, بوليش سيارات, حماية جلد السيارة, غسيل سيارات في الموقع, مغسلة اللمسة الذهبية"
			},
			{
				property: "og:title",
				content: "اللمسة الذهبية | غسيل وتلميع سيارات بالبخار متنقل بالرياض"
			},
			{
				property: "og:description",
				content: "خدمة عناية فاخرة بسيارتك عند باب بيتك في الرياض - نرجع لسيارتك لمعة الوكالة."
			},
			{
				property: "og:url",
				content: "https://alloaloariyadh.com/"
			},
			{
				property: "og:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			},
			{
				name: "twitter:url",
				content: "https://alloaloariyadh.com/"
			},
			{
				name: "twitter:title",
				content: "اللمسة الذهبية | غسيل وتلميع سيارات بالبخار متنقل بالرياض"
			},
			{
				name: "twitter:description",
				content: "خدمة عناية فاخرة بسيارتك عند باب بيتك في الرياض - نرجع لسيارتك لمعة الوكالة."
			},
			{
				name: "twitter:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://alloaloariyadh.com/"
		}]
	})
});
var $$splitComponentImporter$3 = () => import("./faq-DH-PN3Fl.mjs");
var Route$3 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "الأسئلة الشائعة | اللمسة الذهبية لغسيل السيارات بالبخار" },
			{
				name: "description",
				content: "إجابات عن الخدمة المتنقلة، مدة التنفيذ، أمان البخار على الفرش والجلد، وطرق الدفع في الرياض."
			},
			{
				property: "og:title",
				content: "الأسئلة الشائعة | اللمسة الذهبية"
			},
			{
				property: "og:description",
				content: "كل ما تحتاج معرفته عن خدمة الغسيل بالبخار المتنقلة في الرياض."
			},
			{
				property: "og:url",
				content: "https://alloaloariyadh.com/faq"
			},
			{
				name: "twitter:url",
				content: "https://alloaloariyadh.com/faq"
			},
			{
				property: "og:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			},
			{
				name: "twitter:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://alloaloariyadh.com/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./gallery-KGbwy8af.mjs");
var Route$2 = createFileRoute("/gallery")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "معرض الأعمال قبل وبعد | اللمسة الذهبية الرياض" },
			{
				name: "description",
				content: "شاهد نتائج التنظيف العميق بالبخار للمقاعد والفرش والكنسول — صور حقيقية قبل وبعد من عملائنا في الرياض."
			},
			{
				property: "og:title",
				content: "معرض قبل وبعد | اللمسة الذهبية"
			},
			{
				property: "og:description",
				content: "نتائج حقيقية لتنظيف السيارات بالبخار في الرياض."
			},
			{
				property: "og:url",
				content: "https://alloaloariyadh.com/gallery"
			},
			{
				name: "twitter:url",
				content: "https://alloaloariyadh.com/gallery"
			},
			{
				property: "og:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			},
			{
				name: "twitter:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://alloaloariyadh.com/gallery"
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./privacy-policy-N3McFzhH.mjs");
var Route$1 = createFileRoute("/privacy-policy")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "سياسة الخصوصية | اللمسة الذهبية" },
			{
				name: "description",
				content: "سياسة الخصوصية الخاصة بموقع اللمسة الذهبية لغسيل وتلميع السيارات المتنقل في الرياض وطريقة استخدام بيانات الزوار."
			},
			{
				property: "og:title",
				content: "سياسة الخصوصية | اللمسة الذهبية"
			},
			{
				property: "og:description",
				content: "كيف نتعامل مع بياناتك عند استخدام موقع اللمسة الذهبية."
			},
			{
				property: "og:url",
				content: "https://alloaloariyadh.com/privacy-policy"
			},
			{
				name: "twitter:url",
				content: "https://alloaloariyadh.com/privacy-policy"
			},
			{
				property: "og:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			},
			{
				name: "twitter:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://alloaloariyadh.com/privacy-policy"
		}]
	})
});
var $$splitComponentImporter = () => import("./services-DvB2c3fo.mjs");
var Route = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "خدمات وباقات الغسيل والتلميع | اللمسة الذهبية الرياض" },
			{
				name: "description",
				content: "باقات غسيل خارجي بالبخار، تنظيف داخلي عميق، تلميع وبوليش، وباقة الوكالة الشاملة — خدمة متنقلة في الرياض."
			},
			{
				property: "og:title",
				content: "خدمات وباقات اللمسة الذهبية"
			},
			{
				property: "og:description",
				content: "باقات عناية بالسيارات بالبخار تصلك في موقعك بالرياض."
			},
			{
				property: "og:url",
				content: "https://alloaloariyadh.com/services"
			},
			{
				name: "twitter:url",
				content: "https://alloaloariyadh.com/services"
			},
			{
				property: "og:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			},
			{
				name: "twitter:image",
				content: "https://alloaloariyadh.com/og-image.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://alloaloariyadh.com/services"
		}]
	})
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	FaqRoute: Route$3.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$5
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$5
	}),
	PrivacyPolicyRoute: Route$1.update({
		id: "/privacy-policy",
		path: "/privacy-policy",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
