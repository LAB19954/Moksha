import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/* The car assembling itself.
   The machine is drawn in code, so it can be drawn in stages: each group of the
   side elevation is a build step, and the progress of the scroll through this
   section decides how many of them are on the frame. Nothing is fetched and
   nothing is a model file — the same geometry as `BuggySide`, split along the
   order a real car goes together.

   Scroll position is read in a rAF-throttled listener and written to a single
   number. Every stage derives from that number during render, so a reversal
   mid-scroll lands on the correct frame rather than replaying a queue. */

const stages = [
  {
    id: 'frame',
    label: 'Lower rail and floor',
    line: 'Two side rails, cross-braced, laid out on the jig so the wheelbase is set before anything is welded to it.',
  },
  {
    id: 'hoop',
    label: 'Roll hoop and rear frame',
    line: 'The hoop is a rulebook geometry, not a styling choice. It goes up early because everything behind it has to clear it.',
  },
  {
    id: 'suspension',
    label: 'Double wishbones and coilovers',
    line: 'Four corners of unequal-length arms, with the dampers set for travel rather than for a flat racing surface.',
  },
  {
    id: 'wheels',
    label: 'Wheels',
    line: 'Knobby rears, narrower fronts, bolted on once the arms stay put through their full travel.',
  },
  {
    id: 'pack',
    label: 'Battery and motor',
    line: 'The lithium-ion pack sits low between the axles; the motor turns the rear axle through a single fixed reduction.',
  },
  {
    id: 'cockpit',
    label: 'Seat, steering and livery',
    line: 'Seat shell, rack, harness and the number panel. The car is finished when a driver can be strapped into it safely.',
  },
] as const

/* A stage is fully drawn by the time its step is reached; the one under the
   marker is still arriving. `visible` avoids putting six identical strokes on
   the frame at once, which would only cost the compositor. */
export function BuggyBuild({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    const measure = () => {
      if (reduced.matches) {
        setProgress(1)
        return
      }
      const rect = node.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      if (travel <= 0) {
        setProgress(1)
        return
      }
      const raw = -rect.top / travel
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    reduced.addEventListener('change', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      reduced.removeEventListener('change', onScroll)
    }
  }, [])

  /* The marker advances across the six labels as the section passes. */
  const active = Math.min(stages.length - 1, Math.floor(progress * stages.length * 0.999))

  return (
    <div ref={sectionRef} className={cn('relative', className)}>
      <div className="lg:grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start lg:gap-12">
        {/* Sticky on desktop so the machine holds still while the steps pass it;
            on a phone it is simply the first thing in the column. */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative overflow-hidden rounded-lg bg-card px-3 py-5 sm:px-6 sm:py-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-2/3 -translate-y-1/2 bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_22%,transparent),transparent)]"
            />
            <p className="race-label relative text-muted-foreground">Assembly &middot; Car 01</p>
            <svg
              viewBox="0 0 720 400"
              role="img"
              aria-label="The team's electric off-road buggy assembling in stages: frame, roll hoop, suspension, wheels, battery and motor, then seat and livery."
              className="relative mt-3 h-auto w-full text-foreground"
            >
              <defs>
                <linearGradient id="build-body" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <ellipse cx="360" cy="356" rx="270" ry="12" className="fill-current opacity-[0.08]" />

              <Stage at={0} progress={progress} travel={420}>
                <path
                  d="M150 300 486 300"
                  className="stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M232 208 300 208 402 208"
                  className="stroke-current"
                  strokeWidth="7"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M232 208 232 300M402 208 402 300"
                  className="stroke-current"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.55"
                />
                <rect x="150" y="120" width="360" height="180" rx="10" fill="url(#build-body)" />
              </Stage>

              <Stage at={1} progress={progress} travel={140}>
                <path
                  d="M150 300 190 176 244 208"
                  className="stroke-current"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.9"
                />
                <path
                  d="M486 300 452 170 402 208"
                  className="stroke-current"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.9"
                />
                <path
                  d="M244 208 300 62 356 62 402 208"
                  className="stroke-current"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.92"
                />
                <path d="M300 62 402 208" className="stroke-current" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
                <path d="M356 62 402 208" className="stroke-current" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
              </Stage>

              <Stage at={2} progress={progress} travel={140}>
                <g className="stroke-current" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round">
                  <path d="M150 300 118 288M150 300 122 314M150 262 118 288" opacity="0.6" />
                  <path d="M486 300 520 262M486 300 522 326M486 258 520 262" opacity="0.6" />
                </g>
                <g>
                  <path d="M150 262 122 314" className="stroke-current" strokeWidth="7" strokeLinecap="round" />
                  <path d="M486 258 522 326" className="stroke-current" strokeWidth="7" strokeLinecap="round" />
                  <path
                    d="M150 262 122 314"
                    className="stroke-current"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="3 9"
                    opacity="0.55"
                  />
                  <path
                    d="M486 258 522 326"
                    className="stroke-current"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="3 9"
                    opacity="0.55"
                  />
                </g>
              </Stage>

              <Stage at={3} progress={progress} travel={140}>
                <Wheel cx={112} cy={300} r={62} />
                <Wheel cx={534} cy={300} r={62} />
              </Stage>

              <Stage at={4} progress={progress} travel={140}>
                <rect
                  x="290"
                  y="248"
                  width="150"
                  height="52"
                  rx="5"
                  className="fill-current opacity-[0.28] stroke-current"
                  strokeWidth="4"
                />
                <path d="M310 248v-8h14v8M406 248v-8h14v8" className="stroke-current" strokeWidth="4" fill="none" opacity="0.7" />
                <path d="M312 274h106" className="stroke-current" strokeWidth="3" strokeDasharray="8 8" opacity="0.5" />
                <g className="stroke-current" strokeWidth="4" fill="none" opacity="0.75">
                  <circle cx="486" cy="300" r="24" />
                  <path d="M486 276v48M462 300h48" />
                </g>
              </Stage>

              <Stage at={5} progress={progress} travel={140}>
                <path d="M300 208c-6-26 4-46 22-56l10 6c-14 14-20 32-16 50Z" className="fill-current opacity-30" />
                <path d="M418 196 452 168" className="stroke-current" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
                <circle cx="452" cy="168" r="14" className="fill-none stroke-current" strokeWidth="6" opacity="0.85" />
                <rect x="396" y="216" width="66" height="52" rx="4" className="fill-primary" />
                <text
                  x="429"
                  y="256"
                  textAnchor="middle"
                  className="fill-primary-foreground font-display"
                  fontSize="42"
                  fontWeight="700"
                >
                  01
                </text>
                <path
                  d="M160 292h316"
                  className="stroke-primary"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </Stage>
            </svg>

            {/* The readout: which step is on the frame, said in words as well as
                in geometry, so the sequence is legible without seeing the move. */}
            <div className="relative mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4">
              <p className="race-label text-primary">
                Step {String(active + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
              </p>
              <p className="font-display text-lg uppercase">{stages[active].label}</p>
            </div>
          </div>
        </div>

        {/* The steps. Each one is tall enough to hold its own paragraph of the
            scroll, and the spacer at the end lets the last step finish before
            the section releases. */}
        <ol className="mt-10 grid gap-8 lg:mt-24">
          {stages.map((stage, i) => (
            <li key={stage.id} className="lg:min-h-[38vh]">
              <div
                className={cn(
                  'border-l-2 pl-5 transition-colors duration-300',
                  i <= active ? 'border-primary' : 'border-border',
                )}
              >
                <p
                  className={cn(
                    'race-label transition-colors duration-300',
                    i <= active ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-2xl uppercase">{stage.label}</h3>
                <p className="mt-3 max-w-md text-muted-foreground">{stage.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* One build step. `at` is the stage's index and `travel` how much extra scroll
   it takes to arrive, in pixels of the section's own progress: the frame is on
   the ground from the start, the livery is still arriving at the end. */
function Stage({
  at,
  progress,
  travel,
  children,
}: {
  at: number
  progress: number
  travel: number
  children: React.ReactNode
}) {
  const whole = 1 / stages.length
  const start = at * whole
  const span = whole + travel / 1000
  const t = Math.min(1, Math.max(0, (progress - start) / span))

  if (at > 0 && t <= 0) return null

  return (
    <g
      style={{
        opacity: at === 0 ? 1 : t,
        transform: `translateY(${(1 - (at === 0 ? 1 : t)) * -18}px)`,
        transition: 'opacity 320ms ease-out, transform 420ms cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
    </g>
  )
}

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-card stroke-current" strokeWidth="7" />
      <circle cx={cx} cy={cy} r={r - 16} className="fill-none stroke-current" strokeWidth="4" opacity="0.7" />
      <circle cx={cx} cy={cy} r="10" className="fill-current opacity-80" />
      <g className="stroke-current" strokeWidth="6" strokeLinecap="round" opacity="0.65">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2
          const inner = r - 4
          const outer = r + 5
          return (
            <line
              key={i}
              x1={cx + Math.cos(a) * inner}
              y1={cy + Math.sin(a) * inner}
              x2={cx + Math.cos(a) * outer}
              y2={cy + Math.sin(a) * outer}
            />
          )
        })}
      </g>
    </g>
  )
}
