import { useEffect, useState } from 'react'
import FooterContent from './FooterContent'

export default function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  const [isMobile, setIsMobile] = useState((typeof screen !== 'undefined' ? Math.min(screen.width, screen.height) < 768 : window.innerWidth < 768))

  useEffect(() => {
    const apply = () => {
      setIsMobile((typeof screen !== 'undefined' ? Math.min(screen.width, screen.height) < 768 : window.innerWidth < 768))
    }
    apply()
    window.addEventListener('resize', apply, { passive: true })
    return () => window.removeEventListener('resize', apply)
  }, [])

  return (
    <div style={{ width: '100%', overflow: 'hidden', height: 'auto', display: 'flex', justifyContent: 'center' }}>
      <div
        id="viczuals-footer"
        style={{
          position: 'relative',
          width: window.innerWidth < 1440 ? 1440 : '100%',
          height: isMobile ? 'auto' : 724,
          overflow: 'hidden',
        }}
      >
        <FooterContent onNavigate={onNavigate} isMobile={isMobile} />
      </div>
    </div>
  )
}
