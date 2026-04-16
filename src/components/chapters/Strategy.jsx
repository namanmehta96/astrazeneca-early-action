import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PaginatedChapter from '../shared/PaginatedChapter'
import SymbolWatermark from '../shared/SymbolWatermark'

/* =========================================================
   CH 03 · STRATEGY - 10 cards (intro + 9)
   No scrolling on any card. Every card fits one swipe.
   ========================================================= */

function Card({ eyebrow, title, prompts = [], children, source }) {
  return (
    <section className="diamond-watermark relative min-h-full overflow-hidden bg-white px-10 py-10 lg:px-16 lg:py-14">
      <SymbolWatermark opacity={0.04} size={480} position={{ top: '6%', right: '-8%' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-az-magenta">
          Ch · 03 &nbsp;/&nbsp; {eyebrow}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 font-display text-3xl italic leading-[1.1] pb-[0.1em] text-az-navy md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h2>

        {prompts.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1.5 md:grid-cols-2">
            {prompts.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3 text-sm leading-snug text-az-charcoal md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-az-magenta" />
                <span>{p}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <div className="relative mt-6 flex-1 min-h-0">{children}</div>

        {source ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-az-muted">
            Source: {source}
          </p>
        ) : null}
      </div>
    </section>
  )
}

/* ---- shared glyphs ---- */

const PatientIcon = ({ size = 120, color = '#830051' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="35" r="16" stroke={color} strokeWidth="3" fill="#FFFFFF" />
    <path d="M 20 88 C 20 66 32 56 50 56 C 68 56 80 66 80 88" stroke={color} strokeWidth="3" strokeLinecap="round" fill="#FFFFFF" />
  </svg>
)

const DoctorIcon = ({ size = 120, color = '#1C2B5E' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="35" r="16" stroke={color} strokeWidth="3" fill="#FFFFFF" />
    <path d="M 20 88 C 20 66 32 56 50 56 C 68 56 80 66 80 88" stroke={color} strokeWidth="3" strokeLinecap="round" fill="#FFFFFF" />
    <path d="M 40 57 L 50 64 L 60 57" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 48 64 L 52 64 L 54 78 L 50 82 L 46 78 Z" fill={color} />
  </svg>
)

/* =========================================================
   CARD 0 · INTRO - the gap
   ========================================================= */

function Card0Intro() {
  return (
    <Card
      eyebrow="STRATEGY"
      title="Strategy"
      prompts={[
        'Two angles: patient side, doctor side',
        'Then: partnership + business model',
      ]}
      source=""
    >
      <div className="flex h-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PatientIcon size={130} />
            </motion.div>
            <div className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.32em] text-az-magenta">
              PATIENT
            </div>
          </motion.div>

          <div className="flex items-center">
            <motion.span
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-px w-20 border-t-[2px] border-dashed border-az-magenta"
            />
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-4 font-display text-3xl font-bold italic text-az-magenta md:text-4xl"
            >
              the gap
            </motion.div>
            <motion.span
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-px w-20 border-t-[2px] border-dashed border-az-magenta"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <DoctorIcon size={130} />
            </motion.div>
            <div className="mt-5 font-mono text-sm font-bold uppercase tracking-[0.32em] text-az-navy">
              DOCTOR
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="font-mono text-base font-bold uppercase tracking-[0.28em] text-az-navy md:text-lg"
          >
            PARTNERSHIP
          </motion.div>
          <div className="h-5 w-px bg-az-border" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="font-mono text-base font-bold uppercase tracking-[0.28em] text-az-gold-deep md:text-lg"
          >
            BUSINESS MODEL
          </motion.div>
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 1 · PATIENT JOURNEY - the five-week silence
   ========================================================= */

function Card1Patient() {
  const [week, setWeek] = useState(0)
  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n = n >= 7 ? 0 : n + 1
      setWeek(n > 5 ? 5 : n)
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <Card
      eyebrow="PATIENT JOURNEY"
      title="The five-week silence"
      prompts={[
        'GP checkup, something on the X-ray',
        'Phone + fax referral, then silence',
        '4-5 weeks, nobody calls',
        'Specialist starts from scratch',
      ]}
      source="ESMO NSCLC Clinical Practice Guidelines. French HAS pathway data. EDHEC Workshop 2 journey mapping."
    >
      <div className="flex h-full flex-col justify-center">
        <div className="relative grid grid-cols-[1fr_auto_1fr_auto_2fr_auto_1.2fr] items-center gap-x-2 pr-4">
          <Node color="magenta" label="GP"        sub="CHECKUP"      delay={0.1} />
          <Arrow delay={0.35} />
          <Node color="magenta" label="REFERRAL"  sub="PHONE + FAX"  delay={0.55} />
          <BrokenArrow delay={0.8} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-2 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-az-magenta/60 bg-az-magenta/5 px-6 py-6"
          >
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.32em] text-az-magenta">
              SILENCE
            </div>
            <div className="relative mt-1 h-[80px] w-[80px] md:h-[96px] md:w-[96px]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={week}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center font-display font-bold italic leading-none text-az-magenta"
                  style={{ fontSize: 'clamp(64px, 8vw, 96px)', letterSpacing: '-0.03em' }}
                >
                  {week}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.28em] text-az-magenta">
              WEEK{week === 1 ? '' : 'S'}
            </div>
          </motion.div>
          <BrokenArrow delay={1.5} />
          <Node color="gold" label="SPECIALIST" sub="FILE LOST" delay={1.7} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.7 }}
          className="mt-8 text-center font-display text-xl italic text-az-navy md:text-2xl"
        >
          No updates. No calls. File lost.
        </motion.div>

        <div className="mt-6">
          <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-az-border">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #10B981 0%, #F5A623 45%, #830051 75%, #830051 100%)',
              }}
            />
          </div>
          <div className="mt-2 grid grid-cols-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.28em]">
            <div className="text-emerald-600">NEUTRAL</div>
            <div className="text-az-gold-deep">ANXIOUS</div>
            <div className="text-az-magenta">FEARFUL</div>
            <div className="text-az-magenta">LOST</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function Node({ color, label, sub, delay = 0 }) {
  const tone =
    color === 'magenta'
      ? { border: 'border-az-magenta', text: 'text-az-magenta' }
      : color === 'gold'
      ? { border: 'border-az-gold', text: 'text-az-gold-deep' }
      : { border: 'border-az-navy', text: 'text-az-navy' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      <div className={`flex h-20 w-20 items-center justify-center rounded-full border-[3px] bg-white md:h-24 md:w-24 ${tone.border}`}>
        <div className={`text-center font-display text-sm font-bold italic ${tone.text}`}>
          {label}
        </div>
      </div>
      <div className={`mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] ${tone.text}`}>
        {sub}
      </div>
    </motion.div>
  )
}

function Arrow({ delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'left' }}
      width="52" height="12" viewBox="0 0 52 12"
      className="mx-1"
    >
      <path d="M 0 6 L 44 6" stroke="#830051" strokeWidth="2" />
      <path d="M 38 1 L 50 6 L 38 11" stroke="#830051" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  )
}

function BrokenArrow({ delay = 0 }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'left' }}
      width="52" height="12" viewBox="0 0 52 12"
      className="mx-1"
    >
      <path d="M 0 6 L 44 6" stroke="#830051" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      <path d="M 38 1 L 50 6 L 38 11" stroke="#830051" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </motion.svg>
  )
}

/* =========================================================
   CARD 2 · PHYSICIAN JOURNEY - doctor centered, chaos around
   ========================================================= */

function Card2Physician() {
  const items = [
    'Referral by fax',
    'File missing half the info',
    'Imaging on different system',
    'Manual trial search',
  ]

  return (
    <Card
      eyebrow="PHYSICIAN JOURNEY"
      title="The doctor's side"
      prompts={[
        'Referral by phone or fax',
        'File missing half the info',
        'Radiology on a separate system',
        'Manual trial searching',
      ]}
      source="Colibri-Pneumo (colibri-sante.fr). ESMO NSCLC Clinical Practice Guidelines."
    >
      <div className="flex h-full flex-col items-center justify-center">
        {/* Small doctor icon at top of visual area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <DoctorIcon size={80} />
          </motion.div>
          <div className="mt-2 font-display text-base font-bold italic text-az-navy md:text-lg">
            Pulmonologist
          </div>
        </motion.div>

        {/* 2x2 grid of equal-sized problem boxes */}
        <div className="mt-8 grid w-full max-w-[820px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {items.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center rounded-xl border-[2.5px] border-az-magenta bg-white px-6 py-5 shadow-card"
            >
              <span className="text-center font-display text-base font-bold italic text-az-magenta md:text-lg lg:text-xl">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 3a · COLIBRI DIAGRAM
   ========================================================= */

function Card3aColibri() {
  const flows = [
    { label: 'expert opinions',   color: '#830051' },
    { label: 'patient data',      color: '#1C2B5E' },
    { label: 'decision support',  color: '#F5A623' },
  ]
  const blocks = ['EXPERT NETWORK', 'REAL-WORLD OBSERVATORY', 'AI DECISION SUPPORT']

  return (
    <Card
      eyebrow="COLIBRI"
      title="COPD solved this. Lung cancer hasn't."
      prompts={[
        'Colibri connects GPs to specialists for COPD',
        'Dossiers travel with the patient',
        'Data feeds back, the system gets smarter',
        'For lung cancer: nothing like this exists',
      ]}
      source="Colibri-Pneumo (colibri-sante.fr). ESMO NSCLC Clinical Practice Guidelines."
    >
      <div className="flex h-full flex-col justify-center gap-8">
        <div className="grid grid-cols-[1.1fr_1.3fr_1fr] items-center gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border-[2.5px] border-az-navy bg-white p-5 shadow-card"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-az-navy">
              PHYSICIAN
            </div>
            <div className="mt-2 font-display text-xl italic text-az-navy md:text-2xl">
              GP <span className="mx-2 text-az-muted">+</span> Specialist
            </div>
            <div className="mt-3 text-sm leading-relaxed text-az-charcoal">
              Connected care team. One shared dossier.
            </div>
          </motion.div>

          <div className="relative flex flex-col justify-between gap-4 px-6 py-3">
            {flows.map((f, i) => (
              <div key={f.label} className="flex flex-col items-center">
                <motion.svg
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'left' }}
                  width="100%" height="16" viewBox="0 0 200 16" preserveAspectRatio="none"
                  className="w-full"
                >
                  <path d="M 0 8 L 188 8" stroke={f.color} strokeWidth="2" />
                  <path d="M 182 2 L 194 8 L 182 14" stroke={f.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                  className="mt-1.5 font-mono text-sm font-bold uppercase tracking-[0.22em] md:text-base"
                  style={{ color: f.color }}
                >
                  {f.label}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {blocks.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-lg border-[2px] border-az-magenta bg-white px-4 py-3 shadow-card"
              >
                <div className="font-display text-sm font-bold italic text-az-magenta md:text-base">
                  {b}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-center font-display text-2xl italic text-az-navy md:text-3xl"
        >
          Colibri: alive in France for COPD.{' '}
          <span className="text-az-magenta">For lung cancer: nothing exists.</span>
        </motion.div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 3b · AZ HAS THE DATA TO BUILD IT
   ========================================================= */

function Card3bData() {
  const data = [
    {
      hero: '660,000',
      heroFs: 'clamp(52px, 6vw, 84px)',
      sub: 'PATIENTS SCREENED',
      note: 'Largest AI lung screening programme in the world.',
      color: 'magenta',
    },
    {
      hero: (
        <>
          <div>BIOMARKER</div>
          <div>MAPPING</div>
        </>
      ),
      heroFs: 'clamp(30px, 3.6vw, 46px)',
      sub: 'INTERNAL KNOWLEDGE GRAPH',
      note: 'Connects patients to the treatments that work.',
      color: 'navy',
    },
    {
      hero: '$200M',
      heroFs: 'clamp(52px, 6vw, 84px)',
      sub: 'TEMPUS PARTNERSHIP',
      note: 'Data and trial matching at scale.',
      color: 'gold',
    },
  ]
  const toneMap = {
    magenta: { border: 'border-az-magenta', text: 'text-az-magenta' },
    navy:    { border: 'border-az-navy',    text: 'text-az-navy' },
    gold:    { border: 'border-az-gold',    text: 'text-az-gold-deep' },
  }

  return (
    <Card
      eyebrow="AZ DATA"
      title="AZ has the data to build it"
      prompts={[
        'AZ has the data to build the lung cancer version',
        '660K screened through the CREATE programme',
        'Biomarker intelligence maps patients to treatments',
        '$200M Tempus deal for data and trial matching',
      ]}
      source="AZ CREATE programme (660,000 screened, Qure.ai). AZ-Tempus partnership 2024 ($200M). Internal biomarker knowledge graph."
    >
      <div className="flex h-full items-center">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {data.map((d, i) => (
            <motion.div
              key={d.sub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-center rounded-2xl border-[2px] bg-white p-7 text-center shadow-card ${toneMap[d.color].border}`}
            >
              <div
                className={`font-display font-bold italic leading-[1.05] ${toneMap[d.color].text}`}
                style={{ fontSize: d.heroFs, letterSpacing: '-0.03em' }}
              >
                {d.hero}
              </div>
              <div className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-az-navy">
                {d.sub}
              </div>
              <div className="mt-3 w-full border-t border-az-border pt-3 text-sm leading-relaxed text-az-charcoal md:text-base">
                {d.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 4a · WHAT DOCTORS TRUST
   ========================================================= */

function Card4aTrust() {
  return (
    <Card
      eyebrow="WHAT DOCTORS TRUST"
      title="What doctors trust"
      prompts={[
        'European doctors follow ESMO guidelines (including UK)',
        'Tools that fight their workflow: 70%+ override rate',
        'AZ drugs already endorsed at top European level',
      ]}
      source="ESMO Clinical Practice Guidelines. CDS override rates: PMC systematic review (>70%)."
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full flex-col items-center gap-10">
          {/* Stack diagram: platform → ESMO → clinical decisions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[720px] rounded-xl border-[2px] border-az-magenta bg-white px-6 py-5 text-center shadow-card-magenta"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
              PLATFORM
            </div>
            <div className="mt-1 font-display text-xl italic text-az-navy md:text-2xl">
              routes patients into ESMO-endorsed pathways
            </div>
          </motion.div>

          {/* Down arrow */}
          <motion.svg
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ transformOrigin: 'top' }}
            width="14" height="40" viewBox="0 0 14 40"
          >
            <path d="M 7 0 L 7 32" stroke="#830051" strokeWidth="2" />
            <path d="M 1 26 L 7 36 L 13 26" stroke="#830051" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          {/* ESMO foundation */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.9 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
            className="w-full max-w-[720px] rounded-xl border-[3px] border-az-gold bg-az-gold/15 px-6 py-6 text-center shadow-card-gold"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
              THE GUIDELINES ALL EUROPEAN DOCTORS FOLLOW
            </div>
            <div
              className="mt-2 font-display font-bold italic leading-none tracking-[0.14em] text-az-gold-deep"
              style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
            >
              ESMO
            </div>
          </motion.div>

          {/* Down arrow */}
          <motion.svg
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{ transformOrigin: 'top' }}
            width="14" height="40" viewBox="0 0 14 40"
          >
            <path d="M 7 0 L 7 32" stroke="#830051" strokeWidth="2" />
            <path d="M 1 26 L 7 36 L 13 26" stroke="#830051" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="w-full max-w-[720px] rounded-xl border-[2px] border-az-navy bg-white px-6 py-5 text-center shadow-card"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-navy">
              DOCTOR DECIDES
            </div>
            <div className="mt-1 font-display text-xl italic text-az-navy md:text-2xl">
              AI flags · physician signs off · never diagnoses
            </div>
          </motion.div>
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 4b · ESMO 95+ - the big number
   ========================================================= */

function Card4bESMO() {
  const [n, setN] = useState(0)
  useEffect(() => {
    const start = Date.now()
    const dur = 1400
    const iv = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / dur)
      setN(Math.round(t * 95))
      if (t >= 1) clearInterval(iv)
    }, 30)
    return () => clearInterval(iv)
  }, [])

  return (
    <Card
      eyebrow="ESMO 2025"
      title="Already endorsed at the top European level"
      prompts={[
        'AZ presented 95+ abstracts at ESMO 2025 Berlin',
        'Including new survival data on Tagrisso',
        'Flagship lung cancer drugs already validated',
        'Foundation for everything that follows',
      ]}
      source="AstraZeneca ESMO 2025 press release. FLAURA2 Abstract LBA77. ARTEMIDE-01 Abstract 1853MO."
    >
      <div className="flex h-full flex-col items-center justify-center gap-6">
        {/* Hero number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-baseline">
            <span
              className="font-display font-bold italic leading-none text-az-magenta tabular-nums"
              style={{ fontSize: 'clamp(80px, 12vw, 140px)', letterSpacing: '-0.05em' }}
            >
              {n}
            </span>
            <span
              className="font-display font-bold italic leading-none text-az-magenta"
              style={{ fontSize: 'clamp(56px, 8vw, 100px)', letterSpacing: '-0.05em' }}
            >
              +
            </span>
          </div>
          <div className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.32em] text-az-navy md:text-sm">
            ABSTRACTS · ESMO 2025 BERLIN
          </div>
        </motion.div>

        {/* Drug label + pills */}
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-center font-mono text-xs font-bold uppercase tracking-[0.32em] text-az-gold-deep md:text-sm"
          >
            {'AZ\u2019S LUNG CANCER DRUGS'}
          </motion.div>

          <div className="mt-3 flex flex-wrap items-end justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8, type: 'spring', damping: 14 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center rounded-full bg-az-magenta px-6 py-3 shadow-card-magenta">
                <span className="font-display text-base font-bold italic tracking-wide text-white md:text-lg">
                  TAGRISSO
                </span>
              </div>
              <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-az-muted">
                FLAGSHIP · EGFR
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.8, type: 'spring', damping: 14 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center rounded-full border-[2.5px] border-az-gold bg-white px-6 py-3 shadow-card">
                <span className="font-display text-base font-bold italic tracking-wide text-az-gold-deep md:text-lg">
                  RILVEGOSTOMIG
                </span>
              </div>
              <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-az-muted">
                NEXT-GEN IMMUNOTHERAPY
              </div>
            </motion.div>
          </div>

          {/* ESMO foundation bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'center' }}
            className="mt-4 flex items-center justify-center rounded-lg border-[3px] border-az-gold bg-az-gold/10 px-8 py-3"
          >
            <span
              className="font-display font-bold italic tracking-[0.2em] text-az-gold-deep"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              ESMO
            </span>
          </motion.div>
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 5 · BLUE OCEAN STRATEGY CANVAS
   ========================================================= */

const canvasFactors = [
  { label: 'Drug Portfolio Strength' },
  { label: 'Diagnostics Ownership' },
  { label: 'Point AI Capabilities' },
  { label: 'Data Infrastructure' },
  { label: 'Screening Ecosystem Reach' },
  { label: 'Patient Pathway Coordination' },
  { label: 'Trial-to-Treatment Activation' },
]

const canvasData = {
  azToday:  [4, 2, 3, 4, 4, null, null],
  roche:    [4, 5, 4, 5, 3, null, null],
  msd:      [5, 1, 3, 3, 2, null, null],
  novartis: [4, 3, 3, 4, 2, null, null],
  azNew:    [4, 3, 3, 4, 5, 5, 5],
}

function Card5Canvas() {
  const W = 800, H = 420, padL = 70, padR = 40, padT = 50, padB = 90
  const chartW = W - padL - padR
  const chartH = H - padT - padB
  const stepX = chartW / (canvasFactors.length - 1)
  const xOf = (i) => padL + i * stepX
  const yOf = (v) => padT + ((6 - v) / 6) * chartH

  const toPath = (data) => {
    const pts = data.map((v, i) => (v === null ? null : { x: xOf(i), y: yOf(v) }))
    let d = ''
    let open = false
    pts.forEach((p) => {
      if (p === null) { open = false; return }
      d += (open ? ' L ' : ' M ') + `${p.x},${p.y}`
      open = true
    })
    return d.trim()
  }

  const lines = [
    { key: 'azToday',  color: '#1C2B5E', width: 2.5, dash: '', label: 'AstraZeneca (Today)' },
    { key: 'roche',    color: '#E07B3A', width: 2.5, dash: '', label: 'Roche' },
    { key: 'msd',      color: '#2E7D4F', width: 2.5, dash: '', label: 'MSD' },
    { key: 'novartis', color: '#4AB3E3', width: 2.5, dash: '', label: 'Novartis' },
    { key: 'azNew',    color: '#830051', width: 4,   dash: '', label: 'AZ New Strategy' },
  ]

  return (
    <Card
      eyebrow="BLUE OCEAN"
      title="Strategy Canvas"
      prompts={[
        'Red Ocean factors: drugs, diagnostics, point AI are contested',
        'Blue Ocean: coordination layer is uncontested',
        'Competitors drop off the chart at factor 5',
        'AZ New Strategy holds level 5 where nobody else plays',
      ]}
      source="Blue Ocean Strategy (Kim & Mauborgne). Competitive analysis. EDHEC team."
    >
      <div className="flex h-full flex-col justify-center">
        <div className="rounded-2xl border border-az-border bg-white p-4 shadow-card md:p-6">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full">
            {/* Y-axis labels */}
            {[0, 1, 2, 3, 4, 5, 6].map((v) => (
              <g key={v}>
                <line
                  x1={padL} y1={yOf(v)} x2={W - padR} y2={yOf(v)}
                  stroke="#E5E8EE" strokeWidth="1"
                />
                <text
                  x={padL - 12} y={yOf(v) + 4}
                  textAnchor="end" fontFamily="Montserrat" fontSize="11" fontWeight="600" fill="#9CA3AF"
                >
                  {v}
                </text>
              </g>
            ))}

            {/* X-axis labels */}
            {canvasFactors.map((f, i) => {
              const words = f.label.split(' ')
              return (
                <text
                  key={f.label}
                  x={xOf(i)} y={H - padB + 18}
                  textAnchor="middle" fontFamily="Montserrat" fontSize="9" fontWeight="700" fill="#1C2B5E"
                  style={{ letterSpacing: '0.3px' }}
                >
                  {words.map((word, wi) => (
                    <tspan key={wi} x={xOf(i)} dy={wi === 0 ? 0 : 11}>{word}</tspan>
                  ))}
                </text>
              )
            })}

            {/* Lines */}
            {lines.map((l, li) => (
              <motion.path
                key={l.key}
                d={toPath(canvasData[l.key])}
                stroke={l.color}
                strokeWidth={l.width}
                strokeDasharray={l.dash}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.3 + li * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}

            {/* Dots for all lines, skipping nulls */}
            {lines.map((l) =>
              canvasData[l.key].map((v, i) =>
                v === null ? null : (
                  <motion.circle
                    key={`${l.key}-${i}`}
                    cx={xOf(i)} cy={yOf(v)} r={l.key === 'azNew' ? 6 : 4}
                    fill={l.color}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.4, type: 'spring', damping: 12 }}
                  />
                )
              )
            )}

            {/* Y-axis title */}
            <text
              x={18} y={H / 2}
              textAnchor="middle" fontFamily="Montserrat" fontSize="10" fontWeight="700" fill="#6B7280"
              transform={`rotate(-90, 18, ${H / 2})`}
              style={{ letterSpacing: '1.5px' }}
            >
              LEVEL OF OFFERING
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {lines.map((l) => (
            <div key={l.key} className="flex items-center gap-2">
              <span
                className="inline-block h-[3px] w-6 rounded"
                style={{
                  backgroundColor: l.color,
                  ...(l.dash ? { backgroundImage: `repeating-linear-gradient(90deg, ${l.color} 0, ${l.color} 3px, transparent 3px, transparent 6px)`, backgroundColor: 'transparent' } : {}),
                }}
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: l.color }}>
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 5b · COMPETITIVE SCORING MATRIX (7 factors)
   ========================================================= */

const scoringFactors = [
  { factor: 'Drug Portfolio Strength',        azToday: 4,    roche: 4,    msd: 5,    novartis: 4,    azNew: 4 },
  { factor: 'Diagnostics Ownership',          azToday: 2,    roche: 5,    msd: 1,    novartis: 3,    azNew: 3 },
  { factor: 'Point AI Capabilities',          azToday: 3,    roche: 4,    msd: 3,    novartis: 3,    azNew: 3 },
  { factor: 'Data Infrastructure',            azToday: 4,    roche: 5,    msd: 3,    novartis: 4,    azNew: 4 },
  { factor: 'Screening Ecosystem Reach',      azToday: 4,    roche: 3,    msd: 2,    novartis: 2,    azNew: 5 },
  { factor: 'Patient Pathway Coordination',   azToday: null, roche: null, msd: null, novartis: null, azNew: 5 },
  { factor: 'Trial-to-Treatment Activation',  azToday: null, roche: null, msd: null, novartis: null, azNew: 5 },
]

const scoreDots = (n, highlight = false) => {
  if (n === null) {
    return <span className="font-mono text-[10px] uppercase tracking-wide text-az-muted">no position</span>
  }
  const filled = highlight ? 'bg-az-magenta' : 'bg-az-navy'
  const empty = 'bg-az-light'
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`h-2 w-2 rounded-full ${i <= n ? filled : empty}`} />
      ))}
    </div>
  )
}

function Card5bScoring() {
  return (
    <Card
      eyebrow="BLUE OCEAN"
      title="Competitive Scoring"
      prompts={[
        'Red Ocean factors: everyone scores similarly',
        'Blue Ocean factors: AZ jumps from 2-3 to 5',
        'This is where uncontested space lives',
      ]}
      source="Blue Ocean Strategy (Kim & Mauborgne). Competitive analysis. EDHEC team."
    >
      <div className="az-scroll overflow-x-auto rounded-2xl border border-az-border bg-white shadow-card">
        <table className="w-full min-w-[800px] border-collapse text-left">
          <thead className="bg-az-light">
            <tr>
              <th className="px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-muted">
                Factor
              </th>
              <th className="px-3 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-muted">
                AZ Today
              </th>
              <th className="px-3 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-muted">
                Roche
              </th>
              <th className="px-3 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-muted">
                MSD
              </th>
              <th className="px-3 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-muted">
                Novartis
              </th>
              <th className="px-3 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-az-magenta">
                AZ New ★
              </th>
            </tr>
          </thead>
          <tbody>
            {scoringFactors.map((row, i) => {
              const isBlueOcean = row.factor.includes('Screening') || row.factor.includes('Pathway') || row.factor.includes('Trial')
              return (
                <motion.tr
                  key={row.factor}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  className={`border-t border-az-border ${isBlueOcean ? 'bg-az-magenta/5' : ''}`}
                >
                  <td className="px-4 py-3">
                    <span className={`font-display text-sm italic ${isBlueOcean ? 'text-az-magenta font-bold' : 'text-az-navy'}`}>
                      {row.factor}
                    </span>
                  </td>
                  <td className="px-3 py-3">{scoreDots(row.azToday)}</td>
                  <td className="px-3 py-3">{scoreDots(row.roche)}</td>
                  <td className="px-3 py-3">{scoreDots(row.msd)}</td>
                  <td className="px-3 py-3">{scoreDots(row.novartis)}</td>
                  <td className="px-3 py-3">{scoreDots(row.azNew, true)}</td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-4 text-center font-display text-lg italic text-az-navy md:text-xl"
      >
        The bottom three rows are <span className="text-az-magenta font-bold">blue ocean</span> — empty space where AZ can lead.
      </motion.p>
    </Card>
  )
}

/* =========================================================
   CARD 6a · AZ + MEDIAN - the loop
   ========================================================= */

function Card6aLoop() {
  const stops = [
    { label: 'SCREEN',        sub: 'Median AI',      color: '#F5A623', angle: -90 },
    { label: 'FIND IT',       sub: 'Nodule flagged', color: '#F5A623', angle: -30 },
    { label: 'MATCH TRIAL',   sub: 'Tempus',         color: '#1C2B5E', angle: 30  },
    { label: 'TREAT',         sub: 'AZ drugs',       color: '#830051', angle: 90  },
    { label: 'DATA FEEDBACK', sub: 'Outcomes',       color: '#830051', angle: 150 },
    { label: 'IMPROVE',       sub: 'Screening',      color: '#F5A623', angle: 210 },
  ]
  const cx = 280, cy = 260, r = 190

  return (
    <Card
      eyebrow="AZ + MEDIAN"
      title="AstraZeneca + Median · the loop"
      prompts={[
        'AZ has drugs, no screening device',
        'Median has device, no drugs',
        'Tempus already works with both',
        'Together they cover the full loop',
      ]}
      source="Median Technologies press release 9 Feb 2026. Median-Tempus agreement 12 Feb 2026. AZ-Tempus 2024."
    >
      <div className="flex h-full items-center justify-center">
        <svg viewBox="0 0 560 520" className="h-auto w-full max-w-[620px]">
          <motion.circle
            cx={cx} cy={cy} r={r}
            fill="none" stroke="#830051" strokeWidth="2" strokeDasharray="4 6" opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {stops.map((s, i) => {
            const a = (s.angle * Math.PI) / 180
            const x = cx + Math.cos(a) * r
            const y = cy + Math.sin(a) * r
            return (
              <motion.g
                key={s.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, type: 'spring', damping: 14 }}
              >
                <circle cx={x} cy={y} r="58" fill="#FFFFFF" stroke={s.color} strokeWidth="3" />
                <text x={x} y={y - 2} textAnchor="middle" fontFamily="Montserrat" fontSize="14" fontWeight="700" letterSpacing="1" fill={s.color}>
                  {s.label}
                </text>
                <text x={x} y={y + 18} textAnchor="middle" fontFamily="Montserrat" fontSize="12" fontWeight="600" letterSpacing="0.5" fill="#6B7280">
                  {s.sub}
                </text>
              </motion.g>
            )
          })}

          {/* Traveling dot around loop */}
          <motion.circle
            r="9" fill="#830051"
            animate={{
              cx: Array.from({ length: 37 }, (_, i) => {
                const angle = (-90 + i * 10) * Math.PI / 180
                return cx + Math.cos(angle) * r
              }),
              cy: Array.from({ length: 37 }, (_, i) => {
                const angle = (-90 + i * 10) * Math.PI / 180
                return cy + Math.sin(angle) * r
              }),
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="Montserrat" fontSize="22" fontWeight="700" fontStyle="italic" letterSpacing="3" fill="#1C2B5E">
              THE LOOP
            </text>
            <text x={cx} y={cy + 18} textAnchor="middle" fontFamily="Montserrat" fontSize="13" fontWeight="700" letterSpacing="3" fill="#6B7280">
              FIND · MATCH · TREAT · IMPROVE
            </text>
          </motion.g>
        </svg>
      </div>
    </Card>
  )
}

/* =========================================================
   CARD 6b · WHAT EACH COMPANY BRINGS
   ========================================================= */

function Card6bBrings() {
  return (
    <Card
      eyebrow="AZ + MEDIAN"
      title="What each company brings"
      prompts={[
        'AstraZeneca brings drugs and global reach',
        'Median brings a screening device',
        'Tempus connects them - already working with both',
        'Nobody alone covers the full loop',
      ]}
      source="Median press release 9 Feb 2026. Median-Tempus agreement 12 Feb 2026. AZ-Tempus 2024. USPSTF 2021."
    >
      <div className="flex h-full items-center">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border-[2px] border-az-magenta bg-white p-6 shadow-card-magenta"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-magenta">
              ASTRAZENECA HAS
            </div>
            <ul className="mt-4 space-y-2">
              {['The drugs (Tagrisso, Imfinzi)', '660,000 patients screened', 'Global reach · top-5 oncology'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-az-magenta" />
                  <span className="font-display text-base italic text-az-navy md:text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border-[2px] border-az-gold bg-white p-6 shadow-card"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold-deep">
              MEDIAN HAS
            </div>
            <ul className="mt-4 space-y-2">
              {['AI screening tool · FDA cleared', '93% accuracy', 'Based in Sophia Antipolis'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-az-gold" />
                  <span className="font-display text-base italic text-az-navy md:text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-az-navy p-6 text-white shadow-card-navy"
          >
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-az-gold">
              TEMPUS CONNECTS THEM
            </div>
            <ul className="mt-4 space-y-2">
              {['$200M deal with AZ', 'Distributes Median\u2019s device', 'Runs trial matching'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-az-gold" />
                  <span className="font-display text-base italic text-white md:text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Card>
  )
}



/* =========================================================
   EXPORT · 10 cards
   ========================================================= */

export default function Strategy() {
  return (
    <PaginatedChapter
      chapterId="strategy"
      pages={[
        <Card0Intro      key="intro"    />,
        <Card1Patient    key="patient"  />,
        <Card2Physician  key="doctor"   />,
        <Card3aColibri   key="colibri"  />,
        <Card3bData      key="azdata"   />,
        <Card4aTrust     key="trust"    />,
        <Card4bESMO      key="esmo"     />,
        <Card5Canvas     key="canvas"   />,
        <Card5bScoring   key="scoring"  />,
        <Card6aLoop      key="loop"     />,
        <Card6bBrings    key="brings"   />,
      ]}
    />
  )
}
