import { Link } from 'react-router'
import { PageShell } from '@/components/Shell'
import { BuggySide } from '@/components/BuggySide'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-content items-center gap-10 px-gutter py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="race-number text-[clamp(4rem,14vw,8rem)] text-primary">404</p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] uppercase">
            This page is not on the car
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The address may be mistyped, or the page may have moved. The workshop has four doors:
            the home page, the car, the team and sponsorship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/car">See the car</Link>
            </Button>
          </div>
        </div>
        <BuggySide className="text-foreground opacity-70" />
      </section>
    </PageShell>
  )
}
