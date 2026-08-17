import HeaderVarioUi from '@/imports/HeaderVarioUi/index'

export default function App() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#000',
      }}
    >
      {/*
        The design is built at 1440 px, using absolute positioning throughout.
        We give the component a fixed intrinsic size so all positioned children
        land correctly, then scale it down on viewports narrower than 1440 px
        using CSS transform so the design remains pixel-perfect without reflow.
      */}
      <div
        style={{
          position: 'relative',
          width: 1440,
          height: 5750,
          transformOrigin: 'top left',
          /* clamp scale: full size ≥1440 px, shrink proportionally below */
          transform: 'scale(var(--page-scale, 1))',
        }}
        id="viczuals-page"
      >
        <HeaderVarioUi />
      </div>

      <style>{`
        :root {
          --page-scale: min(1, calc(100vw / 1440));
        }
        /* Shrink the outer wrapper height to match the scaled content */
        #viczuals-page {
          margin-bottom: calc((5750px * var(--page-scale)) - 5750px);
        }
      `}</style>
    </div>
  )
}
