export const CONSENT_STORAGE_KEY = 'clear-consent-v1'
export const CONSENT_UPDATED_EVENT = 'clear:consent-updated'
export const CONSENT_OPEN_EVENT = 'clear:consent-open'

export type ConsentState = {
  analytics: boolean
  updatedAt: string
}

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<ConsentState>
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.updatedAt !== 'string') {
      return null
    }
    return { analytics: parsed.analytics, updatedAt: parsed.updatedAt }
  } catch {
    return null
  }
}

export function saveConsent(analytics: boolean): ConsentState {
  const state: ConsentState = { analytics, updatedAt: new Date().toISOString() }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Private browsing can block storage; the choice still applies for this page.
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_UPDATED_EVENT, { detail: state }))
  return state
}
