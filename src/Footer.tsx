import ExtContainer from '@/imports/ExtContainer-1/index'

export default function Footer({ onNavigate }: { onNavigate?: (page: 'home' | 'projects') => void }) {
  return (
    <>
      {/* Outer wrapper has no background — ExtContainer's own blue-gradient
          background shows through the 20 px padding on all four sides.
          InerContainer is 1400×684 px; (1440−1400)/2 = 20 px left/right,
          height = 684 + 40 = 724 px gives 20 px top/bottom. */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 1440, height: 724, flexShrink: 0, overflow: 'hidden' }}>
          <ExtContainer onNavigate={onNavigate} />
        </div>
      </div>

      <style>{`
        /* Nav links: About, Projects, Services & email */
        #viczuals-footer [data-name="iner container"] p[class*="text-[#e6efff]"],
        #viczuals-footer [data-name="iner container"] p[class*="text-white"][class*="Lufga:Medium"] {
          transition: color 0.2s ease, text-decoration-color 0.2s ease;
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: transparent;
          text-underline-offset: 4px;
        }
        #viczuals-footer [data-name="iner container"] p[class*="text-[#e6efff]"]:hover,
        #viczuals-footer [data-name="iner container"] p[class*="text-white"][class*="Lufga:Medium"]:hover {
          color: #ffffff !important;
          text-decoration-color: #ffffff !important;
        }

        /* Social icon buttons */
        #viczuals-footer [data-name="button"] {
          transition: background 0.2s ease, transform 0.15s ease;
          cursor: pointer;
        }
        #viczuals-footer [data-name="button"]:hover {
          background: #9ca3af !important;
          transform: scale(1.08);
        }
      `}</style>
    </>
  )
}
