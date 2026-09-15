/**
 * Centralised analytics / pixel configuration and event helpers.
 *
 * All vendor scripts are injected once on the client (see `initTracking`)
 * and every CTA in the app funnels its click through `trackEvent`, which
 * fans the event out to GA4, GTM dataLayer, Meta, Snapchat and TikTok.
 */

export const TRACKING_IDS = {
  /** GA4 — falls back to the GTM-loaded tag when no env value is provided. */
  ga4: import.meta.env["VITE_GA4_MEASUREMENT_ID"] as string | undefined,
  gtm: "GTM-NKGNF2HL",
  metaPixel: "1117048000774799",
  snapPixel: "bf312e98-ef1f-4e9e-83f1-ae9dec782159",
  tiktokPixel: "DAEVOJ3C77UES974LUKG",
} as const;

type AnyFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: AnyFn;
    fbq?: AnyFn & { callMethod?: AnyFn; queue?: unknown[] };
    snaptr?: AnyFn & { handleRequest?: AnyFn; queue?: unknown[] };
    ttq?: Record<string, unknown>;
    __alLoaloaTrackingReady?: boolean;
  }
}

/** Utility: append an async <script src> to <head> once. */
function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  s.id = id;
  document.head.appendChild(s);
}

/** Injects every vendor snippet. Safe to call multiple times. */
export function initTracking() {
  if (typeof window === "undefined" || window.__alLoaloaTrackingReady) return;
  window.__alLoaloaTrackingReady = true;

  /* ---------------- Google Tag Manager + GA4 ---------------- */
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());

  loadScript(`https://www.googletagmanager.com/gtm.js?id=${TRACKING_IDS.gtm}`, "gtm-script");
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  if (TRACKING_IDS.ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.ga4}`, "ga4-script");
    window.gtag("config", TRACKING_IDS.ga4);
  }

  /* ---------------- Meta (Facebook) Pixel ---------------- */
  if (!window.fbq) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fbq: any = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    };
    fbq.queue = [];
    window.fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "meta-pixel");
    fbq("init", TRACKING_IDS.metaPixel);
    fbq("track", "PageView");
  }

  /* ---------------- Snapchat Pixel ---------------- */
  if (!window.snaptr) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const snaptr: any = function (...args: unknown[]) {
      if (snaptr.handleRequest) snaptr.handleRequest(...args);
      else snaptr.queue.push(args);
    };
    snaptr.queue = [];
    window.snaptr = snaptr;
    loadScript("https://sc-static.net/scevent.min.js", "snap-pixel");
    snaptr("init", TRACKING_IDS.snapPixel);
    snaptr("track", "PAGE_VIEW");
  }

  /* ---------------- TikTok Pixel ---------------- */
  if (!window.ttq) {
    const methods = ["page", "track", "identify", "instances", "ready"];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ttq: any = { _i: {}, _t: {}, _o: {}, _q: [] };
    methods.forEach((m) => {
      ttq[m] = (...args: unknown[]) => ttq._q.push([m, ...args]);
    });
    window.ttq = ttq;
    loadScript(
      `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${TRACKING_IDS.tiktokPixel}&lib=ttq`,
      "tiktok-pixel",
    );
    ttq.page();
  }
}

/** Sends a single named conversion event to every connected platform. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
    window.dataLayer?.push({ event: name, ...params });
    window.fbq?.("trackCustom", name, params);
    window.snaptr?.("track", "CUSTOM_EVENT_1", { description: name });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.ttq as any)?.track?.("ClickButton", { content_name: name });
  } catch {
    /* tracking must never break the UI */
  }
}

/** Convenience wrappers used by the CTAs. */
export const trackWhatsApp = (location: string) => trackEvent("whatsapp_click", { location });
export const trackCall = (location: string) => trackEvent("call_click", { location });
export const trackSocial = (network: string, location: string) =>
  trackEvent("social_click", { network, location });
