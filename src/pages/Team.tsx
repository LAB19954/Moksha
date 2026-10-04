import { Link } from 'react-router'
import { ArrowRight, BatteryCharging, Cog, Compass, Gauge, Megaphone, ShieldCheck } from 'lucide-react'
import { Container, PageShell } from '@/components/Shell'
import { Closer } from '@/components/Closer'
import { Button } from '@/components/ui/button'

const crews = [
  {
    icon: Compass,
    name: 'Chassis crew',
    job: 'Owns the frame drawing, the jig and every weld on the car.',
    entry: 'Start on measurement and preparation: cutting tube to length, deburring, and learning to notch a joint before you are allowed to strike an arc on the car.',
  },
  {
    icon: Gauge,
    name: 'Suspension and steering crew',
    job: 'Mounts the wishbones, sets the geometry and adjusts the dampers.',
    entry: 'Begin with assembly and alignment, then move to tuning once you understand what each adjustment does to the car.',
  },
  {
    icon: BatteryCharging,
    name: 'Powertrain crew',
    job: 'Builds the battery pack enclosure and mounts the motor and controller.',
    entry: 'Learn the safe handling rules first — the pack is the one part of the car you do not improvise around — then take on the mounting and the reduction.',
  },
  {
    icon: Cog,
    name: 'Electronics crew',
    job: 'Runs the wiring loom, the contactor logic and the sensors.',
    entry: 'Starts on loom routing and connectors, which is unglamorous, precise work, and ends up owning the circuits that keep the car running.',
  },
  {
    icon: ShieldCheck,
    name: 'Brakes and safety crew',
    job: 'Installs the circuits, the harness and the cut-offs, and checks them before every run.',
    entry: 'The crew that says no. You will learn the rulebook better than anyone and inspect the car before it moves.',
  },
  {
    icon: Megaphone,
    name: 'Sponsorship and outreach crew',
    job: 'Finds the companies that fund the season and tells the club\'s story outside the workshop.',
    entry: 'A good place to start if you would rather write, talk and organise than hold a spanner — the team cannot race without this work.',
  },
]

export default function Team() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)] pulse-glow"
        />
        <Container className="relative py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="rise-in">
              <p className="race-label text-primary">The club</p>
              <h1 className="mt-5 font-display text-[clamp(2.75rem,7.5vw,5rem)] uppercase leading-[0.94] tracking-[-0.02em]">
                A student team that has to be organised to win
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Moksha is run entirely by students of IIT Gandhinagar. There is no professional
                engineer standing behind the club — the design reviews, the budget, the fabrication and
                the race entries are all done by people who have lectures in the morning.
              </p>
            </div>
            {/* The whole pitch to a first year, in one picture: the thing the
                club builds, moving, under somebody their own age. */}
            <figure className="rise-in overflow-hidden rounded-lg bg-card shadow-raised">
              <img
                src="/images/buggy-rear-axle.webp"
                alt="The buggy on the road outside the workshop block, body off, suspension and rear axle in full view."
                width="1232"
                height="615"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </Container>
      </section>

      {/* How the club is arranged, before naming anybody's job. */}
      <section className="cut-top bg-secondary pt-20 pb-20 sm:pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
              How the club is arranged
            </h2>
            <div className="space-y-5 text-muted-foreground">
              <p>
                The club is split into subsystem crews, and each crew owns one part of the car from
                the first sketch to the last inspection. A crew lead is responsible for the drawings,
                the parts list and the deadlines for that system — which means being answerable to
                the rest of the team when something is late.
              </p>
              <p>
                Above the crews sits a student leadership team that holds the season plan, the budget
                and the relationship with the institute the club belongs to. Everyone in it came up
                through a crew first.
              </p>
              <p>
                That structure is deliberate. It is how a group of undergraduates can produce a car
                that passes inspection, and it is also how a first-year learns something real in
                their first semester rather than watching from the edge of the workshop.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The crews: a board of unequal cells, the way a garage wall is laid out. */}
      <section className="cut-top-soft bg-background pt-20 pb-20">
        <Container>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            The crews and what they do
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Roles are general to the club rather than to any one person, because the crew that builds
            this year&rsquo;s car hands it on to the crew that builds the next one.
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-6">
            {crews.map((c, i) => (
              <article
                key={c.name}
                className={
                  'group flex flex-col overflow-hidden rounded-lg bg-secondary p-6 transition-colors duration-200 hover:bg-accent sm:p-7 ' +
                  (i < 2 ? 'lg:col-span-3' : 'lg:col-span-2')
                }
              >
                <span className="flex size-11 items-center justify-center rounded-md bg-primary/15 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold uppercase">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.job}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm">
                  <span className="race-label text-primary">Where a newcomer starts </span>
                  <span className="mt-2 block text-muted-foreground">{c.entry}</span>
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Light ground: how a beginner actually becomes useful. */}
      <section className="cut-top-soft bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
                How you learn here
              </h2>
              <p className="mt-4 max-w-sm text-workshop-muted">
                No one arrives knowing how to build a car. The club runs on teaching, and the people
                teaching you were beginners a year ago.
              </p>
            </div>
            <ol className="space-y-8">
              {[
                ['Turn up', 'Come to the workshop sessions and the design reviews. There is no application, no test and no experience requirement — the only thing that matters is that you keep showing up.'],
                ['Take a small job', 'Your first task will be small and supervised: a measurement, a bracket, a length of loom. It will also be on the actual car.'],
                ['Own something', 'Once a crew trusts you with a component, you carry it end to end — the drawing, the fabrication, the fit and the fault-finding when it does not work.'],
                ['Teach the next person', 'Every senior in this club learned from someone who has now graduated. Passing it on is part of the job.'],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5">
                  <span className="race-number text-[2.5rem] text-primary-ink">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase text-workshop-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-workshop-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Support note: who stands behind the club. */}
      <section className="cut-top bg-background pt-20 pb-20">
        <Container>
          <div className="rounded-lg bg-card p-7 sm:p-10">
            <p className="race-label text-primary">Institute support</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,3.5vw,2.5rem)] uppercase">
              Backed by IIT Gandhinagar, built by students
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              The club operates under the institute&rsquo;s student bodies and a faculty advisor, which
              is what gives it a workshop, a budget line and the standing to represent IIT
              Gandhinagar at a national competition. The work itself — the design, the fabrication,
              the testing and the race entries — is student work, and that is the point of it.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/sponsors">
                  Support the team
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Closer
        title="The workshop is open"
        body="If you are a student at IIT Gandhinagar and you want to build something that has to work, walk in. Recruitment happens at the start of the academic year."
        actions={[
          { to: '/car', label: 'See what you would build' },
          { to: '/sponsors', label: 'Backing the team', variant: 'outline' },
        ]}
      />
    </PageShell>
  )
}