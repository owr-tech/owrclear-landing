'use client'

import { Menu } from 'lucide-react'
import { fr } from '@/content/fr'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/88 backdrop-blur-xl">
      <nav
        aria-label={fr.nav.label}
        className="mx-auto flex h-21 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          className="font-heading text-base font-bold tracking-tight text-primary focus-visible:outline-2 focus-visible:outline-offset-4"
          href="#accueil"
        >
          {fr.logo}
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {fr.nav.links.map((link) => (
            <a
              className="text-base font-semibold text-foreground/70 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className={cn(
            buttonVariants({ size: 'lg' }),
            'hidden h-11 rounded-full px-5 lg:inline-flex',
          )}
          href="#demande-demo"
        >
          {fr.nav.cta}
        </a>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                className="size-10 rounded-full lg:hidden"
                size="icon-lg"
                variant="outline"
                aria-label={fr.nav.menu}
              />
            }
          >
            <Menu aria-hidden />
          </SheetTrigger>
          <SheetContent className="w-[88%] bg-background p-0">
            <SheetHeader className="border-b p-6">
              <SheetTitle className="font-heading text-2xl">{fr.nav.mobileTitle}</SheetTitle>
              <SheetDescription>{fr.nav.mobileDescription}</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col p-4">
              {fr.nav.links.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      className="rounded-xl px-4 py-4 text-lg font-semibold hover:bg-muted focus-visible:outline-2"
                      href={link.href}
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={
                  <a
                    className={cn(buttonVariants({ size: 'lg' }), 'mt-5 h-12 rounded-full')}
                    href="#demande-demo"
                  />
                }
              >
                {fr.nav.cta}
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
