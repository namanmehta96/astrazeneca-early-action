import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

// Chapter sequence (matches data/content.js nav order). Hero is the entry screen
// and doesn't use PaginatedChapter, but lives in the order for cross-chapter nav.
// References is standalone (not paginated) but lives in the order so the arrow
// from the last Financials page advances into it.
const ORDER = [
  { id: 'hero',       path: '/' },
  { id: 'problem',    path: '/problem' },
  { id: 'market',     path: '/market' },
  { id: 'strategy',   path: '/strategy' },
  { id: 'solution',   path: '/solution' },
  { id: 'financials', path: '/financials' },
  { id: 'qa',         path: '/qa' },
  { id: 'references', path: '/references' },
]

const slideVariants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function PaginatedChapter({ chapterId, pages }) {
  const [pageIndex, setPageIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const navigate = useNavigate()
  const location = useLocation()

  const chapterIdx = ORDER.findIndex((c) => c.id === chapterId)
  const prevChapter = chapterIdx > 0 ? ORDER[chapterIdx - 1] : null
  const nextChapter = chapterIdx >= 0 && chapterIdx < ORDER.length - 1 ? ORDER[chapterIdx + 1] : null

  // Reset to first page whenever the location changes. Covers sidebar clicks
  // landing on the same chapter (pathname identical, location.key differs).
  useEffect(() => {
    setPageIndex(0)
    setDirection(1)
  }, [location.key])

  const goNext = useCallback(() => {
    setPageIndex((idx) => {
      if (idx < pages.length - 1) {
        setDirection(1)
        return idx + 1
      }
      if (nextChapter) navigate(nextChapter.path)
      return idx
    })
  }, [pages.length, nextChapter, navigate])

  const goPrev = useCallback(() => {
    setPageIndex((idx) => {
      if (idx > 0) {
        setDirection(-1)
        return idx - 1
      }
      if (prevChapter) navigate(prevChapter.path)
      return idx
    })
  }, [prevChapter, navigate])

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  const showLeft = pageIndex > 0 || !!prevChapter
  const showRight = pageIndex < pages.length - 1 || !!nextChapter

  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={pageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 380, damping: 35, mass: 0.7 }}
            className="az-scroll absolute inset-0 overflow-y-auto"
          >
            {pages[pageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {showLeft && (
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous page"
          className="group absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-az-magenta bg-white/75 text-az-magenta backdrop-blur transition-all hover:scale-110 hover:bg-az-magenta hover:text-white"
        >
          <Chevron dir="left" />
        </button>
      )}

      {showRight && (
        <button
          type="button"
          onClick={goNext}
          aria-label="Next page"
          className="group absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-az-magenta bg-white/75 text-az-magenta backdrop-blur transition-all hover:scale-110 hover:bg-az-magenta hover:text-white"
        >
          <Chevron dir="right" />
        </button>
      )}

      {pages.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2">
          {pages.map((_, i) => (
            <span
              key={i}
              className={[
                'h-2 rounded-full transition-all',
                i === pageIndex ? 'w-6 bg-az-magenta' : 'w-2 bg-az-muted/40',
              ].join(' ')}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Chevron({ dir }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  )
}
