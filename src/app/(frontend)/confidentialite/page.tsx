import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { CookieSettingsButton } from '@/components/cookie-consent'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — CLEAR',
  description:
    'Comment CLEAR collecte, utilise et protège les données personnelles, et comment exercer vos droits.',
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-primary/10 py-10 first:border-0 first:pt-0">
      <h2 className="font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-bold tracking-[0.18em] text-primary uppercase">
          Confidentialité
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Cette politique explique quelles données sont traitées sur ce site, pourquoi, et comment
          exercer vos droits. Elle s&apos;applique aux visiteurs du site et aux personnes qui
          envoient une demande de démo.
        </p>

        <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/15 p-5 text-sm leading-relaxed">
          <p className="font-semibold text-primary">Informations à finaliser avant publication</p>
          <p className="mt-2">
            Le responsable du traitement doit renseigner son identité juridique, son adresse, son
            e-mail de contact, l&apos;hébergeur exact et les durées de conservation retenues, puis
            déclarer ses traitements à l&apos;IPDCP si nécessaire. Les champs marqués « à compléter
            » ci-dessous ne doivent pas rester en ligne en l&apos;état.
          </p>
        </div>

        <div className="mt-12">
          <Section title="1. Responsable du traitement">
            <p>
              CLEAR (à compléter : raison sociale, numéro d&apos;immatriculation, adresse postale à
              Lomé ou ailleurs au Togo), contact : à compléter (e-mail dédié à la protection des
              données). Ci-après « nous ».
            </p>
          </Section>

          <Section title="2. Données collectées et finalités">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Demande de démo :</strong> nom, e-mail ou numéro WhatsApp, type
                d&apos;organisation, message facultatif et consentement au recontact. Finalité :
                répondre à votre demande et vous présenter CLEAR.
              </li>
              <li>
                <strong>Mesure d&apos;audience :</strong> pages consultées, événements de navigation
                et données techniques (adresse IP, navigateur) traitées par PostHog. Uniquement si
                vous avez donné votre accord via le bandeau.
              </li>
              <li>
                <strong>Données de sécurité et de fonctionnement :</strong> journaux techniques
                minimaux nécessaires au service, sans profilage publicitaire.
              </li>
            </ul>
          </Section>

          <Section title="3. Bases légales">
            <p>
              Le traitement de votre demande repose sur votre consentement et, le cas échéant, sur
              les mesures précontractuelles prises à votre demande. La mesure d&apos;audience repose
              sur votre consentement préalable, révocable à tout moment. Le consentement est une
              manifestation de volonté expresse, libre, spécifique et informée ; il peut être retiré
              sans affecter la légalité des traitements antérieurs.
            </p>
          </Section>

          <Section title="4. Cookies et traceurs">
            <p>
              Avant tout choix, aucun cookie PostHog n&apos;est déposé : l&apos;outil est chargé en
              mémoire avec la capture désactivée. Le choix que vous exprimez est enregistré dans
              votre navigateur (localStorage, clé <code>clear-consent-v1</code>) pour une durée de
              12 mois ; ce stockage est nécessaire à la mémorisation de votre refus ou de votre
              accord. Si vous acceptez, PostHog peut déposer ses propres identifiants de mesure
              d&apos;audience. Si vous refusez, aucun traceur publicitaire ou de mesure
              d&apos;audience n&apos;est activé.
            </p>
            <p>Vous pouvez modifier votre choix à tout moment avec le bouton ci-dessous.</p>
            <CookieSettingsButton />
          </Section>

          <Section title="5. Destinataires et transferts">
            <p>
              Les données du formulaire sont transmises à FormSubmit (formsubmit.co) pour la
              livraison du message à l&apos;équipe CLEAR, avec un relais par notre propre route
              d&apos;API si nécessaire. L&apos;hébergement du site est assuré par Cloudflare et la
              mesure d&apos;audience par PostHog. Ces prestataires peuvent traiter des données en
              dehors du Togo. La loi togolaise n&apos;autorise un transfert vers un pays tiers que
              si ce pays offre un niveau de protection suffisant et exige que le responsable en
              informe préalablement l&apos;IPDCP ; cette formalité est en cours de finalisation (à
              compléter : pays, garanties contractuelles et date d&apos;information de
              l&apos;IPDCP).
            </p>
          </Section>

          <Section title="6. Durée de conservation">
            <p>
              Les données de demande de démo sont conservées le temps nécessaire au traitement de la
              demande, puis supprimées (durée cible : 12 mois, à confirmer). Le choix de
              consentement est conservé 12 mois. Les données d&apos;audience sont conservées selon
              la configuration du projet PostHog (à compléter).
            </p>
          </Section>

          <Section title="7. Vos droits">
            <p>
              Vous disposez d&apos;un droit d&apos;information, d&apos;accès, de rectification,
              d&apos;effacement, d&apos;opposition pour motif légitime et, sous réserve des
              conditions légales, de portabilité. Vous pouvez également retirer votre consentement.
              Pour exercer ces droits, écrivez à : à compléter (e-mail dédié). Nous répondons dans
              le délai légal, soit un mois pour les demandes écrites au titre de la loi togolaise.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir
              l&apos;Instance de protection des données à caractère personnel (IPDCP), Agoe 2 Lions,
              Lomé — contact@ipdcp.tg — (+228) 22 25 13 34 / 70 36 33 33.
            </p>
          </Section>

          <Section title="8. Sécurité et modifications">
            <p>
              Les données sont traitées de manière confidentielle, avec des mesures techniques et
              organisationnelles adaptées. Cette politique peut être mise à jour ; la date de
              dernière modification est indiquée ci-dessous.
            </p>
            <p>Dernière mise à jour : à compléter.</p>
          </Section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <a className="font-semibold text-primary underline underline-offset-2" href="/">
            ← Retour à l&apos;accueil
          </a>
          {' · '}
          <a
            className="font-semibold text-primary underline underline-offset-2"
            href="/#demande-demo"
          >
            Contact
          </a>
        </p>
      </main>
    </>
  )
}
