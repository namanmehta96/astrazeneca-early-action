import { Suspense, lazy, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
const HeroScene = lazy(() => import('./HeroScene'))
import MagneticButton from '../shared/MagneticButton'
import { ArrowRight, ArrowDown } from '../shared/Icons'
import { hero } from '../../data/content'

export default function Hero() {
  const nav = useNavigate()
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    const onWheel = (e) => {
      setParallax((p) => Math.max(0, Math.min(400, p + e.deltaY * 0.3)))
    }
    let touchStartY = null
    const onTouchStart = (e) => {
      touchStartY = e.touches?.[0]?.clientY ?? null
    }
    const onTouchMove = (e) => {
      if (touchStartY == null) return
      const y = e.touches?.[0]?.clientY ?? touchStartY
      const delta = touchStartY - y
      touchStartY = y
      setParallax((p) => Math.max(0, Math.min(400, p + delta * 0.3)))
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-az-magenta text-white">
      {/* 3D particle sculpture with scroll parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: -parallax, willChange: 'transform' }}
        transition={{ type: 'spring', stiffness: 90, damping: 24 }}
      >
        <Suspense fallback={<div className="absolute inset-0 bg-az-magenta" />}>
          <HeroScene />
        </Suspense>
      </motion.div>

      {/* Edge vignette: keeps text legible without killing the warm glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(131,0,81,0.35) 75%, rgba(92,0,57,0.85) 100%)',
        }}
      />

      {/* Top bar: tag only (logo moves to hero center) */}
      <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-end px-10 py-7">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50"
        >
          EDHEC Global MBA · Industry Acceleration Project · 2026
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Large AstraZeneca logo */}
        <motion.img
          src={`${import.meta.env.BASE_URL}AstraZeneca-Logo.png`}
          alt="AstraZeneca"
          className="logo-white mb-12 h-auto w-auto max-w-[80vw]"
          style={{ height: 'clamp(52px, 7vw, 96px)' }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Monster headline */}
        <h1
          className="font-display italic leading-[1.2] tracking-tight text-white"
          style={{
            textShadow: '0 4px 40px rgba(10,18,48,0.7), 0 0 60px rgba(245,166,35,0.15)',
            paddingBottom: '0.15em',
          }}
        >
          {hero.headline.map((line, i) => (
            <span key={i} className="block pb-[0.15em]">
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8 + i * 0.16,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block will-change-transform"
                style={{ fontSize: 'clamp(60px, 9vw, 96px)' }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-14"
        >
          <MagneticButton
            onClick={() => nav('/problem')}
            variant="primary"
            size="xl"
            icon={ArrowRight}
          >
            {hero.cta}
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => nav('/problem')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        aria-label="Scroll to strategy"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.24em]">
          Enter
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  )
}
