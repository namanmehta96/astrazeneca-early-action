import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Document-level custom cursor. Works everywhere (sidebar, modals, canvas)
// because all events are attached to `document`, not a specific root.
// Hidden on coarse (touch) pointers automatically.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('dot')
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 560, damping: 34, mass: 0.28 })
  const sy = useSpring(y, { stiffness: 560, damping: 34, mass: 0.28 })

  useEffect(() => {
    const fine = window.matchMedia?.('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (!el) {
        setVariant('dot')
        return
      }
      const hit = el.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      )
      setVariant(hit ? 'ring' : 'dot')
    }
    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    document.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  // mix-blend-mode: difference makes the cursor auto-invert against
  // whatever's behind it: white-on-navy, navy-on-white, etc.
  return (
    <motion.div
      style={{ x: sx, y: sy, mixBlendMode: 'difference', zIndex: 99999 }}
      className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      aria-hidden
      data-cursor-root
    >
      <motion.div
        animate={
          variant === 'ring'
            ? {
                width: 44,
                height: 44,
                borderWidth: 1.5,
                backgroundColor: 'rgba(255,255,255,0)',
              }
            : {
                width: 20,
                height: 20,
                borderWidth: 0,
                backgroundColor: '#FFFFFF',
              }
        }
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        style={{ borderColor: '#FFFFFF' }}
        className="rounded-full border"
      />
    </motion.div>
  )
}
