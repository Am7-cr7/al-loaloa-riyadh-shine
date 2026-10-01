/**
 * Analytics & ad pixels — loaded only after cookie consent.
 *  - analytics consent → Google Tag Manager + GA4
 *  - marketing consent → Meta, TikTok, Snapchat pixels
 * `trackLead()` is called on every WhatsApp / call click and reports a
 * Lead/Contact conversion to every platform the visitor allowed.
 */
import { getConsent, onConsentChange } from "./consent";

export const GA4_ID = "__GA4_ID__";
export const GTM_ID = "GTM-NKGNF2HL";
export const META_PIXEL_ID = "1117048000774799";
export const TIKTOK_PIXEL_ID = "DAEVOJ3C77UES974LUKG";
export const SNAP_PIXEL_ID = "bf312e98-ef1f-4e9e-83f1-ae9dec782159";

type Fn = (...args: unknown[]) => void;
type W = Window & {
  dataLayer?: unknown[];
  gtag?: Fn;
  fbq?: Fn & { callMethod?: Fn; queue?: unknown[]; loaded?: boolean; version?: string; push?: Fn };
  _fbq?: unknown;
  snaptr?: Fn & { handleRequest?: Fn; queue?: unknown[] };
  ttq?: Record<string, unknown> & { track?: Fn; page?: Fn; load?: (id: string) => void };
  TiktokAnalyticsObject?: string;
};
const w = () => window as unknown as W;

function addScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  s.id = id;
  document.head.appendChild(s);
}

let analyticsOn = false;
let marketingOn = false;

function initAnalytics() {
  if (analyticsOn) return;
  analyticsOn = true;
  const win = w();
  win.dataLayer = win.dataLayer || [];
  win.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    win.dataLayer!.push(arguments);
  };
  win.gtag("js", new Date());
  win.gtag("config", GA4_ID);
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`, "ga4-script");
  win.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`, "gtm-script");
}

function initMarketing() {
  if (marketingOn) return;
  marketingOn = true;
  const win = w();

  // Meta Pixel (official stub)
  if (!win.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as NonNullable<W["fbq"]>;
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

  // Snapchat Pixel (official stub)
  if (!win.snaptr) {
    const snaptr = function (...args: unknown[]) {
      if (snaptr.handleRequest) snaptr.handleRequest(...args);
      else snaptr.queue!.push(args);
    } as NonNullable<W["snaptr"]>;
    snaptr.queue = [];
    win.snaptr = snaptr;
    addScript("https://sc-static.net/scevent.min.js", "snap-pixel");
  }
  win.snaptr("init", SNAP_PIXEL_ID, {});
  win.snaptr("track", "PAGE_VIEW");

  // TikTok Pixel (official setAndDefer stub)
  win.TiktokAnalyticsObject = "ttq";
  const ttq = (win.ttq = win.ttq || ({} as NonNullable<W["ttq"]>)) as Record<string, unknown> & {
    _i?: Record<string, unknown>;
    _t?: Record<string, number>;
    _o?: Record<string, unknown>;
  };
  const methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
  const q = ttq as unknown as unknown[] & Record<string, unknown>;
  if (!Array.isArray(ttq)) {
    // ttq must behave as an array-like queue
  }
  const queue: unknown[] = (ttq.__q as unknown[]) || [];
  ttq.__q = queue;
  ttq.push = (...a: unknown[]) => queue.push(...a);
  const setAndDefer = (t: Record<string, unknown>, e: string) => {
    t[e] = (...args: unknown[]) => queue.push([e, ...args]);
  };
  methods.forEach((m) => setAndDefer(ttq, m));
  ttq.load = (id: string) => {
    ttq._i = ttq._i || {};
    ttq._i[id] = [];
    ttq._t = ttq._t || {};
    ttq._t[id] = Date.now();
    addScript(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}&lib=ttq`, "tiktok-pixel");
  };
  void q;
  (ttq.load as (id: string) => void)(TIKTOK_PIXEL_ID);
  (ttq.page as Fn)();
}

function apply() {
  const c = getConsent();
  if (c?.analytics) initAnalytics();
  if (c?.marketing) initMarketing();
}

/** Call once on app mount. Loads whatever the visitor has already allowed. */
export function initTracking() {
  apply();
  onConsentChange(() => apply());
}

/** Lead/Contact conversion — fires on every WhatsApp / call click. */
export function trackLead(channel: "whatsapp" | "call" | "social", location: string) {
  const c = getConsent();
  const win = w();
  if (c?.analytics) {
    win.gtag?.("event", "generate_lead", { method: channel, location });
    win.dataLayer?.push({ event: "lead_click", channel, location });
  }
  if (c?.marketing) {
    win.fbq?.("track", "Lead", { content_name: location, channel });
    win.fbq?.("track", "Contact");
    (win.ttq?.track as Fn | undefined)?.("Contact", { content_name: location });
    win.snaptr?.("track", "SIGN_UP", { description: `${channel}:${location}` });
  }
}
