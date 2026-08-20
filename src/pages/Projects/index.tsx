import { useState, useEffect } from 'react'
import imgT0 from '@/assets/images/project_0.png'
import imgT1 from '@/assets/images/project_1.png'
import imgT2 from '@/assets/images/project_2.png'
import imgT3 from '@/assets/images/project_3.png'
import imgT4 from '@/assets/images/project_4.png'
import imgT5 from '@/assets/images/project_5.png'
import imgT6 from '@/assets/images/project_6.png'
import imgT7 from '@/assets/images/project_7.png'
import imgT8 from '@/assets/images/project_8.png'
import imgT9 from '@/assets/images/project_9.png'

const PROJECTS = [
  { img: imgT0, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT1, name: 'Mesh Gradients', service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT2, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT3, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT4, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT5, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT6, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT7, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT8, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
  { img: imgT9, name: 'Mesh Gradient',  service: 'Brand Identity', duration: '4 Weeks', desc: 'A vibrant brand identity exploration using mesh gradient techniques, blending bold colour theory with purposeful design strategy to create a visually compelling system.' },
]

type CardProps = {
  img: string
  name: string
  service: string
  duration: string
  desc: string
  isMobile?: boolean
}

function ProjectCard({ img, name, service, duration, desc, isMobile }: CardProps) {
  const [expanded, setExpanded] = useState(false)
  const ease = 'cubic-bezier(0.4, 0, 0.2, 1)'

  const IMG_DEFAULT = isMobile ? 978 : 480
  const CARD_SLOT = isMobile ? 1058 : 528
  const IMG_EXPANDED = CARD_SLOT

  return (
    <div
      onClick={() => setExpanded(v => !v)}
      style={{
        height: CARD_SLOT,
        width: isMobile ? '100%' : 628,
        position: 'relative',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: expanded ? IMG_EXPANDED : IMG_DEFAULT,
          borderRadius: isMobile ? '64px 64px 0 0' : '32px 32px 0 0',
          overflow: 'hidden',
          transition: `height 0.38s ${ease}`,
        }}
      >
        <img
          alt={name}
          src={img}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: `transform 0.38s ${ease}`,
            transform: expanded ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: isMobile ? 320 : 188,
            background: 'rgba(0,0,0,0.52)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: isMobile ? '24px 40px 0' : '7px 12px 0',
            opacity: expanded ? 1 : 0,
            transform: expanded ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.28s ${ease} ${expanded ? '0.08s' : '0s'}, transform 0.32s ${ease} ${expanded ? '0.06s' : '0s'}`,
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isMobile ? 80 : 40, flexShrink: 0 }}>
            <span style={{ fontFamily: "'Lufga:Medium',sans-serif", fontWeight: 500, fontSize: isMobile ? 40 : 20, color: '#fff', letterSpacing: '-0.8px', whiteSpace: 'nowrap' }}>
              {name}
            </span>
            <span style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, fontSize: isMobile ? 32 : 16, color: '#ffad08', letterSpacing: '-0.64px', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
              {service} — ({duration})
            </span>
          </div>
          <div style={{ paddingTop: isMobile ? 24 : 10 }}>
            <p style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, fontSize: isMobile ? 28 : 14, color: '#e6efff', letterSpacing: '-0.3px', lineHeight: isMobile ? '40px' : '22px', margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {desc}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 80 : 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: isMobile ? 48 : 24,
          letterSpacing: '-0.96px',
          whiteSpace: 'nowrap',
          opacity: expanded ? 0 : 1,
          transition: `opacity 0.18s ${ease}`,
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontFamily: "'Lufga:Medium',sans-serif", fontWeight: 500, color: '#fff', lineHeight: isMobile ? '80px' : '40px' }}>{name}</span>
        <span style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, color: '#b5b5b5', lineHeight: isMobile ? '80px' : '40px' }}>{service}</span>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pairs: [typeof PROJECTS[0], typeof PROJECTS[0]][] = []
  for (let i = 0; i < PROJECTS.length; i += 2) {
    pairs.push([PROJECTS[i], PROJECTS[i + 1]])
  }

  return (
    <div
      id="viczuals-projects-page"
      style={{
        position: 'relative',
        width: '100%',
        background: '#000',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: isMobile ? 640 : 161,
          paddingBottom: isMobile ? 80 : 24,
          position: 'relative',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: '-0.2px 0',
            borderTop: '0.2px solid rgba(230,239,255,0.2)',
            borderBottom: '0.2px solid rgba(230,239,255,0.2)',
            pointerEvents: 'none',
          }}
        />
        <h1
          style={{
            fontFamily: "'Lufga:SemiBold', sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? 120 : 64,
            lineHeight: isMobile ? '130px' : '70px',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '-1.92px',
            margin: 0,
            width: '100%',
          }}
        >
          Our Projects
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 80 : 24,
          alignItems: 'center',
          padding: isMobile ? '24px 80px 160px' : '24px 80px 80px',
          width: '100%',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        {isMobile ? (
          PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} isMobile={isMobile} />
          ))
        ) : (
          pairs.map(([a, b], i) => (
            <div key={i} style={{ display: 'flex', gap: 24, width: '100%' }}>
              <ProjectCard {...a} isMobile={isMobile} />
              {b && <ProjectCard {...b} isMobile={isMobile} />}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
