import { useEffect, useState } from 'react'
import FooterContent from './FooterContent'

export default function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const apply = () => {
      setScale(Math.min(1, window.innerWidth / 1440))
    }
    apply()
    window.addEventListener('resize', apply, { passive: true })
    return () => window.removeEventListener('resize', apply)
  }, [])

  return (
    <div style={{ width: '100%', overflow: 'hidden', height: 724 * scale, display: 'flex', justifyContent: 'center' }}>
      <div
        id="viczuals-footer"
        style={{
          position: 'relative',
          width: '100%',
          height: 724,
          overflow: 'hidden',
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
        }}
      >
        <FooterContent onNavigate={onNavigate} />
      </div>
    </div>
  )
}
