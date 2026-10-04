import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* A racing team's datasheet panel: a thin rule, a tiny caps label and the
   value set large in the condensed face. This is how the car pages present the
   machine — as a sheet of specifications, not as a row of feature cards. */
/* The panel takes its ink from whatever ground it is dropped on: the dark
   garage or the lit bench. `currentColor`-derived rules keep the hairlines and
   the accent label readable on `--workshop-raised` without a second variant. */
export function SpecPanel({
  title,
  items,
  className,
  onLight = false,
}: {
  title: string
  items: { label: string; value: ReactNode; note?: string }[]
  className?: string
  onLight?: boolean
}) {
  return (
    <div className={cn('bg-transparent p-6 sm:p-7', className)}>
      <h3 className={cn('race-label', onLight ? 'text-workshop-foreground' : 'text-primary')}>
        {title}
      </h3>
      <dl className="mt-5 divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <dt className={cn('text-sm', onLight ? 'text-workshop-muted' : 'text-muted-foreground')}>
              {item.label}
            </dt>
            <dd className="font-display text-xl font-semibold sm:text-right">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Figure({
  value,
  caption,
  className,
  onLight = false,
}: {
  value: string
  caption: string
  className?: string
  onLight?: boolean
}) {
  return (
    <div
      className={cn(
        'border-l-2 pl-4',
        onLight ? 'border-workshop-foreground' : 'border-primary',
        className,
      )}
    >
      <p
        className={cn(
          'race-number text-[clamp(2.25rem,5vw,3.25rem)]',
          onLight ? 'text-workshop-foreground' : 'text-primary',
        )}
      >
        {value}
      </p>
      <p
        className={cn(
          'race-label mt-3',
          onLight ? 'text-workshop-muted' : 'text-muted-foreground',
        )}
      >
        {caption}
      </p>
    </div>
  )
}
