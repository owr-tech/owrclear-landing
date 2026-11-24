import posthog from 'posthog-js'
import { CONSENT_UPDATED_EVENT, readConsent, type ConsentState } from './src/lib/consent'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

// Analytics stay opted out until the visitor makes an explicit choice. The SDK
// is still loaded so a later choice can be honoured without a page reload.
function applyAnalyticsConsent(analytics: boolean) {
  if (analytics) {
    posthog.set_config({ persistence: 'localStorage+cookie' })
    posthog.opt_in_capturing()
  } else {
    posthog.opt_out_capturing()
  }
}

if (token && host) {
  const initialConsent = readConsent()

  posthog.init(token, {
    api_host: host,
    defaults: '2026-08-30',
    capture_exceptions: true,
    debug: process.env.NODE_ENV === 'development',
    opt_out_capturing_by_default: true,
    persistence: 'memory',
    disable_session_recording: true,
    respect_dnt: true,
  })

  if (initialConsent) applyAnalyticsConsent(initialConsent.analytics)

  window.addEventListener(CONSENT_UPDATED_EVENT, (event) => {
    const detail = (event as CustomEvent<ConsentState>).detail
    if (detail && typeof detail.analytics === 'boolean') applyAnalyticsConsent(detail.analytics)
  })

  if (initialConsent?.analytics && window.location.pathname.startsWith('/admin')) {
    void fetch('/api/admins/me', { credentials: 'same-origin' })
      .then(async (response) => {
        if (!response.ok) return null

        return (await response.json()) as {
          user?: { id?: string; email?: string | null }
        }
      })
      .then((session) => {
        const user = session?.user
        if (typeof user?.id !== 'string') return

        posthog.identify(user.id, user.email ? { email: user.email } : {})
      })
      .catch(() => {
        // Analytics identity must never interfere with the admin application.
      })

    window.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return

      const logoutLink = event.target.closest('a[href^="/admin/logout"]')
      if (logoutLink) posthog.reset()
    })
  }
} else if (process.env.NODE_ENV === 'development') {
  const missingVariable = token ? 'NEXT_PUBLIC_POSTHOG_HOST' : 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'

  console.error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  )
}
