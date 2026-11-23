'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2 } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { fr } from '@/content/fr'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const schema = z.object({
  name: z.string().trim().min(2, fr.form.errors.name).max(100),
  contact: z.string().trim().min(5, fr.form.errors.contact).max(150),
  organisation: z.string().min(1, fr.form.errors.organisation),
  message: z.string().trim().max(1000).optional(),
})

const DELIVERY_EMAIL = 'revivaltent91@gmail.com'

function trackLead() {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  gtag?.('event', 'generate_lead')
}

type FormValues = z.infer<typeof schema>

export function EarlyAccessForm() {
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', contact: '', organisation: '', message: '' },
  })

  async function onSubmit(values: FormValues) {
    setSubmitError('')
    const payload = {
      _subject: `Nouvelle demande d'accès — ${values.organisation}`,
      name: values.name,
      contact: values.contact,
      organisation: values.organisation,
      message: values.message || '(aucun message)',
      _captcha: 'false',
    }

    // Submit from the visitor's browser so FormSubmit sees their IP, not the
    // Worker's shared egress IP (which is frequently rate limited).
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${DELIVERY_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null
      const activationPending = /activation|actived|activated/i.test(result?.message || '')
      if (response.ok && (String(result?.success) === 'true' || activationPending)) {
        trackLead()
        setSuccess(true)
        form.reset()
        return
      }
    } catch {
      // fall through to the server route
    }

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error()
      trackLead()
      setSuccess(true)
      form.reset()
    } catch {
      setSubmitError(fr.form.errors.submit)
    }
  }

  if (success) {
    return (
      <div
        className="grid min-h-[28rem] place-items-center rounded-[2rem] bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <div>
          <CheckCircle2 className="mx-auto size-14 text-primary" aria-hidden />
          <h3 className="mt-6 font-heading text-3xl font-bold">{fr.form.successTitle}</h3>
          <p className="mx-auto mt-3 max-w-sm text-muted-foreground">{fr.form.successText}</p>
          <Button
            className="mt-8 rounded-full px-6"
            onClick={() => setSuccess(false)}
            type="button"
            variant="outline"
          >
            {fr.form.retry}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormItem>
          <FormLabel htmlFor="name" error={Boolean(form.formState.errors.name)}>
            {fr.form.fields.name.label}
          </FormLabel>
          <FormControl>
            <Input
              id="name"
              autoComplete="name"
              className="h-12 rounded-xl"
              placeholder={fr.form.fields.name.placeholder}
              aria-invalid={Boolean(form.formState.errors.name)}
              {...form.register('name')}
            />
          </FormControl>
          <FormMessage name="name" />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="contact" error={Boolean(form.formState.errors.contact)}>
            {fr.form.fields.contact.label}
          </FormLabel>
          <FormControl>
            <Input
              id="contact"
              autoComplete="email"
              className="h-12 rounded-xl"
              placeholder={fr.form.fields.contact.placeholder}
              aria-invalid={Boolean(form.formState.errors.contact)}
              {...form.register('contact')}
            />
          </FormControl>
          <FormMessage name="contact" />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="organisation" error={Boolean(form.formState.errors.organisation)}>
            {fr.form.fields.organisation.label}
          </FormLabel>
          <Controller
            control={form.control}
            name="organisation"
            render={({ field }) => (
              <Select value={field.value || null} onValueChange={field.onChange}>
                <SelectTrigger
                  id="organisation"
                  className="h-12 w-full rounded-xl"
                  aria-invalid={Boolean(form.formState.errors.organisation)}
                >
                  <SelectValue placeholder={fr.form.fields.organisation.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {fr.form.organisations.map((organisation) => (
                    <SelectItem key={organisation} value={organisation}>
                      {organisation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FormMessage name="organisation" />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="message">{fr.form.fields.message.label}</FormLabel>
          <FormControl>
            <Textarea
              id="message"
              className="min-h-28 rounded-xl"
              placeholder={fr.form.fields.message.placeholder}
              {...form.register('message')}
            />
          </FormControl>
        </FormItem>
        {submitError && (
          <p className="text-sm font-medium text-destructive" role="alert">
            {submitError}
          </p>
        )}
        <Button
          className="mt-2 h-12 rounded-full text-base"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? fr.form.submitting : fr.form.submit}
        </Button>
      </form>
    </Form>
  )
}
