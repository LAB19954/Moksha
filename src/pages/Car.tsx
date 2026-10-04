import { BatteryCharging, Compass, Gauge, ShieldCheck } from 'lucide-react'
import { Container, PageShell } from '@/components/Shell'
import { BuggySide } from '@/components/BuggySide'
import { SpecPanel } from '@/components/SpecPanel'
import { Closer } from '@/components/Closer'

const systems = [
  {
    id: 'chassis',
    icon: Compass,
    title: 'Chassis and roll hoop',
    body: 'The frame is a welded steel space frame, laid out so the driver sits between the axles and the mass of the battery stays low and central. The roll hoop is the one part of the car nobody is allowed to be casual about: it is braced, gusseted and inspected before the car is ever driven in anger, and its geometry is a fixed rulebook requirement rather than a design choice.',
    details: ['Tubular steel space frame', 'Removable rear subframe', 'Gusseted hoop with diagonal bracing', 'Serviceable floor and side panels'],
  },
  {
    id: 'suspension',
    icon: Gauge,
    title: 'Suspension and steering',
    body: 'Four wheels, four sets of unequal-length double wishbones, coilover shocks at each corner. Travel matters more than stiffness here, because the terrain the car meets in endurance is not a racing surface. The steering rack is mounted and re-shimmed until the wheels track straight and the driver can feel where the front is going.',
    details: ['Double wishbone, front and rear', 'Coilover dampers with adjustable preload', 'Rack and pinion steering', 'Tuned for travel over rough ground'],
  },
  {
    id: 'powertrain',
    icon: BatteryCharging,
    title: 'Powertrain and battery',
    body: 'An electric drivetrain removes the gearbox, the clutch and most of the vibration, and replaces them with questions about current. A lithium-ion pack feeds a brushless motor through a controller and a fixed reduction to the rear axle. The pack is mounted inside the frame, protected from the ground and the sides, and its contactors can be opened from outside the car.',
    details: ['Lithium-ion pack, low in the frame', 'Brushless DC motor', 'Single fixed-ratio reduction', 'Externally accessible isolation'],
  },
  {
    id: 'braking',
    icon: ShieldCheck,
    title: 'Braking and driver safety',
    body: 'Independent hydraulic circuits front and rear, so a failure on one axle still leaves the driver with brakes. The driver is strapped into a certified harness inside the hoop, with a fire extinguisher within reach and cut-off points that do not require the car to be moving to work. This is the system we are least willing to compromise on.',
    details: ['Independent front and rear circuits', 'Certified multi-point harness', 'Roll hoop tested before first drive', 'Marked emergency cut-off'],
  },
]

export default function Car() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-background">
        <img
          src="/images/buggy-rear-axle.webp"
          alt="Rear three-quarter view of the buggy outside the workshop block, showing the exposed double wishbone suspension, coilover shocks and the motor mounted at the rear axle."
          width="1232"
          height="615"
          className="absolute inset-0 size-full object-cover object-[58%_60%] opacity-40 lg:left-auto lg:right-0 lg:w-[58%] lg:opacity-75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,var(--background)_20%,color-mix(in_oklch,var(--background)_55%,transparent)_48%,transparent_80%)] lg:bg-[linear-gradient(95deg,var(--background)_32%,color-mix(in_oklch,var(--background)_40%,transparent)_54%,transparent_74%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/3 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_24%,transparent),transparent)] pulse-glow"
        />
        <Container className="relative py-14 sm:py-20">
          <div className="rise-in max-w-3xl">
            <p className="race-label text-primary">Car 01</p>
            <h1 className="mt-5 font-display text-[clamp(2.75rem,7.5vw,5rem)] uppercase leading-[0.94] tracking-[-0.02em] drop-shadow-[0_2px_18px_oklch(0_0_0/0.6)]">
              An electric buggy built to survive its own race
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every part of the car has one job: keep the driver safe while the machine gets over
              ground it was not designed for. Here is how the systems fit together, and what each crew
              is responsible for.
            </p>
          </div>
          <div className="relative mt-12 rounded-lg bg-card/95 p-6 shadow-raised backdrop-blur-sm sm:p-10">
            <div className="absolute right-6 top-5 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="race-label text-muted-foreground">Side elevation</span>
            </div>
            <BuggySide className="text-foreground" />
          </div>
        </Container>
      </section>

      {/* Three decisions that shaped the machine, on the accent's ground. */}
      <section className="cut-top mt-14 bg-secondary pt-20 pb-20 sm:pt-24">
        <Container>
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            Three decisions everything else follows from
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              ['A single seat, centred', 'One driver, sitting on the centreline. It halves the mass of the bodywork and puts the driver where the frame protects them best.'],
              ['Battery inside the frame', 'Electric means the heaviest component belongs low and between the axles. That choice sets the wheelbase, the floor height and the seat position.'],
              ['Travel over stiffness', 'Endurance is won by finishing. The suspension is tuned to absorb rough ground and landings instead of holding the car flat through a corner.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-border pt-6">
                <h3 className="font-display text-xl font-semibold uppercase">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The systems: an index, because this content genuinely is a list. */}
      <section className="cut-top-soft bg-background pt-20 pb-20">
        <Container>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            The systems, in order of assembly
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Nothing here is a specification we claim to have beaten a record with. It is the
            architecture of the car and the responsibilities of the crews that own each part of it.
          </p>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {systems.map((s) => (
              <article key={s.id} className="grid gap-6 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <s.icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                    <h3 id={s.id} className="font-display text-2xl uppercase">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-prose text-muted-foreground">{s.body}</p>
                </div>
                <ul className="grid content-start gap-3 self-start rounded-lg bg-card p-6 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Light ground: the build, as a datasheet, which is what it is. */}
      <section className="cut-top-soft bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
                Headline sheet
              </h2>
              <p className="mt-4 max-w-sm text-workshop-muted">
                The sheet the crews work from. Figures that only exist once a car has run a season —
                acceleration, top speed, endurance distance — are kept in the team logbook, not put
                on a website to look impressive.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <SpecPanel
                className="bg-workshop-raised"
                onLight
                title="Configuration"
                items={[
                  { label: 'Seats', value: 'One, centred' },
                  { label: 'Wheelbase', value: 'Set by the rulebook' },
                  { label: 'Drive', value: 'Rear axle' },
                  { label: 'Frame', value: 'Steel space frame' },
                ]}
              />
              <SpecPanel
                className="bg-workshop-raised"
                onLight
                title="Electrical"
                items={[
                  { label: 'Pack', value: 'Lithium-ion' },
                  { label: 'Motor', value: 'Brushless DC' },
                  { label: 'Isolation', value: 'External cut-off' },
                  { label: 'Instrumentation', value: 'Voltage, current, temperature' },
                ]}
              />
              <SpecPanel
                className="bg-workshop-raised"
                onLight
                title="Running gear"
                items={[
                  { label: 'Suspension', value: 'Double wishbone' },
                  { label: 'Damping', value: 'Coilover, adjustable' },
                  { label: 'Brakes', value: 'Independent circuits' },
                  { label: 'Wheels', value: 'Off-road, four' },
                ]}
              />
              <SpecPanel
                className="bg-workshop-raised"
                onLight
                title="Safety"
                items={[
                  { label: 'Hoop', value: 'Braced, gusseted' },
                  { label: 'Restraint', value: 'Multi-point harness' },
                  { label: 'Extinguisher', value: 'On board, reachable' },
                  { label: 'Inspection', value: 'Before every drive' },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The season, as a timeline: genuinely ordered, so it is numbered. */}
      <section className="cut-top bg-workshop pt-20 pb-20 text-workshop-foreground">
        <Container>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] uppercase">
            From a clean workshop to a running car
          </h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Recruit and read', 'A new crew forms, and the competition rulebook becomes the first document of the season.'],
              ['Design review', 'Every system is modelled and defended in front of the rest of the club.'],
              ['Cut and weld', 'The jig comes out, the frame goes together, and measurements get checked twice.'],
              ['Assemble and test', 'Powertrain in, suspension mounted, and the first slow laps on campus ground.'],
            ].map(([title, body], i) => (
              <li key={title}>
                <span className="race-number block text-[3.25rem] text-primary-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 border-t border-workshop-border pt-4 font-display text-lg font-semibold uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-workshop-muted">{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* The club's green, full width, to say the one thing the sheet cannot. */}
      <section className="relative isolate overflow-hidden bg-brand-ground">
        <div
          aria-hidden="true"
          className="stripe-slash pointer-events-none absolute inset-0 text-brand-ground-foreground opacity-[0.07]"
        />
        <Container className="relative py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <div>
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] uppercase leading-[0.96] tracking-[-0.02em] text-brand-ground-foreground">
                Fast is easy to draw. Straight is not.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-brand-ground-foreground/90">
                Nothing about this car is a surprise to the crew that built it, because every joint
                was measured, logged and argued over before the car ever moved. That is the whole
                discipline of eBaja — and the reason the same team can take it apart again.
              </p>
            </div>
            <div className="flex items-end gap-6 lg:justify-end">
              <p className="race-number text-[clamp(6rem,16vw,10rem)] text-brand-ground-foreground">01</p>
              <p className="race-label pb-4 text-brand-ground-foreground/80">
                Build
                <br />
                number
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Closer
        title="Come and look at the car"
        body="The workshop is where the club makes sense. If you are at IIT Gandhinagar and curious, the people who built this machine are the ones who will teach you how."
        actions={[
          { to: '/team', label: 'Join the crew' },
          { to: '/sponsors', label: 'Sponsor the next car', variant: 'outline' },
        ]}
      />
    </PageShell>
  )
}