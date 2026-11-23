import posthog from 'posthog-js'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

if (token && host) {
  posthog.init(token, {
    api_host: host,
    defaults: '2026-08-30',
    capture_exceptions: true,
    debug: process.env.NODE_ENV === 'development',
  })

  if (window.location.pathname.startsWith('/admin')) {
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
  const missingVariable = token
    ? 'NEXT_PUBLIC_POSTHOG_HOST'
    : 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'

  console.error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  )
}
