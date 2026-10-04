import { Link } from 'react-router'
import { Brand } from '@/components/Brand'
import { PhotoCredits } from '@/components/PhotoCredits'

const columns = [
  {
    title: 'The team',
    items: [
      { to: '/car', label: 'The car' },
      { to: '/team', label: 'Subsystems and crews' },
      { to: '/team', label: 'How to join' },
    ],
  },
  {
    title: 'For sponsors',
    items: [
      { to: '/sponsors', label: 'Why back Moksha' },
      { to: '/sponsors', label: 'What your money buys' },
      { to: '/sponsors', label: 'Recognition' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-content gap-10 px-gutter py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="Moksha Motorsports, IIT Gandhinagar — home">
            <Brand />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            The student motorsports club of IIT Gandhinagar. We design, build and race an electric
            off-road buggy for SAE eBaja.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="race-label text-foreground">{col.title}</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex min-h-9 items-center text-sm text-foreground transition-colors duration-150 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-gutter py-6 text-xs text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Moksha Motorsports, Indian Institute of Technology Gandhinagar, Gujarat, India.</p>
          <PhotoCredits />
        </div>
      </div>
    </footer>
  )
}
