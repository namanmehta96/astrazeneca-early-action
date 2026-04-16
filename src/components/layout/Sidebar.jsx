import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { iconFor } from '../shared/Icons'
import { chapters } from '../../data/content'

const navItems = chapters.filter((c) => c.nav)

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: 'linear-gradient(180deg, #830051 0%, #3C1053 100%)' }}
      className="diamond-watermark-navy relative z-30 flex h-full w-[240px] shrink-0 flex-col text-white"
    >
      <nav className="flex-1 px-3 pt-8">
        <div className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
          Chapters
        </div>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconFor(item.icon)
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.path === '/hub'}
                  className={({ isActive }) =>
                    [
                      'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-300',
                      isActive
                        ? 'bg-white text-az-magenta'
                        : 'text-white/80 hover:bg-white/10 hover:text-white',
                    ].join(' ')
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          boxShadow:
                            '0 0 0 1px rgba(245,166,35,0.55), 0 0 24px rgba(245,166,35,0.40), 0 8px 24px rgba(245,166,35,0.30)',
                        }
                      : undefined
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-active-border"
                          className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r bg-az-gold shadow-[0_0_12px_rgba(245,166,35,0.95)]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span
                        className={[
                          'font-mono text-[10px]',
                          isActive ? 'text-az-gold' : 'text-white/35',
                        ].join(' ')}
                      >
                        {item.number}
                      </span>
                      <Icon size={16} />
                      <span className="flex-1 truncate font-medium">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-white/10 px-6 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
        EDHEC Global MBA<br />
        April 2026
      </div>
    </motion.aside>
  )
}
