import FooterContent from './FooterContent'

export default function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div id="viczuals-footer" style={{ position: 'relative', width: 1440, height: 724, flexShrink: 0, overflow: 'hidden' }}>
        <FooterContent onNavigate={onNavigate} />
      </div>
    </div>
  )
}
