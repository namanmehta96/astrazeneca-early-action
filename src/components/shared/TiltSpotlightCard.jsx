import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Premium hub card:
 *  - Mouse-tracked radial spotlight
 *  - 3D tilt (rotateX/Y ±8deg, perspective 800px) with spring physics
 *  - Rotating conic glow border in AZ red (via .az-glow-border utility)
 *  - Colored shadow matching the accent
 *  - Cursor pointer + smooth shadow transition
 */
export default function TiltSpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(28, 43, 94, 0.14)',
  shadowClass = 'shadow-card hover:shadow-card-navy',
  onClick,
  maxTilt = 8,
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -200, y: -200 })

  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 220, damping: 20, mass: 0.4 })
  const sry = useSpring(ry, { stiffness: 220, damping: 20, mass: 0.4 })
  const tiltX = useTransform(srx, (v) => `${v}deg`)
  const tiltY = useTransform(sry, (v) => `${v}deg`)

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPos({ x, y })
    const px = (x / rect.width) * 2 - 1  // -1 .. 1
    const py = (y / rect.height) * 2 - 1
    ry.set(px * maxTilt)
    rx.set(-py * maxTilt)
  }

  const handleLeave = () => {
    rx.set(0)
    ry.set(0)
    setPos({ x: -200, y: -200 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
        rotateX: tiltX,
        rotateY: tiltY,
      }}
      className={[
        'group az-glow-border relative overflow-hidden rounded-2xl bg-white transition-shadow duration-300',
        'will-change-transform',
        shadowClass,
        onClick ? 'cursor-pointer' : '',
        className,
      ].join(' ')}
    >
      {/* spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      <div className="relative" style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
