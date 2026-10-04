import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Shell'
import { Crest } from '@/components/Crest'
import { cn } from '@/lib/utils'

/* The last thing on every page: one dark band, one statement, two ways in.
   Nothing below it, so the page finishes where the visitor has to decide. */
export function Closer({
  title,
  body,
  actions,
  className,
}: {
  title: string
  body: string
  actions: { to: string; label: string; variant?: 'primary' | 'outline' }[]
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden bg-background', className)}>
      <Crest className="pointer-events-none absolute -right-16 -top-10 size-72 text-foreground opacity-[0.05] lg:-right-4" />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] uppercase">{title}</h2>
          <p className="mt-4 text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {actions.map((a) => (
              <Button
                key={a.label}
                asChild
                variant={a.variant === 'outline' ? 'outline' : 'default'}
                size="lg"
              >
                <Link to={a.to}>
                  {a.label}
                  {a.variant !== 'outline' && <ArrowRight className="size-4" strokeWidth={2} />}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
