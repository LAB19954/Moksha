import { cn } from '@/lib/utils'

/* The machine, drawn in code: a side elevation of an electric off-road single
   seater with the wheels and suspension exposed. This is the site's centrepiece
   on every entry page, so it is geometry built from tokens rather than a
   photograph of somebody else's car. */
export function BuggySide({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 400"
      role="img"
      aria-label="Side elevation of the team's electric off-road buggy, showing the exposed chassis, unequal-length suspension arms and the battery box low between the axles."
      className={cn('h-auto w-full', className)}
    >
      <defs>
        <linearGradient id="buggy-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Ground the machine sits on, so it does not float. */}
      <ellipse cx="360" cy="356" rx="270" ry="12" className="fill-current opacity-[0.10]" />

      {/* Rear frame, from the roll hoop back to the rear shock towers. */}
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

      {/* The roll hoop, with its diagonal brace. */}
      <path
        d="M244 208 300 62 356 62 402 208"
        className="stroke-current"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.92"
      />
      <path
        d="M300 62 402 208"
        className="stroke-current"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M356 62 402 208"
        className="stroke-current"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Lower rail and floor. */}
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

      {/* Seat shell. */}
      <path
        d="M300 208c-6-26 4-46 22-56l10 6c-14 14-20 32-16 50Z"
        className="fill-current opacity-30"
      />

      {/* Battery box, low and central: the dark shape that makes an eBaja
          chassis different from a petrol car. */}
      <g>
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
        <path
          d="M312 274h106"
          className="stroke-current"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.5"
        />
      </g>

      {/* Motor at the rear axle. */}
      <g className="stroke-current" strokeWidth="4" fill="none" opacity="0.75">
        <circle cx="486" cy="300" r="24" />
        <path d="M486 276v48M462 300h48" />
      </g>

      {/* Unequal-length double wishbones, front and rear. */}
      <g className="stroke-current" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round">
        <path d="M150 300 118 288M150 300 122 314M150 262 118 288" opacity="0.6" />
        <path d="M486 300 520 262M486 300 522 326M486 258 520 262" opacity="0.6" />
      </g>

      {/* Coilover shocks: rear pair, then the front pair. */}
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

      {/* Wheels: knobby rears, narrower fronts. */}
      <Wheel cx={112} cy={300} r={62} />
      <Wheel cx={534} cy={300} r={62} />

      {/* Steering column and wheel. */}
      <path d="M418 196 452 168" className="stroke-current" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      <circle cx="452" cy="168" r="14" className="fill-none stroke-current" strokeWidth="6" opacity="0.85" />

      {/* Livery: the number plate on the flank, in the accent. */}
      <g>
        <rect
          x="396"
          y="216"
          width="66"
          height="52"
          rx="4"
          className="fill-primary"
        />
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
      </g>

      {/* Underbody highlight, to give the floor somewhere to sit. */}
      <path
        d="M160 292h316"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <rect x="150" y="120" width="360" height="180" rx="10" fill="url(#buggy-body)" />
    </svg>
  )
}

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="fill-background stroke-current" strokeWidth="7" />
      <circle cx={cx} cy={cy} r={r - 16} className="fill-none stroke-current" strokeWidth="4" opacity="0.7" />
      <circle cx={cx} cy={cy} r="10" className="fill-current opacity-80" />
      {/* Tread, drawn as blocking around the rim. */}
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
