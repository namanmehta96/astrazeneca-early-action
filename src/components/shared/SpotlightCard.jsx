import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Mouse-tracked spotlight gradient card.
// Pattern is 21st.dev canonical: a radial gradient at the cursor.
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(28, 43, 94, 0.12)',
  borderAccent = 'red',
  onClick,
  hoverLift = true,
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [hover, setHover] = useState(false)

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const borderTone = {
    red:  'before:bg-az-red',
    sky:  'before:bg-az-sky',
    gold: 'before:bg-az-gold',
    navy: 'before:bg-az-navy',
  }[borderAccent] || 'before:bg-az-red'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      whileHover={hoverLift ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={[
        'group relative overflow-hidden rounded-xl bg-white shadow-card',
        'before:absolute before:left-0 before:top-0 before:h-[3px] before:w-0',
        'before:transition-[width] before:duration-500 hover:before:w-full',
        borderTone,
        onClick ? 'cursor-pointer' : '',
        hover ? 'shadow-card-hover' : '',
        className,
      ].join(' ')}
      style={{
        transition: 'box-shadow 0.35s ease',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
