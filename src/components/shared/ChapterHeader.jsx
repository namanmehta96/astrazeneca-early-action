import { motion } from 'framer-motion'
import TextReveal from './TextReveal'

export default function ChapterHeader({
  number,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  return (
    <header className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {number && (
          <span className="font-mono text-xs tracking-[0.22em] text-az-red">
            CH · {number}
          </span>
        )}
        {eyebrow && (
          <>
            <span className="h-px w-8 bg-az-border" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-az-muted">
              {eyebrow}
            </span>
          </>
        )}
      </motion.div>

      <TextReveal
        as="h1"
        text={title}
        delay={0.15}
        className="mt-4 font-display text-4xl italic text-az-navy md:text-5xl lg:text-6xl"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-az-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  )
}
