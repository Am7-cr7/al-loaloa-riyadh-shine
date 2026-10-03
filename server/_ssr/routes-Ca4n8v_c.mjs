import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as WhatsAppIcon, f as trackLead, n as GALLERY, r as SERVICES, t as FAQS } from "./content-0bCQN-eX.mjs";
import { _ as Clock, a as Star, n as Users, o as Sparkles, r as Truck, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as WhatsAppButton, t as CallButton } from "./CtaButtons-CFa1em26.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-BcUZYMJC.mjs";
import { t as BeforeAfter } from "./BeforeAfter-BeCMTGmA.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ca4n8v_c.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-BSPPsB3v.jpg";
var CATEGORIES = [
	{
		id: "sedan",
		badge: "الأكثر طلباً",
		image: "/assets/car-sedan-PO93JbLO.jpg",
		imageAlt: "سيارة سيدان سوداء بإضاءة ذهبية",
		title: "سيارات السيدان",
		models: "كامري | إلنترا | أكورد | كورولا",
		desc: "غسيل وتلميع بخار متنقل بالرياض. عناية فائقة للهيكل الخارجي والمقصورة.",
		btnText: "تواصل للسعر",
		href: "https://wa.me/966554945482?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة السيدان"
	},
	{
		id: "crossover",
		badge: "الأسرع طلباً",
		image: "/assets/car-crossover-o-xku2_u.jpg",
		imageAlt: "سيارة كروس أوفر سوداء بإضاءة ذهبية",
		title: "الكروس أوفر",
		models: "RAV4 | توسان | فورد تيريتوري | كريتا",
		desc: "خدمة متكاملة لسيارات الوسط. تنظيف عميق للمقاعد الجلدية وتلميع الواجهة.",
		btnText: "تواصل للسعر",
		href: "https://wa.me/966554945482?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة الكروس أوفر"
	},
	{
		id: "suv",
		badge: "طلب عالي",
		image: "/assets/car-suv-CjAWL-ue.jpg",
		imageAlt: "سيارة جيب عائلي سوداء بإضاءة ذهبية",
		title: "الجيب العالي / العائلي",
		models: "لاند كروزر | باترول | يوكن | تاهو",
		desc: "رعاية فاخرة للمركبات العائلية. تنظيف شامل للصفوف الثلاثة وتلميع الهيكل الضخم.",
		btnText: "تواصل للسعر",
		href: "https://wa.me/966554945482?text=السلام عليكم، حاب استفسر عن أسعار الغسيل لفئة الجيب العائلي"
	}
];
function CarCategories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-black py-16",
		"aria-labelledby": "car-categories-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold text-[#D4AF37]",
					children: "فئات السيارات"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "car-categories-title",
					className: "mt-2 text-3xl font-extrabold text-white md:text-4xl",
					children: "اختر نوع سيارتك لتحديد الباقة"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#111111] shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-0 right-0 z-10 rounded-bl-lg bg-[#D4AF37] px-3 py-1 text-sm font-bold text-black",
							children: c.badge
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.image,
							alt: c.imageAlt,
							width: 1024,
							height: 768,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-white",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-gray-400",
									children: c.models
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-6 text-gray-300",
									children: c.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.href,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => trackLead("whatsapp", `car_category_${c.id}`),
									className: "flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-bold text-white transition-colors hover:bg-[#1DA851]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5" }), c.btnText]
								})
							]
						})
					]
				}, c.id))
			})]
		})
	});
}
var BADGES = [
	{
		icon: Truck,
		label: "الرياض | خدمة متنقلة"
	},
	{
		icon: Users,
		label: "فريق محترف"
	},
	{
		icon: ShieldCheck,
		label: "مواد معتمدة"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "سيارة فاخرة بعد التلميع بالبخار",
					width: 1600,
					height: 1008,
					className: "absolute inset-0 -z-10 size-full object-cover opacity-45"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4 py-20 text-center md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "panel inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), " خدمة متاحة 24 ساعة / 7 أيام"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-8 text-4xl leading-tight font-extrabold md:text-6xl",
							children: ["نرجع لسيارتك ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "لمعة الوكالة"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xl font-bold text-gold-soft md:text-2xl",
							children: "تلميع وغسيل عميق بالبخار في موقعك"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground",
							children: "عناية فاخرة للسيارات عند باب بيتك في الرياض — أينما كنت."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-9 flex max-w-md flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
								location: "hero",
								full: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
								location: "hero",
								full: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground",
							children: BADGES.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-gold" }),
									" ",
									label
								]
							}, label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarCategories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "خدماتنا",
					title: "باقات تناسب كل سيارة",
					sub: "اختر الباقة المناسبة وسنصل إليك في الوقت الذي يناسبك."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `panel overflow-hidden rounded-2xl transition hover:-translate-y-1 ${s.featured ? "ring-1 ring-gold/60" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.alt,
							width: 1024,
							height: 768,
							loading: "lazy",
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-7 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-6 text-muted-foreground",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
									location: `home_service_${s.title}`,
									label: s.cta,
									full: true,
									className: "mt-5 px-4 py-3 text-sm"
								})
							]
						})]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "inline-flex rounded-xl border border-gold/50 px-6 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-primary-foreground",
						children: "تفاصيل كل الباقات"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "النتائج",
				title: "قبل وبعد",
				sub: "اسحب الفاصل لترى الفرق الحقيقي بعد التنظيف بالبخار."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: GALLERY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
					before: g.before,
					after: g.after,
					alt: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm font-semibold text-muted-foreground",
					children: g.title
				})] }, g.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "لماذا اللمسة الذهبية؟",
				title: "جودة تستحق سيارتك"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					{
						icon: Truck,
						t: "نصل إليك",
						d: "خدمة متنقلة تغطي جميع أحياء الرياض دون أن تغادر مكانك."
					},
					{
						icon: Star,
						t: "لمعة الوكالة",
						d: "تلميع احترافي بمواد معتمدة يعيد بريق الطلاء الأصلي."
					},
					{
						icon: ShieldCheck,
						t: "آمن وموفر للماء",
						d: "تقنية البخار تنظف بعمق وتعقّم مع استهلاك أقل للماء."
					}
				].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: d
						})
					]
				}, t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "أسئلة شائعة",
				title: "كل ما تحتاج معرفته"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: FAQS.slice(0, 4).map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-right",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-4xl px-4 pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-3xl p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-extrabold md:text-3xl",
						children: ["جاهزين نوصل لك ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "اليوم"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "احجز موعدك خلال ثوانٍ عبر واتساب أو اتصل بنا مباشرة."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							location: "footer_cta",
							full: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallButton, {
							location: "footer_cta",
							full: true
						})]
					})
				]
			})
		})
	] });
}
/** Small shared section heading. */
function SectionTitle({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-bold tracking-wide text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-extrabold md:text-4xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: sub
			})
		]
	});
}
//#endregion
export { SectionTitle, Home as component };
