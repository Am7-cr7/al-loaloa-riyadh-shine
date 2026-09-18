/**
 * Centralised analytics / pixel configuration and event helpers.
 *
 * Vendor scripts are injected on the client ONLY after the visitor grants the
 * matching consent category (see `src/lib/consent.ts`):
 *   - analytics  → Google Tag Manager + GA4
 *   - marketing  → Meta Pixel, Snapchat Pixel, TikTok Pixel
 *
 * Every CTA in the app funnels its click through `trackEvent`, which fans the
 * event out to whichever platforms are currently allowed. WhatsApp / call
 * clicks additionally fire each platform's standard lead event
 * (Meta `Lead`/`Contact`, TikTok `Contact`, Snapchat `SIGN_UP`, GA4 `generate_lead`).
 */

import { getConsent, onConsentChange, type ConsentState } from "./consent";

export const TRACKING_IDS = {
  /** GA4 measurement ID is public and intentionally fixed for static deployments. */
  ga4: "G-FG73JGYH25",
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
    __alLoaloaAnalyticsReady?: boolean;
    __alLoaloaMarketingReady?: boolean;
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

/** Google Consent Mode v2 signal — denied by default, updated on acceptance. */
function pushConsentMode(consent: ConsentState | null) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    ad_storage: consent?.marketing ? "granted" : "denied",
    ad_user_data: consent?.marketing ? "granted" : "denied",
    ad_personalization: consent?.marketing ? "granted" : "denied",
    analytics_storage: consent?.analytics ? "granted" : "denied",
  });
}

/* ---------------- Google Tag Manager + GA4 (analytics consent) ---------------- */
function initAnalytics() {
  if (window.__alLoaloaAnalyticsReady) return;
  window.__alLoaloaAnalyticsReady = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());

  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  loadScript(`https://www.googletagmanager.com/gtm.js?id=${TRACKING_IDS.gtm}`, "gtm-script");

  if (TRACKING_IDS.ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${TRACKING_IDS.ga4}`, "ga4-script");
    window.gtag("config", TRACKING_IDS.ga4);
  }
}

/* ---------------- Meta / Snapchat / TikTok (marketing consent) ---------------- */
function initMarketing() {
  if (window.__alLoaloaMarketingReady) return;
  window.__alLoaloaMarketingReady = true;

  /* Meta (Facebook) Pixel */
  if (!window.fbq) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fbq: any = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js", "meta-pixel");
    fbq("init", TRACKING_IDS.metaPixel);
    fbq("track", "PageView");
  }

  /* Snapchat Pixel */
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

  /* TikTok Pixel — official queueing stub (GTM may also load the same lib,
     so every deferred method guards its queue before pushing). */
  if (!window.ttq) {
    const methods = [
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
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ttq: any = { _i: {}, _t: {}, _o: {}, _q: [] };
    // `push` keeps the object compatible with the official TikTok snippet,
    // which GTM may also inject and which calls ttq.push / ttq.setAndDefer.
    ttq.push = (...args: unknown[]) => ttq._q.push(...args);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ttq.setAndDefer = (target: any, method: string) => {
      target[method] = (...args: unknown[]) => target.push([method, ...args]);
    };
    ttq.instance = (id: string) => {
      const inst = ttq._i[id] || [];
      methods.forEach((m) => ttq.setAndDefer(inst, m));
      return inst;
    };
    ttq.load = () => {};
    methods.forEach((m) => ttq.setAndDefer(ttq, m));
    window.ttq = ttq;
    loadScript(
      `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${TRACKING_IDS.tiktokPixel}&lib=ttq`,
      "tiktok-pixel",
    );
    ttq.page();
  }
}

/** Applies the current consent decision; safe to call any number of times. */
export function applyConsent(consent: ConsentState | null = getConsent()) {
  if (typeof window === "undefined") return;
  pushConsentMode(consent);
  if (consent?.analytics) initAnalytics();
  if (consent?.marketing) initMarketing();
}

/** Called once on mount: apply the stored choice and react to later changes. */
export function initTracking() {
  if (typeof window === "undefined") return;
  applyConsent();
  onConsentChange((c) => applyConsent(c));
}

/** Sends a single named event to every platform the visitor allowed. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const consent = getConsent();
  try {
    if (consent?.analytics) {
      window.gtag?.("event", name, params);
      window.dataLayer?.push({ event: name, ...params });
    }
    if (consent?.marketing) {
      window.fbq?.("trackCustom", name, params);
      window.snaptr?.("track", "CUSTOM_EVENT_1", { description: name });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.ttq as any)?.track?.("ClickButton", { content_name: name });
    }
  } catch {
    /* tracking must never break the UI */
  }
}

/** Standard lead events, used for WhatsApp and phone clicks. */
function trackLead(channel: "whatsapp" | "phone", location: string) {
  const consent = getConsent();
  const params = { channel, location } as const;
  try {
    if (consent?.analytics) {
      window.gtag?.("event", "generate_lead", params);
      window.dataLayer?.push({ event: "generate_lead", ...params });
    }
    if (consent?.marketing) {
      window.fbq?.("track", "Lead", params);
      window.fbq?.("track", "Contact", params);
      window.snaptr?.("track", "SIGN_UP", { description: `${channel}_${location}` });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.ttq as any)?.track?.("Contact", { content_name: `${channel}_${location}` });
    }
  } catch {
    /* never break the UI */
  }
}

/** Convenience wrappers used by the CTAs. */
export const trackWhatsApp = (location: string) => {
  trackEvent("whatsapp_click", { location });
  trackLead("whatsapp", location);
};
export const trackCall = (location: string) => {
  trackEvent("call_click", { location });
  trackLead("phone", location);
};
export const trackSocial = (network: string, location: string) =>
  trackEvent("social_click", { network, location });
