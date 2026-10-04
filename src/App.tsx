import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import { Meta } from '@/components/Meta'

// Routes are code-split so the first paint carries only the landing page.
const Car = lazy(() => import('@/pages/Car'))
const Team = lazy(() => import('@/pages/Team'))
const Sponsors = lazy(() => import('@/pages/Sponsors'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/* The shell — header, nav, footer — is decided for this club and lives in
   Shell; each page composes its own `main`, so nothing here wraps a second one. */
export default function App() {
  return (
    <Suspense fallback={<div className="px-gutter py-24 text-sm text-muted-foreground">Loading…</div>}>
      <Routes>
        <Route
          index
          element={
            <>
              <Meta
                title="Moksha Motorsports — electric off-road racing at IIT Gandhinagar"
                description="Moksha is the student motorsports club of IIT Gandhinagar. We design, build and race an electric off-road buggy for SAE eBaja. Join the crew or sponsor the car."
              />
              <Home />
            </>
          }
        />
        <Route
          path="car"
          element={
            <>
              <Meta
                title="The car — Moksha's electric eBaja buggy"
                description="A student-built electric off-road buggy: welded steel space frame, double wishbone suspension, a lithium-ion pack between the axles, and an independent braking circuit on each axle."
              />
              <Car />
            </>
          }
        />
        <Route
          path="team"
          element={
            <>
              <Meta
                title="The team — how Moksha is run by IIT Gandhinagar students"
                description="Six subsystem crews own the car from first sketch to final inspection. How Moksha is organised, what each crew does, and how a first-year student starts building."
              />
              <Team />
            </>
          }
        />
        <Route
          path="sponsors"
          element={
            <>
              <Meta
                title="Sponsorship — put your name on Moksha's eBaja car"
                description="Sponsorship funds the frame, the drivetrain, the tyres and the travel to a national eBaja competition. What your support pays for, how partners are recognised, and how to start a conversation."
              />
              <Sponsors />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Meta title="Not found — Moksha Motorsports" description="This page does not exist." />
              <NotFound />
            </>
          }
        />
      </Routes>
    </Suspense>
  )
}
