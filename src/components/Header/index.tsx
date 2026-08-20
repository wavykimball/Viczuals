import { useState, useEffect } from 'react'
import svgPaths from '@/components/NavigationOverlay/svgPaths'
import NavOverlay from '@/components/NavigationOverlay'
import type { Page } from '@/App'

type Props = {
  onNavigate: (page: Page) => void
  currentPage: Page
}

// All three icons share viewBox, strokeWidth and caps so they feel identical in weight.
const ICON_VB = '0 0 29.1667 29.1667'
const ICON_STROKE = { stroke: 'white', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeWidth: '2.5' }

function IconPlus()   {
  return (
    <svg fill="none" height="29.1667" viewBox={ICON_VB} width="29.1667">
      {/* vertical + horizontal lines */}
      <path d="M14.5833 1.25V27.9167M27.9167 14.5833H1.25" {...ICON_STROKE} />
    </svg>
  )
}
function IconEquals() {
  return (
    <svg fill="none" height="29.1667" viewBox={ICON_VB} width="29.1667">
      {/* two horizontal bars, same stroke weight */}
      <path d="M2.5 10.083H26.667M2.5 19.083H26.667" {...ICON_STROKE} />
    </svg>
  )
}
function IconClose()  {
  return (
    <svg fill="none" height="29.1667" viewBox={ICON_VB} width="29.1667">
      {/* two diagonals crossing at centre */}
      <path d="M4.583 4.583L24.583 24.583M24.583 4.583L4.583 24.583" {...ICON_STROKE} />
    </svg>
  )
}

export default function SiteHeader({ onNavigate, currentPage }: Props) {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [hovered, setHovered]     = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [isMobile, setIsMobile]   = useState((typeof screen !== 'undefined' ? Math.min(screen.width, screen.height) < 768 : window.innerWidth < 768))

  useEffect(() => {
    const handleResize = () => setIsMobile((typeof screen !== 'undefined' ? Math.min(screen.width, screen.height) < 768 : window.innerWidth < 768))
    const onScroll = () => setScrolled(window.scrollY > 24)
    
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => { setMenuOpen(false) }, [currentPage])

  const SECTION_IDS: Record<string, string> = {
    Home: 'viczuals-page',
    About: 'about-section',
    Services: 'services-section',
    Contact: 'contact-section',
  }

  function scrollToSection(section: string) {
    if (section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const id = SECTION_IDS[section]
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handleOverlayClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement
    if (target.closest('button')) { setMenuOpen(false); return }
    const p = target.closest('p')
    if (p) {
      const text = p.textContent?.trim() ?? ''
      if (text === 'Projects') { onNavigate('projects'); setMenuOpen(false); return }
      if (currentPage !== 'home') {
        onNavigate('home')
        setTimeout(() => scrollToSection(text), 120)
      } else {
        scrollToSection(text)
      }
      setMenuOpen(false)
    }
  }

  // Which icon to show: X when open, = on hover, + otherwise
  const iconState = menuOpen ? 'close' : hovered ? 'equals' : 'plus'

  return (
    <>
      {/* ── Always-visible sticky header ─────────────────────────────────── */}
      <header
        id="viczuals-header"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 201,
          height: isMobile ? 76 : 96,
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease, height 0.35s ease',
          background: scrolled || menuOpen ? 'rgba(8, 8, 12, 0.72)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(28px) saturate(1.6) brightness(0.85)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(28px) saturate(1.6) brightness(0.85)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            width: '100%',
            padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            aria-label="Viczuals home"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
          >
            <svg fill="none" height="48" viewBox="0 0 48 48" width="48">
              <path d={svgPaths.p3bdb9620} fill="white" stroke="#E6E6E6" strokeWidth="0.363636" />
              <path d={svgPaths.p791b400} fill="black" />
              <path d={svgPaths.p20985870} fill="white" />
            </svg>
          </button>

          {/* Menu toggle — three icons crossfade */}
          <button
            onClick={() => { setMenuOpen(v => !v); setHovered(false) }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 0, width: 40, height: 40, position: 'relative', flexShrink: 0,
            }}
          >
            {(['plus', 'equals', 'close'] as const).map(key => (
              <span
                key={key}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: `translate(-50%, -50%) rotate(${iconState === key ? 0 : key === 'plus' ? -45 : 45}deg) scale(${iconState === key ? 1 : 0.6})`,
                  opacity: iconState === key ? 1 : 0,
                  transition: 'opacity 0.22s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                  display: 'flex',
                  pointerEvents: 'none',
                }}
              >
                {key === 'plus'   && <IconPlus />}
                {key === 'equals' && <IconEquals />}
                {key === 'close'  && <IconClose />}
              </span>
            ))}
          </button>
        </div>
      </header>

      {/* ── Nav overlay — single frosted layer, no competing backgrounds ─── */}
      <div
        aria-hidden={!menuOpen}
        className="nav-overlay-panel"
        style={{
          position: 'fixed',
          top: isMobile ? 76 : 96, left: 0, right: 0,
          height: 536,
          zIndex: 200,
          pointerEvents: menuOpen ? 'auto' : 'none',
          opacity: menuOpen ? 1 : 0,
          transition: 'opacity 0.3s ease, top 0.35s ease',
          /* Single glass layer — background + blur live here only */
          background: 'rgba(8, 8, 12, 0.72)',
          backdropFilter: 'blur(28px) saturate(1.6) brightness(0.85)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.6) brightness(0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
        onClick={handleOverlayClick}
      >
        <NavOverlay />
      </div>

      <style>{`
        /* Hide the import's own header row — our <header> handles it */
        .nav-overlay-panel > div > div:first-child { display: none !important; }

        /* Zero out the import's own background so only our single glass layer shows */
        .nav-overlay-panel > div { background: transparent !important; }

        /* Nav link underline hover */
        .nav-overlay-panel p[class*="text-[40px]"][class*="Lufga:Medium"] {
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 6px;
          transition: color 0.2s ease, text-decoration-color 0.2s ease;
        }
        .nav-overlay-panel p[class*="text-[40px]"][class*="Lufga:Medium"]:hover {
          color: #ffffff !important;
          text-decoration-color: #ffffff !important;
        }
      `}</style>
    </>
  )
}
