import { motion } from 'framer-motion'

// Animated conic gradient border: 21st.dev signature effect.
// Uses a CSS mask so only the border itself gets the moving gradient.
export default function GlowBorder({
  children,
  className = '',
  color = 'red',
  radius = 12,
  thickness = 1.5,
  duration = 6,
}) {
  const gradients = {
    red:  'from-az-magenta via-az-gold to-az-magenta',
    navy: 'from-az-navy via-az-sky to-az-navy',
    gold: 'from-az-gold via-az-amber to-az-gold',
  }
  const conic = {
    red:  'conic-gradient(from 0deg, #830051, #F5A623, #830051, #830051)',
    navy: 'conic-gradient(from 0deg, #1C2B5E, #00A3E0, #1C2B5E, #1C2B5E)',
    gold: 'conic-gradient(from 0deg, #C9851D, #F5A623, #C9851D, #C9851D)',
  }[color]

  return (
    <div
      className={`relative ${className}`}
      style={{ borderRadius: radius }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: conic,
          padding: thickness,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: radius,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      />
      <div className="relative h-full w-full" style={{ borderRadius: radius }}>
        {children}
      </div>
    </div>
  )
}
