import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  CheckCircle2,
  CreditCard,
  History,
  ListChecks,
  MapPin,
  MessageSquareText,
  Mic2,
  Minus,
  PackageCheck,
  PencilLine,
  Play,
  ShieldCheck,
  Sparkles,
  Smartphone,
  WifiOff,
} from 'lucide-react'
import { fr } from '@/content/fr'
import { paymentMethodsByCountry } from '@/content/payment-methods'
import { CookieSettingsButton } from '@/components/cookie-consent'
import { EarlyAccessForm } from '@/components/early-access-form'
import { StackCards } from '@/components/stack-cards'
import { WhatsappDemo } from '@/components/whatsapp-demo'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverse?: boolean
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'mb-4 text-sm font-bold tracking-[0.18em] text-primary uppercase',
          inverse && 'text-accent',
        )}
      >
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-bold tracking-[-0.04em] text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed text-muted-foreground',
            inverse && 'text-white/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

function ProductMock() {
  return (
    <div className="relative mx-auto min-h-[31rem] w-full max-w-xl">
      <div className="absolute inset-x-0 top-4 rounded-[2rem] border border-primary/10 bg-white p-5 shadow-[0_30px_80px_rgba(15,76,58,0.18)] sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
              {fr.hero.dashboard}
            </p>
            <p className="mt-1 font-heading text-xl font-bold">{fr.productName}</p>
          </div>
          <Badge className="rounded-full bg-accent px-3 text-accent-foreground">
            {fr.hero.sample}
          </Badge>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[fr.hero.revenue, fr.hero.expenses, fr.hero.result].map((label, index) => (
            <div
              className={cn(
                'rounded-2xl p-4',
                index === 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary',
              )}
              key={label}
            >
              <p className="text-xs opacity-70">{label}</p>
              <p className="mt-2 text-base font-bold sm:text-sm lg:text-base">
                {fr.hero.amounts[index]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-secondary/60 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ListChecks className="size-4 text-primary" aria-hidden />
              <span className="text-xs font-bold">{fr.hero.queue}</span>
            </div>
            <Badge variant="outline">{fr.hero.queueCount}</Badge>
          </div>
          <div className="flex items-end justify-between gap-2">
            {[38, 56, 44, 72, 62, 86, 74, 92].map((height, index) => (
              <span
                className={cn('w-full rounded-t-lg', index === 7 ? 'bg-accent' : 'bg-primary/25')}
                key={index}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[88%] rounded-2xl border border-primary/10 bg-[#d9f2df] p-4 shadow-xl sm:w-[72%]">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <Play className="ml-0.5 size-4 fill-current" aria-hidden />
          </span>
          <div className="flex flex-1 items-center gap-1">
            {[8, 18, 11, 24, 15, 20, 9, 22, 12, 17].map((height, index) => (
              <span className="w-1 rounded-full bg-primary/70" key={index} style={{ height }} />
            ))}
          </div>
          <span className="text-xs font-bold">{fr.hero.voiceDuration}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs">
          <span className="font-semibold">{fr.hero.voice}</span>
          <span className="text-primary">{fr.hero.synced}</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-32"
      id="accueil"
    >
      <div className="grain absolute inset-0 -z-10 opacity-35" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <Badge
            className="mb-6 rounded-full border-primary/15 bg-primary/5 px-4 py-2 text-primary"
            variant="outline"
          >
            <Sparkles className="mr-1.5 size-4" aria-hidden />
            {fr.hero.eyebrow}
          </Badge>
          <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
            {fr.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {fr.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-full px-7 text-base')}
              href="#demande-demo"
            >
              {fr.hero.primary}
              <ArrowRight className="ml-1 size-4" aria-hidden />
            </a>
            <a
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-13 rounded-full border-primary/20 bg-transparent px-7 text-base',
              )}
              href="#comment-ca-marche"
            >
              {fr.hero.secondary}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/65">
            <span className="flex items-center gap-2">
              <WifiOff className="size-4 text-primary" aria-hidden />
              {fr.features.items[0].bullets[2]}
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden />
              {fr.features.items[4].bullets[2]}
            </span>
          </div>
        </div>
        <ProductMock />
      </div>
    </section>
  )
}

export function ProblemStrip() {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div className="space-y-1 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {fr.problem.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="border-l-2 border-accent pl-6 text-xl leading-relaxed">
          <strong className="text-accent">{fr.productName}</strong> {fr.problem.answer}
        </p>
      </div>
    </section>
  )
}

const inputModeIcons = [Smartphone, Mic2, Camera] as const

export function InputModesSection() {
  return (
    <section className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="modes-saisie">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={fr.inputModes.eyebrow}
          title={fr.inputModes.title}
          description={fr.inputModes.description}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {fr.inputModes.items.map((item, index) => {
            const Icon = inputModeIcons[index]
            return (
              <Card
                className={cn(
                  'rounded-[2rem] border-primary/10 py-0 shadow-sm',
                  index === 1 && 'bg-primary text-primary-foreground lg:-translate-y-6',
                  index === 2 && 'bg-[#f5e7c9]',
                )}
                key={item.number}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        'grid size-12 place-items-center rounded-full bg-primary text-primary-foreground',
                        index === 1 && 'bg-accent text-accent-foreground',
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-heading text-5xl font-bold opacity-15">
                      {item.number}
                    </span>
                  </div>
                  <Badge
                    className={cn(
                      'mt-8 rounded-full',
                      index === 1 && 'border-white/20 bg-white/10 text-white',
                    )}
                    variant="outline"
                  >
                    {item.tag}
                  </Badge>
                  <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-4 leading-relaxed text-muted-foreground',
                      index === 1 && 'text-white/70',
                    )}
                  >
                    {item.text}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {item.details.map((detail) => (
                      <li className="flex gap-2.5 text-sm" key={detail}>
                        <Check
                          className={cn(
                            'mt-0.5 size-4 shrink-0 text-primary',
                            index === 1 && 'text-accent',
                          )}
                          aria-hidden
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  return (
    <section className="px-0 pb-20 pt-24" id="fonctionnalites">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={fr.features.eyebrow}
          title={fr.features.title}
          description={fr.features.subtitle}
          align="center"
        />
      </div>
      <div className="mt-10">
        <StackCards />
      </div>
    </section>
  )
}

export function HowSection() {
  return (
    <section className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="comment-ca-marche">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={fr.how.eyebrow} title={fr.how.title} align="center" />
        <div className="relative mt-16 grid gap-4 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-primary/30 md:block" />
          {fr.how.steps.map((step) => (
            <Card
              className="relative rounded-[2rem] border-primary/10 bg-white py-0 shadow-sm"
              key={step.number}
            >
              <CardContent className="p-6 sm:p-8">
                <span className="grid size-16 place-items-center rounded-full bg-accent font-heading text-xl font-bold text-accent-foreground">
                  {step.number}
                </span>
                <h3 className="mt-8 font-heading text-3xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatsappSection() {
  return (
    <section className="bg-[#efe7d8] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={fr.whatsapp.eyebrow} title={fr.whatsapp.title} />
          <div className="mt-9 flex items-center gap-3 rounded-2xl border border-primary/10 bg-white/60 p-4">
            <CheckCircle2 className="size-6 shrink-0 text-primary" aria-hidden />
            <p className="font-semibold">{fr.whatsapp.note}</p>
          </div>
          <div className="mt-5 grid gap-3">
            {fr.whatsapp.options.map(([title, text], index) => {
              const Icon = [Mic2, MessageSquareText, Camera][index]
              return (
                <div
                  className="flex gap-4 rounded-2xl border border-primary/10 bg-white/40 p-4"
                  key={title}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <WhatsappDemo />
      </div>
    </section>
  )
}

export function DashboardSection() {
  const benefitIcons = [PackageCheck, BarChart3, History] as const

  return (
    <section
      className="scroll-mt-20 bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8 lg:py-32"
      id="validation"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.7fr]">
          <SectionHeading
            eyebrow={fr.dashboard.eyebrow}
            title={fr.dashboard.title}
            description={fr.dashboard.description}
            inverse
          />
          <div className="hidden justify-end lg:flex">
            <ListChecks className="size-24 text-accent/70" aria-hidden />
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <Card className="rounded-[2rem] border-white/10 bg-[#faf6ee] py-0 text-foreground shadow-2xl">
            <CardContent className="p-4 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-heading text-2xl font-bold">{fr.dashboard.queueTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{fr.dashboard.queueCount}</p>
                </div>
                <Badge className="bg-accent text-accent-foreground">{fr.hero.sample}</Badge>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-white">
                <Table className="min-w-[42rem]">
                  <TableHeader>
                    <TableRow>
                      {fr.dashboard.columns.map((column) => (
                        <TableHead key={column}>{column}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fr.dashboard.rows.map(([source, detail, total, status]) => (
                      <TableRow key={source}>
                        <TableCell>
                          <Badge
                            className={cn(
                              source === 'Vocal WhatsApp' && 'border-primary/20 text-primary',
                              source === 'Photo cahier' && 'border-accent text-[#704500]',
                            )}
                            variant="outline"
                          >
                            {source}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-semibold">{detail}</TableCell>
                        <TableCell>{total}</TableCell>
                        <TableCell>{status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-5 flex flex-wrap justify-end gap-2">
                <span
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-full')}
                >
                  <PencilLine className="size-4" aria-hidden />
                  {fr.dashboard.actions[1]}
                </span>
                <span className={cn(buttonVariants({ size: 'lg' }), 'rounded-full')}>
                  <Check className="size-4" aria-hidden />
                  {fr.dashboard.actions[0]}
                </span>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            {fr.dashboard.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index]
              return (
                <div
                  className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5"
                  key={benefit.title}
                >
                  <Icon className="size-6 text-accent" aria-hidden />
                  <h3 className="mt-4 font-heading text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{benefit.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AudiencesSection() {
  return (
    <section className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="pour-qui">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={fr.audiences.eyebrow} title={fr.audiences.title} />
        <Tabs
          className="mt-10 flex w-full flex-col gap-4 lg:grid lg:grid-cols-[.3fr_.7fr] lg:items-stretch"
          defaultValue={fr.audiences.items[0].id}
          orientation="vertical"
        >
          <TabsList className="h-auto w-full flex-col justify-center gap-1 self-start bg-muted p-2">
            {fr.audiences.items.map((item) => (
              <TabsTrigger
                className="h-auto w-full min-w-0 flex-none justify-between px-2.5 py-1.5 text-left whitespace-normal"
                key={item.id}
                value={item.id}
              >
                <span>{item.label}</span>
                {!item.available && <Badge variant="outline">{fr.audiences.soon}</Badge>}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-w-0 w-full">
            {fr.audiences.items.map((item) => (
              <TabsContent className="w-full" key={item.id} value={item.id}>
                <Card className="gap-0 bg-primary py-0 text-primary-foreground shadow-lg">
                  <CardContent className="flex flex-col p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                        {item.label}
                      </h3>
                      {!item.available && (
                        <Badge className="bg-accent text-accent-foreground">
                          {fr.audiences.soon}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                      {item.text}
                    </p>
                    <Separator className="my-6 bg-primary-foreground/20" />
                    <ul className="mt-auto grid gap-3 sm:grid-cols-3">
                      {item.bullets.map((bullet, index) => (
                        <li
                          className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-sm leading-relaxed"
                          key={bullet}
                        >
                          <span className="mb-3 grid size-8 place-items-center rounded-md bg-accent font-heading font-bold text-accent-foreground">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-semibold">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export function RolesSection() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={fr.roles.eyebrow}
          title={fr.roles.title}
          description={fr.roles.description}
        />
        <div className="mt-12 overflow-x-auto rounded-[2rem] border border-primary/10">
          <Table className="min-w-[44rem]">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
                <TableHead className="h-16 px-6 text-primary-foreground">
                  {fr.roles.peopleHeader}
                </TableHead>
                {fr.roles.columns.map((column) => (
                  <TableHead className="h-16 text-center text-primary-foreground" key={column}>
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {fr.roles.rows.map(([label, ...access]) => (
                <TableRow key={label}>
                  <TableCell className="px-6 py-5 font-semibold">{label}</TableCell>
                  {access.map((allowed, index) => (
                    <TableCell className="text-center" key={`${label}-${index}`}>
                      {allowed ? (
                        <>
                          <Check className="mx-auto size-5 text-primary" aria-hidden />
                          <span className="sr-only">{fr.roles.yes}</span>
                        </>
                      ) : (
                        <>
                          <Minus className="mx-auto size-5 text-muted-foreground" aria-hidden />
                          <span className="sr-only">{fr.roles.no}</span>
                        </>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section className="scroll-mt-20 bg-muted/60 px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="tarifs">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={fr.pricing.eyebrow}
          title={fr.pricing.title}
          description={fr.pricing.description}
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {fr.pricing.plans.map((plan) => (
            <Card
              className={cn(
                'relative gap-0 py-0 shadow-sm',
                plan.featured && 'bg-primary text-primary-foreground ring-primary',
              )}
              key={plan.name}
            >
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex min-h-7 items-center justify-between gap-3">
                  <Badge
                    className={cn(
                      plan.featured &&
                        'border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground',
                    )}
                    variant="outline"
                  >
                    {plan.name}
                  </Badge>
                </div>
                <div className="mt-7">
                  <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                    {plan.price}
                  </p>
                  <p
                    className={cn(
                      'mt-2 text-sm text-muted-foreground',
                      plan.featured && 'text-primary-foreground/70',
                    )}
                  >
                    {plan.period}
                  </p>
                  <p
                    className={cn(
                      'mt-4 leading-relaxed text-muted-foreground',
                      plan.featured && 'text-primary-foreground/75',
                    )}
                  >
                    {plan.description}
                  </p>
                </div>
                <Separator className={cn('my-7', plan.featured && 'bg-primary-foreground/20')} />
                <p className="text-sm font-bold">{fr.pricing.included}</p>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li className="flex gap-3 text-sm leading-relaxed" key={feature}>
                      <span
                        className={cn(
                          'mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground',
                          plan.featured && 'bg-accent text-accent-foreground',
                        )}
                      >
                        <Check className="size-3" aria-hidden />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={cn(
                    buttonVariants({
                      size: 'lg',
                      variant: plan.featured ? 'secondary' : 'default',
                    }),
                    'mt-8 h-11 w-full rounded-lg',
                    plan.featured && 'bg-accent text-accent-foreground hover:bg-accent/90',
                  )}
                  href="#demande-demo"
                >
                  {fr.pricing.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">{fr.pricing.note}</p>

        {paymentMethodsByCountry.length > 0 && (
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-primary/10 bg-card p-6 shadow-sm sm:p-9">
            <div className="text-center">
              <p className="text-sm font-semibold text-primary">{fr.pricing.payment.eyebrow}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                {fr.pricing.payment.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {fr.pricing.payment.description}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {paymentMethodsByCountry.map((country) => (
                <div className="rounded-2xl bg-muted/60 p-5" key={country.code}>
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <MapPin className="size-4 text-primary" aria-hidden />
                    {country.name}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {country.methods.map((method) => {
                      const Icon = method.kind === 'card' ? CreditCard : Smartphone
                      return (
                        <li
                          className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-card px-3 py-1.5 text-sm font-medium"
                          key={method.id}
                        >
                          {method.logo ? (
                            <img
                              alt=""
                              className="h-6 w-auto max-w-[5.5rem] object-contain"
                              height={24}
                              src={method.logo}
                              width={88}
                            />
                          ) : (
                            <Icon className="size-4 text-primary" aria-hidden />
                          )}
                          {method.label}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {fr.pricing.payment.note}
            </p>
            <p className="mt-2 text-center text-[11px] text-muted-foreground/70">
              {fr.pricing.payment.credits}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export function FormSection() {
  return (
    <section
      className="scroll-mt-20 bg-accent px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      id="demande-demo"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={fr.form.eyebrow}
            title={fr.form.title}
            description={fr.form.description}
          />
          <BarChart3 className="mt-10 size-16 text-primary/30" aria-hidden />
        </div>
        <EarlyAccessForm />
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8 lg:py-32" id="faq">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeading eyebrow={fr.faq.eyebrow} title={fr.faq.title} />
        <Accordion className="rounded-[2rem] border border-primary/10 bg-white px-6">
          {fr.faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="py-6 text-base sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function FinalCtaAndFooter() {
  return (
    <footer className="mt-6 overflow-hidden rounded-t-[2.5rem] bg-primary px-4 pt-16 text-primary-foreground sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-primary-foreground/15 pb-16 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-20">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-accent uppercase">{fr.logo}</p>
            <h2 className="mt-5 max-w-4xl font-heading text-5xl font-bold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
              {fr.finalCta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
              {fr.finalCta.text}
            </p>
          </div>
          <a
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-13 w-fit rounded-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90',
            )}
            href="#demande-demo"
          >
            {fr.finalCta.button}
            <ArrowRight className="ml-1 size-4" aria-hidden />
          </a>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              {fr.footer.text}
            </p>
          </div>
          <nav className="flex flex-col gap-2" aria-label={fr.nav.label}>
            {fr.nav.links.map((link) => (
              <a
                className="text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-accent"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-accent"
              href="/confidentialite"
            >
              {fr.footer.privacy}
            </a>
            <CookieSettingsButton />
          </nav>
          <div>
            <p className="font-bold text-primary-foreground">{fr.footer.contactTitle}</p>
            <p className="mt-3 text-sm text-primary-foreground/65">{fr.footer.email}</p>
            <p className="mt-1 text-sm text-primary-foreground/65">{fr.footer.phone}</p>
          </div>
        </div>
        <div
          aria-hidden
          className="select-none overflow-hidden border-t border-primary-foreground/15"
        >
          <p className="translate-y-[8%] text-center font-heading text-[clamp(6rem,21vw,19rem)] leading-[0.72] font-bold tracking-[-0.085em] text-primary-foreground">
            {fr.logo}
          </p>
        </div>
        <p className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} {fr.footer.legal}
        </p>
      </div>
    </footer>
  )
}
