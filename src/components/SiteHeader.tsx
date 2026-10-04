import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/car', label: 'The Car' },
  { to: '/team', label: 'The Team' },
  { to: '/sponsors', label: 'Sponsors' },
]

/* The shell: one fixed bar, the badge left, four destinations centre, the
   recruiting action right. At 360 it becomes the badge and one button that
   opens the destinations full-screen — no drawer to half-close on a phone. */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'race-label relative py-3 transition-colors duration-150 hover:text-primary',
      isActive
        ? 'text-foreground underline decoration-2 underline-offset-8 decoration-primary'
        : 'text-foreground/80',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {/* A hairline of the club's green under the bar, brightest where the bar
          meets the page, so the shell carries the accent without shouting. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-full h-8 bg-[linear-gradient(to_bottom,color-mix(in_oklch,var(--primary)_26%,transparent),transparent)]"
      />
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-gutter">
        <Link to="/" aria-label="Moksha Motorsports, IIT Gandhinagar — home">
          <Brand size="compact" />
        </Link>

        <nav aria-label="Moksha" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/team">Join the crew</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-11 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
          </Button>
        </div>
      </div>

      {/* Kept mounted and toggled with a class, so pressing it twice lands on
          the right state instead of queueing animations. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <nav aria-label="Moksha" className="mx-auto max-w-content px-gutter py-4">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'race-label flex min-h-11 items-center text-base',
                      isActive ? 'text-foreground font-bold' : 'text-foreground/80',
                    )
                  }
                  aria-current={pathname === l.to ? 'page' : undefined}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-3 w-full sm:hidden">
            <Link to="/team" onClick={() => setOpen(false)}>
              Join the crew
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
