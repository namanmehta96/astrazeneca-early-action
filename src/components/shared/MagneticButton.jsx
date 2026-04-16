import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Magnetic button: cursor within radius pulls the button toward it.
// Label has a secondary, slower-follow translate for subtle parallax.
export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  strength = 0.35,
  icon: Icon,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 20, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 20, mass: 0.6 })
  const lx = useTransform(sx, (v) => v * 0.5)
  const ly = useTransform(sy, (v) => v * 0.5)

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    x.set(mx * strength)
    y.set(my * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variants = {
    // Primary = brand gold, dark text (real AZ brand button treatment)
    primary: 'bg-az-gold text-[#1C1C1C] hover:bg-[#E89416]',
    secondary: 'bg-white text-az-navy border border-az-border hover:border-az-navy',
    ghost: 'bg-transparent text-white border border-white/30 hover:border-white',
  }
  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={[
        'relative inline-flex items-center justify-center gap-3 rounded-full font-medium',
        'transition-colors duration-300 will-change-transform',
        'shadow-[0_12px_30px_rgba(245,166,35,0.35)]',
        variants[variant],
        sizes[size],
        className,
      ].join(' ')}
    >
      <motion.span style={{ x: lx, y: ly }} className="inline-flex items-center gap-3">
        <span>{children}</span>
        {Icon && <Icon size={18} />}
      </motion.span>
    </motion.button>
  )
}
