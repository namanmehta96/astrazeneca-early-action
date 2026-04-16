import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SESSION_KEY = 'az_intro_played'

export default function VideoIntro({ onFinish }) {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [exiting, setExiting] = useState(false)

  const begin = () => {
    if (started) return
    setStarted(true)
    // Defer to next frame so the <video> is mounted before we call play().
    requestAnimationFrame(() => {
      const v = videoRef.current
      if (!v) return
      v.muted = false
      v.volume = 1
      const playPromise = v.play()
      if (playPromise && typeof playPromise.catch === 'function') {
        // If audio play is still blocked for any reason, fall back to muted.
        playPromise.catch(() => {
          v.muted = true
          v.play().catch(() => {})
        })
      }
    })
  }

  const finish = () => {
    if (exiting) return
    setExiting(true)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // sessionStorage may be unavailable (private mode); proceed anyway
    }
    setTimeout(() => onFinish?.(), 600)
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] bg-black"
      aria-label="Intro"
    >
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.button
            key="splash"
            type="button"
            onClick={begin}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            aria-label="Click to begin intro"
            className="absolute inset-0 flex w-full flex-col items-center justify-center text-az-navy outline-none focus-visible:ring-2 focus-visible:ring-az-magenta/40"
            style={{ background: '#FFFFFF' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}astrazeneca-logo-png-astrazeneca-logo-astra-zeneca-4902-2.png`}
              alt="AstraZeneca"
              className="h-32 w-auto md:h-40"
            />
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-10 text-2xl font-semibold uppercase tracking-[0.22em] md:text-3xl"
              style={{ color: '#6B6B6B' }}
            >
              Click to begin
            </motion.span>
          </motion.button>
        ) : (
          <motion.div
            key="player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}AstraZeneca_x_EDHEC__Systemic_Change_720p_caption.mp4`}
              autoPlay
              playsInline
              onEnded={finish}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Skip — small, subtle, bottom-right */}
            <button
              type="button"
              onClick={finish}
              aria-label="Skip intro"
              className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur transition-all hover:border-white/70 hover:text-white"
            >
              <span>Skip</span>
              <SkipIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

VideoIntro.shouldShow = function shouldShow() {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== '1'
  } catch {
    return true
  }
}

function SkipIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  )
}
