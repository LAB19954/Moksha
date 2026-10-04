import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { cn } from '@/lib/utils'

/* Every route is wrapped here, because the header and the footer are landmarks
   that must sit outside `main`, and `main` starts under the fixed bar. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main id="content" className="flex-1 pt-16">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

/* The measure. Sections sit on one of three widths: this one for text and
   grids, `full` for the bands that bleed, and a narrow one for statements. */
export function Container({
  children,
  className,
  size = 'default',
}: {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow'
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-gutter',
        size === 'narrow' ? 'max-w-3xl' : 'max-w-content',
        className,
      )}
    >
      {children}
    </div>
  )
}
