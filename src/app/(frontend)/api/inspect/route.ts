export const dynamic = 'force-dynamic'

type Pick = {
  at: string
  tag: string
  id: string
  className: string
  sectionId: string
  path: string
  text: string
  html: string
  rect: { x: number; y: number; w: number; h: number }
  href: string
}

const picks: Pick[] = []

export async function POST(request: Request) {
  if (process.env.NODE_ENV === 'production') return new Response(null, { status: 404 })
  const body = (await request.json().catch(() => null)) as Omit<Pick, 'at'> | null
  if (!body) return Response.json({ ok: false }, { status: 400 })

  picks.unshift({ ...body, at: new Date().toISOString() })
  if (picks.length > 30) picks.pop()
  return Response.json({ ok: true, count: picks.length })
}

export async function GET() {
  if (process.env.NODE_ENV === 'production') return new Response(null, { status: 404 })
  return Response.json({ picks: picks.slice(0, 12) })
}
