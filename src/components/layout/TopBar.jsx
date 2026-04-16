import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { project } from '../../data/content'

export default function TopBar() {
  const navigate = useNavigate()

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-40 flex h-16 items-center justify-between border-b border-az-border bg-white px-8"
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          aria-label="AstraZeneca: return to home"
          className="group flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-az-gold"
        >
          <img
            src={`${import.meta.env.BASE_URL}astrazeneca-logo-png-astrazeneca-logo-astra-zeneca-4902-2.png`}
            alt="AstraZeneca"
            className="h-11 w-auto transition-opacity group-hover:opacity-80"
          />
        </button>
        <span className="mx-1 h-5 w-px bg-az-border" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-az-muted">
          EDHEC IAP · 2026
        </span>
      </div>

      <div className="hidden md:block">
        <span className="font-display text-sm italic text-az-charcoal">
          {project.title}
        </span>
      </div>

      <div className="flex items-center" />
    </motion.header>
  )
}
