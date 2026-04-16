import { useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Shell from './components/layout/Shell'
import CustomCursor from './components/shared/CustomCursor'
import VideoIntro from './components/shared/VideoIntro'

import Hero from './components/chapters/Hero'
import Problem from './components/chapters/Problem'
import Market from './components/chapters/Market'
import Strategy from './components/chapters/Strategy'
import Solution from './components/chapters/Solution'
import Financials from './components/chapters/Financials'
import References from './components/chapters/References'

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full min-h-full"
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Page><Hero /></Page>} />
        <Route path="/problem"     element={<Page><Problem /></Page>} />
        <Route path="/market"      element={<Page><Market /></Page>} />
        <Route path="/strategy"    element={<Page><Strategy /></Page>} />
        <Route path="/solution"    element={<Page><Solution /></Page>} />
        <Route path="/financials"  element={<Page><Financials /></Page>} />
        <Route path="/references"  element={<Page><References /></Page>} />
        <Route path="*"            element={<Page><Problem /></Page>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => VideoIntro.shouldShow())

  return (
    <HashRouter>
      <CustomCursor />
      {/* Site-wide grain overlay */}
      <div className="grain-overlay" aria-hidden />
      <Shell>
        <AnimatedRoutes />
      </Shell>
      <AnimatePresence>
        {showIntro && (
          <VideoIntro key="intro" onFinish={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
    </HashRouter>
  )
}
