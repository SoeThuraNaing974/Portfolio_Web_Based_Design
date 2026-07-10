import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const glow = glowRef.current
    const move = (e) => {
      glow.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 600, fill: 'forwards', easing: 'ease-out' },
      )
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: '50%',
        top: '30%',
        width: '480px',
        height: '480px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(129,140,248,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}
