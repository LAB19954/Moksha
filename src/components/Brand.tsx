import { cn } from '@/lib/utils'

/* The club's own mark: the M drawn as a stencil keyline — the letter cut with a
   slit through each leg, and the right stem running the full height so the
   wordmark and the favicon are the same drawing. It is one path in one colour,
   so it takes the ground it is dropped on. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 46" aria-hidden="true" className={cn('h-9 w-auto', className)}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0h7v12h13v23h7v-23h7v23a11 11 0 0 1-11 11h-2.6v-11H7.6v11H2a2 2 0 0 1-2-2V0Zm7 15h2.6v14H7V15Z"
      />
    </svg>
  )
}

/* Wherever the club's name appears: the header, the footer, the 404. The mark
   sits on the accent, set on its own square so the keyline reads as the badge a
   team paints on the nose rather than as a logo floating on the bar. */
export function Brand({
  className,
  size = 'default',
}: {
  className?: string
  size?: 'default' | 'compact'
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-md bg-primary',
          size === 'compact' ? 'size-8' : 'size-9',
        )}
      >
        <Monogram
          className={cn('text-primary-foreground', size === 'compact' ? 'h-3.5' : 'h-4')}
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            'font-display font-bold uppercase leading-none tracking-[0.16em]',
            size === 'compact' ? 'text-lg' : 'text-xl',
          )}
        >
          Moksha
        </span>
        <span className="race-label mt-1 text-[0.6875rem] tracking-[0.15em] text-foreground">
          IIT Gandhinagar
        </span>
      </span>
    </span>
  )
}
