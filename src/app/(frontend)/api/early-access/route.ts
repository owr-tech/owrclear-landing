import { z } from 'zod'
import { fr } from '@/content/fr'

const requestSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    contact: z.string().trim().min(5).max(150),
    organisation: z.string().trim().min(1).max(100),
    message: z.string().trim().max(1000).optional(),
    contactConsent: z.literal(true),
  })
  .strict()

const DELIVERY_EMAIL = process.env.EARLY_ACCESS_EMAIL || 'revivaltent91@gmail.com'

export async function POST(request: Request) {
  const result = requestSchema.safeParse(await request.json().catch(() => null))

  if (!result.success) {
    return Response.json({ ok: false, message: fr.api.invalid }, { status: 400 })
  }

  const data = result.data
  console.info('[early-access]', data)

  try {
    const origin = new URL(request.url).origin
    const forwarded = await fetch(`https://formsubmit.co/ajax/${DELIVERY_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        _subject: `Nouvelle demande d'accès — ${data.organisation}`,
        name: data.name,
        contact: data.contact,
        organisation: data.organisation,
        message: data.message || '(aucun message)',
        consentement_contact: 'oui',
        _captcha: 'false',
      }),
      signal: AbortSignal.timeout(30000),
    })

    const payload = (await forwarded.json().catch(() => null)) as {
      success?: string | boolean
      message?: string
    } | null

    const activationPending =
      typeof payload?.message === 'string' && /activation|actived|activated/i.test(payload.message)

    if (String(payload?.success) === 'true' || activationPending) {
      if (activationPending) {
        console.info('[early-access] FormSubmit activation pending; check the destination inbox')
      }
      return Response.json({ ok: true, message: fr.api.ok })
    }

    console.error('[early-access] delivery failed', forwarded.status, payload)
    return Response.json({ ok: false, message: fr.api.invalid }, { status: 502 })
  } catch (error) {
    console.error('[early-access] delivery error', error)
    return Response.json({ ok: false, message: fr.api.invalid }, { status: 502 })
  }

  return Response.json({ ok: true, message: fr.api.ok })
}
