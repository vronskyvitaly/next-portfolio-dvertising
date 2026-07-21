export type ConsentState = 'granted' | 'denied'

const CONSENT_COOKIE = 'cookie_consent'
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export const CONSENT_EVENT = 'cookie-consent-change'

export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null
  const entry = document.cookie
    .split('; ')
    .find(part => part.startsWith(`${CONSENT_COOKIE}=`))
  if (!entry) return null
  const value = entry.slice(CONSENT_COOKIE.length + 1)
  return value === 'granted' || value === 'denied' ? value : null
}

export function writeConsent(state: ConsentState): void {
  if (typeof document === 'undefined') return
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${CONSENT_COOKIE}=${state}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }))
}

export function onConsentChange(listener: (state: ConsentState) => void): () => void {
  const handler = (event: Event) => listener((event as CustomEvent<ConsentState>).detail)
  window.addEventListener(CONSENT_EVENT, handler)
  return () => window.removeEventListener(CONSENT_EVENT, handler)
}
