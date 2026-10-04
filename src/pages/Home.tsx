import { Link } from 'react-router'
import {
  ArrowRight,
  BatteryCharging,
  CircuitBoard,
  Cog,
  Flame,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Container, PageShell } from '@/components/Shell'
import { BuggyBuild } from '@/components/BuggyBuild'
import { SpecPanel, Figure } from '@/components/SpecPanel'
import { Closer } from '@/components/Closer'
import { Button } from '@/components/ui/button'

/* The disciplines are a list of things the club actually does, so they get
   named and then explained rather than being turned into stat cards. */
const disciplines = [
  {
    icon: Flame,
    name: 'Chassis fabrication',
    line: 'Cut, notch and weld the steel space frame ourselves, then check it against the rulebook measurements before it leaves the jig.',
  },
  {
    icon: Cog,
    name: 'Suspension and steering',
    line: 'Unequal-length double wishbones, coilover shocks and a rack we mount and re-valve until the car lands from a jump without bottoming out.',
  },
  {
    icon: BatteryCharging,
    name: 'Powertrain and battery',
    line: 'A lithium-ion pack and a brushless motor working through a fixed reduction. Range, thermal margin and packaging are all our problem.',
  },
  {
    icon: ShieldCheck,
    name: 'Brakes and driver safety',
    line: 'Independent circuits front and rear, a certified harness, a fire extinguisher and a roll hoop that gets loaded before anyone sits in the car.',
  },
  {
    icon: CircuitBoard,
    name: 'Low-voltage and telemetry',
    line: 'The wiring loom, the contactor logic and the sensors that let us read the car while it is running instead of guessing after it stops.',
  },
  {
    icon: Users,
    name: 'Testing and logistics',
    line: 'Bump-stop runs, a test logbook, and the unglamorous business of getting a car and eleven people to the competition and back.',
  },
]

export default function Home() {
  return (
    <PageShell>
      {/* Entry: the actual car on the hero, headline and two doors. This is the
          one band on the site where the photography leads and everything else
          is fitted around it. */}
      <section className="relative overflow-hidden bg-background">
        {/* The photograph bleeds to the right edge on desktop and sits as a full
            band behind the copy at mobile, scrimmed so the type never fights
            the trees. */}
        <img
          src="/images/buggy-roadside.webp"
          alt="The team's electric off-road buggy on a campus road at IIT Gandhinagar, steel space frame and roll hoop exposed, driver strapped in."
          width="1232"
          height="692"
          className="absolute inset-0 size-full object-cover object-[62%_50%] opacity-45 lg:left-auto lg:right-0 lg:w-[62%] lg:opacity-70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,var(--background)_18%,color-mix(in_oklch,var(--background)_55%,transparent)_46%,transparent_78%)] lg:bg-[linear-gradient(95deg,var(--background)_30%,color-mix(in_oklch,var(--background)_45%,transparent)_52%,transparent_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-[-5%] size-[46rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_30%,transparent),transparent)] pulse-glow"
        />
        <Container className="relative pb-14 pt-14 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
            <div className="rise-in">
              <p className="race-label text-primary">SAE eBaja &middot; IIT Gandhinagar</p>
              <h1 className="mt-5 font-display text-[clamp(3rem,9vw,6rem)] uppercase leading-[0.94] tracking-[-0.02em] drop-shadow-[0_2px_18px_oklch(0_0_0/0.6)]">
                We build the car
                <span className="block text-primary">we race</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Moksha is the student motorsports club of IIT Gandhinagar. Every season a new crew
                of undergraduates designs, welds and tests an electric off-road buggy, and takes it
                to the SAE eBaja competition.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link to="/team">
                    Join the crew
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/sponsors">Back the team</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Recruitment runs at the start of the academic year. No prior motorsport experience is
                expected — the first years outnumber everyone else in the workshop.
              </p>
            </div>

          </div>
        </Container>

        {/* Dark band: what the competition asks for. The diagonal hatch is a
            marked-out pit wall, and the rules are numbered because the order of
            them is the order they are judged in. */}
        <div className="cut-top relative mt-20 bg-secondary pt-20 pb-16 sm:pt-24">
          <div
            aria-hidden="true"
            className="hatch pointer-events-none absolute inset-x-0 top-0 h-40 text-primary opacity-[0.10]"
          />
          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] uppercase leading-[0.98]">
                  eBaja is not a school project
                </h2>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  SAE eBaja puts student-built electric cars through the same scrutiny a race team
                  gets: a technical inspection that can end your weekend before the green flag, then
                  endurance on terrain that punishes anything built in a hurry.
                </p>
              </div>
              <ul className="grid gap-10 border-t border-border pt-8 sm:grid-cols-3 sm:gap-8">
                {[
                  ['Design and fabrication', 'A complete car, from the frame drawing to the last bolt.'],
                  ['Technical inspection', 'Every weld, circuit and harness checked against the rulebook.'],
                  ['Endurance', 'Four hours of rough ground is the test the whole season is aimed at.'],
                ].map(([title, body], i) => (
                  <li key={title} className="relative border-l-2 border-primary pl-4">
                    <span className="race-number block text-[2.25rem] text-primary/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 font-display text-lg font-semibold uppercase">{title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </section>

      {/* Light workshop ground: the car as a datasheet. */}
      <section className="cut-top-soft bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-md font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
              The car, on one page
            </h2>
            <Link
              to="/car"
              className="race-label inline-flex min-h-11 items-center gap-2 text-workshop-muted transition-colors duration-150 hover:text-workshop-foreground"
            >
              Read the full build
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            {/* A shade step off the workshop ground, not a hairline: the two
                datasheets sit on a drawn diagonal. */}
            <div className="grid gap-6 sm:grid-cols-2">
              <SpecPanel
                className="cut-top-soft shadow-none ring-0 bg-workshop-raised text-workshop-foreground"
                onLight
                title="Chassis"
                items={[
                  { label: 'Layout', value: 'Rear-drive, single seat' },
                  { label: 'Frame', value: 'Welded steel space frame' },
                  { label: 'Protection', value: 'FIA-spec roll hoop' },
                  { label: 'Suspension', value: 'Double wishbone, four-wheel' },
                ]}
              />
              <SpecPanel
                className="cut-top-soft shadow-none ring-0 bg-workshop-raised text-workshop-foreground"
                onLight
                title="Powertrain"
                items={[
                  { label: 'Battery', value: 'Lithium-ion pack' },
                  { label: 'Motor', value: 'Brushless DC' },
                  { label: 'Drive', value: 'Fixed reduction to rear axle' },
                  { label: 'Cooling', value: 'Passive, ducted' },
                ]}
              />
            </div>
            {/* The widest cell in the band carries the accent glow instead of a
                raised surface, so this block is a ground rather than a box. */}
            <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(120%_100%_at_100%_0%,color-mix(in_oklch,var(--primary)_26%,transparent),transparent_65%)] p-6 sm:p-7">
              <h3 className="race-label text-workshop-muted">What the numbers mean</h3>
              <p className="mt-5 text-workshop-muted">
                We publish the architecture of the car rather than a set of performance figures,
                because a number without the test logbook behind it is a claim we have not earned.
                Every value here is something a first-year student can point at in the workshop and
                explain why it is there.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <Figure onLight className="border-workshop-foreground" value="4" caption="Subsystem crews" />
                <Figure onLight className="border-workshop-foreground" value="1" caption="Car per season" />
              </div>
              <p className="mt-8 text-sm text-workshop-muted">
                The eBaja season runs alongside the academic year, so the car has to be finished by
                the calendar rather than by the schedule.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The loudest band on the page: the club's own green, edge to edge, with
          a race number the size of the section. It sits here because this is the
          turn from what the car is to who builds it, and the subject changes. */}
      <section className="relative isolate overflow-hidden bg-brand-ground">
        <div
          aria-hidden="true"
          className="stripe-slash pointer-events-none absolute inset-0 text-brand-ground-foreground opacity-[0.07]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-40 size-[38rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand-ground-foreground)_22%,transparent),transparent)]"
        />
        <Container className="relative py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div>
              <p className="race-label text-brand-ground-foreground/80">Season after season</p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] uppercase leading-[0.94] tracking-[-0.02em] text-brand-ground-foreground">
                The car only exists because somebody welded it at 2 a.m.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-brand-ground-foreground/90">
                There is no supplier for a student-built eBaja car. Every bracket, every loom, every
                millimetre of suspension travel was decided by someone who was learning how as they
                went — and then defended it in front of the rest of the club.
              </p>
            </div>
            <div className="flex items-end gap-6 lg:justify-end">
              <p className="race-number text-[clamp(6rem,17vw,11rem)] text-brand-ground-foreground">01</p>
              <p className="race-label pb-4 text-brand-ground-foreground/80">
                One car
                <br />
                per season
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The car assembling itself as the section passes. This is the longest
          band on the page on purpose: the scroll is the machine being built. */}
      <section className="cut-top bg-background pt-20 pb-24 sm:pt-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-lg font-display text-[clamp(2.1rem,4.5vw,3rem)] uppercase">
              It does not exist until somebody builds it
            </h2>
            <p className="race-label text-muted-foreground">Scroll to assemble</p>
          </div>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A season of work, in the order it actually happens. Keep scrolling and the car goes
            together the way the crews put it together: frame, hoop, suspension, wheels, then the
            parts that make it electric.
          </p>
          <BuggyBuild className="mt-12" />
        </Container>
      </section>

      {/* Dark again: the build disciplines. */}
      <section className="cut-top-soft bg-secondary pt-20 pb-20 sm:pt-24">
        <Container>
          <h2 className="max-w-2xl font-display text-[clamp(2.1rem,4.5vw,3rem)] uppercase">
            Six sets of hands, one car
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            The club is organised the way a garage is: one crew per system, each owning its own
            drawings, its own parts and its own mistakes.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => (
                <li key={d.name} className="border-t-2 border-primary/45 pt-6">
                <d.icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.line}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Light band: the season, read as a sequence because it is one. */}
      <section className="cut-top-soft bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <h2 className="font-display text-[clamp(2.1rem,4.5vw,3rem)] uppercase">
                How a season runs
              </h2>
              <p className="mt-4 max-w-sm text-workshop-muted">
                The order matters: nothing gets welded before the rulebook has been read, and nothing
                gets driven before it has been inspected by the team.
              </p>
            </div>
            <ol className="grid gap-8 sm:grid-cols-2 lg:gap-x-12">
              {[
                ['Rules, then targets', 'The competition rulebook is read line by line and turned into the requirements the car has to meet.'],
                ['Design and review', 'Each crew models its system, presents it to the others, and takes the criticism before anything is cut.'],
                ['Fabricate and assemble', 'Frames are welded, suspension is mounted, the pack goes in, and the car stops being drawings.'],
                ['Test, break, fix', 'Shakedown runs on campus, a log of everything that failed, and time to put it right.'],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-5">
                  <span className="race-number text-[2.5rem] text-primary-ink">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase">{title}</h3>
                    <p className="mt-2 text-sm text-workshop-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Dark: the two audiences, as one split. */}
      <section className="cut-top bg-background pt-20 pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="cut-top-soft relative overflow-hidden rounded-lg bg-card p-7 sm:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_32%,transparent),transparent)]"
              />
              <h2 className="relative font-display text-2xl uppercase sm:text-3xl">If you are a first year</h2>
              <p className="relative mt-4 text-muted-foreground">
                You do not need to know how to weld, code or design anything on the day you walk in.
                You need to turn up to the workshop sessions and be willing to be taught. Most of the
                club learned every skill it has from the year above.
              </p>
              <Button asChild className="relative mt-7">
                <Link to="/team">
                  See how to join
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
            <div className="cut-top-soft relative overflow-hidden rounded-lg bg-secondary p-7 sm:p-9">
              <h2 className="relative font-display text-2xl uppercase sm:text-3xl">If you have a company</h2>
              <p className="relative mt-4 text-muted-foreground">
                Sponsorship buys materials, drivetrain components and the travel to get the car to a
                national competition. Your name goes on the car, and you get a direct line to
                students who are already building hardware you understand.
              </p>
              <Button asChild variant="outline" className="relative mt-7">
                <Link to="/sponsors">What sponsorship supports</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Closer
        title="Build something that has to work"
        body="Paperwork does not drive four hours of rough ground. Join the crew that finds out what holds together, or put your company behind the car that does it."
        actions={[
          { to: '/team', label: 'Join the crew' },
          { to: '/sponsors', label: 'Talk to us about sponsorship', variant: 'outline' },
        ]}
      />
    </PageShell>
  )
}