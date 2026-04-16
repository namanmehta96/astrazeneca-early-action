import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  delay = 0,
  size = 'lg',
  accent = 'navy',
  className = '',
}) {
  const display = useCountUp(value, { decimals, duration: 1000 })

  const sizes = {
    sm: 'text-3xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl',
  }
  const tones = {
    navy:  'text-az-navy',
    red:   'text-az-red',
    sky:   'text-az-sky',
    gold:  'text-az-gold',
    white: 'text-white',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div className={`font-display font-bold tracking-tight ${sizes[size]} ${tones[accent]}`}>
        <span className="tabular-nums">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
      {label && (
        <div className="mt-2 text-sm font-mono uppercase tracking-widest text-az-muted">
          {label}
        </div>
      )}
    </motion.div>
  )
}
