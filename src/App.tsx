import { useEffect, useState } from 'react'
import HomePage from '@/pages/Home'
import SiteHeader from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectsPage from '@/pages/Projects'

/* ─── ticker helper ──────────────────────────────────────────────────────────
   Finds the first child of `container`, clones it alongside the original into
   a new wrapper div, and drives it smoothly using requestAnimationFrame.
   Provides decelerated speed on hover if slowOnHover is true.
*/
function initTicker(container: HTMLElement, tickerClass: string, speed: number, slowOnHover: boolean, gap: string) {
  if (container.dataset.tickerDone) return
  container.dataset.tickerDone = '1'
  const inner = container.firstElementChild as HTMLElement | null
  if (!inner) return
  const clone = inner.cloneNode(true) as HTMLElement
  const wrapper = document.createElement('div')
  wrapper.className = tickerClass
  wrapper.style.display = 'flex'
  wrapper.style.width = 'max-content'
  wrapper.style.gap = gap
  
  for (const el of [inner, clone] as HTMLElement[]) {
    el.style.cssText =
      'position:relative!important;left:0!important;top:0!important;' +
      'transform:none!important;translate:none!important;' +
      'flex-shrink:0!important;height:100%!important;' +
      'align-items:center!important;align-content:normal!important;'
  }
  container.insertBefore(wrapper, inner)
  wrapper.appendChild(inner)
  wrapper.appendChild(clone)

  let x = 0
  let isHovered = false
  
  if (slowOnHover) {
    container.addEventListener('mouseenter', () => { isHovered = true })
    container.addEventListener('mouseleave', () => { isHovered = false })
  }
  
  let currentSpeed = speed

  const tick = () => {
    const targetSpeed = isHovered ? speed * 0.25 : speed
    // Smooth deceleration / acceleration
    currentSpeed += (targetSpeed - currentSpeed) * 0.1
    
    x -= currentSpeed
    const halfWidth = wrapper.scrollWidth / 2
    if (halfWidth > 0 && Math.abs(x) >= halfWidth) {
      x = x + halfWidth
    }
    
    wrapper.style.transform = `translateX(${x}px)`
    requestAnimationFrame(tick)
  }
  
  setTimeout(() => requestAnimationFrame(tick), 50)
}

export type Page = 'home' | 'projects'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  /* ── Zoom scaling (replaces transform: scale)
     zoom does NOT create a new containing block, so position:sticky inside
     the page works correctly — which transform:scale breaks.               */
  useEffect(() => {
    const apply = () => {
      const z = String(Math.min(1, window.innerWidth / 1440))
      ;['viczuals-header', 'viczuals-page', 'viczuals-projects-page', 'viczuals-footer'].forEach(id => {
        const el = document.getElementById(id) as HTMLElement | null
        if (el) el.style.zoom = z
      })
    }
    apply()
    const timer = setTimeout(apply, 100)
    window.addEventListener('resize', apply, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', apply)
    }
  }, [page])

  /* ── Hero image ticker (Frame34 overflow-x-auto strip) ── */
  useEffect(() => {
    if (page !== 'home') return
    const strip = document.querySelector(
      '#viczuals-page .overflow-x-auto.overflow-y-clip'
    ) as HTMLElement | null
    if (strip) initTicker(strip, 'hero-ticker', 1.2, true, '12px')
  }, [page])

  /* ── Blue band tickers (Frame58 @ 1700 px, Frame52 @ 4030 px) ── */
  useEffect(() => {
    if (page !== 'home') return
    const bands = document.querySelectorAll<HTMLElement>(
      '#viczuals-page .bg-\\[\\#085aff\\].overflow-clip'
    )
    bands.forEach(band => initTicker(band, 'brand-ticker', 1.8, false, '64px'))
  }, [page])

  /* ── Scroll to top only when entering the projects page ── */
  useEffect(() => {
    if (page === 'projects') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  function navigate(to: Page) {
    setPage(to)
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#000' }}>
      <SiteHeader onNavigate={navigate} currentPage={page} />

      {page === 'home' && (
        <>
          <div
            id="viczuals-page"
            style={{ position: 'relative', width: '100%', height: 'auto' }}
          >
            <HomePage />
          </div>

          {/* Spacer so the footer sits clearly below the contact section */}
          <div style={{ height: 100, width: '100%', background: '#000' }} />

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Footer onNavigate={navigate} />
          </div>
        </>
      )}

      {page === 'projects' && (
        <>
          <div
            id="viczuals-projects-page"
            style={{ position: 'relative', width: '100%', height: 'auto' }}
          >
            <ProjectsPage />
          </div>
          
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Footer onNavigate={navigate} />
          </div>
        </>
      )}

      <style>{`
        /* prevent horizontal scroll without creating a scroll container
           (overflow-x:hidden on a non-root element would break sticky) */
        body { overflow-x: clip; }

        /* ── Hide the static raw header (SiteHeader replaces it) */
        #viczuals-page > div > div:last-child { display: none !important; }

        /* ── Hide the original raw footer (Footer replaces it) */
        #viczuals-page [data-name="ext container"] { display: none !important; }

        /* ── Hero image ticker ──────────────────────────────────────────── */
        #viczuals-page .overflow-x-auto.overflow-y-clip { overflow: hidden !important; }
        .hero-ticker > div {
          --tw-translate-x: 0 !important;
        }

        /* ── Blue brand-strip tickers ───────────────────────────────────── */
        .brand-ticker {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  )
}
