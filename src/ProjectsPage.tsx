import { useState } from 'react'
import imgT0 from '@/imports/HeaderVarioUi-1/c7e117527c2ae892a0b25c22975008256076a702.png'
import imgT1 from '@/imports/HeaderVarioUi-1/37e09b597a72c41cc39e6602f03aac9cc86d2bb5.png'
import imgT2 from '@/imports/HeaderVarioUi-1/978de686e9be6dd2d1143a1d8df35e1297cbab64.png'
import imgT3 from '@/imports/HeaderVarioUi-1/f0194639f4f12f3a8f013c880e2b3613d94a0837.png'
import imgT4 from '@/imports/HeaderVarioUi-1/b6eb103c90cde0ba6e1ff8e480ca72aebeba2cdc.png'
import imgT5 from '@/imports/HeaderVarioUi-1/7daa53276dcad3a8739411fa504558c184474f0c.png'
import imgT6 from '@/imports/HeaderVarioUi-1/8d7dd708c2fa16d79f1e0effd26dcaa5484f8caa.png'
import imgT7 from '@/imports/HeaderVarioUi-1/c952ad73338acb476270196f4c1880201a20425b.png'
import imgT8 from '@/imports/HeaderVarioUi-1/8fc45128409e1da62f8989634ce5d5c30d4aec8e.png'
import imgT9 from '@/imports/HeaderVarioUi-1/8c238e4621e35aa63d52b2df93471a2601c3ff12.png'

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
}

// Card 1: image 480px tall, label 40px below with 8px gap → total slot = 528px
// Card 2: image grows to fill all 528px, label fades out, radius rounds fully
// Both the height and borderRadius animate in CSS — no flex/gap hacks.
const CARD_SLOT   = 528   // constant outer height, never changes
const IMG_DEFAULT = 480   // image height in card-1 state
const IMG_EXPANDED = CARD_SLOT // image height in card-2 state

function ProjectCard({ img, name, service, duration, desc }: CardProps) {
  const [expanded, setExpanded] = useState(false)

  const ease = 'cubic-bezier(0.4, 0, 0.2, 1)'

  return (
    // Outer slot — fixed height so the grid never shifts
    <div
      onClick={() => setExpanded(v => !v)}
      style={{
        height: CARD_SLOT,
        width: 628,
        position: 'relative',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      {/* ── Image container: animates height + border-radius together ─── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: expanded ? IMG_EXPANDED : IMG_DEFAULT,
          borderRadius: '32px 32px 0 0',
          overflow: 'hidden',
          transition: `height 0.38s ${ease}`,
        }}
      >
        {/* Photo */}
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

        {/* Glassmorphism detail overlay — slides up from bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 188,
            background: 'rgba(0,0,0,0.52)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '7px 12px 0',
            opacity: expanded ? 1 : 0,
            transform: expanded ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 0.28s ${ease} ${expanded ? '0.08s' : '0s'}, transform 0.32s ${ease} ${expanded ? '0.06s' : '0s'}`,
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 40, flexShrink: 0 }}>
            <span style={{ fontFamily: "'Lufga:Medium',sans-serif", fontWeight: 500, fontSize: 20, color: '#fff', letterSpacing: '-0.8px', whiteSpace: 'nowrap' }}>
              {name}
            </span>
            <span style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, fontSize: 16, color: '#ffad08', letterSpacing: '-0.64px', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
              {service} — ({duration})
            </span>
          </div>
          <div style={{ paddingTop: 10 }}>
            <p style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, fontSize: 14, color: '#e6efff', letterSpacing: '-0.3px', lineHeight: '22px', margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {desc}
            </p>
          </div>
        </div>
      </div>

      {/* ── Below-image label (card 1) — fades out as image grows over it ─ */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 24,
          letterSpacing: '-0.96px',
          whiteSpace: 'nowrap',
          opacity: expanded ? 0 : 1,
          transition: `opacity 0.18s ${ease}`,
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontFamily: "'Lufga:Medium',sans-serif", fontWeight: 500, color: '#fff', lineHeight: '40px' }}>{name}</span>
        <span style={{ fontFamily: "'Lufga:Regular',sans-serif", fontWeight: 400, color: '#b5b5b5', lineHeight: '40px' }}>{service}</span>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const pairs: [typeof PROJECTS[0], typeof PROJECTS[0]][] = []
  for (let i = 0; i < PROJECTS.length; i += 2) {
    pairs.push([PROJECTS[i], PROJECTS[i + 1]])
  }

  return (
    <div
      id="viczuals-projects-page"
      style={{
        position: 'relative',
        width: 1440,
        background: '#000',
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 161,
          paddingBottom: 24,
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
            fontSize: 64,
            lineHeight: '70px',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '-1.92px',
            margin: 0,
            width: 622,
          }}
        >
          Our Projects
        </h1>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          alignItems: 'center',
          padding: '24px 80px 80px',
        }}
      >
        {pairs.map(([a, b], i) => (
          <div key={i} style={{ display: 'flex', gap: 24, width: '100%' }}>
            <ProjectCard {...a} />
            {b && <ProjectCard {...b} />}
          </div>
        ))}
      </div>
    </div>
  )
}
