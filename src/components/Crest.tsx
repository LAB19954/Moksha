import { cn } from '@/lib/utils'

/* The club's own mark, painted at full size. It is already one colour on one
   ground, so at this scale it is a graphic element rather than a logo: no
   accessible name, and the section that carries it decides whether it is ink or
   a texture. */
export function Crest({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 46"
      aria-hidden="true"
      className={cn('h-40 w-auto', className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0h7v12h13v23h7v-23h7v23a11 11 0 0 1-11 11h-2.6v-11H7.6v11H2a2 2 0 0 1-2-2V0Zm7 15h2.6v14H7V15Z"
      />
    </svg>
  )
}
