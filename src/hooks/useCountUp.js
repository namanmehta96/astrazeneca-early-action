import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to target with ease-out-cubic.
// Respects decimals and skips animation for reduced-motion.
export function useCountUp(target, { duration = 1000, decimals = 0, start = true } = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!start) return
    if (typeof target !== 'number') return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setValue(target)
      return
    }

    startRef.current = 0
    const tick = (now) => {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(target * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
      else setValue(target)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration, start])

  const factor = Math.pow(10, decimals)
  const display = Math.round(value * factor) / factor
  return display.toFixed(decimals)
}
