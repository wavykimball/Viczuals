import { useEffect, useState } from 'react'
import HeaderVarioUi from '@/imports/HeaderVarioUi/index'
import SiteHeader from './SiteHeader'
import Footer from './Footer'
import ProjectsPage from './ProjectsPage'

/* ─── ticker helper ──────────────────────────────────────────────────────────
   Finds the first child of `container`, clones it alongside the original into
   a new wrapper div, and CSS animation drives it as a seamless infinite loop.
   tickerClass must be listed in the <style> below with the right animation.
*/
function initTicker(container: HTMLElement, tickerClass: string) {
  if (container.dataset.tickerDone) return
  container.dataset.tickerDone = '1'
  const inner = container.firstElementChild as HTMLElement | null
  if (!inner) return
  const clone = inner.cloneNode(true) as HTMLElement
  const wrapper = document.createElement('div')
  wrapper.className = tickerClass
  for (const el of [inner, clone] as HTMLElement[]) {
    // Reset the absolute centering Tailwind baked in (position, left, top,
    // transform AND the CSS `translate` property used by Tailwind v4).
    el.style.cssText =
      'position:relative!important;left:0!important;top:0!important;' +
      'transform:none!important;translate:none!important;' +
      'flex-shrink:0!important;height:100%!important;' +
      'align-items:center!important;align-content:normal!important;'
  }
  container.insertBefore(wrapper, inner)
  wrapper.appendChild(inner)
  wrapper.appendChild(clone)
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
      ;['viczuals-page', 'viczuals-projects-page', 'viczuals-footer'].forEach(id => {
        const el = document.getElementById(id) as HTMLElement | null
        if (el) el.style.zoom = z
      })
    }
    apply()
    window.addEventListener('resize', apply, { passive: true })
    return () => window.removeEventListener('resize', apply)
  }, [])

  /* ── Hero image ticker (Frame34 overflow-x-auto strip) ── */
  useEffect(() => {
    if (page !== 'home') return
    const strip = document.querySelector(
      '#viczuals-page .overflow-x-auto.overflow-y-clip'
    ) as HTMLElement | null
    if (strip) initTicker(strip, 'hero-ticker')
  }, [page])

  /* ── Blue band tickers (Frame58 @ 1700 px, Frame52 @ 4030 px) ── */
  useEffect(() => {
    if (page !== 'home') return
    const bands = document.querySelectorAll<HTMLElement>(
      '#viczuals-page .bg-\\[\\#085aff\\].overflow-clip'
    )
    bands.forEach(band => initTicker(band, 'brand-ticker'))
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
            style={{ position: 'relative', width: 1440, height: 5760 }}
          >
            <HeaderVarioUi />
          </div>

          {/* Spacer so the footer sits clearly below the contact section */}
          <div style={{ height: 60, width: '100%', background: '#000' }} />

          <div id="viczuals-footer" style={{ width: '100%' }}>
            <Footer />
          </div>
        </>
      )}

      {page === 'projects' && (
        <>
          <ProjectsPage />
          <div id="viczuals-footer" style={{ width: '100%' }}>
            <Footer />
          </div>
        </>
      )}

      <style>{`
        /* prevent horizontal scroll without creating a scroll container
           (overflow-x:hidden on a non-root element would break sticky) */
        body { overflow-x: clip; }

        /* ── Hide the static Figma-import header (SiteHeader replaces it) */
        #viczuals-page > div > div:last-child { display: none !important; }

        /* ── Hide the original Figma-import footer (Footer.tsx replaces it) */
        #viczuals-page [data-name="ext container"] { display: none !important; }

        /* ── Hero image ticker ──────────────────────────────────────────── */
        #viczuals-page .overflow-x-auto.overflow-y-clip { overflow: hidden !important; }
        .hero-ticker {
          display: flex !important;
          width: max-content !important;
          gap: 12px;
          animation: heroTicker 28s linear infinite;
        }
        .hero-ticker:hover { animation-play-state: paused; }
        .hero-ticker > div {
          --tw-translate-x: 0 !important;
        }
        @keyframes heroTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Blue brand-strip tickers ───────────────────────────────────── */
        .brand-ticker {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          height: 100% !important;
          width: max-content !important;
          display: flex !important;
          align-items: center !important;
          gap: 64px !important;
          animation: brandTicker 18s linear infinite;
        }
        .brand-ticker:hover { animation-play-state: paused; }
        @keyframes brandTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
