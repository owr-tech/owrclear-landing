'use client'

import { useEffect, useState } from 'react'
import { CONSENT_OPEN_EVENT, readConsent, saveConsent, type ConsentState } from '@/lib/consent'

const actionClass =
  'inline-flex min-h-11 items-center justify-center rounded-full border border-primary/25 bg-white px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    setAnalytics(stored?.analytics ?? false)
    setVisible(!stored)

    const openSettings = () => {
      setSettingsOpen(true)
      setVisible(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, openSettings)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openSettings)
  }, [])

  function decide(value: boolean) {
    const state = saveConsent(value)
    setAnalytics(state.analytics)
    setVisible(false)
    setSettingsOpen(false)
  }

  if (!visible) return null

  return (
    <div
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-4 left-1/2 z-[100] w-[min(94vw,44rem)] -translate-x-1/2 rounded-2xl border border-primary/10 bg-white p-5 text-foreground shadow-2xl sm:p-6"
      role="dialog"
    >
      <h2 className="font-heading text-xl font-bold" id="cookie-consent-title">
        Votre vie privée, votre choix
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Nous mesurons la fréquentation du site avec PostHog pour améliorer CLEAR. Aucun cookie
        publicitaire n&apos;est utilisé. Avant tout dépôt de traceur, vous pouvez accepter ou
        refuser ; votre choix est conservé 12 mois et reste modifiable à tout moment.{' '}
        <a
          className="font-semibold text-primary underline underline-offset-2"
          href="/confidentialite"
        >
          Politique de confidentialité
        </a>
      </p>

      {settingsOpen ? (
        <div className="mt-4 rounded-xl border border-primary/10 bg-background p-4">
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <input
              checked={analytics}
              className="mt-1 size-4 accent-[var(--primary)]"
              onChange={(event) => setAnalytics(event.target.checked)}
              type="checkbox"
            />
            <span>
              <span className="font-semibold">Mesure d&apos;audience (PostHog)</span>
              <span className="mt-1 block text-muted-foreground">
                Statistiques de visite anonymisées. Désactivé par défaut ; aucun cookie n&apos;est
                déposé sans votre accord.
              </span>
            </span>
          </label>
          <div className="mt-4 flex justify-end">
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => decide(analytics)}
              type="button"
            >
              Enregistrer mes choix
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className={actionClass} onClick={() => decide(false)} type="button">
            Refuser
          </button>
          <button className={actionClass} onClick={() => decide(true)} type="button">
            Tout accepter
          </button>
          <button
            className="ml-auto text-sm font-semibold text-primary underline underline-offset-2"
            onClick={() => setSettingsOpen(true)}
            type="button"
          >
            Personnaliser
          </button>
        </div>
      )}
    </div>
  )
}

export function CookieSettingsButton() {
  return (
    <button
      className="text-left text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-accent"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
      type="button"
    >
      Gérer les cookies
    </button>
  )
}
