import { Link } from 'react-router'
import { Eye, Handshake, Mail, Wrench } from 'lucide-react'
import { Container, PageShell } from '@/components/Shell'
import { Closer } from '@/components/Closer'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'Title partner',
    line: 'One company whose name goes on the car itself, alongside the club’s own.'
  },
  {
    name: 'Component partner',
    line: 'A company that supplies or funds a whole system — the battery, the dampers, the tyres — and is credited as the partner for it.'
  },
  {
    name: 'Season supporter',
    line: 'A contribution to the season’s materials and travel, credited on the car, the team’s kit and the club’s channels.'
  },
  {
    name: 'Friend of Moksha',
    line: 'In-kind help, mentorship or access to a facility. Credited as a supporter of the club.',
  },
]

export default function Sponsors() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-[-10%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_26%,transparent),transparent)]"
        />
        <Container className="relative py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="rise-in">
              <p className="race-label text-primary">Sponsorship</p>
              <h1 className="mt-5 font-display text-[clamp(2.75rem,7.5vw,5rem)] uppercase leading-[0.94] tracking-[-0.02em]">
                Put your name on a car that students built
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Moksha is funded by companies that want their name on something real. Your support
                buys materials, drivetrain components and the travel to a national competition — and
                it keeps a workshop full of engineering students building hardware.
              </p>
              <Button asChild size="lg" className="mt-9">
                <Link to="/team">Find out who runs the club</Link>
              </Button>
            </div>
            {/* The car as it actually looks on campus, rather than as a drawing:
                a sponsor is buying a surface, and this is the surface. */}
            <figure className="rise-in overflow-hidden rounded-lg bg-card shadow-raised">
              <img
                src="/images/buggy-roadside.webp"
                alt="The buggy on a campus road with its sponsor panel on the nose and flank, the driver strapped in behind the roll hoop."
                width="1232"
                height="692"
                className="h-auto w-full"
              />
              <figcaption className="bg-card p-5 text-sm text-muted-foreground sm:p-6">
                Sponsor panels sit on the flanks and the nose of the car, visible in every photograph
                the team takes and every pit-lane walk at the competition.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Why a student car is worth backing, as a three-part argument. */}
      <section className="cut-top mt-14 bg-secondary pt-20 pb-20 sm:pt-24">
        <Container>
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            Why student motorsport is worth the money
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {[
              {
                icon: Eye,
                title: 'It is seen',
                body: 'The car appears at the competition, at institute events and across the club and institute channels. A sponsor panel on a running car is the most visible thing the club owns.',
              },
              {
                icon: Handshake,
                title: 'It is a direct line to talent',
                body: 'The students building this car are mechanical, electrical and computer science undergraduates who will be looking for internships and jobs within a couple of years.',
              },
              {
                icon: Wrench,
                title: 'It is not a donation to nothing',
                body: 'You are funding parts, machining, and a team that has to justify every rupee at a design review. Sponsors get an accounting of what the season cost.',
              },
            ].map((r) => (
              <div key={r.title}>
                <r.icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 border-t border-border pt-5 font-display text-xl font-semibold uppercase">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What the money actually pays for. */}
      <section className="cut-top-soft bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
                Where sponsorship goes
              </h2>
              <p className="mt-4 max-w-sm text-workshop-muted">
                A season costs what a season costs. These are the lines that sponsorship actually
                covers.
              </p>
            </div>
            <ul className="divide-y divide-workshop-border border-y border-workshop-border">
              {[
                ['Frame and body materials', 'Steel tube, sheet, welding consumables and the fasteners that hold the car together.'],
                ['Drivetrain components', 'The motor, controller, battery cells and the reduction that puts power on the ground.'],
                ['Suspension and braking parts', 'Dampers, bearings, brake components and the machining the team cannot do on campus.'],
                ['Tyres and spares', 'Off-road wheels and the spares you take to a competition so a puncture does not end your weekend.'],
                ['Safety equipment', 'Harness, extinguisher, cut-offs and the personal protective equipment the workshop runs on.'],
                ['Competition and travel', 'Entry fees, transport and accommodation for the crew taking the car to the event.'],
                ['Testing and consumables', 'The things nobody budgets for: a second attempt at a bracket, a broken part, another set of cells.'],
              ].map(([title, body]) => (
                <li key={title} className="grid gap-1 py-5 sm:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] sm:gap-8">
                  <p className="font-display text-lg font-semibold uppercase">{title}</p>
                  <p className="text-sm text-workshop-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Recognition, described in words, because nothing is priced yet. */}
      <section className="cut-top bg-background pt-20 pb-20">
        <Container>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            How partners are recognised
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Tiers describe the size of the contribution. What each one costs depends on what the
            season needs, and it is worked out with you rather than published as a price list.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {tiers.map((t) => (
              <div key={t.name} className="rounded-lg bg-secondary p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold uppercase text-primary">{t.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.line}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How a conversation starts. No form: nothing could receive it yet. */}
      <section className="cut-top-soft bg-secondary pt-20 pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <Mail className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
                How to start
              </h2>
              <p className="mt-4 max-w-sm text-muted-foreground">
                Sponsorship conversations are handled by the club&rsquo;s student team, together with the
                institute&rsquo;s faculty advisor. There is no form on this site yet — a message box that
                drops what you write would be worse than none.
              </p>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {[
                ['Tell us what you make or do', 'A short note about your company and what you would want out of a partnership with a student racing team.'],
                ['We come back with a season plan', 'What the car needs this year, what the crew is short of, and where a partner of your size would fit.'],
                ['We agree what it says on the car', 'Placement, size and wording of your mark, settled before anything is painted or printed.'],
                ['You get the season report', 'What the sponsorship paid for, with photographs from the build and the competition.'],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="race-number text-[2rem] text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 rounded-lg bg-[radial-gradient(120%_100%_at_0%_0%,color-mix(in_oklch,var(--primary)_24%,transparent),transparent_70%)] px-6 py-5 text-foreground">
            Direct contact details for the club are being confirmed and will appear here once the
            student team has settled them for the season.
          </p>
        </Container>
      </section>

      <Closer
        title="Back the next car"
        body="A season's budget is built out of a few dozen components and a lot of favours. A partner who funds one system changes what the team can attempt."
        actions={[
          { to: '/car', label: 'See what you would be funding' },
          { to: '/team', label: 'Meet the crew', variant: 'outline' },
        ]}
      />
    </PageShell>
  )
}
