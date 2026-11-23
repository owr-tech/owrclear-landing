import React from 'react'
import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'
import { fr } from '@/content/fr'
import { BodyCustomCode, renderHeadCustomCode } from '@/lib/make-custom-code'
import { makeSiteSettings } from '@/lib/make-site-settings'
import './styles.css'

const headingFont = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading-face',
  display: 'swap',
})
const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body-face',
  display: 'swap',
})

const title = makeSiteSettings.title ?? fr.seo.title
const description = makeSiteSettings.description ?? fr.seo.description
const favicon = makeSiteSettings.icons?.icon ?? '/favicon.svg'
const socialImage = makeSiteSettings.openGraph?.image

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title,
  description,
  robots: makeSiteSettings.robots?.index === false ? { follow: false, index: false } : undefined,
  icons: favicon ? { icon: favicon } : undefined,
  openGraph: {
    title,
    description,
    locale: 'fr_FR',
    type: 'website',
    images: socialImage ? [socialImage] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: socialImage ? [socialImage] : undefined,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const addBypassLinks = makeSiteSettings.accessibility?.addBypassLinks === true
  const customScripts = makeSiteSettings.customScripts

  return (
    <html lang="fr" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        {renderHeadCustomCode(customScripts?.headStart, 'head-start')}
        {renderHeadCustomCode(customScripts?.headEnd, 'head-end')}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <BodyCustomCode html={customScripts?.bodyStart} />
        {addBypassLinks && (
          <a className="figma-bypass-link" href="#root">
            Aller au contenu
          </a>
        )}
        <div id="root" tabIndex={-1}>
          {children}
        </div>
        <BodyCustomCode html={customScripts?.bodyEnd} />
      </body>
    </html>
  )
}
