/**
 * Cookie / advertising consent store.
 *
 * Nothing from Meta, TikTok, Snapchat or Google is loaded until the visitor
 * grants the matching category. The choice (and when it was made) is kept in
 * localStorage so it survives reloads and can be changed at any time from the
 * footer "إعدادات الكوكيز" link.
 */

export type ConsentState = {
  /** Strictly necessary cookies — always true, cannot be switched off. */
  necessary: true;
  /** GA4 / GTM measurement. */
  analytics: boolean;
  /** Meta, TikTok, Snapchat advertising pixels. */
  marketing: boolean;
  /** ISO timestamp of the moment the visitor made this choice. */
  decidedAt: string;
  /** Version of the notice text that was shown. */
  noticeVersion: string;
};

export const CONSENT_NOTICE_VERSION = "2026-09-v1";
const STORAGE_KEY = "alloaloa_cookie_consent";

const listeners = new Set<(c: ConsentState | null) => void>();

/** Reads the stored decision, or null when the visitor hasn't chosen yet. */
export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.noticeVersion !== CONSENT_NOTICE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Persists a decision and notifies every subscriber immediately. */
export function setConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    necessary: true,
    analytics: choice.analytics,
    marketing: choice.marketing,
    decidedAt: new Date().toISOString(),
    noticeVersion: CONSENT_NOTICE_VERSION,
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be blocked — the in-memory decision still applies */
  }
  listeners.forEach((fn) => fn(state));
  return state;
}

/** Clears the decision so the banner appears again (withdrawal path). */
export function resetConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn(null));
}

export function onConsentChange(fn: (c: ConsentState | null) => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
